import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  @Input()tasks!: string;
 
  @Output() DeletedTask = new EventEmitter<void>();

  OnDeleteTask(){
    this.DeletedTask.emit();
  }

  ngOnInit(): void {
  }

}
