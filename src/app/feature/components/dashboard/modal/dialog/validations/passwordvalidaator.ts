import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordvalidaator(): ValidatorFn {
  return (formgroup: AbstractControl): { [key: string]: any } | null => {
    // console.log(formgroup.parent?.value.Password);
    // console.log('paswdcicked', formgroup.value);
    let forbidden = false;
    if (formgroup.value) {
      // let password = formgroup.parent?.value.Password;
      // let agedate = currentYear - newdate;
      // console.log(agedate);
      if (formgroup.value !== formgroup.parent?.value.Password) {
      
        forbidden = true;
        return forbidden ? { Matched: true } : null!;
      }else{
      }
    }
    return null;
  };
}
