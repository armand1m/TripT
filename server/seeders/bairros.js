'use strict';

var bairrosVitoria = [{"bar_ds_bairro":"Aeroporto"},{"bar_ds_bairro":"Andorinhas"},{"bar_ds_bairro":"Antônio Honório"},{"bar_ds_bairro":"Ariovaldo Favalessa"},{"bar_ds_bairro":"Arquipélago de Martim Vaz"},{"bar_ds_bairro":"Barro Vermelho"},{"bar_ds_bairro":"Bela Vista"},{"bar_ds_bairro":"Bento Ferreira"},{"bar_ds_bairro":"Boa Vista"},{"bar_ds_bairro":"Bonfim"},{"bar_ds_bairro":"Caratoíra"},{"bar_ds_bairro":"Centro"},{"bar_ds_bairro":"Comdusa"},{"bar_ds_bairro":"Conquista"},{"bar_ds_bairro":"Consolação"},{"bar_ds_bairro":"Cruzamento"},{"bar_ds_bairro":"da Penha"},{"bar_ds_bairro":"de Lourdes"},{"bar_ds_bairro":"do Cabral"},{"bar_ds_bairro":"do Moscoso"},{"bar_ds_bairro":"do Quadro"},{"bar_ds_bairro":"Enseada do Suá"},{"bar_ds_bairro":"Estrelinha"},{"bar_ds_bairro":"Fonte Grande"},{"bar_ds_bairro":"Forte São João"},{"bar_ds_bairro":"Fradinhos"},{"bar_ds_bairro":"Goiabeiras"},{"bar_ds_bairro":"Grande Vitória"},{"bar_ds_bairro":"Gurigica"},{"bar_ds_bairro":"Horto"},{"bar_ds_bairro":"Ilha das Caieiras"},{"bar_ds_bairro":"Ilha de Santa Maria"},{"bar_ds_bairro":"Ilha do Boi"},{"bar_ds_bairro":"Ilha do Frade"},{"bar_ds_bairro":"Ilha do Príncipe"},{"bar_ds_bairro":"Ilhas Oceânicas de Trindade"},{"bar_ds_bairro":"Inhanguetá"},{"bar_ds_bairro":"Itararé"},{"bar_ds_bairro":"Jabour"},{"bar_ds_bairro":"Jaburu"},{"bar_ds_bairro":"Jardim Camburi"},{"bar_ds_bairro":"Jardim da Penha"},{"bar_ds_bairro":"Jesus de Nazareth"},{"bar_ds_bairro":"Joana D'arc"},{"bar_ds_bairro":"Jucutuquara"},{"bar_ds_bairro":"Maria Ortiz"},{"bar_ds_bairro":"Mário Cypreste"},{"bar_ds_bairro":"Maruípe"},{"bar_ds_bairro":"Mata da Praia"},{"bar_ds_bairro":"Monte Belo"},{"bar_ds_bairro":"Morada de Camburi"},{"bar_ds_bairro":"Morro Santa Helena"},{"bar_ds_bairro":"Nazareth"},{"bar_ds_bairro":"Nova Palestina"},{"bar_ds_bairro":"Parque Industrial"},{"bar_ds_bairro":"Parque Moscoso"},{"bar_ds_bairro":"Piedade"},{"bar_ds_bairro":"Pontal de Camburi"},{"bar_ds_bairro":"Praia do Canto"},{"bar_ds_bairro":"Praia do Suá"},{"bar_ds_bairro":"Redenção"},{"bar_ds_bairro":"República"},{"bar_ds_bairro":"Resistência"},{"bar_ds_bairro":"Romão"},{"bar_ds_bairro":"Santa Cecília"},{"bar_ds_bairro":"Santa Clara"},{"bar_ds_bairro":"Santa Helena"},{"bar_ds_bairro":"Santa Lúcia"},{"bar_ds_bairro":"Santa Luíza"},{"bar_ds_bairro":"Santa Martha"},{"bar_ds_bairro":"Santa Tereza"},{"bar_ds_bairro":"Santo André"},{"bar_ds_bairro":"Santo Antônio"},{"bar_ds_bairro":"Santos Dumont"},{"bar_ds_bairro":"Santos Reis"},{"bar_ds_bairro":"São Benedito"},{"bar_ds_bairro":"São Cristóvão"},{"bar_ds_bairro":"São José"},{"bar_ds_bairro":"São Pedro"},{"bar_ds_bairro":"Segurança do Lar"},{"bar_ds_bairro":"Solon Borges"},{"bar_ds_bairro":"Tabuazeiro"},{"bar_ds_bairro":"Universitário"},{"bar_ds_bairro":"Vila Rubim"}];
var bairrosVilaVelha = [{"bar_ds_bairro":"Alecrim"},{"bar_ds_bairro":"Alvorada"},{"bar_ds_bairro":"Araçás"},{"bar_ds_bairro":"Argolas"},{"bar_ds_bairro":"Aribiri"},{"bar_ds_bairro":"Ataíde"},{"bar_ds_bairro":"Balneário Ponta da Fruta"},{"bar_ds_bairro":"Barra do Jucu"},{"bar_ds_bairro":"Barramares"},{"bar_ds_bairro":"Boa Vista I"},{"bar_ds_bairro":"Boa Vista II"},{"bar_ds_bairro":"Brisamar"},{"bar_ds_bairro":"Cavalieri"},{"bar_ds_bairro":"Centro de Vila Velha"},{"bar_ds_bairro":"Chácara do Conde"},{"bar_ds_bairro":"Cidade da Barra"},{"bar_ds_bairro":"Cobi de Baixo"},{"bar_ds_bairro":"Cobi de Cima"},{"bar_ds_bairro":"Cobilândia"},{"bar_ds_bairro":"Cocal"},{"bar_ds_bairro":"Coqueiral de Itaparica"},{"bar_ds_bairro":"Cristóvão Colombo"},{"bar_ds_bairro":"Darly Santos"},{"bar_ds_bairro":"Divino Espírito Santo"},{"bar_ds_bairro":"Dom João Batista"},{"bar_ds_bairro":"Garoto"},{"bar_ds_bairro":"Glória"},{"bar_ds_bairro":"Guaranhuns"},{"bar_ds_bairro":"Ibes"},{"bar_ds_bairro":"Ilha da Conceição"},{"bar_ds_bairro":"Ilha das Flores"},{"bar_ds_bairro":"Ilha dos Ayres"},{"bar_ds_bairro":"Ilha dos Bentos"},{"bar_ds_bairro":"Industrial"},{"bar_ds_bairro":"Interlagos"},{"bar_ds_bairro":"Itapuã"},{"bar_ds_bairro":"Jabaeté"},{"bar_ds_bairro":"Jaburuna"},{"bar_ds_bairro":"Jardim Asteca"},{"bar_ds_bairro":"Jardim Colorado"},{"bar_ds_bairro":"Jardim do Vale"},{"bar_ds_bairro":"Jardim Guadalajara"},{"bar_ds_bairro":"Jardim Guaranhuns"},{"bar_ds_bairro":"Jardim Marilândia"},{"bar_ds_bairro":"João Goulart"},{"bar_ds_bairro":"Jockey de Itaparica"},{"bar_ds_bairro":"Morada da Barra"},{"bar_ds_bairro":"Morada do Sol"},{"bar_ds_bairro":"Morro da Lagoa"},{"bar_ds_bairro":"Normília da Cunha"},{"bar_ds_bairro":"Nossa Senhora da Penha"},{"bar_ds_bairro":"Nova América"},{"bar_ds_bairro":"Nova Itaparica"},{"bar_ds_bairro":"Nova Ponta da Fruta"},{"bar_ds_bairro":"Novo México"},{"bar_ds_bairro":"Olaria"},{"bar_ds_bairro":"Paul"},{"bar_ds_bairro":"Pedra dos Búzios"},{"bar_ds_bairro":"Planalto"},{"bar_ds_bairro":"Polo Empresarial Novo México"},{"bar_ds_bairro":"Ponta da Fruta"},{"bar_ds_bairro":"Pontal das Garças"},{"bar_ds_bairro":"Praia da Costa"},{"bar_ds_bairro":"Praia das Gaivotas"},{"bar_ds_bairro":"Praia de Itaparica"},{"bar_ds_bairro":"Praia dos Recifes"},{"bar_ds_bairro":"Primeiro de Maio"},{"bar_ds_bairro":"Residencial Coqueiral"},{"bar_ds_bairro":"Residencial Sol da Barra"},{"bar_ds_bairro":"Retiro do Congo"},{"bar_ds_bairro":"Rio Marinho"},{"bar_ds_bairro":"Riviera da Barra"},{"bar_ds_bairro":"Sagrada Família"},{"bar_ds_bairro":"Santa Clara"},{"bar_ds_bairro":"Santa Inês"},{"bar_ds_bairro":"Santa Mônica"},{"bar_ds_bairro":"Santa Mônica Popular"},{"bar_ds_bairro":"Santa Paula I"},{"bar_ds_bairro":"Santa Paula II"},{"bar_ds_bairro":"Santa Rita"},{"bar_ds_bairro":"Santos Dumont"},{"bar_ds_bairro":"São Conrado"},{"bar_ds_bairro":"São Torquato"},{"bar_ds_bairro":"Soteco"},{"bar_ds_bairro":"Terra Vermelha"},{"bar_ds_bairro":"Ulisses Guimarães"},{"bar_ds_bairro":"Vale Encantado"},{"bar_ds_bairro":"Vila Batista"},{"bar_ds_bairro":"Vila Garrido"},{"bar_ds_bairro":"Vila Guaranhuns"},{"bar_ds_bairro":"Vila Nova"},{"bar_ds_bairro":"Vinte e Três de Maio"},{"bar_ds_bairro":"Vista da Penha"},{"bar_ds_bairro":"Xuri"},{"bar_ds_bairro":"Zumbí dos Palmares"}];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bairros', bairrosVilaVelha, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bairros', null, {});
  }
};
