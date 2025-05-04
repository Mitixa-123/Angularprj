import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularprj';
  btn:string ="click me"
  // attr binding

  isDisabled:boolean = true;
  imageUrl:string = '../assets/1.png';
  
  //style binding
  backcolor:string = "text-size:40px; backgroundColor:yellow";
}
