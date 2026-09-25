package com.IronPulse.MaintananceTech.Dto;


public class RegisterRequestDTO {
    private String fullName;
    private String email;
    private String password;

    /* Empty constructor. Spring uses this when converting JSON into a Java object.*/
    public RegisterRequestDTO() {
    }

    /* making for our entitis Constructor.*/
    public RegisterRequestDTO(
            String fullName,
            String email,
            String password) {

        this.fullName = fullName;
        this.email = email;
        this.password = password;
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
}