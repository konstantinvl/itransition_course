import { DRAW, WIN, LOSE, STEP } from './common.js';

export default class Results {
  constructor(options) {
    this.options = options;
    this.results = this.setResults(this.options);
  }

  setResults(options) {
    return options.map((_el, index, optionsArr) => {
      let results = [];
      const count = (optionsArr.length - 1) / 2;
      optionsArr.forEach((_arg, argIndex) => {
        const diff = argIndex - index;
        if (!diff) {
          results.push(DRAW);
        } else if ((diff > 0 && diff <= count) || (diff < 0 && diff < -count)) {
          results.push(LOSE);
        } else {
          results.push(WIN);
        }
      });
      return results;
    });
  }

  checkResults(userTurn, compTurn) {
    if (!this.options[userTurn - STEP]) {
      return false;
    }
    console.log('Your turn: ', this.options[userTurn - STEP]);
    console.log('Computer turn: ', this.options[compTurn - STEP]);
    return this.results[userTurn - STEP][compTurn - STEP];
  }
}
