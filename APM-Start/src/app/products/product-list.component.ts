import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {

    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage = true;
    
    filteredProducts: IProduct[] = [];
    products: IProduct[]=[];
    productService: ProductService;

    private _listFilter: string = "";
    ratingStar: string = "";

    public get listFilter() : string {
      return this._listFilter;
    }
    public set listFilter(value : string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLowerCase();
      return this.products.filter(a=> a.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private myproductService: ProductService) {
      this.productService = myproductService;
     }

    ngOnInit() {
      this.productService.getProducts().subscribe(products=> {
        this.products = products;
        this.filteredProducts = this.products;
      });
    }

     onNotify(ratingStar: string): void{
      this.ratingStar = ratingStar;
     }
}