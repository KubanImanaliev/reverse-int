 function reverse (n) {
     n=n<0?n*-1:n;
return +n.toString().split("").reverse().join("");
}
reverse(456789);

module.exports = reverse;
