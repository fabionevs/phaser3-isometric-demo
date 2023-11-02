import Phaser from "phaser";
import EasyStar from "easystarjs";
import Dude from "./dude";
import IsoPlugin, { IsoPhysics, Point3 } from 'phaser3-plugin-isometric';

const mapData = [
    [2, 2, 1, 1, 4, 4, 1, 6, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 1, 6, 2, 2, 2],
    [2, 6, 1, 0, 4, 4, 0, 0, 2, 2, 2, 2, 2, 6, 1, 0, 4, 4, 0, 0, 2, 2, 2],
    [6, 1, 0, 0, 4, 4, 0, 0, 2, 2, 2, 2, 6, 1, 0, 0, 4, 4, 0, 0, 2, 2, 2],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 4, 4, 0, 0, 0, 2, 2],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [1, 1, 7, 1, 3, 3, 1, 7, 1, 1, 1, 1, 1, 1, 7, 1, 3, 3, 1, 7, 1, 1, 1],
    [3, 7, 3, 3, 3, 3, 3, 3, 7, 3, 3, 1, 3, 7, 3, 3, 3, 3, 3, 3, 7, 3, 3],
    [7, 1, 7, 7, 3, 3, 7, 7, 1, 1, 7, 1, 7, 1, 7, 7, 3, 3, 7, 7, 1, 1, 7],
    [2, 2, 1, 1, 4, 4, 1, 6, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 1, 6, 2, 2, 2],
    [2, 6, 1, 0, 4, 4, 0, 0, 2, 2, 2, 2, 2, 6, 1, 0, 4, 4, 0, 0, 2, 2, 2],
    [6, 1, 0, 0, 4, 4, 0, 0, 2, 2, 2, 2, 6, 1, 0, 0, 4, 4, 0, 0, 2, 2, 2],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 4, 4, 0, 0, 0, 2, 2],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [1, 1, 7, 1, 3, 3, 1, 7, 1, 1, 1, 1, 1, 1, 7, 1, 3, 3, 1, 7, 1, 1, 1],
    [3, 7, 3, 3, 3, 3, 3, 3, 7, 3, 3, 1, 3, 7, 3, 3, 3, 3, 3, 3, 7, 3, 3],
    [7, 1, 7, 7, 3, 3, 7, 7, 1, 1, 7, 1, 7, 1, 7, 7, 3, 3, 7, 7, 1, 1, 7]
];

const object = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 1, 4, 0, 0, 4, 0, 0, 4, 3, 1, 2, 3, 0, 0, 0, 0, 0, 0, 4, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 1, 4, 0, 0, 4, 0, 0, 4, 3, 1, 2, 3, 0, 0, 0, 0, 0, 0, 4, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const direction = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const walkable = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export default class State extends Phaser.Scene {

    constructor() {
        const sceneConfig = {
            key: 'IsoCollisionExample',
            mapAdd: { isoPlugin: 'iso', isoPhysics: 'isoPhysics' }
        };

        super(sceneConfig);
    }

    static get size() {
        return 36;
    }

    static get startPosition() {
        return {
            x: State.size * (11 - 0.5),
            y: State.size * (11 - 0.5),
        };
    }

    dudePosition() {
        return {
            x: Math.round(this.dude.x / State.size + 0.5),
            y: Math.round(this.dude.y / State.size + 0.5)
        };
    }



    preload() {
        this.load.atlas(
            "tileset",
            "assets/sprites/tileset.png",
            "assets/sprites/tileset.json"
        );
        this.load.atlas(
            "char",
            "assets/sprites/char.png",
            "assets/sprites/char.json"
        );
        this.load.atlas(
            "object",
            "assets/sprites/object.png",
            "assets/sprites/object.json"
        );
        this.load.scenePlugin({
            key: 'IsoPlugin',
            url: IsoPlugin,
            sceneKey: 'iso'
        });
        

        //this.load.on('complete', () => {
         //   createAnimations(this);
        //    this.scene.start('GameScene');
        //})

    }

    update() {
        // Update the cursor position.
        this.cursorPos.x = this.input.activePointer.worldX;
        this.cursorPos.y = this.input.activePointer.worldY;
        // Loop through all tiles
        this.groundGroup.children.iterate((tile) => {
            const x = tile.isoX / State.size;
            const y = tile.isoY / State.size;

            const inBounds = tile.selected;
            // Test to see if the cursor position intersects with the automatically generated IsoSprite tile bounds.
            if (!tile.selected && inBounds && !this.water.includes(tile)) {
                // If it does, do a little animation and tint change.
                tile.selected = true;
                if (!tile.inPath) {
                    tile.setTint(0x86bfda);
                }
                this.tweens.add({
                    targets: tile,
                    isoZ: { value: tile.initialZ + 4, duration: 200, ease: 'Power2' },
                });
            } else if (tile.selected && !inBounds) {
                // If not, revert back to how it was.
                tile.selected = false;
                if (!tile.inPath) {
                    tile.clearTint();
                }
                this.tweens.add({
                    targets: tile,
                    isoZ: { value: tile.initialZ, duration: 200, ease: 'Power2' },
                });
            }

            if (!this.finding && this.input.activePointer.isDown && inBounds) {
                // Start path finding
                this.finding = true;
                const tileX = Math.floor(this.dude.sprite.isoX / State.size);
                const tileY = Math.floor(this.dude.sprite.isoY / State.size);
                this.easystar.findPath(tileX, tileY, tile.data.x, tile.data.y, this.processPath.bind(this));
                this.easystar.calculate();
                tile.selected = false;
            }
        });

        this.water.forEach((waterTile) => {
            waterTile.isoZ =
                waterTile.initialZ +
                (-2 * Math.sin((this.time.now + (waterTile.x * 7)) * 0.004)) +
                (-1 * Math.sin((this.time.now + (waterTile.y * 8)) * 0.005));
            waterTile.alpha = Phaser.Math.Clamp(1 + (waterTile.isoZ * 0.1), 0.2, 1);
        });

        if (this.isMoving) {
            this.move();
        }

    }

    create() {
        this.cursorPos = { x: 0, y: 0, z: 0 };
        this.isoGroup = this.add.group();

        this.time.advancedTiming = true;

        this.iso.projector.origin.setTo(0.5, 0.5);

        this.easystar = new EasyStar.js();
        this.water = []

        this.easystar.setGrid(walkable);
        this.easystar.setAcceptableTiles([1]);
        this.finding = false;

        this.cameras.main.setZoom(1);
        const controlConfig = {
            camera: this.cameras.main,
            acceleration: 0.05,
            drag: 0.0005,
            maxSpeed: 0.4
        };
        const tileSize = 64; // Adjust this to match your tile size

        // Create a group to hold your tiles
        this.groundGroup = this.add.group();
        this.objectGroup = this.add.group();

        const groundNames = [];
        groundNames[0] = "water";
        groundNames[1] = "sand";
        groundNames[2] = "grass";
        groundNames[3] = "stone";
        groundNames[4] = "wood";
        groundNames[5] = "watersand";
        groundNames[6] = "grasssand";
        groundNames[7] = "sandstone";
        groundNames[8] = "bush1";
        groundNames[9] = "bush2";
        groundNames[10] = "mushroom";
        groundNames[11] = "wall";
        groundNames[12] = "window";

        const objectNames = [];
        objectNames[0] = "";
        objectNames[1] = "bush_2";
        objectNames[2] = "bush_3";
        objectNames[3] = "bush_5";
        objectNames[4] = "oak3";
        objectNames[5] = "oak2";
        for (let y = 0; y < mapData.length; y++) {
            for (let x = 0; x < mapData[y].length; x++) {
                // Calculate the isometric position

                // Create a tile sprite
                const gValue = mapData[y][x];
                const groundName = groundNames[gValue];
                const groundTile = this.add.isoSprite(State.size * x, State.size * y, 0, 'tileset', this.groundGroup, groundName);
                groundTile.setInteractive();
                groundTile.isoZ = 0;
                groundTile.data = { x: x, y: y }
                groundTile.on('pointerover', function () {
                    this.setTint(0x86bfda);
                    this.isoZ += 5;
                });

                groundTile.on('pointerout', function () {
                    this.clearTint();
                    this.isoZ -= 5;
                });

                groundTile.on('pointerdown', function (pointer) {
                    this.selected = true;
                });

                this.groundGroup.add(groundTile);

                if (gValue === 0) {
                    // Add to water tiles
                    groundTile.initialZ = -4;
                    this.water.push(groundTile);
                }
                if (gValue === 4) {
                    // Make bridge higher
                    groundTile.isoZ += 4;
                    groundTile.initialZ += 4;

                    // Put tile under bridge
                    const waterUnderBridge = this.add.isoSprite(State.size * x, State.size * y, 0, 'tileset', this.groundGroup, groundNames[0]);

                    //waterUnderBridge.anchor.set(0.5, 1);
                    //waterUnderBridge.initialZ = -4;
                    waterUnderBridge.originX = 0.5;
                    waterUnderBridge.originY = 1;
                    waterUnderBridge.initialZ = -4;
                    this.water.push(waterUnderBridge);
                }
            }
        }

        for (let y = 0; y < mapData.length; y++) {
            for (let x = 0; x < mapData[y].length; x++) {
                const isoX = (x - y) * (tileSize / 2);
                const isoY = (x + y) * (tileSize / 4);

                const oValue = object[y][x];

                if (oValue !== 0) {
                    const objectName = objectNames[oValue];
                    const objectTile = this.add.isoSprite(State.size * x, State.size * y, 0, 'object', this.objectGroup, objectName);
                    objectTile.setOrigin(1, 1);
                    objectTile.originX = direction[y][x];
                    objectTile.originY = 1;
                    this.objectGroup.add(objectTile);
                }

                // Set a specific tile image based on the value in the mapData
            }
        }


        this.dude = new Dude(this, State.startPosition, this.isoGroup);
        this.objectGroup.add(this.dude.sprite);
        this.cameras.main.startFollow(this.dude, true, 0.05, 0.05);
    }

    async getDudePosition() {
        const dudeX = this.dude.x;
        const dudeY = this.dude.y;

        return await this.groundGroup.children.entries.find((tile) => {
            return tile.isoX === dudeX && tile.isoY === dudeY;
        });
    }

    move() {
        if (!this.path || this.pathIndex === this.path.length) {
            // No path or finished moving
            this.isMoving = false;
            this.path = null;
            this.dude.stop();
            return;
        }

        const target = this.path[this.pathIndex];

        // Calculate the difference between the current position and the target position
        const dx = (this.dude.sprite.isoX - target.x * State.size);
        const dy = (this.dude.sprite.isoY - target.y * State.size);

        if (dx === 0 && dy === 0) {
            // Reached the next tile
            this.pathIndex += 1;
        } else {
            // Determine the direction
            const directionX = Math.sign(dx);
            const directionY = Math.sign(dy);

            // Update the character's isometric position based on direction
            this.dude.sprite.isoX -= directionX;
            this.dude.sprite.isoY -= directionY;

            // Play the appropriate animation
            if (directionX < 0) {
                this.dude.play('walkFrontLeft');
            } else if (directionX > 0) {
                this.dude.play('walkBackLeft');
            } else if (directionY < 0) {
                this.dude.play('walkFrontRight');
            } else if (directionY > 0) {
                this.dude.play('walkBackRight');
            }
        }
    }


    processPath(path) {
        this.finding = false;
        if (!path || path.length === 0) {
            return;
        }

        // Keep moving if already moving towards same direction;
        if (this.isMoving && this.pathIndex < this.path.length && path.length > 1
            && this.path[this.pathIndex].x === path[1].x && this.path[this.pathIndex].y === path[1].y) {
            this.pathIndex = 1;
        } else {
            this.pathIndex = 0;
        }

        this.isMoving = true;
        // Loop tiles
        this.groundGroup.children.entries.forEach((t) => {
            const tile = t;
            if (tile.inPath) {
                // Clear tint from previous path
                tile.tint = 0xffffff;
            }
            const x = tile.isoX / State.size;
            const y = tile.isoY / State.size;
            const inPath = path.some(point => point.x === x && point.y === y);
            if (inPath) {
                tile.tint = 0xaa3333;
                tile.inPath = true;
            } else {
                tile.inPath = false;
            }
        });
        this.path = path;
    }

}