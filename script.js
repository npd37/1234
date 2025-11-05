document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for nav links and button
  function smoothScrollTo(selector){
    const el = document.querySelector(selector);
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const offsetTop = window.pageYOffset + rect.top - 70; // header offset
    window.scrollTo({top: offsetTop, behavior: 'smooth'});
  }

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScrollTo(target);
    });
  });

  document.getElementById('bookBtn').addEventListener('click', function(){
    smoothScrollTo('#contact');
  });
});