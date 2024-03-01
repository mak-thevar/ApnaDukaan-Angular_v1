import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productService: ProductService){}

  posts:Post[] = [];

  displayPOST: Post[] = [];

categories: any[]=[];


  loadFromAPI(){
    this.productService.fetchProducts().subscribe(posts => {
      this.posts = posts;
      this.displayPOST= this.posts;
      this.categories = this.posts.map(m=>m.userId);
      this.categories = [...new Set(this.categories)];

      this.categories = this.categories.map(m => ({ value:m, selected: false }));
    })
  }
  ngOnInit(): void {
    this.loadFromAPI();
  }

  filterByTitle(e:Event){
    let value = (e.target as HTMLInputElement).value;
    let startText = value.toLowerCase();
    if(startText === ''){
      this.displayPOST = this.posts;
    }
    else{
    this.displayPOST = this.posts.filter(post => post.title.startsWith(startText));
    }
  }
  

filterByUserId(){
  //let value = (e.target as HTMLInputElement).value;
  //let startText = value.toLowerCase();
  //this.displayPOST = this.posts.filter(p=>p.userId == Number(value));

  const selectedValues = this.categories.filter(item => item.selected).map(item => item.value);
    console.log(selectedValues);
    this.displayPOST = this.posts.filter(p=>selectedValues.includes(p.userId));
}

}
