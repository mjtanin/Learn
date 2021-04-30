(() => {
    var home_page = document.querySelector('.home')
  var scroll = document.querySelectorAll('[data-element_type="section"].swi-scroll'),
      index = 0,
      wheelCount = 0;


  function scrollEvent(event) {

      wheelCount += event.deltaY

      if (wheelCount == 100 || wheelCount == -100) {
          scroll[index].style.opacity = 1;
          scroll[index].style.transform = 'scale(1)';
      } else if (wheelCount == 200 || wheelCount == -200) {
          scroll[index].style.opacity = 0.950;
          scroll[index].style.transform = 'scale(1.05451)';
      } else if (wheelCount == 300 || wheelCount == -300) {
          scroll[index].style.opacity = 0.8560;
          scroll[index].style.transform = 'scale(1.08451)';
      } else if (wheelCount == 400 || wheelCount == -400) {
          scroll[index].style.opacity = 0.56897;
          scroll[index].style.transform = 'scale(1.11451)';
      } else if (wheelCount == 500 || wheelCount == -500) {
          scroll[index].style.opacity = 0.1935;
          scroll[index].style.transform = 'scale(1.13451)';
      } else {
          scroll[index].style.opacity = 1;
          scroll[index].style.transform = 'scale(1)';
      }
      if (event) {
          for (let i = 0; i < scroll.length; i++) {
              scroll[i].style.transform = 'scale(1)';
              scroll[i].style.display = 'none'
              scroll[index].style.display = 'block'
                scroll[i].style.zIndex = scroll.length - i
          }
          if (index < scroll.length - 1 && wheelCount >= 100) {
              scroll[index + 1].style.display = 'block'
          } else if (wheelCount >= 100 && index == scroll.length - 1) {
              scroll[0].style.display = 'block'
          } else if (index > 0 && wheelCount >= -100) {
              scroll[index - 1].style.display = 'block'
          } else if (index == 0 && wheelCount >= -100) {
              scroll[scroll.length - 1].style.display = 'block'

          }
        
        if(index == 6 && (wheelCount >= -100 || wheelCount >= 0)) {
            scroll[scroll.length - 1].style.zIndex = scroll.length
            scroll[index].style.zIndex = scroll.length + 1
        }
      }


      if (wheelCount == 500) {
          index++;
          if (index == scroll.length) {
              index = 0;
          }

          wheelCount = 0;

      } else if (wheelCount == -500) {

          if (index == 0) {
              index = scroll.length - 1;
          } else {
              index--;
          }

          wheelCount = 0
      }
  }

let initialPosition = null;
let moving = false;

const gestureStart = (e) => {
  initialPosition = e.touches[0].pageY;
  moving = true;

}

const gestureMove = (e) => {
  if (moving) {

    const currentPosition = e.touches[0].pageY;
      if(initialPosition > currentPosition) {

        for(let i = 0; i < scroll.length; i++){

          scroll[i].style.display = 'none'
          scroll[index].style.animation = ''

        }

      if(e) index++
      if(index >= scroll.length) index = 0
        scroll[index].style.display = 'block'
        scroll[index].style.animation = 'scale 0.3s'
    }

    moving = false;
  }
};

const gestureEnd = (e) => {
  moving = false;
}
if(window.WheelEvent && home_page) home_page.addEventListener('wheel', scrollEvent)

if (window.TouchEvent && home_page) {

    home_page.addEventListener('touchstart', gestureStart);
    home_page.addEventListener('touchmove', gestureMove);
    home_page.addEventListener('touchend', gestureEnd);  
}

var name_list = document.querySelectorAll('[name-list-data-id]')
var all_video = document.querySelectorAll('.creatives-video')

for(let i = 0; i < all_video.length; i++){
  all_video[i].style.margin = '0'
}

name_list.forEach(item => {
  
  
  function mouseEnter(e){
    var video_id = e.target.attributes['name-list-data-id'].textContent
    var video = document.getElementById(video_id)
    
    for(let i = 0; i < all_video.length; i++){
      all_video[i].style.display = 'none'
      all_video[i].style.animation = 'scale 1s'
      name_list[i].style.textDecoration = 'none'
    }
    
    e.target.style.textDecoration = 'underline'
    video.style.animation = 'fade 0.3s'
    video.style.display = 'block'
  }
  
  item.addEventListener('mouseenter', mouseEnter)
})


})()