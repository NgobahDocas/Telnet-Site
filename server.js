
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const multer = require('multer');
// const ejs = require('ejs');


const port = 3024;

const app = express();

app.listen(port, () => {
    console.log("Telnet Platform Server Started");
})


app.use('/css', express.static(path.join(__dirname, '../frontend/css')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));

});

app.use(express.static(path.join(__dirname, '../frontend')));


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/about.html'));
  });
  
  app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/services.html'));
  });
  
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/blog.html'));
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/contact.html'));
  });

  app.get('/capacity', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/capacity.html'));
  });

  app.get('/cuib', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/cuib.html'));
  });

  app.get('/ict', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/ict.html'));
  });

  app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/works.html'));
  });

  app.get('/our_amazing_team', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/team.html'));
  });

  app.get('/our_events', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/event.html'));
  });
  

  app.get('/beneficiaries', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/benefit.html'));
  });

  app.get('/volunteerism', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/voluntary.html'));
  });

  app.get('/our_projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/our_projects.html'));
  });

  app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });



mongoose.connect('mongodb://127.0.0.1:27017/telnet');

const db = mongoose.connection;
db.once('open', () => {
    console.log("Mongodb Connection Sucessful");
})



const userCommentSchema = new mongoose.Schema({
    comment_name:String,
    comment_email:String,
    full_comment:String,
    news_email:String,
});

const Users = mongoose.model("comment", userCommentSchema);

app.use(express.urlencoded({extended:true}))

app.post('/post',async (req, res) => {
    const {comment_name, comment_email, full_comment, news_email} = req.body;
    const user = new Users({
        comment_name,
        comment_email,
        full_comment,
        news_email,
        message,
    });
    await user.save();
    console.log(user);
    res.send('<script>alert("Comment Successful Posted"); window.location.href = "http://localhost:3024/blog";</script>');


});



const userSubscriptionSchema = new mongoose.Schema({
  subscription_email:String,
});

const Subscribers = mongoose.model("subscription", userSubscriptionSchema);


app.post('/subcribe',async (req, res) => {
  const {subscription_email} = req.body;
  const sub = new Subscribers({
    subscription_email
  });
  await sub.save();
  console.log(sub);
  res.send('<script>alert("Newsletter Subscription Successful"); window.location.href = "http://localhost:3024/blog";</script>');

});



const userMessageSchema = new mongoose.Schema({
  message_name:String,
  message_email:String,
  message_number:String,
  message_address:String,
  full_message:String,

});


const Message = mongoose.model("Message", userMessageSchema);

app.post('/message',async (req, res) => {
  const {message_name, message_email, message_number, message_address, full_message} = req.body;
  const mes = new Message({
    message_name,
    message_email,
    message_number,
    message_address,
    full_message

  });
  await mes.save();
  console.log(mes);
  res.send('<script>alert("Message Received Successfully"); window.location.href = "http://localhost:3024/our_amazing_team";</script>');
});



const userVolunteerSchema = new mongoose.Schema({
  volunteer_name:String,
  volunteer_email:String,
  volunteer_number:String,
  volunteer_address:String,
  volunteer_dob:String,
  volunteer_occupation:String,
  volunteer_level_of_education:String,
  volunteer_duration:String,
  volunteer_about:String,
});


const Volunteer = mongoose.model("Volunteer", userVolunteerSchema);

app.post('/volunteer',async (req, res) => {
  const {
    volunteer_name,
    volunteer_email,
    volunteer_number,
    volunteer_address,
    volunteer_dob,
    volunteer_occupation,
    volunteer_level_of_education,
    volunteer_duration,
    volunteer_about
    } = req.body;

  const vol = new Volunteer({
    volunteer_name,
    volunteer_email,
    volunteer_number,
    volunteer_address,
    volunteer_dob,
    volunteer_occupation,
    volunteer_level_of_education,
    volunteer_duration,
    volunteer_about
  });
  await vol.save();
  console.log(vol);
  res.send('<script>alert("Volunteer Application Received Successfully"); window.location.href = "http://localhost:3024/volunteerism";</script>');
});



const userContactSchema = new mongoose.Schema({
    contact_name:String,
    contact_phone:String,
    contact_email:String,
    contact_subject:String,
    contact_message:String
});

const ContactUs = mongoose.model("contact", userContactSchema);


app.post('/contact',async (req, res) => {
  const {contact_name, contact_phone, contact_email, contact_subject, contact_message} = req.body;
  const con = new ContactUs({
    contact_name,
    contact_phone,
    contact_email,
    contact_subject,
    contact_message
  });
  await con.save();
  console.log(con);
  res.send('<script>alert("Newsletter Subscription Successful"); window.location.href = "http://localhost:3024/contact";</script>');

});





// Define the schema for the Image collection
const imageSchema = new mongoose.Schema({
  imageUrl: String
});

const Image = mongoose.model('Image', imageSchema);

const imageUrl = '../frontend/img/blog.jpeg'; 

Image.findOne({ imageUrl }) 
  .then(existingImage => {
    if (!existingImage) {
      const newImage = new Image({ imageUrl });
      newImage.save()
        .then(() => console.log('Image URL saved successfully'))
        .catch(err => console.error(err));
    } else {
      console.log('Image URL already exists!'); 
    }
  });

 


// Image Optimization

// const sharp = require('sharp');
// const { error } = require('console');

// sharp("../frontend/img/profile3.PNG")
//     .resize(10000, 8000, {
//         fit: "contain",
//         position: "center",
//         background: {
//             r: 230,
//             g: 230,
//             b: 230
//         }
//     })
    
//     .toFile("out_blogProfilePic.PNG")


