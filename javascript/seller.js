// script.js

function showOTPForm() {
    document.getElementById('otpForm').style.display = 'block';
    document.getElementById('passwordForm').style.display = 'none';
    document.getElementById('otpBtn').classList.add('active');
    document.getElementById('passwordBtn').classList.remove('active');
}

function showPasswordForm() {
    document.getElementById('otpForm').style.display = 'none';
    document.getElementById('passwordForm').style.display = 'block';
    document.getElementById('otpBtn').classList.remove('active');
    document.getElementById('passwordBtn').classList.add('active');
}

// Show the OTP form by default
showOTPForm();