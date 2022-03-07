import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';
import { COURSES, COURSE_TYPE, MODAL_MESSAGES } from '../courses/constants';

@Component({
  selector: 'app-course-decription',
  templateUrl: './course-decription.component.html',
  styleUrls: ['./course-decription.component.scss']
})
export class CourseDecriptionComponent implements OnInit {

  activatedRoute: ActivatedRoute;
  courseService: CoursesService;
  course: any;

  modalMessage: string = '';
  modalIntent = '';
  showModal: boolean = false;
  startVideoFlag: boolean = false;
  stopVideoFlag: boolean =true;

  constructor(activatedRoute: ActivatedRoute, coureService: CoursesService) {
    this.activatedRoute = activatedRoute;
    this.courseService = coureService;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
        if(data['id']){
          this.course = this.courseService.fetchParticularCourse(data['id']);
        }
    })
  }

  setModalMessage(message: string, intent: string, showModal: boolean) {
    this.modalIntent = intent;
    this.showModal =showModal;
    this.modalMessage = message;
  }

  addToCart(){
    if(this.courseService.checkIfCourseIsInCart(this.course.id)){
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_CART_ERROR, 'error', true);
    }else{
      this.courseService.addToCart(this.course);
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_CART_SUCCESS, 'success', true);
    }
  }

  addToWishList(){
    if(this.courseService.checkIfCourseIsInWishList(this.course.id)){
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_WISHLIST_ERROR, 'error', true);
    }else{
      this.courseService.addToWishList(this.course);
      this.setModalMessage(MODAL_MESSAGES.ADD_TO_WISHLIST_SUCCESS, 'success', true);
    }
  }

  startVideo() {
    this.startVideoFlag = true;
    this.stopVideoFlag = false;
  }

  stopVideo(){
    this.startVideoFlag = false;
    this.stopVideoFlag = true;
  }
}
