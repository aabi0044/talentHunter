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
  @ViewChild('header', {static: false}) header: ElementRef;
  @ViewChild('sidenav', {static: false}) sidenav: ElementRef;
  open=false;
  constructor(public renderer: Renderer,private router:Router) { }

  ngOnInit() {

  }
  openSideNav(){
   console.log(this.side.nativeElement.className);
   if(this.sidenav.nativeElement.className=='className','enable-hover side'){
    this.renderer.setElementProperty(this.header.nativeElement, 'className','navbar navbar-default navbar-fixed-top');
    this.renderer.setElementProperty(this.sidenav.nativeElement, 'className','enable-hover');
   }
   if(this.side.nativeElement.className !='active'){

    this.renderer.setElementProperty(this.side.nativeElement, 'className','active');
    this.renderer.setElementProperty(this.nav.nativeElement, 'className','header-fixed-top sidebar-left-open');
   }
   else if(this.side.nativeElement.className =='active'){
console.log("ere");
    this.renderer.setElementProperty(this.side.nativeElement, 'className','');
    this.renderer.setElementProperty(this.nav.nativeElement, 'className','header-fixed-top ');
   }

  }
  dashboard(){
    this.renderer.setElementProperty(this.header.nativeElement, 'className','navbar navbar-default navbar-fixed-top head');
    this.renderer.setElementProperty(this.sidenav.nativeElement, 'className','enable-hover side');
      this.router.navigate(['/dashboard/mainpage']);
      console.log("object");

  }
  employee(){
    this.renderer.setElementProperty(this.header.nativeElement, 'className','navbar navbar-default navbar-fixed-top head');
    this.renderer.setElementProperty(this.sidenav.nativeElement, 'className','enable-hover side');
    this.router.navigate(['/employeeList']);
    console.log("object");
  }
  company(){
    this.renderer.setElementProperty(this.header.nativeElement, 'className','navbar navbar-default navbar-fixed-top head');
    this.renderer.setElementProperty(this.sidenav.nativeElement, 'className','enable-hover side');
    this.router.navigate(['/companylist']);
    console.log("object");
  }
  job(){
    this.renderer.setElementProperty(this.header.nativeElement, 'className','navbar navbar-default navbar-fixed-top head');
    this.renderer.setElementProperty(this.sidenav.nativeElement, 'className','enable-hover side');
    this.router.navigate(['/joblist']);
    console.log("object");
  }
  business(){
    this.renderer.setElementProperty(this.header.nativeElement, 'className','navbar navbar-default navbar-fixed-top head');
    this.renderer.setElementProperty(this.sidenav.nativeElement, 'className','enable-hover side');
    this.router.navigate(['/businesslist']);
    console.log("object");
  }
}
