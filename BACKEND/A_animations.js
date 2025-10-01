// ===== Update footer year =====
document.querySelectorAll("#year").forEach(el=>{
  el.textContent = new Date().getFullYear();
});

// ===== Scroll reveal =====
function handleScroll(){
  document.querySelectorAll('.reveal, .fade-soft, .service-list li').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight * 0.85){
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// ===== Banner Slider Animation =====
const track = document.querySelector('.banner-track');
const banners = document.querySelectorAll('.banner');
let currentIndex = 0;
const totalBanners = banners.length;
function slideBanners() {
  currentIndex = (currentIndex + 1) % totalBanners;
  const offset = -(100 / totalBanners) * currentIndex; // in %
  track.style.transition = "transform 1s ease-in-out";
  track.style.transform = `translateX(${offset}%)`;
}
// Slide every 4 seconds
setInterval(slideBanners, 4000);