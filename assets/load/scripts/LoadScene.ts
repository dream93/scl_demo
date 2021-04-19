
import { _decorator, Component, Node, director } from 'cc';
import { App } from '../../libs/App';
const { ccclass, property } = _decorator;

@ccclass('LoadScene')
export class LoadScene extends Component {

    start() {
        App.instance.init();
        director.preloadScene('Test', () => {
            director.loadScene('Test');
        });
    }
}

