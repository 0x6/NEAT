class PipeManager{
  constructor(){
    this.pipes = [];
    this.delay = 55;
    this.frame = 0;
    this.gap = 80;
    
    this.last = 0;
  }
  
  create(){
    this.addPipe();
  }
  
  addPipe(){
    let variation = 0;
    
    do{
      variation = Math.floor(Math.random() * 301) - 150; 
    }
    while(Math.abs(this.last - variation) > 125);
    this.last = variation;
    
    let top_pipe = new Pipe(game.world.width + 26, 65 - this.gap / 2 + variation, -1);
    top_pipe.create();
    
    let bottom_pipe = new Pipe(game.world.width + 26, game.world.height - 65 + this.gap / 2 + variation, 1);
    bottom_pipe.create();
  }
  
  update(){
    this.frame = this.frame + 1;
    
    if( this.frame % this.delay == 0){
      this.addPipe();
    }
  }
}