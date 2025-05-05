
import { _decorator, Component, Node } from 'cc';
import { ITile } from '../Levels';
import { Singleton } from '../Base/Singleton';
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

@ccclass('DataManager')
export default class DataManager extends Singleton {

    static get Instance(){
        return super.GetInstance<DataManager>()
    }

    mapInfo: Array<Array<ITile>>;
    mapRowCount: number = 0;
    mapColumnCount: number = 0;
    levelIndex: number = 1;

    reset(){
        this.mapInfo = []
        this.mapRowCount = 0
        this.mapColumnCount = 0
    }

}

