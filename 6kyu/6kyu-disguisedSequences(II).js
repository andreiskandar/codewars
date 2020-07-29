/*
6kyu - Disguised Sequences(II)
https://www.codewars.com/kata/56fe17fcc25bf3e19a000292/train/javascript
Let us define two sums v(n, p) and u(n, p):

\large v(n, p) = \sum_{k=0}^{n}{(-1)^k}*p*{4^{n-k}}*\binom{2n-k}{k}

\large u(n, p) = \sum_{k=0}^{n}{(-1)^k}*p*{4^{n-k}}*\binom{2n-k+1}{k}

Task:
1) Calculate v(n, p) and u(n, p) with two brute-force functions v1(n, p) and u1(n, p).

2) Try v1(n, p) and u1(n, p) for small values of n and p and guess the results of u(n, p) and v(n, p)

3) Using 2) write v_eff(n, p) and u_eff(n, p) (or vEff(n, p) and uEff(n, p) or v-eff(n, p) and u-eff(n, p)) to efficiently calculate v and u for bigger values of n and p

(This third part is not tested in

JS, CS, TS, C++, C, PHP, Crystal, Rust, Swift, R, Nim, Fortran, NASM, Haxe

since there you don't have big integers to control your guess in part 2. See note below for "Shell").

Examples:
v1(12, 70) --> 1750
u1(13, 18) --> 252
Extra points:-)
For the mathy ones: find a relation between v(n, p), v(n-1, p) and u(n-1, p) :-)

Notes
Shell: only v1(n, p)is tested (use the solution you find for v_eff(n, p).
Forth: only ueff and veff are tested with small numbers.

Factor: only ueff and veff are tested

If you have found u_eff(n, p) and v_eff(n, p) you can use them to calculate u(n, p) and v(n, p).
You could see: https://en.wikipedia.org/wiki/Binomial_coefficient for a refresh about binomial coefficients.
*/

v1 = (n, p) => {
  let sum = 0;
  for (let k = 0; k <= n; k++) {
    sum +=
      Math.pow(-1, k) *
      p *
      Math.pow(4, n - k) *
      (factorial(2 * n - k) / (factorial(k) * factorial(2 * n - 2 * k)));
  }
  return sum;
};

u1 = (n, p) => {
  let sum = 0;
  for (let k = 0; k <= n; k++) {
    sum +=
      Math.pow(-1, k) *
      p *
      Math.pow(4, n - k) *
      (factorial(2 * n - k + 1) /
        (factorial(k) * factorial(2 * n - 2 * k + 1)));
  }
  return sum;
};

// console.log(v1(16, 68));

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
}
