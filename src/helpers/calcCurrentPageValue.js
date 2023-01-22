export const calcCurrentPageValues = (page) => {
  let initialNum;
  let finalNum;

  if (Number(page) === 1) {
    initialNum = 1;
    finalNum = 20;
  } else if (Number(page) === 2) {
    initialNum = 20;
    finalNum = 40;
  } else {
    initialNum = Number(page) - 1;
    initialNum = initialNum * 20;
    finalNum = Number(page) - 1;
    finalNum = finalNum * 20;
    finalNum = finalNum + 20;
  }

  return {
    initialNum,
    finalNum,
  };
};
