import React from 'react'
import noUser from '../../assets/images/no-user.gif'

function NoUser() {
  return (
    <div className='flex justify-center items-center'>
 <img src={noUser} alt='No user' />
    </div>
  )
}

export default NoUser