package com.example.demo;
import org.junit.jupiter.api.Test;
import java.io.IOException;

import okhttp3.Call;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

class OkHttpTest {
    private final String BASE_URL = "https://www.bungie.net/Platform/Destiny2";
    OkHttpClient client = new OkHttpClient();

	@Test
    public void whenAsynchronousGetRequest_thenCorrect() {
        Request request = new Request.Builder()
        .url(BASE_URL + "/1/Account/4611686018452357594/Stats/")
        .addHeader("x-api-key", "d2e04d63d8f44b48a4fd69ff347577aa")
        .build();
        
        
        Call call = client.newCall(request);
        try {
            Response response = call.execute();
            System.out.println(response.body().string());
            System.out.flush();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }

}
