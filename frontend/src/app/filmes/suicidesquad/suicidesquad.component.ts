import { Component, OnInit } from '@angular/core';
import { faStar, faArrowLeft, faArrowRight, faArrowsAltH, faSquare, faPlay, faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-suicidesquad',
  templateUrl: './suicidesquad.component.html',
  styleUrls: ['./suicidesquad.component.css']
})
export class SuicidesquadComponent implements OnInit {

  faStar= faStar;
  faArrowLef= faArrowLeft;
  faArrowRight= faArrowRight;
  faArrowsAltH = faArrowsAltH ;
  faSquare = faSquare;
  faPlay = faPlay;
  faWifi=faWifi;

  constructor() { }

  ngOnInit(): void {
  }

}
