
const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
server.use(cors());



//mongo
let books; 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  const booksSchema = new mongoose.Schema({
    title: String,
    img:String,
    description:String,
    status:String,
    email:String,
    author:String,
    pages:Number
    
    
    
});
 books = mongoose.model('Books', booksSchema);
// saving()
}

async function saving() {
    const ramiBbooks = new books({
        title: 'The Subtle Art of Not Giving a F*ck',
        img:'https://productimages.hepsiburada.net/s/27/375/10193206050866.jpg',
        description:'For decades, we’ve been told that positive thinking is the key to a happy, rich life. "F**k positivity," Mark Manson says. "Let’s be honest, shit is f**ked and we have to live with it." In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up.',
        status:'Avalible',
        email:'rami-zaitoun@hotmail.com',
        author: 'Mark Manson',
        pages: 224,
   
       });
       const user = new books({
        title: 'In Search of Lost Time',
        img:'https://m.media-amazon.com/images/I/411fuVxxG4L.jpg',
        description:'Swanns Way, the first part of A la recherche de temps perdu, Marcel Prousts seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narrator recalls his childhood, aided by the famous madeleine; and describes M. Swanns passion for Odette. The work is incomparable. Edmund Wilson said "[Proust] has supplied for the first time in literature an equivalent in the full scale for the new theory of modern physics."',
        status:'Avalible',
        email:'rami-zaitoun@hotmail.com',
        author: 'Marcel Proust',
        pages: 4215,
   
       });
       const ahmad = new books({
        title: 'Crime and Punishment',
        img:'https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg',
        description:'The novel is often cited as one of the supreme achievements in literature. Crime and Punishment focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates a plan to kill an unscrupulous pawnbroker for her money',
        status:'not Avalible    ',
        email:'rami-zaitoun@hotmail.com',
        author: 'Fyodor Dostoyevsky',
        pages: 700,
   
       });
    await ramiBbooks.save();
    await user.save();
    await ahmad.save();
 }

//Books handeler 
function booksHandler(req,res)
{
    const userEmail = req.query.email;
    books.find({email:userEmail},(err,result) => {
      if (err) {
          console.log(err);
      }
      else{
          res.send(result);
      }
    })
}

module.exports = booksHandler