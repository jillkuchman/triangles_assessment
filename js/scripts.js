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
