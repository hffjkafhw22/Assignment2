import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition } from '@angular/animations';
import { Products } from '../product';


@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css'],
  
  animations:[
    trigger('iderrorState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),


    ]),
    trigger('noticeState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),


    ])
  ]
})
export class AddaccountComponent implements OnInit {

  productobjid:string = "";
  productid:number= null;
  productname:string = "";
  productunits:number= null;
  productdescription:string = ""; //add new content
  productprice:number= null;
  newprod:Products;
  newProductMessage="";
  iderrormsg:string = "This id already exists & New ID is required.";
  iderrormsg2:string="";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
