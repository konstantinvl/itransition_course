import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

import { Coder } from './coder.js';
import { WIN, LOSE, DRAW, STEP } from './common.js';
import HelpTable from './helpTable.js';
import Results from './results.js';

export default class Game {
  compTurn;

  constructor(args) {
    this.options = args;
    this.coder = new Coder(this.options);
    this.results = new Results(this.options);
    this.help = new HelpTable(this.options);

    this.checkOptions();
  }

  checkOptions() {
    if (this.options.length < 3) {
      console.log('Please start the program with at least 3 arguments');
      rl.close();
      return;
    }
    if (!(this.options.length % 2)) {
      console.log('Please start the program with odd number of arguments');
      rl.close();
      return;
    }
    if (Array.from(new Set(this.options)).length !== this.options.length) {
      console.log('Please start the program with unique arguments');
      rl.close();
      return;
    }
    this.startGame();
  }

  startGame() {
    this.setCompTurn();
    this.coder.getHMAC(this.compTurn);
    this.coder.showHMAC();
    this.showGamePlan();
  }

  setCompTurn() {
    this.compTurn = Math.round(Math.random() * (this.options.length - STEP) + STEP);
  }

  showGamePlan() {
    console.log('Available moves:');
    this.options.forEach((play, index) => console.log(`${index + STEP} - ${play}`));
    console.log(`0 - exit`);
    console.log('? - help');
    this.askForUserTurn();
  }

  askForUserTurn() {
    rl.question('What is your turn?  ', (answer) => {
      this.checkUserTurn(answer);
    });
  }

  checkUserTurn(answer) {
    switch (answer) {
      case '0': {
        console.log('Goodbye');
        rl.close();
        break;
      }
      case '?': {
        this.help.showHelpTable();
        this.showGamePlan();
        break;
      }
      default:
        this.resolveResults(this.results.checkResults(answer, this.compTurn));
    }
  }

  resolveResults(result) {
    if (!result) {
      console.log('Enter the correct turn option');
      return this.showGamePlan();
    }
    switch (result) {
      case WIN: {
        console.log('Congratulation! You WIN!!!');
        this.coder.showKey();
        rl.close();
        break;
      }
      case LOSE: {
        console.log('Sorry, but you lose');
        this.coder.showKey();
        rl.close();
        break;
      }
      case DRAW: {
        console.log(`You picked the same option as computer. It's draw`);
        this.coder.showKey();
        rl.close();
        break;
      }
      default:
        break;
    }
  }
}
