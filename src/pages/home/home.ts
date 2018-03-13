import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  output: any;
  constructor(private nativeGeocoder: NativeGeocoder) {
  }

  ionViewWillLoad() {
    this.nativeGeocoder.reverseGeocode(24.874324, 67.067461)
      .then((result: NativeGeocoderReverseResult) => {
        console.log((result))
        this.output = result[0];
      })
      .catch((error: any) => console.log(error));
  }

}
