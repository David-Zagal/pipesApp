import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
	selector: 'products-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent {

	public isUpperCase: boolean = false;
	public sortBy: keyof Hero | undefined | '' = '';
	public orderBy: boolean = false;

	public heroes: Hero[] = [
		{
			name: 'Superman',
			canFly: true,
			color: Color.blue
		},
		{
			name: 'Batman',
			canFly: false,
			color: Color.black
		},
		{
			name: 'Daredevil',
			canFly: false,
			color: Color.red
		},
		{
			name: 'Robin',
			canFly: false,
			color: Color.red
		},
		{
			name: 'Green Lantern',
			canFly: true,
			color: Color.green
		}
	];

	toggleUpperCase (): void {
		this.isUpperCase = !this.isUpperCase;
	}

	changeOrderBy (sortBy: keyof Hero): void {
		this.sortBy = sortBy;
		this.orderBy = !this.orderBy;
	}
}