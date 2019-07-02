---
layout: default
title: 'Die Hard 1.1024.0: backward compatibility of a search engine with persistant IDs'
---

# Die Hard 1.1024.0: backward compatibility of a search engine with persistant IDs

## [Thomas Krause](../../speaker/KFD3VM/), [Stephan Druskat](../../speaker/WQ9MC9/)

Semantic versioning can be used to describe the downward compatibility of software. Using the example of a search engine for linguistic annotations, we show which problems can occur when operating a search-based service with persistent IDs for queries and results and present possible solutions. Different components, such as the software, the domain-specific query language, and the web service, provide different guarantees and make different demands on downward compatibility. By migrating an existing PostgreSQL-based system to our own implementation, we gain important practical experience in the downward-compatible modernization of an existing system, which we will share in this talk.