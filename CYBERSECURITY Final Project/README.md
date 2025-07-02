# Password Strength Checker + Brute Force Attack Demo

## 📌 Project Summary

This web-based cybersecurity project demonstrates the importance of secure password practices and highlights how weak passwords are vulnerable to brute-force attacks. It is designed as a teaching tool to show both offensive and defensive security concepts in an interactive, beginner-friendly way.

---

## 🔐 Features

### 1. Password Strength Checker
- Evaluates password strength in real-time.
- Displays visual feedback and a strength meter (Weak, Fair, Good, Strong).
- Analyzes:
  - Length
  - Uppercase letters
  - Digits
  - Special symbols

### 2. Login Form with Brute Force Protection
- Allows login with hardcoded credentials (`admin` / `Admin@123`).
- Tracks and displays failed login attempts.
- Locks login after 3 incorrect attempts.

### 3. CAPTCHA Simulation
- After 3 failed attempts, a CAPTCHA is shown.
- Must be completed before retrying login.

### 4. 2FA Simulation
- After successful login, user must enter a 2FA code (`123456`) to complete authentication.

### 5. Brute Force Attack Demo
- Simulates a dictionary-based brute-force attack.
- Demonstrates how quickly weak passwords can be cracked from a list.

---

## 🛠️ Technologies Used

- **HTML5** – Page structure and form layout  
- **CSS3** – Responsive styling and clean UI  
- **JavaScript (Vanilla)** – All interactivity, logic, and security features  
- **localStorage** – Persists login attempt data across refreshes  

---

## 🎓 Educational Purpose

This project was built for a final cybersecurity class assignment. It helps users understand:
- Why strong passwords are important  
- How brute-force attacks work  
- The value of CAPTCHA and 2FA  
- Basic frontend web security techniques  

---

## ✅ To Test

1. Try creating a password and watch strength and stats update.
2. Try 3 incorrect logins → CAPTCHA will appear.
3. Log in with correct credentials → Enter 2FA code `123456`.
4. Click the brute-force attack button to simulate password cracking.

---

## 🔒 Author

Created by [Your Name]  
Cybersecurity Final Project – Brigham Young University–Idaho  
