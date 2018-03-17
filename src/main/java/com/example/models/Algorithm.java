package com.example.models;

import javax.persistence.*;

@Entity
@Table(name = "algorithms")
public class Algorithm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String algo_name;
    @Column(columnDefinition="varchar2(255)")
    private String speed;
    @Column(columnDefinition="varchar2(255)")
    private String complexity;
    private String video;
    private String algo_image;
    @Column(columnDefinition="varchar2(800)")
    private String algo_desc;

    public Algorithm() {
    }

    public Algorithm(String algo_name, String speed, String complexity, String video, String algo_image, String algo_desc) {
        this.algo_name = algo_name;
        this.speed = speed;
        this.complexity = complexity;
        this.video = video;
        this.algo_image = algo_image;
        this.algo_desc = algo_desc;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAlgo_name() {
        return algo_name;
    }

    public void setAlgo_name(String algo_name) {
        this.algo_name = algo_name;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public String getComplexity() {
        return complexity;
    }

    public void setComplexity(String complexity) {
        this.complexity = complexity;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getAlgo_image() {
        return algo_image;
    }

    public void setAlgo_image(String algo_image) {
        this.algo_image = algo_image;
    }

    public String getAlgo_desc() {
        return algo_desc;
    }

    public void setAlgo_desc(String algo_desc) {
        this.algo_desc = algo_desc;
    }
}
