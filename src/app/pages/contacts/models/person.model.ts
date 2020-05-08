import { Tag } from '../../../tags/models/tag.model';
import { EmailAddress } from './email.model';

export class Person {
    key: string;
    firstName: string;
    lastName: string;
    countryOfResidence: string;
    emailAddress?: EmailAddress;
    roles?: string[];
    tags?: Tag[];

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.tags = [];
        this.roles = [];
    }

}

export function defaultPerson(): Person {
  const person = new Person();
  person.clear();
  return person;
}

export interface CreatePerson {
  firstName: string;
  lastName: string;
  tags: Tag[];
}

export interface UpdatePerson {
  key: string;
  firstName: string;
  lastName: string;
  tags: Tag[];
}
