// Dynamic Landing Page | JavaScript
// https://www.youtube.com/watch?v=fSTQzlprGLI&t=1681s

//DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
  
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';
  
  // 12hr Format
  hour = hour % 12 || 12;
  
  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  
  setTimeout(showTime, 1000);
  
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Backgroud and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  
  if(hour < 12) {
    document.body.style.backgroundImage = "url('https://i.ibb.co/W2rstXL/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if(hour < 18) {
    document.body.style.backgroundImage = "url('https://i.ibb.co/YpVJK0L/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {  
    document.body.style.backgroundImage = "url('https://i.ibb.co/nBHMVpy/night.jpg')";
    greeting.textContent = 'Good Everning';
    document.body.style.color = 'white';
  }
}

// Get name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set name
function setName(e) {
  if(e.type === 'keypress') {
     // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if(e.type === 'keypress') {
     // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



// Run
showTime();
setBgGreet();
getName();
getFocus();
