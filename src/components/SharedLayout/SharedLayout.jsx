import { Outlet } from "react-router-dom"
import { LayoutGrid } from "./SharedLayout.styled"
import { AppBar } from "components/AppBar/AppBar"
import { Suspense } from "react"


export const Layout = () => {
    return (
        <LayoutGrid>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </LayoutGrid>
    )
}