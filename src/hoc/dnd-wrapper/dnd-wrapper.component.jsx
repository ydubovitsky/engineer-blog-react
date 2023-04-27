import { useEffect, useRef, useState } from "react";
import styles from './dnd-wrapper.module.css';

const DndWrapper = ({ handleDropFn, children }) => {
  const dndRef = useRef();
  const [dragging, setDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);

  useEffect(() => {
    let ref = dndRef.current;
    // mount
    ref.addEventListener('dragenter', handleDragIn)
    ref.addEventListener('dragleave', handleDragOut)
    ref.addEventListener('dragover', handleDrag)
    ref.addEventListener('drop', handleDrop)
    // unmount callback
    return () => {
      ref.removeEventListener('dragenter', handleDragIn)
      ref.removeEventListener('dragleave', handleDragOut)
      ref.removeEventListener('dragover', handleDrag)
      ref.removeEventListener('drop', handleDrop)
    }
  }, []);

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCount(prev => prev + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  }

  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCount(prev => prev - 1)
    if (dragCount > 0) {
      setDragging(false);
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleDropFn(e.dataTransfer.files)
      e.dataTransfer.clearData()
      setDragCount(0);
    }
  }

  return (
    <div ref={dndRef} className={styles.container}>
      {dragging &&
        <div
          style={{
            border: 'dashed grey 4px',
            backgroundColor: 'rgba(255,255,255,.8)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: 0,
              left: 0,
              textAlign: 'center',
              color: 'grey',
              fontSize: 36
            }}
          >
            <div>drop here :)</div>
          </div>
        </div>
      }
      {children}
    </div>
  )
}

export default DndWrapper;