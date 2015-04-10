function triangle(side_a, side_b, side_c) {
    var type_of_triangle;

    if((side_a + side_b > side_c) && (side_a + side_c > side_b) && (side_b + side_c > side_a)){
        if((side_a === side_b) && (side_a === side_c)) {
            type_of_triangle = "equilateral";
        }
        else if ((side_a === side_b) && (side_a !== side_c)) {
            type_of_triangle = "scalene";
        }
        else if ((side_a === side_c) && (side_a !== side_b)) {
            type_of_triangle = "scalene";
        }
        else if ((side_b === side_c) && (side_a !== side_c)) {
            type_of_triangle = "scalene";
        }
        else {
            type_of_triangle = "isoceles";
        }
    }
    else {
        type_of_triangle = "invalid";
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
