
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordTooltip = document.getElementById('passwordTooltip');

    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(password)) {
        passwordTooltip.textContent = "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
        passwordTooltip.classList.remove('hidden');
        return;
      }

      if (password !== confirmPassword) {
        passwordTooltip.textContent = "Passwords do not match!";
        passwordTooltip.classList.remove('hidden');
        return;
      }

      passwordTooltip.classList.add('hidden');
      console.log('Sign up data:', { name, email, password });

      alert('Registration successful!');
      signupForm.reset();
    });

    confirmPasswordInput.addEventListener('input', function() {
      if (passwordInput.value === confirmPasswordInput.value) {
        passwordTooltip.classList.add('hidden');
      }
    });

    passwordInput.addEventListener('input', function() {
      if (passwordTooltip.textContent === "Passwords do not match!") {
        passwordTooltip.classList.add('hidden');
      }
    });