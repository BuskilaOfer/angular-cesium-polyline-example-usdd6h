import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { AngularCesiumModule } from 'angular-cesium';
import { PolylineLayerExampleComponent } from './polyline-layer-example/polyline-layer-example.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  AngularCesiumModule.forRoot({fixEntitiesShadows: false, customPipes: []}) 
  ],
  declarations: [ AppComponent, MapComponent, PolylineLayerExampleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
