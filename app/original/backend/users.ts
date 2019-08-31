export class User {
    constructor( public email: string, 
                public name: string, 
                private password: string) {}

                macthes(another: User): boolean {
                    return another !== undefined && another.email && another.password === this.password
                }
}

export const users: {[key:string]: User}  = {
    "leandro@gmail.com": new User('leandro@gmail.com', 'senha', 'senha')
}