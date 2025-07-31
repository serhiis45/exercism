/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name: string) {
    if (name === '' || name === undefined){
      let result = 'One for you, one for me.';
      return result;
    }
    else{
      let result1 = `One for ${name}, one for me.`;
      return result1;
    }
}
