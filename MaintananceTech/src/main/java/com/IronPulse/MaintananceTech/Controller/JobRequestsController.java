//package com.IronPulse.MaintananceTech.Controller;
//
//
//import com.IronPulse.MaintananceTech.Entity.JobRequests;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//
//
//@RestController
//@RequestMapping("/api/job-requests")
//
//public class JobRequestsController {
//    private final JobRequestsServices jobRequestsServices;
//
//    public JobRequestsController(JobRequestsServices jobRequestsServices){
//        this.jobRequestsServices = jobRequestsServices;
//    }
//
//    @PostMapping
//    public ResponseEntity<JobRequests> createJobRequests(@RequestBody JobRequests JobRequests){
//
//        JobRequests savedJobrequests = jobRequestsServices.saveJobRequests(jobRequests);
//
//        return  ResponseEntity
//                .status(HttpStatus.CREATED)
//                .body(savedJobrequests);
//    }
//
//}

package com.IronPulse.MaintananceTech.Controller;

import com.IronPulse.MaintananceTech.Entity.JobRequests;
import com.IronPulse.MaintananceTech.Services.JobRequestsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/api/job-requests")
public class JobRequestsController {

    // Service contains the business logic for Job Requests.
    private final JobRequestsService jobRequestsService;

    // Constructor injection:
    // Spring automatically gives us JobRequestsService.
    public JobRequestsController(JobRequestsService jobRequestsService) {
        this.jobRequestsService = jobRequestsService;
    }

    // POST endpoint
    // Used to create/save a new Job Request.

    @PostMapping
    public ResponseEntity<JobRequests> createJobRequest(
            @RequestBody JobRequests jobRequest) {

        // Send the Job Request to the Service.
        JobRequests savedJobRequest =
                jobRequestsService.create(jobRequest);

        // Return HTTP 201 CREATED together with saved data.
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedJobRequest);
    }

    // GET endpoint
    // Used to retrieve all Job Requests.
    // GET http://localhost:8080/api/job-requests
    @GetMapping
    public ResponseEntity<List<JobRequests>> getAllJobRequests() {

        // Ask the Service to retrieve all Job Requests.
        List<JobRequests> jobRequests =
                jobRequestsService.getAll();

        // Return HTTP 200 OK together with the list.
        return ResponseEntity.ok(jobRequests);
    }
}


