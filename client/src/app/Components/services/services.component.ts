import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MyService } from 'src/Services/my.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( public ser:MyService, public router:Router) { }

  services:string[]=[];

  ngOnInit(): void {
    this.ser.getServices().subscribe((data)=>{
      this.services=data
    }, (err)=>{console.log('error')})
  }

 navigate(s:string){
  if(s=="עיצוב שיער"){
    this.router.navigate(['services/serviceDetails/hairStyle']);
  }
  else if (s=="איפור ערב"){
    this.router.navigate(['services/serviceDetails/makeup']);
  }
  else if (s=="סירוק פאות"){
    this.router.navigate(['services/serviceDetails/fan']);
  }
 }

}