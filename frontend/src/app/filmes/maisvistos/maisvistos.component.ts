import { Component, OnInit } from '@angular/core';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maisvistos',
  templateUrl: './maisvistos.component.html',
  styleUrls: ['./maisvistos.component.css']
})
export class MaisvistosComponent implements OnInit {

  faWifi = faWifi;

  constructor() { }

  ngOnInit(): void {
  }

}
