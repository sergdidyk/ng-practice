import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'], 
  providers: [LoggingService, AccountsService] //providing our service
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService ) {} //services injection
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    this.loggingService.logStatusCgange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus); - \\заменили сервисом
  }
}
