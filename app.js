var people = ["Zach", "Zahra", "EJ"];

var Zahra = people.filter(function(person) {
  return person === "Zahra";
});

people.forEach(person => console.log(person));