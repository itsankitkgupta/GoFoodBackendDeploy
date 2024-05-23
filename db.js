const mongoose=require('mongoose');
const mongoURI='mongodb+srv://itsankitkgupta:132962@cluster0.3s9xqvq.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// const mongoDB=async()=>{
// await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//     if(err) console.log("---",err);
//     else{
//         console.log("Connected ");
//         const fetched_data= await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else console.log("Mongoose.connect does not accepts a callback");
            
//         });
//     }
// });
// };
// mongoDB.then(()=>{
//     console.log("Atlas connected successful");
// });
// mongoDB.catch(()=>{
//     console.log("An error occured in atlas");
// });

// The error message Mongoose.connect does not accepts a callback is because you are trying to use a callback function with the mongoose.connect() method, which is no longer supported.

// To fix this, you can use the async/await syntax to handle the connection asynchronously. Here is an updated version of your code:

// JavaScript




// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log('Connected');

//     const fetched_data = await mongoose.connection.db.collection('food_items');
//     const data = await fetched_data.find({}).toArray(
//     //   function(err,data){
//     //   if(err)console.log(err);
//     //   else{
//     //     global.food_items=data;
//     //     // console.log(global.food_items);
//     //   }

//     // });
//     );

//     global.food_items=data;
//     // console.log(global.food_items);

//     const foodCategory = await mongoose.collection.db.collection("foodCategory");
//    const categoryData= await foodCategory.find({}).toArray();
//    global.categoryData=categoryData;
//     console.log(categoryData);

//   } catch (err) {
//     console.log(err);
//   }
// };

const mongoDB = async () => {
  try {
    // Connect to the database
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to Atlas");
    // Get the food items and food categories collections
    const foodItemsCollection = mongoose.connection.db.collection('food_items');
    const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');

    // Get all food items and food categories
    const foodItems = await foodItemsCollection.find({}).toArray();
    const foodCategories = await foodCategoryCollection.find({}).toArray();

    // Store the food items and food categories in global variables
    global.food_items = foodItems;
    global.categoryData = foodCategories;

    // Log the food categories
    // console.log(foodCategories);
  } catch (err) {
    console.log(err);
  }
};


module.exports=mongoDB;
