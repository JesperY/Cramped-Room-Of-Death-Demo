import { StateMachine } from "../../Base/StateMachine";
import { DirectionSubStateMachine } from "../../Base/DirectionSubStateMachine";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, PARAMS_NAME_ENUM } from "../../Enums";
import State from "../../Base/State";
import { AnimationClip } from "cc";

const BASE_URL = 'texture/woodenskeleton/attack'

export default class AttackSubStateMachine extends DirectionSubStateMachine{
  constructor(fsm:StateMachine){
    super(fsm)
    this.stateMachine.set(DIRECTION_ENUM.UP, new State(fsm, `${BASE_URL}/top`, AnimationClip.WrapMode.Normal))
    this.stateMachine.set(DIRECTION_ENUM.DOWN, new State(fsm, `${BASE_URL}/bottom`, AnimationClip.WrapMode.Normal))
    this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`, AnimationClip.WrapMode.Normal))
    this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`, AnimationClip.WrapMode.Normal))
  }
}
