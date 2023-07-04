import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  type:string='';
  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      if (p['type'] ) {
        this.type=p['type'];
      }else
        this.type='none'
    })
  }


  
}
