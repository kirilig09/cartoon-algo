package com.example.services;

import com.example.models.Algorithm;
import com.example.repositories.AlgorithmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class AlgorithmServiceImpl implements AlgorithmService{

    @Autowired
    AlgorithmRepository algorithmRepository;

    @Override
    public Page<Algorithm> listAllByPage(Pageable pageable) {
        return algorithmRepository.findAll(pageable);
    }

    @Override
    public Algorithm findById(long id) {
        return algorithmRepository.findOne(id);
    }
}
