const Validation = (userData) => {
    const errors = {}

    if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(userData.email)){
        errors.email = 'Email no valido'
    }
    if(!userData.email){
        errors.email = 'ingrese un email'
    }
    if(userData.email.length > 35){
        errors.email = 'No debe superar los 35 caracteres'
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'Debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'Debe ser entre 6 y 10 caracteres'
    }

    return errors
}

export default Validation;