import { createContext, useReducer } from "react";
interface Blog {
    id: string;
    userId: string;
    title: string;
    content: string;
    createdAt: string;
    updateAt: string;
}
interface AddBlog {
    type: 'ADD',
    payload: Blog;
}
interface DeleteBlog {
    type: 'DELETE',
    payload: {id: string};
}
type BlogAction = AddBlog | DeleteBlog;

export const blogContext = createContext(null);

export const blogReducer = (blogs: Blog[], action: BlogAction): Blog[] => {
    switch(action.type) {
        case 'ADD':
            return [ action.payload, ...blogs];
        case 'DELETE':
            return blogs.filter((b) => b.id !== action.payload.id)
    }
}

export const blogContextProvider = () => {
    
    const [blogs, dispatch] = useReducer(blogReducer, [])
}