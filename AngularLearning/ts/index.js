var Car = /** @class */ (function () {
    function Car() {
        this.speed = 10;
        console.log("driving");
    }
    Car.prototype.drive = function () {
        return "I am driving at " + this.speed;
    };
    return Car;
}());
