import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
	name: 'color'
})
export class ColorPipe implements PipeTransform {

	transform (value: number): string {
		return Color[value];//.toString ();
		// return color[value].split (/(?=[A-Z])/).join ().replace (",", " ");
	}
}