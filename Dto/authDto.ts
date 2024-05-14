class Auth {
    private userEmail: string;
    private userPassword: string;

    constructor(
        email: string,
        password: string
    ) {
        this.userEmail = email;
        this.userPassword = password;
    }

    //getters
    get email(): string {
        return this.userEmail
    }

    get password(): string {
        return this.userPassword;
    }

    //setters
    set email(email: string) {
        this.userEmail = email
    }

    set password(password: string) {
        this.userPassword = password
    }

}

export default Auth;