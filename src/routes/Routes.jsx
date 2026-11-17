import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/homePage/HomePage";
import BookDetails from "../Pages/bookDetails/BookDetails";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/bookDetails/:id",
                Component: BookDetails,
                loader: () => fetch('/public/data/booksData.json'),
            },
            {
                path: "/books",
                Component:Books
            },
            {
                path: "*",
                Component:ErrorPage
            }
        ]

    }
]);