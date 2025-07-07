# 🔐 Password Strength & Login Security Demo

This project is a front-end web application that demonstrates password security concepts using HTML, CSS, and JavaScript. It allows users to test password strength, simulate login protection mechanisms, and visualize how resistant a password is against common hacking methods.

---

## 📦 Features

### 🛠 Create Account Section
- Live **password strength meter** (weak → strong)
- Displays:
  - Password length
  - Number of uppercase letters, digits, and symbols
- Dynamically updates an **Attack Resistance Scoreboard** with real-time ratings for:
  - Brute Force
  - Dictionary Attack
  - Credential Stuffing
  - Phishing
  - Password Spraying
  - Hash Cracking
  - Rainbow Table Attack
  - Keylogging

### 🔐 Login Section
- Simulates login form with validation
- **Lockout after 3 failed attempts**
- **CAPTCHA verification** shown after lockout
- **2FA simulation** triggered on successful credentials

### 🚨 Brute Force Attack Demo
- Tries a list of common passwords against a hardcoded username
- Shows how quickly weak passwords can be guessed

---

## 🧠 Technologies Used

- HTML5
- CSS3 (Responsive)
- JavaScript (Vanilla)

---

## 🧪 How to Use

1. **Clone the repo or download the files**
2. Open `index.html` in your browser
3. Explore the sections:
   - Type a password in the Create Account area
   - Try logging in with username `admin` and password `Admin@123`
   - Click “Start Brute Force Attack” to test vulnerability
4. View real-time feedback and resistance scoring

---

## 🎯 Educational Goals

This project teaches:
- What makes a password weak or strong
- Why long, complex passwords matter
- How attackers try to break passwords
- The importance of 2FA, CAPTCHA, and account lockouts

---

## 🛡️ Security Concepts Visualized

| Method              | Explained in UI              |
|---------------------|------------------------------|
| Brute Force         | Entropy-based rating         |
| Dictionary Attack   | Checks against known list    |
| Hash Cracking       | Entropy-based simulation     |
| Phishing/Keylogging | Behavior-level warnings      |

---

## 🚀 Future Improvements (Optional)
- Integrate with HaveIBeenPwned API for real breach checks
- Store hashed passwords locally with bcrypt.js
- Add dark mode toggle
- Add exportable password strength report

---

## 👨‍💻 Author

**Thon Yak**  
Cybersecurity student | BYU–Idaho  
Project built for educational demonstration and awareness.

---

## 📜 License

This project is licensed for educational and non-commercial use.
