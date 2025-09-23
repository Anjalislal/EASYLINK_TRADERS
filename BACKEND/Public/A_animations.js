// Update footer year
document.querySelectorAll("#year").forEach(el=>{
  el.textContent = new Date().getFullYear();
});

// Scroll reveal
function handleScroll(){
  document.querySelectorAll('.reveal, .fade-soft, .service-list li').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight * 0.85){
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
