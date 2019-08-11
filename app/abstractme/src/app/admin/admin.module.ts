import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminComponent  } from './admin.component'
import { AdminOrdersComponent } from './admin-orders/admin-orders.component'
import { AdminUsersComponent } from './admin-users/admin-users.component'
import { AdminTypeServiceComponent } from './admin-type-service/admin-type-service.component'
import { AdminIdiomComponent } from './admin-idiom/admin-idiom.component'
import { AdminProfileComponent } from './admin-profile/admin-profile.component'
import { AdminMenuComponent } from './admin-menu/menu.component'

export const ROUTES = [
	{ path: '', component: AdminComponent ,
	children: [
		{path: '', redirectTo: 'orders', pathMatch: 'full'},
		{path: 'orders', component: AdminOrdersComponent},
		{path: 'users', component: AdminUsersComponent},
		{path: 'type-service', component: AdminTypeServiceComponent},
		{path: 'idiom', component: AdminIdiomComponent},
		{path: 'profile', component: AdminProfileComponent}
	]}
]


@NgModule({
	declarations: [
	AdminComponent, 
	AdminOrdersComponent,
	AdminUsersComponent, 
	AdminTypeServiceComponent, 
	AdminIdiomComponent, 
	AdminProfileComponent,
	AdminMenuComponent
	],
	imports: [RouterModule.forChild(ROUTES)]
})

export class AdminModule {}