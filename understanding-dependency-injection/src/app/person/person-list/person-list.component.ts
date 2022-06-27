import { InjectableDiService } from './../../service/injectable-di.service';
import { PersonModel } from './../../model/person-model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: PersonModel[];
  selectedPerson!: PersonModel;

  constructor( 
    private router: Router,
    private pensonService : InjectableDiService
  ) { 
    this.persons = this.pensonService.getPersons();
  }

  ngOnInit(): void {
    console.log(this.persons);
  }

}
