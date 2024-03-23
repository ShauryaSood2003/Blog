import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import {blogSchema,typeBlogSchema,updateBlogSchema,typeUpdateBlogSchema} from "blog-tester";

const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_PASSWORD: string
    }
}>();

blogRouter.post('/add',async (c) => {
    try{
        console.log("hee");
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const body:typeBlogSchema=await c.req.json();
        const {success}=blogSchema.safeParse(body);
        if(!success){
            return c.text("Wrong Data try again!");
        }
        const res=await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                link:body.link,
                authorId:c.get("jwtPayload")
            }
        });
        console.log(res);
        return c.json({res});
    }catch(e){
        console.log(e);
        
        
        return c.json({message:"Error while adding add Post!"});
    }
})
blogRouter.put('/update', async(c) => {
    try{
        const body:typeUpdateBlogSchema=await c.req.json();
        const {success}=updateBlogSchema.safeParse(body);
        if(!success){
            return c.text("Wrong Updated data try again!");
        }
        const prisma=new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const res=await prisma.post.update({
            where:{
                id:body.id,
                authorId:c.get("jwtPayload")
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
        return c.json(res);
    }catch(e){
        return c.json({message:"Error while Updating Blog"})
    }
})
blogRouter.get('/:id', async(c) => {
    try{
        const prisma=new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const id=c.req.param("id");
        const post=await prisma.post.findUnique({
            where:{
                id
            },
            select:{
                author:{
                    select:{
                        name:true,
                        aboutMe:true
                    }
                },
                title:true,
                content:true,
                published:true,
                createdAt:true
            }
        })
        console.log(post);
        return c.json(post);
    }catch(e){
        return c.json({message:"Error while Updating Blog"})
    }
})
blogRouter.get("/all/bulk",async(c)=>{
    try{
        const prisma=new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const res=await prisma.post.findMany({
            select:{
                content:true,
                id:true,
                published:true,
                title:true,
                link:true,
                createdAt:true,
                author:{
                    select:{
                        name:true,
                    }
                }
            }
        });
        return c.json(res);
    }catch(e){
        return c.json({message:"Error while Updating Blog"})
    }
});
export default blogRouter;


//extra code

// blogRouter.get("/del/de",async(c)=>{
//     try{
//         console.log("hello");
        
//         const prisma=new PrismaClient({
//             datasourceUrl:c.env.DATABASE_URL
//         }).$extends(withAccelerate());
//         const res=await prisma.post.deleteMany({});
//         console.log(res);
//         console.log("hi");
        
//     }catch(e:any){
//         console.log("Error: "+e);
        
//     }
// })
