import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
	name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

	transform (heroes: Hero[], sortBy?: keyof Hero | '', orderBy: boolean = false): Hero[] {
		switch (sortBy) {
			case 'name':
				if (orderBy) return heroes.sort ((a, b) => (a.name > b.name) ? 1 : -1);
				else return heroes.reverse ();
			case 'canFly':
				if (orderBy) return heroes.sort ((a, b) => (a.canFly > b.canFly) ? 1 : -1);
				else return heroes.reverse ();
			case 'color':
				if (orderBy) return heroes.sort ((a, b) => (a.color > b.color) ? 1 : -1);
				else return heroes.reverse ();
			default:
				return heroes;
		}
	}
}