import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const App = () => {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const items = [
        {
            key: '1',
            label: 'Activity',
            children: 'Activity associated with your account will appear here.',
        },
        {
            key: '2',
            label: 'Highlights',
            children: 'Important news, product updates, and milestones associated with your account will appear here.',
        },

    ];
    const Tab = () => (
        <Tabs
            defaultActiveKey="2"
            items={items}
            centered
            indicatorSize={(origin) => origin + 40}
            size={"large"}
            style={{width:250}}

        />
    );

    return (

        <Popover
            placement="bottomRight"
            content={Tab}
            title="Notification"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <img src="/bell.svg" className="px-2"/>
        </Popover>
    );
};
export default App;