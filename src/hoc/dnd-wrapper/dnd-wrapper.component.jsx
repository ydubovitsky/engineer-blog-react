import { useEffect, useRef, useState } from "react";
import cn from 'classnames';
import styles from './dnd-wrapper.module.scss';

const DndWrapper = ({ dropFunction, children }) => {
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
      dropFunction(e.dataTransfer.files)
      e.dataTransfer.clearData()
      setDragCount(0);
    }
  }

  return (
    <div ref={dndRef} className={cn(styles.container, dragging ? styles.active : null)}>
      {children}
    </div>
  )
}

export default DndWrapper;