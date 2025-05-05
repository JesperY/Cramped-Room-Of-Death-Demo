
import { _decorator, Component, Layers, Node, Sprite, SpriteFrame, UITransform } from 'cc';
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
    init(spriteFrame: SpriteFrame, i: number, j: number){

        const sprite = this.addComponent(Sprite)
        sprite.spriteFrame = spriteFrame

        const transform = this.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH, TILE_HEIGHT)

        this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT)

    }
}
