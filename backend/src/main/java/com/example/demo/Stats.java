package com.example.demo;
import java.io.IOException;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;


@SpringBootApplication
@ComponentScan({"com.example.demo"})
@EntityScan("com.example.demo")
@EnableJpaRepositories("com.example.demo")
public class Stats{
    private final String BASE_URL = "https://www.bungie.net/Platform/Destiny2";
    OkHttpClient client = new OkHttpClient();

    public String whenAsynchronousGetRequest(String accountId) {
        Request request = new Request.Builder()
        .url(BASE_URL + "/1/Account/" + accountId + "/Stats/")
        .addHeader("x-api-key", "d2e04d63d8f44b48a4fd69ff347577aa")
        .build();
        
        
        Call call = client.newCall(request);
        try {
            Response response = call.execute();
            System.out.println(response.body().string());
            return response.body().string();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return accountId;
        
    }
}
