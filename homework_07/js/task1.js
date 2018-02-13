var floor = prompt('Please enter a natural number between 0 and 20 : ', '');
var arr = [];
var a = 1;
if (floor == 0 || floor > 20) {
    console.error('Incorrect!');
} else {
    for (var i = 0; i < floor; i++) {
        arr[i] = '   '.repeat(floor - i + 1) + '[~]'.repeat(i + a);
        a++;
        console.log(arr[i]);
    }
}