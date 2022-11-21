export interface User {
    id: number;
    name: string;
    age?: number;
    email: string
}
let user: User = { id: 1, name: 'john', email: 'john@gmail.com' }
console.log(user);

interface Employees extends User {
    salary: number;
}
let Employer: Employees = { id: 2, name: 'mike', email: 'mike@gmail.com', salary: 5000 }
console.log(Employer)

export interface Login {
    Login(): User;
}