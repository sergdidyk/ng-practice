import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService] //providing our services
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, 
              private accountsService: AccountsService) {} //services injection
  
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    console.log('A server status changed, new status: ' + status);
  }
}
