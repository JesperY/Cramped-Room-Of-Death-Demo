
import { AnimationClip } from "cc";
import { SubStateMachine } from "./SubStateMachine";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, PARAMS_NAME_ENUM } from "../Enums";



export abstract class DirectionSubStateMachine extends SubStateMachine {

  run(){
    const value = this.fsm.params.get(PARAMS_NAME_ENUM.DIRECTION).value
    this.currentState = this.stateMachine.get(DIRECTION_ORDER_ENUM[value as number])
  }
}

