import z from "zod";

export const signUpSchema=z.object({
    email:z.string(),
    name:z.string(),
    password:z.string(),
})
export const signInSchema=z.object({
    email:z.string(),
    password:z.string()
})
export const blogSchema=z.object({
    title:z.string(),
    content:z.string(),
    link:z.string()
})
export const updateBlogSchema=z.object({
    id:z.string(),
    title:z.string().optional(),
    content:z.string().optional()
})
export type typeSignUpSchema=z.infer<typeof signUpSchema>;
export type typeSignInSchema=z.infer<typeof signInSchema>;
export type typeBlogSchema=z.infer<typeof blogSchema>;
export type typeUpdateBlogSchema=z.infer<typeof updateBlogSchema>;