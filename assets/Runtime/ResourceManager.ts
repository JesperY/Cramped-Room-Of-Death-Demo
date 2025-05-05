
import { _decorator, Component, Node, resources, SpriteFrame } from 'cc';
import { Singleton } from '../Base/Singleton';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ResourceManager
 * DateTime = Mon May 05 2025 16:01:39 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = ResourceManager.ts
 * FileBasenameNoExtension = ResourceManager
 * URL = db://assets/Runtime/ResourceManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('ResourceManager')
export default class ResourceManager extends Singleton {

    static get Instance(){
        return super.GetInstance<ResourceManager>()
    }

    loadDir(path: string, type: typeof SpriteFrame = SpriteFrame){
        return new Promise<SpriteFrame[]>((resolve, reject)=>{
            resources.loadDir("texture/tile/tile", SpriteFrame, function(err, assets){
                if(err){
                    reject(err)
                    return
                }

                resolve(assets)
            })
        })
    }

}

