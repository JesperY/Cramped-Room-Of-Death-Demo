
import { _decorator, AnimationClip, Component, Node, Animation, SpriteFrame } from 'cc';
import { FSM_PARAMS_TYPE_ENUM } from '../Enums';
import State from './State';
import { SubStateMachine } from './SubStateMachine';
const { ccclass, property } = _decorator;

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

export const getInitParmasNumber = () => {
    return {
        type:FSM_PARAMS_TYPE_ENUM.NUMBER,
        value: 0
    }
}

@ccclass('StateMachine')
export abstract class StateMachine extends Component {

    private _currentState: State | SubStateMachine= null

    params: Map<string, IParamsValue> = new Map()
    stateMachine: Map<string, State | SubStateMachine> = new Map()
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
            // console.log(this.params)
            this.run()
            this.resetTrigger()
        }
    }

    resetTrigger(){
        for (const [_, value] of this.params){
            if (value.type === FSM_PARAMS_TYPE_ENUM.TRIGGER){
                value.value = false
            }
        }
    }

    get currentState(){
        return this._currentState
    }

    set currentState(newState:State | SubStateMachine){
        this._currentState = newState
        this._currentState.run()
    }

    abstract init() :void
    abstract run() :void
}

