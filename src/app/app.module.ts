import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { AboutProjectSponsersComponent } from './components/about-project-sponsers/about-project-sponsers.component';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    TaskComponent,
    NotesComponent,
    NoteComponent,
    NotfoundComponent,
    AboutComponent,
    AboutProjectComponent,
    AboutProjectSponsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 