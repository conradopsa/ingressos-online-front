'use strict';

//Pagina pricipal
setarPagina("html/paginas/home.html")

//Eventos do Menu
$("#menuHome").on('click', () => setarPagina('html/paginas/home.html'));
$("#menuLogin").on('click', () => setarPagina('html/paginas/login.html'));
$("#menuCadastro").on('click', () => setarPagina('html/paginas/cadastro.html'));
$("#menuSobre").on('click', () => setarPagina('html/paginas/sobre.html'));
