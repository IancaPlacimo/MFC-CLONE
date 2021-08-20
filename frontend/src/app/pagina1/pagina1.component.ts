import { Component, OnInit } from '@angular/core';
import { faStar, faArrowLeft, faArrowRight, faArrowsAltH, faSquare, faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

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
