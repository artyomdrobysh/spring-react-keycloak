package by.tyomaninja.oauth2.configs;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.OAuthFlow;
import io.swagger.v3.oas.annotations.security.OAuthFlows;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration for Spring OpenAPI.
 *
 * @author Artyom Drobysh (artyom.drobysh96@gmail.com)
 * @since 0.1.0
 * @version 0.1.0
 */
@OpenAPIDefinition(
    info = @Info(
        title = "${app.name}",
        description = "${app.description}",
        version = "${app.version}"),
    security = @SecurityRequirement(name = "auth")
)
@SecurityScheme(
    type = SecuritySchemeType.OAUTH2,
    name = "auth",
    in = SecuritySchemeIn.HEADER,
    flows = @OAuthFlows(authorizationCode = @OAuthFlow(
        authorizationUrl = "${app.oauth.authorization-url}",
        tokenUrl = "${app.oauth.token-url}"
    )))
@Configuration
public class SpringDocConfig {
}
