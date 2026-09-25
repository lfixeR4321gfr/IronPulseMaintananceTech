package com.IronPulse.MaintananceTech.Repository;

import com.IronPulse.MaintananceTech.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
/*
 * UserRepository
 *
 * Repository hii ndiyo itatusaidia kuwasiliana na
 * table ya User kwenye PostgreSQL kupitia JPA.
 *
 * Hatutaandika SQL manually kwa operations za kawaida
 * kama save, find, delete, n.k.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    /*
     * Kutafuta user kwa kutumia email.
     *
     * Baadaye hii itakuwa muhimu sana wakati wa login,
     * kwa sababu user ataingiza email na password.
     */
    Optional<User> findByEmail(String email);
}