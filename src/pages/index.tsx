import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import imagem1 from "./../css/themes/default/assets/images/3poltronas.jpg";
import imagem2 from "./../css/themes/default/assets/images/espera.jpg";
import imagem3 from "./../css/themes/default/assets/images/prorim.jpg";

import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <div className="background">
      <Segment vertical textAlign="center" className="masthead">
        <HeaderMenu
          Link={Link}
          pathname={props.location.pathname}
          items={menuItems}
          inverted
        />
        <Container text>
          <Header inverted as="h1">
            Nova Prorim
          </Header>
          <Header inverted as="h2">
            Hemodiálise Com Mais Conforto e Eficiência
          </Header>
          <Button primary size="huge">
            Fale conosco
          </Button>
        </Container>
      </Segment>
    </div>

    <Segment
      style={{
        backgroundColor: "#38acd2",
        margin: 0,
        padding: 50
      }}
    >
      <Container>
        <p className="headerSlogan">
          Estrutura de Alto Padrão para Hemodiálise, Com Capilar de Uso Único e
          Atendendo aos Principais Convênios.
        </p>
      </Container>
    </Segment>
    <Container
      style={{
        margin: 0,
        fontSize: 30,
        lineHeight: 50,
        minHeight: 100,
        textAlign: "center"
      }}
    >
      <p>
        A PRORIM investe em equipe especializada e estrutura de alto padrão,
        oferecendo mais conforto e segurança no tratamento.
      </p>
    </Container>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <img src={imagem1} alt="Modernidade"></img>
            <p>
              Máquinas de hemodiálise com tecnologia Japonesa, com poltronas
              confortáveis, reclináveis e com controle de inclinação ajustável
              para cada paciente, com mesa acessória para o maior conforto e
              comodidade dos pacientes.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={imagem2} alt="Conforto"></img>
            <p>
              Sala de espera climatizada e confortável para o atendimento
              individualizado dos pacientes.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={imagem3} alt="Tecologia"></img>

            <p>
              Acesso a rede Wifi de alta velocidade para maior comodidade e
              conforto dos pacientes durante o tratamento. Sistema individual c
              de som e imagem em alta definição para o melhor bem estar dos
              pacientes.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="convenios" inverted>
      <Container
        style={{
          padding: 20,
          textAlign: "center"
        }}
      >
        <h2>Aceitamos os Melhores Convênios:</h2>
        <Grid
          columns="3"
          textAlign="center"
          divided
          relaxed
          stackable
          className="container"
        >
          <p></p>
          <h3>Amil</h3>
          <h3>ACHESF</h3>
          <h3>Allianz</h3>
          <h3>Bradesco</h3>
          <h3>GEAP Saúde</h3>
          <h3>Caixa Seguro Saúde</h3>
          <h3>Hospital da Aeronáutica do Recife</h3>
          <h3>INFRAERO</h3>
          <h3>Postal Saúde(Correios)</h3>
          <h3>Saúde Recife</h3>
          <h3>Unimed Recife</h3>
          <h3>Sulamérica</h3>
          <h3>Gama Saúde</h3>
          <h3>Mediservice</h3>
          <h3>FUSEX</h3>
          <h3>Compesa</h3>
        </Grid>
      </Container>
    </Segment>

    <Container id="ondeestamos" style={{ padding: 50, marginBottom: 10 }}>
      <h1>Como Chegar:</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.463267462707!2d-34.89563758529543!3d-8.054135894200694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e850182b37%3A0xf13bb9027611676a!2sProrim%20Servi%C3%A7os%20M%C3%A9dicos%20Nefrol%C3%B3gicos!5e0!3m2!1spt-BR!2sus!4v1569461395410!5m2!1spt-BR!2sus"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </Container>
  </div>
);

export default withLayout(IndexPage);
