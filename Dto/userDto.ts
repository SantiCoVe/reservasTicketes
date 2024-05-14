import internal from "stream"

class User {
    private userEmail: string;
    private userPassword: string;
    private userNombres: string;
    private userApellidos: string;
    private userDireccion: string;

    constructor (
        email:string,
        password:string,
        nombres:string,
        apellidos: string,
        direccion:string,
    ) {
        this.userEmail = email;
        this.userPassword = password;
        this.userNombres = nombres;
        this.userApellidos = apellidos
        this.userDireccion = direccion;
    }

    //getters
    get email(): string {
        return this.userEmail;
    }

    get password(): string {
        return this.userPassword;
    }

    get nombres(): string {
        return this.userNombres;
    }

    get apellidos(): string {
        return this.userApellidos;
    }

    get direccion(): string {
        return this.userDireccion;
    }

    //setters
    set email(email: string) {
        this.userEmail = email
    }

    set password(password: string) {
        this.userPassword = password
    }

    set nombres(nombres: string) {
        this.userNombres = nombres
    }

    set apellidos(apellidos: string) {
        this.userApellidos = apellidos
    }

    set direccion(direccion: string) {
        this.userDireccion = direccion
    }
}

export default User;