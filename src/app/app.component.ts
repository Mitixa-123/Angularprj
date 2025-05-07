import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { filter, Observable, ReplaySubject, Subject } from 'rxjs';
import { posts } from './Interfaces/posts.interface';
import { FormArray, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService ]
})
export class AppComponent implements OnInit{




// dependancy injection
messages:string[] = [];
posts:posts[] =[];
private subject = new Subject<string>();
private replaySuject = new ReplaySubject(2) 
// Observable
private observable = new Observable<string>((observer) => {
  observer.next('Hello');
  observer.complete();
});

//Reactive Form 
userForm!:FormGroup;

constructor(private messageService :MessageService,private formbuilder:FormBuilder,private route:Router){
  this.messages = messageService.getMessage();
  this.userForm = formbuilder.group({
    name:['',Validators.required],
    email:['',[
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ]],
    gender:['',Validators.required],
    address:this.formbuilder.group(
      {
        city:['',Validators.required],
        street:['',Validators.required]
      }
    ),
    phonenumbers:this.formbuilder.array([
      this.formbuilder.control('',[
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])
      
    ]),
    
   
  })
  
}

get phonenumbers()
{
  return this.userForm.get('phonenumbers') as FormArray
}

submitForm(){
  if(this.userForm.valid)
  {
    console.log(this.userForm.value);
    
  }
}

//Routing
NavigateNote(){
  this.route.navigate(["/notes"]);
}

NavigateNoteByIdDynamic(id:number){
  this.route.navigate(["/notes",id])
}


Add(){
    this.phonenumbers.push(
      this.formbuilder.control('',[
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])
    )
}
Remove(index:number)
{
  if(index>0)
  {
    this.phonenumbers.removeAt(index)

  }
}
//replaysubject 


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
      next:(response:posts[])=>
        {
         // this.posts = response
        },
      error:(error)=>{console.log(error);}
      
    });

    this.messageService.getLanguages().subscribe({
      next:(languages)=>
      {
        console.log(languages);
      }
    })

    this.messageService.getStudent().subscribe({
      next:(student)=>
      {
        console.log(student);
        
      }
    })
    this.messageService.getOrder().subscribe({
      next:(order)=>
      {
        console.log(order);
        
      }
    })

    this.messageService.getPrice().subscribe({
      next:(price)=>
      {
        console.log(price);
        
      }
    })
    // try {
    //   this.posts = await this.messageService.getpost();
    // } catch (error: any) {
    //   console.log(error);
    // }
    
    this.subject.next('Message before B subscribes');
    this.subject.subscribe(val => console.log('Late Subscriber B:', val));
    this.subject.next('Message after B subscribes');



    this.observable.subscribe(val => console.log('Observable Subscriber A:', val));
    this.observable.subscribe(val => console.log('Observable Subscriber B:', val));


    //replaysubject
    this.replaySuject.next(111)
    this.replaySuject.next(222)
    this.replaySuject.next(333)

    this.replaySuject.subscribe(val =>  console.log(`First Subscriber ${val}`))
    this.replaySuject.next(444);
    this.replaySuject.subscribe(val =>  console.log(`second Subscriber ${val}`))


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



  // Component Communication
  tasks:string[] = ['task1','task2','task3'];
  OnDeleteTask(tasks:string)
  {
      this.tasks = this.tasks.filter((task)=> task !=tasks)
  }

  // attr binding

  isDisabled:boolean = true;
  imageUrl:string = '../assets/1.png';
  
  //style binding
  backcolor:string = "text-size:40px; backgroundColor:yellow";

  //class Binding

  isTextRed:string = "yes";
  Submitbtn:string = "lightblue"
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
