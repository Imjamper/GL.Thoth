package com.thoth.api.models

import com.beust.klaxon.Json

/**
 * Question DTO object
 */
data class Question(
    @Json("title")
    val title: String,

    @Json("owner")
    val owner: User,

    @Json("is_answered")
    val isAnswered: Boolean = false,

    @Json("tags")
    val tags: List<String> = emptyList(),

    @Json("view_count")
    val viewCount: Int = 0,

    @Json("answer_count")
    val answerCount: Int = 0,

    @Json("score")
    val score: Int = 0,

    @Json("creation_date")
    val creationDate: Long = 0
)



