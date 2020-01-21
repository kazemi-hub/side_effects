$(function () {
    let btns = $('.button');
    btns.click(function(e){

    btns.removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.grid').isotope({
      filter:selector
    });
    return false;
  });
    $('#btn1').trigger('click');
    $('.test-popup-link').magnificPopup({
      type:'image',
      gallery:{enabled:true}
    })




});