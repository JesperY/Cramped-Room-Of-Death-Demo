import { ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from "../../Enums"
import { EntityManager } from "../../Base/EntityManager"
import { DIRECTION_ENUM } from "../../Enums"
import { PlayerStateMachine } from "../Player/PlayerStateMachine"
import { EventManager } from "../../Runtime/EventManager"
import { _decorator } from "cc"
import { WoodenSkeletonStateMachine } from "./WoodenSkeletonStateMachine"
import DataManager from "../../Runtime/DataManager"
const { ccclass, property } = _decorator;

@ccclass('WoodenSketelonManager')
export class WoodenSketelonManager extends EntityManager {



    async init(){

        this.fsm = this.addComponent(WoodenSkeletonStateMachine)
        await this.fsm.init()
        super.init({
            x: 7,
            y: 7,
            direction: DIRECTION_ENUM.UP,
            state: ENTITY_STATE_ENUM.IDLE,
            type: ENTITY_TYPE_ENUM.PLAYER
        })

        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeDirection, this)
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this.onChangeDirection, this)
    }

    onChangeDirection(isInited:boolean = false){
        if (!DataManager.Instance.player){
            return
        }
        const {x:playerX,y:playerY} = DataManager.Instance.player
        const disX = Math.abs(this.x - playerX)
        const disY = Math.abs(this.y - playerY)

        if (disX === disY && isInited){
            return
        }

        if(playerX >= this.x && playerY < this.y){
            this.direction = disX > disY ? DIRECTION_ENUM.RIGHT : DIRECTION_ENUM.UP
        }else if(playerX >= this.x && playerY >= this.y){
            this.direction = disX > disY ? DIRECTION_ENUM.RIGHT : DIRECTION_ENUM.DOWN
        }else if(playerX < this.x && playerY < this.y){
            this.direction = disX > disY ? DIRECTION_ENUM.LEFT : DIRECTION_ENUM.UP
        }else if(playerX < this.x && playerY >= this.y){
            this.direction = disX > disY ? DIRECTION_ENUM.LEFT : DIRECTION_ENUM.DOWN
        }

    }


}
