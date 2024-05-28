import  {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    template: ` 
    ${ /* 1 */'' }
     
    <input type="text" (input)="onUserInput($event)" [value]="name"> ${ /*2 */'' }
    
    <p> I'm the {{name}} component </p> ${ /* 3  */'' }    
    ` 
})
 // {{}} is a string interpolation
export class UserComponent  {
    //here bellow we have properties
    name = 'Max';
           
    onUserInput(event: any ){
        this.name = event.target.value;
    }
}

