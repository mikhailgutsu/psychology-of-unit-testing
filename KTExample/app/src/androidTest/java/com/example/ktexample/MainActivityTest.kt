package com.example.ktexample

import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.ext.junit.rules.ActivityScenarioRule
import org.junit.Rule
import org.junit.Test

class MainActivityTest {

    @get:Rule
    val activityRule = ActivityScenarioRule(MainActivity::class.java)

    @Test
    fun testButtonClick() {
        // Проверяем, что кнопка отображается
        onView(withId(R.id.my_button)).check(matches(isDisplayed()))

        // Нажимаем на кнопку
        onView(withId(R.id.my_button)).perform(click())

        // Проверяем, что кнопка была нажата
        activityRule.scenario.onActivity { activity ->
            assert(activity.isButtonClicked())
        }
    }
}
