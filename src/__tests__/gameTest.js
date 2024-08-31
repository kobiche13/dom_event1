import gameGoblin from '../js/goblinLoaded';

test('Создание игрового поля', () => {
  gameGoblin();
  const checkCreateField = document.querySelectorAll('.game-field_cell');
  const checkGoblinInField = document.querySelector('.goblin');
  expect(checkCreateField.length).toBe(16);
  expect(checkGoblinInField).toBe(null);
});
