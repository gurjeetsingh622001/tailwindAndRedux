import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class SpotifyComponent implements OnInit {

  isSidebarHidden: boolean = true;

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
