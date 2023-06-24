import React from 'react'
import logo from './logo.png'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <div className='aligh='>
    <Link href={'/'}>
            <Image
            src={logo}
            />
    </Link>
    </div>
  )
}

export default index