function countCharacters(inputString: string): Record<string, number> | undefined {
    let inputToLowerCase = inputString.toLocaleLowerCase();
    let letterCountObj: Record<string, number> = {};
    for (let letter of inputToLowerCase) {
      if (letterCountObj[letter] === undefined) {
        letterCountObj[letter] = 1;
      }
      else {
        letterCountObj[letter] = letterCountObj[letter] + 1;
      }
    }
    return letterCountObj;
  }
  
  let output = countCharacters("Vincent"); // { v: 1, i: 1, n: 2, c: 1, e: 1, t: 1 }
  console.log(output);
  output = countCharacters("Stephen"); // { s: 1, t: 1, e: 2, p: 1, h: 1, n: 1 }
  console.log(output)
  