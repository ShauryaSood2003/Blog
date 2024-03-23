import z from "zod";
export declare const signUpSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    password: string;
}, {
    email: string;
    name: string;
    password: string;
}>;
export declare const signInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const blogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    link: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    link: string;
}, {
    title: string;
    content: string;
    link: string;
}>;
export declare const updateBlogSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
}, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
}>;
export type typeSignUpSchema = z.infer<typeof signUpSchema>;
export type typeSignInSchema = z.infer<typeof signInSchema>;
export type typeBlogSchema = z.infer<typeof blogSchema>;
export type typeUpdateBlogSchema = z.infer<typeof updateBlogSchema>;
