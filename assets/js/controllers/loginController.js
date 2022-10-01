(function () {

    let loginForm = document.getElementById('loginForm');
    let wrongCredentialsError = document.getElementById('loginError');

    let loginUsername = document.getElementById('loginUsername');
    let loginPassword = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // console.log(this.elements);
        const {
            loginUsername: {
                value: username
            },
            loginPassword: {
                value: password
            }
        } = this.elements;

        //може в try/catch блок
        if (userManager.loginUser(username, password)) {
            location.hash = '#home';
        } else {
            wrongCredentialsError.style.display = 'block';
        };

        this.reset();

    });

    loginForm.addEventListener('input', validateForm);

    function validateForm() {

        const loginUsernameValue = loginUsername.value;
        const loginPasswordValue = loginPassword.value;

        if (loginUsernameValue && loginPasswordValue) {
            loginBtn.removeAttribute('disabled');
        } else {
            loginBtn.setAttribute('disabled', true);
        }

    }

})()