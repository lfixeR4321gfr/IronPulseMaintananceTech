package com.IronPulse.MaintananceTech.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /* Configure HTTP security.*/
    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {
        http

                /* Enable CORS.This allows our React frontend to communicate with Spring Boot.*/
                .cors(cors -> {})

                /* Disable CSRF */
                .csrf(csrf -> csrf.disable())

                /*Disable server-side sessions. Later JWT will handle authentication.*/
                .sessionManagement(session -> session
                        .sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                /* For now, allow our API requests. These rules will become stricter when JWT authentication is implemented. */
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/users/**").permitAll()
                        .anyRequest().permitAll()
                );
        return http.build();
    }


    /*  PasswordEncoder bean. BCrypt hashes passwords before they are stored in Postgress */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    /*
     * CORS configuration. Our React application runs on: http://localhost:5173
     *
     * Our Spring Boot application runs on: http://localhost:8080
     *
     * Because they use different ports,  we need to allow the React origin. */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration =
                new CorsConfiguration();

        /* Allow requests from React.*/
        configuration.setAllowedOrigins(
                List.of("http://localhost:5174")
        );

        /* Allowing these HTTP methods */
        configuration.setAllowedMethods(
                List.of(
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE",
                        "OPTIONS"
                )
        );

        /* Allow all request headers.*/
        configuration.setAllowedHeaders(
                List.of("*")
        );

        /* Apply this CORS configuration to all API endpoints.*/
        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration(
                "/**",
                configuration
        );
        return source;
    }
}