import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsPageComponent } from './basics-page.component';

describe ('BasicsPageComponent', () => {
	let component: BasicsPageComponent;
	let fixture: ComponentFixture<BasicsPageComponent>;

	beforeEach (() => {
		TestBed.configureTestingModule ({
			declarations: [BasicsPageComponent]
		});
		fixture = TestBed.createComponent (BasicsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges ();
	});

	it ('should create', () => {
		expect (component).toBeTruthy ();
	});
});