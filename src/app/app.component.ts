import { Component } from '@angular/core';
import { TreeTableComponent } from './treeTable/compoent/tree-table/tree-table.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ChartComponent } from './chart/component/chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, TreeTableComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project_9';
}
