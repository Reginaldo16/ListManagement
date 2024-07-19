import { Route, Routes } from "react-router-dom"
import {  Student } from "./pages/Student"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layout/DefaultLayout"
import { NotFound } from "./pages/404"
import Contact from "./pages/Contact"

export const Router =() =>{
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/"  element={<Home/>} />
                <Route path="/student" element={<Student/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<NotFound/>} />

            </Route>
        </Routes>
    )
}