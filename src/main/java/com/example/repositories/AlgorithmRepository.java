package com.example.repositories;

import com.example.models.Algorithm;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlgorithmRepository  extends PagingAndSortingRepository<Algorithm,Long>{
    Algorithm findById(Long id);
}
