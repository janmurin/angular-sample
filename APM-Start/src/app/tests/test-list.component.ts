import {Component} from '@angular/core';

@Component({
  selector: 'pm-tests',
  templateUrl: './test-list.component.html',
  // styleUrls: ['./app.component.css']
})
export class TestListComponent {
  pageTitle = 'Tests List with typescript';
  tests: any[] = [
    {name: 'first test', description: 'first description'},
    {name: 'second test', description: 'second description'},
    {name: 'third test', description: 'third description'}
  ];
}
