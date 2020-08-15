import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import Swot from '../../Assets/swot.jpeg';
import { AiOutlineUser, AiOutlineIdcard, AiOutlineEye } from 'react-icons/ai';
import Checkbox from '../../Components/Checkbox';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Button from '../../Components/Button';
import TextArea from '../../Components/Textarea';
import { Container, Title, Lista } from './styles';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface FormData {
  estrategia: string[];
}

const Missao: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [initialValues, setInitialValues] = useState([]);
  const history = useHistory();
  const checkboxOptions: CheckboxOption[] = [
    {
      id: 'Posicionamento por preço',
      value: 'Posicionamento por preço',
      label: 'Posicionamento por preço',
    },
    {
      id: 'Posicionamento por qualidade',
      value: 'Posicionamento por qualidade',
      label: 'Posicionamento por qualidade',
    },
    {
      id: 'Posicionamento por inovação',
      value: 'Posicionamento por inovação',
      label: 'Posicionamento por inovação',
    },
    {
      id: 'Posicionamento por serviço',
      value: 'Posicionamento por serviço',
      label: 'Posicionamento por serviço',
    },
    {
      id: 'Posicionamento por benefícios diferenciados',
      value: 'Posicionamento por benefícios diferenciados',
      label: 'Posicionamento por benefícios diferenciados',
    },
    {
      id: 'Posicionamento customizado (marketing um a um)',
      value: 'Posicionamento customizado (marketing um a um)',
      label: 'Posicionamento customizado (marketing um a um)',
    },
  ];
  const handleSubmit = useCallback(async (data: FormData) => {
    console.log('data: ', data);
    localStorage.setItem(
      '@StrategyFactory:estrategia',
      JSON.stringify(data.estrategia)
    );

    history.push('/objetivos');
  }, []);

  useEffect(() => {
    const dados = localStorage.getItem('@StrategyFactory:estrategia');

    if (dados) {
      console.log('dados: ', dados);
      setInitialValues(JSON.parse(dados));
    }
  }, []);

  const FormRef = useRef<FormHandles>(null);
  return (
    <BodyContent>
      <Container>
        <Modal
          title="Ventagens Competitivas"
          visible={showModal}
          maskClosable
          onOk={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          width="1000px"
        >
          <Box w="100%" top="10px" textAlign="left">
            <Title>VANTAGENS COMPETITIVAS</Title>
            <Text textAlign="left">
              O mundo dos negócios está mudando, assim como as expectativas dos
              consumidores, exigindo que as organizações, através do marketing,
              atualizem suas ofertas para manter ou melhorar sua posição através
              de estratégias baseadas na criação de um ajuste entre os
              requisitos do mercado escolhido e os recursos da empresa. Os novos
              processos de marketing exigirão novas formas de fazer negócio em
              organizações desconhecidas, pois nem os recursos nem os mercados
              são fixos, sendo necessário monitorar essas mudanças, adquirindo e
              desenvolvendo novas competências dinâmicas permitindo que a
              empresa possa competir no futuro, utilizando de suas competências
              e ativos de forma inovadora. As empresas deverão ser mais
              seletivas e restritivas na hora de escolher os mercados e os
              consumidores a serem atendidos, de modo a garantir a criação de
              valor por meio de relações duradouras. Obviamente que existe um
              grande número de maneiras das empresas relacionarem-se com seus
              clientes, sendo o posicionamento competitivo uma parte importante
              na conquista destes relacionamentos, e podem ser resumidos com
              base na ênfase atribuída a seis dimensões principais de
              diferenciação: preço; qualidade ou nível técnico; serviço;
              customização; diferenciação de benefícios; ou inovação, como
              apresentado na tabela abaixo:
            </Text>

            <Box w="100%" top="30px" textAlign="left">
              <table className="table-consulte">
                <tr>
                  <td>Preço Baixo</td>
                  <td>Preço Alto</td>
                </tr>
                <tr>
                  <td>Qualidade Premium</td>
                  <td>Qualidade Básica</td>
                </tr>
                <tr>
                  <td>Serviço Superior</td>
                  <td>Serviço Limitado</td>
                </tr>
                <tr>
                  <td>Inovação</td>
                  <td>Imiação</td>
                </tr>
                <tr>
                  <td>Diferenciação</td>
                  <td>Não Diferenciação</td>
                </tr>
                <tr>
                  <td>Customização</td>
                  <td>Padronização</td>
                </tr>
              </table>
              <span style={{ marginTop: 50 }}>
                Fonte: Hooley et al.(2011, p. 391).
              </span>
            </Box>

            <Box w="100%" top="40px" textAlign="left">
              <Text textAlign="left">
                <b>Posicionamento por preço:</b> Os custos devem ser mantidos
                sob controle — ao menos tão baixos quanto os da concorrência, ou
                preferencialmente inferiores — para que um posicionamento de
                baixo preço seja sustentável. Posicionar-se como um fornecedor
                de baixo preço requer fortes competências de dentro para fora e
                abrangentes, com sistemas eficazes de controle de custos não só
                no âmbito das operações da própria empresa, mas também no das
                operações do fornecedor e da logística de distribuição. Para uma
                estratégia de posicionamento de preço ser bem-sucedida no
                mercado é exigida a existência de um segmento de consumidores
                viável e sensível a preço.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>Posicionamento por qualidade:</b> Posicionar-se como um
                fornecedor de alta qualidade técnica requer sistemas de controle
                interno eficazes, competência técnica, sobretudo em engenharia e
                manufatura quando da fabricação de produtos. Contudo, o mais
                significativo é que se requer uma clara visão daquilo que
                significa ‘qualidade’ aos olhos dos consumidores. Isso impõe
                competências de fora para dentro para a sensibilidade de mercado
                e o vínculo com clientes. Neste posicionamento os ativos de
                marketing da imagem e reputação da marca costumam ser
                relevantes, pois podem levar anos para serem criadas e, uma vez
                estabelecidas, precisam ser cultivadas e, se necessário,
                defendidas com vigor. Para os consumidores, a qualidade pode ser
                apresentada através de melhor confiabilidade, durabilidade e
                aparência estética, e devem estar propensos a pagar por uma
                qualidade superior, visto que em geral, embora nem sempre, há
                custos mais altos associados à oferta de um produto de maior
                qualidade, sendo este o mote deste posicionamento.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>Posicionamento por inovação:</b> Nos mercados que mudam
                rapidamente, principalmente em decorrência de avanços
                tecnológicos, pode haver oportunidades de posicionamento com
                base na capacidade de inovação ou na velocidade de colocação de
                novos produtos no mercado. As principais competências exigidas
                incluem excelentes habilidades de desenvolvimento de novos
                produtos em conjunto com habilidades técnicas e criativas. São
                combinações de competências de dentro para fora e abrangentes.
                Entretanto, uma vez que as ideias de novos produtos se
                cristalizam, é importante testá-las nos consumidores (por
                fracasso rápido ou outros meios mais convencionais) para evitar
                o lançamento de produtos altamente inovadores, porém
                indesejados.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>Posicionamento por serviço:</b> Cada vez mais se usa o
                posicionamento com base na oferta de serviço superior, ou até o
                serviço claramente personalizado para atender às necessidades do
                mercado-alvo. Para prestar serviços de alta qualidade, é
                essencial ter:
              </Text>

              <Box w="100%" top="10px" textAlign="left">
                <Lista>
                  <li>
                    habilidades de perceber o mercado e identificar qual nível/
                    tipo de serviço é necessário;
                  </li>

                  <li>
                    habilidades de estabelecer vínculos com clientes para
                    desenvolver relacionamentos mais próximos com os principais
                    deles;
                  </li>

                  <li>
                    sistemas que auxiliem os provedores de serviço a atender
                    seus clientes, bem como habilidades de monitoramento capazes
                    de avaliar com regularidade o nível e o tipo de serviço
                    oferecido;
                  </li>
                </Lista>

                <Text textAlign="left" top="30px">
                  As empresas que buscam criar uma vantagem por serviço para
                  posicionar-se como provedores de serviço superior ao dos
                  concorrentes necessitam primeiramente compreender como seus
                  clientes avaliam serviços, quais dimensões eles julgam
                  relevantes e como elas se manifestam e posteriormente devem
                  colocar em prática estratégias e sistemas que garantam que sua
                  equipe possa entregar serviço superior.
                </Text>
              </Box>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>Posicionamento por benefícios diferenciados:</b> Segmentar
                mercados com base nos benefícios que os clientes desejam pode
                com frequência ajudar a identificar novas oportunidades de
                mercado e sugerir meios mais eficazes de definir o público-alvo.
                Requer competências de fora para dentro bem desenvolvidas para,
                em primeiro lugar, identificar os benefícios que os clientes
                estão buscando e depois segmentar o mercado de modo criativo em
                setores significativos, mas comercialmente viáveis. Também pode
                requerer habilidades eficazes de desenvolvimento de novos
                produtos/serviços para assegurar que os benefícios buscados
                sejam efetivamente entregues aos clientes por meio da
                incorporação de atributos relevantes. O posicionamento baseado
                em benefícios desejados pelos clientes é convencionalmente
                associado aos mercados de consumo e em mercados corporativos. Em
                ambos os casos, os segmentos de benefícios propiciam uma base
                poderosa sobre a qual desenvolver posicionamento diretamente
                relacionado com os requisitos de clientes.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>Posicionamento customizado (marketing um a um):</b>{' '}
                Provavelmente o máximo em segmentação e posicionamento seja a
                tentativa de oferecer produtos customizados aos requisitos de
                clientes individuais. Embora tenha sido praticado em muitos
                mercados corporativos por algum tempo, isso chegou a outros
                mercados, inclusive de consumo. As habilidades relevantes para o
                posicionamento customizado são uma combinação de competências de
                fora para dentro, que capacitem a empresa a identificar o que o
                consumidor deseja e estabelecer relacionamentos com os clientes,
                com competências de dentro para fora de capacidade de produção
                flexível. O posicionamento customizado refere- se a compreender
                as necessidades individuais em vez daquelas do segmento de
                mercado, e a ter flexibilidade para provê -las a um preço que o
                consumidor esteja disposto a pagar. Embora a tecnologia, como o
                uso da Internet, possa desempenhar um papel importante em
                permitir uma customização economicamente viável, o processo
                necessita ser conduzido pelo mercado em vez de direcionado pela
                tecnologia. Cada vez mais, as empresas buscam criar sinergias
                por meio do uso de novas tecnologias para atender às demandas
                dos consumidores.
              </Text>
            </Box>
          </Box>
        </Modal>

        <div>
          <Title>Estratégia</Title>
          <button onClick={() => setShowModal(true)}>
            Consulte os conceitos aqui
            <AiOutlineEye size="20px" style={{ marginLeft: 10 }} />
          </button>
        </div>

        <Box w="80%" textAlign="left">
          <Text top="10px" textAlign="left">
            Defina a Vantagem Competitiva da Empresa. Em qual aspecto ela será
            melhor do que a concorrência? Você pode marcar mais de uma opção, se
            quiser:
          </Text>
        </Box>

        <Box w="80%" textAlign="left">
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <Checkbox
              name="estrategia"
              defaultValue={['teste']}
              options={checkboxOptions}
              style={{ padding: 10 }}
            />
            <Box top="70px" w="80%" bottom="90px" textAlign="left">
              <Button
                icon={FaArrowCircleRight}
                bgColor="#29166f"
                color="#FFFFFF"
                size="200px"
                iconOrientation="right"
                onClick={() => FormRef.current?.submitForm()}
              >
                Prossegir
              </Button>
            </Box>
          </Form>
        </Box>
      </Container>
    </BodyContent>
  );
};

export default Missao;
