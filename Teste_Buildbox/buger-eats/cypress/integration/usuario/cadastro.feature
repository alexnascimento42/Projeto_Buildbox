Feature: cadastro
 Eu como prestador de serviços vou realizar o meu cadastro no site buger-eats  

  Scenario: Realizar cadastro valido
    Given que estou no home do site Buger-Eats
    When clico no botão para cadastro de prestador de serviços e valido a pagina 
    And preencho todos os dados com as informaçoes validas
    And clico no botao para salvar o cadastro
    Then o sistema informara que o cadastro foi realizado com sucesso

  Scenario: cadastro CPF invalido
    Given que estou no home do site Buger-Eats
    When clico no botão para cadastro de prestador de serviços e valido a pagina 
    And preencho todos os dados com as informaçoes validas
    And incluo um CPF invalido
    And clico no botao para salvar o cadastro
    Then o sistema informara que o cadastro nao foi realizado CPF invalido

