import { Avatar, Button, Card, Divider, Form, Modal, Typography } from "antd";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/index.js";
import { useState } from "react";
const Amazonia = () => {
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
        Dashboard &gt; Amazônia
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
              AMAZÔNIA
            </Title>
            <Avatar src={url} size={40} style={{ marginLeft: "10px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Title level={5} style={{ maxWidth: "110vh" }}>
                O Bioma Amazônico é o maior e mais importante bioma do Brasil,
                ocupando cerca de 49% do território nacional. Conhecida
                mundialmente como a "pulmão do planeta", a Amazônia é a maior
                floresta tropical do mundo e um dos ecossistemas mais
                biodiversos da Terra.
              </Title>

              <p></p>
              <Divider />
              <Title level={3} style={{ marginTop: "-1px" }}>
                Características principais:
              </Title>

              <p></p>
              <Title level={5} style={{ maxWidth: "110vh" }}>
                Vegetação: Predominantemente florestal, com árvores de grande
                porte, como a castanheira e a seringueira, além de uma vegetação
                densa e rica em epífitas (plantas que crescem sobre outras).
                <p></p>
                Fauna: O bioma abriga uma grande diversidade de animais, como
                jaguatiricas, onças-pintadas, macacos, e centenas de espécies de
                aves, além de uma infinidade de insetos e anfíbios.
                <p></p>
                Clima: Tropical úmido, com altas temperaturas durante o ano todo
                e chuvas frequentes, o que favorece o desenvolvimento de sua
                vegetação exuberante.
              </Title>
              <p></p>
              <Title level={5} style={{ maxWidth: "110vh" }}>
                Importância: A Amazônia regula o clima global, controla o ciclo
                da água e é um repositório fundamental para a biodiversidade.
                Sua preservação é crucial para o equilíbrio climático e para a
                vida em nosso planeta.
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
            title="Imagens da Amazônia"
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
                alt="Amazônia 1"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Amazônia 2"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Amazônia 3"
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
        </Card>
      </div>
    </div>
  );
};

export default Amazonia;
