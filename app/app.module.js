"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_jwt_1 = require("angular2-jwt");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var character_component_1 = require("./character/character.component");
var comics_component_1 = require("./comics/comics.component");
var comic_component_1 = require("./comics/comic.component");
var creators_component_1 = require("./creators/creators.component");
var cosmic_service_1 = require("./services/cosmic.service");
var character_resolve_1 = require("./services/character.resolve");
var comics_resolve_1 = require("./services/comics.resolve");
var comic_resolve_1 = require("./services/comic.resolve");
var creators_resolve_1 = require("./services/creators.resolve");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                character_component_1.CharacterComponent,
                comics_component_1.ComicsComponent,
                comic_component_1.ComicComponent,
                creators_component_1.CreatorsComponent
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                cosmic_service_1.CosmicService,
                character_resolve_1.CharacterResolve,
                comics_resolve_1.ComicsResolve,
                comic_resolve_1.ComicResolve,
                creators_resolve_1.CreatorsResolve
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                http_1.HttpModule
            ],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map