package com.IronPulse.MaintananceTech.Dto;

import com.IronPulse.MaintananceTech.Entity.Role;

import java.time.LocalDateTime;

/*
 * UserResponseDTO
 *
 * This DTO defines the user information that
 * is safe to return to the frontend.
 *
 * Notice that the password is intentionally
 * NOT included here.
 */
public class UserResponseDTO {

    private Long id;

    private String fullName;

    private String email;

    private Role role;

    private LocalDateTime createdAt;

    private LocalDateTime lastLogin;

    /*
     * Empty constructor.
     */
    public UserResponseDTO() {
    }

    /*
     * Constructor used to create the DTO
     * from user information.
     */
    public UserResponseDTO(
            Long id,
            String fullName,
            String email,
            Role role,
            LocalDateTime createdAt,
            LocalDateTime lastLogin) {

        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
        this.lastLogin = lastLogin;
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public Role getRole() {
        return role;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getLastLogin() {
        return lastLogin;
    }
}