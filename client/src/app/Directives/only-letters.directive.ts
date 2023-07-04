import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]'
})
export class OnlyLettersDirective {

  constructor(public e1:ElementRef) { }
  ch:any="";
  @HostListener
  ('keyup') keyup(){    
    for(let c in this.e1.nativeElement.value){
      this.ch=this.e1.nativeElement.value.charAt(c);
     if(!(this.ch<"0" || this.ch>"9")){

      this.e1.nativeElement.value=this.e1.nativeElement.value.substring(0,c)+this.e1.nativeElement.value.substring(c+1);
    }
    }  
  }
  

}
