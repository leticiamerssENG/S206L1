package aula_inatel.SuperheroAPI;

import com.intuit.karate.junit5.Karate;

public class SuperheroRunner {

    @Karate.Test
    Karate testSuperHero() {
        return Karate.run("superhero").relativeTo(getClass());
    }

}
