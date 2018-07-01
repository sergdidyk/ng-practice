import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'], 
  // providers: [LoggingService] //providing our service
})                            //удалили AccountService из providers (AccountsService в родительском app.component)
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, //services injection
              private accountsService: AccountsService ) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status) //cross-component communication through a service with the event emitter
    );              
  } 
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // this.loggingService.logStatusCgange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus); - \\заменили сервисом
  }
}
