import { Component } from "@angular/core";

@Component({
    selector: 'app-messages', 
    template: `
        <app-warning-alert></app-warning-alert>
        <app-success-alert></app-success-alert>
    `,
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

}