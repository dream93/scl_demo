
import { _decorator, Component, Prefab } from 'cc';
import { Toast } from '../../../libs/component/Toast';
import { EventManager } from '../../../libs/event/manager/EventManager';
import { PopupManager } from '../../../libs/popup/manager/PopupManager';
const { ccclass, property } = _decorator;

export enum ShowPopupEvent {
    POPUP2 = 'SHOW_POPUP_POPUP2'
}

@ccclass('PopupScene')
export class PopupScene extends Component {

    @property({
        type: Prefab
    })
    popup1: Prefab = null!;

    @property({
        type: Prefab
    })
    popup2: Prefab = null!;

    onLoad() {
        EventManager.instance.on(ShowPopupEvent.POPUP2, this.onShowPopup2, this);
    }

    start() {
        Toast.makeText(null, '进入适配测试', Toast.LENGTH_LONG).show();
    }

    onDestroy() {
        EventManager.instance.off(ShowPopupEvent.POPUP2, this.onShowPopup2, this);
    }

    onShowPopup1() {
        PopupManager.instance.show({ prefab: this.popup1 });
    }


    onShowTwoPopups() {
        PopupManager.instance.show({ name: 'popup1_1', prefab: this.popup1 });
        PopupManager.instance.show({ name: 'popup1_2', prefab: this.popup1 });
    }

    onShowPopup2() {
        PopupManager.instance.show({ prefab: this.popup2 });
    }

    onShowPopup1AndPopup2() {
        PopupManager.instance.show({ prefab: this.popup1 });
        PopupManager.instance.show({ prefab: this.popup2, keep: true });
    }

    onShowPopup3() {
        PopupManager.instance.show({ path: 'popup/Popup3', priority: 100 });
    }
}
