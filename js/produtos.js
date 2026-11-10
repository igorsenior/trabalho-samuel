// Catálogo fictício: 50 objetos com nome, descrição, categoria, preço e imagem.
// Para alterar um produto, edite os dados abaixo e a foto indicada.
const produtos = [
  {
    "id": 1,
    "nome": "Árvore Clássica 1,80 m",
    "descricao": "Árvore verde com laços e bolas vermelhas.",
    "categoria": "Árvores de Natal",
    "preco": 349.9,
    "imagem": "img/produtos/01-arvore-classica-1-80-m.webp"
  },
  {
    "id": 2,
    "nome": "Árvore Nevada 1,80 m",
    "descricao": "Galhos com efeito de neve e detalhes prateados.",
    "categoria": "Árvores de Natal",
    "preco": 429.9,
    "imagem": "img/produtos/02-arvore-nevada-1-80-m.webp"
  },
  {
    "id": 3,
    "nome": "Mini Árvore de Mesa",
    "descricao": "Pequena árvore com pinhas e bolinhas douradas.",
    "categoria": "Árvores de Natal",
    "preco": 59.9,
    "imagem": "img/produtos/03-mini-arvore-de-mesa.webp"
  },
  {
    "id": 4,
    "nome": "Árvore Nórdica 1,50 m",
    "descricao": "Modelo natural com estrelas de madeira.",
    "categoria": "Árvores de Natal",
    "preco": 219.9,
    "imagem": "img/produtos/04-arvore-nordica-1-50-m.webp"
  },
  {
    "id": 5,
    "nome": "Árvore Iluminada 2,10 m",
    "descricao": "Árvore grande com luzes amarelas delicadas.",
    "categoria": "Árvores de Natal",
    "preco": 549.9,
    "imagem": "img/produtos/05-arvore-iluminada-2-10-m.webp"
  },
  {
    "id": 6,
    "nome": "Árvore Rosa 1,50 m",
    "descricao": "Árvore rosa com detalhes e laços delicados.",
    "categoria": "Árvores de Natal",
    "preco": 299.9,
    "imagem": "img/produtos/06-arvore-rosa-1-50-m.webp"
  },
  {
    "id": 7,
    "nome": "Árvore Rústica no Cesto",
    "descricao": "Modelo compacto com pinhas e cesto vermelho.",
    "categoria": "Árvores de Natal",
    "preco": 129.9,
    "imagem": "img/produtos/07-arvore-rustica-no-cesto.webp"
  },
  {
    "id": 8,
    "nome": "Árvore de Luzes Coloridas",
    "descricao": "Árvore verde com luzes de várias cores.",
    "categoria": "Árvores de Natal",
    "preco": 389.9,
    "imagem": "img/produtos/08-arvore-de-luzes-coloridas.webp"
  },
  {
    "id": 9,
    "nome": "Bolas Vermelhas — Kit 6",
    "descricao": "Bolas vermelhas brilhantes com flocos dourados.",
    "categoria": "Enfeites e Bolas",
    "preco": 29.9,
    "imagem": "img/produtos/09-bolas-vermelhas-kit-6.webp"
  },
  {
    "id": 10,
    "nome": "Bolas Douradas — Kit 6",
    "descricao": "Conjunto de bolas douradas lisas e com glitter.",
    "categoria": "Enfeites e Bolas",
    "preco": 34.9,
    "imagem": "img/produtos/10-bolas-douradas-kit-6.webp"
  },
  {
    "id": 11,
    "nome": "Bolas Prateadas — Kit 6",
    "descricao": "Bolas clássicas em três acabamentos prateados.",
    "categoria": "Enfeites e Bolas",
    "preco": 34.9,
    "imagem": "img/produtos/11-bolas-prateadas-kit-6.webp"
  },
  {
    "id": 12,
    "nome": "Flocos de Neve — Kit 4",
    "descricao": "Enfeites brancos para pendurar na árvore.",
    "categoria": "Enfeites e Bolas",
    "preco": 19.9,
    "imagem": "img/produtos/12-flocos-de-neve-kit-4.webp"
  },
  {
    "id": 13,
    "nome": "Estrela Dourada",
    "descricao": "Estrela dourada decorada para o topo da árvore.",
    "categoria": "Enfeites e Bolas",
    "preco": 24.9,
    "imagem": "img/produtos/13-estrela-dourada.webp"
  },
  {
    "id": 14,
    "nome": "Laço de Veludo Vermelho",
    "descricao": "Laço grande com acabamento dourado.",
    "categoria": "Enfeites e Bolas",
    "preco": 18.9,
    "imagem": "img/produtos/14-laco-de-veludo-vermelho.webp"
  },
  {
    "id": 15,
    "nome": "Sinos Dourados — Par",
    "descricao": "Dois sininhos com corda e laço vermelho.",
    "categoria": "Enfeites e Bolas",
    "preco": 22.9,
    "imagem": "img/produtos/15-sinos-dourados-par.webp"
  },
  {
    "id": 16,
    "nome": "Bengalas Decorativas",
    "descricao": "Par de bengalas vermelhas e brancas.",
    "categoria": "Enfeites e Bolas",
    "preco": 14.9,
    "imagem": "img/produtos/16-bengalas-decorativas.webp"
  },
  {
    "id": 17,
    "nome": "Pisca-Pisca Branco Quente",
    "descricao": "Fio luminoso com iluminação aconchegante.",
    "categoria": "Iluminação",
    "preco": 39.9,
    "imagem": "img/produtos/17-pisca-pisca-branco-quente.webp"
  },
  {
    "id": 18,
    "nome": "Pisca-Pisca Colorido",
    "descricao": "Cordão de luzes verdes, azuis e vermelhas.",
    "categoria": "Iluminação",
    "preco": 42.9,
    "imagem": "img/produtos/18-pisca-pisca-colorido.webp"
  },
  {
    "id": 19,
    "nome": "Cascata de Luz LED",
    "descricao": "Luzes em cascata para janelas e varandas.",
    "categoria": "Iluminação",
    "preco": 69.9,
    "imagem": "img/produtos/19-cascata-de-luz-led.webp"
  },
  {
    "id": 20,
    "nome": "Estrela de Janela LED",
    "descricao": "Estrela luminosa para pendurar na janela.",
    "categoria": "Iluminação",
    "preco": 49.9,
    "imagem": "img/produtos/20-estrela-de-janela-led.webp"
  },
  {
    "id": 21,
    "nome": "Cortina de Luzes",
    "descricao": "Cortina de LEDs para decorar ambientes.",
    "categoria": "Iluminação",
    "preco": 79.9,
    "imagem": "img/produtos/21-cortina-de-luzes.webp"
  },
  {
    "id": 22,
    "nome": "Velas LED Natalinas",
    "descricao": "Três velas decorativas com luz suave.",
    "categoria": "Iluminação",
    "preco": 54.9,
    "imagem": "img/produtos/22-velas-led-natalinas.webp"
  },
  {
    "id": 23,
    "nome": "Guirlanda Tradicional",
    "descricao": "Ramos verdes com bolas e grande laço vermelho.",
    "categoria": "Guirlandas",
    "preco": 89.9,
    "imagem": "img/produtos/23-guirlanda-tradicional.webp"
  },
  {
    "id": 24,
    "nome": "Guirlanda de Pinhas",
    "descricao": "Estilo rústico com pinhas e laço de juta.",
    "categoria": "Guirlandas",
    "preco": 74.9,
    "imagem": "img/produtos/24-guirlanda-de-pinhas.webp"
  },
  {
    "id": 25,
    "nome": "Guirlanda Dourada",
    "descricao": "Guirlanda brilhante com bolas e flores douradas.",
    "categoria": "Guirlandas",
    "preco": 99.9,
    "imagem": "img/produtos/25-guirlanda-dourada.webp"
  },
  {
    "id": 26,
    "nome": "Guirlanda Nevada",
    "descricao": "Guirlanda branca com detalhes prateados.",
    "categoria": "Guirlandas",
    "preco": 94.9,
    "imagem": "img/produtos/26-guirlanda-nevada.webp"
  },
  {
    "id": 27,
    "nome": "Guirlanda de Frutinhas",
    "descricao": "Ramos verdes com pequenas frutinhas vermelhas.",
    "categoria": "Guirlandas",
    "preco": 64.9,
    "imagem": "img/produtos/27-guirlanda-de-frutinhas.webp"
  },
  {
    "id": 28,
    "nome": "Guirlanda de Eucalipto",
    "descricao": "Folhas verdes com laço branco discreto.",
    "categoria": "Guirlandas",
    "preco": 69.9,
    "imagem": "img/produtos/28-guirlanda-de-eucalipto.webp"
  },
  {
    "id": 29,
    "nome": "Papai Noel com Presentes",
    "descricao": "Boneco decorativo com saco de presentes.",
    "categoria": "Papai Noel",
    "preco": 119.9,
    "imagem": "img/produtos/29-papai-noel-com-presentes.webp"
  },
  {
    "id": 30,
    "nome": "Papai Noel Leitor",
    "descricao": "Papai Noel sentado lendo um pequeno livro.",
    "categoria": "Papai Noel",
    "preco": 129.9,
    "imagem": "img/produtos/30-papai-noel-leitor.webp"
  },
  {
    "id": 31,
    "nome": "Papai Noel Rústico",
    "descricao": "Figura natalina com lanterna e detalhes naturais.",
    "categoria": "Papai Noel",
    "preco": 109.9,
    "imagem": "img/produtos/31-papai-noel-rustico.webp"
  },
  {
    "id": 32,
    "nome": "Papai Noel Dourado",
    "descricao": "Boneco em roupa branca e dourada.",
    "categoria": "Papai Noel",
    "preco": 139.9,
    "imagem": "img/produtos/32-papai-noel-dourado.webp"
  },
  {
    "id": 33,
    "nome": "Dupla de Papais Noéis",
    "descricao": "Dois bonequinhos decorativos de cerâmica.",
    "categoria": "Papai Noel",
    "preco": 49.9,
    "imagem": "img/produtos/33-dupla-de-papais-noeis.webp"
  },
  {
    "id": 34,
    "nome": "Papai Noel de Pelúcia",
    "descricao": "Boneco macio com roupa de veludo vermelho.",
    "categoria": "Papai Noel",
    "preco": 69.9,
    "imagem": "img/produtos/34-papai-noel-de-pelucia.webp"
  },
  {
    "id": 35,
    "nome": "Caixa para Presente",
    "descricao": "Caixa vermelha com laço dourado grande.",
    "categoria": "Presentes",
    "preco": 24.9,
    "imagem": "img/produtos/35-caixa-para-presente.webp"
  },
  {
    "id": 36,
    "nome": "Kit Caneca Natalina",
    "descricao": "Caneca decorada em embalagem de presente.",
    "categoria": "Presentes",
    "preco": 54.9,
    "imagem": "img/produtos/36-kit-caneca-natalina.webp"
  },
  {
    "id": 37,
    "nome": "Kit Chocolate Quente",
    "descricao": "Caixa com caneca, chocolate e biscoitos.",
    "categoria": "Presentes",
    "preco": 79.9,
    "imagem": "img/produtos/37-kit-chocolate-quente.webp"
  },
  {
    "id": 38,
    "nome": "Calendário do Advento",
    "descricao": "Casinha de madeira com 24 gavetinhas.",
    "categoria": "Presentes",
    "preco": 99.9,
    "imagem": "img/produtos/38-calendario-do-advento.webp"
  },
  {
    "id": 39,
    "nome": "Cesta Natalina",
    "descricao": "Cesta com doces e chocolates para presentear.",
    "categoria": "Presentes",
    "preco": 149.9,
    "imagem": "img/produtos/39-cesta-natalina.webp"
  },
  {
    "id": 40,
    "nome": "Suéter de Rena",
    "descricao": "Suéter vermelho com desenho de rena.",
    "categoria": "Roupas Natalinas",
    "preco": 89.9,
    "imagem": "img/produtos/40-sueter-de-rena.webp"
  },
  {
    "id": 41,
    "nome": "Gorro do Papai Noel",
    "descricao": "Gorro vermelho com tecido branco macio.",
    "categoria": "Roupas Natalinas",
    "preco": 19.9,
    "imagem": "img/produtos/41-gorro-do-papai-noel.webp"
  },
  {
    "id": 42,
    "nome": "Pijama Natalino",
    "descricao": "Conjunto verde com desenhos de renas.",
    "categoria": "Roupas Natalinas",
    "preco": 119.9,
    "imagem": "img/produtos/42-pijama-natalino.webp"
  },
  {
    "id": 43,
    "nome": "Globo de Neve",
    "descricao": "Globo com casinha iluminada e cenário nevado.",
    "categoria": "Decoração e Utensílios",
    "preco": 69.9,
    "imagem": "img/produtos/43-globo-de-neve.webp"
  },
  {
    "id": 44,
    "nome": "Caminho de Mesa Natalino",
    "descricao": "Toalha decorativa vermelha com flores.",
    "categoria": "Decoração e Utensílios",
    "preco": 49.9,
    "imagem": "img/produtos/44-caminho-de-mesa-natalino.webp"
  },
  {
    "id": 45,
    "nome": "Velas Aromáticas Natalinas",
    "descricao": "Trio de velas decoradas com motivos natalinos.",
    "categoria": "Decoração e Utensílios",
    "preco": 64.9,
    "imagem": "img/produtos/45-velas-aromaticas-natalinas.webp"
  },
  {
    "id": 46,
    "nome": "Meia de Natal",
    "descricao": "Meia vermelha com flocos de neve bordados.",
    "categoria": "Decoração e Utensílios",
    "preco": 29.9,
    "imagem": "img/produtos/46-meia-de-natal.webp"
  },
  {
    "id": 47,
    "nome": "Presépio Decorativo",
    "descricao": "Mini presépio com figuras tradicionais.",
    "categoria": "Decoração e Utensílios",
    "preco": 129.9,
    "imagem": "img/produtos/47-presepio-decorativo.webp"
  },
  {
    "id": 48,
    "nome": "Casinha de Biscoito",
    "descricao": "Casinha decorativa com doces e glacê.",
    "categoria": "Decoração e Utensílios",
    "preco": 59.9,
    "imagem": "img/produtos/48-casinha-de-biscoito.webp"
  },
  {
    "id": 49,
    "nome": "Boneco de Neve",
    "descricao": "Boneco branco com cachecol vermelho.",
    "categoria": "Decoração e Utensílios",
    "preco": 44.9,
    "imagem": "img/produtos/49-boneco-de-neve.webp"
  },
  {
    "id": 50,
    "nome": "Prato Natalino",
    "descricao": "Prato decorado com ramos e flores de Natal.",
    "categoria": "Decoração e Utensílios",
    "preco": 39.9,
    "imagem": "img/produtos/50-prato-natalino.webp"
  }
];
