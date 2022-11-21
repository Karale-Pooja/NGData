// ---------------- Method 1 -------------------
class Employee {
    id!: number; // ! recommended
    name!: string;
    address!: string;
}

let akash = new Employee();
akash.id = 1
akash.name = 'akash'
akash.address = 'highway 96'
console.log('\n', akash, '\n');

// ---------------- Method 2 -------------------
class Employee1 {
    #id: number; // private || # --> u can`t access property
    name: string;
    address: string;
    get empId(): number { // getter the value && also access private property
        return this.#id
    }
    set empId(id: number) { // setter assign the value
        this.#id = id
    }
    static getEmployeeCount(): number {
        return 50;
    }
    constructor(id1: number, name: string, address: string) {
        this.#id = id1
        this.name = name
        this.address = address
    }
    getNameWithAddress(): string {
        return `${this.name} stay at ${this.address}`
    }
}
let akash1 = new Employee1(1, 'akash', 'Highway 96')
akash1.empId = 100
let address = akash1.getNameWithAddress()
console.log('ID is private property = ', akash1)
console.log('access private property = id:', akash1.empId)
console.log(address)
// console.log(akash1.getEmployeeCount()) // error bcoz static
console.log('static = ', Employee1.getEmployeeCount(), '\n')

// ------------------ extends class -------------------
class Manager extends Employee1 {

    // also u can comment constructor and getNameWithAddress they access from parent class
    constructor(id1: number, name: string, address: string) {
        super(id1, name, address)
    }
    getNameWithAddress(): string {
        return `${this.name} stay at ${this.address}`
    }
}
let john = new Manager(2, 'john', 'highway 102');
console.log(john)
console.log(john.getNameWithAddress(), '\n')

// ------------------ interface -------------------

interface Address {
    street: string;
    city: string;
    state: string;
    pin: number
}
class Employee2 {
    id: number;
    name: string;
    address: Address;

    constructor(id1: number, name: string, address: Address) {
        this.id = id1
        this.name = name
        this.address = address
    }
}
let foo = new Employee2(12, 'foo', { street: 'XYZ', city: 'solapur', state: 'maharastra', pin: 412345 })
console.log(foo)


// ------------------ import interface -------------------
import { Login, User } from './interface'
class Employee3 implements Login {

Login():User{
    return { id: 1, name: 'john', email: 'john@gmail.com' }
}
}
let data = new Employee3()
console.log(data.Login() )


import * as LoginUser from './interface' // ---------- aliases ------
class Employee4 implements LoginUser.Login {

Login():LoginUser.User{
    return { id: 1, name: 'aliases', email: 'john@gmail.com' }
}
}
let data1 = new Employee4()
console.log(data1.Login() )