import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor() { }

  @Input() modalIntent:string = '';
  @Input() showModal:boolean = true;
  @Input() message:string = '';

  @Output() notifyParent = new EventEmitter();

  ngOnInit(): void {
  }

  hideModal() {
    this.showModal=false;
    this.notifyParent.emit();
  }

}
