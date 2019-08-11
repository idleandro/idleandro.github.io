import { CanDeactivate, ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
    canDeactivate(orderCompoment: OrderComponent,
                  activatedRote: ActivatedRouteSnapshot, 
                  routerState: RouterStateSnapshot): boolean { 

    if(!orderCompoment.isOrderCompleted()){
        return window.confirm('Deseja desistir da compra?')
    } else {
        return true
    }
}
}