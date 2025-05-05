
import { _decorator, Component, Node } from 'cc';
import { TileMapManager } from '../Tile/TileMapManager';
import { createUINode } from '../../Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BattleManager
 * DateTime = Mon May 05 2025 02:10:06 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = BattleManager.ts
 * FileBasenameNoExtension = BattleManager
 * URL = db://assets/Scripts/Scene/BattleManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('BattleManager')
export class BattleManager extends Component {


    start () {
        this.generateTileMap()
    }

    generateTileMap(){
        const stage = createUINode()
        stage.setParent(this.node)

        const tileMap =  createUINode()
        tileMap.setParent(stage)

        const tileMapManager = tileMap.addComponent(TileMapManager)
        tileMapManager.init()

        this.adaptPos()
    }



}


