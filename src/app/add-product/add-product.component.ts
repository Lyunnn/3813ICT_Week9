import { Component, OnInit} from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { ProductModel } from '../ProductModel';
import { Router } from '@angular/router';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
  // animations:[
  //   trigger('iderrorState', [
  //     state('show', style({
  //       opacity:1,
  //       display:'block'
  //     })),
  //     state('hide', style({
  //       opacity:0,
  //       display:'none'
  //     })),
  //     transition('show => hide', animate('1000ms ease-out')),
  //     transition('hide => show', animate('400ms ease-in')),
  //   ]),
  //   trigger('noticeState', [
  //     state('show', style({
  //       opacity:1,
  //       display:'block'
  //     })),
  //     state('hide', style({
  //       opacity:0,
  //       display:'none'
  //     })),
  //     transition('show => hide', animate('1000ms ease-out')),
  //     transition('hide => show', animate('400ms ease-in')),
  //   ])
  // ]
})
export class AddProductComponent implements OnInit {

  productobjid:number = 0;
  productid:number = 0;
  productname:string = "";
  productdesc:string = "";
  productprice:string = "";
  productunits:number = 0;

  iderrormsg: string = "";
  // iderrorshow: boolean = false;
  // noticeshow: boolean = false;

  constructor(private productdata:ProductdataService, private router:Router) { }

  ngOnInit(): void {
  }

  // get stateName() {
  //   return this.iderrorshow ? 'show':'hide';
  // }

  // get noticeName() {
  //   return this.noticeshow ? 'show':'hide';
  // }

  addnewProduct() {
    var newprod:ProductModel = {
      id: this.productid,
      name: this.productname,
      description: this.productdesc,
      price: parseFloat(this.productprice).toFixed(2),
      units: this.productunits
    };
    console.log(newprod);
    if(this.productid == null) {
      this.iderrormsg = "This id already exists";
    } else {
      this.productdata.add(newprod).subscribe(data => {
        if(data.num == 0) {
          console.log("duplicate item");
        } else {
          this.router.navigateByUrl("list");
        }
      })
    }
  }

}
