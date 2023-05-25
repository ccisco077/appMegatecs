package com.example.appmegatecs;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Agrega este código para iniciar la nueva Activity
        Intent navigation = new Intent(this, NavigationHomeActivity.class);
        startActivity(navigation);
    }
}