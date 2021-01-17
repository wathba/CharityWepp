import { Component, OnInit } from '@angular/core';
import { countReset } from 'console';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
counterNumber :number=0
  constructor() { }

  ngOnInit(): void {
    this.countst()
  }
  countst() {
    this.counterNumber+=1
  
}
}
