//sources used: 
//  https://en.wikipedia.org/wiki/Tail_call
//  https://en.wikipedia.org/wiki/Dynamic_programming#Fibonacci_sequence
function fib(n, f1 = 0, f2 = 1) {
  if (n == 0) { return f1; }
  if (n == 1) { return f2; }

  return fib(n-1, f2, f1+f2); 
}
