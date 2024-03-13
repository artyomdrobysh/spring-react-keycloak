package by.tyomaninja.oauth2.web;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * API for football.
 *
 * @author Artyom Drobysh (artyom.drobysh96@gmail.com)
 * @since 0.1.0
 * @version 0.1.0
 */
@PreAuthorize("hasAuthority(T(by.tyomaninja.oauth2.domain.enums.Role).FOOTBALL_MANAGER.name())")
@RestController
@RequestMapping(value = "football", produces = APPLICATION_JSON_VALUE)
public class FootballController {

    private static final List<String> CLUBS = List.of(
        "Juventus", "PSG", "Real Madrid", "Bayern Munich", "Barcelona", "Arsenal", "Liverpool",
        "Napoli", "Borussia Dortmund", "AC Monaco", "Newcastle", "Fiorentina", "Aston Villa", "Manchester City"
    );

    @GetMapping("clubs")
    public List<String> getClubs() {
        return CLUBS;
    }
}
