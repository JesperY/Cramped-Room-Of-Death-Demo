
import { _decorator, Component, Node } from 'cc';
import { Singleton } from '../Base/Singleton';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EventManager
 * DateTime = Mon May 05 2025 17:14:28 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = EventManager.ts
 * FileBasenameNoExtension = EventManager
 * URL = db://assets/Runtime/EventManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

interface IItem{
    func: Function
    ctx: unknown
}

@ccclass('EventManager')
export class EventManager extends Singleton {

    static get Instance(){
        return super.GetInstance<EventManager>()
    }

    private eventDic: Map<string, Array<IItem>> = new Map()

    on(eventName: string, func: Function, ctx: unknown){
        if (this.eventDic.has(eventName)){
            this.eventDic.get(eventName).push({func, ctx})
        }else{
            this.eventDic.set(eventName, [{func, ctx}])
        }

    }

    off(eventName: string, func: Function){
        if (this.eventDic.has(eventName)){
            const index = this.eventDic.get(eventName).findIndex(i => i.func === func)
            if (index > -1){
                this.eventDic.get(eventName).splice(index, 1)
            }
        }
    }

    emit(eventName: string, ...args: unknown[]){
        if (this.eventDic.has(eventName)){
            this.eventDic.get(eventName).forEach(({func, ctx}) => {
                ctx?func.apply(ctx, args) : func(...args)
            })
        }
    }

    clear(){
        this.eventDic.clear()
    }
}

