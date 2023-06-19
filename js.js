window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("abajo",window.scrollY>0)    
})


window.addEventListener('DOMContentLoaded', function() {
  
  if (window.innerWidth < 512) {
      return; // Sale de la función si el tamaño de la pantalla es inferior a 1050px
  }

  
  var myText = document.getElementById('myText');
  myText.classList.add('typing-animation');
  
  myText.addEventListener('animationend', function() {
      myText.classList.remove('typing-animation');
      setTimeout(function() {
          myText.classList.add('typing-animation');
      }, 2000); // Espera 2 segundos antes de reiniciar la animación
  });
});


function scrollFunction() {
    const myButton = document.getElementById('my-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = 'block';
    } else {
      myButton.style.display = 'none';
    }
  }
  
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.addEventListener('scroll', scrollFunction);
  


  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(progressBar => {
      const targetWidth = parseFloat(progressBar.style.width);

      let width = 0;
      let id = setInterval(frame, 40);

      function frame() {
        if (width >= targetWidth) {
          clearInterval(id);
        } else {
          width++;
          progressBar.style.width = width + '%';
        }
      }
    });
  }

  // Observador de intersección para activar la animación cuando los elementos son visibles
  const progressBarsContainer = document.querySelector('.container');
  const progressBarsObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target); // Dejar de observar una vez que los elementos son visibles
      }
    });
  });

  // Agregar el contenedor de las barras de progreso al observador
  progressBarsObserver.observe(progressBarsContainer);



