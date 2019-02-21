import {Component} from '@angular/core';

@Component({
  selector: 'pm-tests',
  templateUrl: './test-list.component.html',
  // styleUrls: ['./app.component.css']
})
export class TestListComponent {
  pageTitle = 'Tests List with typescript';
  showImage = true;
  listFilter = 'test';
  tests: any[] = [
    {name: 'first test', description: 'first description', imgUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'},
    {name: 'second test', description: 'second description', imgUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'},
    {name: 'third test', description: 'third description', imgUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'}
  ];

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
