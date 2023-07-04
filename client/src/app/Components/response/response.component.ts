import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/Services/my.service';
import { ResponseClass } from 'src/app/Classes/ResponseClass';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  responses:Array<ResponseClass>=[]
  // responses:any;
  constructor(public ser:MyService) { }

  ngOnInit(): void {
    this.ser.getAll().subscribe((data)=>{
      this.responses=data
    }, (err)=>{console.log('error')})
  }
  addLike(id:number){
    this.ser.addLike(id).subscribe((data)=>{
     var htmlnum= document.getElementById(id.toString());
     htmlnum?htmlnum.innerHTML=data.toString(): htmlnum;
    })
  }
 

}
