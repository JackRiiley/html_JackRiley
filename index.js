// Select the necessary elements
const liElements = document.querySelectorAll('nav li');
const sectionElements = document.querySelectorAll('section');

// Hide all section elements by adding the 'hidden' class
sectionElements.forEach((section) => {
  section.classList.add('hidden');
});

// Attach click event listeners to the li elements
liElements.forEach((li, index) => {
  li.addEventListener('click', () => {
    // Remove the 'active' class from all li elements
    liElements.forEach((li) => {
      li.classList.remove('active');
    });

    // Remove the 'active' class from all section elements
    sectionElements.forEach((section) => {
      section.classList.remove('active');
      section.classList.add('hidden');
    });

    // Add the 'active' class to the clicked li element
    li.classList.add('active');

    // Remove the 'hidden' class from the corresponding section element
    sectionElements[index].classList.remove('hidden');
  });
});
  
  