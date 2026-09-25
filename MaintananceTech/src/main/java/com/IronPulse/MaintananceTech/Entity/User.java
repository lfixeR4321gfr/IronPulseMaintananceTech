package com.IronPulse.MaintananceTech.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;


/*
 * User Entity

 * Kwa mfumo wetu tutakuwa na users wenye roles:
 * ADMIN
 * TECHNICIAN
 * CLIENT
 * registered data and last login
 */
@Entity
@Table(name = "users")

public class User {

    /*
     * ID ya kila user.
     *
     * @Id:
     * Inaonyesha kuwa hii ndiyo primary key.
     *
     * @GeneratedValue:
     * Database itajigenerate ID automatically.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*
      Jina kamili la user.
     */
    @Column(nullable = false)
    private String fullName;

    //    for registerd date
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private  LocalDateTime createdAt;

    //    for user last login
    private LocalDateTime lastLogin;




    @Column(nullable = false, unique = true)
    private String email;


    @Column(nullable = false)
    private String password;






    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;


    /*
     * Empty constructor.
     *
     * JPA/Hibernate inahitaji constructor hii.
     */
    public User() {
    }


    /*
     * Constructor ya kutengeneza User mpya.
     */
    public User(String fullName, String email, String password, LocalDateTime createdAt, LocalDateTime lastLogin, Role role) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.lastLogin = lastLogin;
        this.role = role;
    }


    // =========================
    // Getters and Setters
    // =========================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


//getter and setter for user registered date
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    //getter and setter for user last login date
    public LocalDateTime getLastLogin() {
            return lastLogin;
    }

    public void setLastLogin(LocalDateTime lastLogin) {
        this.lastLogin = lastLogin;
    }



    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}