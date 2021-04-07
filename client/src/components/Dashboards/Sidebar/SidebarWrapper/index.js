
import DashSidebar from '../index.js'

const SidebarWrapper = ({ children }) => {

    return (
        <>
            <DashSidebar/>
            {children}
        </>
    )
}

export default SidebarWrapper;