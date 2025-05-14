import { EntityManager } from "../../Base/EntityManager"
import { PARAMS_NAME_ENUM } from "../../Enums"
import { getInitParmasNumber, getInitParmasTrigger, StateMachine } from "../../Base/StateMachine"
import { ENTITY_STATE_ENUM } from "../../Enums"
import { _decorator, Animation } from "cc"
import IdleSubStateMachine from "./IdleSubStateMachine"
const { ccclass, property } = _decorator;

@ccclass('WoodenSkeletonStateMachine')
export class WoodenSkeletonStateMachine extends StateMachine {

    async init(){
        this.animationComponent = this.addComponent(Animation)
        this.initParams()
        this.initStateMachine()
        this.initAnimationEvent()
        await Promise.all(this.waittingList)
    }

    initAnimationEvent(){
        this.animationComponent.on(Animation.EventType.FINISHED, ()=>{
            // const name = this.animationComponent.defaultClip.name
            // const whiteList = ['block','turn']
            // if (whiteList.some(v=>name.includes(v))){
            //     this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE
            //     // this.setParams(PARAMS_NAME_ENUM.IDEL, true)
            // }
        })
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDEL, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParmasNumber())

    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDEL, new IdleSubStateMachine(this))

    }

    run(){
        switch(this.currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDEL):

                if(this.params.get(PARAMS_NAME_ENUM.IDEL).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
                }else{
                    this.currentState = this.currentState
                }
                break

            default:
                this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
        }
    }
}

