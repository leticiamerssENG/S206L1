Feature: Testando API Superhero API

Scenario: Testando retorno Id 1
  Given url "https://superheroapi.com/api/6303787349701602/1"
  When method get
  Then status 200

Scenario: Testando retorno Id invalido (caso negativo)
    Given url "https://superheroapi.com/api/6303787349701602/1000"
    When method get
    Then status 200
    And match $.response == 'error' 


Scenario: Testando retorno Ocupação do Id 70
    Given url "https://superheroapi.com/api/6303787349701602/70/work"
    When method get
    Then status 200
    And match $.occupation == 'Businessman'   
    
Scenario: Testando retorno Nome do Id 50
    Given url "https://superheroapi.com/api/6303787349701602/50/work"
    When method get
    Then status 200
    And match $.name == 'Atom' 
    
    
Scenario: Testando tipo de retorno de alguns dados do Id 30
    Given url "https://superheroapi.com/api/6303787349701602/30/connections"
    When method get
    Then status 200
    And match $ contains {response: '#string', id: '#string'}

Scenario: Testando Caminho incorreto (caso negativo)
    Given url "https://superheroapi.com/api/6303787349701602/30/connection"
    When method get
    Then status 200
    And match $.response == 'error'
    


     




    

 
