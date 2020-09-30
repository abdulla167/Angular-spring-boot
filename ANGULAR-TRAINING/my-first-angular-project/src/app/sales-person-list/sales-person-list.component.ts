import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of salesperson objects
  salesPersonList : SalesPerson[] = [new SalesPerson("ahmed", "eid", "ahmedeid@yahoo.com", 10)
, new SalesPerson("mohamed", "ahmed", "mohamedahmed@gmail.com", 5), new SalesPerson("abdulla", "elsayed", "abdullaelsayed167@yahoo.com", 15)]
  constructor() { }

  ngOnInit(): void {
  }

}
