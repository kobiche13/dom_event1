import gameCreate from './UI'

export default class Goblin {
  constructor(fieldCells){
    this.lastCellNumber = undefined;
    this.fieldCells = fieldCells;    
  }

  goblinInit(){
    setInterval(() => {
      this.checkGoblin = document.querySelector('.goblin')
      if (this.checkGoblin !== null) {//если есть - удаляет
        this.checkGoblin.classList.remove('goblin');
      }
      const randomCellNumber = Math.floor(Math.random() * this.fieldCells.length);//получение рандомной ячейки
      if (this.lastCellNumber === randomCellNumber) {
        this.fieldCells.splice(randomCellNumber, 1);
      }
      this.fieldCells[randomCellNumber].classList.add('goblin');//добавляет в рандомную ячейку гоблина
      this.lastCellNumber = randomCellNumber;
    }, 1500)
  }

  goblinClick(event){
    if(event.type == 'click'){
      if(event.target.classList.contains('game-field_cell') && event.target.classList.contains('goblin')){
        this.scoreText.textContent ++
        event.target.classList.remove('goblin')
      } else if(event.target.classList.contains('game-field_cell')){
        this.health.style.backgroundPosition = `-5px -${this.healthPosition}px`
        this.healthPosition = this.healthPosition + 44;
        console.log(this.healthPosition)
        if(this.healthPosition === 269){
          clearInterval(1);
          this.gameOver();
          
        }
      }
    }
  }



}