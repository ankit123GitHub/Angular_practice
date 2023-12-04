import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular';

  // getName(name:string)
  // {
  //   console.log(name);
  // }

  // displayVal='';
  // getValue(val:string)
  // {
  //   console.warn(val)
  //   this.displayVal=val
  // }
// __________________________________________________
  // displaycount='';
  // count=0
  // counter(type:string)
  // {
  //   type==='add' ?this.count++:this.count--;
  //   this.displaycount=type

  // }
  // ________________________________________________
  // title1 = 'else-if condition';
  // color ="yellow";
// __________________________________________________
// title1 = 'Switch case';
// color ="red";
// __________________________________________________
// title1 = 'for loop';
// users =['abc','mno','xyz','123'];
// userdetails =[
//   {name : 'abc' , emailid :'abc@test' , phone :'123' },
//   {name : 'mno' , emailid :'mno@test' , phone :'456' },
//   {name : 'xyz' , emailid :'xyz@test' , phone :'789' },
//   {name : '123' , emailid :'123@test' , phone :'000' },
// ]
// _____________________________________________________
// title1 = 'Style Binding';
// color = "red";

// onclick(){
//     this.color = "blue"

// }
// ______________________________________________________
// title = 'angular';
// getFormData(data:NgForm)
// {
//   console.warn(data)
// }
// _______________________________________________________
// title = 'angular';
// addTask(item="string")
// {
//   console.warn(item)
// }
// _______________________________________________________
title = 'angular';
getVal(item:any)
{
console.warn(item);

}
}
