import './app-component.scss';
import IComponentOptions = angular.IComponentOptions;
import RouteDefinition = angular.RouteDefinition;
import {AppRoutes} from "./AppRoutes";

export class AppComponent implements IComponentOptions {
    static NAME:string = "app";
    $routeConfig:RouteDefinition[] = [
        AppRoutes.ROUTE_DEFAULT,
    ];
    template:string = `
        <h1 layout="row" layout-align="center center">Component based application architecture</h1>
        
        <!--our  components defined in our routeconfig will get rendered inside this element-->
        <ng-outlet></ng-outlet>
        `;
}