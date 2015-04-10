function triangle(side_a, side_b, side_c) {
    return "equilateral";
}




//input: the lengths of the sides of a triangle
//output: whether they form an equilateral, isoceles, or scalene triangle
//equilateral: a === b === c
//isoceles: (a === b && !(b === c)) || (a === c && !(a === b))
//scalene: a !== b !== c
//they have to make a valid triangle!!
//triangle inequality theorem: a+b>c, a+c>b, b+c>a
