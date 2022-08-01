import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
@Input() Item = 0;
  ngOnInit(): void {
  }

}
