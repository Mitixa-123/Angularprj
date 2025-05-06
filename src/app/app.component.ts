import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService ]
})
export class AppComponent implements OnInit{

// dependancy injection
messages:string[] = [];
posts:any[] =[];
private subject = new Subject<string>();

// Observable
private observable = new Observable<string>((observer) => {
  observer.next('Hello');
  observer.complete();
});


constructor(private messageService :MessageService){
  this.messages = messageService.getMessage();

  
}



// Both way To Fetch API DATA in 1st At the service.ts Side 
  // ngOnInit() {
  //   this.messageService.getpost().subscribe(Response=>{
  //     this.posts = Response;
  //   },(error)=>{
  //       console.log(error);
  //   })
  // }

  ngOnInit(){
    this.messageService.getpost().subscribe({
      next:(response)=>{this.posts = response},
      error:(error)=>{console.log(error);}
      
    });
    this.subject.next('Message before B subscribes');

this.subject.subscribe(val => console.log('Late Subscriber B:', val));

this.subject.next('Message after B subscribes');



    this.observable.subscribe(val => console.log('Observable Subscriber A:', val));
    this.observable.subscribe(val => console.log('Observable Subscriber B:', val));
  }



  

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


  // Two way Data Binding

  ChangingText:string = "Intial Text";

  // ngClass

  message : string = "This is a Danger Class";
  classes : string = "danger text-size";

  //ngStyle

  BoxbackColor :string = 'red'; 

  //Structure Directive
  // ngIF
  IsLogging :boolean = false;
  username : string = "Mitixa";
  SignIn : boolean = false;
  
  // ngFor

  names : string[] = ["Mitixa","Trushali","jinal"]

  //ngSwitch
  grade: string ="A";

  // PIPES Example

  PipeText :string = "pipes"
  today:number = Date.now();

  currencyvalue:number = 25125;
}
