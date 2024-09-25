import mongoose from "mongoose"


export const Connection =async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://cosmosdex:uXmLWivF2RxBJUDU@cluster1.211dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
    try{
       await mongoose.connect(URL,{useNewUrlParser: true});
       console.log('DataBase is connected successfully');
    }catch(error){
        console.log('Error while connecting to DataBase',error);
        process.exit(1);
    }
}

export default Connection;