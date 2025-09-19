// Q. you are creating a website for your college.create a class User with 2 properties,name and email.it also has a method called viewdata() that allow user to view website data.

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData (){
        console.log(`UserName = ${this.name} & Email = ${this.email}`)
    }
}
let U1 = new User("Afaque Azam","afaqueazam428@gmail.com");
U1.viewData();


// Q. create a new class called admin which inherits from user. add a new method called editData to admin that allows it to edit website data.


class Admin extends User {
    constructor(admin){
        super();   // this se pajle super() lazmi hai
        this.admin = admin;
    }
    editData() {
        console.log(`My admin is ${this.admin}.`);
    }
}

let A1 = new Admin("ANS");
A1.editData();