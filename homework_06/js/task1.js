window.onload = function() {
    let a = parseFloat(prompt('Please enter first value', 0));
    let b = parseFloat(prompt('Please enter second value', 0));
    let c = parseFloat(prompt('Please enter third value', 0));

    let p = (a + b + c) / 2;
    let square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    let pifagor = Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(a, 2) == Math.pow(c, 2) + Math.pow(a, 2);

    function dataValidation() {
        if (a > 0 && b > 0 && c > 0) {
            triangleType();
        } else {
            console.log('Incorrect data');
        }
    }
    dataValidation();

    function triangleType() {
        if (square > 0) {

            if (pifagor) {
                console.log('Type of triangle is right triangle and square is ' + square.toFixed(2));
            } else if (a == b && b == c && a == c) {
                console.log('Type of triangles is equilateral and square is ' + square.toFixed(2));
            } else if (a == b && a != c || a == c && a != b || b == c && b != a) {
                console.log('Type of triangles is isosceles and square is ' + square.toFixed(2));
            } else if (a != b != c) {
                console.log('Type of triangles is scalene and square is ' + square.toFixed(2));
            }
        } else {
            console.log('Incorrect data');
        }
    }
}