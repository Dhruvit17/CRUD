import { Injectable } from '@angular/core';
     
import { Observable, of } from 'rxjs';
 
import { Student } from './data';
import { STUDENTS } from './list';
//import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students : Student[] = STUDENTS;
  maxKey= STUDENTS.length - 1 ; 
  //constructor(private messageService: MessageService) { }
 
  getHeroes(): Observable<Student[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(this.students);
  }

  add( addName:string , addEmail:string,addContact:number , addCity:string , addDob:string){
    
    if( addName != null && addEmail!=null && addContact!=null && addCity!=null){
    this.students.push(
      {
        key :this.maxKey+1,
      name : addName,
      email:addEmail,
      contact:addContact,
      city:addCity,
      dob:addDob
     });
    }

  }

  update(aName : string, index: number):void{
    this.students[index].name = aName;
  }

  delete(index : number):void{
    this.students.splice(index,1);
  }

  getIndex(ind:number):number{
    return this.students.findIndex(x => x.key == ind);
  }


}