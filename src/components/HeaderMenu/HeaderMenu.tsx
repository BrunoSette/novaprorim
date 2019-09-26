import * as React from "react";
import { connect } from "react-redux";
import { Link } from "gatsby";

import { Container, Menu } from "semantic-ui-react";

export const HeaderMenu = ({ inverted }) => (
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Link className="link" to="#ondeestamos">
        Como Chegar
      </Link>
      <Link className="link" to="#convenios">
        Convênios
      </Link>
      <Link className="link" to="#fale">
        Fale Conosco
      </Link>
    </Menu>
  </Container>
);

export default connect()(HeaderMenu);
