package com.IronPulse.MaintananceTech.Services;
import com.IronPulse.MaintananceTech.Entity.JobRequests;
import com.IronPulse.MaintananceTech.Repository.JobRequestsRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JobRequestsService {

    // Repository is responsible for communicating with the database.
    private final JobRequestsRepository repository;

    // Constructor injection:
    // Spring automatically provides JobRequestsRepository here.
    public JobRequestsService(JobRequestsRepository repository) {
        this.repository = repository;
    }

    // This method saves a new Job Request into the database.
    public JobRequests create(JobRequests jobRequest) {
        return repository.save(jobRequest);
    }

    // This method retrieves all Job Requests from the database.
    public List<JobRequests> getAll() {
        return repository.findAll();
    }
}

