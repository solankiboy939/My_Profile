// let lastScrollTop = 0;
// const navbar = document.querySelector('nav');

// window.addEventListener('scroll', () => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     // Scroll down
//     navbar.style.top = '-70px'; // Adjust this value based on your navbar height
//   } else {
//     // Scroll up
//     navbar.style.top = '0';
//   }

//   lastScrollTop = scrollTop;
// });


// action menu


function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = '-70px'; // Adjust this value based on your navbar height
  } else {
    // Scroll up
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});
