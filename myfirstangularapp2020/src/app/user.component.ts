import {Component} from '@angular/core'
@Component({
    selector:'app-user',
    template:`
    <!--Below we are binding the input event with and event handler function define in our ts -->
    <input type="text"  [(ngModel)]="name"/>
    <p>Hello {{name}} Your user component is displayed here</p>
    <app-cart [items]="['Apples passed from component declartion',
                        'Bananas  passed from component declartion',
                        'Cherries  passed from component declartion']"
                        (newItemAdded)="onNewItemAdded($event)"
                        >
                        </app-cart>
    <p>Item Added to Cart Component is {{rootItem}}</p>
    `
})
export class UserComponent{

    name='Sajjad Ahmed Paracha';
    rootItem="Fruites List";
    /**
     * 
     * @param event 
     * The below method will be called whenever something is entered in the above input.
     */
    // onUserInput(event){
    //     this.name=event.target.value;
    // }
    onNewItemAdded(newItem){
        this.rootItem=newItem;
    }
}