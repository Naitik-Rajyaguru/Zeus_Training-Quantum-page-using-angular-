import { Component, Input } from '@angular/core';
import {ButtonVisibilityService} from '../button-visibility.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.scss']
})
export class FooterButtonComponent {
  constructor(public buttonservice:ButtonVisibilityService,  private router: Router){
    
  }

  @Input() next='afgh';
  @Input() prv='afgh';
  goToNext(){
    this.router.navigate([this.next]);
  }
  goToPrv(){
    this.router.navigate([this.prv]);
  }

  
  
}
