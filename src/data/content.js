export const personal = {
  name: 'Sravan Kumar Sanathanam',
  title: 'Plant Molecular Biology & Bioinformatics Researcher',
  institution: 'Alabama A&M University',
  tagline: 'Plant Molecular Biology, Genomics, Microbiome & Crop Stress Biology',
  bio: [
    'I am a Ph.D. researcher in Plant and Soil Science with a focus on Plant Molecular Biology and Genomics, supported by a Bioinformatics minor. My current research connects cotton-reniform nematode biology, rhizosphere microbiome shifts, transcriptomics, functional genomics, and greenhouse-based crop stress experiments.',
    'My Master’s work built the foundation for this Ph.D. direction through controlled-environment agronomy, low-temperature plasma applications in microgreens, drought-stress evaluation, plant growth and nutritional profiling, SAS/R analysis, and hands-on molecular biology training including DNA/RNA extraction, PCR, RT-PCR, primer design, gene expression analysis, and SEM.',
    'This portfolio is arranged by research history: Ph.D. plant molecular biology and bioinformatics first, Master’s agronomy and molecular training second, then the technical toolkit in R, Linux, sequencing workflows, microbiome analysis, functional enrichment, and reproducible project organization.',
  ],
  email: 'sravan.sanathanam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sravan-sanathanam/',
  github: 'https://github.com/sravan-sanathanam',
  scholar: 'https://scholar.google.com/citations?user=t2o9yU8AAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0002-8192-8400',
  cvUrl: '/cv.pdf',
}

export const stats = [
  { value: 'Ph.D. + M.S.', label: 'Plant & soil science training' },
  { value: '12', label: 'Featured project areas' },
  { value: '50+', label: 'R packages & tools' },
  { value: 'RNA-seq + 16S/ITS', label: 'Core sequencing data types' },
]

export const workflows = [
  {
    label: 'Ph.D. multi-omics workflow',
    steps: ['Greenhouse', 'Root/rhizosphere sampling', 'DNA/RNA', 'RNA-seq + 16S/ITS', 'R/Linux', 'Biological interpretation'],
  },
  {
    label: 'RNA-seq workflow',
    steps: ['FASTQ', 'fastp/FastQC', 'Salmon', 'tximport', 'DESeq2', 'Functional enrichment'],
  },
  {
    label: 'Microbiome workflow',
    steps: ['Raw reads', 'QIIME2', 'DADA2', 'phyloseq', 'vegan', 'PICRUSt2'],
  },
]

export const heroPills = [
  'Plant stress biology', 'Cotton-reniform nematode', 'RNA-seq', 'DESeq2', 'QIIME2', 'phyloseq',
  'Functional genomics', 'PICRUSt2', 'R / Linux', 'Master’s agronomy foundation',
]

export const skillTabs = [
  {
    id: 'plant',
    label: 'Plant Biology',
    cards: [
      {
        icon: 'ti-leaf',
        title: 'Plant stress biology',
        desc: 'Connecting controlled experiments with molecular and multi-omics interpretation in cotton, soybean, microgreens, turmeric, and related crop systems.',
        tags: ['Cotton', 'Soybean', 'Microgreens', 'Turmeric', 'Reniform nematode', 'Salt stress', 'Drought stress', 'Genotype response'],
      },
      {
        icon: 'ti-seedling',
        title: 'Greenhouse and controlled-environment experiments',
        desc: 'Designing and tracking control/treatment experiments, biological replication, time-course sampling, growth measurements, and stress-response phenotyping.',
        tags: ['Controls', 'Treatments', 'Replicates', 'Randomization', 'Time-course', 'Phenotyping', 'Growth chamber', 'Greenhouse'],
      },
      {
        icon: 'ti-bug',
        title: 'Nematology workflows',
        desc: 'Reniform nematode isolation and greenhouse assay concepts, including soil/root extraction, egg extraction, inoculum preparation, counting, and plant-response assessment.',
        tags: ['Nematode isolation', 'Soil extraction', 'Root extraction', 'Egg extraction', 'Microscope counting', 'Inoculation', 'Reproduction factor'],
      },
      {
        icon: 'ti-test-pipe',
        title: 'Molecular sample preparation',
        desc: 'Plant, root, soil, and rhizosphere sample preparation for RNA-seq, 16S/ITS microbiome profiling, PCR, RT-PCR, RT-qPCR-style validation concepts, and sequencing submission.',
        tags: ['Root sampling', 'Rhizosphere soil', 'DNA isolation', 'RNA isolation', 'DNase treatment', 'cDNA', 'PCR', 'RT-PCR'],
      },
    ],
  },
  {
    id: 'wetlab',
    label: 'Wet Lab & Greenhouse',
    cards: [
      {
        icon: 'ti-flask',
        title: 'DNA and RNA isolation',
        desc: 'Hands-on molecular training and research preparation using plant DNA/RNA isolation workflows, including CTAB and RNeasy-style approaches, purity checks, and downstream PCR/gene expression use.',
        tags: ['CTAB DNA extraction', 'RNeasy RNA extraction', 'Plant samples', 'Root/leaf tissue', 'Nanodrop/Qubit concepts', 'RNA quality', 'DNA quality'],
      },
      {
        icon: 'ti-dna',
        title: 'PCR, RT-PCR, and gene expression',
        desc: 'Primer design, PCR/RT-PCR setup, melt-curve interpretation, Delta Delta Ct analysis, and gene expression interpretation from molecular training and candidate-gene validation concepts.',
        tags: ['Primer3', 'PCR', 'RT-PCR', 'Melt curves', 'Delta Delta Ct', 'PGIP gene', 'Gene expression'],
      },
      {
        icon: 'ti-microscope',
        title: 'Microscopy and lab equipment',
        desc: 'Experience with common laboratory equipment and scanning electron microscopy for treated plant surface morphology observations.',
        tags: ['SEM', 'Autoclave', 'Incubator', 'Spectrophotometer', 'Micropipette', 'Centrifuge', 'Gel electrophoresis'],
      },
      {
        icon: 'ti-plant-2',
        title: 'Agronomy, tissue culture, and biocontrol foundation',
        desc: 'Master’s and earlier training in agronomy, plant tissue culture coursework, microgreen production, seed quality testing, field diagnostics, and biocontrol-agent production concepts.',
        tags: ['Agronomy', 'Plant tissue culture', 'Seed quality testing', 'Microgreens', 'Biocontrol agents', 'Trichoderma', 'Pseudomonas', 'IPM'],
      },
    ],
  },
  {
    id: 'rnaseq',
    label: 'RNA-seq & Genomics',
    cards: [
      {
        icon: 'ti-file-code',
        title: 'RNA-seq project design',
        desc: 'Treatment, genotype, time-course, mutant-vs-WT, and interaction-based analysis designs across plant and microbial/eukaryotic expression projects.',
        tags: ['Metadata design', 'Replicates', 'Treatment effects', 'Time effects', 'Genotype effects', 'Interaction models'],
      },
      {
        icon: 'ti-chart-scatter',
        title: 'Read QC and quantification',
        desc: 'FASTQ handling, paired-end QC, trimming, Salmon transcript quantification, tximport concepts, and gene-level count matrices.',
        tags: ['FASTQ', 'fastp', 'FastQC', 'Salmon', 'quant.sf', 'tximport', 'Count matrices'],
      },
      {
        icon: 'ti-chart-bar',
        title: 'Differential expression analysis',
        desc: 'DESeq2 workflows for DEG tables, shrinkage, PCA, MA plots, volcano plots, heatmaps, Venn diagrams, and UpSet summaries.',
        tags: ['DESeq2', 'apeglm', 'ashr', 'edgeR', 'limma', 'PCA', 'Volcano', 'Heatmaps'],
      },
      {
        icon: 'ti-git-branch',
        title: 'Genome annotation and ID mapping',
        desc: 'Reconciling gene, transcript, protein, locus tag, NCBI, UniProt, CottonGen, GO, and KEGG KO identifiers.',
        tags: ['GTF/GFF3', 'tx2gene', 'Gene labels', 'UniProt', 'BioMart', 'NCBI', 'CottonGen', 'KEGG KO'],
      },
    ],
  },
  {
    id: 'microbiome',
    label: 'Microbiome',
    cards: [
      {
        icon: 'ti-microscope',
        title: '16S and ITS analysis',
        desc: 'QIIME2-to-R workflows for bacterial and fungal community analysis using exported feature, taxonomy, metadata, and tree files.',
        tags: ['QIIME2', 'DADA2', 'Cutadapt', 'BIOM', 'QZA/QZV', 'ASV tables', 'Taxonomy tables'],
      },
      {
        icon: 'ti-chart-pie',
        title: 'Diversity and statistics',
        desc: 'Alpha diversity, beta diversity, Bray-Curtis ordination, PERMANOVA, betadisper, and group-level interpretation.',
        tags: ['phyloseq', 'vegan', 'Alpha diversity', 'PCoA', 'Bray-Curtis', 'PERMANOVA', 'betadisper'],
      },
      {
        icon: 'ti-topology-star',
        title: 'Taxonomy and predicted function',
        desc: 'Taxonomic abundance summaries, core microbiome analysis, and PICRUSt2 KO, EC, and MetaCyc pathway interpretation.',
        tags: ['Taxonomy plots', 'Core microbiome', 'PICRUSt2', 'ggpicrust2', 'KO', 'EC', 'MetaCyc'],
      },
      {
        icon: 'ti-tree',
        title: 'Tree-aware microbiome work',
        desc: 'Handling rooted trees and phylogenetic packages used in microbial community workflows.',
        tags: ['ape', 'ggtree', 'tidytree', 'phytools', 'qiime2R', 'phyloseq tree'],
      },
    ],
  },
  {
    id: 'functional',
    label: 'Functional Genomics',
    cards: [
      {
        icon: 'ti-circle-dot',
        title: 'GO enrichment analysis',
        desc: 'GO over-representation analysis and GSEA for biological process, molecular function, and cellular component interpretation.',
        tags: ['clusterProfiler', 'enrichplot', 'GOplot', 'fgsea', 'ORA', 'GSEA', 'GO terms'],
      },
      {
        icon: 'ti-route',
        title: 'KEGG pathway analysis',
        desc: 'KEGG ORA/GSEA, KO mapping, pathway membership tables, and pathway-level interpretation.',
        tags: ['KEGGREST', 'pathview', 'KEGG ORA', 'KEGG GSEA', 'KO IDs', 'Pathway mapping'],
      },
      {
        icon: 'ti-chart-dots',
        title: 'Scientific visualization',
        desc: 'Publication-style figures for transcriptomics, microbiome, enrichment, and controlled-environment agronomy results.',
        tags: ['ggplot2', 'ComplexHeatmap', 'pheatmap', 'VennDiagram', 'ggVennDiagram', 'UpSetR', 'ComplexUpset'],
      },
      {
        icon: 'ti-dna',
        title: 'Candidate gene and pathway interpretation',
        desc: 'Connecting DEGs, gene labels, annotations, and enriched pathways to biological stress-response questions.',
        tags: ['Candidate genes', 'Gene labels', 'Defense response', 'Stress pathways', 'Multi-omics interpretation'],
      },
    ],
  },
  {
    id: 'rpkgs',
    label: 'R Packages',
    cards: [
      {
        icon: 'ti-table',
        title: 'Data wrangling and files',
        desc: 'Cleaning metadata, joining annotation tables, reading Excel/CSV/TSV files, filtering outputs, and writing reusable scripts.',
        tags: ['tidyverse', 'dplyr', 'tidyr', 'readr', 'stringr', 'tibble', 'purrr', 'data.table', 'readxl', 'openxlsx'],
      },
      {
        icon: 'ti-chart-line',
        title: 'Visualization packages',
        desc: 'Custom plots for omics, microbiome, and enrichment outputs.',
        tags: ['ggplot2', 'ggrepel', 'patchwork', 'ggprism', 'ggh4x', 'viridis', 'RColorBrewer', 'cowplot', 'ggpubr', 'scales'],
      },
      {
        icon: 'ti-math-function',
        title: 'Statistics and omics packages',
        desc: 'RNA-seq testing, normalization, shrinkage, microbiome statistics, and batch/variance concepts.',
        tags: ['DESeq2', 'tximport', 'edgeR', 'limma', 'vegan', 'IHW', 'sva', 'RUVSeq', 'vsn', 'metagenomeSeq', 'Maaslin2'],
      },
      {
        icon: 'ti-database',
        title: 'Bioconductor annotation packages',
        desc: 'Genome annotation parsing, sequence handling, pathway access, and database mapping.',
        tags: ['rtracklayer', 'GenomicFeatures', 'Biostrings', 'AnnotationDbi', 'biomaRt', 'KEGGREST', 'BiocManager'],
      },
    ],
  },
  {
    id: 'linux',
    label: 'Linux & Programming',
    cards: [
      {
        icon: 'ti-terminal',
        title: 'Linux bioinformatics workflows',
        desc: 'Ubuntu workstation use, file-path management, logs, permissions, package issues, storage limits, and large biological data organization.',
        tags: ['Ubuntu', 'Bash', 'File paths', 'Logs', 'Permissions', 'md5sum', 'External drives'],
      },
      {
        icon: 'ti-folder-check',
        title: 'Reproducible organization',
        desc: 'Numbered folders, rerunnable scripts, skip-finished logic, QC reports, result tables, and clean project records.',
        tags: ['README files', 'Scripts', 'Metadata', 'QC reports', 'Results tables', 'Figures'],
      },
      {
        icon: 'ti-brand-python',
        title: 'Python foundations',
        desc: 'Basic Python for data cleaning, variables, strings, indexing, slicing, type conversion, input, and f-strings.',
        tags: ['print', 'type', 'input', 'strings', 'strip', 'lower', 'replace', 'slicing', 'f-strings'],
      },
      {
        icon: 'ti-database-search',
        title: 'SAS, SQL, and data reasoning',
        desc: 'Foundational statistics and structured-data reasoning from agronomy, data science coursework, and interview practice.',
        tags: ['SAS', 'RStudio', 'SELECT', 'WHERE', 'GROUP BY', 'joins', 'AVG', 'median', 'outliers'],
      },
    ],
  },
]

export const research = [
  {
    num: '01',
    title: 'Ph.D. cotton-reniform nematode plant stress biology',
    desc: 'Current Ph.D. focus on cotton genotypes, reniform nematode pressure, root/rhizosphere sampling, nematode-microbiome relationships, plant response, and candidate stress pathways.',
  },
  {
    num: '02',
    title: 'Plant transcriptomics and functional genomics',
    desc: 'RNA-seq projects across cotton, soybean, and Yarrowia using DESeq2, time-course comparisons, genotype/treatment contrasts, functional enrichment, and pathway interpretation.',
  },
  {
    num: '03',
    title: 'Rhizosphere microbiome and predicted function',
    desc: '16S and ITS analysis of root-associated microbial communities using QIIME2 exports, phyloseq, vegan, taxonomy plots, diversity statistics, and PICRUSt2 functional predictions.',
  },
  {
    num: '04',
    title: 'Master’s agronomy and molecular biology foundation',
    desc: 'Master’s research on atmospheric pressure plasma effects in microgreens, drought-stress evaluation, seed germination, growth/yield traits, nutritional profiles, and molecular training in DNA/RNA extraction, PCR, RT-PCR, and SEM.',
  },
  {
    num: '05',
    title: 'Genome annotation, ID mapping, and reproducible workflows',
    desc: 'Building clean analysis resources from GTF/GFF, FASTA, UniProt, BioMart, CottonGen, NCBI, and KEGG files while organizing results with Linux/R project structure.',
  },
]

export const projects = [
  {
    title: 'Ph.D. cotton reniform nematode multi-omics project',
    type: 'Plant molecular biology / cotton stress biology',
    question: 'How do cotton genotypes respond to reniform nematode stress at the root, transcriptome, microbiome, and pathway levels?',
    methods: ['Greenhouse design', 'Nematode isolation concepts', 'Root/rhizosphere sampling', 'RNA-seq', '16S/ITS', 'Functional enrichment'],
    outputs: ['Experimental design', 'Sample metadata', 'PCA/volcano/heatmaps', 'Diversity plots', 'Enrichment summaries', 'Candidate genes/pathways'],
  },
  {
    title: 'Ph.D. cotton RNA-seq analysis using Salmon and DESeq2',
    type: 'Transcriptomics / functional genomics',
    question: 'Which genes and pathways change between treatment, genotype, and time-point comparisons in cotton?',
    methods: ['fastp', 'FastQC', 'Salmon', 'tximport concepts', 'DESeq2', 'clusterProfiler', 'ComplexHeatmap'],
    outputs: ['Count matrices', 'DEG tables', 'PCA', 'MA plots', 'Volcano plots', 'Heatmaps', 'Venn/UpSet', 'Functional enrichment figures'],
  },
  {
    title: 'Ph.D. soybean salt-stress RNA-seq time-course',
    type: 'Abiotic stress transcriptomics',
    question: 'Which genes and pathways respond to salt stress across genotype, treatment level, and time?',
    methods: ['Salmon', 'DESeq2', 'Time-course contrasts', 'Interaction models', 'Functional enrichment'],
    outputs: ['Treatment comparisons', 'Time comparisons', 'Interaction results', 'DEG summaries', 'PCA', 'Heatmaps', 'Pathway summaries'],
  },
  {
    title: 'Ph.D. cotton rhizosphere 16S/ITS microbiome analysis',
    type: 'Microbiome bioinformatics',
    question: 'How do treatments and plant genotypes affect bacterial and fungal communities associated with roots?',
    methods: ['QIIME2', 'DADA2', 'BIOM/QZA exports', 'phyloseq', 'vegan', 'PICRUSt2', 'ggpicrust2'],
    outputs: ['Alpha diversity', 'PCoA', 'PERMANOVA', 'Taxonomy plots', 'Core microbiome', 'KO/EC/MetaCyc pathway prediction'],
  },
  {
    title: 'Ph.D. Yarrowia day-based gene expression analysis',
    type: 'Comparative transcriptomics / model organism expression analysis',
    question: 'How do strains differ in expression profiles across Day 1 and Day 4?',
    methods: ['DESeq2', 'Metadata cleaning', 'Mutant vs WT contrasts', 'GO GSEA', 'KEGG mapping', 'fgsea'],
    outputs: ['Strain comparisons', 'Day comparisons', 'PCA', 'Volcano plots', 'GO GSEA plots', 'KEGG pathway figures'],
  },
  {
    title: 'Ph.D. reference annotation and gene-label mapping workflows',
    type: 'Genome annotation / data integration',
    question: 'How can transcript, gene, protein, locus tag, UniProt, GO, and KEGG identifiers be connected for reliable downstream analysis?',
    methods: ['GTF/GFF parsing', 'tx2gene tables', 'UniProt mapping', 'BioMart GO tables', 'NCBI/CottonGen resources', 'KEGG KO mapping'],
    outputs: ['tx2gene files', 'Gene annotation tables', 'GO TERM2GENE/TERM2NAME', 'KEGG membership files', 'Gene-label keys'],
  },
  {
    title: 'Master’s thesis: atmospheric pressure plasma and microgreens',
    type: 'Controlled-environment agronomy / crop physiology',
    question: 'How do atmospheric pressure plasma treatments affect seed germination, seedling growth, yield, nutritional profiles, and drought tolerance in microgreen crops?',
    methods: ['Controlled environment trials', 'Plasma-treated seed', 'Plasma-activated water', 'Microgreen production', 'Growth measurements', 'SAS/R analysis'],
    outputs: ['Germination data', 'Seedling growth traits', 'Root/shoot biomass', 'Yield summaries', 'Nutritional profile summaries', 'Conference abstracts'],
  },
  {
    title: 'Master’s mustard greens plasma and drought-stress study',
    type: 'Plant physiology / stress response',
    question: 'Can low-temperature plasma improve germination, seedling growth, and drought tolerance in mustard greens?',
    methods: ['Argon/helium plasma', 'PEG-induced drought stress', 'Petri dish trials', 'Germination tracking', 'Root length', 'Biomass analysis'],
    outputs: ['Germination rate', 'Growth response', 'Drought-stress response', 'Oral/poster presentation material', 'ASHS abstract'],
  },
  {
    title: 'Master’s molecular biology and NGS training project',
    type: 'Molecular biology / biotechnology training',
    question: 'How can plant molecular techniques be used to evaluate treatment effects on gene expression and plant tissue morphology?',
    methods: ['CTAB DNA extraction', 'RNeasy RNA extraction', 'Primer3', 'PCR', 'RT-PCR', 'Delta Delta Ct', 'SEM'],
    outputs: ['DNA/RNA QC', 'PCR/RT-PCR results', 'Gene expression fold-change interpretation', 'Melt-curve checks', 'SEM surface observations'],
  },
  {
    title: 'Agronomy, seed quality, biocontrol, and field diagnostic foundation',
    type: 'B.Sc. / internship / applied agriculture experience',
    question: 'How do field diagnostics, seed quality testing, biocontrol production, and farmer-facing agronomy support strengthen plant research skills?',
    methods: ['Seed quality testing', 'Field diagnostics', 'IPM outreach', 'Biocontrol production', 'Pure culture maintenance', 'Quality control tests'],
    outputs: ['Seed testing records', 'Field diagnostic reports', 'Biocontrol QC experience', 'IPM recommendations', 'Applied agriculture training'],
  },
  {
    title: 'Greenhouse, wet-lab, and sequencing sample tracking templates',
    type: 'Experimental design / sample preparation',
    question: 'How should plant, soil, nematode, DNA, and RNA samples be collected and tracked for sequencing-ready experiments?',
    methods: ['Randomization', 'Phenotyping', 'Nematode isolation', 'DNA isolation QC', 'RNA isolation QC', 'Sample metadata'],
    outputs: ['Sample sheets', 'Phenotyping templates', 'Nematode counting template', 'DNA/RNA QC checklist', 'Sequencing submission structure'],
  },
  {
    title: 'Linux/R reproducible bioinformatics workflows',
    type: 'Computational workflow organization',
    question: 'How can large biological datasets be organized, checked, rerun, and debugged across macOS and Ubuntu systems?',
    methods: ['Linux paths', 'R scripts', 'Output folders', 'Logs', 'Package troubleshooting', 'md5 checks', 'File renaming'],
    outputs: ['Clean project folders', 'Rerunnable scripts', 'QC summaries', 'Troubleshooting notes', 'README-style documentation'],
  },
]

export const publications = [
  {
    year: '2025',
    title: 'Effects of biopolymers, cork, and Rhizobium tropici-derived extracellular polymeric substances on soil microbial communities',
    journal: 'Frontiers in Microbiomes',
    role: 'Author',
    doi: 'https://doi.org/10.3389/frmbi.2025.1614472',
  },
  {
    year: '2025',
    title: 'Low-Temperature Plasma: A Green Technology for Improving Crop Productivity and Seed Safety',
    journal: 'Global Journal of Agricultural and Allied Sciences',
    role: 'Author',
    doi: 'https://doi.org/10.35251/gjaas.2025.007',
  },
  {
    year: '2024',
    title: 'Physiological and Biochemical Responses of Turmeric (Curcuma longa L.) Under Drought Stress',
    journal: 'Journal of Medicinally Active Plants',
    role: 'Author',
    doi: 'https://doi.org/10.7275/jmap.2315',
  },
  {
    year: '2024',
    title: 'Effects of atmospheric pressure plasma on seed germination, seedling growth, nutrient profile, and drought tolerance of microgreen crops',
    journal: 'Master’s thesis, Alabama Agricultural and Mechanical University',
    role: 'Author',
    doi: '#',
  },
  {
    year: '2023',
    title: 'Effects of Low-Temperature Plasma on Seed Germination, Seedling Growth, and Drought Tolerance of Mustard Greens',
    journal: 'HortScience / ASHS Annual Conference',
    role: 'Author',
    doi: '#',
  },
  {
    year: '2023',
    title: 'Variation in Growth, Yield, and Curcumin Content of Turmeric (Curcuma longa) Genotypes Grown in North Alabama',
    journal: 'HortScience / ASHS Annual Conference',
    role: 'Author',
    doi: 'https://ashs.confex.com/ashs/2023/meetingapp.cgi/Paper/40180',
  },
]
