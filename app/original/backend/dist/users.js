"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.macthes = function (another) {
        return another !== undefined && another.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "leandrofdx@gmail.com": new User('leandrofdx@gmail.com', 'Leandro', 'senha'),
    "leandro@gmail.com": new User('leandro@gmail.com', 'Lima', 'senha')
};
