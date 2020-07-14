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
          console.log(`Added ${newBurger.name}!`);
          location.reload();
        });
    });

    $(".devourButton").on("click", event => {
        const burgerId = $(this).data("id");
        const isDevoured = {
        devoured: true
        };
        $.ajax("/api/burgers/" + burgerId, {
        type: "PUT",
        data: isDevoured
        }).then(() => {
            console.log("Burger has beend devoured!");
            location.reload();
        });
    });
});
