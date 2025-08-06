//class intance(obj)
class Student{
    //data --
    fname : string = ''
    age : number = 0
    //
    constructor(){
        console.log('DTI-SAU')
    }
    //method --
    showInfo(){
        console.log(`Hi...${this.fname}`)
        console.log( `Your age..${this.age}`)
    }
}

let ob1 = new Student()
let ob2 = new Student()

ob1.fname = 'Student'
ob1.age = 20
ob1.showInfo()