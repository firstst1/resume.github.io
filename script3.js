function toggleham(x) {
    x.classList.toggle("change");
    
    let mymenu = document.getElementById('mymenu')
    if (mymenu.className === 'btn-menu') {
        mymenu.className += 'menu-active'
    }else {
      mymenu.className = 'btn-menu';
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY >0);
});