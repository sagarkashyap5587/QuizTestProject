import { path } from "./path";
import Quiz from "../Componets/quiz";
import UserForm from "../Componets/userForm";
import { Component } from "react";


const PageRoutes = [
    {
        name: "Quiz",
        Components: Quiz,
        path: path.HOME,
        isPrivate: false
    },
    {
        name:"UserForm",
        Components: UserForm,
        path: path.USER,
        isPrivate: false
    }
]

export default PageRoutes;