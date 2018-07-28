import { Subject } from "rxjs";

export class UsersService {
    userActivated = new Subject(); //Observable and Observer at the same time
}