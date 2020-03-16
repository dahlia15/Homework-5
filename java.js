$("#time-block").on("click", function () {
    $(".editable").each(function () {
        //Reference the Label.
        var label = $("#time-block");
 
        //Add a TextBox next to the Label.
        label.after("<input type = 'text' style = 'display:none' />");
 
        //Reference the TextBox.
        var event = $(this).next();
 
        //Set the name attribute of the TextBox.
        var id = this.id.split('_')[this.id.split('_').length - 1];
        event[0].name = id.replace("lbl", "txt");
 
        //Assign the value of Label to TextBox.
        event.val(label.html());
 
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show();
        });

    });
});






