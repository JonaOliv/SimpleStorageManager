import React from "react";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Tags() {
    const options = [
        { value: 'Office', label: 'Office' },
        { value: 'Hardware', label: 'Hardware' },
        { value: 'Wasteful', label: 'Wasteful' },
        { value: 'Tools', label: 'Tools' }
    ]

    const animatedComponents = makeAnimated();

    return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
    />
    );
}