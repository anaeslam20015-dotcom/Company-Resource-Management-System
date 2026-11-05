import { Component } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [TreeTableModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  constructor(private dataService: ServiceService) {}

  companyData: any[] = [];

  months: string[] = [
    'Apr 2025',
    'May 2025',
    'Jun 2025',
    'Jul 2025',
    'Aug 2025',
    'Sep 2025',
    'Oct 2025',
    'Nov 2025',
    'Dec 2025',
  ];

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data: any) => {
        this.companyData = data;
        /* console.log(this.companyData); */
      },
      error: (error) => {
        console.log('errorMessage', error.message);
      },
    });
  }

  getStartMonthIndex(startDate: string): number {
    const index = this.months.indexOf(startDate);
    return index !== -1 ? index + 1 : 1;
  }

  getMonthDuration(startDate: string, endDate: string): number {
    const start = this.months.indexOf(startDate);
    const end = this.months.indexOf(endDate);

    if (start !== -1 && end !== -1 && end >= start) {
      return end - start + 1;
    }
    return 1;
  }
}
