import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductdataService } from '../services/productdata.service';
import { ProductModel } from '../ProductModel';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productobjid:number = 0;
  productid:number = 0;
  productname:string = "";
  productdesc:string = "";
  productprice:number = 0;
  productunits:number = 0;

  constructor(private route:ActivatedRoute, private router:Router, private productdata:ProductdataService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      var paramid = params.get("id");
      
      this.productdata.getitem(paramid).subscribe(data => {
        console.log(data);
        this.productid = data.prod[0].id;
        this.productname = data.prod[0].name;
        this.productdesc = data.prod[0].description;
        this.productprice = data.prod[0].price;
        this.productunits = data.prod[0].units;
      });
    });

    // this.productobjid = this.route.snapshot.params['id'];
    // this.productdata.getitem(this.prod).subscribe((data)=>{
    //   this.productid = data.prod.id
    //   this.productname = data.prod.name
    //   this.productdesc = data.prod.description
    //   this.productprice = data.prod.price
    //   this.productunits = data.prod.units
    // })
  }

  updateItem() {
    var prod:ProductModel = {
      id: this.productid,
      name: this.productname,
      description: this.productdesc,
      price: this.productprice,
      units: this.productunits,
    };
    this.productdata.updateitem(prod).subscribe(data=>{
      if(data == true) {
        this.router.navigateByUrl("list");
      } else {
        console.log("error");
      }
    })
  }

}
