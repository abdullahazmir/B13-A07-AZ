import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllFriend = ({data}) => {

    return (
      <Link href={`/friends/${data.id}`}>
          <div className='shadow-lg text-center p-4'>

           <div className=''>
           <div className='flex justify-center'>
             <Image 
               className='rounded-full '
            src={data.picture}
                  width={100}
                  height={120}
                 
                  alt=""
            ></Image>
           </div>
            <p className='text-xl font-semibold'>{data.name}</p>
            <p>{data.days_since_contact}d ago</p>
           <div className='flex flex-col space-y-4 items-center'>
             <p className='badge badge-error'>{data.tags[0]}</p>

            <p className='badge badge-info'>{data.status}</p>
           </div>
           </div>
            
        </div>
        </Link>
    );
};

export default AllFriend;