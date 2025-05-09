
import { _decorator, Component, Node, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc';
import { TILE_HEIGHT, TILE_WIDTH } from '../Tile/TileManager';
import ResourceManager from '../../Runtime/ResourceManager';
import { CONTROLLER_ENUM, EVENT_ENUM, PARAMS_NAME_ENUM } from '../../Enums';
import { EventManager } from '../../Runtime/EventManager';
import { PlayerStateMachine } from './PlayerStateMachine';
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
export class PlayerManager extends Component {

    x: number = 0
    y: number = 0
    targetX: number = 0
    targetY: number = 0
    fsm:PlayerStateMachine = null

    private readonly speed: number = 1/10

    async init(){
        const sprite = this.addComponent(Sprite)
        sprite.sizeMode = Sprite.SizeMode.CUSTOM
        const transform = this.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH*4, TILE_HEIGHT*4)
        // await this.render()
        this.fsm = this.addComponent(PlayerStateMachine)
        await this.fsm.init()
        this.fsm.setParams(PARAMS_NAME_ENUM.IDEL, true)

        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.move, this)
    }

    update(){
        this.updateXY()
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
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

    move(inputDirection: CONTROLLER_ENUM){
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
                this.fsm.setParams(PARAMS_NAME_ENUM.TURNLEFT, true)
                break
        }
    }

    // async render(){
    //     const sprite = this.addComponent(Sprite)
    //     sprite.sizeMode = Sprite.SizeMode.CUSTOM
    //     const transform = this.getComponent(UITransform)
    //     transform.setContentSize(TILE_WIDTH*4, TILE_HEIGHT*4)

    //     const spriteFrames = await ResourceManager.Instance.loadDir('texture/player/idle/top')

    //     const animationComponent = this.addComponent(Animation)
    //     const animationClip = new AnimationClip()


    //     const track = new animation.ObjectTrack()
    //     track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame')
    //     const frames: Array<[number, SpriteFrame]> = spriteFrames.map((item, index) => [ANIMATION_SPEED * index, item])
    //     track.channel.curve.assignSorted(frames)
    //     animationClip.addTrack(track)
    //     animationClip.duration = frames.length * ANIMATION_SPEED
    //     animationClip.wrapMode = AnimationClip.WrapMode.Loop

    //     animationComponent.defaultClip = animationClip
    //     animationComponent.play()
    // }

}
