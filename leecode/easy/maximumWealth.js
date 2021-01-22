var maximumWealth = function (accounts) {
  var total = [];
  var persons = [...accounts];
  for (let i = 0; i < persons.length; i++) {
    const tmp = persons[i];
    const tmpTotal = tmp.reduce((p, c) => p + c);
    total.push(tmpTotal);
  }
  return Math.max(...total);
};
