import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {signUpSchema,typeSignUpSchema,signInSchema,typeSignInSchema} from "blog-tester";

const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_PASSWORD: string
    }
}>();


userRouter.post('/signup', async (c) => {
    try{
        const body:typeSignUpSchema=await c.req.json();
        const {success} =signUpSchema.safeParse(body);
        if(!success){
          return c.text("Wrong Input try again!");
        }
        const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const user=await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password,
        }
        });
        console.log(user);
        const token=await sign({id:user.id},c.env.JWT_PASSWORD);
        return c.json({token,name:user.name});
    }catch(e){
        return c.text("Failed to Add User");
    }
})
userRouter.post('/signin', async(c) => {
    try{
      const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const body:typeSignInSchema=await c.req.json();
      const {success}=signInSchema.safeParse(body);
      if(!success){
        return c.text("Wrong Input try again!");
      }
      const user=await prisma.user.findFirst({
        where:{
          email:body.email,
          password:body.password
        }
      });
      
      if(!user){
        return c.text("No such User found!");
      }
      const token=await sign({id:user.id},c.env.JWT_PASSWORD);
      return c.json({token,name:user.name});
    }catch(e){
      return c.json({message:"Failed to signin!"})
    }
  })
  userRouter.get("/del",async (c)=>{
    try{
      console.log("delete");
      
      const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const user=await prisma.user.deleteMany({})
    console.log(user);
    }catch(e){
      console.log(e);
      
    }
    
  })
export default userRouter;