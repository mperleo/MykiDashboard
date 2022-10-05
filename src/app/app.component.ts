import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public activeTab = 'about';

  ngOnInit(): void {}

  public onLinkClicked(tabName : string){
    this.activeTab = tabName;
  }
}
