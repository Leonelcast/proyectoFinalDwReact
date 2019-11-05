import React, { Component } from 'react';
import './Home.css';
import { Grid, Cell, Menu, MenuItem } from 'react-foundation';
import bannerHome from '../images/bannerHome.PNG';
import tesla from '../images/tesla.jpg';
import switc from '../images/switch.png';
import apple from '../images/apple.jpg';
import window from '../images/windows.png';
import uber from '../images/uber.png';
import add from '../images/Retro-Pizza-Advertising-Poster.jpg';

class Home extends Component {
    render() {
        return (

            <div className="Home">
                <Grid className="">
                    <Cell large={12}>
                        <img src={bannerHome} alt="breakingNews image" id="breakingNews" />
                    </Cell>
                </Grid>
                <Grid className="">
                    <Cell large={12}>
                        <div className="menu-basics-example">
                            <Menu>

                                <MenuItem><a id="white">Categoria</a></MenuItem>
                                <MenuItem><a id="white">Videojuegos</a></MenuItem>
                                <MenuItem><a id="white">Apple</a></MenuItem>
                                <MenuItem><a id="white">Carros</a></MenuItem>
                                <MenuItem><a id="white">Microsoft</a></MenuItem>
                            </Menu>

                        </div>
                    </Cell>
                </Grid>

                <Grid className="Destacadas">
                    <Cell large={12}>
                        <hr />
                        <h3>NOTICIAS DESTACADAS</h3>
                        <hr />
                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={1}>

                    </Cell>
                    <Cell large={2}>
                        <img src={tesla} alt="tesla" />
                    </Cell>
                    <Cell large={2}>
                        <img src={switc} alt="switch" />
                    </Cell>
                    <Cell large={2}>
                        <img src={apple} alt="apple" />
                    </Cell>
                    <Cell large={2}>
                        <img src={window} alt="windows" />
                    </Cell>
                    <Cell large={2}>
                        <img src={uber} alt="uber" />
                    </Cell>
                    <Cell large={1}>

                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={12}>
                        <hr />
                        <h3>LISTADO CATEGORIAS</h3>
                        <hr />
                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={4}>

                    </Cell>
                    <Cell large={4}>
                        <div class="card" id="listados">
                            <div class="card-section">
                                <ul>
                                    <a href="">
                                        <li>Carros</li>
                                    </a>
                                    <a href="">
                                        <li>Videojuegos</li>
                                    </a>
                                    <a href="">
                                        <li>Apple</li>
                                    </a>
                                    <a href="">
                                        <li>Microsoft</li>
                                    </a>
                                    <a href="">
                                        <li>Computadoras</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </Cell>
                    <Cell large={4}>

                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={12}>
                        <hr />
                        <h3>LISTADO ARTICULOS</h3>
                        <hr />
                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={4}>

                    </Cell>
                    <Cell large={4}>
                        <div class="card">
                            <div class="card-section" id="listados">
                                <ul>
                                    <a href="">
                                        <li>Elon Musk y Tesla ponen un Supercharger en el Área 51</li>
                                    </a>
                                    <a href="">
                                        <li>Nintendo Switch Lite ya a la venta: en qué se diferencia de la Nintendo Switch</li>
                                    </a>
                                    <a href="">
                                        <li>Apple lanza una oleada de actualizaciones para los iPhone, Mac y Apple Watch más antiguos</li>
                                    </a>
                                    <a href="">
                                        <li>La revolución tecnológica necesita ética o nos esclavizará</li>
                                    </a>
                                    <a href="">
                                        <li>La agricultura 4.0: tecnología sustentable para afrontar el futuro</li>
                                    </a>
                                    <a href="">
                                        <li>Los ‘wearables’ que buscarían confundir el reconocimiento facial</li>
                                    </a>
                                    <a href="">
                                        <li>Deutsche Bank pondrá en marcha una división de tecnología para mejorar su transformación digital
                    </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </Cell>
                    <Cell large={4}>

                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={12}>
                        <hr />
                        <h3>ULTIMOS 10 ARTICULOS</h3>

                        <hr />
                    </Cell>
                </Grid>
                <Grid className="Destacadas">
                    <Cell large={2}>
                        <center>
                            <h6>- Advertisement -</h6>
                        </center>
                        <img src={add} alt="tesla" />
                    </Cell>
                    <Cell large={2}>
                        <img src={tesla} alt="tesla" />
                    </Cell>
                    <Cell large={2}>
                        <img src={switc} alt="switch" />
                    </Cell>
                    <Cell large={2}>
                        <img src={apple} alt="apple" />
                    </Cell>
                    <Cell large={2}>
                        <img src={window} alt="windows" />
                    </Cell>
                    <Cell large={2}>
                        <img src={uber} alt="uber" />
                    </Cell>

                </Grid>
                <br />
                <Grid className="Destacadas">
                    <Cell large={2}>
                        <img src={uber} alt="uber" />
                    </Cell>
                    <Cell large={2}>
                        <img src={tesla} alt="tesla" />
                    </Cell>
                    <Cell large={2}>
                        <img src={switc} alt="switch" />
                    </Cell>
                    <Cell large={2}>
                        <img src={apple} alt="apple" />
                    </Cell>
                    <Cell large={2}>
                        <img src={window} alt="windows" />
                    </Cell>
                    <Cell large={2}>
                        <center>
                            <h6>- Advertisement -</h6>
                        </center>
                        <img src={add} alt="tesla" />
                    </Cell>


                </Grid>
                <br />
            </div>

        )
    }
}

export default Home;