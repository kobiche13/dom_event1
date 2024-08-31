import gameField from './js/gameField';
import './css/style.css';
import './js/gameField';
import gemeCreate from './js/UI'

window.addEventListener("load", () => {
    const app = new gameField();
    app.initGameField();
});
