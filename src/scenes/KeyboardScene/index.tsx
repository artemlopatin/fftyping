import Phaser from 'phaser'

import {keyboardMap} from '../../components/KeyboardMap/constants';
import {SceneInterface} from '../SceneInterface';

import {KeyboardButtonPlugin} from './KeyboardButton';
import backgroundImage from './images/background.png';
import {ConstructorParams, CreateParams} from './types';

export class KeyboardScene extends Phaser.Scene implements SceneInterface {
    background: Phaser.GameObjects.Image;

    constructor(config: ConstructorParams) {
        super(config);
    }

    init(data: object) {
    }

    preload() {
        this.load.plugin('KeyboardButtonPlugin', KeyboardButtonPlugin, true);

        this.load.image('background', backgroundImage);
    }

    create(data: CreateParams) {
        this.background = this.add.image(0, 350, 'background');
        this.background.setOrigin(0, 0);
        this.background.displayHeight = 250;

        keyboardMap.forEach((keysRow, row) => {
            keysRow.forEach((key, column) => {
                // @ts-ignore
                this.add.keyboardButton({
                    row,
                    column,
                    symbol: key.symbol.normal,
                    finger: key.finger
                });
            })
        });
    }

    update(time: number, delta: number) {
    }
}