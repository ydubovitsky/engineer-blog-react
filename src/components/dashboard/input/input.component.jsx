import styles from './input.module.css';
import { useState } from "react";

const Input = (props) => {

  const { name, type, handler } = props;
  const [isDeleted, setIsDeleted] = useState(false);

  const showInputElementByType = (type) => {
    switch (type) {
      case 'text': {
        return <input type="text" name={name} {...handler} />
      }
      case 'image': {
        return <input type="file" name={name} accept="image/*" />
      }
      case 'textarea': {
        return <textarea name={name} {...handler} style={{ minHeight: '100px' }}></textarea>
      }
      default: return null;
    }
  }

  return (
    <>
      {!isDeleted ?
        <div className={styles.container}>
          <i className="fa fa-trash" onClick={() => setIsDeleted(true)} aria-hidden="true"></i>
          <label htmlFor={name}>{name}</label>
          {showInputElementByType(type)}
        </div>
        :
        <></>
      }
    </>
  )
}

export default Input;