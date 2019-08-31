import Phaser from 'phaser'
import {Params} from './types';
import {Finger} from '../../../enums/finger';
import {BACKGROUND_COLOR_BY_FINGER, BORDER_COLOR_BY_FINGER} from './constants';

/**
 * Keyboard button
 */
export class KeyboardButtonGameObject extends Phaser.GameObjects.Extern {
    radius = 15;

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

    isPressed: boolean;

    graphics: Phaser.GameObjects.Graphics;

    text: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, params: Params) {
        super(scene);

        this.row = params.row;
        this.column = params.column;
        this.symbol = params.symbol;
        this.finger = params.finger;

        this.calcXY();
        this.isSpace() ? this.drawSpaceButton() : this.drawButton();
        this.drawText();
    }

    /**
     * @param isPressed
     */
    public setIsPressed(isPressed: boolean): void {
        this.isPressed = isPressed;

        if (this.graphics) {
            this.isSpace() ? this.drawSpaceButtonBackground() : this.drawButtonBackground();
        }
    }

    /**
     * Calculate coordinates [x, y] from params [row, column]
     */
    private calcXY() {
        const delta = this.row === 0 ? 30 : 90;
        this.x = delta + this.column * 60 + this.row * 15;
        this.y = 420 + this.row * 38;
    }

    private isSpace() {
        return this.symbol == ' ';
    }

    /**
     * Draw button background
     */
    private drawButton() {
        const circle = new Phaser.Geom.Circle(this.x, this.y, this.radius);

        this.graphics = this.scene.add.graphics({
            lineStyle: {
                color: BORDER_COLOR_BY_FINGER[this.finger],
                width: 2
            }
        });

        this.drawButtonBackground();

        this.graphics.strokeCircleShape(circle);
    }

    private drawButtonBackground() {
        const color = this.isPressed ? BORDER_COLOR_BY_FINGER : BACKGROUND_COLOR_BY_FINGER;
        this.graphics.fillStyle(color[this.finger], 1);
        this.graphics.fillCircle(this.x, this.y, this.radius);
    }

    /**
     * Draw space button background
     */
    private drawSpaceButton() {
        const width = this.getSpaceWidth();
        const height = this.getSpaceHeight();

        this.graphics = this.scene.add.graphics();

        this.drawSpaceButtonBackground();

        this.graphics.lineStyle(2, BORDER_COLOR_BY_FINGER[this.finger], 1);
        this.graphics.strokeRoundedRect(this.x - this.radius, this.y - this.radius, width, height, this.radius);
    }

    private drawSpaceButtonBackground() {
        const width = this.getSpaceWidth();
        const height = this.getSpaceHeight();
        const color = this.isPressed ? BORDER_COLOR_BY_FINGER : BACKGROUND_COLOR_BY_FINGER;

        this.graphics.fillStyle(color[this.finger], 1);
        this.graphics.fillRoundedRect(this.x - this.radius, this.y - this.radius, width, height, this.radius);
    }

    private getSpaceHeight() {
        return 2 * this.radius;
    }

    private getSpaceWidth() {
        return 2 * this.radius * 8 * 2;
    }


    /**
     * Print buttons text
     */
    private drawText() {
        this.text = this.scene.make.text(
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
