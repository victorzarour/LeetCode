/**
 * @param {number} n
 * @return {boolean}
 */

function sq(num) {
  let sum = 0;
    
  while (num > 0) {
    let d = num % 10;
    sum += d * d;
    num = Math.floor(num / 10);
  }
    
  return sum;
}

function isHappy(n) {
    
  let slow = n
  let fast = sq(slow)
    
  while (fast !== 1 && slow !== fast) {
    slow = sq(slow);
    fast = sq(sq(fast));
  }
  return fast === 1;
}
