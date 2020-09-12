const promiseDemo = delay =>
  new Promise((resolve, reject) => [
    setTimeout(() => {
      const number = Math.ceil(Math.random() * 10);
      return resolve(number);
    }, delay)
  ]);

async function getSum() {
  const num1 = await promiseDemo(100);
  const num2 = await promiseDemo(100);
  return num1 + num2;
}

async function test() {
  let result = await getSum();
  console.log(result);
  console.log("done");
}

test();
