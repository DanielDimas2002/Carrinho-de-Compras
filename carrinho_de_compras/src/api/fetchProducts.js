const fetchProducts = async (query) => {
    // Simulação de dados de produtos com base na categoria (query)
    const produtosMock = {
        computador: [
            {
                id: "1",
                name: "Notebook Gamer X1",
                description: "Notebook com processador Intel i7, 16GB de RAM, e placa de vídeo dedicada.",
                price: 5999.99,
                image: "/imagens/notebook.png",
            },
            {
                id: "2",
                name: "Computador All-in-One A3",
                description: "Computador completo com tela de 23 polegadas, ideal para escritórios e home-office.",
                price: 2999.99,
                image: "/imagens/computador.png",
            },
            {
                id: "3",
                name: "PC Desktop SpeedPro",
                description: "PC gamer com processador Ryzen 7, 32GB de RAM e placa de vídeo RTX 3060.",
                price: 7999.99,
                image: "/imagens/notebook.png",
            },
            {
                id: "4",
                name: "Mini PC S10",
                description: "Mini PC compacto com bom desempenho para tarefas do dia a dia.",
                price: 1999.99,
                image: "/imagens/computador.png",
            },
        ],
        mouse: [
            {
                id: "5",
                name: "Mouse Óptico G-Tech",
                description: "Mouse ergonômico, ideal para longas sessões de trabalho ou jogos.",
                price: 129.99,
                image: "/imagens/mouse.png",
            },
            {
                id: "6",
                name: "Mouse Gamer Z-Force",
                description: "Mouse gamer com 7 botões programáveis e luz RGB.",
                price: 249.99,
                image: "/imagens/mouse.png",
            },
            {
                id: "7",
                name: "Mouse Wireless TechX",
                description: "Mouse sem fio com alta precisão e design moderno.",
                price: 99.99,
                image: "/imagens/mouse.png",
            },
        ],
        headset: [
            {
                id: "8",
                name: "Headset Pro Sound",
                description: "Fone de ouvido com microfone, ideal para streamers e gamers.",
                price: 299.99,
                image: "/imagens/headset.png",
            },
            {
                id: "9",
                name: "Headset Gaming X",
                description: "Headset com som surround 7.1, ideal para uma experiência imersiva.",
                price: 349.99,
                image: "/imagens/headset.png",
            },
            {
                id: "10",
                name: "Fone de Ouvido Bluetooth Elite",
                description: "Fone Bluetooth com cancelamento de ruído e bateria de longa duração.",
                price: 399.99,
                image: "/imagens/headset.png",
            },
        ],
        teclado: [
            {
                id: "11",
                name: "Teclado Mecânico XTech",
                description: "Teclado mecânico com switches azuis, ideal para gamers.",
                price: 499.99,
                image: "/imagens/teclado.png",
            },
            {
                id: "12",
                name: "Teclado Multimídia MK-120",
                description: "Teclado sem fio com design ergonômico e teclas silenciosas.",
                price: 159.99,
                image: "/imagens/teclado.png",
            },
            {
                id: "13",
                name: "Teclado Gamer ThunderPro",
                description: "Teclado gamer com retroiluminação RGB e switches mecânicos rápidos.",
                price: 599.99,
                image: "/imagens/teclado.png",
            },
        ],
        celular: [
            {
                id: "14",
                name: "Celular Smartphone Z2",
                description: "Smartphone com tela de 6.5' e câmera de 48MP, ideal para fotos e vídeos.",
                price: 2499.99,
                image: "/imagens/celular.png",
            },
            {
                id: "15",
                name: "Celular Smartphone Ultra X10",
                description: "Celular com tela de 6.8' OLED, 128GB de armazenamento e câmera de 64MP.",
                price: 3499.99,
                image: "/imagens/celular.png",
            },
            {
                id: "16",
                name: "Celular Smartphone Compact Z1",
                description: "Celular compacto com excelente custo-benefício, ideal para quem procura praticidade.",
                price: 1599.99,
                image: "/imagens/celular.png",
            },
            {
                id: "17",
                name: "Celular Premium X9",
                description: "Celular topo de linha com processador Snapdragon, 12GB de RAM e câmera profissional.",
                price: 4499.99,
                image: "/imagens/celular.png",
            },
        ],
    };

    // Verifica a query e retorna os produtos simulados correspondentes
    const produtosFiltrados = produtosMock[query.toLowerCase()] || [];
    
    return produtosFiltrados;
}

export default fetchProducts;
