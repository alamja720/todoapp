import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { todoReducer } from './app/providers/todos.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ todos: todoReducer })
  ]
}).catch(err => console.error(err));
