package com.example.ktexample

import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private var isButtonClicked = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button: Button = findViewById(R.id.my_button)
        button.setOnClickListener {
            isButtonClicked = true
        }
    }

    fun isButtonClicked(): Boolean {
        return isButtonClicked
    }
}