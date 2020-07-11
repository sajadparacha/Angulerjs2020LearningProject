import {Component} from '@angular/core'
@Component({
    selector:'app-user',
    template:`
    <p>Hello {{name}} Your user component is displayed here</p>
    `
})
export class UserComponent{

    name='Sajjad Ahmed Paracha'
}