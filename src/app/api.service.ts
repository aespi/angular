import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item-selector/item-selector.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Item[]> {
    const url: string = 'assets/data/selector.json';
    return this.http.get<Item[]>(url);
  }
}
