import React from 'react';
import PropTypes from 'prop-types';
import {
  FieldWrapper, FieldContainer, Input, Label,
} from './styles';

function InputText({
  type, value, name, onChange, label,
}) {
  const id = `id_${name}`;
  //  add as linhas abaixo para mudar o type do Input
  //  const isTextArea = type === 'textarea';
  //  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FieldWrapper>
      <FieldContainer>
        <Input
          //  add as linhas abaixo para mudar o type do Input
          //  as={tag}
          id={id}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label>
          {label}
          :
        </Label>

      </FieldContainer>
    </FieldWrapper>
  );
}

InputText.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

InputText.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
};

export default InputText;
