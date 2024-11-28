import { Avatar, Button, Card, Divider, Form, Modal, Typography } from "antd";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/index.js";
import { useState } from "react";
const Pampa = () => {
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
        Dashboard &gt; Pampa
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
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Title level={2} style={{ marginTop: "-1px" }}>
              PAMPA
            </Title>
            <Avatar src={url} size={50} style={{ marginLeft: "900px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Title level={5} style={{ maxWidth: "110vh" }}>
                O Pampa é o bioma mais ao sul do Brasil, encontrado no estado do
                Rio Grande do Sul. Conhecido por suas vastas planícies e campos
                de pastagem, o Pampa é um bioma de clima temperado e é essencial
                para a agricultura e pecuária.
              </Title>

              <p></p>
              <Divider />

              <Title level={3} style={{ marginTop: "-1px" }}>
                Características principais:
              </Title>

              <p></p>

              <Title level={5} style={{ maxWidth: "110vh" }}>
                Vegetação: Predominantemente composta por campos e pradarias,
                com vegetação rasteira e arbustos dispersos. A vegetação é
                adaptada ao clima frio e seco.
                <p></p>
                Fauna: A fauna do Pampa inclui espécies como o veado-campeiro, a
                capivara e várias aves migratórias, como o andorinhão.
                <p></p>
                Clima: Temperado, com invernos rigorosos e verões moderados. As
                chuvas são bem distribuídas durante o ano, favorecendo o
                crescimento da vegetação.
              </Title>
              <p></p>
              <Title level={5} style={{ maxWidth: "110vh" }}>
                Importância: O Pampa é uma área estratégica para a produção
                agrícola e pecuária, além de ser fundamental para a preservação
                de espécies adaptadas ao frio e para a proteção do solo.
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
            title="Imagens da Pampa"
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
                alt="Pampa 1"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Pampa 2"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Pampa 3"
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

export default Pampa;
