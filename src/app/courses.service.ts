import { Injectable } from '@angular/core';
import {COURSES, COURSE_TYPE, PAGE_SIZE} from "./courses/constants";
import { Subject } from 'rxjs';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';

interface ICart {
  [key: string]: COURSE_TYPE;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
    // this.courses = [...COURSES.map(course => this.checkDateAndApplyDiscount({...course}))];
   }

  courseAdded = new Subject<void>();
  cartChanged = new Subject<void>();
  public cartTotal:number = 0;
  public cartSaving:number = 0;
  private savings = 0;
  private cartObj: ICart = {};
  private wishListObj:ICart = {};
  courses = COURSES;
  pageSize =  PAGE_SIZE;

  totalPages= COURSES.length;

  setSlicedArray = (currentPage: number, dataSet: any) => {
    this.pageSize = PAGE_SIZE
    let startIndex;
    this.totalPages = dataSet.length;
    if(this.totalPages < this.pageSize && this.totalPages > 0) {
      this.pageSize = this.totalPages
    }
    if(currentPage === 0) {
      startIndex = 0;
    }else {
      startIndex = this.pageSize*currentPage;
    }
    const slicedArray = [];
    for (let index = startIndex; index < (startIndex+this.pageSize); index++) {
      if(dataSet[index] && dataSet[index].id) {
        slicedArray.push(dataSet[index]);
      }
    }
    return slicedArray;
  }

  getCartList() {
    return Object.values(this.cartObj);
  }

  getWishListData() {
    return Object.values(this.wishListObj);
  }

  checkDateAndApplyDiscount(course: any){
    if(course.discountValidTill !== ''){
      const timeLeft = Math.floor((<any>new Date(course.discountValidTill) - <any>new Date())/(36e5));
      if(timeLeft > 0 && timeLeft <= 12){
        course.originalPrice = course.price;
        course.discountPrice = Math.floor((course.price * course.discount)/100);
        course.price = course.price - Math.floor((course.price * course.discount)/100);
        course.hoursLeft = timeLeft;
      }else{
        course.originalPrice = 0;
        course.hoursLeft = 0;
        course.discountPrice = 0;
      }
    }else{
        course.hoursLeft = 0;
        course.originalPrice = 0;
        course.discountPrice = 0;
    }
    return course;
  }

  getCourses(currentPage: number, sortBy: string, searchKeyword: string){
    // this.courses = COURSES;
    this.courses = [...COURSES.map(course => this.checkDateAndApplyDiscount({...course}))];
    // this.courses.map(course => this.checkDateAndApplyDiscount(course));
    if(searchKeyword) {
      this.courses=this.courses.filter((course) => course.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1);
    }
    this.courses = this.setSlicedArray(currentPage, [...this.courses]);
    if(this.courses.length && sortBy.length) {
      if(sortBy === 'desc') {

        this.courses = this.courses.sort((cur: any, prev: any) => {
          return prev.price - cur.price;
        })
      }else {
        this.courses = this.courses.sort((cur: any, prev: any) => {
          return cur.price - prev.price;
        })
      }
    }
    return this.courses;
  }

  getRecommendCourses() {
    return [...COURSES.map(course => this.checkDateAndApplyDiscount({...course})).sort(() => .5 - Math.random()).slice(0, 2)];
  }

  fetchParticularCourse(id: string){
    const index = this.courses.findIndex(course => course.id === id);
    return this.courses[index];
  }

  checkIfCourseIsInCart(id: string){
    return this.cartObj[id] ? true : false;
  }

  checkIfCourseIsInWishList(id: string){
    return this.wishListObj[id] ? true : false;
  }

  addToCart(course: any){
    this.cartTotal = Number(this.cartTotal) + Number(course.price)
    this.cartSaving = Number(this.cartSaving) + +course.discountPrice;
    this.cartObj[course.id] = course;
  }

  addToWishList(course: COURSE_TYPE){
    this.wishListObj[course.id] = course;
  }

  removeItemFromCart(id:string) {
    this.cartTotal = Number(this.cartTotal) - Number(this.cartObj[id].price)
    this.cartSaving = Number(this.cartSaving) - Number(this.cartObj[id].discountPrice)
    delete this.cartObj[id];
    this.cartChanged.next();
    return this.getCartList();
  }

  removeItemFromWishList(id: string){
    delete this.wishListObj[id];
    return this.getWishListData();
  }
}
