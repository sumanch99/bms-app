import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.welcome=true;
  }
  getWelcome()
  {
    return this.welcome;
  }

}

