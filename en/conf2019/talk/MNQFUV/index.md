---
layout: default
title: 'The Quest For Better Tests In Scientific Computing'
---

# The Quest For Better Tests In Scientific Computing

## [René Fritze](../../speaker/VSSPN8/)

Writing tests for scientific computing software is very hard. The input space for programs can be infinite, therefore selecting "good" or "interesting" inputs is crucial. Time and computing resources to execute tests however are limited, but developers need timely responses to changes. Guidelines to implement tests under these, and likely more, constraints are not readily available in literature. This contribution tells the story of trying to move our Python library pyMOR to property based testing, simplifying the process of writing more meaningful tests with less code and balancing runtime versus impact. We also include a call to action for the community to jointly develop concrete guidelines for designing and implementing unit tests.