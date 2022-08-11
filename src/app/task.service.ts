import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private angularFirestore: AngularFirestore) { }
  getTask (){
    return this.angularFirestore
      .collection("Task")
      .snapshotChanges()
  }
  getTaskByID(id){
    return this.angularFirestore
      .collection("Task")
      .doc(id)
      .valueChanges()
  }
  createTask(task: Task){
    return new Promise<any> ( ( resolve, reject) => {
      this.angularFirestore
      .collection("Task")
      .add(task)
      .then((response) => {
        console.log(response)
      },
      (error) => {
        reject(error)
      })
    })
  }
  updateTask(task: Task, id){
    return this.angularFirestore
    .collection("Task")
    .doc(id)
    .update({
      Description: task.Description,
      status: task.status,
    });
  }

  deleteTask(task){
    return this.angularFirestore
    .collection("Task")
    .doc(task.id)
    .delete();
  }
 
}
