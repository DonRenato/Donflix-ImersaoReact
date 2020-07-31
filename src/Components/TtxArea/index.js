import React from 'react';
import PropTypes from 'prop-types';
import {
  FieldWrapper, FieldContainer, TextArea, Label,
} from './styles';

function TxtArea({
  type, value, name, onChange, label,
}) {
  return (
    <FieldWrapper>
      <FieldContainer>
        <TextArea
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          rows="4"
        />
        <Label>
          {label}
          :
        </Label>

      </FieldContainer>
    </FieldWrapper>
  );
}

TxtArea.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

TxtArea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
};

export default TxtArea;
