import Phaser from 'phaser'
import {keyboardMap} from '../../constants/keyboardMap';
import {SceneInterface} from '../SceneInterface';
import {KeyboardButtonGameObject, KeyboardButtonPlugin} from './KeyboardButton';
import backgroundImage from './images/background.png';
import {ConstructorParams, CreateParams} from './types';
import {KeyboardEventCode} from '../../enums/keyboardEventCode';
import {fromEvent} from 'rxjs';
import {filter} from 'rxjs/operators';
import {BulletGameObject, BulletPlugin} from './Bullet';

export class KeyboardScene extends Phaser.Scene implements SceneInterface {
    background: Phaser.GameObjects.Image;
    keyboardButtons: { [key in KeyboardEventCode]?: KeyboardButtonGameObject };
    bullets: Phaser.GameObjects.Group;

    constructor(config: ConstructorParams) {
        super(config);

        this.keyboardButtons = {};
    }

    init(data: object) {
    }

    preload() {
        this.load.plugin('KeyboardButtonPlugin', KeyboardButtonPlugin, true);
        this.load.plugin('BulletPlugin', BulletPlugin, true);

        this.load.image('background', backgroundImage);
        BulletGameObject.loadImages(this);
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

        const keyDown = fromEvent(document, 'keydown');
        keyDown
            .pipe(
                filter((event: KeyboardEvent) => !event.repeat),
                filter((event: KeyboardEvent) => event.code in KeyboardEventCode),
            )
            .subscribe((event: KeyboardEvent) => {
                const code = event.code as KeyboardEventCode;
                const keyboardButton = this.keyboardButtons[code];

                if (!keyboardButton) {
                    return;
                }

                keyboardButton.setIsPressed(true);

                const bullet = this.bullets.get();
                if (bullet) {
                    bullet.fire(keyboardButton.x, keyboardButton.y);
                }
            });

        const keyUp = fromEvent(document, 'keyup');
        keyUp
            .pipe(
                filter((event: KeyboardEvent) => event.code in KeyboardEventCode),
            )
            .subscribe((event: KeyboardEvent) => {
                this.setIsPressedButton(event.code as KeyboardEventCode, false);
            });

        this.bullets = this.add.group({
            classType: BulletGameObject,
            maxSize: 20,
            runChildUpdate: true
        });

    }

    update(time: number, delta: number) {
    }

    private setIsPressedButton(code: KeyboardEventCode, isPressed: boolean) {
        const keyboardButton = this.keyboardButtons[code];
        keyboardButton && keyboardButton.setIsPressed(isPressed);
    }
}