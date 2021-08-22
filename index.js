// 盛水最多容器

// 双指针

const maxArea = height => {
    let res = 0,
        i = 0, // 前指针
        j = height.length - 1; // 后指针
    while (i < j) {
        const area = (j - i) * Math.min(height[i], height[j]); // 计算面积
        res = Math.max(res, area); // 取最大面积
        if (height[i] < height[j]) {
            i++; // 从左往右
        } else {
            j--; // 从右往左
        }
    }
    return res;
};

// 测试

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height); // 49

// es5 数组去重

//

const souce = arr => {
    var res = [],
        temp = arr[0];
    i = 1;
    j = arr.length;

    while (i < j) {
        console.log(
            "%c 🥓 temp: ",
            "font-size:20px;background-color: #FCA650;color:#fff;",
            temp
        );
        console.log(
            "%c 🥞 arr[i]: ",
            "font-size:20px;background-color: #E41A6A;color:#fff;",
            arr[i]
        );
        const so = temp ^ arr[i];

        console.log(
            "%c 🍝 so: ",
            "font-size:20px;background-color: #7F2B82;color:#fff;",
            so
        );
        if (so === 0) {
            res.push(arr[i]);
        }
        temp = arr[i + 1];
        i++;
    }
    return res;
};

let arr = [1, 1, 1, 3, 4, 4];

const resArr = souce(arr);
console.log(
    "%c 🥧 resArr: ",
    "font-size:20px;background-color: #3F7CFF;color:#fff;",
    resArr
);