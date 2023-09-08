package vazkii.patchouli.client.base;

import com.google.common.base.Throwables;
import net.minecraft.advancements.Advancement;
import net.minecraft.advancements.AdvancementProgress;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.toasts.GuiToast;
import net.minecraft.client.gui.toasts.IToast;
import net.minecraft.client.multiplayer.ClientAdvancementManager;
import net.minecraft.client.network.NetHandlerPlayClient;
import net.minecraft.client.renderer.GlStateManager;
import net.minecraft.client.renderer.RenderHelper;
import net.minecraft.client.resources.I18n;
import net.minecraft.util.ResourceLocation;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;
import net.minecraftforge.fml.common.network.FMLNetworkEvent;
import vazkii.patchouli.client.book.ClientBookRegistry;
import vazkii.patchouli.common.base.PatchouliConfig;
import vazkii.patchouli.common.book.Book;
import vazkii.patchouli.common.book.BookRegistry;

import javax.annotation.Nonnull;

public class ClientAdvancements {

	public static boolean refreshOnFirstOpen = true;

	public static void setDoneAdvancements(boolean showToast, boolean reset) {
		updateLockStatus(reset);

		if (showToast && !PatchouliConfig.disableAdvancementLocking)
			BookRegistry.INSTANCE.books.values().forEach(b -> {
				if (b.popUpdated() && b.showToasts) {
					sendBookToast(b);
				}
			});
	}

	public static void updateLockStatus(boolean reset) {
		ClientBookRegistry.INSTANCE.reloadLocks(reset);
	}

	public static boolean hasDone(String advancement) {
		ResourceLocation id = new ResourceLocation(advancement);
		NetHandlerPlayClient conn = Minecraft.getMinecraft().getConnection();
		if (conn != null) {
			ClientAdvancementManager manager = conn.getAdvancementManager();
			Advancement adv = manager.getAdvancementList().getAdvancement(id);
			if (adv != null) {
				AdvancementProgress progress = getProgress(manager, adv);
				return progress != null && progress.isDone();
			}
		}
		return false;
	}

	private static AdvancementProgress getProgress(ClientAdvancementManager manager, Advancement advancement) {
		return manager.advancementToProgress.get(advancement);
	}

	@SubscribeEvent
	public static void onLogout(FMLNetworkEvent.ClientDisconnectionFromServerEvent event) {
		updateLockStatus(true);
		refreshOnFirstOpen = true;
	}

	private static void sendBookToast(Book book) {
		GuiToast toastGui = Minecraft.getMinecraft().getToastGui();
		LexiconToast toast = toastGui.getToast(LexiconToast.class, book);
		if (toast == null) {
			toastGui.add(new LexiconToast(book));
		}
	}

	public static class LexiconToast implements IToast {
		private final Book book;

		public LexiconToast(Book book) {
			this.book = book;
		}

		@Nonnull
		@Override
		public Book getType() {
			return book;
		}

		@Nonnull
		@Override
		public Visibility draw(@Nonnull GuiToast toastGui, long delta) {
			Minecraft mc = Minecraft.getMinecraft();
			mc.getTextureManager().bindTexture(TEXTURE_TOASTS);
			GlStateManager.color(1.0F, 1.0F, 1.0F);
			toastGui.drawTexturedModalRect(0, 0, 0, 32, 160, 32);

			toastGui.getMinecraft().fontRenderer.drawString(I18n.format(book.name), 30, 7, -11534256);
			toastGui.getMinecraft().fontRenderer.drawString(I18n.format("patchouli.gui.lexicon.toast.info"), 30, 17, -16777216);

			RenderHelper.enableGUIStandardItemLighting();
			toastGui.getMinecraft().getRenderItem().renderItemAndEffectIntoGUI(null, book.getBookItem(), 8, 8);

			return delta >= 5000L ? IToast.Visibility.HIDE : IToast.Visibility.SHOW;
		}

	}

}
