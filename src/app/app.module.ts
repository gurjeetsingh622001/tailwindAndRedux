import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './user/nav/nav.component';
import { DashComponent } from './user/dash/dash.component';
import { PostsComponent } from './user/posts/posts.component';
import { UsersComponent } from './user/users/users.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http'
import { userReducer } from './user/store/reducer';
import { SharedEffects } from './user/store/sharedeffects';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from './user/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import {FormsModule} from '@angular/forms'
import { BlockUIModule } from 'primeng/blockui';
import { SpotifyComponent } from './spotify/spotify.component';
import { SidebarComponent } from './spotify/sidebar/sidebar.component';
import { DashboardComponent } from './spotify/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NavComponent,
    DashComponent,
    PostsComponent,
    UsersComponent,
    SpinnerComponent,
    SpotifyComponent,
    SidebarComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      'users': userReducer
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      SharedEffects
    ]),
    BrowserAnimationsModule,
    PaginatorModule,
    FormsModule,
    BlockUIModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
