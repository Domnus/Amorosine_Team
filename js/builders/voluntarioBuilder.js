const IBuilder = require('../template/BuilderTemplate');

class VoluntarioBuilder extends IBuilder {
    nome           = '' 
    sobrenome      = '' 
    cpf            = '' 
    email          = '' 
    telefone       = '' 
    sexo           = '' 
    dataNasc       = ''   

    constructor(dados) {
        this.nome           = dados?.nome;
        this.sobrenome      = dados?.sobrenome;
        this.cpf            = dados?.cpf;
        this.email          = dados?.email;
        this.telefone       = dados?.telefone;
        this.sexo           = dados?.sexo;
        this.dataNasc       = dados?.data;
    }

    validaDados() {
        if (this.nome.length > 50) {
            return "Nome muito longo!";
        }

        if (this.sobrenome.length > 50) {
            return "Sobrenome muito longo!";
        }

        if (this.cpf.length > 14) {
            return "CPF muito longo!";
        }

        if (this.email.length > 50) {
            return "Email muito longo!";
        }

        if (this.telefone.length > 16) {
            return "Telefone muito longo!";
        }

        if (this.sexo.length > 1) {
            return "Sexo deve ter apenas 1 caracter!";
        }

        /*
        if (!this.validaData(this.dataNascimento)) {
            return "Data inválida!";
        }
        */

        return "";
    }

    validaData(data) {
        let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
    
        // Matching the date through regular expression      
        if (data.match(dateformat)) {
            let operator = data.split('/');
    
            // Extract the string into month, date and year      
            let datepart = [];
            if (operator.length > 1) {
                datepart = data.split('/');
            }
            let day = parseInt(datepart[0]);
            let month = parseInt(datepart[1]);
            let year = parseInt(datepart[2]);
    
            // Create a list of days of a month      
            let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month == 1 || month > 2) {
                if (day > ListofDays[month - 1]) {
                    //to check if the date is out of range
                    console.log("Invalid date")     
                    return false;
                }
            } else if (month == 2) {
                let leapYear = false;
                if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
                if ((leapYear == false) && (day >= 29)) {
                    console.log("Invalid date")
                    return false;
                }
                else
                    if ((leapYear == true) && (day > 29)) {
                        console.log('Invalid date format!');
                        return false;
                    }
            }
        } else {
            console.log("Invalid date format!");
            return false;
        }
        return true;
    }
}

module.exports = VoluntarioBuilder;