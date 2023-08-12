-- Inserir categorias de produtos
INSERT INTO categoria_produto (descricao) VALUES
('Papelaria'),
('Armarinho'),
('Informática');

-- Inserir produtos
INSERT INTO produto (nome, preco_unitario, marca, estoque, id_categoria_produto) VALUES
('Caneca Preta Sublimável', 25.99, 'Acrilex', '50', 2),
('Camisa Branca Sublimável', 50.99, 'CeA', '30', 2),
('Mouse Pad Gamer', 39.99, 'RTX', '20', 3),
('Caneta 5x1 Esferográfica', 10.00, 'BIC', '40', 1);

-- Inserir cargos
INSERT INTO cargo (descricao) VALUES
('Gerente'),
('Vendedor'),
('Caixa');

-- Inserir funcionários
INSERT INTO funcionario (nome, endereco, telefone, id_cargo) VALUES
('João Silva', 'Rua A, 123', '12345678901', 1),
('Maria Souza', 'Av. B, 456', '98765432101', 2),
('Carlos Santos', 'Rua C, 789', '78945612301', 3),
('Ana Oliveira', 'Av. D, 1011', '45612378901', 1);

-- Inserir clientes
INSERT INTO cliente (nome, endereco, telefone) VALUES
('Pedro Rodrigues', 'Rua X, 789', '23456789012'),
('Juliana Almeida', 'Av. Y, 567', '34567890123'),
('Ricardo Nunes', 'Rua Z, 123', '45678901234');

-- Inserir métodos de pagamento
INSERT INTO metodo_pagamento (descricao) VALUES
('Cartão de Crédito'),
('Boleto Bancário'),
('Dinheiro'),
('PIX');

-- Inserir pedidos
INSERT INTO pedido (data, valor_total, descricao, quantidade, id_funcionario, id_cliente, id_produto, id_metodo_pagamento) VALUES
('2023-08-10 10:00:00', 89.99, 'Caneca personalizada dia dos namorado com foto', 2, 1, 1, 1, 1),
('2023-08-10 14:00:00', 69.99, 'Camisa branca personalizada Lego Batman e Coringa', 1, 2, 2, 2, 2),
('2023-08-11 09:00:00', 50.97, 'Caneta com nome personalizado Minie', 5, 3, 3, 4, 3),
('2023-08-11 15:30:00', 49.98, 'MousePad gamer personalizado com nome League of Legends', 1, 4, 1, 3, 1);