class Bird {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.spriteName = "bird";
    this.sprite;
    this.scale = 1;
    this.width = 34;
    this.height = 24;
  }

  create(){
    this.sprite = game.add.sprite(this.x, this.y, this.spriteName);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.width * this.scale;
    this.sprite.height = this.height * this.scale;
    
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.body = this.sprite.body;
    
    this.body.gravity.set(0, 800);
    this.body.collideWorldBounds = true;
  }
  
  update(){
    
  }
  
  jump(){
    this.sprite.body.velocity.setTo(0, -250);
  }
}
