db.Restaurant.find({});
db.Restaurant.find({},{restaurant_id:1,name:1,borough:1,cuisine:1})
db.Restaurant.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})
db.Restaurant.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0,'adress.zipcode':1})
db.Restaurant.find({},{borough:'Bronx'})
db.Restaurant.find({},{borough:'Bronx'}).limit5
db.Restaurant.find({},{borough:'Bronx'}).skip(5).limit(5)
db.Restaurant.find({"grades.score":{$gt:90}})
db.Restaurant.find({"grades.score":{$gt:80,$lt:100}})
db.Restaurant.find({'adress.coord.1':{$gt:-95.754168}})
db.Restaurant.find({$and:[ {cuisine: {$ne: "American"}}, {"grades.score": {$gt: 70}}, {"address.coord.0": {$lt: -65.754168 }}]})
db.Restaurant.find({"cuisine":{$ne:"American"},"grades.score":{$gt:70},'address.coord.0':{$lt:-65.754168}});
db.Restaurant.find({ cuisine : {$ne: "American"}, 'grades.grade': "A", borough: {$ne: "Brooklyn"}}).sort({cuisine:-1});
db.Restaurant.find({name: /^Wil/}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1});
db.Restaurant.find({name:/ces$/},{restaurant_id: 1, name: 1, borough:1, cuisine: 1});
db.Restaurant.find({name:/Reg/},{restaurant_id: 1, name: 1, borough:1, cuisine: 1});
db.Restaurant.find({$and: [{ $or: [{ cuisine: "American"}, { cuisine: "Chinese"}]}, {borough : "Bronx"}]})
db.Restaurant.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1,name:1,cuisine:1})
db.Restaurant.find({ $or: [{ borough: {$nin:["Staten Island","Queens","Brooklin","Bronx"]}}]},{restaurant_id:1,name:1,cuisine:1})
db.Restaurant.find({'grades.score':{$lte:10}},{restaurant_id:1,name:1,borough:1,cuisine:1});
db.Restaurantes.find({$or:[{"cuisine":{$nin:["American ", "Chinese"]}},{"name":/^Wil/}]},{"restaurant_id":1, "name":1, "boroug":1, "cuisine":"Seafood"})
db.Restaurant.find({grades: {$elemMatch: {grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z")}}}, {_id: 0, restaurant_id: 1, name: 1, grades:1})
db.Restaurant.find({$and:[{"grades.1.grade":'A',"grades.1.score":9,"grades.1.date":{ $gte: ISODate("2014-08-11T00:00:00Z")}}]},{restaurant_id: 1, name: 1});
db.Restaurant.find({'address.coord.1':{$gt: 42,$lte:52}},{restaurant_id:1,name:1,address:1});
db.Restaurant.find({}).sort({name:1})
db.Restaurant.find({}).sort({name:-1})
db.Restaurant.find({}).sort({cuisine:1,borough:-1})
db.Restaurant.find({"address.street": {$exists: false}})  
db.Restaurant.find({"address.coord": {$type: 'double'}})
db.restaurant.find({"grades.score": {$mod: [7, 0]}}, {restaurant_id: 1, name: 1, "grades.grade": 1})
db.Restaurant.find({name:/mon/},{name:1,borough:1,"address.coord":1,cuisine:1})
db.Restaurant.find({name:/^Mad/},{name:1,borough:1,"address.coord":1,cuisine:1})
