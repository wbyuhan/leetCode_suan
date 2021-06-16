// 盛水最多容器

// 双指针

const maxArea = (height: number[]) => {
    let res = 0,
        i = 0, // 前指针
        j = height.length - 1; // 后指针
    while (i < j) {
        const area = (j - i) * Math.min(height[i], height[j]); // 计算面积
        res = Math.max(res, area)// 取最大面积
        if (height[i] < height[j]) {
            i++; // 从左往右
        } else {
            j-- // 从右往左
        }
    }
    return res
}

// 测试

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height) // 49