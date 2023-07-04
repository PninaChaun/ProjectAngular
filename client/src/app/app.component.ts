import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyService } from 'src/Services/my.service';
import { HomeComponent } from './Components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

constructor(public service:MyService) {
  
}

 reroute=()=>{
// type = id.selector;
//   alert(type);
}
}




