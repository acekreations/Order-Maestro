function displayToOrder(item) {
  var tr = $("<tr>");
  var td = $("<td>").text(item);
  tr.append(td);
  $("#createOrderItems").append(tr);
}

$("#create-order").on("click", ".food-item", function(){
  var item = $(this).text();
  displayToOrder(item);
});

$("#create-order").on("click", "#addCustomItem", function(){
  var item = $("#customItemInput").val().trim();
  $("#customItemInput").val("");
  displayToOrder(item);
});
