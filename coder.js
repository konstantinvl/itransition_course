import crypto from 'crypto';

export class Coder {
  hmac;
  constructor() {
    this.key = this.createKey();
  }

  createKey() {
    return crypto.randomBytes(32).toString('hex');
  }

  getHMAC(compTurn) {
    this.hmac = crypto.createHmac('sha3-256', this.key);
    this.hmac.update(compTurn.toString());
  }

  showKey() {
    console.log(`HMAC key: `, this.key);
  }

  showHMAC() {
    console.log(`HMAC: `, this.hmac.digest('hex'));
  }
}
