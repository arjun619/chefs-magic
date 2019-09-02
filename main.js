function onLoad(){
  $('.item').addClass("shadow p-3 mb-5 bg-white rounded");
  $('.item').hover(function (){
    $(this).toggleClass("shadow p-3 mb-5 bg-white rounded");
    $(this).toggleClass("shadow-lg p-3 mb-5 bg-white rounded");
  });
}
