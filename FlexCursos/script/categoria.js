let cursos = {
    tecnologia: [
        { nome: 'Curso de JavaScript', descricao: 'Aprenda JavaScript do zero!', preco: 'R$ 240,00', imagem: '../images/javascript-stickers-adesivo.png', udemy:'https://www.udemy.com/share/1026xa3@rcUrvIKBj-kWTqw4FNX30LPH4-nFttEfghJDEXicwcsveJgutLBQSYWaJoGR_3dV/' },

        { nome: 'Curso de C++', descricao: 'Aprenda C++ do zero!', preco: 'R$ 230,00', imagem: '../images/c-adesivo-sticker.png', udemy:'https://www.udemy.com/share/101qSU3@f_8NkMjU5XAhELxWPm92rgqJpdinuQ3QBObsMy97pp_6OKvpF2TL0LQGY8r1W8nU/' },

        { nome: 'Curso de C#', descricao: 'Aprenda C# do zero!', preco: 'R$ 250,00', imagem: '../images/c-sharp-adesivo-sticker.png', udemy:'https://www.udemy.com/share/101Wjk3@9i_eedcv-He2s_MbDSTgexArulhTiJDMmHpvAloDj5f6XUQO-bUF1NZI1M7cvDxw/' },

        { nome: 'Curso de Python', descricao: 'Aprenda Python do zero!', preco: 'R$ 180,00', imagem: '../images/python-logo-adesivo-sticker.png', udemy:'https://www.udemy.com/share/101rZm3@BcNfPnrrzN4SoclUwHxgw83eqPV5kZy3hBPJfyob26erC2BIFhT9M32GR2C8Y0Lh/' },
        
    ],
    negocios: [
        { nome: 'Curso de Marketing Digital', descricao: 'Introdução ao Marketing Digital.', preco: 'R$ 200,00', imagem: '../images/marketing-digital.png', udemy:'https://www.udemy.com/share/101Wtu3@WCLzXF1b4TX9a_V7Rt65lK7tKmV_Uame4YhhPPDvm4e7ZZNl-6ckxzroZahJYbib/' },

        { nome: 'Curso de Pesquisa de mercado', descricao: 'Aprenda a fazer uma pesquisa aprofundada', preco: 'R$ 160,00', imagem: '../images/Mercado.png', udemy:'https://www.udemy.com/share/1027sS3@skGqQTMpTb3MeqyTdJhbmgFMPkhzfLp7UgwAScpqyulmiu81Rj3FvHezO180u8wd/' },

        { nome: 'Curso de Marca/Branding', descricao: 'Aprenda a compreender sobre o mercado de atuação.', preco: 'R$ 190,00', imagem: '../images/branding.png', udemy:'https://www.udemy.com/share/101sa63@uT6bSxDYeuJl4VHaVHwbikH7TxO3zkWIhj2VJ5nXCb0M7hJoAe5XP4RryLP5Phgn/' },

        { nome: 'Curso de Consultor', descricao: 'Aprenda a prestar consultoria para empresas que desejam alavancar suas estratégias e precisam de uma “ajudinha”..', preco: 'R$ 170,00', imagem: '../images/analista-de-negocios.png', udemy:'https://www.udemy.com/share/106Jg63@0YSQyPiJSsYxNZ74W5gxcfTaLpIdE9yu-z7ofsTamrLeCQ2L8K4HBF2SuC4P3HAr/' },
        
    ],
    arte: [
        { nome: 'Curso de Desenho', descricao: 'Desenhe como um profissional.', preco: 'R$ 100,00', imagem: '../images/desenhar-pessoas.jpg',udemy:'https://www.udemy.com/share/106TDy3@C_Ur7v4N4KozJNYUzgCalVcpehUzJbk7cAcbyvb07GSyRR_h9NY_pvZVZEj-Ag7p/' },

        { nome: 'Curso de Pinturas', descricao: 'Pinte como um profissional.', preco: 'R$ 160,00', imagem: '../images/van-gogh.jpg', udemy:'https://www.udemy.com/share/101zSO3@3inYYwHQAdqZ0UojfSKZm8KgEwJUgqbqH1Y6gjna7nDhg3rtY5AgnlMHd3YJ03OX/' },

        { nome: 'Curso de Caricatura', descricao: 'Faça Caricaturas Sensacionais.', preco: 'R$ 140,00', imagem: '../images/Caricatura.jpg', udemy:'https://www.udemy.com/share/101yXy3@THYqMF15Vv-UtsW-nf5O73Pbmac1E4pPKvTDNKH5Lkzl5r2_We5jyJqQNFfV0Fzr/' },

        { nome: 'Curso de Literatura', descricao: 'Escreva suas proprias historias.', preco: 'R$ 180,00', imagem: '../images/livros-antigos.webp', udemy:'https://www.udemy.com/share/1055Mi3@LfP6MKj5399C8ciOz-Z4JJsO2HPcC3Xc9ygPpS0Ghrvx2D6-tf2Acb2v9TCASFeq/' },

        
    ]
};

function mudarCategoria(categoriaSelecionada) {
    let conteudoCategoria = document.getElementById('conteudoCategoria');
    conteudoCategoria.innerHTML = '';

    cursos[categoriaSelecionada].forEach(curso => {
        conteudoCategoria.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img src="${curso.imagem}" class="card-img-top" alt="${curso.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${curso.nome}</h5>
                        <p class="card-text">${curso.descricao}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-muted">${curso.preco}</span>
                            <a href="${curso.udemy}}" class="btn btn-primary">Inscrever-se</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}


mudarCategoria('tecnologia');
