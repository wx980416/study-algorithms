// 约瑟夫环: 一群人围成一圈，从某个人开始报数，报到某个数的人出列，直到最后一个人
// https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，
// 则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
// 01234;
// 3401;
// 134;
// 13;
// 3;

function lastRemaining(n: number, m: number): number {
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    // 数字是从0开始的，将所有人放入队列
    queue.push(i);
  }

  while (queue.length > 1) {
    // 第一轮报数，从第一个人开始，将第 m 个人出队
    for (let i = 1; i < m; i++) {
      // 其他出队再入队，类似击鼓传花
      queue.push(queue.shift()!);
    }

    queue.shift();
  }

  return queue.shift()!;
}

console.log(lastRemaining(5, 3)); // 3
console.log(lastRemaining(10, 17)); // 2
export {};
