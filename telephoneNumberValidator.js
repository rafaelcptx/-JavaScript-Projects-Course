function telephoneCheck(str) {
    const regex1 = /^\d{3}-\d{3}-\d{4}$/;
    const regex2 = /^\(\d{3}\)\d{3}-\d{4}$/;
    const regex3 = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    const regex4 = /^\d{3}\s\d{3}\s\d{4}$/;
    const regex5 = /^\d{10}$/;
    const regex6 = /^1\s\d{3}\s\d{3}\s\d{4}$/;
    const regex7 = /^1\s\d{3}-\d{3}-\d{4}$/;
    const regex8 = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/;
    const regex9 = /^1\(\d{3}\)\d{3}-\d{4}$/;
  
    
    const regexes = [regex1, regex2, regex3, regex4, regex5, regex6, regex7, regex8, regex9];
  
    for (let regex of regexes){
      if (regex.test(str)){
        return true;
      } 
    }
    return false;
  }