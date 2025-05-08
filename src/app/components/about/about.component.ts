import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
    {
      const ProjectId = params['ProjectId'];
      console.log("ProjectId",ProjectId)
    }
    )
  }

}
