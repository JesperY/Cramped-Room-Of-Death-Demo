
import { _decorator, Component, Node } from 'cc';
import { TILE_TYPE_ENUM } from '../enums';
import { ILevel } from '.';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = level1
 * DateTime = Mon May 05 2025 01:47:14 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = level1.ts
 * FileBasenameNoExtension = level1
 * URL = db://assets/levels/level1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

const mapInfo = [
    [
      {
        src: null,
        type: null,
      },
      {
        src: null,
        type: null,
      },
      {
        src: null,
        type: null,
      },
      {
        src: null,
        type: null,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT,
      },
    ],
    [
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 21,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT,
      },
    ],
    [
      {
        src: null,
        type: null,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT,
      },
    ],
    [
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 21,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT,
      },
    ],
  ];


const level: ILevel = {
    mapInfo
}

export default level
