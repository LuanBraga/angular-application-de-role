import { PERSONS } from './../mock/mock-person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectableDiService {

  constructor() { }

  getPersons() {
    return PERSONS;
  }
}
