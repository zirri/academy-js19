function objectify (key, value) {
  let obj = {}
  obj[key] = value
  return obj
}

objectify('name', 'Tyler') // { name: 'Tyler' }


function objectify (key, value) {
    return {
      [key]: value
    }
  }
  
  objectify('name', 'Tyler') // { name: 'Tyler' }

