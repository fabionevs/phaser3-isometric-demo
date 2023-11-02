export default class Dude {
  constructor(scene, startPosition, isoGroup) {
    this.scene = scene;

    // Create dude
    this.sprite = this.scene.add.isoSprite( startPosition.x, startPosition.y, 10, 'char', isoGroup);
    this.sprite.setOrigin(0.5, 1);

    // Create dude's animations
    const backRightFrames = this.scene.anims.generateFrameNames("char", {
      prefix: "greenhood_walk_back_right_",
      start: 1,
      end: 8,
    });

    this.scene.anims.create({
      key: "walkBackRight",
      frames: backRightFrames,
      repeat: -1,
      frameRate: 12,
      showOnStart: true
    });
    
    const backLeftFrames = this.scene.anims.generateFrameNames("char", {
      prefix: "greenhood_walk_back_left_",
      start: 1,
      end: 8,
    });
    
    this.scene.anims.create({
      key: "walkBackLeft",
      frames: backLeftFrames,
      repeat: -1,
      frameRate: 12,
      showOnStart: true
    });
    
    const frontRightFrames = this.scene.anims.generateFrameNames("char", {
      prefix: "greenhood_walk_front_right_",
      start: 1,
      end: 8
    });
    
    this.scene.anims.create({
      key: "walkFrontRight",
      frames: frontRightFrames,
      repeat: -1,
      frameRate: 12,
      showOnStart: true
    });
    
    const frontLeftFrames = this.scene.anims.generateFrameNames("char", {
      prefix: "greenhood_walk_front_left_",
      start: 1,
      end: 8
    });
    
    this.scene.anims.create({
      key: "walkFrontLeft",
      frames: frontLeftFrames,
      repeat: -1,
      frameRate: 12,
      showOnStart: true
    });
    console.log(this.scene.anims)
  }

  
  stop() {
    this.sprite.anims.stop();
  }
  
  play(animation) {
    this.sprite.play(animation);
  }
  
  get x() {
    return this.sprite.x;
  }

  set x(x) {
    this.sprite.x = x;
  }

  get y() {
    return this.sprite.y;
  }

  set y(y) {
    this.sprite.y = y;
  }

}
