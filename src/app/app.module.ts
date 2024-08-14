import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { todoReducer } from './providers/todos.reducer';
import { TodoEffects } from './providers/todos.effects'; // Import your effects

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]), // Register your effects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
