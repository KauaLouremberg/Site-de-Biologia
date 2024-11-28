import { Avatar, Button, Card, Divider, Form, Modal, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Header from "../Layout/Header/index";
import { useState } from "react";
const Dashboard = () => {
  const { Title } = Typography;
  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmZP0vezNCNez2OuzBZOCY0huNFqQqMzlfw&s";

  const [avatarVisible, setAvatarVisible] = useState(false);

  const showModalP = () => {
    setAvatarVisible(true);
  };

  // Função para fechar o modal
  const handleOkP = () => {
    setAvatarVisible(false);
  };

  const handleCancelP = () => {
    setAvatarVisible(false);
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", flex: "inline-block" }}>
        <Card
          className="Card-Centro"
          style={{
            marginTop: "50px",
            width: "120vh",
            marginLeft: "50px",
            height: "70vh",
            boxShadow: "initial",
            overflow: "auto",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Title level={2} style={{ marginTop: "-1px" }}>
              BEM-VINDO AOS BIOMAS DO BRASIL
            </Title>
            <Divider />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Title level={5} style={{ maxWidth: "110vh" }}>
                O Brasil é um país de imensa diversidade natural, e seus biomas
                são o coração pulsante de sua riqueza ecológica. Com um
                território vasto e variado, o Brasil abriga seis biomas
                distintos, cada um com suas características únicas, fauna e
                flora extraordinárias, e ecossistemas essenciais para a
                sustentabilidade do planeta.
              </Title>

              <p></p>

              <Title level={5} style={{ maxWidth: "110vh" }}>
                Neste site, convidamos você a explorar os fascinantes biomas
                brasileiros, entender sua importância para o equilíbrio
                ambiental global e aprender sobre os desafios que cada um
                enfrenta na era contemporânea. Do exuberante e tropical
                Amazônico às vastas Cerrado e Caatinga, passando pelas formas de
                vida adaptadas aos frios Pampas e Mata Atlântica, aqui você
                encontrará informações detalhadas sobre a geografia, os tipos de
                vegetação, a biodiversidade e a interação das populações humanas
                com esses ecossistemas.
              </Title>
              <p></p>
              <Title level={5} style={{ maxWidth: "110vh" }}>
                A preservação dos biomas brasileiros é fundamental para garantir
                a sobrevivência de milhares de espécies e para o controle de
                elementos vitais como o clima, os ciclos hidrológicos e a
                qualidade do solo. Ao explorar cada bioma, você também
                descobrirá como podemos contribuir para a conservação do meio
                ambiente e, assim, garantir um futuro mais sustentável.
              </Title>
            </Form.Item>
          </div>
        </Card>

        <Card
          className="Card-Direita"
          style={{
            marginTop: "50px",
            width: "65vh",
            marginLeft: "50px",
            marginRight: "50px",
            height: "70vh",
            boxShadow: "initial",
          }}
        >
          <Divider style={{ borderColor: "black" }}>
            <Title level={3} style={{ marginTop: "-5px" }}>
              VEJA MAIS
            </Title>
          </Divider>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Link to="/amazonia">
                <Button type="link">
                  <h2>Amazônia </h2>
                </Button>
              </Link>
            </Form.Item>
            <Divider style={{ marginTop: "-20px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Link to="/cerrado">
                <Button type="link">
                  <h2>Cerrado</h2>
                </Button>
              </Link>
            </Form.Item>
            <Divider style={{ marginTop: "-20px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Link to="/mataatlantica">
                <Button type="link">
                  <h2>Mata Atlântica </h2>
                </Button>
              </Link>
            </Form.Item>
            <Divider style={{ marginTop: "-20px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Link to="/caatinga">
                <Button type="link">
                  <h2>Caatinga</h2>
                </Button>
              </Link>
            </Form.Item>
            <Divider style={{ marginTop: "-20px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Link to="/pampa">
                <Button type="link">
                  <h2>Pampa</h2>
                </Button>
              </Link>
            </Form.Item>
            <Divider style={{ marginTop: "-20px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Link to="/pantanal">
                <Button type="link">
                  <h2>Pantanal</h2>
                </Button>
              </Link>
            </Form.Item>
          </div>

          <div style={{ display: "flex", flex: "inline-block" }}>
            <Form.Item
              style={{
                display: "inline-block",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <Button type="primary" onClick={showModalP} style={{}} block>
                Participantes
              </Button>
            </Form.Item>
          </div>

          <Modal
            title="Participantes"
            visible={avatarVisible}
            onOk={handleOkP}
            onCancel={handleCancelP}
            footer={null} // Desabilitar o botão padrão de OK
          >
            <p></p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Kauã Louremberg da Silva Lima
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Tiago Ramon Bandeira Sousa
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Carlos Kauan Cavalcante de
                Oliveira
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Arthur dos Santos Bezerra
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Kayo Fernando Lima Silva
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Samuel Victor Sales Vieira
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Avatar icon={<UserOutlined />} /> Luiz Felipe Bernardino de
                Oliveira
              </Form.Item>
            </div>
          </Modal>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
