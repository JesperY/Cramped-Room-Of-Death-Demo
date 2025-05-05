/**
 * Predefined variables
 * Name = index
 * DateTime = Mon May 05 2025 01:55:19 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = index.ts
 * FileBasenameNoExtension = index
 * URL = db://assets/Enums/index.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

export enum TILE_TYPE_ENUM{
    WALL_ROW = 'WALL_ROW',
    WALL_COLUMN = 'WALL_COLUMN',
    WALL_LEFT_TOP = 'WALL_LEFT_TOP',
    WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
    WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
    WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
    FLOOR = 'FLOOR',
    CLIFF_LEFT = 'CLIFF_LEFT',
    CLIFF_CENTER = 'CLIFF_CENTER',
    CLIFF_RIGHT = 'CLIFF_RIGHT'
}

export enum EVENT_ENUM{
    NEXT_LEVEL = 'NEXT_LEVEL'
}
