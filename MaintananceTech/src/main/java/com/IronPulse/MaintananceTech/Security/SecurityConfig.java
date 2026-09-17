package com.IronPulse.MaintananceTech.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/*
 * Security configuration for the IronPulse MaintenanceTech application.
 *
 * For now, authentication is not required because we are still
 * testing user registration and password hashing.
 *
 * JWT authentication will be added later.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /*
     * Configure Spring Security's HTTP security rules.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                /*
                 * Disable CSRF because this application uses REST APIs.
                 */
                .csrf(csrf -> csrf.disable())

                /*
                 * Disable server-side sessions.
                 *
                 * Later, JWT will be responsible for authentication.
                 */
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                /*
                 * Allow the User API to be accessed without authentication
                 * for now.
                 *
                 * This is temporary and will be changed when
                 * JWT authentication is implemented.
                 */
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/users/**").permitAll()
                        .anyRequest().permitAll()
                );

        return http.build();
    }

    /*
     * PasswordEncoder bean.
     *
     * BCrypt will hash passwords before they are stored
     * in the PostgreSQL database.
     *
     * UserService will automatically receive this bean
     * through constructor injection.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}