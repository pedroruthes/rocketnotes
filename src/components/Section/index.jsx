import { Container } from "./styles";

export default function Section({ title, children }) {
    
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}