import {
  Container,
  Content,
  Left,
  Right,
  Title,
  Description,
  Form,
  Input,
  Button,
  Terms,
} from "./styles";

export const Newsletter = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Title>Inscreva-se na nossa newsletter</Title>
          <Description>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos <br /> da Econverse.
          </Description>
        </Left>

        <Right>
          <Form>
            <Input placeholder="Digite seu nome" />
            <Input placeholder="Digite seu e-mail" />
            <Button>INSCREVER</Button>
          </Form>

          <Terms>
            <input type="checkbox" />
            <span>Aceito os termos e condições</span>
          </Terms>
        </Right>
      </Content>
    </Container>
  );
};
