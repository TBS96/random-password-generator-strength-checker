const passGenBtn = document.querySelector('.passGenBtn');

const generatePassword = passGenBtn.addEventListener('click', () => {
    const lengthNum = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    let password = '';

    for (let i = 0; i < lengthNum; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        console.log(randomIndex, password, i);
    }

    const passwordShow = document.getElementById('password');
    passwordShow.textContent = password;

    checkStrength(password);
});

const checkStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) {
        strength++;
    }
    if(/[A-Z]/.test(password)) {
        strength++;
    }
    if(/[0-9]/.test(password)) {
        strength++;
    }
    if(/[!@#$%^&*()]/.test(password)) {
        strength++;
    }
    
    const strengthText = ['Weak', 'Fair', 'Good', 'Strong'] [strength - 1] || 'Weak';
    document.getElementById('strength').textContent = `Strength: ${strengthText}`;

    changeBgColor(strength);

    console.log(password, strength, strengthText);
};

const changeBgColor = (strength) => {
    const bgColors = ['#ff4d4d', '#ffa500', '#4682b4', '#32cd32'];
    document.body.style.backgroundColor = bgColors[strength - 1] || '#ffd4d4';
};






// TODO:
// 1. instead of changing bgColor of whole document according to pass. strength, change the bgColor of strengthText instead.
// 2. give border for password.
// 3. create a btn to copy password using copy icon and tick icon beside password. when the btn is clicked, it should change the icon. (using toggle system)