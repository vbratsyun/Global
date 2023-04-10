setTimeout(()=>{
  const elems = document.querySelectorAll('.carousel-list img');

  elems.forEach((elem, index) => {
    if(elem.classList.contains(`icon-transition${index+1}`)) {
      elem.classList.add(`icon-transition${index+1}-1`);
    }
  });
}, 2400);
