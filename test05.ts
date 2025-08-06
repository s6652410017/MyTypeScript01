//no parameter has return
function funC() : string{
    console.log('Wow...')
    return 'I Hate U...'
}

// have parameter has retrun
function funD(n1 : number, n2: number, n3: number) : number{
    return n1 + n2 + n3;
}

console.log(funC())
let result : number = funD(10, 20, 30)
console.log(result)