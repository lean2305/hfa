import { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './menu.css';

// Este componente adiciona quadrados com imagens
class Quadrado extends Component {
    render() {
        return (
            // Aqui entra todas as características do objeto
            <div className={this.props.type}>
                a
            </div>
        );
    }
}


// Página que será apresentada no final
function MenuInicial() {
    return (
        <div className="MenuInicial">
            <div className="menuEsq">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Quadrado type="one" />
                        </Col>
                        <Col sm={4}>
                            <Quadrado type="two" />
                        </Col>
                        <Col sm={4}>
                            <Quadrado type="three" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Quadrado type="four" />
                        </Col>
                        <Col sm={8}>
                            <Quadrado type="five" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="menuDir">
                
            </div>
        </div>
    );
}

export default MenuInicial;