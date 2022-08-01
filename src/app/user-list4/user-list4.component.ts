import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list4',
  template: `
    <p class="para">
      user-list4 works!
    </p>
  `,
  styles: ['.para{color:blue}'
  ]
})
export class UserList4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
