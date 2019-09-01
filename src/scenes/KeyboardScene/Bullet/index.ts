import Phaser from 'phaser';
import bulletImage from './images/bullet.png';

/**
 * Bullet GameObject
 */
export class BulletGameObject extends Phaser.GameObjects.Image {
    speed: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
        super(scene, x, y, texture, frame);

        this.speed = 1;
    }

    fire(x: number, y: number) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    };

    update(time: number, delta: number) {
        this.y -= this.speed * delta;

        if (this.y < -this.speed) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

export class BulletPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager: Phaser.Plugins.PluginManager) {
        super(pluginManager);

        pluginManager.registerGameObject('bullet', this.createBullet);
    }

    createBullet() {
        // @ts-ignore
        return this.displayList.add(new BulletGameObject(this.scene, 0, 0, bulletImage));
    }
}