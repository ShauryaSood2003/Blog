import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import userRouter from './routes/user'
import blogRouter from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_PASSWORD: string
	}
}>()
app.use(cors());
app.use("/api/v1/blog/*",async (c,next)=>{
  try{
     
      const token=c.req.header("Authorization");
      if(!token){
      return c.json({message:"no auth added in header"});
      }
      const payload=await verify(token,c.env.JWT_PASSWORD);
      
      
      if(!payload){
      return c.json({message:"Not authorize Error Warning"}); 
      }
      c.set('jwtPayload',payload.id);
      await next();
  }catch(e){
      return c.json({message:"Failed to Authenticate!"});
  }
});

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);

export default app