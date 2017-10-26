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
var md5_1 = require("ts-md5/dist/md5");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var auth_config_1 = require("../services/auth.config");
var CosmicService = /** @class */ (function () {
    function CosmicService(http) {
        this.http = http;
        this.data = {};
    }
    ;
    CosmicService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Accept', '*/*');
    };
    CosmicService.prototype.getHash = function () {
        return md5_1.Md5.hashStr(auth_config_1.myCosmic.timeStamp + auth_config_1.myCosmic.privateID + auth_config_1.myCosmic.publicID);
    };
    CosmicService.prototype.getUserKey = function () {
        return "ts=" + auth_config_1.myCosmic.timeStamp + "&apikey=" + auth_config_1.myCosmic.publicID + "&hash=" + this.getHash();
    };
    CosmicService.prototype.getService = function (url) {
        return this.http.get(url)
            .map(function (response) {
            return response.json().data.results;
        });
    };
    CosmicService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CosmicService);
    return CosmicService;
}());
exports.CosmicService = CosmicService;
//# sourceMappingURL=cosmic.service.js.map