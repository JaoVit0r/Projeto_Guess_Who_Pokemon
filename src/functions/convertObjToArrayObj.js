export default function convertObjToArrayObjs(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let arrayObjects = [];
  
    for (let index = 0; index < keys.length; index++) {
      let obj = {};
      obj[keys[index]] = values[index];
      arrayObjects.push(obj);
    }
    return arrayObjects;
  }
  