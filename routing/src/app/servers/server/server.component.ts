import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params
      .subscribe(
        (params: Params) => {
          //to update the server
          this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

  //queryParamsHandling: 'preserve' - при переходе сохранит предыдущие параметры в url
  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
