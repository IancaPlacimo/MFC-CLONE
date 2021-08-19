import { Component, OnInit } from '@angular/core';
import { faCoffee, faUserCircle,faDollarSign,faCircle, faSearch, faEnvelope,faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCoffee =faCoffee;
  faUserCircle =  faUserCircle;
  faDollarSign= faDollarSign;
  faCircle = faCircle;
  faSearch = faSearch;
  faEnvelope =faEnvelope;
  faCog=faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
