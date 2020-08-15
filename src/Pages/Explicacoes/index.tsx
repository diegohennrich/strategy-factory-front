import React, { FC } from 'react';
import { Container, Title, SubTitle, SwotImg, Lista } from './styles';
import Button from '../../Components/Button';
import { FaArrowCircleRight } from 'react-icons/fa';
import Swot from '../../Assets/swot.jpeg';
import Text from '../../Components/Text';
import BodyContent from '../../Components/BodyContent';
import Box from '../../Components/Box';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Explicacoes: FC = () => (
  <BodyContent>
    <Container>
      <Box w="80%" top="90px" textAlign="left">
        <Title>O que é Planejamento Estratégico? Conceitos</Title>
      </Box>
      <Box w="80%" top="30px" textAlign="left">
        <SubTitle>
          Nesta seção apresentamos Referencial Teórico sobre o Planejamento
          Estratégico e seus principais componentes. Recomendamos a leitura
          prévia deste material antes de iniciar a elaboração do seu
          Planejamento, e revisitar estes conceitos sempre que houver alguma
          dúvida.
        </SubTitle>
      </Box>

      <Box w="70%" top="90px">
        <Collapse defaultActiveKey={['1']} onChange={() => {}}>
          <Panel header="Planejamento Estratégico" key="1">
            <Box w="100%" top="0px" textAlign="center">
              <Text top="20px" textAlign="left">
                De acordo com Drucker(1977), Planejamento Estratégico é um
                processo contínuo, sistemático, organizado e capaz de prever o
                futuro, de maneira a tomar decisões que minimizem riscos.
              </Text>

              <Text top="20px" textAlign="left">
                Segundo Kotler(1992), o Planejamento Estratégico é um processo
                gerencial capaz de desenvolver e manter uma adequação razoável
                entre os objetivos e recursos da empresa e as mudanças e
                oportunidades de mercado.
              </Text>

              <Text top="20px" textAlign="left">
                É certo que ambos concordariam que o principal objetivo de um
                planejamento estratégico deve ser orientar os negócios e os
                produtos e/ou serviços da empresa de modo que gerem lucros e
                crescimento satisfatório. Isto envolve processos administrativos
                para se estabelecer a melhor direção a ser seguida pela empresa
                de forma inovadora e diferenciada.
              </Text>
            </Box>

            <Box w="100%" top="20px" textAlign="left">
              <Title>Vantagens e Benefícios</Title>
            </Box>

            <Box w="100%" top="20px" textAlign="left">
              <Text textAlign="left">
                <b>A – Melhora a comunicação:</b> Uma boa comunicação entre os
                colaboradores da empresa é fundamental pois dissemina o
                conhecimento sobre os objetivos e estratégias da organização, de
                forma mais clara, entre as equipes, aumentando o engajamento
                geral.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>B- Auxilia no planejamento de investimentos:</b> Permite
                identificar, de forma mais rápida, gargalos e oportunidade de
                melhoria dos processos, aumenta o nível de assertividade dos
                investimentos e evita decisões por impulso.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>
                  C- Estimula a empresa a se preparar para mudanças de mercado:{' '}
                </b>{' '}
                Instiga a empresa a pensar no futuro e se preparar para as
                mudanças, tornando-a mais dinâmica e menos suscetível a risco
                futuros de mercado.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>D- Melhora a tomada de decisão:</b> A tomada de decisões
                passa a ser realizada de forma mais assertiva e ágil, baseada em
                dados e informações mais consistentes, na direção dos objetivos
                da empresa.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>E- Fortalece a empresa:</b> Contribui de forma importante
                para o processo de tomada de decisão no sentido de diminuir o
                nível de erro e minimizar seus impactos, caso venham a ocorrer.
              </Text>
            </Box>

            <Box w="100%" top="10px" textAlign="left">
              <Text textAlign="left">
                <b>F- Cria vantagem competitiva:</b> O desenvolvimento de um
                planejamento estratégico consistente, alinhado aos objetivos da
                empresa, faz com que a organização e seus colaboradores fiquem
                mais bem preparados para os imprevistos e gaps do mercado,
                gerando vantagem competividade e aumento da chance de sucesso.
              </Text>

              <Text top="15px" textAlign="left">
                Importante salientar que Planejamento Estratégico é uma
                ferramenta que por si só é insuficiente se não for acompanhado
                de um plano de ação tático e operacional.
              </Text>

              <Text top="15px" textAlign="left">
                Esta ferramenta experimental desenvolvida para elaboração de um
                Planejamento Estratégico tem como objetivo auxiliar a empresa a
                desdobrar seu propósito, engajar o time, criar metas e
                acompanhar os resultados das ações definidas.
              </Text>
            </Box>
          </Panel>
          <Panel header="Missão, Visão e Valores" key="2">
            <Box w="100%" top="10px" textAlign="left">
              <Title>Declaração de missão</Title>
              <Text textAlign="left">
                É uma descrição breve, em uma ou duas frases, que define a razão
                de ser da organização. A missão deve refletir o propósito
                fundamental (atualmente, algumas empresas inclusive utilizam o
                termo “propósito” em substituição a “missão”) da organização,
                principalmente o que ela fornece aos clientes. A declaração de
                missão serve como uma referência para atuação dos dirigentes e
                funcionários da organização.
              </Text>

              <Text textAlign="left" top="20px">
                Exemplo de missão: “Organizar as informações no mundo e
                torna-lás acessíveis e úteis para todos.” (Google).
              </Text>
            </Box>

            <Box w="100%" top="40px" textAlign="left">
              <Title>Declaração de visão</Title>
              <Text textAlign="left">
                A declaração de visão estipula os objetivos de médio e longo
                prazo (três a dez anos) da empresa. Esta declaração deve tornar
                pública como a empresa quer ser vista pelo mundo.
                Tradicionalmente, a visão deve possuir três componentes: ter um
                objetivo ousado, definir o nicho de atuação e definir um prazo
                para se alcançar esse objetivo. Atualmente, percebe-se que as
                grandes empresas não têm se preocupado com a definição de nicho
                (até porque, em sua maioria, são empresas presentes em diversos
                segmentos) e o horizonte temporal. Porém, a definição de um
                objetivo ousado é fundamental e está sempre presente. O objetivo
                arrojado da declaração de visão deve ser diferente da situação
                atual da empresa e serve como mola propulsora para levar a
                empresa a patamares muito superiores de desempenho, não se
                contentando com bons resultados no presente e melhorias
                incrementais no futuro.
              </Text>

              <Text textAlign="left" top="20px">
                Exemplo de visão: “Ser a maior e melhor rede de chocolates finos
                do mundo, oferecendo aos seus clientes e parceiros uma relação
                duradoura, com foco no crescimento, rentabilidade e
                responsabilidade socioambiental.” (Cacau Show).
              </Text>
            </Box>

            <Box w="100%" top="40px" textAlign="left">
              <Title>Declaração de valores</Title>
              <Text textAlign="left">
                Os valores da empresa direcionam os comportamentos e o caráter
                da organização. Valores organizacionais são crenças e atitudes
                que dão uma personalidade à empresa, definindo uma "ética" para
                a atuação das pessoas e da organização como um todo. Eles devem
                servir de alicerce para a cultura da empresa.
              </Text>

              <Text textAlign="left" top="20px">
                Exemplo de valores: “ética, foco no cliente, inovação,
                eficiência, confiabilidade, senso de dono e espírito público”.
                (Banco do Brasil).
              </Text>
            </Box>
          </Panel>
          <Panel header="Análise SWOT" key="3">
            <Box w="100%" top="10px" textAlign="left">
              <Title>Análise SWOT</Title>
              <Text textAlign="left">
                A análise SWOT é uma ferramenta de gestão utilizada para
                identificar os pontos fortes e fracos internos de uma empresa e
                as oportunidades e ameaças impostas pelo ambiente externo. SWOT
                vem do inglês: Strengths, Weaknesses, Opportunities and Threats,
                ou seja, Forças, Fraquezas, Oportunidades e ameaças. Seu
                principal objetivo está em auxiliar a empresa a melhorar sua
                percepção em relação aos diversos fatores envolvidos nas
                decisões empresariais, possibilitando que a empresa aproveite
                melhor as oportunidades e evite ou esteja melhor preparada para
                as ameaças identificadas na análise. Segundo Wright et. al.
                (2000) “o objetivo da análise é possibilitar que a empresa se
                posicione para tirar vantagem de determinadas oportunidades do
                ambiente e evitar ou minimizar ameaças ambientais”. É
                fundamental enfatizar que a análise SWOT pode ser utilizada em
                empresa de qualquer porte e ramo e a qualquer momento, ou seja,
                tanto na implantação da empresa, na expansão, ou na avaliação de
                seu posicionamento para auxiliar no processo decisório. A
                análise SWOT envolve a construção da matriz SWOT:
              </Text>

              <Box w="100%">
                <SwotImg src={Swot} />
              </Box>

              <Text textAlign="left">
                A análise SWOT contempla o ambiente interno e externo da
                organização. O ambiente interno são as características internas
                da empresa, que envolvem recursos, habilidades, experiências e
                conhecimentos, são aspectos controláveis e quem podem ser
                alterados pela empresa, estão relacionados a seus pontos fortes
                (forças) e fracos (fraquezas). Ex: equipe qualificada ou não,
                maquinário moderno ou defasado, localização da empresa adequada
                ou não. Já o ambiente externo engloba as oportunidades e ameaças
                que podem afetar os negócios da empresa e que não são por ela
                controláveis. Ex: políticas governamentais, efeitos climáticos,
                variações cambiais, políticas econômicas. A partir da matriz
                SWOT a empresa obtém um quadro esquemático resumido de sua
                situação estratégica, fornecendo informação vital para empresa,
                permitindo que avalie seu posicionamento estratégico e possa
                realizar um planejamento estratégico direcionado a seus
                objetivos. “Depois de ter realizado uma análise SWOT, a empresa
                pode estabelecer metas específicas para o período de
                planejamento”. (KOTLER & KELLER, 2006).
              </Text>
            </Box>
          </Panel>
          <Panel header="Vantagens Competitivas" key="4">
            <Box w="100%" top="10px" textAlign="left">
              <Title>VANTAGENS COMPETITIVAS</Title>
              <Text textAlign="left">
                O mundo dos negócios está mudando, assim como as expectativas
                dos consumidores, exigindo que as organizações, através do
                marketing, atualizem suas ofertas para manter ou melhorar sua
                posição através de estratégias baseadas na criação de um ajuste
                entre os requisitos do mercado escolhido e os recursos da
                empresa. Os novos processos de marketing exigirão novas formas
                de fazer negócio em organizações desconhecidas, pois nem os
                recursos nem os mercados são fixos, sendo necessário monitorar
                essas mudanças, adquirindo e desenvolvendo novas competências
                dinâmicas permitindo que a empresa possa competir no futuro,
                utilizando de suas competências e ativos de forma inovadora. As
                empresas deverão ser mais seletivas e restritivas na hora de
                escolher os mercados e os consumidores a serem atendidos, de
                modo a garantir a criação de valor por meio de relações
                duradouras. Obviamente que existe um grande número de maneiras
                das empresas relacionarem-se com seus clientes, sendo o
                posicionamento competitivo uma parte importante na conquista
                destes relacionamentos, e podem ser resumidos com base na ênfase
                atribuída a seis dimensões principais de diferenciação: preço;
                qualidade ou nível técnico; serviço; customização; diferenciação
                de benefícios; ou inovação, como apresentado na tabela abaixo:
              </Text>

              <Box w="100%" top="30px" textAlign="left">
                <table>
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
                  sob controle — ao menos tão baixos quanto os da concorrência,
                  ou preferencialmente inferiores — para que um posicionamento
                  de baixo preço seja sustentável. Posicionar-se como um
                  fornecedor de baixo preço requer fortes competências de dentro
                  para fora e abrangentes, com sistemas eficazes de controle de
                  custos não só no âmbito das operações da própria empresa, mas
                  também no das operações do fornecedor e da logística de
                  distribuição. Para uma estratégia de posicionamento de preço
                  ser bem-sucedida no mercado é exigida a existência de um
                  segmento de consumidores viável e sensível a preço.
                </Text>
              </Box>

              <Box w="100%" top="10px" textAlign="left">
                <Text textAlign="left">
                  <b>Posicionamento por qualidade:</b> Posicionar-se como um
                  fornecedor de alta qualidade técnica requer sistemas de
                  controle interno eficazes, competência técnica, sobretudo em
                  engenharia e manufatura quando da fabricação de produtos.
                  Contudo, o mais significativo é que se requer uma clara visão
                  daquilo que significa ‘qualidade’ aos olhos dos consumidores.
                  Isso impõe competências de fora para dentro para a
                  sensibilidade de mercado e o vínculo com clientes. Neste
                  posicionamento os ativos de marketing da imagem e reputação da
                  marca costumam ser relevantes, pois podem levar anos para
                  serem criadas e, uma vez estabelecidas, precisam ser
                  cultivadas e, se necessário, defendidas com vigor. Para os
                  consumidores, a qualidade pode ser apresentada através de
                  melhor confiabilidade, durabilidade e aparência estética, e
                  devem estar propensos a pagar por uma qualidade superior,
                  visto que em geral, embora nem sempre, há custos mais altos
                  associados à oferta de um produto de maior qualidade, sendo
                  este o mote deste posicionamento.
                </Text>
              </Box>

              <Box w="100%" top="10px" textAlign="left">
                <Text textAlign="left">
                  <b>Posicionamento por inovação:</b> Nos mercados que mudam
                  rapidamente, principalmente em decorrência de avanços
                  tecnológicos, pode haver oportunidades de posicionamento com
                  base na capacidade de inovação ou na velocidade de colocação
                  de novos produtos no mercado. As principais competências
                  exigidas incluem excelentes habilidades de desenvolvimento de
                  novos produtos em conjunto com habilidades técnicas e
                  criativas. São combinações de competências de dentro para fora
                  e abrangentes. Entretanto, uma vez que as ideias de novos
                  produtos se cristalizam, é importante testá-las nos
                  consumidores (por fracasso rápido ou outros meios mais
                  convencionais) para evitar o lançamento de produtos altamente
                  inovadores, porém indesejados.
                </Text>
              </Box>

              <Box w="100%" top="10px" textAlign="left">
                <Text textAlign="left">
                  <b>Posicionamento por serviço:</b> Cada vez mais se usa o
                  posicionamento com base na oferta de serviço superior, ou até
                  o serviço claramente personalizado para atender às
                  necessidades do mercado-alvo. Para prestar serviços de alta
                  qualidade, é essencial ter:
                </Text>

                <Box w="100%" top="10px" textAlign="left">
                  <Lista>
                    <li>
                      habilidades de perceber o mercado e identificar qual
                      nível/ tipo de serviço é necessário;
                    </li>

                    <li>
                      habilidades de estabelecer vínculos com clientes para
                      desenvolver relacionamentos mais próximos com os
                      principais deles;
                    </li>

                    <li>
                      sistemas que auxiliem os provedores de serviço a atender
                      seus clientes, bem como habilidades de monitoramento
                      capazes de avaliar com regularidade o nível e o tipo de
                      serviço oferecido;
                    </li>
                  </Lista>

                  <Text textAlign="left" top="30px">
                    As empresas que buscam criar uma vantagem por serviço para
                    posicionar-se como provedores de serviço superior ao dos
                    concorrentes necessitam primeiramente compreender como seus
                    clientes avaliam serviços, quais dimensões eles julgam
                    relevantes e como elas se manifestam e posteriormente devem
                    colocar em prática estratégias e sistemas que garantam que
                    sua equipe possa entregar serviço superior.
                  </Text>
                </Box>
              </Box>

              <Box w="100%" top="10px" textAlign="left">
                <Text textAlign="left">
                  <b>Posicionamento por benefícios diferenciados:</b> Segmentar
                  mercados com base nos benefícios que os clientes desejam pode
                  com frequência ajudar a identificar novas oportunidades de
                  mercado e sugerir meios mais eficazes de definir o
                  público-alvo. Requer competências de fora para dentro bem
                  desenvolvidas para, em primeiro lugar, identificar os
                  benefícios que os clientes estão buscando e depois segmentar o
                  mercado de modo criativo em setores significativos, mas
                  comercialmente viáveis. Também pode requerer habilidades
                  eficazes de desenvolvimento de novos produtos/serviços para
                  assegurar que os benefícios buscados sejam efetivamente
                  entregues aos clientes por meio da incorporação de atributos
                  relevantes. O posicionamento baseado em benefícios desejados
                  pelos clientes é convencionalmente associado aos mercados de
                  consumo e em mercados corporativos. Em ambos os casos, os
                  segmentos de benefícios propiciam uma base poderosa sobre a
                  qual desenvolver posicionamento diretamente relacionado com os
                  requisitos de clientes.
                </Text>
              </Box>

              <Box w="100%" top="10px" textAlign="left">
                <Text textAlign="left">
                  <b>Posicionamento customizado (marketing um a um):</b>{' '}
                  Provavelmente o máximo em segmentação e posicionamento seja a
                  tentativa de oferecer produtos customizados aos requisitos de
                  clientes individuais. Embora tenha sido praticado em muitos
                  mercados corporativos por algum tempo, isso chegou a outros
                  mercados, inclusive de consumo. As habilidades relevantes para
                  o posicionamento customizado são uma combinação de
                  competências de fora para dentro, que capacitem a empresa a
                  identificar o que o consumidor deseja e estabelecer
                  relacionamentos com os clientes, com competências de dentro
                  para fora de capacidade de produção flexível. O posicionamento
                  customizado refere- se a compreender as necessidades
                  individuais em vez daquelas do segmento de mercado, e a ter
                  flexibilidade para provê -las a um preço que o consumidor
                  esteja disposto a pagar. Embora a tecnologia, como o uso da
                  Internet, possa desempenhar um papel importante em permitir
                  uma customização economicamente viável, o processo necessita
                  ser conduzido pelo mercado em vez de direcionado pela
                  tecnologia. Cada vez mais, as empresas buscam criar sinergias
                  por meio do uso de novas tecnologias para atender às demandas
                  dos consumidores.
                </Text>
              </Box>
            </Box>
          </Panel>
          <Panel header="Referências Bibliográficas:" key="5">
            <Box w="100%" top="10px" textAlign="left">
              <Title>VANTAGENS COMPETITIVAS</Title>

              <Text textAlign="left" top="20px">
                DRUCKER, Peter F. <b>Introdução à Administração</b>. São Paulo:
                Pioneira, 1977.
              </Text>

              <Text textAlign="left" top="20px">
                HOOLEY, Graham; PIERCY, Nigel F.; NICOULAUD, Brigitte.
                <b>Estratégia de marketing e posicionamento competitivo</b>. São
                Paulo: Pearson Prentice Hall, 2011. 4a Ed.
              </Text>

              <Text textAlign="left" top="20px">
                KAPLAN, Robert S.; NORTON, David P. <b>A Execução Premium</b>: A
                obtenção de vantagem competitiva através do vínculo da
                estratégia com as operações do negócio. Rio de Janeiro:
                Elsevier, 2008. 2a Ed.
              </Text>

              <Text textAlign="left" top="20px">
                KOTLER, Philip. <b>Administração de Marketing</b>: análise,
                planejamento, implementação e controle. São Paulo: Editora
                Atlas, 1992. 2a Ed.
              </Text>

              <Text textAlign="left" top="20px">
                KOTLER, P.; KELLER, K. L.<b>Administração de Marketing</b>. São
                Paulo: Pearson Prentice Hall, 2006. 12a Ed.
              </Text>

              <Text textAlign="left" top="20px">
                WRIGHT, P.; KROLL, J. Mark; PARMELL, J.{' '}
                <b>Administração Estratégica</b>. São Paulo: Atlas, 2000. 1a Ed.
              </Text>
            </Box>
          </Panel>
        </Collapse>
      </Box>

      <Box top="90px" w="70%" bottom="90px">
        <Link to="/cadastro">
          <Button
            icon={FaArrowCircleRight}
            bgColor="#29166f"
            color="#FFFFFF"
            size="350px"
            iconOrientation="right"
          >
            Prosseguir para Cadastro
          </Button>
        </Link>
      </Box>
    </Container>
  </BodyContent>
);

export default Explicacoes;
