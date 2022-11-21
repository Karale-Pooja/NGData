import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello Word From inline template</h1>
  // <p>Only display ts file data</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1{color:red}`]
})
export class AppComponent {
  title = 'demo';
  role='Admin'
}
