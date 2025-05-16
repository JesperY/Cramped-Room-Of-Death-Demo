import { StateMachine } from "../../Base/StateMachine";
import { DirectionSubStateMachine } from "../../Base/DirectionSubStateMachine";
import { DIRECTION_ENUM } from "../../Enums";
import State from "../../Base/State";

const BASE_URL = 'texture/woodenskeleton/death'

export default class DeathSubStateMachine extends DirectionSubStateMachine{
  constructor(fsm:StateMachine){
    super(fsm)
    this.stateMachine.set(DIRECTION_ENUM.UP, new State(fsm, `${BASE_URL}/top`))
    this.stateMachine.set(DIRECTION_ENUM.DOWN, new State(fsm, `${BASE_URL}/bottom`))
    this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`))
    this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`))
  }

}
