# Laços da Gabi — Site oficial

Site institucional / landing page da **Laços da Gabi**, marca artesanal de laços infantis de **Lagarto, Sergipe**.

Site **estático** (HTML + CSS + JavaScript puro), sem backend, pronto para publicar no **GitHub Pages** e migrar para domínio próprio depois.

---

## 📁 Estrutura

```text
/
├── index.html                # Página única (landing page completa)
├── assets/
│   ├── css/style.css         # Estilos (cores da marca em :root)
│   ├── js/
│   │   ├── config.js         # ⭐ CONFIGURAÇÃO CENTRAL (edite aqui)
│   │   └── main.js           # Comportamentos (não precisa editar)
│   ├── images/
│   │   ├── brand/            # Logos da marca
│   │   ├── products/         # 📷 Coloque aqui as fotos dos laços
│   │   └── placeholders/     # (reservado)
│   └── icons/favicon.svg
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── README.md
```

> **Quase tudo que você vai querer mudar está em `assets/js/config.js`.**

---

## ⭐ Como configurar (o essencial)

Abra **`assets/js/config.js`** e preencha os campos. Abaixo, o passo a passo de cada item.

### 1. Adicionar o WhatsApp
No `config.js`, no objeto `SITE_CONFIG`, preencha o campo `whatsapp` **somente com números**, incluindo código do país (55) e DDD:

```js
whatsapp: "5579999999999",
```

Enquanto estiver vazio (`""`), os botões continuam no site, mas mostram um aviso educado em vez de abrir um número falso. Assim que você preencher, **todos** os botões de WhatsApp passam a funcionar automaticamente — inclusive os dos produtos, que já enviam uma mensagem mencionando o modelo.

A mensagem padrão também pode ser editada em `whatsappMessage`.

### 2. Adicionar o Instagram
No `config.js`:

```js
instagram: "https://instagram.com/seu_perfil",
instagramHandle: "@seu_perfil",
```

O link do Instagram no rodapé passa a funcionar sozinho.

### 3. Trocar a logo
Substitua os arquivos em `assets/images/brand/`:
- `logo.png` — logo em fundo branco (usada no cabeçalho e rodapé)
- `logo-cream.png` — logo em fundo creme (usada no Hero)

Mantenha os mesmos nomes de arquivo e a troca é automática. Ideal exportar em PNG com fundo transparente ou nas cores da marca.

### 4. Adicionar fotos dos produtos
1. Salve as fotos em `assets/images/products/` (de preferência em **.webp**, quadradas, ~800×800px).
2. No `config.js`, dentro de `PRODUCTS`, preencha o campo `image` do modelo:

```js
{
  name: "Laço Clássico",
  description: "...",
  category: "Laço infantil",
  image: "assets/images/products/laco-classico.webp",  // <- aqui
  placeholder: "a"
}
```

Se `image` estiver vazio, aparece uma arte-placeholder elegante no lugar (nunca um bloco cinza).

### 5. Adicionar / editar produtos
Ainda no `config.js`, edite o array `PRODUCTS`. Cada objeto vira um card automaticamente. Você pode adicionar quantos quiser:

```js
{
  name: "Nome do modelo",
  description: "Descrição curta.",
  category: "Laço infantil",
  image: "",          // caminho da foto (ou "" para placeholder)
  placeholder: "b"    // "a", "b", "c" ou "d" — variação de cor
}
```

### 6. Adicionar avaliações (depoimentos)
Enquanto o array `REVIEWS` estiver vazio (`[]`), a seção de avaliações **fica oculta** — nada de depoimento inventado.

Quando tiver avaliações **reais**, preencha:

```js
window.REVIEWS = [
  {
    name: "Nome da cliente",
    text: "Comentário real da cliente.",
    stars: 5,            // de 1 a 5
    source: "Google"     // opcional: "Google", "Instagram"...
  }
];
```

A seção aparece automaticamente com nome, comentário e estrelas.

---

## 🌐 Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `lacos-da-gabi`).
2. Envie todos os arquivos deste projeto para o repositório.
3. No GitHub, vá em **Settings → Pages**.
4. Em *Build and deployment*, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará no ar em algo como:
   `https://SEU_USUARIO.github.io/lacos-da-gabi/`

> Como o site usa **caminhos relativos**, ele funciona tanto na raiz de um domínio quanto em subpasta do GitHub Pages, sem ajustes.

---

## 🔗 Conectar um domínio próprio (ex.: lacosdagabi.com.br)

Quando o domínio for registrado:

1. No GitHub: **Settings → Pages → Custom domain**, informe `lacosdagabi.com.br` e salve (isso cria um arquivo `CNAME`).
2. No seu provedor de domínio, aponte o DNS para o GitHub Pages (registros `A` do GitHub + um `CNAME` `www`).
3. Marque **Enforce HTTPS**.
4. **Atualize a URL do site** para o domínio real nestes pontos:
   - `assets/js/config.js` → campo `domain`
   - `index.html` → tags `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`
   - `robots.txt` → linha `Sitemap:`
   - `sitemap.xml` → `<loc>`

Enquanto o domínio final não existir, esses campos podem ficar com a URL do GitHub Pages.

---

## 📊 Google Analytics e Search Console (quando quiser)

Todos os pontos de inserção já estão comentados no `index.html`, dentro do `<head>`:

- **Google Analytics / Tag:** cole o script `gtag.js` no bloco indicado. (Opcionalmente, guarde o ID em `googleAnalyticsId` no `config.js`.)
- **Search Console:** cole a meta de verificação no bloco indicado, ex.:
  `<meta name="google-site-verification" content="SEU_TOKEN">`
- **Meta Pixel (futuro):** bloco reservado logo abaixo.

> Nenhum ID fictício foi instalado. Só ative o que for real.

---

## 🏢 Perfil da Empresa no Google (LocalBusiness)

Quando tiver os **dados comerciais definitivos** (endereço, telefone, horário, coordenadas):

1. No `index.html`, localize o bloco **JSON-LD `LocalBusiness`** (está comentado no `<head>`).
2. Descomente e preencha com os dados reais.
3. Você também pode incorporar o mapa do Perfil da Empresa na seção "Presença local".

Não publique endereço, CEP, telefone ou avaliações que ainda não existam.

---

## 🚀 Preparado para crescer

O código já está organizado para, no futuro, virar um site com várias páginas e categorias, como:

`/lacos-infantis/`, `/lacos-para-bebe/`, `/lacos-escolares/`,
`/lacos-para-festas/`, `/lacos-personalizados/`, `/lacos-femininos/`,
`/colecoes/`, `/sobre/`, `/contato/`.

Os produtos já são renderizados a partir de dados centralizados (`config.js`), o que facilita migrar para categorias e páginas dedicadas quando houver conteúdo real. **Não crie páginas vazias só para SEO** — publique cada página quando ela tiver produtos e conteúdo de verdade.

---

## 🎨 Identidade

Cores centralizadas em `assets/css/style.css` (`:root`):

| Nome          | Cor        |
|---------------|------------|
| Rosa blush    | `#F7D7DE`  |
| Rosa queimado | `#D89AA6`  |
| Rose escuro   | `#B65A6B`  |
| Creme quente  | `#FFF5EC`  |
| Nude suave    | `#E7D2C6`  |
| Marrom apoio  | `#7A5A4E`  |

Tipografia: **Poppins** (textos) + **Dancing Script** (pequenos destaques).

---

Feito com carinho para a **Laços da Gabi** • Lagarto — Sergipe 🎀
