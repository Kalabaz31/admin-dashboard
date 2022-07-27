import { Container } from "react-bootstrap"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

interface WrapperProps {

}


const Wrapper = <P extends object>(
    Component: React.ComponentType<P>
): React.FC<P> => ({
    ...props
}: WrapperProps) =>
        <Container fluid >
            <Header />
            <Component {...props as P} />
        </Container>


export default Wrapper