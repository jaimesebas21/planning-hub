import React from 'react'
import './styles/menu.css'

export const Profile = () => {
  return (
    <div className="Container-profile">
        <div className='Container-image'>
        <img
            className='Image-profile'
            src={`https://media.istockphoto.com/id/1428299005/es/foto/el-hombre-est%C3%A1-sentado-en-una-silla-de-camping-en-el-fondo-de-un-lago-forestal-en-una-hermosa.jpg?s=612x612&w=0&k=20&c=x4x8dZExalizrEIoYd9q0AgBeILgFzc9o54z4fvsW0Y=`}
            srcSet={`https://media.istockphoto.com/id/1428299005/es/foto/el-hombre-est%C3%A1-sentado-en-una-silla-de-camping-en-el-fondo-de-un-lago-forestal-en-una-hermosa.jpg?s=612x612&w=0&k=20&c=x4x8dZExalizrEIoYd9q0AgBeILgFzc9o54z4fvsW0Y= 2x`}
            alt={'user'}
            loading="lazy"
        />
        </div>
        <div>
            <p color='black'>User name</p>
        </div>
      </div>
  )
}
