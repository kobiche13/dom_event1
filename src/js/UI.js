import Goblin from './goblinLoaded'

export default class gameCreate{
    constructor(сountCell){
        this.сountCell = сountCell;    
        this.healthPosition = 49;
    }
    
    startWindow(){
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';
        document.body.appendChild(headerContainer);
        this.searchHeaderContainer = document.querySelector('.header-container');
        this.appendInHeader('btn btn-start', 'button');
        this.btnStart = document.querySelector('.btn')
        document.body.addEventListener('click', this.checkClick.bind(this));
        document.body.addEventListener('mouseover', this.checkMouseover.bind(this));
        document.body.addEventListener('mouseout', this.checkMousout.bind(this))        
    }

    appendInHeader(nameClass, element){
        const el = document.createElement(element);        
        el.className = nameClass;
        this.searchHeaderContainer.appendChild(el);
    }

    checkClick(event){
        if(event.type == 'click'){
                if(event.target.classList.contains('btn-start')){
                    event.target.style.backgroundPosition = '-35px -123px';
                    this.createGameField();
                    this.changeBtn('btn-start', 'btn-restart');
                    this.addScore();
                    this.addHealth();
                    this.createGoblin = new Goblin(this.gameFieldCells); 
                    this.createGoblin.goblinInit();
                    //добавить логику клика по гоблину
                    this.addProperty()                   
                    this.searchField.addEventListener('mousedown', this.cursor.bind(this))
                    this.searchField.addEventListener('mouseup', this.cursor.bind(this)) 
                    this.searchField.addEventListener('click', this.createGoblin.goblinClick.bind(this))
                    
            } else if(event.target.classList.contains('btn-restart')){
                event.target.style.backgroundPosition = '-686px -123px'
                this.searchField.remove()
                this.score.remove()
                this.health.remove()                
                const removeGemeOver = document.querySelector('.gameover-container')
                if(removeGemeOver !== null){   
                    removeGemeOver.remove()
                }
                this.changeBtn('btn-restart', 'btn-start');
                this.healthPosition = 49;
            }
        }
    }


    checkMouseover(event){
        if(event.type == 'mouseover'){
            if(event.target.classList.contains('btn-start')){
                event.target.style.backgroundPosition = '-35px -74px';
            } else if(event.target.classList.contains('btn-restart')){
                event.target.style.backgroundPosition = '-686px -74px';
            } else if(event.target.classList.contains('game-field_cell')){
                this.gameFieldCell = document.querySelector('.game-field_cell')
                event.target.style.cursor = 'pointer)';
            }
        }
    }

    checkMousout(event){
        if(event.type == 'mouseout'){
            if(event.target.classList.contains('btn-start')){
                event.target.style.backgroundPosition = '-35px -25px';
            } else if(event.target.classList.contains('btn-restart')){
                event.target.style.backgroundPosition = '-686px -25px';
            }
        }
    }

    createGameField(){
        const gameField = document.createElement('div');
        gameField.className = 'game-field';
        document.body.append(gameField);
        const searchField = document.querySelector('.game-field');
        for (let i = 0; i < this.сountCell; i += 1) {
          const fieldCell = document.createElement('div');
          fieldCell.className = 'game-field_cell';
          searchField.append(fieldCell);
        }
        this.gameFieldCells = Array.from(document.querySelectorAll('.game-field_cell'));
        document.body.style.alignItems='normal';
    }

    changeBtn(oldNameClass, newNameClass){
        const searchBtn = document.querySelector('.'+oldNameClass);
        searchBtn.style.backgroundPosition = null;
        searchBtn.classList.remove(oldNameClass);
        searchBtn.classList.add(newNameClass);
    }

    addHealth(){
        this.appendInHeader('header-container__health', 'div');
        const searchHealth = document.querySelector('.header-container__health');
        searchHealth.style.display = 'block';
    }

    addScore(){
        const elementHeader = document.createElement('div');        
        elementHeader.className = ('header-container__score');
        this.searchHeaderContainer.appendChild(elementHeader);
        this.searchHeaderContainerScore = document.querySelector('.header-container__score');
        this.addScoreChild();
    }

    addScoreChild(){
        const elementHeaderImg = document.createElement('div');        
        elementHeaderImg.className = ('header-container__score-img');
        this.searchHeaderContainerScore.appendChild(elementHeaderImg);
        const elementHeaderText = document.createElement('div');        
        elementHeaderText.className = ('header-container__score-text');
        elementHeaderText.textContent = 0;
        this.searchHeaderContainerScore.appendChild(elementHeaderText);
    }

    cursor(event){
        if(event.type == 'mousedown'){
          if(event.target.classList.contains('game-field_cell')){
            event.target.classList.add('mosedown')
          }                
        }else if(event.type == 'mouseup'){
            if(event.target.classList.contains('game-field_cell')){
                event.target.classList.remove('mosedown')
            }
        }
    }



    addProperty(){
        this.searchField = document.querySelector('.game-field')
        this.scoreText = document.querySelector('.header-container__score-text')
        this.health = document.querySelector('.header-container__health')
        this.score = document.querySelector('.header-container__score')
       
    }

    gameOver(){
        if(this.healthPosition === 269){
            const endGame = document.createElement('div')        
            endGame.className = ('gameover-container')
            document.body.appendChild(endGame)
            const endGameContainer = document.querySelector('.gameover-container')
            const gameOverImg = document.createElement('img')
            gameOverImg.src ='../src/img/gameover.png'
            gameOverImg.className = ('gameover-window')
            endGameContainer.appendChild(gameOverImg)
            const el = document.createElement('button')       
            el.className = 'btn btn-restart'
            endGameContainer.appendChild(el)
        }
    }
}

