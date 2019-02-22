import {Component} from '@angular/core';
import {ITest} from './test';

@Component({
  selector: 'pm-tests',
  templateUrl: './test-list.component.html',
  // styleUrls: ['./app.component.css']
})
export class TestListComponent {
  pageTitle = 'Tests List with typescript';
  showImage = true;
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTests = this.listFilter ? this.performFilter(this.listFilter) : this.tests;
  }

  filteredTests: ITest[] = [];
  tests: ITest[] = [
    {
      name: 'first test',
      description: 'first-description',
      imgUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
      price: 23.543
    },
    {
      name: 'second test',
      description: 'second-description',
      imgUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
      price: 2.43
    },
    {
      name: 'third test',
      description: 'third-description',
      imgUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
      price: 345
    }
  ];

  constructor() {
    this.filteredTests = this.tests;
    this.listFilter = '';
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): ITest[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tests.filter((product: ITest) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
