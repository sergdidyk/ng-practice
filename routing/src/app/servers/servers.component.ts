import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
              private router: Router, 
              private route: ActivatedRoute) { } // AcitvatedRoute injects currently active route

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route}); 
    // //define relative to which route this link should be loaded
    // //сообщаем Angular текущий относительныей путь, т.е. относительно к чему указанный путь должен быть загружен
  }

}
