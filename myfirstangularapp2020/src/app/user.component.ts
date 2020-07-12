import {Component} from '@angular/core'
@Component({
    selector:'app-user',
    template:`
    <!--Below we are binding the input event with and event handler function define in our ts -->
    <input type="text" (input)="onUserInput($event)" [value]="name"/>
    <p>Hello {{name}} Your user component is displayed here</p>
    `
})
export class UserComponent{

    name='Sajjad Ahmed';
    /**
     * 
     * @param event 
     * The below method will be called whenever something is entered in the above input.
     */
    onUserInput(event){
        this.name=event.target.value;
    }
}