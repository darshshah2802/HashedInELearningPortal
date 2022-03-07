import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  orderBy: string =  "";
  ngOnInit(): void {
  }

  setOrderByValue(event:any){
    this.orderBy = event.target.value;
  }
}
