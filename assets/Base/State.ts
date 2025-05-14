
import { _decorator, animation, AnimationClip, Component, Node, Sprite, SpriteFrame, UITransform } from 'cc';
import { PlayerStateMachine } from '../Scripts/Player/PlayerStateMachine';
import { TILE_HEIGHT } from '../Scripts/Tile/TileManager';
import { TILE_WIDTH } from '../Scripts/Tile/TileManager';
import ResourceManager from '../Runtime/ResourceManager';
import { StateMachine } from './StateMachine';
import { sortSpriteFrames } from '../Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = State
 * DateTime = Wed May 07 2025 16:58:42 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = State.ts
 * FileBasenameNoExtension = State
 * URL = db://assets/Base/State.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

const ANIMATION_SPEED = 1/8

export default class State{
    private animationClip: AnimationClip
    constructor(private fsm:StateMachine,
        private path:string,
        private warpMode: AnimationClip.WrapMode = AnimationClip.WrapMode.Normal){
            this.init()
        }

    async init(){


        const promise = ResourceManager.Instance.loadDir(this.path)
        this.fsm.waittingList.push(promise)
        const spriteFrames = await promise
        this.animationClip = new AnimationClip()


        const track = new animation.ObjectTrack()
        track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame')
        const frames: Array<[number, SpriteFrame]> = sortSpriteFrames(spriteFrames).map((item, index) => [ANIMATION_SPEED * index, item])
        track.channel.curve.assignSorted(frames)
        this.animationClip.addTrack(track)
        this.animationClip.name = this.path
        this.animationClip.duration = frames.length * ANIMATION_SPEED
        this.animationClip.wrapMode = this.warpMode


    }

    run(){
        this.fsm.animationComponent.defaultClip = this.animationClip
        this.fsm.animationComponent.play()
    }
}

