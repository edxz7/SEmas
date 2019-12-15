import React from 'react';
import { Container } from "../Dashboard/Dashboard-Styled-Components";

function KPICard(props) {
    return (
        <>
            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
                <Container className="card grid-card is-card-dark">
                    <Container className="card-heading">
                        <Container className="is-dark-text-light letter-spacing text-small">
                            {props.title}
                        </Container>
                    </Container>

                    <Container className="card-value pt-4 text-x-large">
                        <span className="text-large pr-1">$</span>
                        {props.value}
                        <span className="text-medium pl-2 is-dark-text-light">
                            {props.view}
                        </span>
                    </Container>
                </Container>
            </Container>

        </>
    );

}

export default KPICard;