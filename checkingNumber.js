/* Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false. */

const checkingNumber = (value) =>{
    if(isNaN(value)){
        console.log('this is not number')
    }
    else{
        console.log('this is number')
    }
}
checkingNumber('hello')