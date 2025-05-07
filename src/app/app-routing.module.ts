import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { AboutProjectSponsersComponent } from './components/about-sponsers/about-project-sponsers.component';

const routes: Routes = [
  {
    path:"" ,redirectTo:"notes",pathMatch:'full'
  },
  {
    path:"notes", title:"Notes",component:NotesComponent
  },
  {
    path:"notes/:id" ,title:"Single Note",component:NoteComponent
  },
 
  {
    path:"about" ,title:"About",component:AboutComponent,children:[
      {
        path:"project",title:"Project",component:AboutProjectComponent
      },
      {
        path:"sponsers",title:"Sponsers",component:AboutProjectSponsersComponent
      }
    ]
  },
  {
    path:"**" ,title:"404 - Page Not Found",component:NotfoundComponent
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
