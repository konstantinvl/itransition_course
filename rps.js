import Game from './game.js';

const options = process.argv.slice(2, process.argv.length);

new Game(options);
