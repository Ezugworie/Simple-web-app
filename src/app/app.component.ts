import { Component, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Sales} from './sales';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({

  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
  


})
@Component({
  selector: 'app-root',/*  */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-root',
  templateUrl: './home/home.component.html',
  styleUrls: ['./home/home.component.css']
})

export class AppComponent {
  title = 'Bills Generator';
  item = new FormControl('');
  

 

}
