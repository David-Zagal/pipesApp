import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
	declarations: [
		BasicsPageComponent,
		NumbersPageComponent,
		UncommonPageComponent,
		OrderComponent,

		//Pipes
		CanFlyPipe,
		ColorPipe,
		SortByPipe,
		ToggleCasePipe,
	],
	imports: [
		CommonModule,
		PrimeNgModule,
		ProductsRoutingModule,
	]
})
export class ProductsModule {}