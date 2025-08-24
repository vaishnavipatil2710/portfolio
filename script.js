// Sections fade-in on scroll
const sections = document.querySelectorAll('section');
const skills = document.querySelectorAll('.progress');

function revealSections() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

// Animate skill bars
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(sectionTop < windowHeight - 100) {
    skills.forEach(skill => {
      const width = skill.getAttribute('data-width');
      skill.style.width = width;
    });
  }
}

window.addEventListener('scroll', () => {
  revealSections();
  animateSkills();
});

// Initial call
revealSections();
animateSkills();




