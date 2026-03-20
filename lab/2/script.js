console.log("=== 3.1 ===");

let a = 2, b = 3, c, d;

c = ++a;
console.log("c = ++a:", c);

d = b++;
console.log("d = b++:", d);

c = (2 + ++a);
console.log("c = 2 + ++a:", c);

d = (2 + b++);
console.log("d = 2 + b++:", d);

console.log("a:", a);
console.log("b:", b);


console.log("=== 3.2 ===");

let a2 = 2;
let x = 1 + (a2 *= 2);
console.log("x:", x);


console.log("=== 3.3 ===");

console.log("null || 2 || undefined:", null || 2 || undefined);

console.log("alert(1) || 2 || alert(3):");
console.log( (function(){
    alert(1);
    return undefined;
})() || 2 || (function(){
    alert(3);
})() );

console.log("1 && null && 2:", 1 && null && 2);

console.log("alert(1) && alert(2):");
console.log( (function(){
    alert(1);
    return undefined;
})() && (function(){
    alert(2);
})() );

console.log("null || 2 && 3 || 4:", null || 2 && 3 || 4);

if (-1 || 0) console.log("first");
if (-1 && 0) console.log("second");
if (null || -1 && 1) console.log("third");


console.log("=== 3.4 ===");

console.log('"" + 1 + 0 =', "" + 1 + 0);
console.log('"" - 1 + 0 =', "" - 1 + 0);
console.log('true + false =', true + false);
console.log('6 / "3" =', 6 / "3");
console.log('"2" * "3" =', "2" * "3");
console.log('4 + 5 + "px" =', 4 + 5 + "px");
console.log('"$" + 4 + 5 =', "$" + 4 + 5);
console.log('"4" - 2 =', "4" - 2);
console.log('"4px" - 2 =', "4px" - 2);
console.log('7 / 0 =', 7 / 0);
console.log('" -9\\n" + 5 =', " -9\n" + 5);
console.log('" -9\\n" - 5 =', " -9\n" - 5);
console.log('5 && 2 =', 5 && 2);
console.log('2 && 5 =', 2 && 5);
console.log('5 || 0 =', 5 || 0);
console.log('0 || 5 =', 0 || 5);
console.log('null + 1 =', null + 1);
console.log('undefined + 1 =', undefined + 1);
console.log('null == "\\n0\\n" =', null == "\n0\n");
console.log('+null == +"\\n0\\n" =', +null == +"\n0\n");
