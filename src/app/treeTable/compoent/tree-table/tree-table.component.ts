import { Component } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-tree-table',
  standalone: true,
  imports: [TreeTableModule],
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css',
})
export class TreeTableComponent {
  constructor(private service: ServiceService) {}

  Data: any[] = [];

  ngOnInit(): void {
    this.service.getData().subscribe({
      next: (data) => {
        this.Data = data;
        console.log(this.Data);
      },
      error: (error) => {
        console.error('errorMessage', error);
      },
    });
  }
}
