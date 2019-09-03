import Phaser from 'phaser';
import shipImage from './images/ship.png';

/**
 * Player Spaceship GameObject
 */
export class PlayerSpaceshipGameObject extends Phaser.GameObjects.Image {
    static loadImages(scene: Phaser.Scene) {
        scene.load.image('ship', shipImage);
    }

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
        super(scene, x, y, texture, frame);

        this.setOrigin(0, 0);
        this.displayHeight = 250;
    }
}

export class PlayerSpaceshipPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager: Phaser.Plugins.PluginManager) {
        super(pluginManager);

        pluginManager.registerGameObject('playerSpaceship', this.createSpaceship);
    }

    createSpaceship() {
        // @ts-ignore
        return this.displayList.add(new PlayerSpaceshipGameObject(this.scene, 0, 350, 'ship'));
    }
}