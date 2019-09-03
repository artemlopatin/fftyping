import Phaser from 'phaser'
import {SceneInterface} from '../SceneInterface';
import {PlayerSpaceshipGameObject, PlayerSpaceshipPlugin} from './PlayerSpaceship';

export class BattlefieldScene extends Phaser.Scene implements SceneInterface {

    constructor(config: any) {
        super(config);
    }

    init(data: object) {
    }

    preload() {
        this.load.plugin('PlayerSpaceshipPlugin', PlayerSpaceshipPlugin, true);

        PlayerSpaceshipGameObject.loadImages(this);
    }

    create(data: object) {
        // @ts-ignore
        this.add.playerSpaceship();
    }

    update(time: number, delta: number) {
    }
}