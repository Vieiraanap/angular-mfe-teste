import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tjui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click() {
    window.alert('clique no botão')
  }
}
