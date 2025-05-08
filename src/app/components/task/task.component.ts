import { Component, Input,Output,EventEmitter, OnInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  @Input()tasks!: string;
 
  @Output() DeletedTask = new EventEmitter<void>();

  @ViewChild("childheading") childheading!: ElementRef;
  @ViewChildren("childheading") childheadinga!: QueryList<any>;
  OnDeleteTask(){
    this.DeletedTask.emit();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.childheading)

    //ViewChild
    this.renderer.setStyle(this.childheading.nativeElement, 'background-color', 'red');
    //viewchildren
    this.renderer.setStyle(this.childheading.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.childheading.nativeElement, 'color', 'blue');
  }
}
