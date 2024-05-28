import { Component } from '@angular/core'; //importing from Angular

@Component({ 
  //@ is decorators, a TS feature. 
//And It always refers to what comes right after
// in this case, to the class AppComponent 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {


  title = 'angular-essencials'; //you cant change after you compile it
}

// even though I sure can modify this code, It's not what should be focusing on. 

