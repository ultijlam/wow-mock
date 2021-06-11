import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface ZoneAbilityInfo {
    zoneAbilityID: number;
    uiPriority: number;
    spellID: number;
    textureKit: string;
    tutorialText: string | undefined;
}
export const C_ZoneAbility = {
    GetActiveAbilities: (): LuaArray<ZoneAbilityInfo> => {
        return {} as any;
    },
};
