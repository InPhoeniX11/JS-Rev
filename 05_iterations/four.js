const myObject = {
  js: 'JavaScript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple'
}

for(const key in myObject){
  console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "python","ruby", "cpp"]

for(const key in programming){
  console.log(programming[key])
}