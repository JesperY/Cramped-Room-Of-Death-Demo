import { _decorator, Component } from "cc"
import { PlayerStateMachine } from "../Scripts/Player/PlayerStateMachine"
import { DIRECTION_ENUM, ENTITY_STATE_ENUM, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, ENTITY_TYPE_ENUM } from "../Enums"
import { IEntity } from "../Levels"
import { Sprite, UITransform } from "cc"
import { TILE_HEIGHT, TILE_WIDTH } from "../Scripts/Tile/TileManager"
import { StateMachine } from "./StateMachine"
import { randomByLen } from "../Utils"
const { ccclass, property } = _decorator;

@ccclass('EntityManager')
export class EntityManager extends Component {

    x: number = 0
    y: number = 0
    id:string = randomByLen(12)


    fsm:StateMachine = null

    private _direction: DIRECTION_ENUM
    private _state:ENTITY_STATE_ENUM
    private type:ENTITY_TYPE_ENUM

    get direction(){
        return this._direction
    }

    set direction(newDirection:DIRECTION_ENUM){
        this._direction = newDirection
        this.fsm.setParams(PARAMS_NAME_ENUM.DIRECTION, DIRECTION_ORDER_ENUM[this._direction])
    }

    get state(){
        return this._state
    }

    set state(newState:ENTITY_STATE_ENUM){
        this._state = newState
        this.fsm.setParams(newState, true)
    }

    async init(params:IEntity){
        const sprite = this.addComponent(Sprite)
        sprite.sizeMode = Sprite.SizeMode.CUSTOM
        const transform = this.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH*4, TILE_HEIGHT*4)

        this.x = params.x
        this.y = params.y
        this.direction = params.direction
        this.state = params.state
        this.type = params.type
    }

    update(){
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
    }

    onDestroy(){
    }


}
