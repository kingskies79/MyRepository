import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export interface Todo {
  id?: string;
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  email: string;
  password: string;
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  todo$: Observable<Todo[]>;


  constructor(private afs: AngularFirestore, public authService: AuthService) {
  this.todoCollectionRef = afs.collection<Todo>('todos');
  this.todo$ = this.todoCollectionRef.snapshotChanges().map(actions => {
    return actions.map(action => {
      const data = action.payload.doc.data() as Todo;
      const id = action.payload.doc.id;
      return { id, ...data };
    });
  });
}
updateTodo(todo: Todo) {

  this.todoCollectionRef.doc(todo.id).update({ completed: !todo.completed });
}
addTodo(todoDesc: string) {
  console.log(todoDesc);
  if (todoDesc && todoDesc.trim().length) {
    this.todoCollectionRef.add({ description: todoDesc, completed: false });
  }
}
deleteTodo(todo: Todo) {
  this.todoCollectionRef.doc(todo.id).delete();
}
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
