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
});