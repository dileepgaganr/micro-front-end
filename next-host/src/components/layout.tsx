import React from "react"
import Header from "./header"

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    return <>
        <Header></Header>
        <main>
            {children}
        </main>
    </>
}

export default Layout;