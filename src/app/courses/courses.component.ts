import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { COURSES, COURSE_TYPE, MODAL_MESSAGES, PAGE_SIZE } from './constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnChanges {

  @Input() orderBy: string = "";
  @Input() searchInput: string = "";

  courseService: CoursesService;
  courseList:any;
  cartList: any = [];
  router: Router;
  activatedRoute: ActivatedRoute;

  modalMessage: string = '';
  modalIntent = '';
  recommendCourses:any = [];
  showModal = false;
  selectedPage: number = 0;
  totalNoOfRecords: number =0;
  totalPageCount:number  =0 ;
  pageSize:number = PAGE_SIZE;
  cartTotal:number = 0;
  cartSaving:number = 0;

  constructor(courseService: CoursesService, activateRoute: ActivatedRoute, router: Router) {
    this.courseService = courseService;
    this.activatedRoute = activateRoute;
    this.router = router;
  }

  setModalMessage(message: string, intent: string, showModal: boolean) {
      this.modalIntent = intent;
      this.showModal =showModal;
      this.modalMessage = message;
  }

  ngOnInit(): void {
    this.getCourseData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['searchInput'] && changes['searchInput'].previousValue !== changes['searchInput'].currentValue){
      this.getCourseData();
    }

    if(changes['orderBy'] && changes['orderBy'].previousValue !== changes['orderBy'].currentValue){
      this.getCourseData();
    }

  }

  getCourseData(){
    let courses: any[] = [];
    if(this.router.url === "/checkout"){
      this.courseList = this.courseService.getCartList();
      this.totalPageCount = 0;
      this.cartTotal = this.courseService.cartTotal;
      this.cartSaving = this.courseService.cartSaving;
      this.recommendCourses = this.courseService.getRecommendCourses();
    }else if (this.router.url === "/wishlist"){
      this.courseList = this.courseService.getWishListData();
      this.cartList = this.courseService.getCartList();
      this.totalPageCount = 0;
      this.cartTotal = this.courseService.cartTotal;
      this.cartSaving = this.courseService.cartSaving;
    }else{
      this.courseList = this.courseService.getCourses(this.selectedPage, this.orderBy, this.searchInput);
      this.cartList = this.courseService.getCartList();
      this.cartTotal = this.courseService.cartTotal;
      this.setTotalPages();
    }
    // courses.forEach(course => this.checkDateAndApplyDiscount(course));
    // this.courseList = courses;
  }

  setTotalPages() {
    this.totalNoOfRecords = this.courseService.totalPages;
    this.totalPageCount = Math.floor(this.totalNoOfRecords / this.pageSize);
  }

  addToCart(course: COURSE_TYPE){
    if(this.courseService.checkIfCourseIsInCart(course.id)){
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_CART_ERROR, 'error', true);
    }else{
      this.courseService.addToCart(course);
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_CART_SUCCESS, 'success', true);
      this.cartList = this.courseService.getCartList();
      this.cartTotal = this.courseService.cartTotal;
    }
  }

  addToWishList(course: COURSE_TYPE){
    if(this.courseService.checkIfCourseIsInWishList(course.id)){
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_WISHLIST_ERROR, 'error', true);
    }else{
      this.courseService.addToWishList(course);
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_WISHLIST_SUCCESS, 'success', true);
    }

    // if(this.router.url === "/checkout") {
    //   this.removeFromCart(course);
    // }
  }

  removeFromCart(course: COURSE_TYPE) {
    this.courseList = [...this.courseService.removeItemFromCart(course.id)];
    this.cartTotal = this.courseService.cartTotal;
    this.cartSaving = this.courseService.cartSaving;
  }

  removeCourse(course: COURSE_TYPE){
    if(this.router.url === "/checkout"){
      this.removeFromCart(course);
    }else{
      this.courseList = [...this.courseService.removeItemFromWishList(course.id)];
    }
  }

  onPageChange(page: number) {
    this.selectedPage = page;
    this.courseList = this.courseService.getCourses(page, "", "");
  }

  orderPlaced() {
    this.setModalMessage(MODAL_MESSAGES.ORDER_PLACED, 'success', true);
  }

}
