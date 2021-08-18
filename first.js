"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var hello = "my name is mudassir";
console.log(hello);
// variable types
var name = "mudassir";
var line = "Iam " + name + " and a beginner in TS";
console.log(line);
//Array types
var x = [1, 2, 3];
console.log(x);
//tuple
var tuple = ["mk", 10];
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["blue"] = 6] = "blue";
    Color[Color["green"] = 7] = "green";
})(Color || (Color = {}));
var y = Color.blue;
console.log(y);
var z = 10;
z = true;
z = "mk";
console.log(z);
//or condition
var i;
i = 20;
i = "Mk";
console.log(i);
// ? optional property
function num(first, second) {
    if (second) {
        return first + second;
    }
    else {
        return first;
    }
}
var res = num(8, 10);
console.log(res);
function myname(person) {
    console.log("Iam " + person.firstname + " " + person.secondname);
}
var userone = {
    firstname: "Bruce"
};
myname(userone);
//classes
var Empolyee = /** @class */ (function () {
    function Empolyee(user) {
        this.name = user;
    }
    Empolyee.prototype.Login = function () {
        console.log(this.name);
    };
    return Empolyee;
}());
//class inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managername) {
        return _super.call(this, managername) || this;
    }
    return Manager;
}(Empolyee));
var some = new Empolyee("thisis mudassir");
var mange = new Manager("My name is manager");
some.Login();
mange.Login();
