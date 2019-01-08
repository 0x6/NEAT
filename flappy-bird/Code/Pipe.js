class Pipe{
  constructor(posX, posY, flipped){
    this.x = posX;
    this.y = posY;
    this.spriteName = "pipe";
    this.height = 320;
    this.width = 52;
    this.scale = 1;
    this.flipped = flipped;
  }
  
  create(){
    this.sprite = game.add.sprite(this.x, this.y, this.spriteName);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.width * this.scale;
    this.sprite.height = this.height * this.scale;
    this.sprite.scale.y = this.flipped;
    
    game.add.tween(this.sprite).to( { x: -30 }, 3500, Phaser.Easing.Linear.None, true);
  }
}