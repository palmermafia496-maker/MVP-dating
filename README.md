# MVP-dating
# AI Dating App

A fully automated and monetized dating application built with:
- **Supabase** for database and authentication
- **Node.js / Express** backend
- **Stripe** payments for premium subscriptions
- **Bcrypt** for secure password hashing

---

## 🚀 Features
- User signup and login
- Profile creation and editing
- Swipe and match system
- Stripe subscription integration
- Automatic premium upgrades after payment

---

## 📂 Project Structure
your-repo-name/
│
├── README.md                   # Explains your project & setup instructions
│
└── backend/                    # All backend files live here
    │
    ├── index.js                # Main server file (Express + routes)
    ├── auth.js                 # Signup/Login routes with bcrypt
    ├── package.json            # Node.js dependencies
    ├── .env.example            # Template for environment variables
    │
    └── sql/                    # Folder for SQL table creation scripts
        └── setup.sql           # SQL commands to create all tables
