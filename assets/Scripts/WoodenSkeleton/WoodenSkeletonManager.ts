import { ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from "../../Enums"
import { EntityManager } from "../../Base/EntityManager"
import { DIRECTION_ENUM } from "../../Enums"
import { PlayerStateMachine } from "../Player/PlayerStateMachine"
import { EventManager } from "../../Runtime/EventManager"
import { _decorator } from "cc"
import { WoodenSkeletonStateMachine } from "./WoodenSkeletonStateMachine"
import DataManager from "../../Runtime/DataManager"
const { ccclass, property } = _decorator;

@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EntityManager {



    async init(){

        this.fsm = this.addComponent(WoodenSkeletonStateMachine)
        await this.fsm.init()
        super.init({
            x: 2,
            y: 5,
            direction: DIRECTION_ENUM.UP,
            state: ENTITY_STATE_ENUM.IDLE,
            type: ENTITY_TYPE_ENUM.WOODEN_SKELETON
        })

        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeDirection, this)
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this.onChangeDirection, this)
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onAttack, this)
        EventManager.Instance.on(EVENT_ENUM.ATTACK_ENEMY, this.onDead, this)

        this.onChangeDirection(true)
    }

    onDestroy(){
        super.onDestroy()
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeDirection)
        EventManager.Instance.off(EVENT_ENUM.PLAYER_BORN, this.onChangeDirection)
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onAttack)
        EventManager.Instance.off(EVENT_ENUM.ATTACK_ENEMY, this.onDead)
    }

    onDead(id:string){
        if (this.state === ENTITY_STATE_ENUM.DEATH){
            return
        }
        if(id === this.id){
            this.state = ENTITY_STATE_ENUM.DEATH
        }
    }

    onChangeDirection(isInited:boolean = false){
        if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player){
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

    onAttack(){
        if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player){
            return
        }
        const {x:playerX,y:playerY, state:playerState} = DataManager.Instance.player
        if((this.x === playerX && Math.abs(this.y - playerY) <= 1) || (this.y === playerY && Math.abs(this.x - playerX) <= 1) && playerState !== ENTITY_STATE_ENUM.DEATH){
            this.state = ENTITY_STATE_ENUM.ATTACK
            EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH)
        }else{
            this.state = ENTITY_STATE_ENUM.IDLE
        }
    }
}
