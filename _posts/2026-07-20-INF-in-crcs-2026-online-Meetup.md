---
title: "INF-projects in CRCs Meet-Up 2026 (Online)"
layout: post
author: "Hamza Oukili, Florian Goth, Neele Drobnitzky, Ron Dockhorn"
menulang: en
---

Following the initial on-site workshop held during the deRSE26 conference in Stuttgart (March 3–5, 2026), the inf-in-CRCs Network organized its first virtual meet-up on Wednesday, June 10, 2026 [https://inf-in-crcs-26.sciencesconf.org](https://inf-in-crcs-26.sciencesconf.org/).
The meet-up served as an information-exchange platform for scientists, Research Software Engineers (RSEs), and Research Data Managers (RDMs) working within Collaborative Research Centers 
(SFBs/CRCs) and Transregios (TRR) across Germany. The event recorded 87 registered participants, with 75 actively attending the initial plenary session.
The main objectives were to coordinate activities across different consortia, discuss common technical frameworks, address shared challenges in academic software development and data management, and create opportunities for networking and future collaboration between INF projects.

## 1. Plenary Sessions:
### National Frameworks

The introductory plenary was divided into general infrastructure reports and a series of rapid-fire technical pitches.

The INF-in-CRCs network brings together members from several national communities, including [de-RSE](https://de-rse.org/en/), Data Stewardship goes Germany ([DSgG](https://fdm.uni-koeln.de/dsgg26)), and the German National Research Data Infrastructure ([NFDI](https://www.nfdi.de/)).
The plenary therefore began with short updates from these initiatives to give participants an overview of current developments, available services, and opportunities for collaboration.

National Infrastructure Reports
de-RSE e.V. status: Frank Löffler presented the ongoing activities of de-RSE (see slides [https://doi.org/10.5281/zenodo.17047067](https://doi.org/10.5281/zenodo.17047067)).
Data Stewardship Development: Jens Dierkes outlined the current state of Data Stewardship goes Germany (DSgG) and the broader data stewardship community in Germany (see slides on [cryptpad](https://cryptpad.fr/file/#/2/file/dcJSUP3aNHUvLiPSMG2arAbK/)).
Base4NFDI Services: Bernd Flemisch discussed the integration of [Base4NFDI](https://base4nfdi.de/) basic services within individual CRC projects,
highlighting the upcoming [Base4NFDI User Conference](https://base4nfdi.de/news-events/events/user-conference-2026) scheduled for November 24–25, 2026 (see slides on [pad](https://pad.gwdg.de/p/NvXOkX2VpW#)).

### Poster Blitz

The poster blitz featured 15 short presentations, each introducing an INF project, research infrastructure, or technical solution from different CRCs, TRRs, and NFDI initiatives. 
The presentations covered a broad range of topics, including research data management, metadata infrastructures, provenance tracking, AI-assisted research data management (RDM), legal compliance, multimodal data integration, scientific visualization, and domain-specific software platforms.
Several speakers presented practical tools and services, such as the [PUNCH4NFDI](https://www.punch4nfdi.de/) platform, 
the [MaRDI](https://www.mardi4nfdi.de) Packaging System ([MAPS](https://portal.mardi4nfdi.de/wiki/Packaging_System)), provenance workflows based on [DataLad](https://www.datalad.org/), and guides for organizing research data. Other presentations highlighted the activities of individual INF projects, 
including [CRC 1313](https://www.sfb1313.uni-stuttgart.de), [CRC1415](https://tu-dresden.de/mn/chemie/sfb1415), [CRC 1625](https://www.ruhr-uni-bochum.de/crc1625/), [CRC 1629](https://www.neglab.de), [TRR 172](https://www.ac3-tr.de/), and [TRR 408](https://agimo-trr408.com/de/), illustrating the diversity of research domains represented in the network.
Together, the poster blitz provided a concise overview of the technical expertise, ongoing developments, and common challenges across INF projects in Germany.

## 2. Parallel Session 1: Tooling Clusters

The first parallel session brought participants together around common technical topics. Each breakout room focused on a specific aspect of research software engineering and research data management, allowing participants to exchange experiences, present tools, and discuss practical challenges across different CRCs and research domains.

### AI Tools for INF Projects

Moderated by Hamza Oukili (University of Stuttgart), this session explored the use of AI technologies within INF projects. Jan Frenzel (TU Dresden) presented the AI Services@TUD infrastructure, demonstrating automated knowledge-base ingestion using GitLab CI/CD pipelines and discussing the transition from small local language models to GPU-based deployments using Apptainer, vLLM, and SLURM. The discussion also covered challenges in adapting AI models to domain-specific applications, where limited training data often requires advanced prompting techniques instead of fine-tuning.

### Electronic Lab Notebooks (ELNs)

Moderated by Neele Drobnitzky (University of Heidelberg), this session discussed the adoption of Electronic Lab Notebooks, with a particular focus on eLabFTW. Around 20 participants joined, representing different subject areas, including biology, physics, and materials science. The session combined a short presentation with questions and an open exchange of experiences, tools, and implementation challenges. It also helped participants discover related work in other groups and identify potential contacts for future advice and collaboration.

The discussion showed that introducing an ELN involves more than choosing a suitable platform. Participants mentioned the learning curve, the need for training in good laboratory record keeping, uncertainty about what information and metadata should be recorded, and the importance of support from principal investigators and group leaders. In eLabFTW, the flexibility of the system can add another difficulty: new users may face a “blank canvas” with little guidance on how to structure entries, organise navigation, or connect related samples, derivatives, experiments, and resources.

The presentation explored shared templates as one way to lower these barriers. Templates can provide guidance for users while also supporting consistent navigation, searches, project organisation, protocols, resources, and data-management information. The SFB 1638 INF team’s template package was presented as an example and as a starting point for community discussion, rather than as a finished or universal solution. Participants showed interest in sharing templates and comparing approaches, even where groups use different workflows.

The question of metadata in experiments remained open and would benefit from further discussion across the participating communities. Participants were invited to continue the exchange in the [DSgG eLabFTW Exchange Matrix chat](https://matrix.to/#/#dsgg-elabftw:academiccloud.de). Other resources mentioned during the session included community-developed tools for [eLabFTW sample tracking](https://github.com/wanghao-github/elab-sample-tracking) and synchronisation ([elab-sync-hub](https://github.com/wanghao-github/elab-sync-hub)), as well as the [SFB 1638 eLabFTW template package](https://github.com/sfb1638/elabftw-templates).

### Container Technologies

Moderated by Aaruni Kaushik (RPTU Kaiserslautern), this breakout session was planned to discuss reproducible software environments, package management, and container technologies, including the MaRDI Packaging System.

### Git, Version Control, and Remote Repositories

Moderated by Florian Goth (University of Würzburg) and Harald von Waldow, the session discussed the benefits of [federated GitLab](https://gitlab.com/groups/gitlab-org/-/work_items/16514) for the German research landscape. As a competitor, we discussed [Forgejo](https://forgejo.org/), which is also expected to offer federation mechanisms in the future.
As an infrastructure built on git-annex, we discussed [DataLad](https://www.datalad.org/).

### Cloud Services and Data Sharing

Moderated by Alvaro Aguilera, this session included presentations on scientific workflows in VIVO and the federated infrastructure developed within PUNCH4NFDI. Discussions emphasized the importance of provenance tracking for reproducible research and addressed the technical challenges associated with transferring and processing very large collections of small metadata files. Participants agreed that moving computation closer to the data can significantly improve performance.

### REDCap

Moderated by Lincoln Sherpa, this session focused on practical experiences with REDCap for research data collection. Participants discussed performance challenges in large longitudinal studies and shared optimization strategies, including more efficient API usage, query filtering, and customized database interfaces.

### Jupyter

This session featured presentations on Jupyter4NFDI Services by Vasundhara Shaw and Jupyter Notebooks: From Lectures to Research by Daniel Appel. Discussions covered resource management within Jupyter4NFDI, integration with external storage systems such as WebDAV and S3, and remaining challenges related to reproducibility, including persistent software environments and secure management of authentication credentials.

### DMPs & SMPs

Moderated by Ron Dockhorn, this session focused on the [implementation and adaptation](https://github.com/RDMJeanne/FolderStructure/blob/v1.0/PhD/01_Documents/02_Administrative/01_DMP/G_DMP_README.md) of data and software management plans (DMP&SMP) as part of daily research routines. The discussions centered on applying the [FAIR](https://doi.org/10.1038/sdata.2016.18) and [FAIR4RS](https://doi.org/10.1038/s41597-022-01710-x) principles to research/software data management, templates for [folder structure](https://doi.org/10.5334/dsj-2025-035) in life sciences and [using tools](https://doi.org/10.5281/zenodo.20624453) for data provenance and data lineage and on how to change the habit to an open science community.   

## 3. Parallel Session 2: Domain Clusters

The second parallel session grouped participants by research domain to discuss domain-specific workflows, metadata standards, repositories, and collaboration with the corresponding NFDI consortia. Although many challenges were shared across disciplines, each community highlighted its own requirements and priorities.

The Physics group, moderated by Florian Goth, discussed custom simulation software, engineering models, and the integration of Electronic Lab Notebooks, while also reviewing previous NFDI Physical Sciences workshops. In Medicine and Psychology, moderated by Alvaro Aguilera, the discussion 
focused on handling sensitive patient data under GDPR, knowledge graphs, and commonly used platforms such as REDCap, Neurocloud, Dataverse, OMERO, SODAR, and GraphDB. The Materials Science, Geosciences, and Engineering group, moderated by Hamza Oukili, exchanged experiences with scientific 
software such as DuMux, MuMax, and MATSim, emphasizing that domain-specific repositories such as NOMAD and Kadi4Mat provide richer metadata and search capabilities than general-purpose repositories for many research applications. The Humanities and Linguistics group, moderated by Mercedes 
Martinez-Bruera, discussed semantic metadata extraction, automation of legal consent forms, and the need for shared repositories of scripts and workflows. Finally, the Biology group explored imaging data management with OMERO and automated metadata extraction from Electronic Lab Notebooks. The chemistry session, moderated by Ron Dockhorn, emphasized the usage of open source Electronic Lab Notebooks such as [Chemotion](https://chemotion.net/) and [eLabFTW](https://www.elabftw.net/) to document experiments and report standard operating procedures.

## 4. Parallel Session 3: Regional Clusters  

The third parallel session focused on geography and local infrastructure, with the aim of creating opportunities for local networking and future collaboration between INF projects. Participants discussed how neighboring universities and research institutions can share RDM training, storage and computing infrastructure, software services, and other resources across institutional and federal-state boundaries. The session also provided an opportunity to exchange information about available resources, services, and funding opportunities at the institutional and federal-state levels.
The participants split into the different regions where we determined clusters from the registration data.
The following clusters emerged:

- Main-Donau area (Bavaria, Hessen)
- Baden-Württemberg
- Mitteldeutschland (Sachsen, Thüringen, Sachsen-Anhalt)
- Northern Germany (Schleswig-Holstein, Hamburg, Bremen, Mecklenburg-Vorpommern, Niedersachsen, Brandenburg, Berlin)
- NRW and beyond (Nordrhein-Westfalen, Rheinland-Pfalz, Saarland)

The regional discussions helped participants identify existing local initiatives and infrastructure and provided new contacts for sharing information, services, and experiences beyond their individual CRCs.

## 5. Fireplace chat  

Finally, we concluded the meet-up with a fireplace chat that we kicked off with a plenary talk by Jeremy Cohen on "Providing effective support for digital research through RDM and RSE: A UK perspective".

## 6. Resources  

We created a Zenodo community for "INF-Projects-in-CRCs", see [https://zenodo.org/communities/inf-projects-in-crcs](https://zenodo.org/communities/inf-projects-in-crcs) for uploading the meet-up material. 
