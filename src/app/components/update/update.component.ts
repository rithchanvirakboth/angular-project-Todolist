import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public updateForm: FormGroup;
  taskRef: any

  constructor(
    public taskService: TaskService,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      Description: [' '],
      status: [' ']
    })
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.taskService.getTaskByID(id).subscribe( res => {
      this.taskRef = res
      this.updateForm = this.formBuilder.group({
        Description: [this.taskRef.Description],
        status: [this.taskRef.status]
      })
    })
  }

  onSubmit(){
  const id = this.activatedRoute.snapshot.paramMap.get('id')
  this.taskService.updateTask(this.updateForm.value, id)
  this.router.navigate( [''])
  }

}
