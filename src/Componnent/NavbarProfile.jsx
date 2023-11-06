import React, { useState } from 'react';
import { Button, Popover } from 'antd';
const App = () => {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const content=
        <div className="flex-col justify-center items-center mx-auto ">
        <div className="p-2 text-xl">view profile</div>
        <div className="p-2 text-xl">status</div>
        <div className="p-2 text-xl  ">account settings</div>
            <hr/>
        <div className="p-2 text-xl ">Logout @mrx444</div>


    </div>
    return (

        <Popover
            placement="bottomRight"
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <img src="/profile.svg" className="px-2"/>
        </Popover>
    );
};
export default App;