const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/Ecom", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

 