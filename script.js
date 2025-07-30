// 🌙 Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.getElementById('main-body');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// 📬 Handle Contact Form Submission
const form = document.getElementById('contact-form');
const submitMsg = document.getElementById('submit-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    submitMsg.textContent = 'Please fill all fields.';
    return;
  }

  const timeStamp = new Date().toLocaleString();
  const userResponse = { name, email, message, timeStamp };

  // Save to localStorage
  const responses = JSON.parse(localStorage.getItem('userResponses') || '[]');
  responses.push(userResponse);
  localStorage.setItem('userResponses', JSON.stringify(responses));

  submitMsg.textContent = 'Message sent successfully!';
  form.reset();
});

// 🔐 Admin Login
function checkLogin() {
  const password = document.getElementById('admin-pass').value;
  if (password === 'dev@321') {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('response-box').style.display = 'block';
    showResponses();
  } else {
    alert('Incorrect password.');
  }
}

// 📄 Display Stored Responses
function showResponses() {
  const responses = JSON.parse(localStorage.getItem('userResponses') || '[]');
  const responseList = document.getElementById('response-list');
  responseList.innerHTML = '';

  if (responses.length === 0) {
    responseList.innerHTML = '<li>No responses yet.</li>';
    return;
  }

  responses.reverse().forEach((res) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 0 10px rgba(0,255,255,0.2);">
        <strong>${res.name}</strong> <small style="color:#ccc;">(${res.email})</small>
        <p>${res.message}</p>
        <em style="font-size: 0.8em;">${res.timeStamp}</em>
      </div>
    `;
    responseList.appendChild(li);
  });
}

// ✨ Scroll Reveal Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach((section) => {
  observer.observe(section);
});
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

