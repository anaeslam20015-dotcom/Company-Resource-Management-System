import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  Url = 'assets/Company_Data.json';

  getData() {
    return this.http.get<TreeNode[]>(this.Url);
  }
}
