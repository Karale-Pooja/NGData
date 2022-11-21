"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee1_id;
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------- Method 1 -------------------
class Employee {
}
let akash = new Employee();
akash.id = 1;
akash.name = 'akash';
akash.address = 'highway 96';
console.log('\n', akash, '\n');
// ---------------- Method 2 -------------------
class Employee1 {
    get empId() {
        return __classPrivateFieldGet(this, _Employee1_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee1_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id1, name, address) {
        _Employee1_id.set(this, void 0); // private || # --> u can`t access property
        __classPrivateFieldSet(this, _Employee1_id, id1, "f");
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stay at ${this.address}`;
    }
}
_Employee1_id = new WeakMap();
let akash1 = new Employee1(1, 'akash', 'Highway 96');
akash1.empId = 100;
let address = akash1.getNameWithAddress();
console.log('ID is private property = ', akash1);
console.log('access private property = id:', akash1.empId);
console.log(address);
// console.log(akash1.getEmployeeCount()) // error bcoz static
console.log('static = ', Employee1.getEmployeeCount(), '\n');
// ------------------ extends class -------------------
class Manager extends Employee1 {
    // also u can comment constructor and getNameWithAddress they access from parent class
    constructor(id1, name, address) {
        super(id1, name, address);
    }
    getNameWithAddress() {
        return `${this.name} stay at ${this.address}`;
    }
}
let john = new Manager(2, 'john', 'highway 102');
console.log(john);
console.log(john.getNameWithAddress(), '\n');
class Employee2 {
    constructor(id1, name, address) {
        this.id = id1;
        this.name = name;
        this.address = address;
    }
}
let foo = new Employee2(12, 'foo', { street: 'XYZ', city: 'solapur', state: 'maharastra', pin: 412345 });
console.log(foo);
class Employee3 {
    Login() {
        return { id: 1, name: 'john', email: 'john@gmail.com' };
    }
}
let data = new Employee3();
console.log(data.Login());
class Employee4 {
    Login() {
        return { id: 1, name: 'aliases', email: 'john@gmail.com' };
    }
}
let data1 = new Employee4();
console.log(data1.Login());
