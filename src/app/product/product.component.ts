import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "第一个商品，学习慕课Angular入门实战创建的", ["电子产品", "游戏外设"]),
      new Product(2, "第二个商品", 2.99, 4.5, "第二个商品，学习慕课Angular入门实战创建的", ["衣服"]),
      new Product(3, "第三个商品", 3.99, 0.5, "第三个商品，学习慕课Angular入门实战创建的", ["运动器械", "游戏外设"]),
      new Product(4, "第四个商品", 4.99, 1, "第四个商品，学习慕课Angular入门实战创建的", ["电子产品", "数码设备"]),
      new Product(5, "第无个商品", 5.99, 5, "第五个商品，学习慕课Angular入门实战创建的", ["电子产品", "手表"]),
      new Product(6, "第六个商品", 6.99, 5, "第六个商品，学习慕课Angular入门实战创建的", ["零食"]),
    ]
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>)
  {}
}