import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.personService.getPople().subscribe(
      (res) => {
        this.personService.people = res;
      },
      (error) => console.log(error)
    );
  }

  addPerson(form: NgForm) {
    if (form.value._id) {
      this.personService.updatePerson(form.value).subscribe(
        (res) => {
          this.getPeople();
          form.reset();
        },
        (error) => console.log(error)
      );
    } else {
      this.personService.createPerson(form.value).subscribe(
        (res) => {
          this.getPeople();
          form.reset();
        },
        (error) => console.log(error)
      );
    }
  }

  deletePerson(id: string) {
    const res = confirm('Estas seguro de querer eliminar');
    if (res) {
      this.personService.deletePerson(id).subscribe(
        (res) => {
          this.getPeople();
        },
        (error) => console.log(error)
      );
    }
  }

  editPerson(person: Person) {
    this.personService.personSelected = person;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
