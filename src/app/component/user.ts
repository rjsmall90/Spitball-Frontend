export class User {

    firstName: string;
    lastName: string;
    username: string; 
    email: string;
    password: string; 
    verifyPassword: string;

        constructor(public name?: string) {
            this.firstName = this.name; 

    }
}