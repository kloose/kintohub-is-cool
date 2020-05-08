export class Tag {
    id: number;
    firstName?: string;
    lastName?: string;

    clear() {
        this.firstName = '';
        this.lastName = '';
    }

}
