import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';
import { ChattingComponent } from './chatting/chatting.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountlistComponent } from './accountlist/accountlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    RegisterComponent,
    ChattingComponent,
    AddAccountComponent,
    AccountlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
         path: 'appcomponent',
         component: AppComponent
        },

        { path: 'account', 
         component: AccountComponent 
        },
        {
         path: 'login',
         component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'chatting',
          component: ChattingComponent
        }  ,

        {
          path: 'add-account',
          component: AddAccountComponent
        } 
      ]
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }