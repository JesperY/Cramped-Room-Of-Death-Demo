
import { _decorator, AnimationClip, Component, Node, Animation, SpriteFrame } from 'cc';
import { FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../Enums';
const { ccclass, property } = _decorator;
import State from '../../Base/State';

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
type ParamsValueType = boolean | number

interface IParamsValue{
    type: FSM_PARAMS_TYPE_ENUM,
    value: ParamsValueType
}
export const getInitParmasTrigger = () => {
    return {
        type:FSM_PARAMS_TYPE_ENUM.TRIGGER,
        value: false
    }
}

@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends Component {

    private _currentState: State = null

    params: Map<string, IParamsValue> = new Map()
    stateMachine: Map<string, State> = new Map()
    animationComponent: Animation = null
    waittingList:Array<Promise<SpriteFrame[]>> = []

    getParams(paramName:string){
        if(this.params.has(paramName)){
            return this.params.get(paramName)
        }
    }

    setParams(paramName:string, value: ParamsValueType){
        if (this.params.has(paramName)){
            this.params.get(paramName).value = value
            this.run()
        }
    }

    get currentState(){
        return this._currentState
    }

    set currentState(newState:State){
        this._currentState = newState
        this._currentState.run()
    }

    async init(){
        this.animationComponent = this.addComponent(Animation)
        this.initParams()
        this.initStateMachine()
        await Promise.all(this.waittingList)
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDEL, getInitParmasTrigger())

        this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParmasTrigger())
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDEL, new State(this, 'texture/player/idle/top', AnimationClip.WrapMode.Loop))
        this.stateMachine.set(PARAMS_NAME_ENUM.TURNLEFT, new State(this, 'texture/player/turnleft/top'))
    }

    run(){
        switch(this._currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT):
                break
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDEL):
                if (this.params.get(PARAMS_NAME_ENUM.TURNLEFT)){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT)
                }else if(this.params.get(PARAMS_NAME_ENUM.IDEL)){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
                }
                break

            default:
                this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDEL)
        }
    }
}

