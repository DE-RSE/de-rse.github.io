---
layout: default
title: 'Generation of a wrapper library for MPI - MeDiPack'
---

# Generation of a wrapper library for MPI - MeDiPack

## [Max Sagebaum](../../speaker/3V9PAJ/)

The wrapping of libraries like MPI requires an approach that is flexible in multiple aspects. Changes and additions to the library, updates to the wrapper logic, and bugfixes need to be handled. Problems will arise if the wrapper is hard coded: any required change to the wrapping logic would affect the whole implementation. The maintenance of such an approach is usually not feasible. The approach for in the code is to write a code generator. Changes to the wrapper logic only need to be made at one place and additions to the wrapped library can either be handled automatically or by updating a definition file. This talk will show the challenges of writing the generator, the tools used for the generation and the reasons why a wrapper is requi

🎥 **This talk was recorded on video and is available at <https://doi.org/10.5446/42474>.**