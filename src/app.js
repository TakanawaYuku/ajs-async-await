/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    console.log('error', error.message);
  } finally {
    console.log('Задача async/await выполнена');
  }
})();
