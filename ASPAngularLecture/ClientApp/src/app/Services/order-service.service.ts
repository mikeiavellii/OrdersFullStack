import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http:HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}api/Order`);
  }
  createOrder(newOrder:Order):Observable <Order>{
    return this.http.post<Order>(`${this.baseUrl}api/Order?_description=${newOrder.description}&_cost=${newOrder.cost}&_rating=${newOrder.rating}`,{});
  }
}
