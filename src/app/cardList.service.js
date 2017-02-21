System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var CardListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CardListService = (function () {
                function CardListService(http) {
                    this.http = http;
                    this.listApiUrl = 'http://localhost:8000/api/v1/lists';
                }
                CardListService.prototype.getLists = function () {
                    return this.http.get(this.listApiUrl)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.errorHandler);
                };
                CardListService.prototype.getList = function (listId) {
                    return this.http.get(this.listApiUrl + '/' + listId)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.errorHandler);
                };
                CardListService.prototype.storeList = function (cardList) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.listApiUrl, cardList, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.errorHandler);
                };
                CardListService.prototype.updateList = function (cardList) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'Cookie': 'XDEBUG_SESSION=XDEBUG_ECLIPSE' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(this.listApiUrl + '/' + cardList.id, cardList, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.errorHandler);
                };
                CardListService.prototype.errorHandler = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json.error || 'Server error');
                };
                CardListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CardListService);
                return CardListService;
            }());
            exports_1("CardListService", CardListService);
        }
    }
});
//# sourceMappingURL=cardList.service.js.map