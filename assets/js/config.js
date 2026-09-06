/* =============================================================
   LAÇOS DA GABI — CONFIGURAÇÃO CENTRAL
   -------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para colocar o
   site no ar com seus dados reais. Nada de caçar informação em
   dezenas de arquivos.

   Preencha os campos abaixo entre as aspas. Deixe vazio ("") o
   que você ainda não tem — o site continua funcionando e esconde
   automaticamente o que não estiver configurado.
   ============================================================= */

window.SITE_CONFIG = {
  /* --- Identidade da marca --- */
  name: "Laços da Gabi",
  tagline: "Acessórios feitos à mão",
  city: "Lagarto",
  state: "SE",
  stateFull: "Sergipe",
  country: "Brasil",

  /* --- Contato (PREENCHER) ---
     whatsapp: apenas números, com código do país (55) + DDD + número.
     Exemplo para Lagarto-SE: "5579999999999"
     Deixe "" enquanto não tiver — os botões avisam com elegância. */
  whatsapp: "5579998619098",

  /* Mensagem padrão do WhatsApp (botões gerais) */
  whatsappMessage:
    "Olá, Gabi! Encontrei a Laços da Gabi pelo site e gostaria de conhecer os laços disponíveis. 🎀",

  /* --- Redes e presença online (PREENCHER quando tiver) --- */
  instagram: "https://www.instagram.com/lacosdagabi.oficial/",
  instagramHandle: "@lacosdagabi.oficial",
  googleBusinessUrl: "",    // link do Perfil da Empresa no Google
  email: "",                // ex.: "contato@lacosdagabi.com.br"

  /* --- Domínio / URL base ---
     domain: usado em canonical, sitemap e Open Graph.
     Enquanto estiver no GitHub Pages, use a URL do Pages.
     Ex.: "https://usuario.github.io/lacos-da-gabi" ou
          "https://lacosdagabi.github.io" quando o domínio existir. */
  domain: "https://lacosdagabi.github.io",

  /* --- Rastreamento / Analytics (opcional, deixe "" por enquanto) --- */
  googleAnalyticsId: "",       // ex.: "G-XXXXXXXXXX"
  searchConsoleToken: "gNTGJM6kh773Mu756_yPhune9jZzwOLQSu_XQn4Jwpc",      // conteúdo da meta de verificação
  metaPixelId: ""              // ex.: "000000000000000"
};

/* =============================================================
   PRODUTOS / MODELOS DE LAÇOS
   -------------------------------------------------------------
   Adicione, remova ou edite modelos aqui. Cada item vira um card
   automaticamente na seção "Nossos laços".

   Campos:
     name        -> nome do modelo (aparece no card e na msg do WhatsApp)
     description -> descrição curta
     category    -> ex.: "Laço infantil" (usado como etiqueta)
     image       -> caminho da foto real quando existir
                    (ex.: "assets/images/products/laco-classico.webp").
                    Deixe "" para exibir a arte-placeholder elegante.
     placeholder -> variação da arte decorativa: "a", "b", "c" ou "d"
   ============================================================= */

window.PRODUCTS = [
  {
    name: "Laço Ursinho Azul",
    description: "Laço em azul sereno com ursinho de pelúcia no centro e brilhos delicados.",
    category: "Laço infantil",
    image: "assets/images/products/lac_o_azul_com_ursinho_de_pelu_cia_1_1x.webp",
    placeholder: "a"
  },
  {
    name: "Laço Ursinho Amarelo",
    description: "Laço amarelo alegre com ursinho fofo e pequenos brilhos, para dias especiais.",
    category: "Laço infantil",
    image: "assets/images/products/lac_o_amarelo_com_ursinho_fofo_1_1x.webp",
    placeholder: "b"
  },
  {
    name: "Laço Ursinho Pérola",
    description: "Laço dourado sofisticado com ursinho de pérolas — um charme para ocasiões marcantes.",
    category: "Laço infantil",
    image: "assets/images/products/lac_o_dourado_com_ursinho_de_pe_rolas_1_1x.webp",
    placeholder: "c"
  },
  {
    name: "Laço Cerejinha",
    description: "Laço xadrez azul com estampa de cerejinhas, cheio de fofura e personalidade.",
    category: "Laço infantil",
    image: "assets/images/products/lac_o_xadrez_azul_com_cerejinhas_1_1x.webp",
    placeholder: "d"
  },
  {
    name: "Laço Ursinho Flores",
    description: "Laço azul em estilo borboleta com ursinho ao centro, romântico e delicado.",
    category: "Laço infantil",
    image: "assets/images/products/lac_o_azul_com_ursinho_e_flores_1_1x.webp",
    placeholder: "a"
  },
  {
    name: "Laços Coração",
    description: "Laços branquinhos com coração vermelho — delicadeza para o dia a dia.",
    category: "Laço infantil",
    image: "assets/images/products/lac_os_brancos_com_corac_o_es_vermelhos_1_1x.webp",
    placeholder: "b"
  },
  {
    name: "Tiara Confete",
    description: "Tiara com laço de estampa confete em tons pastel e um detalhe fofo no centro.",
    category: "Tiara",
    image: "assets/images/products/tiara_infantil_com_lac_o_pastel_1_1x.webp",
    placeholder: "c"
  },
  {
    name: "Tiara Pastel",
    description: "Tiara delicada com laço pastel e mimo no centro, leve e confortável de usar.",
    category: "Tiara",
    image: "assets/images/products/tiara_infantil_com_lac_o_pastel_e_flores_delicadas_1_1x.webp",
    placeholder: "d"
  },
  {
    name: "Tiara Xadrez Floral",
    description: "Tiara de gorgurão xadrez vermelho com florzinhas — um look romântico e atemporal.",
    category: "Tiara",
    image: "assets/images/products/tiara_de_gorgura_o_xadrez_em_composic_a_o_roma_ntica_1_1x.webp",
    placeholder: "a"
  },
  {
    name: "Presilha Coração",
    description: "Presilha com coração em veludo vermelho e brilhos — pequena e encantadora.",
    category: "Presilha",
    image: "assets/images/products/presilha_de_corac_a_o_em_veludo_vermelho_1_1x.webp",
    placeholder: "b"
  }
];

/* =============================================================
   AVALIAÇÕES / DEPOIMENTOS
   -------------------------------------------------------------
   Deixe o array vazio [] enquanto não houver avaliações REAIS.
   A seção some sozinha quando está vazia. Nunca invente depoimentos.

   Quando tiver avaliações verdadeiras, adicione objetos assim:
   {
     name: "Nome da cliente",
     text: "Comentário real da cliente.",
     stars: 5,               // de 1 a 5
     source: "Google"        // origem (opcional): "Google", "Instagram"...
   }
   ============================================================= */

window.REVIEWS = [];
