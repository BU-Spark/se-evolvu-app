
import DashSidebar from '../index.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const SidebarWrapper = ({ children }) => {

    return (
        <>
            <Row>
                <Col sm={2}>
                    <DashSidebar/>
                </Col>
                <Col sm={9}>
                    {children}
                </Col>
            </Row>
        </>
    )
}

export default SidebarWrapper;