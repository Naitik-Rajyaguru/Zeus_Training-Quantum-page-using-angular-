import { Component } from '@angular/core';
import { ButtonVisibilityService } from '../button-visibility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent {
  data:any
  index=2
  whichDiscription:any
  indexset(index:any){
    this.index = index
    console.log("done");
    
  }
  
  constructor(private dataService: ButtonVisibilityService, private route: ActivatedRoute){
    this.dataService.getData('data.json').subscribe(data=>{
      this.data = Object.values(data);
      console.log(this.data[0].title);
    })
    this.dataService.getData('discription.json').subscribe(data=>{
      this.whichDiscription = Object.keys(data);
      console.log(this.whichDiscription[0]);
      this.whichDiscription = this.whichDiscription[this.index]
    })
    this.route.params.subscribe(data=>{
      this.index = +data['ID'];
    })
  }
}
