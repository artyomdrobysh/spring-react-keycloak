package by.tyomaninja.oauth2.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Web configuration.
 *
 * @author Artyom Drobysh (artyom.drobysh96@gmail.com)
 * @since 1.1.0
 * @version 1.1.0
 */
@EnableWebMvc
@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final String[] corsAllowedOrigins;

    public WebConfig(@Value("${app.cors.allowed-origins}") String[] corsAllowedOrigins) {
        this.corsAllowedOrigins = corsAllowedOrigins;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins(corsAllowedOrigins);
    }
}
