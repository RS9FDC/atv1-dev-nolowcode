# Lumea Halo

## Integrantes

* Pedro Porfirio Vieira
* Ruan de Olivieira Santos

## Sobre o produto

O **Lumea Halo** é um objeto de luz responsiva criado para transformar pequenos momentos do dia em rituais de presença. O produto combina uma luminária de mesa escultural, um anel de controle tátil e três ritmos de luz: começar, mergulhar e desacelerar.

A proposta é oferecer uma alternativa mais silenciosa às telas e aos dispositivos cheios de notificações. O Halo funciona conectado à energia, sem aplicativo, banco de dados ou configuração complexa. O usuário gira o anel superior, escolhe a atmosfera e deixa a luz organizar o ambiente.

O público imaginado é formado por estudantes, profissionais criativos e pessoas que valorizam espaços de trabalho, leitura e descanso com mais intenção. A página apresenta a edição inaugural fictícia por **R$ 389,90**, em três acabamentos: Clay, Tide e Moss.

## Jornada de construção

### Ideia inicial

O ponto de partida foi o desafio de criar um produto fictício completamente diferente de um tênis, mas que ainda permitisse uma landing page visualmente forte e com uma jornada de compra simulada. Foram consideradas algumas alternativas, como um organizador modular de mesa, um kit de escrita e uma pequena estufa doméstica.

A ideia da luminária foi escolhida porque permitia unir forma, função e narrativa. Em vez de vender apenas uma fonte de luz, o conceito foi desenvolvido como um objeto que ajuda o usuário a marcar transições do dia. O nome Lumea foi escolhido por sugerir luminosidade, enquanto Halo reforça a ideia de uma luz que envolve o espaço.

### Pesquisa e referências

Foram aproveitados padrões gerais de uma landing page React da internet, como a separação entre dados e apresentação, navegação por âncoras, componentes de interação, modal, FAQ expansível, estados locais e preocupação com responsividade.

As referências visuais utilizadas foram páginas editoriais de produtos de design, estúdios de cerâmica e objetos de iluminação contemporâneos. A direção visual também considerou princípios de composição como grandes blocos tipográficos, espaço negativo, contraste entre fundo escuro e cor de destaque e uso de uma representação de produto centralizada.

### Ferramentas utilizadas

* **React 19 + Vite** para a aplicação client-side.
* **CSS puro** com tokens de cor, tipografia, espaçamento, responsividade e animações.
* **Framer Motion**, disponível no projeto de referência, foi mantido como dependência técnica, embora a nova versão utilize principalmente animações CSS para reduzir complexidade.
* **VS Code e terminal** para edição, instalação e validação do projeto.
* **Google Fonts** com Space Grotesk, Manrope e DM Mono para criar contraste entre títulos, texto corrido e informações técnicas.
* **SVG inline e CSS** para ícones, símbolo da marca e representação autoral do produto, sem dependência de banco de imagens ou marcas existentes.

### Uso de IA

A inteligência artificial generativa foi utilizada como ferramenta de apoio durante o desenvolvimento, principalmente para auxiliar na implementação do código em React, organização dos componentes e revisão de alguns aspectos técnicos da aplicação. A concepção do produto, sua proposta, identidade visual e estrutura geral da experiência foram definidas pela dupla.

Durante o desenvolvimento, a IA foi utilizada de forma consultiva para esclarecer dúvidas de programação, sugerir formas de estruturar componentes e auxiliar na resolução de problemas encontrados durante a implementação. As sugestões foram analisadas pela dupla antes de serem incorporadas ao projeto.

Entre as sugestões aproveitadas estão a organização das interações utilizando estados do React, a criação de componentes reutilizáveis e a implementação de elementos interativos, como o FAQ e o modal associado ao CTA. Essas escolhas foram adaptadas ao funcionamento e à proposta do produto.

As sugestões relacionadas ao design e à experiência visual foram avaliadas de acordo com a proposta definida pela dupla. Cores, textos, composição das seções, identidade visual e organização da página foram desenvolvidos e ajustados de acordo com nossas próprias decisões.

Também foram descartadas sugestões que envolvessem backend, banco de dados, APIs ou funcionalidades que exigissem processamento externo, pois a atividade determina que a aplicação seja totalmente client-side. Dessa forma, a IA foi utilizada principalmente como suporte técnico, enquanto as principais decisões de produto e design permaneceram sob responsabilidade da dupla.


### Evolução da solução

A ideia inicial era uma luminária funcional com muitos controles. Durante a evolução, o produto foi simplificado para um objeto com três ritmos e uma interação principal: girar o anel. Essa mudança deixou a proposta mais fácil de explicar e tornou a experiência de uso compatível com uma landing page curta.

A identidade visual passou a combinar verde noturno, creme, coral e verde menta. A tipografia usa Space Grotesk para a presença tecnológica e editorial dos títulos, Manrope para leitura confortável e DM Mono para rótulos e informações de produto.

O layout final foi organizado em hero, apresentação do objeto, benefícios, ritual interativo, prova social, oferta, FAQ, CTA final e rodapé. A ilustração do Halo foi criada como um volume escultural com corpo cerâmico, anel superior, luz interna, sombra e órbitas gráficas. O CTA da oferta abre um modal de reserva simulado; o formulário possui estado de confirmação, enquanto o FAQ possui expansão individual e a seção de ritual altera o visual conforme o passo selecionado.

### Resultado final

O resultado é uma landing page navegável, responsiva e 100% client-side para um produto fictício. Ela contém identidade visual própria, proposta de produto, hero, benefícios, representação visual do Halo, explicação de funcionamento, avaliações fictícias, preço, seleção de acabamentos, FAQ expansível e CTA com modal de reserva.

A solução pode ser executada com:

```bash
npm install
npm run dev
```

O que funcionou melhor foi a combinação entre uma narrativa simples — criar espaço para o agora — e interações pequenas, mas coerentes com o produto. Com mais tempo, seria possível criar fotografias ou renders adicionais do Halo, adicionar uma página de confirmação mais detalhada e conectar o formulário a um serviço real de lista de espera.
