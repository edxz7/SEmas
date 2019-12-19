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

                    <Container className="card-value pt-4 ">
                    <table class="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>{props.item1}</td>
                                <td>{props.quantity1}</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>{props.items2}</td>
                                <td>{props.quantity2}</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>{props.items3}</td>
                                <td>{props.quantity3}</td>
                                </tr>
                            </tbody>
                            </table>
                    </Container>
                </Container>
            </Container>

        </>
    );

}

export default KPICard;