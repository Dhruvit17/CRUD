import { Component, OnInit } from '@angular/core';
import { StudentService } from '../connect.service';
import { serializePath } from '@angular/router/src/url_tree';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form=new FormGroup({
    // uid:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    uname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9_\.]{1,20}')]),
    uemail:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}')]),
    ucontact:new FormControl('',[Validators.required,Validators.pattern('')]),
    ucity:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{0,20}')]),
    udob:new FormControl('',[Validators.required,Validators.pattern('')])
  });

  // ^(0[1-9]|[1-2][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19[89][0-9]|200[0-8])$

  // get uid(){
  //   return this.form.get('uid');
  // }

  get uname(){
    return this.form.get('uname');
  }
  get uemail(){
    return this.form.get('uemail');
  }
  get ucontact(){
    return this.form.get('ucontact');
  }
  get ucity(){
    return this.form.get('ucity');
  }
  get udob(){
    return this.form.get('udob');
  }

  constructor(private ser : StudentService) { }

  ngOnInit() {
  }

  add(addName:string ,addEmail:string , addContact:number, addCity:string, addDob:string){
   
    this.ser.add( addName , addEmail , addContact , addCity , addDob);
   
  }

}
