package aula_inatel.star_wars.pokemon;

import com.intuit.karate.junit5.Karate;

class PokeRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
