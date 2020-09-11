let time = 7 
if (time <= 7) {
    console.log('ansang')
}
else if (time <=8) {
    console.log('didao')
}
else if (time == 9) {
    console.log('di lam')
}
else {
    console.log('dang lam viec')
}
for (let i = 0; i < 5; i += 2) {
    console.log(i)
    
}
// tinh tong
let sum = 0;
for (let i = 1; i < 11; i++) {
    sum += i
    if (i % 2 ==0){
        console.log('so chan la'+ i )
    }     
    else {
        console.log('so le la'+i)
    }
}
console.log('tong la'+sum)
let sum1 = 0
let i =1
while(i<=10){
    sum1 += i;
    i += 1
}
console.log('tong nua la'+sum1)

// Register

let firstName = prompt('Nhap ten di bro');
while (firstName ==""){
    alert('nhap ten vao bro!!!!!')
    firstName = prompt('Nhap ten di bro')
    if (!firstName=="") {
        break;
    }
};
let password = prompt('nhap password');
while (password.length < 6 || password.length > 20){
    alert('nhap lai password')
    password = prompt('nhap password')
    if (password.length > 6 && password.length < 20){
        break;
    }
}


let soNguyenTo = prompt('so ban muon');
if (soNguyenTo == 2){
    console(soNguyenTo+'la so nghuyen to ')
}
let i = 1
let check = true
while (i<soNguyenTo){
    i += 1;
    if (soNguyenTo % i == 0){
        console.log('so'+soNguyenTo+'khong phai so nguyen to')
        
        break;
    }
}
