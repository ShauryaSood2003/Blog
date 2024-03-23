"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.blogSchema = exports.signInSchema = exports.signUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpSchema = zod_1.default.object({
    email: zod_1.default.string(),
    name: zod_1.default.string(),
    password: zod_1.default.string(),
});
exports.signInSchema = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string()
});
exports.blogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    link: zod_1.default.string()
});
exports.updateBlogSchema = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional()
});
