// Плавный скролл на елемент помеченный якорем!
export const smoothScrollToElement = (elementId) => {
  const anchor = document.getElementById(elementId);

  anchor.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}