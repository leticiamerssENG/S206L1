Feature: Testando resources da API json placeholder

Background: Executa uma vez antes de cada teste
    * def url_base = 'https://jsonplaceholder.typicode.com'
    * def request_json = read("json_teste.json")
    * def request_json2 = read("json_teste2.json")

Scenario: Pegando elementos do array de response e testando seu tipo  
    Given url url_base
    And path '/posts'
    When method get
    Then status 200
    And match $ == '#[]' // Verifica se o resultado é um array
    And match $ == '#[100]' // Verifica se o resultado possui 100 elementos e é um array
    And match each $ contains {title: '#string', userId: '#number'} // Verifica se cada um dos elementos possui o campo 'title' do tipo string e o campo 'userID' do tipo number

Scenario Outline: Criando um novo elemento usando o método POST
    Given url url_base
    And path '/posts'
    And request <request_json>  
    When method post
    Then status 201
    And match $.id == 101
    And match $.title == '#string'
    And match $.body == '<body>'
    And match $.userId == '#number' 

    Examples:
    | request_json | body | // nome da variavel
    | request_json | body de teste |// primeira variacao
    | request_json2 | body de teste2 |// segunda variacao