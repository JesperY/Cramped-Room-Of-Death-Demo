import { EntityManager } from "../../Base/EntityManager"
import { ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, DIRECTION_ENUM } from "../../Enums"
import { EventManager } from "../../Runtime/EventManager"
import { _decorator } from "cc"
import { DoorStateMachine } from "./DoorStateMachine";
import DataManager from "../../Runtime/DataManager";
const { ccclass, property } = _decorator;

@ccclass('DoorManager')
export class DoorManager extends EntityManager {



    async init(){

        this.fsm = this.addComponent(DoorStateMachine)
        await this.fsm.init()
        super.init({
            x: 7,
            y: 8,
            direction: DIRECTION_ENUM.UP,
            state: ENTITY_STATE_ENUM.IDLE,
            type: ENTITY_TYPE_ENUM.DOOR
        })
        EventManager.Instance.on(EVENT_ENUM.DOOR_OPEN, this.onOpen, this)


    }
    onOpen(){
        const enemies = DataManager.Instance.enemies
        if(enemies.every(enemy => enemy.state === ENTITY_STATE_ENUM.DEATH) && this.state !== ENTITY_STATE_ENUM.OPEN){
            this.state = ENTITY_STATE_ENUM.OPEN
        }
    }

    onDestroy(){
      EventManager.Instance.off(EVENT_ENUM.DOOR_OPEN, this.onOpen)
        super.onDestroy()
    }


}
