// =======A section=================================================

function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(() => {
        let sum = n1 + n2;
        let output = `${sum}(${n1}+${n2})`;
        callback(output);
    }, delayTime);
    // your code here
}
delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

// =======B section================================================

function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve, reject) => {
        let sum = n1 + n2;
        let output = `${sum}(${n1}+${n2})`;
        setTimeout(() => {
            if (output) {
                resolve(output);
            } else {
                reject(console.error());
            }
        }, delayTime);
    });
    // your code here
}

delayedResultPromise(4, 5, 3000).then(console.log);

// 9 (4+5) will be shown in the console after 3 seconds

// =======C section===============================================
async function main() {
    try {
        const output = await delayedResultPromise(7, 5, 3000);
        console.log(output);
    } catch (err) {
        console.log(err);
    }
    // your code here, you should call delayedResultPromise here and get the result using async/await.
}
main(); // result will be shown in the console after <delayTime> seconds
