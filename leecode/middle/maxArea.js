var maxArea = function (height) {
  var res = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (i === j) continue;
      if (i < j) {
        res = Math.max(res, (j - i) * Math.min(height[i], height[j]));
      } else {
        res = Math.max(res, (i - j) * Math.min(height[i], height[j]));
      }
    }
  }
  return res;
};

// 双指针
var maxArea = function (height) {
  var res = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    res = Math.max(res, (j - i) * Math.min(height[i], height[j]));
    if (height[i] <= height[j]) {
      ++i;
    } else {
      --j;
    }
  }
  return res;
};
