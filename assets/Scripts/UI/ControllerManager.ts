
import { _decorator, Component, Node } from 'cc';
import { EventManager } from '../../Runtime/EventManager';
import { EVENT_ENUM } from '../../Enums';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ControllerManager
 * DateTime = Mon May 05 2025 18:54:58 GMT+0800 (中国标准时间)
 * Author = RubySIU
 * FileBasename = ControllerManager.ts
 * FileBasenameNoExtension = ControllerManager
 * URL = db://assets/Scripts/UI/ControllerManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('ControllerManager')
export class ControllerManager extends Component {
    handlerControl(){
        EventManager.Instance.emit(EVENT_ENUM.NEXT_LEVEL)
    }
}

