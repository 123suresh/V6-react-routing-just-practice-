import React from 'react';

function User({render}) {
    return (
        <div>
            <h3>{render(false)}</h3>
        </div>
    )
}

export default User;
