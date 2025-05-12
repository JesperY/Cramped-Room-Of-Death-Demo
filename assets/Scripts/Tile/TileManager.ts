
import { _decorator, Component, Layers, Node, Sprite, SpriteFrame, UITransform } from 'cc';
import { TILE_TYPE_ENUM } from '../../Enums';
const { ccclass, property } = _decorator;

export const TILE_WIDTH = 55
export const TILE_HEIGHT = 55
/**
 * Predefined variables
 * Name = TileManager
 * DateTime = Mon May 05 2025 10:14:16 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = TileManager.ts
 * FileBasenameNoExtension = TileManager
 * URL = db://assets/Scripts/Tile/TileManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('TileManager')
export class TileManager extends Component {
    type:TILE_TYPE_ENUM
    movable:boolean
    turnable:boolean
    init(spriteFrame: SpriteFrame, i: number, j: number, type: TILE_TYPE_ENUM){
        this.type = type
        if(type == TILE_TYPE_ENUM.FLOOR){
            this.movable = true
            this.turnable = true
        }else if(type == TILE_TYPE_ENUM.WALL_ROW || type == TILE_TYPE_ENUM.WALL_COLUMN
            || type == TILE_TYPE_ENUM.WALL_LEFT_TOP || type == TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
            || type == TILE_TYPE_ENUM.WALL_RIGHT_TOP || type == TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
        ){
            this.turnable = false
            this.movable = false
        }else if(type == TILE_TYPE_ENUM.CLIFF_LEFT || type == TILE_TYPE_ENUM.CLIFF_CENTER || type == TILE_TYPE_ENUM.CLIFF_RIGHT){
            this.turnable = true
            this.movable = false
        }


        const sprite = this.addComponent(Sprite)
        sprite.spriteFrame = spriteFrame

        const transform = this.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH, TILE_HEIGHT)

        this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT)

    }
}
