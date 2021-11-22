import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mode: string = 'light_mode'
  textMode: string = 'Light Mode'
  isChecked: boolean = true

  onSwitchMode(): void {
    this.isChecked = !this.isChecked
    if (!this.isChecked) {
      this.mode = 'nightlight_round'
      this.textMode = 'Dark Mode'
    } else {
      this.mode = 'light_mode'
      this.textMode = 'Light Mode'
    }
     
    document.body.classList.toggle('darkMode');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
