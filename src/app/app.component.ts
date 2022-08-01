import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  // name = 'Ankit';
  getName() {
    alert("function called");
  }
  getName2(name: any) {
    alert(`Hello ${name}`);
  }

  getData(val: any) {
    console.log(val);
  }

  getData2() {
    console.log('Hello Ankit');
  }

  displayVal = "";
  getData3(val: string) {
    console.log(val);
    this.displayVal = val;
  }

  displayVal2 = "";
  getData4(val: string) {
    console.log(val);
    this.displayVal2 = val;
  }

  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;

  }
  name = 'ankit'
  disable = false;

  show = true;
  
  show2=15;

  color = 'green';
  color2 = 'blue';
  user = ['ankit', 'ashutosh', 'karan', 'nishant']

  user2 = [
    { name: 'ankit', email: 'test@test.com', phone: 8888 },
    { name: 'ashutosh', email: 'test@test.com', phone: 8888 },
    { name: 'nishant', email: 'test@test.com', phone: 8888 }
  ]

  user3 = [
    { name: 'chetan', email: 'test@test.com', phone: 8888, accounts: ['fb', 'insta', 'youtube}'] },
    { name: 'vasu', email: 'test@test.com', phone: 8888, accounts: ['linkedin', 'insta', 'youtube'] },
    { name: 'rohit', email: 'test@test.com', phone: 8888, accounts: ['twitter', 'insta', 'youtube'] }
  ]

  color3 = 'red'
  updateColor() {
    this.color3 = 'blue'
  }

  name2: any;

  show3 = false;

  showData() {
    this.show3 = true;
  }

  userStatus: string;

  constructor(){
    this.userStatus =Math.random() > 0.5 ? 'online' :'offline'
  }

  updateStatus(){
    return this.userStatus;
  }

  data=10;

  updateChild(){
    this.data= Math.floor(Math.random()*100) ;
  }
}
