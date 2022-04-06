import { DRAW, WIN, LOSE } from './common.js';

export default class HelpTable {
  constructor(options) {
    this.helpTable = this.setHelpTable(options);
  }

  setHelpTable(options) {
    const table = [''].concat(Array.from(options));
    return [table].concat(
      options.map((el, index, optionsArr) => {
        let helpTable = [];
        helpTable.push(el);
        const count = (optionsArr.length - 1) / 2;
        optionsArr.forEach((_arg, argIndex) => {
          const diff = argIndex - index;
          if (!diff) {
            helpTable.push(DRAW);
          } else if ((diff > 0 && diff <= count) || (diff < 0 && diff < -count)) {
            helpTable.push(LOSE);
          } else {
            helpTable.push(WIN);
          }
        });
        return helpTable;
      })
    );
  }

  showHelpTable() {
    console.table(this.helpTable);
  }
}
