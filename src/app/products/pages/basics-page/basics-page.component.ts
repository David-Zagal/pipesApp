import { Component } from '@angular/core';

@Component({
	selector: 'products-basics-page',
	templateUrl: './basics-page.component.html',
	styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

	public nameUpper: string = 'DAVID';
	public nameLower: string = 'david';
	public fullName: string = 'dAvId zAGaL';

	public customDate: Date = new Date ();
}