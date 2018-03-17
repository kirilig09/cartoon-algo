package com.example.controllers;

import com.example.models.Algorithm;
import com.example.services.AlgorithmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class AlgorithmController {
    @Autowired
    AlgorithmService algorithmService;

    @GetMapping("/api/algos")
    public Page<Algorithm> getAlgorithms(Pageable pageable){
        return algorithmService.listAllByPage(pageable);
    }

    @GetMapping("/api/algos/:id")
    public Algorithm algorithmById(@PathVariable long id){
        return algorithmService.findById(id);
    }

    @PostMapping("/judge")
    public String judgeSystem(){//@RequestBody String body){
        return "judge";
    }
}
