fetch("http://localhost:4567").then(function(response) {
  console.log(response.ok);
  if(response.ok) {
    return response.json();
  } else {
    console.log('oh noes!')
  }
}).then(function(data) {
  var products = data;
  var source = document.getElementById("template").innerHTML;
  var template = Handlebars.compile(source);
  document.getElementById("products").innerHTML = template({products: products});
}).then(function() {
  var elem = document.querySelector(".grid");
  var msnry = new Masonry( elem, {
    itemSelector: ".grid-item",
    gutter: 10,
    columnWidth: 200
  });
});
