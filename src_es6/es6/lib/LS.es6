export function setLS(name, value){
  window.localStorage.setItem(name, value);
}

export function getLS(name){
  return window.localStorage.getItem(name);
}
