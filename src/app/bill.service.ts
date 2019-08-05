import { DeleteItemComponent } from './delete-item/delete-item.component';
import { Sales } from './sales';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseUrl = 'http://localhost:8080/api/customers';

  private _bills: Subject<Sales[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  setSales(sales: Sales[]) {
    this._bills.next(sales);
  }

  getSales() {
    return this._bills;
  }

 
    createInvoice(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/saveinvoice`, customer);
  }

getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  

}
