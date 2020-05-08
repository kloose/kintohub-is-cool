export class TelephoneNumber {
    id: number;
    number: number;
    countryCode: number;
    type: string;

    clear() {
      this.number = 0;
      this.countryCode = 0;
      this.type = '';
    }

}
