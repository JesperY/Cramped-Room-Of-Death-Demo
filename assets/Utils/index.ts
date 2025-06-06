
import { _decorator, Component, Layers, Node, SpriteFrame, UITransform } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = index
 * DateTime = Mon May 05 2025 10:19:30 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = index.ts
 * FileBasenameNoExtension = index
 * URL = db://assets/Utils/index.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

export const createUINode = (name: string = '') => {
    const node = new Node(name)
    const transform = node.addComponent(UITransform)
    transform.setAnchorPoint(0, 1)
    node.layer = Layers.Enum.UI_2D
    return node
}

export const randomByRange = (start: number, end: number)=>{
    return Math.floor(start + (end - start) * Math.random())
}

const getNumberWithinString = (str: string)=>{
    const reg = /\((\d+)\)/
    const match = str.match(reg)
    return match ? parseInt(match[1]) : 0
}

export const sortSpriteFrames = (spriteFrames: SpriteFrame[])=>
    spriteFrames.sort((a, b)=>getNumberWithinString(a.name) - getNumberWithinString(b.name))

export const randomByLen = (len:number) =>
     Array.from({length: len}).reduce<string>((total, item)=>total + Math.floor(Math.random() * 10), '')


