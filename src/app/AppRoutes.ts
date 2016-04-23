import RouteDefinition = angular.RouteDefinition;
import {CurrenciesContainer} from "./currency/CurrenciesContainer";
export class AppRoutes{
    static DEFAULT:string = 'Default';

    static ROUTE_DEFAULT:RouteDefinition = {
        path: '/',
        name: AppRoutes.DEFAULT,
        component: CurrenciesContainer.NAME,
        useAsDefault: true
    };
    
}