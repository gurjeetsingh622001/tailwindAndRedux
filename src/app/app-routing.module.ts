import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { DashComponent } from './user/dash/dash.component';
import { PostsComponent } from './user/posts/posts.component';
import { UsersComponent } from './user/users/users.component';
import { SpotifyComponent } from './spotify/spotify.component';

const routes: Routes = [
  { path: '', redirectTo: 'spotify', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent }
    ]
  },
  { path: 'spotify', component: SpotifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
