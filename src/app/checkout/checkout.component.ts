import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  courseService: CoursesService;
  cartList:any = [];
  subscription:any;

  constructor(courseService: CoursesService) {
    this.courseService = courseService;

   }


  ngOnInit(): void {
    this.cartList = this.courseService.getCartList();
    this.subscription = this.courseService.cartChanged.subscribe(
      (data) => {
        this.cartList = this.courseService.getCartList();
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
