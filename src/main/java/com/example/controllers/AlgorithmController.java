package com.example.controllers;

import com.example.models.Algorithm;
import com.example.services.AlgorithmService;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
public class AlgorithmController {
    @Autowired
    AlgorithmService algorithmService;

    @GetMapping("/api/algos")
    public Page<Algorithm> getAlgorithms(Pageable pageable){
        return algorithmService.listAllByPage(pageable);
    }

    @GetMapping("/api/algos/{id}")
    public Algorithm algorithmById(@PathVariable(name = "id") long id){
        System.out.println(id);
        return algorithmService.findById(id);
    }

    @PostMapping("/api/judge")
    public String judgeSystem(@RequestBody String json){
        /*OkHttpClient client = new OkHttpClient();
        okhttp3.RequestBody body = okhttp3.RequestBody.create(MediaType.parse("application/json; charset=utf-8"), String.format("{}"));
        Request request = new Request.Builder()
                .url("")
                .post(body)
                .build();
        try {
            Response response = client.newCall(request).execute();
            return response.body().string();
        } catch (IOException e) {
            e.printStackTrace();
            return "error";
        }*/
        /*String res = String .format("{\"source_code\":\"%s\",\"language_id\":}",json.get("source_code"),json.get("language_id"));
        System.out.println(res);

        return res;*/
        return json;
    }
}
