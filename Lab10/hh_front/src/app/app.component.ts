import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';
import { Company } from './models/company';
import { Vacancy } from './models/vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyVacancies: Vacancy[] = [];
  selectedCompanyName: string = '';

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number, companyName: string): void {
    this.selectedCompanyName = companyName;
    this.companyService.getCompanyVacancies(companyId).subscribe((data) => {
      this.selectedCompanyVacancies = data;
    });
  }
}
