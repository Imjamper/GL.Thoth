package com.thoth.api.models

/**
 * Model for paging response
 */
class Page<T>(val items: List<T> = emptyList(), val totalCount: Int = 0)