let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  // Start coding here
  // for (let i = 0; i < crimeRecordNames.length; i++) {
  //   console.log(name)
  //   if(name === crimeRecordNames[i]){
  //     return `${name} has a crime record!!!`
  //   }
  // }
  // return `${name} has no a crime record`
  let person = crimeRecordNames.includes(name);
  return person
    ? `${name} has crime record !!!`
    : `${name} has no crime record`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
