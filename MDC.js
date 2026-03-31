function mdc(a, b) {


    let maior = a > b ? a : b; 

    for (let i = maior; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i; 
        }
    }
}

console.log(mdc(12, 8)); 

module.exports = mdc;