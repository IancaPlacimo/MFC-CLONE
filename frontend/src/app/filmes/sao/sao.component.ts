import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowsAltH, faPlay, faSquare, faStar, faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sao',
  templateUrl: './sao.component.html',
  styleUrls: ['./sao.component.css']
})
export class SaoComponent implements OnInit {

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
