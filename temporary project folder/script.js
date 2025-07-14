document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");
  const loginBtn = loginForm.querySelector("button");

  const captchaContainer = document.getElementById("captcha-container");
  const captchaCodeEl = document.getElementById("captcha-code");
  const captchaInput = document.getElementById("captcha-input");
  const verifyCaptchaBtn = document.getElementById("verify-captcha-btn");
  const captchaMessage = document.getElementById("captcha-message");

  const twofaContainer = document.getElementById("twofa-container");
  const twofaInput = document.getElementById("twofa-input");
  const verify2FABtn = document.getElementById("verify-2fa-btn");
  const twofaMessage = document.getElementById("twofa-message");

  const strengthText = document.getElementById("strength-text");
  const strengthBar = document.getElementById("strength-bar");
  const passwordInput = document.getElementById("password");

  const scoreboard = document.getElementById("attack-scoreboard");

  const startBruteBtn = document.getElementById("start-brute-btn");
  const bruteResult = document.getElementById("brute-result");

  // Clean session for testing
  localStorage.removeItem("attempts");
  localStorage.removeItem("isLocked");

  let attempts = 0;
  let isLocked = false;

  loginMessage.style.display = "none";
  loginBtn.disabled = false;

  // === PASSWORD STRENGTH ===
  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);

    strengthText.textContent = strength.label;
    strengthText.style.color = strength.color;
    strengthBar.style.width = strength.percent + "%";
    strengthBar.style.backgroundColor = strength.color;

    document.getElementById("length-stat").textContent = `Length: ${password.length}`;
    document.getElementById("uppercase-stat").textContent = `Uppercase letters: ${(password.match(/[A-Z]/g) || []).length}`;
    document.getElementById("digits-stat").textContent = `Digits: ${(password.match(/[0-9]/g) || []).length}`;
    document.getElementById("symbols-stat").textContent = `Symbols: ${(password.match(/[^A-Za-z0-9]/g) || []).length}`;

    updateAttackResistance(password);
  });

  function getPasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    switch (score) {
      case 0:
      case 1: return { label: "Weak", color: "red", percent: 25 };
      case 2: return { label: "Fair", color: "orange", percent: 50 };
      case 3: return { label: "Good", color: "blue", percent: 75 };
      case 4: return { label: "Strong", color: "green", percent: 100 };
    }
  }

  function estimateEntropy(password) {
    const length = password.length;
    let pool = 0;
    if (/[a-z]/.test(password)) pool += 26;
    if (/[A-Z]/.test(password)) pool += 26;
    if (/\d/.test(password)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(password)) pool += 33;
    return length * Math.log2(pool || 1);
  }

  function updateAttackResistance(password) {
    if (!scoreboard) return;
    scoreboard.innerHTML = "";

    const descriptionMap = {
      brute: "Tries every possible character combination.",
      dict: "Uses a list of common or leaked passwords.",
      phishing: "Tricks you into entering your password on a fake page.",
      spray: "Tries a few common passwords across many accounts.",
      hash: "Cracks hashed passwords using CPU/GPU brute force.",
      rainbow: "Uses precomputed hash tables unless the hash is salted."
    };

    const entropy = estimateEntropy(password);
    const commonPasswords = ['123456', 'password', 'qwerty', 'admin', 'letmein'];

    const entries = [
      { name: "Brute Force", status: entropy > 70 ? '✅ Strong' : '❌ Weak', desc: descriptionMap.brute },
      { name: "Dictionary Attack", status: commonPasswords.includes(password.toLowerCase()) ? '❌ Weak' : '✅ Strong', desc: descriptionMap.dict },
      { name: "Phishing", status: '⚠️ Medium', desc: descriptionMap.phishing },
      { name: "Password Spraying", status: password.length >= 12 ? '✅ Strong' : '❌ Weak', desc: descriptionMap.spray },
      { name: "Hash Cracking", status: entropy > 60 ? '✅ Strong' : '❌ Weak', desc: descriptionMap.hash },
      { name: "Rainbow Table", status: '✅ Safe if Salted', desc: descriptionMap.rainbow }
    ];

    entries.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.name}</strong> – ${item.status}<br><em>${item.desc}</em>`;
      scoreboard.appendChild(li);
    });
  }

  // === LOGIN HANDLING ===
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isLocked) return;

    const username = document.getElementById("username").value;
    const password = document.getElementById("login-password").value;

    if (username === "admin" && password === "Admin@123") {
      loginMessage.style.display = "block";
      loginMessage.style.color = "green";
      loginMessage.textContent = "✅ Login successful. Proceed to 2FA.";
      show2FA();
      attempts = 0;
    } else {
      attempts++;
      loginMessage.style.display = "block";
      loginMessage.style.color = "red";
      loginMessage.textContent = `❌ Invalid login. Attempt ${attempts} of 3`;

      if (attempts >= 3) {
        isLocked = true;
        loginBtn.disabled = true;
        loginMessage.innerHTML = `
          🚫 Too many attempts.<br>
          <a href="trap.html" style="color:red; font-weight:bold">
            Click here to try a recovery link
          </a>
        `;
      }
    }
  });

  // === CAPTCHA ===
  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  function showCaptcha() {
    const captchaCode = generateCaptcha();
    captchaCodeEl.textContent = captchaCode;
    captchaInput.value = "";
    captchaMessage.textContent = "";
    captchaContainer.style.display = "block";
  }

  verifyCaptchaBtn.addEventListener("click", () => {
    const input = captchaInput.value.trim().toUpperCase();
    const actual = captchaCodeEl.textContent;

    if (input === actual) {
      captchaMessage.textContent = "✅ CAPTCHA passed. Try again.";
      captchaMessage.style.color = "green";
      loginBtn.disabled = false;
      captchaContainer.style.display = "none";
      attempts = 0;
      isLocked = false;
    } else {
      captchaMessage.textContent = "❌ Incorrect code.";
      captchaMessage.style.color = "red";
    }
  });

  // === 2FA ===
  function show2FA() {
    loginForm.querySelector("button").disabled = true;
    twofaContainer.style.display = "block";
  }

  verify2FABtn.addEventListener("click", () => {
    const code = twofaInput.value.trim();
    if (code === "123456") {
      twofaMessage.textContent = "✅ 2FA verified. You're logged in!";
      twofaMessage.style.color = "green";
    } else {
      twofaMessage.textContent = "❌ Incorrect 2FA code.";
      twofaMessage.style.color = "red";
    }
  });

  // === BRUTE FORCE DEMO ===
  const passwordList = ["1234", "password", "qwerty", "letmein", "admin", "Admin@123"];

  startBruteBtn.addEventListener("click", () => {
    bruteResult.textContent = "🔍 Running brute-force...";
    let found = false;

    for (let i = 0; i < passwordList.length; i++) {
      const guess = passwordList[i];
      if (guess === "Admin@123") {
        found = true;
        setTimeout(() => {
          bruteResult.textContent = `✅ Password found: "${guess}" (attempt #${i + 1})`;
        }, 800);
        break;
      }
    }

    if (!found) {
      bruteResult.textContent = "❌ Password not found in list.";
    }
  });
});
