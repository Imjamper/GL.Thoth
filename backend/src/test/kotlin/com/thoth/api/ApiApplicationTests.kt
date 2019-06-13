package com.thoth.api

import com.beust.klaxon.Klaxon
import com.beust.klaxon.json
import com.thoth.api.models.Question
import junit.framework.Assert.assertNotNull
import kotlinx.io.StringReader
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.MvcResult
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content

@RunWith(SpringRunner::class)
@SpringBootTest
@AutoConfigureMockMvc
class ApiApplicationTests {

	@Autowired
	private lateinit var mvc: MockMvc

	@Test
	fun testSearch() {
		val result = mvc.perform(MockMvcRequestBuilders.get("/questions?query=kotlin&page=1&pageSize=10"))
				.andExpect(MockMvcResultMatchers.status().isOk)
				.andReturn()

		val jsonString = result.response.contentAsString
		val jsonObj = Klaxon().parseJsonObject(StringReader(jsonString))
		val itemsJson = jsonObj["items"]
		val questions = Klaxon().parseArray<Question>(Klaxon().toJsonString(itemsJson))
		val total = jsonObj.int("totalCount")
		assertNotNull(questions)
		assertThat(total).isNotZero()
	}

}
