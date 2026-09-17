//package com.IronPulse.MaintananceTech.Services;
//
//import com.IronPulse.MaintananceTech.Entity.User;
//import com.IronPulse.MaintananceTech.Repository.UserRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
///*
//
// *
// * Kazi yake ni kupokea logic inayohusu User na
// * kuwasiliana na UserRepository.
// *
// * Flow:
// *
// * Controller
// *     ↓
// * UserService
// *     ↓
// * UserRepository
// *     ↓
// * PostgreSQL
// */
//@Service
//public class UserService {
//
//    /*
//     * Repository ndiyo inayohusika na database operations.
//     */
//    private final UserRepository userRepository;
//
//
//    /*
//     * Constructor Injection
//     *
//     * Spring ita-create UserRepository na kuiweka
//     * automatically ndani ya UserService.
//     */
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//
//    /*
//     * Kuhifadhi User mpya kwenye database.
//     *
//     * userRepository.save(user) itafanya INSERT
//     * kama User huyu bado hana ID.
//     */
//    public User saveUser(User user) {
//
//        return userRepository.save(user);
//    }
//
//
//    /*
//     * Kutafuta User kwa kutumia email.
//     *
//     * Tunatumia Optional kwa sababu email inaweza
//     * kutokuwepo kwenye database.
//     */
//    public Optional<User> findUserByEmail(String email) {
//
//        return userRepository.findByEmail(email);
//    }
//}
//
//




package com.IronPulse.MaintananceTech.Services;

import com.IronPulse.MaintananceTech.Entity.User;
import com.IronPulse.MaintananceTech.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

/*
 * UserService
 *
 * This service contains the business logic related to users.
 *
 * Request flow:
 *
 * Controller
 *      ↓
 * UserService
 *      ↓
 * UserRepository
 *      ↓
 * PostgreSQL
 */
@Service
public class UserService {

    /*
     * Repository used to communicate with the database.
     */
    private final UserRepository userRepository;

    /*
     * PasswordEncoder is used to securely hash
     * the user's password before saving it.
     */
    private final PasswordEncoder passwordEncoder;

    /*
     * Constructor Injection
     *
     * Spring will provide both dependencies automatically.
     */
    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /*
     * Save a new user.
     *
     * Before saving the user, we encode the password.
     */
    public User saveUser(User user) {

        /*
         * Get the plain-text password entered by the user.
         */
        String encodedPassword =
                passwordEncoder.encode(user.getPassword());

        /*
         * Replace the plain-text password with
         * the encoded password.
         */
        user.setPassword(encodedPassword);

        /*
         * Save the user with the encoded password.
         */
        return userRepository.save(user);
    }

    /*
     * Find a user by email.
     */
    public Optional<User> findUserByEmail(String email) {

        return userRepository.findByEmail(email);
    }
}