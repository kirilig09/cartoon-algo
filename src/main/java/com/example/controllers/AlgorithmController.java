package com.example.controllers;

import com.example.models.Algorithm;
import com.example.services.AlgorithmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlgorithmController {
    @Autowired
    AlgorithmService algorithmService;

    @RequestMapping("/api/algos")
    public Page<Algorithm> getAlgorithms(Pageable pageable){
        return algorithmService.listAllByPage(pageable);
    }

    @RequestMapping("/api/algos/:id")
    public Algorithm algorithmById(@PathVariable long id){
        return algorithmService.findById(id);
    }
}
