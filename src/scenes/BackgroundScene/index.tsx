import Phaser from 'phaser'
import {SceneInterface} from '../SceneInterface';

import backgroundImage from './images/background.jpg';

export class BackgroundScene extends Phaser.Scene implements SceneInterface {
    background: Phaser.GameObjects.TileSprite;

    constructor(config: any) {
        super(config);
    }

    init(data: object) {
    }

    preload() {
        this.load.image('backgroundImage', backgroundImage);
    }

    create(data: object) {
        this.background = this.add.tileSprite(0, 0, 800, 600, 'backgroundImage');
        this.background.setOrigin(0);
    }

    update(time: number, delta: number) {
        this.background.tilePositionY -= 0.02 * delta;
    }
}