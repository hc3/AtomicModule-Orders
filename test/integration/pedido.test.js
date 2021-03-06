describe('TEST integration para pedidos', function () {

    const Pedidos = require('../../beforeRefatoration/model');

    var defaultPedido = {
        produtos: [{
            id: 1,
            qnt: 100,
            desconto: 100
        }],
        cond_pag: [],
        status: [],
        end_entrega: {
            rua: 'teste',
            bairro: 'teste',
            cidade: 'teste',
            cep: 'teste',
            numero: 100
        },
        end_cobranca: {
            rua: 'teste',
            bairro: 'teste',
            cidade: 'teste',
            cep: 'teste',
            numero: 100
        },
        tipo_envio: [],
        valor_envio: 100,
        voucher: 100,
        desconto: 100,
        client: 'teste',
        observacao: 'teste',
        sub_total: 100,
        total: 100
    }

    beforeEach(function (done) {
        Pedidos.remove({}, function (err) {});
        Pedidos.create(defaultPedido, function (err, dado) { });
        done();
    });

    describe('Route GET /api/pedidos', function () {

        it('deve retornar todos os pedidos do banco', function (done) {
            request
                .get('/api/pedidos')
                .end(function (err, res) {
                    expect(res.body).to.be.instanceof(Array);
                    expect(res.statusCode).to.be.eql(200);
                    done(err);
                })
        })
    });

    describe('Route POST /api/addPedido', function () {

        var newPedido = {
            produtos: [{
                id: 1,
                qnt: 100,
                desconto: 100
            }],
            cond_pag: [],
            status: [],
            end_entrega: {
                rua: 'teste',
                bairro: 'teste',
                cidade: 'teste',
                cep: 'teste',
                numero: 100
            },
            end_cobranca: {
                rua: 'teste',
                bairro: 'teste',
                cidade: 'teste',
                cep: 'teste',
                numero: 100
            },
            tipo_envio: [],
            valor_envio: 100,
            voucher: 100,
            desconto: 100,
            client: 'WebSchool',
            observacao: 'teste',
            sub_total: 100,
            total: 100
        };

        it('deve inserir um novo pedido', function (done) {
            request
                .post('/api/addPedido')
                .send(newPedido)
                .end(function (err, res) {
                    expect(res.body).to.be.eql({ status: 'OK' });
                    expect(res.statusCode).to.be.eql(200);
                    done(err);
                })
        });
    });

});