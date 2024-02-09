import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

	transform (value: boolean): 'sí vuela' | 'no vuela' {
		// return value ? 'sí' : 'no';
		return value ? 'sí vuela' : 'no vuela';
	}
}