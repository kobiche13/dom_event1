import gameCreate from './UI'


export default class gameField{
  constructor(){
  
  }

  initGameField(){    
    this.game = new gameCreate(16)
    this.game.startWindow()    
    
  }  
  
}
