import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { } //инъекция роутера, доступ к id, который передаем в url

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // чтобы динамически менять данные на странице из url в случае, если мі находимся в том же компоненте,
    // данные в котором хотим изменить, потому что компонент в котором мы находимся не может просто так быть перезагружен изнутри
    this.route.params  //params are observable here 
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
