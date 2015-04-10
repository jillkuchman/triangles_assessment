function triangle(side_a, side_b, side_c) {
    var type_of_triangle;
    console.log("side a: " + side_a);
    console.log("side b: " + side_b);
    console.log("side c: " + side_c);

    if((side_a === side_b) && (side_a === side_c)) {
        type_of_triangle = "equilateral";
    }
    else {
        type_of_triangle = "scalene"
    }

    return type_of_triangle;
}




//input: the lengths of the sides of a triangle
//output: whether they form an equilateral, isoceles, or scalene triangle
//equilateral: a === b === c
//isoceles: (a === b && !(b === c)) || (a === c && !(a === b))
//scalene: a !== b !== c
//they have to make a valid triangle!!
//triangle inequality theorem: a+b>c, a+c>b, b+c>a
