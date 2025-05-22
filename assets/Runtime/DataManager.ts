
import { _decorator, Component, Node } from 'cc';
import { ILevel, ITile } from '../Levels';
import { Singleton } from '../Base/Singleton';
import { TileManager } from '../Scripts/Tile/TileManager';
import { PlayerManager } from '../Scripts/Player/PlayerManager';
import { DoorManager } from '../Scripts/Door/DoorManager';
import { EnemyManager } from '../Base/EnemyManager';
import { BurstManager } from '../Scripts/Burst/BurstManager';
import { SpikeManager } from '../Scripts/Spike/SpikeManager';
import { SmokeManager } from '../Scripts/Smoke/SmokeManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DataManager
 * DateTime = Mon May 05 2025 14:17:23 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = DataManager.ts
 * FileBasenameNoExtension = DataManager
 * URL = db://assets/Runtime/DataManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

export type IRecord = Omit<ILevel, 'mapInfo'>

@ccclass('DataManager')
export default class DataManager extends Singleton {

    static get Instance(){
        return super.GetInstance<DataManager>()
    }

    mapInfo: Array<Array<ITile>>;
    mapRowCount: number = 0;
    mapColumnCount: number = 0;
    levelIndex: number = 1;
    tileInfo:Array<Array<TileManager>>
    player: PlayerManager
    enemies: Array<EnemyManager>
    door: DoorManager
    bursts: Array<BurstManager>
    spikes: Array<SpikeManager>
    smokes: Array<SmokeManager>

    records: Array<IRecord>
    reset(){
        this.mapInfo = []
        this.mapRowCount = 0
        this.mapColumnCount = 0
        this.player = null
        this.enemies = []
        this.bursts = []
        this.spikes = []
        this.smokes = []
        this.records = []
    }

}

