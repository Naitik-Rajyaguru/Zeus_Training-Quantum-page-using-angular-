import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonVisibilityService } from 'src/app/button-visibility.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent {
  @Input() data :any  
  @Input() viewde:boolean =false;
  @Input() apply:boolean =false;
  index:any
  @Output() indexEvent = new EventEmitter<any>();
  constructor(private routing:Router){

  }
  hallticket(){
    this.routing.navigate(['hallticket'])
  }
  openThisIndex(index:number){
    this.indexEvent.emit(this.data.index)
    console.log(this.data.index);
    this.routing.navigate(['/role',index])
    // this.index = this.data.index
  }
  
  // @Input() condition:boolean = false;
}
