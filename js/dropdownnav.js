$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })
  $('ul li.sub-menu').click(function(){
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')

  })
})
