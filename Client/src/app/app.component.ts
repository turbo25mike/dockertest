import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { OrdersService } from './orders.service';
import { Address } from './models/address';
import { Order } from './models/order';

@Component({
  selector: 'app-root',  
    providers: [OrdersService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public test: string;
   public title: string;
   public orders: Observable<Order[]>;

   addOrder(){
       var newAddress: Address= {
           Street1: '8905 SW Nimbus Ave',
            Street2: '',
            City: 'Beaverton',
            State: 'OR',
            Zip: '97008'
       }
       
       var newOrder:Order = {
           Id:'',
            FirstName: 'John',
            LastName: 'Doe',
            Address:  newAddress,
            ItemId: '1234567',
            Quantity: 1
       };
       
       this.service.postOrder(newOrder).subscribe(res => alert(res));  
   }
   
    constructor(private service: OrdersService) {
        this.title = 'Hello From Angular!';
        this.service.getTest().subscribe(res => this.test = res);  
        this.service.getOrders().subscribe(res => this.orders = res);  
    }
}