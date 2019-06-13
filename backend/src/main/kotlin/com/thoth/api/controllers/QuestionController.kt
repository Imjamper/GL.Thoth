package com.thoth.api.controllers

import com.thoth.api.services.*
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*

/**
 * Questions controller
 */
@RestController
@RequestMapping("questions")
class QuestionsController(private val stackExchangeService: StackExchangeService) {

    @GetMapping
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    fun search(@RequestParam query: String, @RequestParam page: Int, @RequestParam pageSize: Int) = stackExchangeService.search(query, page, pageSize)
}