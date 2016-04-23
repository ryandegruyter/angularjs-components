import 'angular';
import 'angular-messages';
import 'angular-material';
require('angular-material/angular-material.css');
import {AppComponent} from "./AppComponent";
import {CURRENCY_MODULE} from "./currency/CurrencyModule";
import '@angular/router/angular1/angular_1_router.js';

export const APP_MODULE_NAME = "currency";

const APP_MODULE_DEPENDENCIES:Array<string> = [
    'ngMaterial',
    'ngMessages',
    'ngComponentRouter',
    CURRENCY_MODULE
];

angular
    .module(
        APP_MODULE_NAME,
        APP_MODULE_DEPENDENCIES
    )
    .component(AppComponent.NAME, new AppComponent())
    /*Define our root component for the component router */
    .value('$routerRootComponent', AppComponent.NAME)
;
