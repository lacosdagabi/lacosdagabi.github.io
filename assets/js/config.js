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
          "https://lacosdagabi.com.br" quando o domínio existir. */
  domain: "https://lacosdagabi.com.br",

  /* --- Rastreamento / Analytics (opcional, deixe "" por enquanto) --- */
  googleAnalyticsId: "",       // ex.: "G-XXXXXXXXXX"
  searchConsoleToken: "",      // conteúdo da meta de verificação
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
    name: "Laço Clássico",
    description: "O modelo atemporal, perfeito para o dia a dia e para compor qualquer look.",
    category: "Laço infantil",
    image: "",
    placeholder: "a"
  },
  {
    name: "Laço Delicado",
    description: "Fino e leve, pensado para as pequenas com um toque especial de charme.",
    category: "Laço infantil",
    image: "",
    placeholder: "b"
  },
  {
    name: "Laço Duplo",
    description: "Duas camadas de fita para dar volume e destaque em ocasiões especiais.",
    category: "Laço infantil",
    image: "",
    placeholder: "c"
  },
  {
    name: "Laço Boutique",
    description: "Acabamento caprichado e visual sofisticado para os momentos mais bonitos.",
    category: "Laço infantil",
    image: "",
    placeholder: "d"
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
