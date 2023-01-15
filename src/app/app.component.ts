import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Text completion', url: '/pages/text-completion/text-completion.page', icon: 'planet' },
  ];
  constructor() {}
}