import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[]=[
  new Goal{1, name:'Watch finding Nemo', description:'Find an online version and watch merlin find his son'},
  new Goal{2, name:'Buy cookies',description:'I have to buy cookies for the parrot'},
  new Goal{3, name:'Get new phone case',description:'Diana has her birthday coming up soon'},
  new Goal{4, name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  new Goal{5, name:'Solve math homework',description:'Damn Math'},
  new Goal{6, name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
     
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
