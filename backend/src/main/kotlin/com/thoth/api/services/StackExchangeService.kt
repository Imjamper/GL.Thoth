package com.thoth.api.services

import com.beust.klaxon.Klaxon
import com.thoth.api.models.Page
import com.thoth.api.models.Question
import khttp.responses.Response
import org.json.JSONObject
import org.springframework.stereotype.Service
import java.util.*

/**
 * Service to interact with stackoverflow api
 */
@Service
class StackExchangeService {
     /**
      * Search questions by query
      */
    fun search(query: String, page: Int = 1, pageSize: Int = 30): Page<Question> {
        val url = "http://api.stackexchange.com/2.2/search?page=$page&pagesize=$pageSize&intitle=$query&order=desc&sort=activity&site=stackoverflow&filter=!9Z(-x-Q)8"
        val response : Response = khttp.get(url)
        val obj: JSONObject = response.jsonObject
        if(obj.has("items") && obj.has("total")) {
            val itemsJson = obj.getJSONArray("items")
            val questions = Klaxon().parseArray<Question>(itemsJson.toString())
            val total = obj.getInt("total")
            if (questions != null) return Page(questions, total)
        }
        return Page()
    }
}

