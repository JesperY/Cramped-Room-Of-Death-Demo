import { EntityManager } from "../../Base/EntityManager"
import { getInitParmasNumber, getInitParmasTrigger, StateMachine } from "../../Base/StateMachine"
import { ENTITY_STATE_ENUM, PARAMS_NAME_ENUM } from "../../Enums"
import { _decorator, Animation } from "cc"
import IdleSubStateMachine from "./IdleSubStateMachine";
import OpenSubStateMachine from "./OpenSubStateMachine";
const { ccclass, property } = _decorator;


@ccclass('DoorStateMachine')
export class DoorStateMachine extends StateMachine {

    async init(){
        this.animationComponent = this.addComponent(Animation)
        this.initParams()
        this.initStateMachine()
        this.initAnimationEvent()
        await Promise.all(this.waittingList)
    }

    initAnimationEvent(){
        // this.animationComponent.on(Animation.EventType.FINISHED, ()=>{
        //     const name = this.animationComponent.defaultClip.name
        //     const whiteList = ['attack']
        //     if (whiteList.some(v=>name.includes(v))){
        //         this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE
        //         // this.setParams(PARAMS_NAME_ENUM.IDEL, true)
        //     }
        // })
    }

    initParams(){
      this.params.set(PARAMS_NAME_ENUM.IDEL, getInitParmasTrigger())
      this.params.set(PARAMS_NAME_ENUM.OPEN, getInitParmasTrigger())
      this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParmasNumber())
    }

    initStateMachine(){
      this.stateMachine.set(PARAMS_NAME_ENUM.IDEL, new IdleSubStateMachine(this))
      this.stateMachine.set(PARAMS_NAME_ENUM.OPEN, new OpenSubStateMachine(this))
    }

    run(){
      switch(this.currentState){
        case this.stateMachine.get(PARAMS_NAME_ENUM.IDEL):
        case this.stateMachine.get(PARAMS_NAME_ENUM.OPEN):
          if (this.params.get(PARAMS_NAME_ENUM.OPEN).value){
            this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.OPEN)
          }else if (this.params.get(PARAMS_NAME_ENUM.IDEL).value){
            this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
          }
          break
        default:
          this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
      }

    }
}

