import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  searchInput = "";
  orderBy: string =  "";
  searchInputControl = new FormControl();
  debouncedSetSearchInput = _.debounce(params => this.setSearchInput(params), 2000);
  ngOnInit(): void {
  }

  setOrderByValue(event:any){
    this.orderBy = event.target.value;
  }

  setSearchInput(value:string){
    this.searchInput = value;
  }

  onInputChange(event:any) {
    this.debouncedSetSearchInput(event.target.value);
  }

}
