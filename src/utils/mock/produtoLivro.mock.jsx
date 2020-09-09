// GET: /produto/livro
// POST: /produto/livro

export function produtoLivro() {
    return{
        id: 111,
        categoria: 'Livro',
        nome: 'Nome livro',
        tipo: 'suspense',
        autor: [
            'Nome autor 1',
            'Nome autor 2',
        ],
        editora: 'nome editora',
        edicao: 1,
        ano: 2017,
        biografia: 'loren cacildis text xet aut let',
        descricao: 'loren cacildis text xet aut let',
        idItensRelacionados: [
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