var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>On this page:</h2>" +
    "<ul>";

var newLine, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

$("h3, h3 a").hover(function(){ // hover on table of contents links
  $(this).addClass("liHovered");
}, function(){
  $(this).removeClass("liHovered"); // when not hovered
});

$(".all-questions li a").hover(function(){ // hover on table of contents links
  $(this).addClass("liHovered2");
}, function(){
  $(this).removeClass("liHovered2"); // when not hovered
});
