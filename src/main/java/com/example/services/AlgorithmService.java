package com.example.services;

import com.example.models.Algorithm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AlgorithmService {
    Page<Algorithm> listAllByPage(Pageable pageable);
    Algorithm findById(long id);
}
