require(["config"], function() {
    require(["jquery", "template"], function($, template) {
        $.getJSON("/mock/list.json", function(data) {
            console.log(data);
            var html = template("main-goods", { list: data });
            $(html).appendTo(".main-goods");
        });
    });
})
require(["config"], function() {
    require(["jquery", "template"], function($, template) {
        $.getJSON("/mock/sale.json", function(data) {
            console.log(data);
            var html = template("sale-goods", { list: data });
            $(html).appendTo(".sale-goods");
        });
    });
})