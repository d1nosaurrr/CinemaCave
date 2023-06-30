import React from 'react';

export default function Main({children}) {
    return (
        <main className='p-relative main'>
            <div className='container container--main'>
                {children}
                <div id='fullpage' style={{display: 'none'}}
                     onClick={({target}) => target.style.display = 'none'}></div>
            </div>
        </main>
    );
}