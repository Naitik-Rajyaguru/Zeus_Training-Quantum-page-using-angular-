import { Component } from '@angular/core';
import { ButtonVisibilityService } from '../button-visibility.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  x = "../../assets/quantum_screen_assets/icons/Zeus-LMS-logo.svg";
  constructor(private buttonservice : ButtonVisibilityService){
    buttonservice.pshow=true;
  }
  educational = "Educational Qualification"
  professional = "Professional Qualification"
  fresher = false
}
