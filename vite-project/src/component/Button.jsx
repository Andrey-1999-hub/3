import style from './style/button.module.css'; 
import { memo } from 'react';

 const Button = memo(() => {

  return (
    <>
    <button>Это кнопка</button>
    </>
  )
})

export default Button