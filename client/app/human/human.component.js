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
var human_service_1 = require('./../services/human.service');
var core_1 = require('@angular/core');
var HumanComponent = (function () {
    function HumanComponent(humanService) {
        this.humanService = humanService;
        //        this.name = "Create a human with angular 2!";
    }
    HumanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.humanService.getHumans().subscribe(function (res) {
            _this.humans = res;
            console.log("ngOnInit(): " + _this.humans);
        });
    };
    HumanComponent.prototype.addHuman = function () {
        var _this = this;
        var human = {
            name: this.name,
            age: this.age
        };
        //console.log(human);
        this.humanService.addHuman(human).subscribe(function (data) {
            _this.humans.push(data);
            console.log('success addHuman: ' + JSON.stringify(data));
        });
    };
    HumanComponent.prototype.viewHuman = function (id) {
        var _this = this;
        console.log('view human: ' + id);
        this.humanService.getHuman(id).subscribe(function (data) {
            console.log('success viewHuman: ' + JSON.stringify(data));
            _this.viewedHuman = data[0];
        });
    };
    HumanComponent.prototype.removeHuman = function (id) {
        var _this = this;
        console.log('delete human: ' + id);
        this.humanService.removeHuman(id).subscribe(function (data) {
            console.log('success removeHuman: ' + data);
            for (var index = 0; index < _this.humans.length; index++) {
                if (_this.humans[index]._id == id) {
                    console.log('delete human locally: ' + index + ' ' + id);
                    _this.humans.splice(index, 1);
                    return;
                }
            }
        });
    };
    HumanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'human',
            templateUrl: 'human.component.html',
            styleUrls: ['human.component.css'],
            providers: [human_service_1.HumanService]
        }), 
        __metadata('design:paramtypes', [human_service_1.HumanService])
    ], HumanComponent);
    return HumanComponent;
}());
exports.HumanComponent = HumanComponent;
//# sourceMappingURL=human.component.js.map