require(["config"], function() {
    require(["jquery", "template"], function($, template) {
        $.getJSON("/mock/list.json", function(data) {
            console.log(data);
            var html = template("main-goods", { list: data });
            $(html).appendTo(".main-goods");
        });
    });
})