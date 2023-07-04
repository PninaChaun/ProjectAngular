import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import{}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model:any={name:"",title:""};
  constructor() { }

  ngOnInit(): void {
  }
  
  save(){
    alert('הפניה התקבלה, נציגינו לא יחזור אליכם בימים הקרובים')
  }

}
