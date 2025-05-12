
import { _decorator, Component, Node, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc';
import { TILE_HEIGHT, TILE_WIDTH } from '../Tile/TileManager';
import ResourceManager from '../../Runtime/ResourceManager';
import { CONTROLLER_ENUM, DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, PARAMS_NAME_ENUM } from '../../Enums';
import { EventManager } from '../../Runtime/EventManager';
import { PlayerStateMachine } from './PlayerStateMachine';
import { EntityManager } from '../../Base/EntityManager';
import DataManager from '../../Runtime/DataManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayerManager
 * DateTime = Tue May 06 2025 05:22:30 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = PlayerManager.ts
 * FileBasenameNoExtension = PlayerManager
 * URL = db://assets/Scripts/Player/PlayerManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PlayerManager')
export class PlayerManager extends EntityManager {


    targetX: number = 0
    targetY: number = 0

    private readonly speed: number = 1/10


    async init(){

        this.fsm = this.addComponent(PlayerStateMachine)
        await this.fsm.init()
        super.init({
            x: 2,
            y: 8,
            direction: DIRECTION_ENUM.UP,
            state: ENTITY_STATE_ENUM.IDLE,
            type: ENTITY_TYPE_ENUM.PLAYER
        })
        this.state = ENTITY_STATE_ENUM.IDLE
        this.direction = DIRECTION_ENUM.UP
        this.targetX = this.x
        this.targetY = this.y
        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.inputHandle, this)
    }

    update(){
        this.updateXY()
        super.update()
    }

    updateXY(){
        if(this.x < this.targetX){
            this.x += this.speed
        }else if(this.x > this.targetX){
            this.x -= this.speed
        }
        if(this.y < this.targetY){
            this.y += this.speed
        }else if(this.y > this.targetY){
            this.y -= this.speed
        }

        if(Math.abs(this.x - this.targetX) <= 0.1 && Math.abs(this.y - this.targetY) <= 0.1){
            this.x = this.targetX
            this.y = this.targetY
        }


    }

    inputHandle(inputDirection: CONTROLLER_ENUM){
        if(this.willBlock(inputDirection)){
            return
        }
        this.move(inputDirection)
    }

    willBlock(inputDirection: CONTROLLER_ENUM){
        const {targetX:x, targetY:y, direction} = this
        const {tileInfo} = DataManager.Instance
        if(inputDirection === CONTROLLER_ENUM.UP){
            if(direction === DIRECTION_ENUM.UP){
                const playerNextY = y-1
                const weaponNextY = y-2
                if(playerNextY < 0){
                    return true
                }

                const playerTile = tileInfo[x][playerNextY]
                const weaponTile = tileInfo[x][weaponNextY]

                if(playerTile && playerTile.movable && (!weaponTile || weaponTile.turnable)){
                    // return true
                }else{
                    return true
                }
            }
        }
        return false
    }

    move(inputDirection: CONTROLLER_ENUM){
        // console.log(inputDirection)
        switch(inputDirection){
            case CONTROLLER_ENUM.UP:
                this.targetY = this.y - 1
                break
            case CONTROLLER_ENUM.DOWN:
                this.targetY = this.y + 1
                break
            case CONTROLLER_ENUM.LEFT:
                this.targetX = this.x - 1
                break
            case CONTROLLER_ENUM.RIGHT:
                this.targetX = this.x + 1
                break
            case CONTROLLER_ENUM.TURN_LEFT:
                if (this.direction === DIRECTION_ENUM.UP){
                    this.direction = DIRECTION_ENUM.LEFT
                }else if (this.direction === DIRECTION_ENUM.LEFT){
                    this.direction = DIRECTION_ENUM.DOWN
                }else if (this.direction === DIRECTION_ENUM.DOWN){
                    this.direction = DIRECTION_ENUM.RIGHT
                }else if (this.direction === DIRECTION_ENUM.RIGHT){
                    this.direction = DIRECTION_ENUM.UP
                }
                this.state = ENTITY_STATE_ENUM.TURNLEFT
                break
        }
    }


}
