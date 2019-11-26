import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'  ,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  dateCallback(selectedDate: any) {
    //selectedDate will be a object which will give the selected date.
		//do any necessery stuff.
	}
}
