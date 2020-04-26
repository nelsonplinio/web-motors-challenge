import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';

import { Container, IconContainer, AsyncSelect, Select } from './styles';

const customSelectStyle = {
  control: () => ({
    display: 'flex',
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  }),

  menu: (provided) => ({
    ...provided,
    position: 'absolute',
    top: '120%',
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  }),
  dropdownIndicator: (provided, { isFocused }) => {
    return {
      color: isFocused ? darken(0.2, '#999') : '#999',
    };
  },
  clearIndicator: (provided) => {
    return {
      ...provided,
      color: '#fff',
      borderRadius: '50%',
      padding: 2,
      background: 'rgba(150, 150, 150, 0.4)',
      fontSize: 12,
      cursor: 'pointer',
    };
  },
  option: (provided, { isSelected, isFocused }) => {
    return {
      ...provided,
      backgroundColor: (isSelected || isFocused) && '#f51344',
      color: isSelected || isFocused ? '#fff' : '#999',
    };
  },
  indicatorsContainer: (provided) => {
    return {
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 0,
      maxWidth: 40,
    };
  },
  input: (provided) => ({
    ...provided,
    flex: 1,
  }),
};

export default function SelectInput({
  icon: Icon,
  label,
  options,
  loadOptions,
  style,
  async,
  ...rest
}) {
  return (
    <Container htmlFor="selector" style={style}>
      {Icon && <IconContainer>{Icon}</IconContainer>}

      {label && <span>{label}:</span>}

      {async ? (
        <AsyncSelect
          id="selector"
          {...rest}
          options={options}
          cacheOptions
          defaultOptions
          loadOptions={loadOptions}
          styles={customSelectStyle}
        />
      ) : (
        <Select
          id="selector"
          {...rest}
          options={options}
          defaultOptions
          styles={customSelectStyle}
        />
      )}
    </Container>
  );
}

SelectInput.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  options: PropTypes.arrayOf,
  loadOptions: PropTypes.func,
  async: PropTypes.bool,
  style: PropTypes.oneOf(PropTypes.array, PropTypes.object),
};

SelectInput.defaultProps = {
  icon: null,
  options: null,
  loadOptions: null,
  style: {},
  async: false,
  label: null,
};
