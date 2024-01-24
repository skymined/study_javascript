// for 
// 변수를 안에서 설정해서 시작점을 지정해줌
for (let i=0; i<10; i++ ) { 

}

// literal 방식 (리스트 사용)
let list = []
for (let param of list) { // python에서 in이었던 것이 java에서는 of

}

// learning after object
const animals_array = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

let animal_list ='';
for (let animal_object of animals_array){
  animal_list = `${animal_list}<tr><td>${animal_object["name"]}</td><td>${animal_object["species"]}</td></tr>`;
}

let animals_element = document.querySelector("#animals_array_id");
animals_element.innerHTML = animal_list

