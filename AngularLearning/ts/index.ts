// interface Drivable {
//     speed:number;
//     drive(): string;
// }

// class Car implements Drivable {
//     speed = 10;
//     drive() {
//         return `I am driving at ${this.speed}`
//     }
// }

// const myCar = new Car()

// const startDriving = (vehicle: Drivable) => {
//     vehicle.drive()
// }

// startDriving(myCar)

//generic class 
class valueHolder<T> {
    value: T
}

const numberHolder = new valueHolder<number>()
numberHolder.value = 10;

const stringHolder = new valueHolder<string>()
stringHolder.value = 'A string holder!'

new valueHolder<boolean>()

//generic function

const valueWrapper = <T> (value: T): T[] => {
    return [value]
}

const value = valueWrapper<boolean>(false)
console.log(value);












