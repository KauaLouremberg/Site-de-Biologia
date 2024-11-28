import { Avatar, Button, Card, Divider, Form, Modal, Typography } from "antd";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/index.js";
import { useState } from "react";
const Caatinga = () => {
  const { Title } = Typography;
  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmZP0vezNCNez2OuzBZOCY0huNFqQqMzlfw&s";

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Função para abrir o modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Função para fechar o modal
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header />
      <Title
        level={5}
        style={{ marginLeft: "70px", position: "fixed", marginTop: "20px" }}
      >
        Dashboard &gt; Caatinga
      </Title>
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
              CAATINGA
            </Title>
            <Avatar src={url} size={40} style={{ marginLeft: "10px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Title level={5} style={{ maxWidth: "110vh" }}>
                A Caatinga é um bioma exclusivamente brasileiro, caracterizado
                por sua vegetação xerófita adaptada ao clima semiárido.
                Encontrada principalmente no Nordeste, a Caatinga é o bioma da
                seca, mas sua biodiversidade e resistência são impressionantes.
              </Title>

              <p></p>
              <Divider />
              <Title level={3} style={{ marginTop: "-1px" }}>
                Características principais:
              </Title>

              <p></p>

              <Title level={5} style={{ maxWidth: "110vh" }}>
                Vegetação: Arbustos e árvores de pequeno porte, com plantas
                adaptadas à escassez de água. Espécies como o mandacaru, a cacto
                e o juazeiro são típicas da região.
                <p></p>
                Fauna: A Caatinga abriga animais como o tatu-bola, a raposa, o
                macaco-prego e diversas espécies de répteis e aves que se
                adaptaram ao ambiente árido.
                <p></p>
                Clima: Semiárido, com longos períodos de seca e chuvas
                irregulares, o que limita a vegetação e exige que muitas plantas
                e animais possuam adaptações especiais para sobreviver.
              </Title>
              <p></p>
              <Title level={5} style={{ maxWidth: "110vh" }}>
                Importância: Embora o clima da Caatinga seja desafiador, o bioma
                desempenha um papel crucial no ciclo da água e na preservação de
                espécies que são únicas e extremamente adaptadas ao clima seco.
              </Title>
            </Form.Item>
          </div>

          <Button
            type="primary"
            onClick={showModal}
            style={{ marginTop: "20px", backgroundColor: "#FAA958" }}
            block
          >
            Ver Imagens do Bioma
          </Button>

          {/* Modal com as imagens */}
          <Modal
            title="Imagens da Caatinga"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null} // Desabilitar o botão padrão de OK
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Caatinga 1"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Caatinga 2"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Caatinga 3"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
            </div>
          </Modal>
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
              <Link to="/">
                <Button type="link">
                  <h2>Dashboard</h2>
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
        </Card>
      </div>
    </div>
  );
};

export default Caatinga;
