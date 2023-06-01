/**
 * This method return all Files from the form with types 'file' with name = <input name=....
 * @returns 
 */
export const getAllNamedFilesFromForm = (refForm) => {
  const fileListElements = refForm.current.querySelectorAll('input[type=file]');
  console.log(fileListElements);
  const files = Array.from(fileListElements)
    .map(fileElement => {
      const renamedFile = new File([fileElement.files[0]], fileElement.name);
      return renamedFile;
    });
  return files;
}

export const getNamedFileFromForm = (refForm) => {
  const file = refForm.current.querySelector('input[type=file]');
  if (file.value !== '' && file.value !== undefined) {
    return new File([file.files[0]], file.name)
  }
  return null;
}

export const printDataFromFormData = (formData) => {
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
}