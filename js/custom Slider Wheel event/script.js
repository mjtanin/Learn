(() => {
    var scroll = document.querySelectorAll('[data-element_type="section"].swi-scroll'),
        index = 0,
        wheelCount = 0;


    window.addEventListener('wheel', scrollEvent)

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
})()