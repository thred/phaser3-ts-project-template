import { IntroScene } from "./intro/intro.scene"
import "./style.css"
import "phaser"

new Phaser.Game({
    type: Phaser.AUTO,
    parent: "content",
    width: 800,
    height: 600,
    resolution: 1,
    backgroundColor: "black",
    scene: [
        IntroScene
    ]
});
