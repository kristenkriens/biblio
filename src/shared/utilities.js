export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const removeDashes = (string) => {
  return string.replace(/-/g, "");
}
