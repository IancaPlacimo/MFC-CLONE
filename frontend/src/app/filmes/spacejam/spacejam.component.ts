import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowsAltH, faPlay, faSquare, faStar, faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spacejam',
  templateUrl: './spacejam.component.html',
  styleUrls: ['./spacejam.component.css']
})
export class SpacejamComponent implements OnInit {

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
