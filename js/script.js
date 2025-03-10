const passGenBtn = document.querySelector('.passGenBtn');
const passwordShow = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');

const generatePassword = passGenBtn.addEventListener('click', () => {
    const lengthNum = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    let password = '';

    for (let i = 0; i < lengthNum; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        console.log(randomIndex, password, i);
    }

    passwordShow.textContent = password;
    passwordShow.style.border = '2px solid rgb(40, 40, 168)'; 

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

copyBtn.innerText = '📋';

copyBtn.addEventListener('click', async () => {
    if (!passwordShow.textContent) {
        alert('No password to copy!');
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordShow.textContent);
        passwordShow.style.backgroundColor = 'lightgreen';
        setTimeout(() => {
            passwordShow.style.backgroundColor = 'transparent';
        }, 2000);
        copyBtn.innerText = '✔️';

        setTimeout(() => {
            copyBtn.innerText = '📋';
        }, 2000);
    }
    catch (err) {
        console.error(`Failed to copy: ${err}`);
    }
})





// TODO:
// 1. instead of changing bgColor of whole document according to pass. strength, change the bgColor of strengthText instead.