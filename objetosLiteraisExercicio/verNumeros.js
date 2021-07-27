// 

function fatorial(number) {
  if(number <= 1) return 1;

  let accumulator = number * fatorial(number-1);

  console.log(accumulator);

}

console.log(fatorial(4));