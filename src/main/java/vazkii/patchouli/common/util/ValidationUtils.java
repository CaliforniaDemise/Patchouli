package vazkii.patchouli.common.util;

import com.google.common.base.Preconditions;
import com.google.common.collect.Lists;
import net.minecraft.advancements.Advancement;
import net.minecraft.advancements.AdvancementList;
import net.minecraft.advancements.AdvancementManager;
import net.minecraft.util.ResourceLocation;
import net.minecraftforge.fml.common.ObfuscationReflectionHelper;

import java.util.List;

@SuppressWarnings("deprecation")
public class ValidationUtils {

    public static AdvancementList ADVANCEMENT_LIST = ObfuscationReflectionHelper.getPrivateValue(AdvancementManager.class, null, 2);
    private static final List<Advancement> advancementList = Lists.newArrayList(ADVANCEMENT_LIST.getAdvancements());

    public static boolean isValidAdvancement(String advancement) {
        return ADVANCEMENT_LIST.getAdvancement(new ResourceLocation(advancement)) != null;
    }

    public static void validateAdvancement(String advancement) {
        if(advancement != null && !advancement.isEmpty()) {
            if(!advancementList.isEmpty())
                Preconditions.checkState(isValidAdvancement(advancement), "Invalid advancement:" + advancement);
        }
    }
}
