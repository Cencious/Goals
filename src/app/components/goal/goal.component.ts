import { Component, OnInit} from '@angular/core';
import {Goal} from '../../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  // goals:Goal[]=[
  // new Goals{id:1, name:'Watch finding Nemo', description:'Find an online version and watch merlin find his son'},
  // new Goals{id:2, name:'Buy cookies',description:'I have to buy cookies for the parrot'},
  // new Goals{id:3, name:'Get new phone case',description:'Diana has her birthday coming up soon'},
  // new Goals{id:4, name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  // new Goals{id:5, name:'Solve math homework',description:'Damn Math'},
  // new Goals{id:6, name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
     
  // ];
  goals: Goal[] = [
    {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
    {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
    {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
    {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
    {id:5,name:'Solve math homework',description:'Damn Math'},
    {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  ];
  // goals:Goal[] = [
  //   {id:1, name:'Watch finding Nemo'},
  //   {id:2,name:'Buy Cookies'},
  //   {id:3,name:'Get new Phone Case'},
  //   {id:4,name:'Get Dog Food'},
  //   {id:5,name:'Solve math homework'},
  //   {id:6,name:'Plot my world domination plan'},
  // ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
