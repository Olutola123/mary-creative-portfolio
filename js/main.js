document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', () => {
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? 'none' : 'flex';
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); if(nav.style.display === 'flex') nav.style.display = 'none'; }
  })
});
