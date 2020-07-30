import React from 'react';
import {Field, FieldContainer, Input} from './styles';


function InputText({type, value, name, onChange, placeholder }){
    return(
    <Field>
      <FieldContainer>
        <Input
          type={type}
          value = {value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
        
      </FieldContainer>
    </Field>
    );
}

export default InputText;