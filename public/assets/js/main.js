//Put order item into a table
function displayToOrder(item) {
  var tr = $("<tr>");
  var td = $("<td>").text(item);
  td.attr("data-item", item);
  tr.append(td);
  $("#createOrderItems").append(tr);
}

//put items into the order container
$("#create-order").on("click", ".food-item", function(){
  var item = $(this).text();
  displayToOrder(item);
});

//put custom item into the order container
$("#customItem").on("click", "#addCustomItem", function(){
  var item = $("#customItemInput").val().trim();
  $("#customItemInput").val("");
  displayToOrder(item);
});

//query api to place the order
$("#placeOrder").on("click", function(){
  var userId = localStorage.getItem("user_id");
  var items = [];

  var tdata = $("#createOrderItems tr td");

  for (var i = 0; i < tdata.length; i++) {
    items.push(tdata[i].getAttribute("data-item"));
  }

  var placeOrder = {
    userId: userId,
    items: JSON.stringify(items)
  };

  $.post("/api/place", placeOrder, function(){
    $("#createOrderItems").empty();
    getOutstanding();
  });
});

//mark order as complete and remove it from outstanding order list
$(".completeOrder").on("click", function(){
  var id = $(this).attr("data-orderId");
  $.post("/api/complete", {id: id}, function(res){
    $("#" + id).remove();
  });
});

//display outstanding order count on on side menu
function getOutstanding() {
  $.get("/api/outstanding/" + localStorage.getItem("user_id"), function(res){
    $("#outstandingBadge").text(res.length);
  });
}

$(function(){

  getOutstanding();

  if (!localStorage.getItem("user_id")) {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 25; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    localStorage.setItem("user_id", id);
  }

  var newOutstandingLink = "/outstanding/" + localStorage.getItem("user_id");
  $("#outstanding-link").attr("href", newOutstandingLink);

  var newCompletedLink = "/completed/" + localStorage.getItem("user_id");
  $("#completed-link").attr("href", newCompletedLink);

});
