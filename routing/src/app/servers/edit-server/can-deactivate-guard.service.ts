import { Observable } from "../../../../node_modules/rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentStatr: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
        }
}