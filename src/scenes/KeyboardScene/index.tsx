import Phaser from 'phaser'
import {keyboardMap} from '../../constants/keyboardMap';
import {SceneInterface} from '../SceneInterface';
import {KeyboardButtonGameObject, KeyboardButtonPlugin} from './KeyboardButton';
import backgroundImage from './images/background.png';
import {ConstructorParams, CreateParams} from './types';
import {KeyboardEventCode} from '../../enums/keyboardEventCode';
import {store} from '../../store';

export class KeyboardScene extends Phaser.Scene implements SceneInterface {
    background: Phaser.GameObjects.Image;
    keyboardButtons: { [key in KeyboardEventCode]?: KeyboardButtonGameObject };

    constructor(config: ConstructorParams) {
        super(config);

        this.keyboardButtons = {};
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
                this.keyboardButtons[key.code] = this.add.keyboardButton({
                    row,
                    column,
                    symbol: key.symbol.normal,
                    finger: key.finger
                });
            })
        });

        store.subscribe(() => {
            const pressedKeys = store.getState().pressedKeys;
            const pressedKeysCode = Object.keys(pressedKeys);
            for (const code in this.keyboardButtons) {
                const isPressed = pressedKeysCode.includes(code);
                this.keyboardButtons[code as KeyboardEventCode].setIsPressed(isPressed);
            }

        });
    }

    update(time: number, delta: number) {
    }
}