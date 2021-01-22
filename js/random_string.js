const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890";
function randomString(e) {
  e = e || 32;
  const len = t.length;
  let n = "";
  for (i = 0; i < e; i++) {
    n += t.charAt(Math.floor(Math.random() * len));
  }
  return n;
}

const s1 = randomString(6);
const s2 = randomString();
console.log(s1);
console.log(s2);
