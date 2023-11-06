import React from 'react';
import { AutoComplete } from 'antd';
const options = [
    {
        value: 'Burns Bay Road',
    },
    {
        value: 'Downing Street',
    },
    {
        value: 'Wall Street',
    },
];

const onSelect = (data) => {
    console.log('onSelect', data);
};
const App = () => (
    <AutoComplete
        style={{
            // width: 300,
            flexGrow:1,
            height:40,
            margin:30,
            color:'#71717a',

        }}
        options={options}
        placeholder="search high resolution image "
        filterOption={(inputValue, option) =>
            option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1

        }
        onSearch={(text) => setOptions(getPanelValue(text))}

    />
);

export default App;