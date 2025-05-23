// Set login state and username
function authLogin(username) {
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('username', username);
}

// Clear login state
function authLogout() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
}

// Check if user is logged in
function authIsLoggedIn() {
  return localStorage.getItem('loggedIn') === 'true';
}

// Get current username
function authGetUsername() {
  return localStorage.getItem('username') || '';
}
