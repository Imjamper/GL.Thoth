package com.thoth.api.models

import com.beust.klaxon.Json

/**
 * User DTO object
 */
data class User(
    @Json("user_id")
    val id: Long = 0,

    @Json("reputation")
    val reputation: Int = 0,

    @Json("display_name")
    val displayName: String = ""
)