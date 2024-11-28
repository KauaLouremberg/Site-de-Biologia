import { Avatar, Button, Card, Divider, Form, Modal, Typography } from "antd";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/index.js";
import { useState } from "react";
const Pantanal = () => {
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
        Dashboard &gt; Pantanal
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
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Title level={2} style={{ marginTop: "-1px" }}>
              PANTANAL
            </Title>
            <Avatar src={url} size={50} style={{ marginLeft: "850px" }} />
            <Form.Item
              style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
            >
              <Title level={5} style={{ maxWidth: "110vh" }}>
                O Pantanal é o maior sistema de áreas úmidas do planeta e está
                localizado principalmente no estado de Mato Grosso e Mato Grosso
                do Sul. É uma das regiões mais biodiversas do Brasil, com uma
                grande variedade de fauna e flora adaptadas ao seu ambiente
                inundado.
              </Title>

              <p></p>
              <Divider />

              <Title level={3} style={{ marginTop: "-1px" }}>
                Características principais:
              </Title>

              <p></p>

              <Title level={5} style={{ maxWidth: "110vh" }}>
                Vegetação: O Pantanal possui uma vegetação típica de áreas
                alagadas, com grandes extensões de campos inundáveis, pastagens
                e florestas. Durante a estação chuvosa, vastas áreas ficam
                submersas, criando um ambiente único.
                <p></p>
                Fauna: O Pantanal abriga uma rica fauna, com destaque para o
                jacaré-do-pantanal, a arara-azul, o tuiuiú e o capivara. A
                região é um importante ponto de migração de aves.
                <p></p>
                Clima: Tropical com uma estação chuvosa bem definida. Durante a
                cheia, as águas cobrem grande parte da planície, criando um
                ecossistema de várzea.
              </Title>
              <p></p>
              <Title level={5} style={{ maxWidth: "110vh" }}>
                Importância: O Pantanal desempenha um papel vital no equilíbrio
                dos ecossistemas aquáticos e na preservação de várias espécies
                que só existem nesse bioma. Além disso, é crucial para a
                regulação do ciclo da água e para a estabilidade climática
                regional.
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
            title="Imagens do Pantanal"
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
                alt="Pantanal 1"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD8QAAIBAwMCAwYEAwcDBAMAAAECAwAEEQUSIQYxE0FRFCJhcYGRFTKhwSNCsTNictHh8PFSgrJjkqLSBxZV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgIBBAICAgIDAAAAAAAAAAECERIDITFRE0EiYQQUBYEyUnH/2gAMAwEAAhEDEQA/ANsDTwagDU7dXm5HZgTg04GoA1ODGlkPAn3V3dUG6ugnFLIrEnBroNQg07NLIPGS7qW6os13NGQYEm6u7qipZozHgSbqW6o80s1L1BqBJupFqjzSzSzKUB5NczTM1zNS9QpaY/NczTd1LdWUtU0WmdpYrmRXd3AODz8KwlrFrTo4VrhSnZzxT1Ga5dT8miqSItlNKVbEefKuNHgdq5f34dhkikUprCrDrUTYroh+SpFYpkJFKnGlXR5g8ZCGHrXdw9aza9TaSx2rfxE+gJro6o0gNtOoQ/Pk17PikednDs0oYetdDVlrXq3S7m7aBJ9qhCwlf3VbHkM0256y0i38QC6aRk7CNCQ3yPal4ZDzh2a0GnB/jWEsv/yBp00u24SW2UnAZyCMfH09KNTdRadD4Ze9hCyLuVgcgj50npSQ1OD9mi3GuhqFLdh0EiOpjIyH3Ag/WoZ9ZtLdlSa5jVm7DdnOe1T45dF3HsOBvjXd49aHeOw74PxpCZj29OPjU4SKSQR3j1ru8etCbm/jtE33LhEzjJ9T2pqanbtCs3tESow4LsB+lLxyK+PthjePWlu9KBHXLBZzA15D4gYKV3eZ7f1FTrqELTCJZ4zJjO0OCcfKpenLoaxC+a5uocLgk8Nn5GuiZz2B+FQ4SLSQQJrmaHm4ZV3HOPXyFUNW1hrOF2SW3iCYzJO/GfQKOScfEVHim+EVcY7sO7s9qW41gLfrwpI/tSxSx7TsaHKFj8iTirlp15p8iym5zDtxsCkuX9R2Hap1PxdZb0KOvpP2bTdxk9vnWR1bqW7N7Lb2BEUcR2mUqpLkHyye30/Sn3XWWlLZTukgmIX3UzjdWIn17TUgZ7KwWC6Pc8uOe/n5eX34o0Pxpt3KItXVguGbzTOob8T+DqEUZGQA29UO3tuwT61soArAEEEEZyK8Wi1jT4gjJJI1wQGebwwSGPkMnPFbC167SwtIoZIY7iYAACFztAxxk4715n8n/G6k2npolSUlsz0iCJT3xXJ41RSSRj1rI6N1y8z5ubaFYvRCSw+9Aer+p555Z/Zp2W3cYC+g+VRH8DRektOvmR4dRSuXBsL3U9PjnEDXluJT/J4gzVb223YkLPG2O4Vgf6V4ze34dQhSNiOd4XBoab2RWDK21hyCOMGu78f+BUaeYv2lDhHqlz11p9vcSQvb3O6NipyAP6mlXlEk73DmWZ2Z27ljkmu16y/i9KjF/nTKqRXm4go3wINPNtdMcsv+/pV4WeovuEVupZe/lgfenvFPbqGKKZMZIAJH9Oa9HM8vB9FLwLhh2HHlxio2gulzgd++081b8W4IwI1z3zyBXHlugPeiCr67P9aMmKn0V44rj+YD6kU+SNyFXcgH+Knobh925RnHYLU8llfGCOVbaQo4JHuHyNF9lKLIUNykTRi42xnkqJDtJ+VOjafHvyxlT8TRWw6evbuFnj8PxAAVjByT9KZeaRdWMatdoyZ9V7fSpzReM6Kk13dTQxwzXrNHEMRrvOFHwqzZ6tqFpBHDb37LGjbgDlsUTbRtPk02KVJJoZQxEjTxFVbv25qTS9M0S6t/DubqZJgSTkKFK+gGaXkjRahO9mZ+e4mnleW5vnkkc5LOzE1Du8QnfciRhwN2SfuaLX+g6fFOy296HyQVDKMnn51VbSkQJiRm3Hglf8uafkQnCdlLxCMq8zNnnBXIp2/tmXkdsgmrtzpfgsVFxGTxkKwP6VA1pCrgMX8M922f0ozROMrJLTULu1Yvb30sbHAOx2Gcds1JLq+pTS+JJqdwT2wJGH9KbBbaf4xWRrkxeqKmSfPgmrDWmkrOctelMHjw0z2/xY71LlEpRkU5Lu8lgFv7dL4GSfC3tg5759frVWRGkxmXIHwNEGtrEW6+GJDPk7lZQEx5YIOc9vKmz2UaNmMFkP8AM3u01NA4yB6xFefFAHyNNWLkkzDPfODV1rUD3cKPr/pTDY497aNvrn/SnmuyVFlXw895gfmKb7NnGJ12+gFXPY89lB+RNcFqwIBIAozHTK0duRyZhwfSrUTCPtKCT3yuafFa5OMxhvIEHJp8kCK+GiRT6MSaiTTNI2ieC8dGAE/6VDJds/JnzjjtS8ONVztQn02movADHAjX5CsFp6eV0bS1ptVZVuEWU7lmA+lVWtwe81EPZlBIwAc9qXsqnghR9a6ItI55NsGi3AHE1KiDWaA/y/c0qvNGe56NJqNkXja6tW01iD70ogiJ9fzKTVK/6jtpXVBc3khiXaDDFCwPPB5X/SstZLPNN4f4Yl08zesi458yMY5rW3Vi1vp0MF308pmGdssMLSLGM8j84LN6HIHb0Nc7VcnSpOQOh1lbq4DpbTyTAkAwxFHxjv8AwyB9cVUkLWcxk1awkkL5CJdOwbjz5GTU8ujeNgQW2qrErbhEtjyfqZe9VdUtrW01D2a3025jON2y7IDdv7mePrRYnaLmlpp1+8sMWksbhhiOOJixBH835fy88nNXX0fWbVkmv51hhUFVRpSC390Y2ihujm5muAllBbwTt7q+I5QsO+C27JrSSWN/cxiB7QK443tqZxn1A5+3NKRUdwBbWEhupZILW5RCpLxxKWxyCBgN+XOOMGrPtlrakQXunWXtA/NNICTng5w6nb+1c1i0urNDZXcOqzrIh3Kt14yd/TwgPpmq9lZQo0cY0PUVMoHvmfaEzj0j4qeR7kM09vcyP78gUHDtHHuVT6571ZvZIYYoxFJbPAIhs8OVYWB787ScfI1cn0zUY/4OmQTW0QGMvfFzn1GG247eVQ2/Ttzass2pwymIuGknhJlcefKAkEevFO0FMowSG+WKMSNcLuAEC4I48slgSfiKmLLZkJ+FT+GjEsP4igt2xzuBqW5fp26jMZefcQANlpErNx86een7CSNTBHqEUT8jbZxt257h8+velYkC9Z9l3pHFZx2vG/YUjVwMcZKqD96bpkkcCytNbxyHZ7hNyYwjevGM/ej2nvbWDJEI1liDbIxNpOGB8uz5Jo/Z+y6rbMlrbWa34GWeSw2qR/h3fvScmvRSjk+Tz+7km1CUS7Wkc+7v3O/PkoJYn6VyaK5tg3jWSoUGGZomOP1x9q9Is9Ivba4ifwtK2q4LbIGVgPhjzonqKxXEfsl3AJIpRkoCxzjnyXv2qHrfRS0LXJ5DFErjdJIsR7qpQ8/bmkqo7YjgMjef5mx8Rx/vNbebQ9FunKx6Tfp5B1Z1B/y706Sx1bRLVpLe4srG3XgPLdF0TPl70YP61XkEtGuTIWdhdEMfZpuOeZPCHzyRVe9ixPs2iMrxvZvEyR55862ltq14sb+19RW7PkjFs8TDHzbBz38jVu9udOazN1Lq0syN/ZMzIVZvTcFOByOfjUeRp7ovwprZmCSxvrm3WRY96IvCiVS4A/uZ3fpVZklYmN2WMA+8rNgA/U1qZNSvA7i3urJbVAAy+IsmPmxUeeecVXjs7i4Z3n1G1UMQ6mJOG8+DsIFaZtcmT0+jOOsUfn353eXHnj96Y6zRZVoiuecsuOPhmjV1b3Mjq8r3DKCYwfEVlYDnj3Bjv6eVEo+mNWUbl02Pcf5ZoUZcY/6tw/8AGlLVjFWwjpuTM9Z2LXQU+Jagdx4kwTHzJqe+06Cw4kvYHkKghY13g5Gcg0Tm028dGU2tqJC3vKCgUD5hv0pw0rUlyRosdwEOVZCr7D5YG48Vm9RXdleN1VGdVEkZ/eRSi5YEqN368/IVADtYhAiAjO0gjj6itY9hfSWzLcaLcm4Y+5LbhIto4yOxPrVK60SNEM02m6lb4UeJK8y8+XPuedaR1Itky0mgMoQD3prLP99lBHzyK7UcoWJ9tvuaPyO4f/WuVraMsQ77HeXtrDLZWdywwds0NqYvhj3CFI+YzxTUt9etuZNGmccbW2yMQO3YOa16dLI8kRvNRvrlYwVCFgB9wM/GiFhottp1xJPDLcMXXBV5mZfsfP402xpbmOub/qG+hMd7Z3CRI24NFaTqwA+PA8qGezxS20twNQgN2nCw3cqHcfhlj2GO9eqPGkqGORAyMMMGHcfGgTdK9OK3Nlbrj+Uvj9M0k/oprsxdvb6jqFwy2en6SZFGSltMinHrhX+VarQ9JuoEjkudBtY7mM+63tZP1xijOn6bpOnzGWyhtopSu0suNxHpn7VLd6xp1i6x3N3Ekjdl3c/8dqljjS9lSWDqVhuXULBPPi2Y4/X6UP1eO/NrELy3h1VgW4hWaApxz+XOSfp2rTWdzDeQLPbSLLGezL2NWCcZ7ipSou7PKpdPv5UEkOlX1rb54RnnON3qSSe/piruhxTSNItut1Ggb+LBapNlkGRnezDn/Ot1farY2Ec0lxcxqYl3uuckDOOw+NY8dZapPM6pFAEU+6AV5XyOWI5rT5P0RsmGY+i9PQsTcXewg7EWQqEJ8/XNcbovTW7TXJbOQXlYjPx5oUeqtTWLOFDFsAyLFjjuOHqld9b6lJceHZSW4A/MNqlh8sE1OE7DOHRS1bTr3S7iVLhn2K3FwwlRCfg53D9fpV3Turb6xgRIY7Wa1U4z4rscn+83f6VbtNY1W7K+2X0ltCRl0W1Dkj5g1BqkXTV0zHUdYuy+Ds3wAbAfIYX5VVf7E37iydevZSxVbaDjyaQ4+4BqzJ1c0kMJt7XUJ52G6SO1G5E9OQmTQ+1bQbWAMs2q3caqUSRrhUVvTC7gR6dvL0qBLxxCzaBbm3aItHcSRyAtNjAVmxnzJ4B86nxx9IryS9s1XtOvBzKNNuGRU349pB3fALtzn4VxLq61eURX8d5pAVCS3jRqrnIwCD72ef0rNRx9VXUYMltck5OXSXaCPgDznyz2psPQmqXUc010sSSswIElwcnHxCn1PnSenHllLUfBqfwi238dQzK/qJ48/wC/pR6GGIWqwmQSqF2liwy3zx+1CLLpXTYLLwZIQWdMSMWL84wcFucU2Lo3SYgAiyBR5bhWLhF8s2UmuEVb+G3064aK06bubiIYbxoHJDH5Bs8fGqMeqa1bFfZdFl9ml/kazk3g+YJLH5VNrPS8kJMulm8LLgqiLGMnHrlTQJtO1aYlL3T7tZHJ3Zi3huPP+Jg8+VUtNNCcpIJ32sdRTW7wt05dLDKO8cWCv1R8jsKoW0F2YJJLjSdTO1tpSCd2kHzQncKIaVpOq2t6lylhdzRKg2xSGOIq+efdD4I7Y5ovBJqNnPcXUeg7GnO6Y+IiA4+O84+1S0o7RSDn/Ik0HRILe2SYxMBMA7QXas7RnHb3mODzQnXtHuW1J5rLSZthG0SWt94eRgd04H2putdSSTWsVzpmqW8TGL+Jaxp4m5s8kScD/ih1r1NqM8xiiuy8pBITbJz9NhrGGhPLN0XLV018UDtVtpNLRJ7+01KGMv7oMwYH4ZUHH1oh03rtlYXjmdXSKUnJfUUkRB3GEJH+lQa6/UOo2yw3EEr2/iDDJATsbgDuFPn8vWgF9pVzY33sc1g0skWCWRWy4PPKqTt+Vdi01KNSMHNxdxN7LrPSE8hluXsS78gtaq5x88HNKsxbXmt28Cw2s1zbwoMLG0UnA+x/rXKz/WL/AGfovzdPdRSTOrXSXIA3B5nbk+nDYqKLp7qNn2GPT4cdpOWH0ohJ1p7yrHp0ill3J488a+eMkBjxVdde1fWRcWNhb28UrAhJo7n8uMZOQDXZRxWiSw6X1F4pl1S8miDkEm3nCqPpg1ah6QgLERazI5HuldkTkfcUJt+m+oL6EJq5tJI1Y7VuZ3kbHOO3Hz5q1F0fqEluY7r8JiYMAhjgZ8Lx55X7UV9lWV+odC07TreSZ7m6uL1VHhRiMKuc/wA2xe3BoXDPdukc76ZfswTaD7RsOBjgKQGx/lWkj6GENwk9tqMsG7PjrGu3xAe4Bz7oxkfLzovH07ZRgLFd3CMD/NIGOPTn96aoT3MhZGUoVh06+VWGdr3joBxjHlUyRauHPsm+0A53S6hKT88DI+lbB9IsUh927ZGIyHYpj6Cgdy+kHfCl5qVzKhxutoUwpHlnAH/FJqIBi2XRQiXF5JaNeGARzzPxv49489+fOpI+menpUWRdKsZVblWMQbg/H0rLywadcujz2vUDgd1M6IrY9QHH9KO6f1HZQ+DZta3FpEqrHH4u085wPysf1qX9FKaYQGl6VFJHZJo0HhbS4K2y+Gh7ferNxp1rJaPbpbQKCDtHhKQD8iKtK4P5WUn4GsN1tqWq2upiNYr78P2A77QHJPmMgZpU2Oxw6Jlurktem3ijjkAVoYkHtCdySFAwfKrLdFtbafMun3Tm5DB4AygBQMjbz34Pf4CsT+I6R4gkvF1XxwQTIw5z8yc1fhk0TUTcXKS3ryqokZ5IXY47dxnPenTI/okk0K+3lr/RNSlk8zE8OD9sVethqFqgitdN6ihj77UmwP64oQus2sMmNPPUBYD+QsB+p/att0RdaleWVwdVjukVZAITOPfIxnyxQ7Gkn6BiSdUux9kh1ZcDhrieEr/8gTW0043RsYvxDw/ato8UR/lz8KA9U9U/grWkKQqkk+7DXOVAC49PnQyLqnUbkkwXWjNxnAck4HzqXG/Raaibl5VQbncKPVjiqz6vpqfm1C0BI4zOvrj1rzjXL+61f2a5urzS42hVtsYlDd8cHORVfTrh7vULXT7mWxkEz7I2ihV8N8ge2M0sEPNnqS6pp7iR1vIGSLBkYSjCemTnirKMrIGVlKsNwIOQa8+fonU5NZa4M9oLONl8NOQHUHOGVV+fma1SaLaxB2kYQljkGFygHHpwPLyqHpotS7IuqNJv79oJLG6ljEasGhBIV/Qkhgawl7p+uwM0M1sblDxIVFwygYyDndz6V6GrT28eyzniumz+SR8Egd8H/Yq34rzI6z2reGykEbgS2fLv/v1px2CSUjxqWMxx5aaK3KLgRQln5+OWOPP7UY0q0tGghvX1KzjuHTBEl48Lr5c+ny+NbRul7QI62l5e2wdeQJdwH0YGq8nSbsxK6vd7mQISUj5QeXCiryRkoNPsC6prOt6aqexrcXaEDdJaTeOoB7DJQ4+1Z686lu9TkDm4sUmB272gj3tzjBJTg44wPtR+x6R1vTr5bqyaz8Qbh4kr8nyBwo5yOTzWpttKeaJRrUNjcnYMhYQfe8zyKPivRXyf0YeO0bYN2n3ZYgElb/APHpxj7Uq2p6R6dJJOjWZJ/wDTFcp5Inx/ZjRqekbDMujaYoBzmSVRz8ttWLXqC4vJFs9Ht7W3I5aaFfFVR8sAD61HBrmie1xQwWsc0jNhUNoFYcHnIz+tLUNWbTp3ETeAkhbZGPcG8gHKk8HzrWjItTp1L76zS3b7SvvWjooYZ5wCoI78/KqqWvUMkiiM6tCpfDM88eNo9eSR5jiuNrWvz7VgayihI/tC2811n1iQ7n1qYD0jCj9s0f0LIr3ra5bSpHqsF/cxAErJbSO/A7bsDv8AWq9nc2e9Ym03UJZCcZdXLE+mavY1H/8At3Wfi4/ek2uXunqpfWonKnlZ4w3/AI81NDzQrOwF0rMmjX42+6Y5Yxj6Z9PtTY+nrm/ciLRpLLDDErTqnb5Z+NFLLrmx9lU3HiGZQdwgT3eOBjcRU7dcaU0QeN5XbJDRBMsvz5wO9PYLQBh0Wd9X1GytrdbtrMrkXDyIpyPI5wfrV+Lp69QEjQNNLEklvHJx8sihmrdUS6hfOpv57Oy3YRYhhyMeeOc5qnFLoc4AuL26aRTgibxGI+fBpWIvat7dYXUVuLSyguJF3AQZLAEY75Ao7DrutRokMGl7lRdoe4k998eZxxWYePpZVwZ5M/COQD+lU5H0u2Vl0ya/GR/I21c/HJpNrsLNodb1ck+Lo1o3qN+D/Q1Yh6o9mAN3o728JIUyxMGX69qyWmafY39ksmo9Qz2zsTutncYUAkc5z3HP1rV6b0roJs4UTddxxybw5mJUk48gceVJb+y1/wBOazdazHrKxWq3EdpIAI2t7YNkFeSWwcEE9u1DrjUbqKKe2vptcSBXJkuDEw+gIHbn5cVtZ722s1T2ieOJXcIm5sZJ4AGah1fT4tUsWtJndVJDBk8iOR86uhnn95qml3Ufs8+t30yEbcOMkdhwCuabp8uk216kEmmeJauSs88lmUOwg/8ASBn5kHvWl/ANbgXFpq1u6jsJ7UAj7H9qqXtv1HZQPNc3mjxwr3dlfv8AAY/SihbnLXTeg5GCR+zg5/LJcSAn6MaKaM/TMIW7021iibJUSLF7+PXPJx3rFxXWo61dJHPIWtCSZJEswRgAnjJPfGPrQ06XqfjCfT7S6t0IyolZCyfWk4lZds9Q1jqRLKzMtnA9xIASFWNuSPL69qqydVSC4s1Np/BnTMm5WLKfgBmsZbad1ISZX1Ae8OQ8rk/5farRHVCxlVukYAdxKTn/AOOT9aX9A2uya41vWVlm9qlu4UlJ2C32DauePI/sagOr26ECTX9URyAcFl/yoRqR16MBZkun3ZPE2QPp3/SrvSup2Njvg1bTQ6O+TNKoYoMehHb5VLiLktHqBonUQdSXu4nA8RA4+3+lH+juob/VL25trgi4SBTidYdhDA4w3l+/FC+t7jT9Lg09tPjtYPai48WGFQ2MDBBAyO9B9Otlv7eORdSIibJ2btpJzzkfE08LFvE9YMoB94gH0Nd35GRkj1rzBumlkIYTyMDyDs/enR9OtEP4N9NCwPAGQe3wpqDDyM9ML49ftSrzT8O1gcJq1yAPWRj+9KjxsPIZrS09kvZrj2Ke6XJVdxAeM/Htz5d/Or8urabdt7PqFhcXBU8xqwVgB8uT9x3q6epdNAIQSMCc48HGT681S/GrcmV1sVkmdid35OPLPfmtcl2YZFiw0Pp7UpXis5tRtZRltgk5A+oNEh0NbM24atqIB7Zdc/8AjQbRdYMOsJc37xRQojKscSEsc+pNbaw1myv2221wGYDOwgq32NNOLLyYHXoPTW/t7u/nH9+YD+iigV9o19pN1ITpZvbUE7JFYuwXyBA5/Q16EJK6Gz8/hTwHl2YTTdQimMqDSr1JCGckQMQB6Zx9hXG1l/ECWui3h947s25Gfsprf7vWoLq7t7SPxbqRY4843M2OfShx+w26MMLbX7xpUtdJit0kPLyjBP8A7sn7AUOD6fZXDQ6tDNHMDgrIwH2Hn+taq/6zhgO2ztjKP+tztBoBf9Q6jqAOQCvkngKwx/3Cs3RLaL1rddPDsE+seasfiGhIfyRMvnmMistLayzTyMtgqh2J2qigY8qtT6ZJ4EGNJiiKghnQcufjk0rZPxCd5qOheG5RIz/27cfrVromaRtW36cswtGU+Mzf2ZHz9e3bNZ23gvLZvEitRHIDkFY0JH3FFrbqjXbQHxVMqr5SRD9sUra5Q1imekXVrbXiol5BHMsbB1DqCAw7GrQfNYOw68idgt5bFOcFk8voa0f4/pYRG9tj/iDK8+tWmnwaXYaL4UnGcDOB3NDta086zp8cYeSFkfxQGQHJwRhgfLmofx60DFQJTzgYiYg/UcD612PqC0J2yLJHgjaSMj58ZxT2GZE6hr+lQSLqWhmZE4Mlopxjt254+NQX3Vgh8BYbGTxpYxJsm4GCcY9T51v4b+1nbZHMpbvjy+9Bes4tO/B5pr5EZ41LwFjjDAZ4I7ZxSaGAbTqeFUcapbmGQL7ohl3g/Ptiqk3WVvswlvOz+eCFH+/pVLTn0O4ANxMElb+SX3R8s9jR9NMsJEBihhdfVcGpUX2ZvLoCt1ZDJhjp7Fh5+J++Ko3evz3AEcUcEangiXLkj9P6VsYtMtoyMW6il7BaMCGhj+q08fsW4P07XNDk0q0g1O23XECMu9YwdpbuVqqNK6ZntFt7XVWgmClVknUjvzyOAfr8KKSaHZSr71vF9qozdM2pz4RdP8JOKVPseTXouR9JXJ01TZav7QRwFRwsZ7+eG9apJ011JFYOgmQymZSih+NuDkls98+VUHsbvRpfHtLuSLHdhlcfsa3elajFf6RazSzx75UBYqcZI7/0p0vZSk36Mg/T3VxbIuIm+PjkfvXa3xn591/n73au08V2VbMKLC2Qj+Ah+PmKeyW8G3cETJwNxHesVHHq0jQxyKyeIeGOR9CKvJo144BuJ2OGOAijj5Zp7mGK9hi8aFN2+7slA8/DywH/ALu+KDx6gg1O3h04+PJ4i7XCbT35Jx3GPlVS00qSe8aK7glEQztaQ5Gfoavbo9FgZIr1IZiQSYYkDnHkc8mj2UqPQ45DgAnJ9cYzUgevPtP6gv8AV9asbeJnWBHLP5F8A/m/yrcq3Fap2J7FvxKz/Wl14OlIxUOPHX3W7HvRffxVDWdPh1aya1nJVWIIYfykUNWgTXsy1leaVuBlSRHxkmRCf1HAFF7e406XHgzwHPYEgf1rI3/Tmr2Dt4CvNEo91ocsO/mvcULMl1GxV4QjZHuyQkVk1JF4wZ6kkMLBXIJ44I7H64/arBO+BYyFVQ24DJODxXl0F/dRqDCHSTHHgu2SfiBRG+1DqBIoPbo5oYWA95CULc/zFec/Cl8gwRu5YUTnI2+uMf1qjPdadFxJcQg/4s15813O/aEM2f59zn9alhstavDi2s58+qRbB9zxQsgwiaLVLvSpQQkLSMR+YDZz9aZpL3kqxSC1Elod3uMeFXHcDHJPzpmkdF3skyzahcmE+Yjfc/37D9a9Ei0mODT1SBxCxX3Nylx9e1Oq5Gq9ADTL+C4iDT280aY91DgEfoasi8tlgKxrHu5w7nJH2AoilnlWS5eF48D3QmQfUc9uTXF0yyQ7RECo7cntTwCwKXU4Yk7tuWx2z696hNnPqMbxCFZ4nbY58U5C4JJPPrj7itMllbMQPDQZ47Z4qV1itYy7eFEijk8KBTSoLPOZ+jbgyFtOeRUY9mXhT8zQmfTdb06Ri1lNsB/tI0PIH+E16JddVaTBkLdGZvSAFv1HFC5es7InC28x+bAUpOAs6MSmu31qSry3MJ9GmI/RhVuPq69CgC8fj/q2GtL/APuFoXCta4U/zO4pqdX2Eoy1h9mU1Hw7H5AVp3Uuo3VwE9twu3PEac067utWvG2RTTMvPmP2Aorda3od8kSyRNCUcNuECnt5ZFBW1eWDWJmtmM9mWIiTG0YIHl5Y570PHsWTkN/CdTnZWmmbI494lv8Aip/wa8Xb7yHA80zRGPWI2tFkW6gEqHEqyqRg+nw+dELe/s7oKtvNBM2c4jcenpRUXyL5ARdPvE4DQ/8AdHSrRPal2yHYf4RxSoqAbmOkuZW09iHKNCh2le594Dmhv4tfgqoupMHilSpSe4of4nZ7u6f3XuZSCMfmxVjS7SKSMSOCTk+fxpUqUeTOToK+zRKFUKfy57mmSyzWSrJbzyrzyu7INKlVOKJizXwSM8MbHGWUMfnUmeK7SrqXCKGlQVJPlUeFkALKM1ylTGdeJAu1Rtz5rwaeVCkp3A9aVKhBYlVQeFH2qfGFz50qVIBBiVDedOEjccn70qVFBZ3cc966Hb1rtKhDOq7Bhz51jetLqaW9EDuTEu3CeWT5mu0qy1OB+jN3uba4jVDuX3SVbsea1FjYWrwoxhUHbngUqVSlRDLjaXbeJGwUqVOeMe9n1qFtPtSWHgr9qVKqRJWm0mzKE+Fg58jQTUrCG2XdEX5GcE0qVTKKJbYNliV1DNncACGzzSlPs9zHEvvIzBSH54xSpVguTSDY+S/uYpGSOaRVBwAHYfvSpUqRqf/Z"
                alt="Pantanal 2"
                style={{ width: "60%", margin: "10px", borderRadius: "8px" }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="Pantanal 3"
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
              <Link to="/amazonia">
                <Button type="link">
                  <h2>Amazônia </h2>
                </Button>
              </Link>
            </Form.Item>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pantanal;
