require(["config"], function() {
    require(["jquery", "template"], function($, template) {
        $.getJSON("/mock/lists.json", function(data) {
            console.log(data);
            var html = template("list-goods", { list: data });
            $(html).appendTo(".list-body");
        });
    });
})