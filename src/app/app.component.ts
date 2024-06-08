import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  department = 'Footwear';
  category = 'Athletic Shoes';
  location = 'USA';
  gender = 'Unisex';

  onSubmit() {
    console.log('Form Submitted!');
    // Handle form submission logic here
  }
}
