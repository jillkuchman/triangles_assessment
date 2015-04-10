function triangle(side_a, side_b, side_c) {
    var type_of_triangle;

    var side_lengths = [side_a, side_b, side_c];

    var sorted = side_lengths.sort();
    console.log(sorted);

    if(parseInt(sorted[0]) + parseInt(sorted[1]) > parseInt(sorted[2])) {
        if  ( (parseInt(sorted[0]) === parseInt(sorted[1])) && (parseInt(sorted[0]) === parseInt(sorted[2])) ) {
            type_of_triangle = "equilateral";
        }
        else if (
            ((parseInt(sorted[0]) === parseInt(sorted[1])) && (parseInt(sorted[0]) !== parseInt(sorted[2])))
            ||
            ((parseInt(sorted[1]) === parseInt(sorted[2])) && (parseInt(sorted[0]) !== parseInt(sorted[2])))
        ) {
            type_of_triangle = "isoceles";
        }
        else {
            type_of_triangle = "scalene";
        }
    }
    else {
        type_of_triangle = "invalid";
    }

    return type_of_triangle;
};

$(document).ready(function() {
    $("form#triangle_input").submit(function(event) {
        var user_side_a = parseInt($("input#side_a").val());
        var user_side_b = parseInt($("input#side_b").val());
        var user_side_c = parseInt($("input#side_c").val());

        var result = triangle(user_side_a, user_side_b, user_side_c);

        $("#result").show();
        $(".side_a").text(user_side_a);
        $(".side_b").text(user_side_b);
        $(".side_c").text(user_side_c);
        $("#triangle_type").text(result);


        if (result === "scalene"){
            $(".an_display").text("");
        }
        else {
            $(".an_display").text("n");
        }


        event.preventDefault();
    });
});
