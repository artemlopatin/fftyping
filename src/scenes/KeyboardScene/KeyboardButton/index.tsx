import Phaser from 'phaser'

import {Params} from './types';

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

    /** x-coordinate */
    x: number;

    /** y-coordinate */
    y: number;

    constructor(scene: Phaser.Scene, params: Params) {
        super(scene);

        this.row = params.row;
        this.column = params.column;
        this.symbol = params.symbol;

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
        const radius = 15;
        const circle = new Phaser.Geom.Circle(this.x, this.y, radius);
        const graphics = this.scene.add.graphics({
            lineStyle: {
                color: 0x00ff00,
                width: 2
            }
        });
        graphics.strokeCircleShape(circle);
    }

    /**
     * Print buttons text
     */
    private drawText() {
        this.scene.add.text(this.x - 5, this.y - 7, this.symbol);
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
