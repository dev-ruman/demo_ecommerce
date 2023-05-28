// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}
var cartState = "0";
let favouriteState = "0";

document.getElementById("cart").innerHTML = cartState;
document.getElementById("favourite").innerHTML = favouriteState;

let increaseCart = function(){
  cartState = cartState++;
  document.getElementById("cart").innerHTML = cartState;
}

let increaseFavourite = function () {
  
}

$(document).ready(function () {
  $(window).scroll(function () {
      $('.heading').toggleClass("bg-white", ($(window).scrollTop() >0));
   });
});