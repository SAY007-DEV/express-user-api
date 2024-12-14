import cors from 'cors'
import imp, { express } from './Model/imp.js'
const app= express()
app.use(cors());
app.use(express.json())
port=8500;



mongoose.connect('mongodb://localhost:27017/expuser')
.then(()=>console.log("mongodb connnected"))
.catch((error)=>console.log(error))






app.listen(port,console.log(`server running on http://localhost:`,$port)
);