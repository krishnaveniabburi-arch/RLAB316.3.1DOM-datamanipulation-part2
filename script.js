// selecting main Element --part1--

var menuLinks = [

  { text: 'about', href: '/about' },

  { text: 'catalog', href: '/catalog' },

  { text: 'orders', href: '/orders' },

  { text: 'account', href: '/account' },
];

//--Part--1
const mainEL = document.querySelector("main");

//setting background color using the css

mainEL.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>

mainEL.innerHTML = '<h1>DOM Manipulation</h1>';

// adding class
mainEL.classList.add("flex-ctr");

// --part--2
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl

const topMenuEL = document.querySelector("#top-menu");
const subMenuEL = document.querySelector("#sub-menu");

// Set the height of the topMenuEl element to be 100%

topMenuEL.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property

topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
subMenuEL.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element
// 

topMenuEL.classList.add("flex-around");
subMenuEL.classList.add('flex-around');

// Set the CSS position property of subMenuEl to the value of absolute
subMenuEL.style.position = 'absolute';

// Set the CSS top property of subMenuEl to the value of 0
subMenuEL.style.top = '0';



// part--4 Adding menu interaction (buttons)
var menuLinks = [

  { text: 'about', href: '/about' },

  {
    text: 'catalog', href: '#', subLinks: [

      { text: 'all', href: '/catalog/all' },

      { text: 'top selling', href: '/catalog/top' },

      { text: 'search', href: '/catalog/search' },

    ]
  },

  {
    text: 'orders', href: '#', subLinks: [

      { text: 'new', href: '/orders/new' },

      { text: 'pending', href: '/orders/pending' },

      { text: 'history', href: '/orders/history' },


    ]
  },
  {
    text: 'account', href: '#', subLinks: [

      { text: 'profile', href: '/account/profile' },

      { text: 'sign out', href: '/account/signout' },

    ]
  },

];

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// loop through each object in the menu links array

const topMenuLinks = topMenuEL.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl

topMenuEL.addEventListener('click', function (event) {
  // The first line of code of the event listener function should call the event object's preventDefault() method

  event.preventDefault();

  // The second line of code of the function should immediately return if the element clicked was not an <a> element

  if (event.target.tagName !== 'a')
  return;

  // Log the content of the <a> to verify the handler is working

  console.log(event.target.textContent);

  // Adding toggled "active" state to each menu item, showing whether or not it is currently selected
  // check if the clicked element already has the active class

  const isActive = clickedLink.classList.contains('active');

  // removing active class from all other links
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // toggle active class on the clicked element
  if (!isActive) {
    event.target.classList.add('active');
  }

});

//--Adding submenu interaction --Part 5--

// creating helper function called buildsubmenu

function buildsubmenu(subLinks) {

  // clear the current contents of submenuEL

  subMenuEL.innerHTML = '';

  // Iterate over the sublinks array

  subLinks.forEach(link => {

    // createing anchor  <a> element

    const newLink = document.createElement('a');

    // Adding href attribute

    newLink.setAttribute('href', link.href);

    // Set the new element's content to the value of the text property of the "link" object

    newLink.textContent = link.text;

    // Append the new element to the subMenuEl element

    subMenuEL.appendChild(newLink);
  });
}

// 1.Attach a delegated 'click' event listener to subMenuEl

subMenuEL.addEventListener('click', function (event) {

  // The first line of code of the event listener function should call the event object's preventDefault() method

  event.preventDefault();

  // check the clicked element is an <a> tag other wise return

  if (event.target.tagName !== 'a')
    return;
  // Log the content of the <a> to verify the handler is working

  console.log(event.target.textContent);

  // 2. the event listener should set the CSS top property of subMenuEl to 0
  // settiong top property back to 0   
  subMenuEL.style.top = 0;

  // 3.Remove the active class from each <a> element in topMenuLinks  

  topMenuLinks.forEach(link => link.classList.remove('active'));

  // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl

  mainEL.innerHTML = '<h1>${ event.target.textcontent}<h1>';

});