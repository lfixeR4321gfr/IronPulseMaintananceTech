package com.IronPulse.MaintananceTech.Services;

import com.IronPulse.MaintananceTech.Dto.RegisterRequestDTO;
import com.IronPulse.MaintananceTech.Entity.Role;
import com.IronPulse.MaintananceTech.Entity.User;
import com.IronPulse.MaintananceTech.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/*
 * AuthService
 *
 * This service contains the business logic for authentication.
 *
 * For now, we are implementing only CLIENT registration.
 *
 * Request flow:
 *
 * React
 *   ↓
 * AuthController
 *   ↓
 * AuthService
 *   ↓
 * UserRepository
 *   ↓
 * PostgreSQL
 */
@Service
public class AuthService {

    /* Repository used to save and retrieve users from the database  */
    private final UserRepository userRepository;

    /* this PasswordEncoder is used to hash the password  before saving it into PostgreSQL.*/
    private final PasswordEncoder passwordEncoder;

    /* Constructor Injection */
    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /* Register a new client */
    public User registerClient(RegisterRequestDTO request) {

        /* Check whether the email is already registered */
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email is already registered.");
        }

        /*Create a new User Entity. */
        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        /* we Hash the password before saving */
        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        /* Public registration creates CLIENT accounts only. */
        user.setRole(Role.CLIENT);

        /* Save the user in PostgreSQL.*/
        return userRepository.save(user);
    }
}