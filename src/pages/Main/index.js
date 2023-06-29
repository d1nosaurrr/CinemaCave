import React from 'react';

export default function Main({children}) {
    return (
        <main className='main'>
            <div className='container container--main'>
                {children}
            </div>
        </main>
    );
}