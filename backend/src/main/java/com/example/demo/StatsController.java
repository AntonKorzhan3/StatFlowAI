package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StatsController {

    @Autowired
    private Stats stats;

    @GetMapping("/stats")
    public String getStats() {
        try {
            
            String userStatsResponse = stats.whenAsynchronousGetRequest("4611686018452357594");
            System.out.println(userStatsResponse);
            return userStatsResponse;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error fetching stats";
        }
    }
}
