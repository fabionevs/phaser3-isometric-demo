import Phaser from "phaser";
import EasyStar from "easystarjs";
import Dude from "./dude";
import gameState from './gameState'

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: gameState,
  
};

var shader;
var water = [];
const game = new Phaser.Game(config);
