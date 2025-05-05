
/**
 * Predefined variables
 * Name = index_ys
 * DateTime = Mon May 05 2025 01:56:36 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = index.ys.ts
 * FileBasenameNoExtension = index.ys
 * URL = db://assets/levels/index.ys.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
import { TILE_TYPE_ENUM } from "../enums";
import level1 from "./level1";

export interface ITile{

    src: number | null,
    type: TILE_TYPE_ENUM | null,

}

export interface ILevel{
    mapInfo: Array<Array<ITile>>
}

const levels: Record<string, ILevel> = {
    level1,
}

export default levels
