---
title: "Symposium on Teaching Research Software Engineering in Germany, Dresden, 17.12-18.12.2025"
layout: post
author: "The TeachingRSE collaboration"
menulang: en
---

For the last two days of the work year 2025, the [teaching RSE working
group](https://github.com/the-teachingRSE-project) of the [deRSE
society](https://de-rse.org/de/index.html) met in Dresden for the
[Symposium on Teaching Research Software Engineering in
Germany](https://the-teachingrse-project.github.io/teachingRSE-symposium/).
The journey to Dresden was fairly straight-forward for those coming from Berlin.
Others were not so lucky and arrived a few hours late. The people who
arrived on time used the opportunity to drink coffee and catch up with
various research software engineering topics.

One of the discussions was about why it is so difficult to recruit helpers
and instructors for Carpentries workshops. It seems like the usual
candidates, PhD students, are too busy working in the labs of their
supervisors to be able to do any teaching. In the UK, PhD
students work on their projects which are part of the lab. However, they
are not expected to take on any extra responsibilities in running a lab.
This role is usually fulfilled by post-docs. This might explain why it
appears to be more difficult to establish the carpentries in Germany.

[Guido Juckeland](https://www.hzdr.de/db/!ContMan.Visi.Card?pUser=4930&pNid=5) gave the first presentation on teaching RSE at the TU
Dresden. The course comprises typical RSE topics: shell, working in
teams, licensing, testing and CI/CD, build systems and software
publications. Teaching is done in lectures and practicals. The students
first work on individual project during the first half and then on group
projects during the second half. They use the
[flake8](https://flake8.pycqa.org/en/latest/) python linter for marking.
It was not surprising that genAI popped up. Fredo Erxleben was wondering
how to ensure that the students do not overly rely on genAI for code
generation. They did find that using genAI for test-driven development
worked pretty well since the students have to carefully think about the
tests so that they can prompt the LLM. We came to the conclusion that
you cannot stop people from using genAI. However, they should be made
aware of the various issues and be transparent about their use of the
technology by, for example, making a declaration of AI use. One way to
check that they understand what they did is to ask the students to give
a presentation of their project. The team at the TU Dresden hoped that
the students would produce reproducible jupyter notebooks. In practise,
they stuck to the scaffolding and did not add much documentation.
Students probably need to be guided more explicitly.

Next, [Magnus Hagdorn](https://orcid.org/0000-0002-5076-4864) gave a brief overview of the history of the
[Carpentries](https://carpentries.org/) and his new role in the [Software
Carpentry Governance
Committee](https://software-carpentry.org/about-us/governance/). Magnus then
gave an outlook of what is brewing in the world of the Carpentries. The
[HPC Carpentry](https://www.hpc-carpentry.org/) course has moved into
the incubator and is becoming part of the official curriculum. The
course includes an intro to HPC, workflows with
[snakemake](https://snakemake.readthedocs.io/en/stable/) and HPC python.
The course can be easily modified to suit local HPC clusters. The
scientific computing team at the Charité, has used the HPC course during
their last HPC training event. The other big news is that the Carpentries
are working on a two day AI course. In fact, the plan is to have two
courses: one for beginners and one for proficient programmers. Both
courses will include an introduction to the technology of LLMs and how
they work, implications of using them and how to use them at levels
appropriate to the target audience. Magnus also reported on the ideas to work
on the git courses, offering github and gitlab specific material, VSCode
and the plan to look into transitioning courses (in particular
intermediate courses) from the incubator in the Software Carpentry
Programme. During the discussion the [Code Refinery git
course](https://coderefinery.github.io/git-intro/) was mentioned and
that they use twitch live streaming for watch parties.

Given the late start, we proceeded to the evening programme: a trip to
the Christmas Market. We passed the big and famous one (the
Striezelmarkt) and went for the one at the Frauenkirche which was a
little bit less crowded. We tried egg glogg which tastes essentially
like alcoholic custard sauce and had something to eat. Some of us
found their way to an inside place with some beer. RSE
discussions continued. We resumed the conversations in the morning at
breakfast in the guest house.

The first talk of the morning was given by
[Katrin Schöning-Stierand](https://www.hcds.uni-hamburg.de/hcds/team/katrin-schoening-stierand.html)
from the University of Hamburg. Katrin offers various RSE courses that are
open to members of all faculties. During the winter semester she runs an
introduction to python course and in the summer semester an RSE course.
The RSE course assumes some python knowledge and also includes both
individual and group projects. One problem she struggles with is that
her courses are hard to find because they do not appear in the faculty
course handbooks. At the end of the RSE course the students present
their projects during an RSE day. This helps the students with their
presentation skills and is good advertisement for the courses.

The second talk was given by
[Jan Philipp Thiele](https://www.tu-braunschweig.de/ub/wir-ueber-uns/ansprechpersonen-organigramm/jan-philipp-thiele)
from the [digital science support lab of the TU Braunschweig](https://www.tu-braunschweig.de/struktur/praesidium/vp-dn/digital-science-support-lab).
The support services are shared by the various lower saxony universities.
Hannover focuses on AI while Braunschweig focuses on RSE. They use the live code extension
of VSCode with some success. We had an interesting discussion on where
central RSE units could be placed: central IT departments or libraries.
Both deal with information so they are both good candidates. Although
some central IT departments seem to be reluctant to take on extra
services. Other new central RSE units are being established in Marburg
and Frankfurt/Main.

Next was [Nicholas Del Grosso](https://ibots-bonn.de/de/team/nick/)
from the university hospital Bonn, who runs the [iBOTS](https://ibots-bonn.de/)
open neuroscience training platform which is part of the [ibehave](https://ibehave.nrw/) network.
They are a team of four people that develop and teach neuroscience courses. As part of their 
course development pipeline, they evolve their courses through three stages: 

1. tool-based courses, which are essentially howtos,
2. courses that teach methods and workflows across an ecosystem of tools, and 
3. domain specific application courses that address scientific questions, using an ecosystem of tools.

The courses take the form of summer schools (2-3 weeks), online workshops
(1-3 days), on-demand help and self-study materials. Their materials and
web site is constructed using a custom pipeline that converts files into
a format ready for the static website generator [Hugo](https://gohugo.io/). They did try
[quarto](https://quarto.org/) but found it too slow for such a large project, taking around 30
minutes to generate the entire website, and  using a popular static site generator like Hugo makes customizing
the website with modern features much more straight-forward. Their new pipeline takes seconds to build
the full site. In his talk, Nicholas described RSE services as another part of scientific support infrastructure,
similar to RDM, animal welfare, library service, peer-reviewed journals, etc.
Teaching these courses is
difficult because the trainers are neither domain experts (they support many scientific domains and technical workflows)
nor are they necessarily educators (they tend to have a research background, with no formal education).

There is also a high turnover of staff since either their contracts run out or they find employment elsewhere. This pressurises
course didactics. Without a scaling strategy, most single teachers addressing a group of students can handle a group of 10 to
14 students without trouble. To scale up to larger groups, a course needs to increase the student-student
or student-computer interactions. The iBOTS team does this by having
regular three people break-out rooms. Participants get randomly shuffled
which helps to ensure that preferences to work with either a proficient
or novice practitioner can be satisfied. They also ask that at least one
person shares their screen. This encourages participation and
communication. During the introduction round they ask participants to
tell the others why they are taking part in the course and what they are
excited about which turns out to be much more effective than the teacher
giving a motivational introduction and what to expect and get out of the
course. This way they can handle courses with 80 participants and a
single teacher. Feedback is gathered using following a "4L Retroscpective" session using [Miro](https://miro.com/app/dashboard/) boards.
Miro features like Private mode (allows participants to add their own feedback without seeing what the
others are writing) and timers (to keep everyone on-task) are very helpful for this.
In a second round the participants are asked to group the feedback.

[Julian Dehne](https://orcid.org/0000-0001-9265-9619), then, gave an update of the development of an
[RSE Master's Program](https://the-teachingrse-project.github.io/RSE-Masters/). Maja
Toebs has looked at available scientific computing/RSE course
descriptions and is extracting and clustering topics. There is a plan to
pilot various courses during the next year. We had a discussion on
whether generic RSEs are employable and what you can expect from them.
We expect that a RSE can help break silos and build bridges between the
various strands of research endeavours.

Finally, [Florian Goth](https://www.physik.uni-wuerzburg.de/tp1/team/postdocs/dr-florian-goth/)
introduced the [DiscoRSE](https://www.discorse.de)
project which aims to make RSE related open educational resources more
findable. In order to be able to do so they are looking into a metadata
schema for standardised annotation of RSE-OERs.

All participants agreed, that it was good to
catch up in person after meeting every week virtually in the [online meetings](https://pad.gwdg.de/s/pVBQ3Sh7Z)
of the [teachingRSE project](https://github.com/the-teachingRSE-project).
The next opportunity to catch up in person is
the [deRSE26](https://events.hifis.net/event/2945/) conference in
Stuttgart.
Presentations of the event will be shared on the
[zenodo community](https://zenodo.org/communities/teachingrse-symposium-2025/records).

This blog post is adapted with friendly permission from [Magnus Hagdorn's blog](https://magi.marsupium.org/2025/12/2025-teaching-rse-symposium.html).
