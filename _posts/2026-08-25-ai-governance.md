---
title: "AI for Research: Governance and Infrastructure — RSE Day 2026"
layout: post
author: "Carolin Odebrecht, Stephan Druskat, Johannes Schäffer"
menulang: en
---

- *DOI: [10.5281/zenodo.22076822](https://doi.org/10.5281/zenodo.22076822)*

The disruptive impact of generative Artificial Intelligence (GenAI)
systems and methods concerns all research areas and disciplines, as well
as many roles within research, albeit in different ways. In general,
research conducted using AI tools introduces new responsibilities,
relies on new social and technical infrastructure, and requires new
skills and competencies.

<!--more-->

#### Responsibilities

Research conducted using GenAI requires stakeholders to evaluate new —
and re-evaluate existing — requirements on research ethics and
integrity, legal requirements and IT security. Where research software
and data outputs become (critical) research infrastructure and related
services are being provided, researchers may become accountable as
service providers, in addition to their responsibilities as software
developers and data creators. Despite this, roles such as Research
Software Engineers are often overlooked in discussions around
responsibility profiles, as well as requirements for regulation and
(research) infrastructure, in the context of GenAI in research. This
means that the scholars who actually develop, adopt or fine-tune such
systems do not get to share their first-hand experience, provide
practical insights and influence the policies that will govern their
work in this area. The workshop "AI Research Governance. Responsibility,
regulation and guidelines in context of research developments",
conducted by Carolin Odebrecht at the first *Research Software Day
Berlin & Brandenburg* \[[7](#rseday)\], therefore
aimed to open discussions around governance of GenAI in research to
research software engineers, whose specific expertise makes them an
important part of the social infrastructure required for GenAI in
research.

#### Social infrastructure

Just like other computational work, the adoption of GenAI in and for
research needs to be cross-functional and inter-disciplinary, and
requires the close collaboration of individual research teams with many
stakeholders, such as other research groups, computing centers,
libraries and central RSE groups, all of which may be located within a
team's organizational unit or institution, or outside of it. These
collaborations need to be coordinated and often formalized. In contrast
to well- or better-established scenarios such as research data, research
software, and the collaboration on and sharing or provision of these
digital research outputs, there are still only few experiences and good
practices established for collaboration between stakeholders on
GenAI-related activities, policies, ethics and strategies.

#### Technical infrastructure

Similarly, the design, development and use of technical infrastructure,
such as hardware, AI-as-a-Service, and computational capacities for
pre-training, fine-tuning, instruction, inference, etc., requires new
models for collaboration and identification of responsibilities. These
need to be developed in academic organizations with the participation of
researchers. Some fundamental questions in this area include: *Which
technical infrastructure is needed for our research life cycles?* *Can
we build on existing internal or external infrastructure?* *How do we
design the FAIR and CAREful access and use of technical infrastructure?*
*How do we measure, and account for, the cost and ecological impact of
GenAI?*

An AI governance therefore should cover the different social and
technical infrastructures. In general, AI governance is defined commonly
as a

> \[...\] a system of rules, practices, processes, and technological
> tools that are employed to ensure an organization's use of AI
> technologies aligns with the organization's strategies, objectives,
> and values; fulfills legal requirements; and meets principles of
> ethical AI followed by the
> organization. \[[9, p. 604](#matti)\]

Research organizations need to develop and implement a governance
framework that clarifies the responsibilities and accountability with
regard to the adoption and use of GenAI, and provides guidelines and
guardrails with respect to the technical and social infrastructure
required to support it. This framework must be operationalized through,
e.g., guidelines and policies targeting all relevant roles, job
descriptions and staff planning in research and administration, and IT
infrastructure strategies that safeguard independence from proprietary
solutions, avoid vendor lock-in, and support digital sovereignty in
research. Importantly, the development of governance frameworks should
be participatory, in that the process must include all relevant users,
producers, providers and other stakeholders, including RSEs.

<figure id="fig1" data-latex-placement="!ht">
<embed src="/assets/img/blog/2026/2026-08-25-ai-governance-fig1.png" style="width:80.0%" />
<figcaption><p><b>Figure 1:</b> Focal points for AI Governance in research contexts; purple:
research cycles and workflows; yellow: people; pink: organisational
infrastructure; green: organisation with goals and existing governance;
petrol: external regulation.</p></figcaption>
</figure>

AI governance systems should therefore:

1.  inform about relevant aspects in terms of and ethical, legal and
    research integrity requirements, as well as IT security;

2.  establish references to stages and objects of research life cycles
    (and/or teaching) across disciplines and roles;

3.  define the scope of accountability and responsibilities of
    researchers, digital research technical professionals (dRTPs), other
    staff, and the organization as such;

4.  define and implement corresponding social and technical (research)
    infrastructures that supports researchers with regard to points
    (1)–(3).

# Raising awareness and fostering collaboration

To raise awareness of the importance of AI governance for research, and
the lack of inclusion and participation of RSEs and other dRTPs in their
development and implementation, Carolin Odebrecht ran the workshop "AI
Research Governance. Responsibility, regulation and guidelines in
context of research developments" at the *Research Software Day Berlin &
Brandenburg 2026* on 3 June 2026.

Participation from RSEs and researchers from biology, computer science,
physics, chemistry, digital humanities, earth sciences, economics,
sociology, life sciences, as well as dRTPs from museums and further
interdisciplinary backgrounds clearly showed the cross-disciplinary
relevance of the topic. For introduction, Carolin Odebrecht had prepared
an input on (AI) governance that served as the basis for our discussion
throughout the workshop. The session was enriched with interactive
elements using a feedback app (Particify \[[1](#particify)\]).

As not everyone in the room had a definition of the term 'governance' to
hand, the introductory presentation began with a definition: Governance
is the framework by which an organization is controlled, and how
decisions are being made within the organization \[[2](#benz)\].
Importantly for the context of the work presented in this blog post,
governance is also a tool to transfer external requirements — such as
laid out by law or funding requirements - into an organization's
internal context, making them actionable.

Using Particify, we discussed our (the participants') backgrounds and
contexts — especially the roles we hold in our respective organizations
and whether we were aware of guidelines for AI use. As AI guidelines are
currently developed at many organisations, only half of the participants
stated that they are aware of an AI guideline. Surprisingly, a third was
not sure whether such guidelines exist at their organisation. This
points to a general discussion about responsibility profiles: whose
responsibility covers the dissemination and implementation of such
guidelines? In more depth, we collected our multiple roles via Particify
and discussed them ([Fig. 2](#fig2)).

<figure id="fig2" data-latex-placement="!ht">
<img src="/assets/img/blog/2026/2026-08-25-ai-governance-fig2.png" style="width:80.0%" />
<figcaption><p><b>Figure 2:</b> Participants' roles in interdisciplinary research fields
show a wide range of responsibility areas and functions. The roles were
collected via Particify.</p></figcaption>
</figure>

Participants mentioned unclear responsibilities, i.e. the ambiguity
regarding who in an organization should take the lead in implementing AI
governance. Among others the following question came up: If everything
is already addressed in legal frameworks, what is the need for a
governance framework? Additionally, the lack of visible, immediate
benefits of implementing AI governance made it difficult to justify the
effort of defining a governance framework. Another point that was
mentioned was the fear of limiting oneself (or the organization), and
missing out on the opportunities that AI may provide. On the ethical
level, some argued that the moral integrity implied in guidelines for
good scientific practice alone - along with the assumption that
researchers inherently use AI responsibly - reduced the perceived
urgency for formal governance. Subsequently, we explored the potential
content for an AI governance document by identifying requirements for AI
use in our organizations, covering technical, personnel, and
administrative infrastructures ([Fig. 3](#fig3)).

<figure id="fig3" data-latex-placement="!ht">
<img src="/assets/img/blog/2026/2026-08-25-ai-governance-fig3.png" style="width:80.0%" />
<figcaption><p><b>Figure 3:</b>Answers from participants identifying the topics relevant to
discuss in the context of AI guidelines.</p></figcaption>
</figure>

At the end of our workshop, we discussed multiple (partly hypothetical)
challenges and obstacles on the path to developing and adapting AI
governance standards.

# Related Work

Although AI for research is a broad topic, the specific focus on
governance and infrastructure in the context of roles and responsibility
areas is currently getting increasing attention, e.g., with the BUA
Workshop "AI Policies at Universities: Hands-On Workshop on Guidelines,
Implementation, and Open Science" on 2 June 2026 \[[3](#bua)\], the
de-RSE workshop on "AI-supported Research Software Engineering" in
September 2026 \[[4](#derse)\] and the Research Software Alliance's
workshop "Research Software Engineering in the Age of Generative AI:
Building a Community Vision" in Edinburgh (UK), March
2026 \[[10](#resa)\]. The evolution of the RSE role is also discussed in
the blog post "Research Software Engineers in the Age of GenAI: Same
Value, Changing Practice" \[[5](#blog)\].
Discussing roles and responsibility areas is not new to RSE contexts, as
we also discussed this together with colleagues from King's College
already in June 2025 \[[8](#izd2m)\].

# Conclusion

GenAI challenges many areas of responsibility and infrastructure -
especially for RSE and dRTP in their various roles dealing with genAI
directly in their research contexts. We argue that governance and
infrastructure are heavily interdependent. There is no living governance
without accessible infrastructure. Vice versa, establishing
infrastructure without governance risks the creation of responsibility
vacuums \[[6](#freeman)\]. Governance and infrastructure that are
developed with reference to each other, and specifically to serve the
inclusion of GenAI in research life cycles, enable research integrity,
sovereignty and therefore independent research. Governance and
infrastructure should be developed and adapt in a user-centred way to
address the requirements of administrative, social and technical
infrastructure mentioned above. However, governance and the development
of guidelines or policies is often centred around leadership roles which
in turn might risk a gap between researchers needs and leadership's
focal points. Interdisciplinary discussions with researchers fulfilling
their responsibility roles is needed to first raise awareness of topics,
second to exchange in depth knowledge and experience - literacies
exchange for both groups - and third to develop and adapt
collaboratively living guidelines that also take infrastructure into
account.

# Acknowledgements

The authors would like to thank Alexander Struck and Claudia Göbel for
organising the RSE Day 2026 in Berlin! This contribution was created in
the context of the [Interdisciplinary Centre for Digitality and Digital
Methods](https://izd2m.hu-berlin.de/) Campus Mitte, Humboldt-Universität
zu Berlin. SD's work was supported by the [Lower Saxony Digital Science
Support Space (DS³)](https://ds3-nds.de) project as part of
Hochschule.digital Niedersachsen, funded by zukunft.niedersachsen.

# References

- <a id="particify"></a>\[1\] Anon. [n. d.]. Particify. Particify GmbH. <https://www.particify.de/en/>
- <a id="benz"></a>\[2\] Arthur Benz, Susanne Lütz, Uwe Schimank, and Georg Simonis (Eds.). 2007. Handbuch Governance. VS Verlag für Sozialwissenschaften. doi:[10.1007/978-3-531-90407-8](https://doi.org/10.1007/978-3-531-90407-8)
- <a id="bua"></a>\[3\] Berlin University Alliance. 2026. KI-Policies an Hochschulen: Praxisworkshop zu Leitlinien, Umsetzung und Open Science. <https://www.berlin-university-alliance.de/commitments/research-quality/events/2026/20260602-ki-os-policies.html>
- <a id="derse"></a>\[4\] de-RSE – Gesellschaft für Forschungssoftware. 2026. De-RSE Collaboration + AI in RSE Workshop in Germany 2026. <https://events.hifis.net/event/3249/page/968-workshop-on-ai-supported-research-software-engineering>
- <a id="blog"></a>\[5\] Stephan Druskat, Michelle Barker, Ian Cosden, Cunliang Geng, Robert Haines, Daniel S. Katz, Joseph Shingleton, and Ben van Werkhoven. 2026. Research Software Engineers in the Age of GenAI: Same Value, Changing Practice. Technical Report. Zenodo. doi:[10.5281/zenodo.20320179](https://doi.org/10.5281/zenodo.20320179)
- <a id="freeman"></a>\[6\] Jo Freeman. 1972. The Tyranny of Stuctureless. <https://www.jofreeman.com/joreen/tyranny.htm>
- <a id="rseday"></a>\[7\] Claudia Göbel and Alexander Struck. 2026. First Research Software Day Berlin & Brandenburg, 3 June 2026. <https://forschungssoftware.info/RSdays/2026/Berlin/>
- <a id="izd2m"></a>\[8\] Henrik Schönemann. 2025. Retrospect: RSE Networking Event June 24th/25th. <https://izd2m.hu-berlin.de/blog-posts/2025/09/02/bp-rse-network-event.html>
- <a id="matti"></a>\[9\] Matti Mäntymäki, Matti Minkkinen, Teemu Birkstedt, and Mika Viljanen. 2022. Defining Organizational AI Governance. AI and Ethics 2, 4 (Nov. 2022), 603–609. doi:[10.1007/s43681-022-00143-x](https://doi.org/10.1007/s43681-022-00143-x)
- <a id="resa"></a>\[10\] Research Software Alliance. 2025. Research Software Engineering in the Age of Generative AI: Building a Community Vision. <https://www.researchsoft.org/events/rse-ai-workshop/>