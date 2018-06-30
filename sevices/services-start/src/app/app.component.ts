import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [AccountsService]  //provider for our AccountsService
})
export class AppComponent implements OnInit{ //OnInit - lifecycle hook 
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {} //injection of our service

  ngOnInit() {
    this.accounts = this.accountsService.accounts; 
    //доступен как свойство см. выше private accountsService, accounts - ссылочный тип
  }

}
