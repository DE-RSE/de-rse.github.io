---
layout: default
title: 'How to save a scientist’s career with data classes'
---

# How to save a scientist’s career with data classes

## [David Klein](../../speaker/EUWJCE/)

Imagine you have to withdraw your “Science” paper because you accidentally multiplied the wrong columns of your data. Experience shows that this scenario is not unlikely. Clever designed data classes could mitigate this risk. We present the prototype of an R data class targeted at increasing the reliability of data processing. The aim is to have a data class that features built-in consistency checks and meta-data handling without putting additional burden on the scientist. The current prototype keeps track of units and converts untis automatically, it prevents non-matching data from being combined, and it automatically generates meta-data during calculations allowing to inspect what kind of calculation has been performed on the data.