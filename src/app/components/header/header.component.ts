import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdown:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDropMenu(){
    this.showDropdown = !this.showDropdown;
  }
  calculateClass(){
    return this.showDropdown ? "show" : "";
  }

}
