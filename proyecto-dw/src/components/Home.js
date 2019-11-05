import React, { Component } from 'react';
import './Home.css';
import { Grid, Cell, Menu, MenuItem } from 'react-foundation';
import area51 from '../images/Area51.png';
import TweetEmbed from 'react-tweet-embed';
import profilePic from '../images/User man.png';
import add from '../images/Retro-Pizza-Advertising-Poster.jpg'

class Home extends Component {
    render() {
        return (

            <div className="Home">

                <Grid className="">

                    <Cell large={1}>

                    </Cell>
                    <Cell large={10}>
                        <br></br>
                        <center>
                            <h1 id="articleTitle">Elon Musk y Tesla ponen un Supercharger en el Área 51</h1>
                        </center>
                    </Cell>
                    <Cell large={1}>

                    </Cell>
                </Grid>
                <Grid className="">

                    <Cell large={1}>

                    </Cell>
                    <Cell large={10}>

                        <hr />
                        <h6 id="subtitulo">Tesla se ha sumado al asalto al Área 51 poniendo un Supercharger temporal en la zona. Los OVNIS no
          tendrán problemas para recargar sus baterías.</h6>
                        <hr />
                    </Cell>
                    <Cell large={1}>

                    </Cell>
                </Grid>
                <Grid className="">
                    <Cell large={12}>
                        <img src={area51} alt="area51" />
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
                <Grid className="">
                    <Cell large={2}>

                    </Cell>
                    <Cell large={6}>
                        <br></br>
                        <p id="descripcion">Una gran cantidad de personas se han dado cita en las inmediaciones del Área 51 con el
              objetivo de asaltar la
              misteriosa zona militar. Aunque seguramente será un suceso que no trascenderá más allá de una aglomeración con
              fines de diversión, no deja de ser interesante la gran expectación que ha causado en todo internet,
              particularmente en redes sociales. De hecho, algunas compañías importantes se han sumado a la causa; la última
          en hacerlo ha sido Tesla.<br></br>
                            <br></br>
                            Y es que los dirigidos por Elon Musk han instalado un Supercharger temporal en el
                            Área 51, ya sea para abastecer de energía a los coches eléctricos de los visitantes o las naves espaciales que
                            presuntamente se encuentran en la instalación. Por medio de su cuenta de Twitter, la firma automotriz
          compartió la ubicación del cargador con el signo de un OVNI.</p>
                        <br></br>
                        <center>
                            <TweetEmbed id='1175048579829944320' options={{ theme: 'white' }} />
                        </center>
                        <p>
                            Eso sí, el cargador únicamente estará disponible por hoy. "Cualquiera que hoy conduzca un OVNI fuera del Área
                            51 puede recargarse en nuestro Supercharger cercano en Beatty. Solo un día", señala su mensaje. Seguramente en
                            las próximas los asistentes comenzarán a capturar y compartir fotos del Supercargador. Un gran movimiento de
                            marketing por parte de Tesla, sin duda.
          <br></br>
                            Todavía es temprano en Nevada, así que durante el transcurso del día muy probablemente surgirán más
                            situaciones curiosas entorno al asalto del Área 51. Es una oportunidad única para que las marcas se hagan
                            notar de alguna manera. Gracias a Tesla las naves espaciales eléctricas ya no tendrán qué preocuparse por su
          batería.</p>
                        <section>
                            <h5>Comentarios (1)</h5>

                            <div class="card">
                                <div class="card-section">

                                    <div class="commentario">
                                        <img src={profilePic} alt="ProfilePic" id="user" />
                                        <h6><a href="">Dylan Rodas</a></h6>
                                        <p> 8 de diciembre, 2019</p>
                                        <p>Que vivan los aliens y Elon Musk</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-section">
                                    <h5>Agrega un comentario</h5>
                                    <label>
                                        <textarea id="descripcionNoticia" type="text"></textarea>
                                    </label>
                                    <button class="button expanded">Publicar</button>
                                </div>
                            </div>
                        </section>
                    </Cell>
                    <Cell large={1}>

</Cell>
                    <Cell large={3}>
                        <br></br>
                        <section class="CategorySidebar">
                        <center>
                            <h6>- Advertisement -</h6>
                        </center>
                        <center>
                            <img src={add} alt="Add" />
                        </center>
                        <br></br>
                        <div class="CategoryRecentPosts">
                            <h5>
                                <t>Recent Posts</t>
                            </h5>
                            <br></br>
                            <a href="#0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a><br></br><br></br>
                            <a href="#0">Aenean commodo ligula eget dolor.</a><br></br><br></br>
                            <a href="#0">Aenean massa.</a><br></br><br></br>
                            <a href="#0">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.</a><br></br><br></br>
                            <a href="#0">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</a>
                        </div>
                        <br></br>
                            <div class="CategorySubscribe">
                                <h5>
                                    <t>Subscription</t>
                                </h5>
                                <p>To be updated with all the latest news, offers and special announcements.</p>
                                <form>
                                    <label>Your email address:
                <input type="text" placeholder="example123@example.com" aria-describedby="exampleHelpText"></input>
              </label>
            </form>
                                    <a class="expanded button" href="#0">Subscribe</a>
          </div>
         </section> 

                            </Cell>
                </Grid>



                        <br />
            </div>

                    )
                }
            }
            
export default Home;