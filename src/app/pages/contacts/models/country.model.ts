
export class Country {
    id?: number;
    name: string;
    dialingCode: string;
    code: string;

    constructor(props?) {
        if (props) {
            this.id = props.id;
            this.name = props.name;
            this.code = props.code;
        }
    }

    clear() {
        this.name = '';
        this.code = '';
    }

}

export interface CreateCountry {
  name: string;
  code: string;
}

export interface UpdateCountry {
  id: string;
  name: string;
  code: string;
}
