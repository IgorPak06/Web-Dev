import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe(data => {
      this.vacancies = data;
    });
  }
}
