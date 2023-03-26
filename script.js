function showCarousel() {
    var i = 2;
    setInterval(() => {
      let elementToHide = null;
      if (i === 1) {
        elementToHide = document.getElementById('item5');
      } else {
        elementToHide = document.getElementById('item' + (i - 1));
      }
      const element = document.getElementById('item' + i);
  
      element.className = 'carousel-item slide-in';
      elementToHide.className = 'carousel-item slide-out';
  
      if (i === 5) i = 0;
      i++;
    }, 2100);
  }
  
  // 1 4
  // 2 1
  // 3 2
  // 4 3
  