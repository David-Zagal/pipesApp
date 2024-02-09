import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

//Configuración del Locale de la App
import localeEsEC from "@angular/common/locales/es-EC";
import localeFrCA from "@angular/common/locales/fr-CA";
import localeJA from "@angular/common/locales/ja";

import { registerLocaleData } from "@angular/common";

registerLocaleData (localeEsEC);
registerLocaleData (localeJA);
registerLocaleData (localeFrCA);

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,

		SharedModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'es-EC' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}