import Phaser from 'phaser';
import shipImage from './images/ship.png';

/**
 * EnemySpaceship GameObject
 */
export class EnemySpaceshipGameObject extends Phaser.GameObjects.Image {
    speed: number;

    static loadImages(scene: Phaser.Scene) {
        scene.load.image('ship', shipImage);
    }

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
        super(scene, x, y, texture, frame);

        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'ship');

        this.speed = Phaser.Math.GetSpeed(100, 1);
    }

    spawn(x: number, y: number) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    };

    update(time: number, delta: number) {
        this.y -= this.speed * delta;

        if (this.y > 300) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

export class EnemySpaceshipPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager: Phaser.Plugins.PluginManager) {
        super(pluginManager);

        pluginManager.registerGameObject('enemySpaceship', this.createSpaceship);
    }

    createSpaceship() {
        // @ts-ignore
        return this.displayList.add(new SpaceshipGameObject(this.scene, 0, 0, shipImage));
    }
}