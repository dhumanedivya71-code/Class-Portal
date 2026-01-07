const students = [
  { username: "student1", password: "pass1" },
  { username: "student2", password: "pass2" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = students.find(
    s => s.username === username && s.password === password
  );

  if (user) {
    window.location.href = "courses.html";
  } else {
    document.getElementById("login-msg").innerText = "Invalid credentials!";
  }
}