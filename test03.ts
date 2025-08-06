//
let data1 : number
data1 = 20

let data2 : string
data2 = 'aaa'
data2 = 'bbb'
data2 = 'ccc'

let data3 : boolean
data3 = true
data3 = false

let data4 : string[] = []
data4[0] = 'xxx'
data4[1] = 'yyy'
data4[2] = 'zzz'
// data4[3] = 555 error

let data5 : (string | number | boolean) [] = []
data5[0] = 'hello...'
data5[1] = 111
data5[2] = 222222222222
data5[3] = 33333
data5[4] = 'hi...'
data5[5] = true

let data6 : number[] = [10, 20, 30, 40, 50]

let data7 : {
    name : string,
    age : number,
    salary : number
}

data7 = {
    name : 'Sombat',
    age : 25,
    salary : 15000.00
}

console.log(data7.name)
console.log(data7.age)
console.log(data7.salary)