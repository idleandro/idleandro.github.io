export class User {
    constructor( public email: string, 
                public name: string, 
                private password: string) {}

                macthes(another: User): boolean {
                    return another !== undefined && another.email && another.password === this.password
                }
}

export const users: {[key:string]: User}  = {
    "leandrofdx@gmail.com": new User('leandrofdx@gmail.com', 'Leandro', 'senha'),
    "leandro@gmail.com": new User('leandro@gmail.com', 'Lima', 'senha')
}