import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ClientComponent } from './client.component'
import { ClientOrdersComponent } from './client-orders/client-orders.component'
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientMenuComponent } from './client-menu/client-menu.component'


export const ROUTES = [
	{ path: '', component: ClientComponent ,
	children: [
		{path: '', redirectTo: 'orders', pathMatch: 'full'},
		{path: 'orders', component: ClientOrdersComponent},
		{path: 'profile', component: ClientProfileComponent}
	]}
]

@NgModule({
	declarations: [
	ClientComponent,
	ClientOrdersComponent,
	ClientProfileComponent,
	ClientMenuComponent
	],
	imports: [RouterModule.forChild(ROUTES)]
})

export class ClientModule {}