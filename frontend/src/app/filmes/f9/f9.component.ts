import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowsAltH, faPlay, faSquare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-f9',
  templateUrl: './f9.component.html',
  styleUrls: ['./f9.component.css']
})
export class F9Component implements OnInit {

  faStar= faStar;
  faArrowLef= faArrowLeft;
  faArrowRight= faArrowRight;
  faArrowsAltH = faArrowsAltH ;
  faSquare = faSquare;
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
