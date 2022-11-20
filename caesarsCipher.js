function rot13(str) {
    let convertedStr = "";
    let char = '';
    let ROT13_ALPHABET = {
      'A':'N',
      'B':'O',
      'C':'P',
      'D':'Q',
      'E':'R',
      'F':'S',
      'G':'T',
      'H':'U',
      'I':'V',
      'J':'W',
      'K':'X',
      'L':'Y',
      'M':'Z',
      'N':'A',
      'O':'B',
      'P':'C',
      'Q':'D',
      'R':'E',
      'S':'F',
      'T':'G',
      'U':'H',
      'V':'I',
      'W':'J',
      'X':'K',
      'Y':'L',
      'Z':'M',
    }
  
    //  iterate through the string verifying if the char is a letter.
    for (let i = 0; i < str.length; i++){
      //  if it is, convert and add to convertedStr.
      if (/[a-z]/i.test(str[i])){
        char = ROT13_ALPHABET[str[i]];
        convertedStr += char;
      } else {
    //  if its not... just add to convertedStr.
        convertedStr += str[i];
      }
    }
   
  return convertedStr;
}