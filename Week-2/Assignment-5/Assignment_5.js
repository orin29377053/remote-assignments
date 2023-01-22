function binarySearchPosition(numbers, target) {
    let left = 0;
    let right = Math.ceil(numbers.length / 2);
    let max_right = numbers.length - 1;
    do {
        if ((numbers[0] > target) | (numbers[-1] < target)) {
            return -1;
        } else if (numbers[right] === target) {
            return right;
        } else if (numbers[left] === target) {
            return left;
        } else if (numbers[right] > target && numbers[left] < target) {
            // console.log(
            //     `left is [${left}] ,value=${numbers[left]} ;right is [${right}],value=${numbers[right]}`
            // );
            left = left;
            max_right = right;
            right = Math.ceil((left + right) / 2);
        } else if (
            numbers[right] > target &&
            numbers[left] > target &&
            right !== left
        ) {
            // console.log(
            //     `left is [${left}] ,value=${numbers[left]} ;right is [${right}],value=${numbers[right]}`
            // );
            gap = right - left;
            left = left;
            right = left + gap <= max_right ? left + gap : max_right;
        } else if (
            numbers[right] < target &&
            numbers[left] < target &&
            right !== left
        ) {
            // console.log(
            //     `left is [${left}] ,value=${numbers[left]} ;right is [${right}],value=${numbers[right]}`
            // );
            gap = right - left;
            left = right;
            right = left + gap <= max_right ? left + gap : max_right;
        } else {
            return -1;
        }
    } while (target !== numbers[left]);
}

// your code here
console.log(binarySearchPosition([1, 2, 5, 6, 7], 7)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
