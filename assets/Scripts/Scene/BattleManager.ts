
import { _decorator, Component, Node } from 'cc';
import { TileMapManager } from '../Tile/TileMapManager';
import { createUINode } from '../../Utils';
const { ccclass, property } = _decorator;
import levels, { ILevel } from '../../Levels';
import DataManager from '../../Runtime/DataManager';
import { TILE_HEIGHT, TILE_WIDTH } from '../Tile/TileManager';
import { EventManager } from '../../Runtime/EventManager';
import { EVENT_ENUM } from '../../Enums';
import { PlayerManager } from '../Player/PlayerManager';
import { WoodenSkeletonManager } from '../WoodenSkeleton/WoodenSkeletonManager';
import { DoorManager } from '../Door/DoorManager';

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

    level: ILevel
    stage: Node

    onLoad(){
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL, this.nextLevel, this)
    }

    onDestroy(){
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL, this.nextLevel)
    }

    start () {
        this.generateStage()
        this.initLevel()
    }

    initLevel(){
        const level = levels[`level${DataManager.Instance.levelIndex}`]
        if (level){
            this.clearWorld()
            this.level = level
            DataManager.Instance.mapInfo = this.level.mapInfo
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0
            this.generateTileMap()
            this.generatePlayer()
            this.generateEnemies()
            this.generateDoor()
        }
    }

    nextLevel(){
        DataManager.Instance.levelIndex++
        this.initLevel()

    }

    clearWorld(){
        this.stage.destroyAllChildren()
        DataManager.Instance.reset()
    }

    async generateDoor(){
        const door = createUINode()
        door.setParent(this.stage)
        const doorManager = door.addComponent(DoorManager)
        await doorManager.init()
        DataManager.Instance.door = doorManager
    }
    async generatePlayer(){
        const player = createUINode()
        player.setParent(this.stage)
        const playerManager = player.addComponent(PlayerManager)
        await playerManager.init()
        DataManager.Instance.player = playerManager
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_BORN, true)
    }

    generateStage(){
        this.stage = createUINode()
        this.stage.setParent(this.node)
    }

    async generateTileMap(){

        const tileMap =  createUINode()
        tileMap.setParent(this.stage)

        const tileMapManager = tileMap.addComponent(TileMapManager)
        await tileMapManager.init()

        this.adaptPos()
    }

    async generateEnemies(){
        const enemy = createUINode()
        enemy.setParent(this.stage)
        const woodenSkeletonManager = enemy.addComponent(WoodenSkeletonManager)
        await woodenSkeletonManager.init()
        DataManager.Instance.enemies.push(woodenSkeletonManager)
    }

    adaptPos(){
        const {mapRowCount, mapColumnCount} = DataManager.Instance
        const disX = TILE_WIDTH  * mapRowCount / 2
        const disY = TILE_HEIGHT * mapColumnCount / 2 + 150
        this.stage.setPosition(-disX, disY)
    }


}


