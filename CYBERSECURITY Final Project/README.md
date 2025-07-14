# 🔐 Password Strength & Honeypot Trap Demo 

## 🎓 Final Cybersecurity Project – README

This project simulates a secure login environment with enhanced defenses and an intentional honeypot trap to demonstrate how attackers can be tracked after repeated login failures. It's designed for **educational use only** to teach ethical hacking defense strategies and login hardening techniques.

---

## 🚀 Features Overview

| Feature                          | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| ✅ Password Strength Meter       | Visual meter showing strength based on characters, digits, symbols, etc.   |
| 🧠 Attack Resistance Scoreboard | Displays how vulnerable the password is to various attack types            |
| 🚫 Login Lockout System          | After 3 failed login attempts, login is disabled                            |
| 🔐 CAPTCHA Verification          | Shown after 3 failed attempts to simulate bot protection                    |
| ✅ 2FA Simulation                | Users must enter a 6-digit code after successful credentials                |
| 🎯 Brute-Force Attack Demo       | Runs a dictionary attack simulation on a known password list               |
| 🪤 Trap Page (`trap.html`)       | Fake recovery login page to simulate attacker tracking                     |
| 📄 Trap Logs Viewer              | `trap-logs.html` displays all attacker attempts from the trap page         |

---

## 📁 Project Structure



---

## 🧪 Instructor Testing Instructions

To test the full system:

1. Open `index.html`
2. Enter incorrect credentials (anything except `admin` / `Admin@123`) **3 times**
3. Click the red **“recovery link”**
4. You'll land on `trap.html` (the honeypot)
5. Enter any fake username and password
6. A warning will appear: “⚠️ You are being tracked. Activity logged.”
7. Open `trap-logs.html` in the same browser to view the logged attempt

> 💡 **Note:** To view the trap logs, please open `trap-logs.html` after interacting with the trap page. The logs are stored in `localStorage`, so testing must be done in the **same browser session**.

---

## ✅ Default Login Credentials

- **Username:** `admin`  
- **Password:** `Admin@123`  
- This combination will trigger the **2FA simulation**.

---

## ⚠️ Disclaimer

This project is for **educational purposes only** and should **not** be used to trick or deceive real users. It is intended to demonstrate concepts in:

- Ethical hacking awareness  
- Login security practices  
- Trap-based deception and attacker tracking
