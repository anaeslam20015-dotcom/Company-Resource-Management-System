import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private serivce: ServiceService) {}
  date: string = 'Apr 2025 - Dec 2025';
  Componay_Data: any = [];
  totalEmployees = 0;
  totalDepartments = 0;
  totalSubDepartments = 0;

  ngOnInit(): void {
    this.serivce.getData().subscribe({
      next: (data: any) => {
        this.Componay_Data = data;

        const company = data[0];

        this.totalEmployees = company.data.employees;
        console.log(this.totalEmployees);

        const departments = company.children;
        this.totalDepartments = departments.length;

        this.totalSubDepartments = departments.reduce(
          (total: number, department: any) => {
            return total + department.children?.length;
          },
          0,
        );

        this.Componay[0].total = this.totalEmployees;
        this.Componay[1].total = this.totalDepartments;
        this.Componay[2].total = this.totalSubDepartments;
      },
      error: (error) => {
        console.log('ERRORMESSAGE', error.message);
      },
    });
  }

  Componay = [
    {
      image: 'pi pi-user',
      title: 'Total employees',
      total: 0,
    },
    {
      image: 'pi pi-building',
      title: 'Total Departments',
      total: 0,
    },
    {
      image: 'pi pi-user',
      title: 'Total Sub Departments',
      total: 0,
    },
  ];
}
