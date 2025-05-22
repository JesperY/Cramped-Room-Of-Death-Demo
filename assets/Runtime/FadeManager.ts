import { _decorator, Component, game, Node, RenderRoot2D } from 'cc';
import { Singleton } from '../Base/Singleton';
import { DEFAULT_DURATION, DrawManager } from '../Scripts/UI/DrawManager';
import { createUINode } from '../Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DataManager
 * DateTime = Mon May 05 2025 14:17:23 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = DataManager.ts
 * FileBasenameNoExtension = DataManager
 * URL = db://assets/Runtime/DataManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('FadeManager')
export default class FadeManager extends Singleton {

    static get Instance(){
        return super.GetInstance<FadeManager>()
    }

    private _fader: DrawManager = null

    get fader(){
      if (this._fader !== null) return this._fader
      const node = createUINode()
      node.addComponent(RenderRoot2D)

      const faderNode = createUINode()
      faderNode.setParent(node)
      this._fader = faderNode.addComponent(DrawManager)
      this._fader.init()

      game.addPersistRootNode(node)
      return this._fader
    }

    fadeIn(duration: number = DEFAULT_DURATION){
      return this.fader.fadeIn(duration)
    }

    fadeOut(duration: number = DEFAULT_DURATION){
      return this.fader.fadeOut(duration)
    }

    mask(){
      return this.fader.mask()
    }

}

