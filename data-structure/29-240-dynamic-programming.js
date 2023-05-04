const originalFibo = (n) => {
  if (n === 2 || n === 1) return 1;
  return originalFibo(n - 1) + originalFibo(n - 2);
};

const memoizationFibo = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = memoizationFibo(n - 1, memo) + memoizationFibo(n - 2, memo);
  memo[n] = res;
  return res;
};

const memoizationFiboBottomUp = (n) => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

console.log(originalFibo(3));
