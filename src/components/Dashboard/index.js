import { Avatar, Button, Card, Divider, Form, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Header from '../Layout/Header/index';
const Dashboard = () => {

    const { Title } = Typography;

return (
    
<div>
    <Header/>
<div style={{display: 'flex', flex: 'inline-block'}}>
    <Card 
        className='Card-Centro' 
        style={{
            marginTop: '50px', 
            width: '120vh',  
            marginLeft: "50px",
            height: "70vh",
            boxShadow: 'initial'
            }}>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        
        <Title level={2} style={{marginTop: '-1px'}}>
        BEM-VINDO AOS BIOMAS DO BRASIL
        </Title>
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        <Avatar icon={<UserOutlined />} />        

        </Form.Item>

        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        <Typography style={{maxWidth: '110vh'}}>
        O Brasil é um país de extraordinária riqueza natural, 
        lar de alguns dos ecossistemas mais diversos e fascinantes do planeta. 
        Seus seis biomas — Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal — 
        revelam paisagens únicas e abrigam uma biodiversidade inigualável. Cada um deles possui 
        características próprias, que vão desde florestas densas e rios caudalosos até 
        vastas planícies e vegetações adaptadas ao clima semiárido.
        </Typography> 

        <p></p>

        <Typography style={{maxWidth: '110vh'}}>
        Neste site, você encontrará informações detalhadas sobre os biomas brasileiros: 
        sua localização, biodiversidade, importância ecológica e os desafios 
        para sua preservação. Nosso objetivo é despertar a consciência ambiental e 
        valorizar as riquezas naturais que fazem do Brasil um país tão especial. 
        Explore, aprenda e inspire-se a proteger esses tesouros naturais!    
        </Typography>     

        </Form.Item>

    </div>
    </Card>

    <Card 
        className='Card-Direita' 
        style={{

            marginTop: '50px', 
            width: '65vh',  
            marginLeft: "50px",
            marginRight: "50px",
            height: "70vh",
            boxShadow: 'initial'
            }}>
    <Divider style={{borderColor: 'black'}}>
        <Title level={3} style={{marginTop: "-5px"}}>
            VEJA MAIS
        </Title>
    </Divider>
    
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
            
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            <Button type='link'><h2>Amazônia </h2></Button>
        </Form.Item>
        <Divider style={{marginTop: '-20px', borderColor: 'black'}} />
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            <Button type='link'><h2>Cerrado</h2></Button>
        </Form.Item>
        <Divider style={{marginTop: '-20px', borderColor: 'black'}} />
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            <Button type='link'><h2>Mata Atlântica </h2></Button>
        </Form.Item>
        <Divider style={{marginTop: '-20px', borderColor: 'black'}} />
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            <Button type='link'><h2>Caatinga</h2></Button>
        </Form.Item>
        <Divider style={{marginTop: '-20px', borderColor: 'black'}} />
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            <Button type='link'><h2>Pampa</h2></Button>
        </Form.Item>
        <Divider style={{marginTop: '-20px', borderColor: 'black'}} />
        <Form.Item style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            <Button type='link'><h2>Pantanal</h2></Button>
        </Form.Item>
    </div>
    </Card>

    </div>
    </div>
);

};

export default Dashboard;