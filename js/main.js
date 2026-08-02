const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#1a1a1a",

    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

let road;
let player;
let cursors;

function preload() {

}

function create() {

    road = this.add.rectangle(
        this.scale.width / 2,
        this.scale.height / 2,
        360,
        this.scale.height,
        0x555555
    );

    this.add.text(
        this.scale.width / 2,
        50,
        "STREET LEGENDS",
        {
            fontSize: "34px",
            color: "#00ffff",
            fontStyle: "bold"
        }
    ).setOrigin(0.5);

    player = this.add.rectangle(
        this.scale.width / 2,
        this.scale.height - 120,
        60,
        110,
        0xff0000
    );

    cursors = this.input.keyboard.createCursorKeys();

    this.input.on("pointermove", (pointer) => {
        if (pointer.isDown) {
            player.x = Phaser.Math.Clamp(pointer.x, 120, this.scale.width - 120);
        }
    });

}

function update() {

    if (cursors.left.isDown) {
        player.x -= 6;
    }

    if (cursors.right.isDown) {
        player.x += 6;
    }

}