
package com.IronPulse.MaintananceTech.Controller;

import com.IronPulse.MaintananceTech.Dto.UserResponseDTO;
import com.IronPulse.MaintananceTech.Entity.User;
import com.IronPulse.MaintananceTech.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/*
 * This controller handles HTTP requests related to users.
 */

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    /*
     * Constructor Injection
     *
     * Spring provides UserService automatically.
     */
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /*
     * Create a new user.
     *
     * HTTP Method: POST
     * Endpoint: /api/users
     */
    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(
            @RequestBody User user) {

        /*
         * Send the user to the service.
         *
         * UserService will hash the password
         * before saving it in PostgreSQL.
         */
        User savedUser = userService.saveUser(user);

        /*
         * Convert User Entity into UserResponseDTO.
         * Notice that password is NOT included
         * in UserResponseDTO.
         */
        UserResponseDTO response = new UserResponseDTO(
                savedUser.getId(),
                savedUser.getFullName(),
                savedUser.getEmail(),
                savedUser.getRole(),
                savedUser.getCreatedAt(),
                savedUser.getLastLogin()
        );

        /*
          Return the safe DTO instead of returning the complete User Entity.
         */
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}





//package com.IronPulse.MaintananceTech.Controller;
//
//import com.IronPulse.MaintananceTech.Entity.User;
//import com.IronPulse.MaintananceTech.Services.UserService;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//

// * UserController
// *
// * This controller handles HTTP requests related to users.
// *
// * Request flow:
// *
// * Frontend / Postman
// *        ↓
// * UserController
// *        ↓
// * UserService
// *        ↓
// * UserRepository
// *        ↓
// * PostgreSQL
// */
//
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    /*
//     * UserService is responsible for handling
//     * the business logic related to users.
//     */
//    private final UserService userService;
//
//    /*
//     * Constructor Injection
//     *
//     * Spring automatically provides the UserService
//     * object when creating this controller.
//     */
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    /*
//     * Create a new user.
//     *
//     * HTTP Method: POST
//     * Endpoint: /api/users
//
//     * @RequestBody converts the JSON request body
//     * into a Java User object.
//     */
//    @PostMapping
//    public ResponseEntity<User> createUser(@RequestBody User user) {
//
//        /*
//         * Send the user to the service layer
//         * so it can be saved in the database.
//         */
//        User savedUser = userService.saveUser(user);
//
//        /*
//         * Return the saved user with HTTP status 201 (Created).
//         */
//        return ResponseEntity
//                .status(HttpStatus.CREATED)
//                .body(savedUser);
//    }
//}