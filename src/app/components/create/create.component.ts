import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public taskForm: FormGroup;
  constructor(
    public taskService: TaskService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.taskForm = this.formBuilder.group({
      Description: [' '],
      status: false,
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.taskService.createTask(this.taskForm.value)
    this.router.navigate( [''])
  }
}
