
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { TILE_TYPE_ENUM } from '../Enums';
import { ILevel } from '.';

/**
 * Predefined variables
 * Name = level2
 * DateTime = Tue May 06 2025 00:32:49 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = level2.ts
 * FileBasenameNoExtension = level2
 * URL = db://assets/Levels/level2.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

const mapInfo = [
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
        src: 21,
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
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
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
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 20,
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
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
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
        src: 20,
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
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
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
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 22,
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
