import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
import { Order } from './models/order';

@Injectable()
export class OrdersService {
    private apiURL:string = 'http://localhost:5000/api/';
  constructor(private http: Http) {}
  getTest( ) {
    return this.http.get(this.apiURL + 'test').map(res => res.json());
  }
    
  getOrders( ) {
    return this.http.get(this.apiURL + 'order').map(res => res.json());
  }
    
  postOrder(newOrder:Order) {
    return this.http.post(this.apiURL + 'order', newOrder, null).map(res => res.json());
  }
}


