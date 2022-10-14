import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.page.html',
  styleUrls: ['./order-page.page.scss'],
})
export class OrderPagePage implements OnInit {



 items=[];
  qty: string;
  
  constructor(private route: ActivatedRoute) { }



 ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.items = JSON.parse(params['items']);
    });
  }



}