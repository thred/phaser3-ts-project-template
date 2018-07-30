import "phaser"

export class IntroScene extends Phaser.Scene
{
	constructor()
	{
		super({
			key: "IntroScene"
		});
	}

	preload(): void
	{
		this.load.image("logo", require("./logo.png"));
	}

	create(): void
	{
		let sprite = this.add.sprite(400, 300, "logo");

		this.tweens.add({
			targets: sprite,
			rotation: Math.PI * 2,
			duration: 5000,
			loop: -1
		});
	}
}