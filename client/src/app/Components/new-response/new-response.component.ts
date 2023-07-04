import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyService } from 'src/Services/my.service';

@Component({
  selector: 'app-new-response',
  templateUrl: './new-response.component.html',
  styleUrls: ['./new-response.component.css']
})
export class NewResponseComponent implements OnInit {

  newResponseForm!: FormGroup;

  constructor(public ser:MyService) { }

  ngOnInit(): void {
    this.newResponseForm=new FormGroup({
      Content: new FormControl("",[Validators.required, Validators.minLength(4)]),
      Name:new FormControl("",[Validators.required]),
      Email: new FormControl("",[Validators.email]),
      Phone: new FormControl("",[Validators.minLength(9), Validators.maxLength(10)])
    })
  }

  submitForm(){
    let dataToSave=this.newResponseForm.value;
    // console.log( this.ser.post(dataToSave));
     this.ser.ppost(dataToSave).subscribe((data)=>{
      alert("התגובה שלכם נשמרה בהצלחה")
    }, (err)=>{console.log('error')})
    
    this.ser.message="🎁תודה שהגבת, הנך זכאי למתנה"
  }

}
