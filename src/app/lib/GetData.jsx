import React from 'react';
import AllFriend from '../friends/page';

const GetData = async () => {
    const res = await fetch('http://localhost:3000/Data.json', {
        cache: 'no-store'
    });

    const datas = await res.json();

    return (
        <div className='grid grid-cols-4 shadow-lg gap-5 w-[1200px] mx-auto'>
            {
                datas.map(data => <AllFriend key={data.id} data={data}></AllFriend>)
            }
        </div>
    );
};

export default GetData;