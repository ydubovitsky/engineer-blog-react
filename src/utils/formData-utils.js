/**
 * This method return all Files from the form with types 'file' with name = <input name=....
 * @returns 
 */
export const getAllNamedFilesFromForm = (refForm) => {
  const fileListElements = refForm.current.querySelectorAll('input[type=file]');
  const files = Array.from(fileListElements)
    .map(fileElement => {
      const renamedFile = new File([fileElement.files[0]], fileElement.name);
      return renamedFile;
    });
  return files;
}

export const printDataFromFormData = (formData) => {
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
}