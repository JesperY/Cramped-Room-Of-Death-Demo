
import { _decorator, Component, Layers, Node, resources, Sprite, SpriteFrame, UITransform } from 'cc';
import Levels from '../../Levels';
import { TileManager } from './TileManager';
import { createUINode } from '../../Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TileMapManager
 * DateTime = Mon May 05 2025 02:12:17 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = TileMapManager.ts
 * FileBasenameNoExtension = TileMapManager
 * URL = db://assets/Scripts/Tile/TileMapManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('TileMapManager')
export class TileMapManager extends Component {
    async init(){
        const {mapInfo} = Levels[`level${1}`];
        const spriteFrames = await this.loadRes()
        // console.log(spriteFrames)
        for (let i=0; i<mapInfo.length; i++){
            const column = mapInfo[i];
            for (let j=0; j<column.length; j++){
                const item = column[j];
                if (item.src === null || item.type === null){
                    continue
                }

                const node = createUINode()
                const imgSrc = `tile (${item.src})`
                const spriteFrame = spriteFrames.find(v=>v.name == imgSrc) || spriteFrames[0]

                const tilemanager = node.addComponent(TileManager)
                tilemanager.init(spriteFrame, i, j)

                node.setParent(this.node)

            }
        }
    }

    loadRes(){
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


