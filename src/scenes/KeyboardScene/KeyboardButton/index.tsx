import Phaser from 'phaser'

import {Params} from './types';
import {Finger} from './enums';
import {BACKGROUND_COLOR_BY_FINGER, BORDER_COLOR_BY_FINGER} from './constants';

/**
 * Keyboard button
 */
export class KeyboardButtonGameObject extends Phaser.GameObjects.Extern {
    /** row number */
    row: number;

    /** column number */
    column: number;

    /** displayed symbol on the button */
    symbol: string;

    /** finger */
    finger: Finger;

    /** x-coordinate */
    x: number;

    /** y-coordinate */
    y: number;

    constructor(scene: Phaser.Scene, params: Params) {
        super(scene);

        this.row = params.row;
        this.column = params.column;
        this.symbol = params.symbol;
        this.finger = params.finger;

        this.calcXY();
        this.drawButton();
        this.drawText();
    }

    /**
     * Calculate coordinates [x, y] from params [row, column]
     */
    private calcXY() {
        const delta = this.row === 0 ? 30 : 90;
        this.x = delta + this.column * 60 + this.row * 15;
        this.y = 420 + this.row * 38;
    }

    /**
     * Draw button background
     */
    private drawButton() {
        if (this.symbol == ' ') {
            this.drawSpaceButton();
            return;
        }
        const radius = 15;
        const circle = new Phaser.Geom.Circle(this.x, this.y, radius);

        const graphics = this.scene.add.graphics({
            lineStyle: {
                color: BORDER_COLOR_BY_FINGER[this.finger],
                width: 2
            }
        });

        graphics.fillStyle(BACKGROUND_COLOR_BY_FINGER[this.finger], 1);
        graphics.fillCircle(this.x, this.y, radius);

        graphics.strokeCircleShape(circle);
    }

    /**
     * Draw space button background
     */
    private drawSpaceButton() {
        const radius = 15;
        const graphics = this.scene.add.graphics();
        const width = 2 * radius * 8 * 2;
        const height = 2 * radius;

        graphics.fillStyle(BACKGROUND_COLOR_BY_FINGER[this.finger], 1);
        graphics.fillRoundedRect(this.x - radius, this.y - radius, width, height, radius);

        graphics.lineStyle(2, BORDER_COLOR_BY_FINGER[this.finger], 1);
        graphics.strokeRoundedRect(this.x - radius, this.y - radius, width, height, radius);
    }

    /**
     * Print buttons text
     */
    private drawText() {
        this.scene.make.text(
            {
                x: this.x,
                y: this.y,
                text: this.symbol,
                origin: {x: 0.5, y: 0.5},
                style: {
                    align: 'center',
                    font: 'bold 16px Helvetica',
                    fill: '#000000',
                }
            }
        );
    }
}

export class KeyboardButtonPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager: Phaser.Plugins.PluginManager) {
        super(pluginManager);

        pluginManager.registerGameObject('keyboardButton', this.createKeyboardButton);
    }

    createKeyboardButton(params: Params) {
        // @ts-ignore
        return this.displayList.add(new KeyboardButtonGameObject(this.scene, params));
    }
}
