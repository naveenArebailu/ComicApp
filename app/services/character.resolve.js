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
var cosmic_service_1 = require("./cosmic.service");
var CharacterResolve = /** @class */ (function () {
    function CharacterResolve(cosmicService) {
        this.cosmicService = cosmicService;
    }
    CharacterResolve.prototype.resolve = function (route, state) {
        var id = +route.params.id;
        var url = 'http://gateway.marvel.com/v1/public/characters/' + id + '?' + this.cosmicService.getUserKey();
        return this.cosmicService.getService(url);
    };
    CharacterResolve = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [cosmic_service_1.CosmicService])
    ], CharacterResolve);
    return CharacterResolve;
}());
exports.CharacterResolve = CharacterResolve;
//# sourceMappingURL=character.resolve.js.map