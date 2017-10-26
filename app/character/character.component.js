"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var cosmic_service_1 = require("../services/cosmic.service");
require("rxjs/add/operator/switchMap");
var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(auth, cosmicService, router, route) {
        this.auth = auth;
        this.cosmicService = cosmicService;
        this.router = router;
        this.route = route;
        this.character = {};
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.character = data.data[0];
        });
    };
    CharacterComponent = __decorate([
        core_1.Component({
            selector: 'character',
            templateUrl: 'app/character/character.template.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.Auth, cosmic_service_1.CosmicService, router_1.Router, router_1.ActivatedRoute])
    ], CharacterComponent);
    return CharacterComponent;
}());
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map