import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  apikey!: string;
  temperature!: number;
  max_tokens!: number;

  constructor() {}

  ngOnInit() {}

  onIonChangeMaxTokens(ev: Event) {
    this.max_tokens = (ev as RangeCustomEvent).detail.value as number;
  }

  onIonChangeTemperature(ev: Event) {
    this.temperature = (ev as RangeCustomEvent).detail.value as number;
  }

  setKey() {
    localStorage['apikey'] = this.apikey;
  }

  setMaxTokens() {
    localStorage['max_tokens'] = this.max_tokens;
  }

  setTemperature() {
    localStorage['temperature'] = this.temperature / 10;
  }
}
