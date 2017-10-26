"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var character_component_1 = require("./character/character.component");
var comics_component_1 = require("./comics/comics.component");
var comic_component_1 = require("./comics/comic.component");
var character_resolve_1 = require("./services/character.resolve");
var comics_resolve_1 = require("./services/comics.resolve");
var comic_resolve_1 = require("./services/comic.resolve");
var creators_component_1 = require("./creators/creators.component");
var creators_resolve_1 = require("./services/creators.resolve");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'character', component: home_component_1.HomeComponent },
    { path: 'character/:id', component: character_component_1.CharacterComponent, resolve: { data: character_resolve_1.CharacterResolve }, data: { path: 'character/:id' } },
    { path: 'character/:id/comics', component: comics_component_1.ComicsComponent, resolve: { data: comics_resolve_1.ComicsResolve }, data: { path: 'character/:id/comics' } },
    { path: 'comics', component: comics_component_1.ComicsComponent, resolve: { data: comics_resolve_1.ComicsResolve } },
    { path: 'comics/:id', component: comic_component_1.ComicComponent, resolve: { data: comic_resolve_1.ComicResolve }, data: { path: 'comic/:id' } },
    { path: 'comics/:id/creators', component: creators_component_1.CreatorsComponent, resolve: { data: creators_resolve_1.CreatorsResolve }, data: { path: 'comics/:id/creators' } },
    { path: '**', redirectTo: '' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map