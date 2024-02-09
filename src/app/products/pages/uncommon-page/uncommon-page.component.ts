import { Component } from '@angular/core';

import { Gender } from '../../interfaces/gender.interface';
import { Observable, interval, tap } from 'rxjs';

@Component({
	selector: 'products-uncommon-page',
	templateUrl: './uncommon-page.component.html',
	styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

	// i18nSelect Pipe
	public name: string = 'David';
	public gender: Gender = { type: 'male' };// = { male: 'male', female: 'female' };
	public invitationMap = {
		male: 'invitarlo',
		female: 'invitarla'
	};

	// i18nPlural Pipe
	public clients: string[] = ['David', 'Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melisa', 'Natalia'];
	public clientMap = {
		'=0': 'no tenemos ningún cliente esperando.',
		'=1': 'tenemos un cliente esperando.',
		'other': 'tenemos # clientes esperando',
	};

	// Json Pipe & KeyValue Pipe
	public person = {
		name: 'David',
		edad: 36,
		address: 'Madrid, España'
	};

	// Async Pipe
	public myObservableTimer: Observable<number> = interval (2000).pipe (
		//tap (value => console.log ('tap: ', value))
	);

	public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
		setTimeout (() => {
			resolve ('Tenemos data en la promesa.');
		}, 3500);
	});

	// i18nSelect
	changeClient (): void {
		this.name = 'Melisa';
		this.gender.type = 'female';
	}

	// i18nPlural
	deleteClient (): void {
		// this.clients.pop (); // El último elemento
		this.clients.shift (); // El primer elemento
	}
}
