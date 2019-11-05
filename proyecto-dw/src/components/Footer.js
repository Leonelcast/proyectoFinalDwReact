import React, { Component } from 'react';
import './Footer.css';
import { Grid, Cell } from 'react-foundation';

class Footer extends Component {
    render() {
        return (

            <div className="footer">
                <Grid className="Footer">
                    <Cell large={4}>
                        <b>
                            <h5>LOCATION</h5>
                        </b>
                        <p>KM 21.5 Carretera a El Salvador, Universidad del Istmo de Guatemala.</p>
                    </Cell>
                    <Cell large={4}>
                        <b>
                            <h5>AROUND THE WEB</h5>
                        </b>

                    </Cell>
                    <Cell large={4}>
                        <b>
                            <h5>ABOUT US</h5>
                        </b>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa.</p>
                        <p>Contact us: <a href="#0" id="Fcontact">info@publicnews.com</a></p>
                    </Cell>
                </Grid>
                <Grid className="subFooter">
                    <Cell large={12}>
                    <p>Copyright &#169; Public News 2019</p>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Footer;