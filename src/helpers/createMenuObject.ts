type menuOptions = '' | 'dog' | 'cat' | 'fish' | 'all'

export const createMenuObjetc = (activeMenu: menuOptions) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }

  if (activeMenu != '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;

}