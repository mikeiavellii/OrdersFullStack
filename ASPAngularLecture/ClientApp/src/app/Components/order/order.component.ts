import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  newOrder:Order = {} as Order;
  Orders:Order[] =[];
  constructor(private orderService:OrderServiceService) { }

  ngOnInit(): void {
    // this.orderService.getOrders().subscribe((response:Order[]) =>{
    //   console.log(response);
    //   this.Orders = response;
    // });
    this.GetOrders();
  }
  GetOrders():void{
    this.orderService.getOrders().subscribe((response:Order[]) =>{
      console.log(response);
      this.Orders = response;
    });
  }

  CreateOrder():void{
    this.orderService.createOrder(this.newOrder).subscribe((response:Order)=> {
      console.log(response);
      this.GetOrders();
    });
  }
}
