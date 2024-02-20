const mapOne = new Map(); //declare a map

//set value in map
mapOne.set('a',1); 
mapOne.set('b',2);
mapOne.set('c',3);

//access value from map
console.log(mapOne.get('a'));
console.log(mapOne.get('b'));
console.log(mapOne.get('c'));

//size of map
console.log('size : ', mapOne.size);

//delete key/value from map
mapOne.delete('a');

//size of map
console.log('size after delete : ',mapOne.size);

//ToDo
// difference between map and object