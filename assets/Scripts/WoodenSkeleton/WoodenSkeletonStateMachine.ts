import { EntityManager } from "../../Base/EntityManager"
import { PARAMS_NAME_ENUM } from "../../Enums"
import { getInitParmasNumber, getInitParmasTrigger, StateMachine } from "../../Base/StateMachine"
import { ENTITY_STATE_ENUM } from "../../Enums"
import { _decorator, Animation } from "cc"
import IdleSubStateMachine from "./IdleSubStateMachine"
import AttackSubStateMachine from "./AttackSubStateMachine"
import DeathSubStateMachine from "./DeathSubStateMachine"
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
            const name = this.animationComponent.defaultClip.name
            const whiteList = ['attack']
            if (whiteList.some(v=>name.includes(v))){
                this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE
                // this.setParams(PARAMS_NAME_ENUM.IDEL, true)
            }
        })
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDEL, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParmasNumber())
        this.params.set(PARAMS_NAME_ENUM.ATTACK, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParmasTrigger())
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDEL, new IdleSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new DeathSubStateMachine(this))
    }

    run(){
        switch(this.currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDEL):
            case this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK):
            case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
                if (this.params.get(PARAMS_NAME_ENUM.ATTACK).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK)
                }else if(this.params.get(PARAMS_NAME_ENUM.IDEL).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
                }else if(this.params.get(PARAMS_NAME_ENUM.DEATH).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH)
                }else{
                    this.currentState = this.currentState
                }
                break

            default:
                this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
        }
    }
}

