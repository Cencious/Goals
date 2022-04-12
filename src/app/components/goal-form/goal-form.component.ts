import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';
Goal
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
newGoal=new Goal()
  constructor() { }

  ngOnInit(): void {
  }

}
