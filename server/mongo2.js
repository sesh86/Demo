var mongoose=require('mongoose');
const _app=require('./config.js');
mongoose.connect('mongodb://'+_app.user+':'+_app.pwd+'@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useNewUrlParser: true});

var pet = mongoose.model('pets', { name: String, breed:String, pet_id:Number });

var dog = new pet({ name: 'Danny',breed:'German Shepherd',pet_id:1 });

//find/querying the document
pet.find(function (err, pets) {
  if (err) return console.error(err);
  for(i=0;i<pets.length;i++)
  console.log((pets[i]._id)+'--'+pets[i].name+'--'+pets[i].breed);
});

/*
Cat.find({name:/^dann/},function (err, kittens) {
  if (err) return console.error(err);
  for(i=0;i<kittens.length;i++)
  console.log(kittens[i].name);
});
*/
