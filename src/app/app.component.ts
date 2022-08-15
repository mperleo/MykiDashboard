import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  private scrHeight: number = window.innerHeight;
  private scrWidth: number = window.innerWidth;

  public atitleClass: string = '';
  public titleClass: string = '';

  ngOnInit(): void {
    if(this.scrHeight > this.scrWidth){
      this.atitleClass='no-decoration';
      this.titleClass = 'satine';
    }
    else{
      this.atitleClass='text-vertical no-decoration';
      this.titleClass = 'satine display-1';
    }
  }
}
