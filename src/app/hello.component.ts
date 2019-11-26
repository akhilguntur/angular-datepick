import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<ng6multi-datepicker (dateCallback)="dateCallback($event)"></ng6multi-datepicker>',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  dateCallback(selectedDate: any) {
    //selectedDate will be a object which will give the selected date.
		//do any necessery stuff.
	}
}
