
import { _decorator, AnimationClip, Component, Node, Animation, SpriteFrame } from 'cc';
import { ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../Enums';
const { ccclass, property } = _decorator;
import State from '../../Base/State';
import { getInitParmasNumber, getInitParmasTrigger, StateMachine } from '../../Base/StateMachine';
import IdleSubStateMachine from './IdleSubStateMachine';
import TurnLeftSubStateMachine from './TurnLeftSubStateMachine';
import BlockFrontSubStateMachine from './BlockFrontSubStateMachine';
import { EntityManager } from '../../Base/EntityManager';
import BlockTurnLeftSubStateMachine from './BlockTurnLeftSubStateMachine';
import BlockTurnRightSubStateMachine from './BlockTurnRightSubStateMachine';
import BlockBackSubStateMachine from './BlockBackSubStateMachine';
import BlockLeftSubStateMachine from './BlockLeftSubStateMachine';
import BlockRightSubStateMachine from './BlockRightSubStateMachine';
import TurnRightSubStateMachine from './TurnRightSubStateMachine';

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
            const whiteList = ['block','turn']
            if (whiteList.some(v=>name.includes(v))){
                this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE
                // this.setParams(PARAMS_NAME_ENUM.IDEL, true)
            }
        })
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDEL, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.BLOCKFRONT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParmasNumber())
        this.params.set(PARAMS_NAME_ENUM.BLOCKBACK, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.BLOCKLEFT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.BLOCKRIGHT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.TURNRIGHT, getInitParmasTrigger())
        this.params.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, getInitParmasTrigger())
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDEL, new IdleSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.TURNLEFT, new TurnLeftSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.TURNRIGHT, new TurnRightSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKFRONT, new BlockFrontSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, new BlockTurnLeftSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKBACK, new BlockBackSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKLEFT, new BlockLeftSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKRIGHT, new BlockRightSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, new BlockTurnRightSubStateMachine(this))
    }

    run(){
        switch(this.currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT):
                // break
            case this.stateMachine.get(PARAMS_NAME_ENUM.TURNRIGHT):
                // break
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKFRONT):

            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT):

            case this.stateMachine.get(PARAMS_NAME_ENUM.IDEL):
                if (this.params.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT)
                }else if(this.params.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT)
                }else if (this.params.get(PARAMS_NAME_ENUM.BLOCKFRONT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKFRONT)
                }else if (this.params.get(PARAMS_NAME_ENUM.TURNLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT)
                }else if (this.params.get(PARAMS_NAME_ENUM.TURNRIGHT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURNRIGHT)
                }else if(this.params.get(PARAMS_NAME_ENUM.IDEL).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
                }else if (this.params.get(PARAMS_NAME_ENUM.BLOCKBACK).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKBACK)
                }else if (this.params.get(PARAMS_NAME_ENUM.BLOCKLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKLEFT)
                }else if (this.params.get(PARAMS_NAME_ENUM.BLOCKRIGHT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKRIGHT)
                }
                else{
                    this.currentState = this.currentState
                }
                break

            default:
                this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
        }
    }
}

