import { FormControl, FormGroup } from "@angular/forms";

export default class checkFormFields{
    static checkForm(formGroup:FormGroup)
    {
      Object.keys(formGroup.controls).forEach(field=>{
        const control = formGroup.get(field);
        if(control instanceof FormControl)
        {
          control.markAsDirty({onlySelf:true}); //this will make the field dirty and show us the error 
        }
        else if(control instanceof FormGroup)
        {
          this.checkForm(control);
        }
      })
    }
}