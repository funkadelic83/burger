$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devourThis = $(this).data("devourThis");

        var devourState ={
            devour: devourThis
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function() {
                console.log("This burger has been devoured!", devourThis);
                location.reload();
            }
        );
    });  
});

$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("Submit button works");
    var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Created a new burger");
            location.reload();
        }
    );
    
});