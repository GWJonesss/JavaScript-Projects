
function add(A,B) {
    let res = A + B;
    return res;
}

document.getElementById('math').innerHTML = add(5,4);


function subtract(C,D){
    let res = C - D;
    return res;
}
document.getElementById('minus').innerHTML = subtract(5,4);

function division(E,F) {
    let res = E / F;
    return res;
}

document.getElementById('divis').innerHTML = division(5,4);


function multiply(G,H){
    let res = G * H;
    return res;
}
document.getElementById('multi').innerHTML = multiply(5,4);

function multipleOP(I,J,K,L){
    let res = (I + J) * K / (L - J);
    return res;
}
document.getElementById('multOP').innerHTML = multipleOP(5,4,5,7);

function modOP(M,N){
    let res = M % N;
    return res;
}
document.getElementById('modulus').innerHTML = modOP(7,2);

function negation(O){
    let res = -O;
    return res;
}
document.getElementById('unary').innerHTML = negation(4);

var P = 4;
P++;
document.getElementById('incre').innerHTML = (P);

var Q = 4;
Q--;
document.getElementById('decre').innerHTML = (Q);

window.alert(Math.random() * 100)

var R = 7.4;
document.getElementById('roundnub').innerHTML = Math.round(R);