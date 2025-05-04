import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularprj';
  btn:string ="click me";
  count: number = 0;
  inputValue = '';
  focusStatus = '';
  mouseStatus = '';
  key = '';
  windowWidth = window.innerWidth;
  droppedData = '';
  // attr binding

  isDisabled:boolean = true;
  imageUrl:string = '../assets/1.png';
  
  //style binding
  backcolor:string = "text-size:40px; backgroundColor:yellow";

  //class Binding

  isTextRed:string = "yes";

  // function 



  incrementNumber() {
    this.count++;
  }

  OnInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }
  onDoubleClick() {
    alert('Double-click detected!');
  }

  onMouseDown() {
    this.mouseStatus = 'Mouse button down';
  }

  onMouseUp() {
    this.mouseStatus = 'Mouse button released';
  }

  onMouseEnter() {
    this.mouseStatus = 'Mouse entered element';
  }

  onMouseLeave() {
    this.mouseStatus = 'Mouse left element';
  }

  onKeyDown(event: KeyboardEvent) {
    this.key = `Key down: ${event.key}`;
  }
  onKeyUp(event: KeyboardEvent) {
    this.key = `Key Up: ${event.key}`;
  }

  onChange(event: Event) {
    alert('Input changed and focus lost');
  }

  onFocus() {
    this.focusStatus = 'Input is focused';
  }

  onBlur() {
    this.focusStatus = 'Input lost focus';
  }

  onScroll(event: Event) {
    console.log('Scrolled!', event);
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: UIEvent) {
  //   this.windowWidth = window.innerWidth;
  // }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.droppedData = event.dataTransfer?.getData('text') || '';
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragStart(event: DragEvent) {
    event.dataTransfer?.setData('text', 'This is draggable content');
  }

  
}
