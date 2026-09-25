package com.IronPulse.MaintananceTech.Entity;


import jakarta.persistence.*;
import org.aspectj.bridge.IMessage;

@Entity
@Table(name = "JobRequests")
public class JobRequests {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String fullName;


    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private int phoneNumber;

    @Column(nullable = false)
    private String email;


   @Column(nullable = false)
   private String appointmentDay;

    @Column(nullable = false)
    private String appointmentTime;

    @Column(nullable = false)
    private String deviceType;

   @Column(nullable = false)
   private String Message;




    //    Empty constractor for JPA/hibernate
    public JobRequests(){

    }

//    Making constractor for fullname and address
    public JobRequests(String fullName, String address, int phoneNumber, String email,  String appointmentDay, String appointmentTime, String deviceType, String Message ){
        this.fullName = fullName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.appointmentDay = appointmentDay;
        this.appointmentTime = appointmentTime;
        this.deviceType = deviceType;
        this.Message = Message;



    }




    // Getters and Setters
    // =========================
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }


    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }


    public String getAddress(){
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhoneNumber(){
        return phoneNumber;
    }
    public void setPhoneNumber(int phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getAppointmentDay() {
        return appointmentDay;
    }

    public void setAppointmentDay(String appointmentDay) {
        this.appointmentDay = appointmentDay;
    }

    public String getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(String appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getdeviceType(){
        return deviceType;
    }
    public void setdeviceType(String deviceType) {
        this.deviceType = deviceType;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
       this.Message = message;
    }
}


