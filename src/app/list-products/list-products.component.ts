import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { ProductModel } from '../ProductModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private productdata:ProductdataService, private router:Router) { }

  ngOnInit(): void {
    this.productdata.getlist().subscribe((data) => {
      this.products = data;
    })
  }

  deleteproduct(id: any) {
    console.log(id);
    if (confirm("Are you sure you want to delete this item")) {
      this.productdata.deleteitem(id).subscribe((data) => {
        console.log(data);
        this.products = data;
      })
    }
    this.router.navigateByUrl("list");
  }

}
