import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-header',
  templateUrl: './logo-header.component.html',
  styleUrls: ['./logo-header.component.scss']
})
export class LogoHeaderComponent {
  @Input() imgUrl:string=''
}
