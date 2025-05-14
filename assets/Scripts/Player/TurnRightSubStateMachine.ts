import { StateMachine } from "../../Base/StateMachine";
import { DirectionSubStateMachine } from "../../Base/DirectionSubStateMachine";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, PARAMS_NAME_ENUM } from "../../Enums";
import State from "../../Base/State";
import { AnimationClip } from "cc";

const BASE_URL = 'texture/player/turnright'

export default class TurnLeftSubStateMachine extends DirectionSubStateMachine{
  constructor(fsm:StateMachine){
    super(fsm)
    this.stateMachine.set(DIRECTION_ENUM.UP, new State(fsm, `${BASE_URL}/top`))
    this.stateMachine.set(DIRECTION_ENUM.DOWN, new State(fsm, `${BASE_URL}/bottom`))
    this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`))
    this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`))
  }

}
