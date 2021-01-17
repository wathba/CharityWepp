import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way-to-donate',
  templateUrl: './way-to-donate.component.html',
  styleUrls: ['./way-to-donate.component.css']
})
export class WayToDonateComponent implements OnInit {
 isFirstDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
