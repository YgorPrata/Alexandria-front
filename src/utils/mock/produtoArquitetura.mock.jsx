// GET: /produto/arquitetura
// POST: /produto/arquitetura

export function produtoArquitetura() {
    return{
        id: 111,
        categoria: 'Arquitetura',
        nome: 'Nome Arquitetura',
        tipo: 'Renascentista',
        autor: [
            'Nome autor 1',
            'Nome autor 2',
        ],
        material: [
            '',
        ],
        ano: '07/05/1690',
        descricao: 'loren cacildis text xet aut let',
        idItensRelacionados: [
            123,
            124,
        ],
        idObrasAbrigadas: [
            123,
            124,
        ],
        palavrasChave: [
            'palavra 1',
            'palavra 2',
        ],
        arquivoImg: [
            'link img 1',
            'link img 2',
        ],
        arquivodDoc: [],
        arquivodPdf: [],
    }
}