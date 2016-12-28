(function(){
  function debouncedResize(a,b){
    return window.addEventListener("resize",function(){
      clearTimeout(b),
      b = setTimeout(a,200)
    }),a
  }
  debouncedResize(function(){
    var p = document.querySelectorAll(".js-max-font");
    var i = p.length;
    while(i--){
      p[i].removeAttribute("style");
      var scrollHeight = p[i].scrollHeight;
      var fontSize = parseFloat(getComputedStyle(p[i]).fontSize);
      var maxHeight = parseFloat(getComputedStyle(p[i]).maxHeight);
      while(scrollHeight > maxHeight){    
        fontSize = parseFloat(getComputedStyle(p[i]).fontSize);
        fontSize -= 0.5;
        p[i].style.fontSize = fontSize + "px";
        scrollHeight = p[i].scrollHeight;
      } 
    }
  })();
})();
