function cleanUpNonAlpha(str){
    return str.replace(/[\W_]/g, "");
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function flipStr(str){
    return [...str].reverse().join("");
}

function palindrome(str) {
    // Limpar string - removendo caracteres não alfanumericos
    const cleanedUpStr = cleanUpNonAlpha(str);
    
    // tornar string uppercase
    const upperCaseStr = makeUpperCase(cleanedUpStr);
    
    // inverter string limpa maiuscula
    const reversedStr = flipStr(upperCaseStr);
    
    // comparar as strings
    if (reversedStr == upperCaseStr){
        return true;
    } else {
        return false;
    }
}