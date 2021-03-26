
import { _decorator, Component } from 'cc';
import { CanvasAdapter, ResolutionType } from '../../../libs/component/CanvasAdapter';
import { Toast } from '../../../libs/component/Toast';
const { ccclass, property } = _decorator;

@ccclass('CanvasAdapterScene')
export class CanvasAdapterScene extends Component {

    @property({
        type: CanvasAdapter
    })
    canvas: CanvasAdapter = null!;

    start() {
        Toast.makeText(null, '进入适配测试', Toast.LENGTH_LONG).show();
    }

    onExactFit() {
        this.canvas.resolutionType = ResolutionType.EXACT_FIT;
    }

    onNoBorder() {
        this.canvas.resolutionType = ResolutionType.NO_BORDER;
    }

    onShowAll() {
        this.canvas.resolutionType = ResolutionType.SHOW_ALL;
    }

    onFixedHeight() {
        this.canvas.resolutionType = ResolutionType.FIXED_HEIGHT;
    }

    onFixedWidth() {
        this.canvas.resolutionType = ResolutionType.FIXED_WIDTH;
    }

    onCustom() {
        this.canvas.resolutionType = ResolutionType.CUSTOM;
    }

}
