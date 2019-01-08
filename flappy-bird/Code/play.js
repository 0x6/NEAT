const playState = {
  // automatically called
  preload: () => {
    pipeManager = new PipeManager();
    bird = new Bird(game.world.width * 0.5, game.world.height * 0.5);
    
    jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    jumpKey.onDown.add(jump, this);
  },

  // automatically called
  create: () => {
    //Instantiate game entities
    pipeManager.create();
    bird.create();
  },

  // called every frame
  update: () => {
    pipeManager.update();
  }
}

jump = () => {
  bird.jump();
}
