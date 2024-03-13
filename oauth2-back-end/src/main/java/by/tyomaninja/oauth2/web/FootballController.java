package by.tyomaninja.oauth2.web;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
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
 * @version 1.0.0
 */
@Tag(name = "Football API", description = "API to work with football data")
@PreAuthorize("hasAuthority(T(by.tyomaninja.oauth2.domain.enums.Role).FOOTBALL_MANAGER.name())")
@RestController
@RequestMapping(value = "football", produces = APPLICATION_JSON_VALUE)
public class FootballController {

    private static final List<String> CLUBS = List.of(
        "Juventus", "PSG", "Real Madrid", "Bayern Munich", "Barcelona", "Arsenal", "Liverpool",
        "Napoli", "Borussia Dortmund", "AC Monaco", "Newcastle", "Fiorentina", "Aston Villa", "Manchester City"
    );

    @Operation(summary = "API to get famous football clubs")
    @ApiResponse(
        description = "List of football clubs names",
        responseCode = "200",
        content = @Content(array = @ArraySchema(schema = @Schema(implementation = String.class))))
    @GetMapping("clubs")
    public List<String> getClubs() {
        return CLUBS;
    }
}
