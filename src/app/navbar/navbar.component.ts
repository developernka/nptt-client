import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username = "";
  constructor(private api:ApiService) { 
    this.api.currentUser.subscribe(data => this.username = data);
  }
  ngOnInit() {  }

}
