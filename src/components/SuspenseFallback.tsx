import React, { FC } from 'react';
import { ReactComponent as SpinnerIcon } from '../assets/icons/icon-spinner.svg';

const SuspenseFallback: FC = () => {
    return (
      <div className='w-full h-screen flex justify-center items-center bg-white'>
        <SpinnerIcon />
      </div>
    );
  };
  
  export default SuspenseFallback;
  