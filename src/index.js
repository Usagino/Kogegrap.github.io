import Vue from 'vue';
// import magazine from './components/magazine.vue';

new Vue({
  el: "#contents",
  components: {
    // 'magazine':magazine
  },
});

let $ = require('jquery');
$(() => {
  $(".home__second").css('transform', 'translateY(100%)');
  const mouse_event_up = () => {
    $(".home__first").removeClass('afterfadeout');
    $(".home__first").addClass('afterfadein');

    $(".home__second").removeClass('fadein home__secondAnime');
    $(".home__second").addClass('fadeout');
  }
  const mouse_event_down = () =>{
    $(".home__first").removeClass('afterfadein');
    $(".home__first").addClass('afterfadeout');

    $(".home__second").addClass('fadein home__secondAnime');
    $(".home__second").removeClass('fadeout');
  }
  const mouse_event_stop = (e) => {
    console.log(e);
    let before;
    return before = e;
  }


  let scroll_count = 0;
  let mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  $(document).on(mousewheelevent, (e)=> {
    e.preventDefault();
    let delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
    if (delta > 30) {
      mouse_event_up();
      // カウントダウン
      scroll_count = scroll_count < 0 ? 0 : scroll_count -= 1;
    }else if (delta < -30) {
      mouse_event_down();
      // カウントアップ
      scroll_count += 1 ;
    }else {
      mouse_event_stop(scroll_count);
    }
  });
});
