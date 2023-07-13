// 击鼓传花
function hotPotato(elementsList: string[], num: number): string {
  // 创建队列
  const queue: string[] = [];
  // 把队伍数据放入队列
  for (let i = 0; i < elementsList.length; i++) {
    queue.push(elementsList[i]);
  }

  //  如果队列>1，就循环, 不知道次数所以用while
  while (queue.length > 1) {
    // 每一轮循环,，知道循环次数 num,所以用for
    // 必须从1开始，因为没有第0个人
    for (let i = 1; i < num; i++) {
      // 为什么不能 <= num,因为 等于 num 就必须移除,也叫做出队
      // 否则出队,再入队
      queue.push(queue.shift()!);
    }
    // 第一轮走完, num 得人出局
    queue.shift();
  }

  // 最后剩下得人就是胜利者
  const winner = queue.shift();
  // 如果要获取胜利者得原位置
  const index = elementsList.indexOf(winner!);

  return `胜利者是: ${winner}, 位置是: ${index}`;
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winnerInfo = hotPotato(names, 3);
console.log(winnerInfo);
