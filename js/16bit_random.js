
function createRandomStr(flag = false, min = 16, max) {
	const charArr = arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	// 默认随机字符串长度为 16
	let strLen = min;
	if(flag && max && (max - min > 0 )) {
		strLen = Math.floor(Math.random() * (max - min)) + min;
	}
	let str = '';
	for(let i = 0; i < strLen; i++) {
 		const pos = Math.floor(Math.random() * strLen)
 		str += charArr[pos]
	}
	return str
}

const s = createRandomStr(false, 8)
const s1 = createRandomStr(true, 8, 20)
console.log(s)
console.log(s1)
