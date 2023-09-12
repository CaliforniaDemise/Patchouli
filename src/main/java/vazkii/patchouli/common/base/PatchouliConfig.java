package vazkii.patchouli.common.base;

import it.unimi.dsi.fastutil.objects.Object2BooleanOpenHashMap;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.common.config.Config;
import net.minecraftforge.common.config.Config.Comment;
import net.minecraftforge.common.config.Config.Name;
import net.minecraftforge.common.config.ConfigManager;
import net.minecraftforge.fml.client.event.ConfigChangedEvent;
import net.minecraftforge.fml.common.Loader;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;

import java.util.Locale;
import java.util.Map;

@Config(modid = Patchouli.MOD_ID)
public class PatchouliConfig {

	@Name("Disable Advancement Locking")
	@Comment("Set this to true to disable advancement locking and make all entries visible at all times\nConfig Flag: advancements_disabled")
	public static boolean disableAdvancementLocking = false;
	
	@Name("Testing Mode")
	@Comment("Enable testing mode. By default this doesn't do anything, but you can use the config flag in your books if you want.\nConfig Flag: testing_mode")
	public static boolean testingMode = false;
	
	@Name("Inventory Button Book")
	@Comment("Set this to the ID of a book to have it show up in players' inventories, replacing the recipe book.")
	public static String inventoryButtonBook = "";

	@Name("Enable reload on first book open")
	@Comment("Enable if you experience problems with Patchouli not seeing advancements in books.")
	public static boolean enableFirstOpenReload = false;

	@Name("Override Triumph advancement visibility")
	@Comment("If Triumph is installed, hidden advancements are not synced properly, breaking gating entries with them.\n" +
			"If this is set to true, advancements without display info (missing an icon, name or description) will be detected and synced if they are completed.")
	public static boolean triumphOverride = true;

	private static final Map<String, Boolean> flags = new Object2BooleanOpenHashMap<>();

	public static void preInit() {
		MinecraftForge.EVENT_BUS.register(ChangeListener.class);
	}
	
	public static boolean getConfigFlag(String name) {
		if(name.startsWith("&"))
			return getConfigFlagAND(name.replaceAll("[&|]", "").split(","));
		if(name.startsWith("|"))
			return getConfigFlagOR(name.replaceAll("[&|]", "").split(","));

		boolean target = true;
		if(name.startsWith("!")) {
			name = name.substring(1);
			target = false;
		}

		name = name.trim().toLowerCase(Locale.ENGLISH);

		switch (name) {
			case "debug": return target == Patchouli.debug;
			case "advancements_disabled": return target == disableAdvancementLocking;
			case "testing_mode": return target == testingMode;
			default: break;
		}

		if (name.startsWith("mod:")) {
			return target == Loader.isModLoaded(name.substring(4));
		}
		else {
			Boolean value = flags.get(name);
			if (value == null) return false;
			return target == value;
		}
	}
	
	public static boolean getConfigFlagAND(String[] tokens) {
		for(String s : tokens)
			if(!getConfigFlag(s))
				return false;
		
		return true;
	}
	
	public static boolean getConfigFlagOR(String[] tokens) {
		for(String s : tokens)
			if(getConfigFlag(s))
				return true;
		
		return false;
	}

	public static void setFlag(String flag, boolean value) {
		flags.put(flag, value);
	}

	public static class ChangeListener {

		@SubscribeEvent
		public static void onConfigChanged(ConfigChangedEvent.OnConfigChangedEvent eventArgs) {
			if(eventArgs.getModID().equals(Patchouli.MOD_ID)) {
	            ConfigManager.sync(Patchouli.MOD_ID, Config.Type.INSTANCE);
	            Patchouli.proxy.requestBookReload();
			}
		}
	}
}
