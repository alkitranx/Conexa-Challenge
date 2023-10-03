import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'CheckPasswordFormat', async: false })
export class CustomCheckPasswordFormat implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments) {
    /*Esta expresion regular evalua que este string contenga:
     * -Al menos una letra mayuscula y/o minuscula (podria contar con acentos(aeiou) e incluida la ñ)
     * -Al menos un numero*/
    const regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    return regex.test(password);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} - The password must contain at least one uppercase letter, one lowercase letter and one number. Minimum 8 and maximum 64 characters`;
  }
}
