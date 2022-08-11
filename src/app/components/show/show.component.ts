import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Tasks: Task[]
  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe( (res) => {
        this.Tasks = res.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Task)
          };
        });
    });
  }

  deleteRow = (task) => this.taskService.deleteTask(task)
 
 
}
