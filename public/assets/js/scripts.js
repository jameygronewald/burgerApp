$(() => {
    $("#submitButton").on("click", event => {
      event.preventDefault();
      const newBurger = {
        name: $("#burgerInput").val().trim(),
        devoured: false
      };
      console.log(newBurger);
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
          location.reload();
        });
    });

    $(".devourButton").on("click", function(event) {
        const id = $(this).data("id");
        const isDevoured = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
        }).then(() => {
            location.reload();
        });
    });
});
