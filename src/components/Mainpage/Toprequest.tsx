import styled from "styled-components";

const RequestContainer = styled.section`
    margin: 1rem;
    h1 {
        text-align: center;
    }
`

function Toprequest(){
    return (
        <RequestContainer>
            <h1>Top Request</h1>
        </RequestContainer>
    )
}

export default Toprequest;