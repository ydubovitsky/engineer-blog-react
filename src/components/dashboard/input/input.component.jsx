import styles from './input.module.css';
import { useState } from "react";

const Input = (props) => {

  const { name, type, handler } = props;

  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <>
      {!isDeleted ?
        <div className={styles.container}>
          <i className="fa fa-trash" onClick={() => setIsDeleted(true)} aria-hidden="true"></i>
          <label htmlFor={name}>{name}</label>
          {type === 'text'
            ?
            <input type={type} name={name} {...handler} />
            :
            <textarea name={name} {...handler} style={{minHeight: '100px' }}></textarea>
          }
        </div>
        :
        <></>
      }
    </>
  )
}

export default Input;