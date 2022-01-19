// 1 - Non-Constructible Change
const nonConstructibleChange = (coins: number[]): number => {
    const sorted = coins.sort((a, b) => a - b);
  
    let cumul = 0;
  
    for (let i = 0; i < sorted.length; i++) {
      const coin = sorted[i];
      const next = cumul + 1;
      if (coin > next) {
        return next;
      } else {
        cumul += coin;
      }
    }
    return cumul;
  };
  
  const coinsTC1: number[] = [5, 7, 1, 1, 2, 3, 22];
  const coinsResulttc1 = nonConstructibleChange(coinsTC1);
  coinsResulttc1;
  
  const coinsTC2: number[] = [1, 1, 1, 1, 1];
  const coinsResulttc2 = nonConstructibleChange(coinsTC2);
  coinsResulttc2;
  
  const coinsTC3: number[] = [1, 5, 1, 1, 1, 10, 15, 20, 100];
  const coinsResulttc3 = nonConstructibleChange(coinsTC3);
  coinsResulttc3;
  
  // 2 - Sorted Squared Array
  const sortedSquaredArray = (array: number[]): number[] => {
    return array.map((x) => x * x).sort((a, b) => a - b);
  };
  
  const arrayTC1: number[] = [1, 2, 3, 5, 6, 8, 9];
  const tc1 = sortedSquaredArray(arrayTC1);
  tc1;
  
  const arrayTC2: number[] = [-2, -1];
  const tc2 = sortedSquaredArray(arrayTC2);
  tc2;
  
  const arrayTC3: number[] = [-10, -5, 0, 5, 10];
  const tc3 = sortedSquaredArray(arrayTC3);
  tc3;