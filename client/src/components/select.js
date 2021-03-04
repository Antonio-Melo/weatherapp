import React from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import styled from 'styled-components'

export default class Select extends React.PureComponent {

    loadOptions = (inputValue, callback) => {
        if(inputValue !== ''){
            axios.get('/cities', { params: { name: inputValue }})
                .then(response => {
                    const options = response.data.map(opt => {
                        return { value: opt.id, label: opt.name +', ' + opt.country }
                    });

                    return callback(options.filter(op => op.label.toLowerCase().startsWith(inputValue.toLowerCase())));
                });
        }
    }
    
    onOptionChange = optionsSelected => {
        const { setCities } = this.props;

        setCities(optionsSelected);
    }

    render(){
        const { cities } = this.props;

        return (
            <SelectWrapper>
                 <AsyncSelect
                    isMulti
                    options={cities}
                    onChange={this.onOptionChange}
                    loadOptions={this.loadOptions}
                />
            </SelectWrapper>
        );
    };
}

const SelectWrapper = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
`