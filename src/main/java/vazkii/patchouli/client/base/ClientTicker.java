package vazkii.patchouli.client.base;

import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiScreen;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;
import net.minecraftforge.fml.common.gameevent.TickEvent.ClientTickEvent;
import net.minecraftforge.fml.common.gameevent.TickEvent.Phase;
import net.minecraftforge.fml.common.gameevent.TickEvent.RenderTickEvent;
import vazkii.patchouli.client.book.gui.GuiBook;

public final class ClientTicker {

	public static int ticksInGame = 0;
	public static float partialTicks = 0;
	public static float delta = 0;
	public static float total = 0;

	private static void calcDelta() {
		float oldTotal = total;
		total = ticksInGame + partialTicks;
		delta = total - oldTotal;
	}

	@SubscribeEvent
	public static void renderTick(RenderTickEvent event) {
		if(event.phase == Phase.START) {
			partialTicks = event.renderTickTime;
		}

		else calcDelta();
	}

	@SubscribeEvent
	public static void clientTickEnd(ClientTickEvent event) {
		if(event.phase == Phase.END) {
			GuiScreen gui = Minecraft.getMinecraft().currentScreen;

			if(gui == null || !gui.doesGuiPauseGame() || gui instanceof GuiBook) {
				ticksInGame++;
				partialTicks = 0;
			}

			calcDelta();
		}
	}

}