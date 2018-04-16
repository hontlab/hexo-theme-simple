/**
 * Main JS file
 */

/* progress-bar */
(function ($) {
  'use strict'

  function randomColor () {
    var colors = [
      '#330033', '#003366',
      '#003399', '#000033', '#333300', '#990033',
      '#660033', '#089378', '#0898b3', '#1A5276', '#ffca00', '#ff9900',
      '#6db33f'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function initProgress ($h1) {
    var threshold = $h1.offset().top + $h1.height() - $('nav').height()
    var $postContent = $('.post-main-content')
    var ph = $postContent.height()       // post height
    var wh = $(window).height()          // window height
    //var color = randomColor()
    var color = '#6db33f';
    //var color = '#089378';

    $(document).scroll(function () {
      if (!$postContent.length) return

      var offsetTop = $postContent.offset().top
      var y = $(document).scrollTop()
      var base = Math.max(5, offsetTop + ph - wh)
      var progress = Math.min(100, y / base * 100)

      $('#bar').css({
        'width': progress + '%',
        'background-color': color
      })

      if (y <= threshold) {
        $('#progress').height('8px')
      } else {
        $('#progress').height('36px')
      }
    })
  }

  function initShortcut () {
    $(document).on('keydown', function (e) {
      if (e.keyCode === 74 /* j */ || (e.ctrlKey && e.keyCode === 78 /* C-n */)) {
        window.scrollBy(0, 100)
      } else if (e.keyCode === 75 /* k */ || (e.ctrlKey && e.keyCode === 80 /* C-p */)) {
        window.scrollBy(0, -100)
      }
    })
  }

  initShortcut()

  var $h1 = $('h1')
  if ($h1.length) {
    initProgress($h1)
  }

  $('[data-toggle=collapse]').on('click', function (e) {
    var target = $(this).attr('data-target')
    $(target).toggleClass('collapsed')
  })

  function minHeight () {
    var wh = $(window).height()
    var hh = $('header').height()
    var fh = $('footer').outerHeight(true)
    var minHeight = wh - hh - fh - 20 // 20 for adjustment
    return minHeight + 'px'
  }

  $('article').css('min-height', minHeight())
}(jQuery))

/* external-link */
$('.post-main-content a[target="_blank"]').append('<i class="fa fa-external-link" aria-hidden="true"></i>');

/* book-image */
$('.post-main-content img').parent().css('text-align', 'center');


