function convertToRoman(num) {
    let a = "";
    
    while (num >= 1000, num - 1000){
        a += "M";
        num -= 1000;
    }
    while ( num >= 900, num - 900){
        a += "CM";
        num -= 900;
    }
    while (num >= 500, num - 500){
        a += "D";
        num -= 500;
    }
    while (num >= 400, num - 400){
        a += "CD";
        num -= 400;
    }
    while (num >= 100, num - 100){
        a += "C";
        num -= 100;
    }
    while (num >= 90, num - 90){
        a += "XC";
        num -= 90;
    }
    while (num >= 50, num - 50){
        a += "L";
        num -= 50;
    }
    while (num >= 40, num - 40){
        a += "XL";
        num -= 40;
    }
    while (num >= 10, num - 10){
        a += "X";
        num -= 10;
    }
    while (num >= 9, num - 9){
        a += "IX";
        num -= 9;
    }
    while (num >= 5, num - 5){
        a += "V";
        num -= 5;
    }
    while (num >= 4, num - 4){
        a += "IV";
        num -= 4;
    }
    while (num > 0, num - 1){
        a += "I";
        num -= 1;
    }
    
    return a;
}