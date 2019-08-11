import { Routes } from '@angular/router'
import { HomeComponent  } from './home/home.component'
import { LoginComponent } from './security/login/login.component'
import { RegisterComponent } from './security/register/register.component'
import { ResetPasswordComponent } from './security/reset-password/reset-password.component'
import { GenerateTokenComponent } from './security/generate-token/generate-token.component'

export const ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
	{ path: 'client', loadChildren: './client/client.module#ClientModule' },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: 'generate-token', component: GenerateTokenComponent },

]