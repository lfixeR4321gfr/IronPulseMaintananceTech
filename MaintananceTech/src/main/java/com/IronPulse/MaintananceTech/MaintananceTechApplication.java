package com.IronPulse.MaintananceTech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
 * Main class of the IronPulse MaintenanceTech application.
 *
 * @SpringBootApplication tells Spring Boot that this is
 * the main entry point of our application.
 */
@SpringBootApplication
public class MaintananceTechApplication {

    public static void main(String[] args) {

        /*
         * This starts the Spring Boot application.
         */
        SpringApplication.run(MaintananceTechApplication.class, args);
    }
}