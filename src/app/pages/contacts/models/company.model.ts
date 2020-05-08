import { Country } from './country.model';
import { Address } from './address.model';

export function defaultCompany(): Company {
  const company = new Company();
  company.clear();
  return company;
}

export class Company {
    key: string;
    name: string;
    parentName: string;
    legalEntity: string;
    addresses?: Address[];
    tags? = [];
    country: Country;
    clear() {
        this.name = '';
        this.addresses = [];
    }
}

export interface CreateCompany {
  name: string;
  country: string;
  addresses?: Address[];
}

export interface UpdateCompany {
  id: number;
  name: string;
  country: string;
  addresses?: Address[];
}
