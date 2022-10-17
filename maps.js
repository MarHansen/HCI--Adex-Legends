const carouselImages = document.querySelector('.slider');
const kiri = document.querySelectorAll('.kiri');
const kanan = document.querySelectorAll('.kanan');
const numberOfImages = document.querySelectorAll('.slide').length;
let translateX = 0;

kanan.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'prev') {
        translateX += 500;
      }
     else {
        translateX -= 1000;
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

kiri.forEach(button => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'prev') {
          translateX -= 500;
        }
       else {
          translateX += 1000;
      }
      
      carouselImages.style.transform = `translateX(${translateX}px)`;
    });
  });