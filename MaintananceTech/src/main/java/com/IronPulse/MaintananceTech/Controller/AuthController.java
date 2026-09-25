package com.IronPulse.MaintananceTech.Controller;

import com.IronPulse.MaintananceTech.Dto.RegisterRequestDTO;
import com.IronPulse.MaintananceTech.Dto.UserResponseDTO;
import com.IronPulse.MaintananceTech.Entity.User;
import com.IronPulse.MaintananceTech.Services.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/*
 * AuthController
 *
 * This controller handles authentication-related requests.
 *
 * For now, we are implementing CLIENT registration only.
 *
 * React
 *   ↓
 * POST /api/auth/register
 *   ↓
 * AuthController
 *   ↓
 * AuthService
 *   ↓
 * PostgreSQL
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    /*
     * Constructor Injection*/
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /*Register a new CLIENT. HTTP Method: POST Endpoint: /api/auth/register*/
    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(
            @RequestBody RegisterRequestDTO request) {

        /*
         * Send registration data to AuthService.
         *
         * AuthService will:
         * 1. Check whether email already exists.
         * 2. Hash the password.
         * 3. Set the role to CLIENT.
         * 4. Save the user.
         */
        User savedUser = authService.registerClient(request);

        /*  Convert User Entity into a safe response DTO through removing some data like password */
        UserResponseDTO response = new UserResponseDTO(
                savedUser.getId(),
                savedUser.getFullName(),
                savedUser.getEmail(),
                savedUser.getRole(),
                savedUser.getCreatedAt(),
                savedUser.getLastLogin()
        );

        /* Return HTTP 201 CREATED. */
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}