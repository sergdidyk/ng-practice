import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";


//Should be added to the service where we want to inject
//Only add if we expect to get something injected
@Injectable() //metadata for injection service into service (without this will be error)

export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    statusUpdated = new EventEmitter<string>(); //trigger it in updateStatus method

    constructor(private loggingService: LoggingService) {} //injection service into service 

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusCgange(status); //service into service
    }    

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusCgange(status); //service into service
    }
}