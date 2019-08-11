import { Routes } from '@angular/router'
import { HomeComponent  } from './home/home.component'

export const ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
	{ path: 'client', loadChildren: './client/client.module#ClientModule' },
]