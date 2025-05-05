
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Singleton
 * DateTime = Mon May 05 2025 15:52:45 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = Singleton.ts
 * FileBasenameNoExtension = Singleton
 * URL = db://assets/Base/Singleton.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('Singleton')
export class Singleton{
    private static _instance: any = null

    static GetInstance<T>():T{
        if (this._instance === null){
            this._instance = new this()
        }

        return this._instance
    }

}

