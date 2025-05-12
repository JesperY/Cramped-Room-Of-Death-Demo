
import { _decorator, AnimationClip, Component, Node, Animation, SpriteFrame } from 'cc';
import { FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../Enums';
const { ccclass, property } = _decorator;
import State from '../../Base/State';
import { getInitParmasNumber, getInitParmasTrigger, StateMachine } from '../../Base/StateMachine';
import IdleSubStateMachine from './IdleSubStateMachine';
import TurnLeftSubStateMachine from './TurnLeftSubStateMachine';

/**
 * Predefined variables
 * Name = PlayerStateMachine
 * DateTime = Wed May 07 2025 16:55:21 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = PlayerStateMachine.ts
 * FileBasenameNoExtension = PlayerStateMachine
 * URL = db://assets/Scripts/Player/PlayerStateMachine.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */


@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends StateMachine {


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
            const whiteList = ['turn']
            if (whiteList.some(v=>name.includes(v))){
                this.setParams(PARAMS_NAME_ENUM.IDEL, true)
            }
        })
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDEL, getInitParmasTrigger())

        this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParmasNumber())
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDEL, new IdleSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.TURNLEFT, new TurnLeftSubStateMachine(this))
    }

    run(){
        switch(this.currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT):
                // break
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDEL):
                if (this.params.get(PARAMS_NAME_ENUM.TURNLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT)
                }else if(this.params.get(PARAMS_NAME_ENUM.IDEL).value){
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

