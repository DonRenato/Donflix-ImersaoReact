import React from 'react';
import {Field, FieldContainer, TextArea} from './styles';


function TxtArea({rows,type, value, name, onChange, placeholder }){
    return(
    <Field>
      <FieldContainer>
        <TextArea
          type={type}
          value = {value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows='4'
        />
        
      </FieldContainer>
    </Field>
    );
}

export default TxtArea;