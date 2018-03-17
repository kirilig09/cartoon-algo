package com.example.models;

import javax.persistence.*;

@Entity
@Table(name = "algorithms")
public class Algorithm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String speed;
    private String complexity;
    private String video;
    private String image;
    private String description;

    public Algorithm() {
    }

    public Algorithm(String name, String description, String speed, String complexity, String video, String image) {
        this.name = name;
        this.description = description;
        this.speed = speed;
        this.complexity = complexity;
        this.video = video;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getComplexity() {
        return complexity;
    }

    public void setComplexity(String complexity) {
        this.complexity = complexity;
    }
}
