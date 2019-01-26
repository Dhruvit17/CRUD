import { Component, OnInit, OnDestroy } from '@angular/core';
import {Student} from '../data';
import {STUDENTS} from '../list' ;
import {StudentService} from '../connect.service';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
 
import { from, Subscription } from 'rxjs';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit{

  students:Student[];
  selected : Student ;
  selectedIndex :number;
  selectedName:string;
  click:boolean = false;
  uSelected: number[]=[];
  subscription:Subscription;
  maxKey=9;
  // products:any[];
  filteredProducts : any[];
  

  form1=new FormGroup({
    // uid1:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    uname1:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9_\.]{1,20}')]),
    uemail1:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}')]),
    ucontact1:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    ucity1:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{0,20}')]),
    udob1:new FormControl('',[Validators.required,Validators.pattern('')])
  });
  
  // ^(0[1-9]|[1-2][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19[89][0-9]|200[0-8])$

   // Sorting
   key: string = 'name'; //set default
   reverse: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
   }
 
   // Pagination
   p: number = 1;

   

  constructor(private serv : StudentService ) {
    // this.subscription = this.serv.getHeroes()
    // .subscribe(students =>this.filteredProducts = this.students = students);

   }

  //  ngOnDestroy(){
  //   this.subscription.unsubscribe();
  //  }

  ngOnInit() {
    this.getHeroes();
  }

  // get uid1(){
  //   return this.form1.get('uid1');
  // }

  get uname1(){
    return this.form1.get('uname1');
  }

  get uemail1(){
    return this.form1.get('uemail1');
  }

  get ucontact1(){
    return this.form1.get('ucontact1');
  }
  get ucity1(){
    return this.form1.get('ucity1');
  }
  get udob1(){
    return this.form1.get('udob1');
  }
  

  onSelect(st: Student, index : number):void{
    this.selected = st;
    this.selectedIndex = index;


   
    

  }

  add( addName:string , addEmail:string , addContact:number , addCity:string , addDob:string){
    
    if( addName != null && addEmail!=null && addContact!=null && addCity!=null){
    this.students.push(
      {
        key:this.maxKey+1,
      name : addName,
      email:addEmail,
      contact:addContact,
      city:addCity,
      dob:addDob
     });
    }

  }
  update(st:Student,index:number):void{
    this.selected = st;
    this.selectedIndex = index;
    // this.selected =null;
    if(this.uSelected[index]==0)
    {
      for(let i=0;i<this.students.length;i++)
    {
      this.uSelected[i]=1;  
    }}
    else
    {
      for(let i=0;i<this.students.length;i++)
    {
      this.uSelected[i]=1;  
    }
    this.uSelected[index]=0;
    }
  }
  updatei():void{
    this.click = !this.click;

  }



  delete(stud:Student):void{
    
    var index = this.students.indexOf(stud);
    this.students.splice(index,1);
    this.selected=null;
  
  }
  deletei(i:number):void{
    
    this.serv.delete(this.selectedIndex);
  }

  cancel(ind:number)
  {
    
    this.uSelected[ind]=1;
  }

  setIndex(ind:number){
    this.selectedIndex=this.serv.getIndex(ind);
    this.selectedName=name;
  }

  getHeroes(): void {
    this.serv.getHeroes()
        .subscribe(students => this.students = students);
  }


  
}
