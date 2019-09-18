import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('side', {static: false}) side: ElementRef;
  @ViewChild('nav', {static: false}) nav: ElementRef;
  open=false;
  constructor(public renderer: Renderer,private router:Router) { }

  ngOnInit() {

  }
  openSideNav(){
   console.log(this.side.nativeElement.className);
   if(this.open==false){
     this.open=true;
    this.renderer.setElementProperty(this.side.nativeElement, 'className','active');
    this.renderer.setElementProperty(this.nav.nativeElement, 'className','header-fixed-top sidebar-left-open');
   }
   else{
     this.open=false;
    this.renderer.setElementProperty(this.side.nativeElement, 'className','');
    this.renderer.setElementProperty(this.nav.nativeElement, 'className','header-fixed-top ');
   }

  }
  dashboard(){
    this.renderer.setElementProperty(this.side.nativeElement, 'className','');
    this.renderer.setElementProperty(this.nav.nativeElement, 'className','header-fixed-top ');
  }
}
