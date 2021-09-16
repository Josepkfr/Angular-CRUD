import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  personSelected: Person = {
    _id: '',
    name: '',
    cedula: '',
    profession: '',
  };
  people: Person[] = [];
  URL_API = 'http://localhost:3000/api/person';
  constructor(private http: HttpClient) {}

  getPople() {
    return this.http.get<Person[]>(this.URL_API);
  }
  createPerson(person: Person) {
    return this.http.post(this.URL_API, person);
  }
  updatePerson(person: Person) {
    return this.http.put(`${this.URL_API}/${person._id}`, person);
  }

  deletePerson(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
