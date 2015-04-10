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
};

$(document).ready(function() {
    $("form#triangle_input").submit(function(event) {
        var user_side_a = $("input#side_a").val();
        var user_side_b = $("input#side_b").val();
        var user_side_c = $("input#side_c").val();
        var user_triangle_type = triangle(user_side_a, user_side_b, user_side_c);

        $("#result").show();
        $(".side_a").text(user_side_a);
        $(".side_b").text(user_side_b);
        $(".side_c").text(user_side_c);

        if (user_triangle_type === "scalene"){
            $(".an_display").text("");
        }
        else {
            $(".an_display").text("n");
        }

        $("#triangle_type").text(user_triangle_type);

        event.preventDefault();
    });
});
