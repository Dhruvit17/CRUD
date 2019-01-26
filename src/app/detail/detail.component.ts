import { Component, OnInit, Input } from '@angular/core';
import {StudentService} from '../connect.service';
import {Student} from '../data';
import {Router} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() std : Student ;
  @Input() index : number ;

  constructor(private serv : StudentService , private router:Router) { }

  ngOnInit() {
  }

  update( aName : string):void{

    this.serv.update(aName,this.index);
    this.std=null;

  }
}