import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  p=1;
  searchText='';
    constructor() { }

    ngOnInit() {
    }
    employee=[
      {
        id:'edcfvgbhnjm',
        customerUserName:'abdull',
        totalAmount:200,
        currency:'PKR',
        status:'Delivered'
      },
      {
        id:'edcfvgbhnjm',
        customerUserName:'abdull',
        totalAmount:200,
        currency:'PKR',
        status:'Delivered'
      }
      ,{
        id:'edcfvgbhnjm',
        customerUserName:'abdull',
        totalAmount:200,
        currency:'PKR',
        status:'Delivered'
      }
      ,{
        id:'edcfvgbhnjm',
        customerUserName:'abdull',
        totalAmount:200,
        currency:'PKR',
        status:'Delivered'
      }
      ,{
        id:'edcfvgbhnjm',
        customerUserName:'abdull',
        totalAmount:200,
        currency:'PKR',
        status:'Delivered'
      }
      ,{
        id:'edcfvgbhnjm',
        customerUserName:'abdull',
        totalAmount:200,
        currency:'PKR',
        status:'Delivered'
      }
    ]
    filterCondition(product) {


      return product.id.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
      }
}
