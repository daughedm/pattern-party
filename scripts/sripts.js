$('.nav-container').on('click', $('#menu'), menuAppear);

function menuAppear(event) {
  event.preventDefault();
  $('.dropdown').toggleClass('show')
}