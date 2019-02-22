import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TestListComponent} from './tests/test-list.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
