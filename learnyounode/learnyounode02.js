var sum = 0;
var nums = process.argv.slice(2);
for (i=0; i < nums.length; i++) {
    sum += Number(nums[i]);
}
console.log(sum);
