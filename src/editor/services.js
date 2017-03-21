export function getComponent(tag){
  //TODO: if first charactor of name is capital  import that component then return it
  return tag
}

export function setPath(obj, pList, value) {
  let schema = obj;  // a moving reference to internal objects within obj
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }

  schema[pList[len - 1]] = value;
}

export function getPath(obj, pList) {
  let schema = obj;  // a moving reference to internal objects within obj
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) return null;
    schema = schema[elem];
  }

  return schema[pList[len - 1]]||obj;
}

export function getContent(){
  //TODO
  return new Promise((resolve,reject)=>{})
}
