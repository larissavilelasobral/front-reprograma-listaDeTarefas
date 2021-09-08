Manipulando registros como pessoa administradora (requer token de autenticação)
Feature	Método	Rota
Login de pessoa administradora	POST	/admin/login
Cadastro de candidaturas negras	POST	/candidaturas-negras
Atualização de cadastro de candidaturas por id	PUT	/candidaturas-negras/:_id
Remoção de candidaturas que não são de movimentos sociais	DELETE	/candidaturas-negras/participacao?movimentoSocial=unidefined
Cadastro de pessoa administradora	POST	/admin/
Lista de todas as pessoas administradoras	GET	/admin
Atualização de cadastro de pessoa administradora por id	PUT	/admin/:id
Remoção de pessoa administradora por email	DELETE	/admin?email=<email_da_pessoa_administradora_castrada>