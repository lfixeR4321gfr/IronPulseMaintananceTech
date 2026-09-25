package com.IronPulse.MaintananceTech.Repository;
import com.IronPulse.MaintananceTech.Entity.JobRequests;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface JobRequestsRepository extends JpaRepository<JobRequests, Long> {
    Optional<JobRequests> findByFullName(String fullName);

}