export const personal = {
  name: 'Sravan Kumar Sanathanam',
  title: 'Plant Molecular Biology & Bioinformatics Researcher',
  institution: 'Alabama A&M University',
  tagline: 'Plant Molecular Biology, Transcriptomics, Microbiome & Functional Genomics',
  bio: [
    'Ph.D. candidate in Plant and Soil Science at Alabama A&M University. My research applies a multi-omics framework to cotton–reniform nematode (Rotylenchulus reniformis) interactions, combining whole-transcriptome RNA-seq with rhizosphere 16S/ITS amplicon sequencing to resolve how susceptible and tolerant Gossypium hirsutum genotypes diverge in transcriptional regulation and microbial community structure under nematode pressure.',
    'Bioinformatic workflows include expression quantification (Salmon/RSEM), differential expression analysis (DESeq2), GO/KEGG functional enrichment (clusterProfiler), and community profiling via QIIME2/DADA2 with phyloseq-based diversity analysis and predicted functional profiling (PICRUSt2). The work aims to identify candidate defense genes and microbiome bioindicators translatable to sustainable nematode management in cotton production.',
  ],
  email: 'sravan.sanathanam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sravan-sanathanam/',
  github: 'https://github.com/sravan-sanathanam',
  scholar: 'https://scholar.google.com/citations?user=t2o9yU8AAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0002-8192-8400',
  cvUrl: '/cv.pdf',
}

export const stats = [
  { value: 'Ph.D. + M.S.', label: 'Degrees in Plant Science' },
  { value: '6', label: 'Research Projects' },
  { value: 'RNA-seq + 16S/ITS', label: 'Sequencing Workflows' },
  { value: 'R + Linux', label: 'Analysis Environment' },
]

export const workflows = [
  {
    label: 'Plant multi-omics workflow',
    steps: [
      'Greenhouse design',
      'Root/rhizosphere sampling',
      'DNA/RNA isolation',
      'RNA-seq + 16S/ITS',
      'R/Linux analysis',
      'Biological interpretation',
    ],
  },
  {
    label: 'RNA-seq workflow',
    steps: [
      'FASTQ QC',
      'fastp/FastQC',
      'Salmon/RSEM',
      'Count matrices',
      'DESeq2',
      'GO/KEGG enrichment',
    ],
  },
  {
    label: 'Microbiome workflow',
    steps: [
      'Raw reads',
      'QIIME2',
      'DADA2',
      'phyloseq',
      'vegan statistics',
      'PICRUSt2 prediction',
    ],
  },
]

export const heroPills = [
  'Plant molecular biology',
  'Cotton–nematode interactions',
  'Crop stress biology',
  'RNA-seq transcriptomics',
  'Rhizosphere microbiome',
  'Functional genomics',
  'Greenhouse experiments',
  'DNA/RNA isolation',
  'R bioinformatics',
  'Linux workflows',
]

export const research = [
  {
    num: '01',
    title: 'Ph.D. research: cotton–nematode molecular interactions',
    desc: 'Characterizing how susceptible and tolerant cotton genotypes modulate transcriptional responses and rhizosphere microbial communities under reniform nematode pressure, with the goal of identifying candidate defense genes and microbiome bioindicators that define host–parasite phenotypes at the molecular scale.',
  },
  {
    num: '02',
    title: 'Transcriptome analysis and differential expression',
    desc: 'Applying alignment-free quantification (Salmon/RSEM) and count-based statistical frameworks (DESeq2) to dissect treatment, genotype, and time-course regulatory programs. Downstream interpretation integrates GO overrepresentation analysis and KEGG pathway mapping to translate DEG lists into mechanistic biological narratives.',
  },
  {
    num: '03',
    title: 'Rhizosphere microbiome characterization',
    desc: 'Profiling root-associated bacterial (16S rRNA) and fungal (ITS) communities via QIIME2/DADA2 amplicon pipelines. Diversity analysis, multivariate statistics (PERMANOVA, betadisper), and PICRUSt2-based functional potential prediction are used to link community structure shifts to plant stress phenotype.',
  },
  {
    num: '04',
    title: 'Master\'s research: plasma-assisted crop enhancement',
    desc: 'Investigated the physiological and biochemical effects of atmospheric pressure plasma on microgreen germination, biomass, nutritional profile, and drought tolerance. Findings contributed to the evidence base for non-thermal plasma as a sustainable seed-enhancement and crop-improvement technology.',
  },
  {
    num: '05',
    title: 'Molecular biology and genomics foundations',
    desc: 'Hands-on proficiency in plant nucleic acid extraction, RT-qPCR gene expression quantification (Delta-Delta Ct), primer design, PCR/gel electrophoresis, and scanning electron microscopy — the bench-scale toolkit that grounds and validates computational genomics findings.',
  },
]

export const projects = [
  {
    title: 'Ph.D. cotton–reniform nematode multi-omics',
    type: 'Plant molecular biology',
    question: 'How do transcriptomic programs and rhizosphere microbial communities diverge between susceptible and tolerant cotton genotypes under increasing reniform nematode pressure, and which defense-pathway genes and microbial taxa define these phenotypic differences?',
    methods: [
      'Greenhouse assay design',
      'Root/rhizosphere sampling',
      'Nematode extraction workflow',
      'RNA-seq',
      '16S/ITS microbiome',
      'GO/KEGG enrichment',
    ],
    outputs: [
      'Experimental design docs',
      'Sample metadata',
      'DEG summaries',
      'Microbiome diversity plots',
      'Taxonomy profiles',
      'Candidate genes and pathways',
    ],
  },
  {
    title: 'Soybean salt-stress RNA-seq time-course',
    type: 'Abiotic stress transcriptomics',
    question: 'Which transcriptional networks mediate the response to salt stress across soybean genotypes and treatment intensities, and how do genotype-by-treatment interactions evolve across time points at the pathway level?',
    methods: [
      'FASTQ processing',
      'Salmon/RSEM quantification',
      'DESeq2',
      'Time-course contrasts',
      'Interaction models',
      'Functional enrichment',
    ],
    outputs: [
      'Count matrices',
      'DEG tables',
      'PCA plots',
      'Volcano plots',
      'Heatmaps',
      'GO/KEGG pathway summaries',
    ],
  },
  {
    title: 'Cotton rhizosphere 16S/ITS microbiome analysis',
    type: 'Microbiome bioinformatics',
    question: 'To what extent does cotton genotype and nematode-induced root stress remodel the diversity, composition, and predicted functional capacity of the rhizosphere bacterial and fungal microbiome?',
    methods: [
      'QIIME2',
      'DADA2',
      'phyloseq',
      'vegan',
      'Taxonomy profiling',
      'PICRUSt2',
    ],
    outputs: [
      'Alpha diversity metrics',
      'PCoA ordination plots',
      'PERMANOVA results',
      'Taxonomy bar plots',
      'Core microbiome summaries',
      'Predicted pathway profiles',
    ],
  },
  {
    title: 'Yarrowia Day 1/Day 4 gene expression analysis',
    type: 'Comparative transcriptomics',
    question: 'How do mutant-versus-wild-type transcriptional programs in Yarrowia lipolytica diverge between early exponential (Day 1) and late exponential (Day 4) growth phases, and which gene ontology terms and KEGG pathways underpin these temporal regulatory transitions?',
    methods: [
      'Metadata cleaning',
      'DESeq2',
      'Mutant-vs-WT contrasts',
      'GO GSEA',
      'KEGG mapping',
      'fgsea',
    ],
    outputs: [
      'Strain comparisons',
      'Day comparisons',
      'PCA plots',
      'Volcano plots',
      'GO enrichment plots',
      'KEGG pathway figures',
    ],
  },
  {
    title: 'M.S. thesis: atmospheric pressure plasma in microgreens',
    type: 'Controlled-environment agronomy',
    question: 'Do atmospheric pressure plasma treatments applied to seeds or irrigation water produce statistically significant improvements in germination rate, seedling biomass, yield, and drought tolerance across commercial microgreen species and plasma dose levels?',
    methods: [
      'Controlled-environment trials',
      'Plasma-treated seed',
      'Plasma-activated water',
      'Growth measurements',
      'Drought-stress evaluation',
      'SAS/R analysis',
    ],
    outputs: [
      'Germination data',
      'Growth and biomass summaries',
      'Yield results',
      'Nutritional profile summaries',
      'Thesis chapters',
      'Conference presentations',
    ],
  },
  {
    title: 'Molecular biology and NGS training project',
    type: 'Molecular biology',
    question: 'Can RT-qPCR and scanning electron microscopy provide complementary molecular and morphological evidence of plasma treatment effects on plant gene expression and tissue surface characteristics?',
    methods: [
      'CTAB DNA extraction',
      'RNeasy RNA extraction',
      'Primer3',
      'PCR',
      'RT-qPCR',
      'Delta-Delta Ct',
      'SEM',
    ],
    outputs: [
      'DNA/RNA quality checks',
      'PCR/RT-qPCR results',
      'Gene expression quantification',
      'Melt-curve validation',
      'SEM surface observations',
    ],
  },
]

export const skillTabs = [
  {
    id: 'plant',
    label: 'Plant Biology',
    cards: [
      {
        icon: 'ti-leaf',
        title: 'Plant stress biology',
        desc: 'Interpreting plant responses to biotic stress (reniform nematode infestation) and abiotic stress (salt, drought) through integration of greenhouse phenotyping, molecular markers, and multi-omics data to resolve genotype-specific stress mechanisms.',
        tags: ['Cotton', 'Soybean', 'Microgreens', 'Reniform nematode', 'Salt stress', 'Drought stress'],
      },
      {
        icon: 'ti-seedling',
        title: 'Greenhouse and controlled-environment experiments',
        desc: 'Designing statistically rigorous greenhouse assays with balanced control/treatment structure, biological replication, time-course sampling, and growth phenotyping — from experimental layout through data collection and metadata management.',
        tags: ['Controls', 'Treatments', 'Replicates', 'Randomization', 'Time-course', 'Phenotyping'],
      },
      {
        icon: 'ti-bug',
        title: 'Nematology workflows',
        desc: 'Reniform nematode greenhouse inoculation and assessment protocols, including soil/root extraction, egg mass isolation, inoculum preparation, microscope counting, and standardized plant-response scoring.',
        tags: ['Nematode extraction', 'Soil samples', 'Root samples', 'Egg extraction', 'Microscope counting', 'Inoculation'],
      },
      {
        icon: 'ti-test-pipe',
        title: 'Plant and rhizosphere sampling',
        desc: 'Root, leaf, soil, and rhizosphere sampling for RNA-seq, microbiome profiling, and PCR-based applications, with emphasis on sample integrity, cold-chain management, and metadata recording for downstream genomics workflows.',
        tags: ['Root sampling', 'Leaf sampling', 'Rhizosphere soil', 'Sample labeling', 'Cold storage', 'Metadata'],
      },
    ],
  },
  {
    id: 'wetlab',
    label: 'Wet Lab',
    cards: [
      {
        icon: 'ti-flask',
        title: 'DNA and RNA isolation',
        desc: 'Plant nucleic acid extraction using CTAB and column-based (RNeasy) methods from root, leaf, and soil matrices, with quality assessment by spectrophotometry and gel electrophoresis prior to sequencing or expression analysis.',
        tags: ['CTAB DNA extraction', 'RNeasy RNA extraction', 'Plant tissue', 'Root/leaf samples', 'RNA quality', 'DNA quality'],
      },
      {
        icon: 'ti-dna',
        title: 'RT-qPCR and gene expression',
        desc: 'Primer design (Primer3), RT-qPCR setup, melt-curve validation, and Delta-Delta Ct quantification for relative gene expression analysis — providing bench-level validation of transcriptomic findings from RNA-seq workflows.',
        tags: ['Primer3', 'PCR', 'RT-qPCR', 'Melt curves', 'Delta-Delta Ct', 'Gene expression'],
      },
      {
        icon: 'ti-microscope',
        title: 'Microscopy and laboratory methods',
        desc: 'Scanning electron microscopy for plant tissue surface morphology, alongside standard laboratory methods including gel electrophoresis, spectrophotometry, autoclave sterilization, and controlled-environment equipment.',
        tags: ['SEM', 'Gel electrophoresis', 'Spectrophotometer', 'Autoclave', 'Micropipette', 'Incubator'],
      },
      {
        icon: 'ti-plant-2',
        title: 'Agronomy and applied plant science',
        desc: 'Foundation in controlled-environment agronomy, microgreen production systems, seed quality testing, plant tissue culture, biocontrol-agent production, and integrated pest management — knowledge that informs experimental design for crop-stress research.',
        tags: ['Agronomy', 'Tissue culture', 'Seed testing', 'Microgreens', 'Biocontrol', 'IPM'],
      },
    ],
  },
  {
    id: 'rnaseq',
    label: 'RNA-seq & Genomics',
    cards: [
      {
        icon: 'ti-file-code',
        title: 'RNA-seq experimental design',
        desc: 'Structuring RNA-seq experiments to resolve treatment, genotype, time-course, mutant-vs-WT, and interaction effects, with attention to confounding variables, replicate sufficiency, and the statistical power needed for reliable differential expression calls.',
        tags: ['Metadata design', 'Replicates', 'Treatment effects', 'Time effects', 'Genotype effects', 'Interaction models'],
      },
      {
        icon: 'ti-chart-scatter',
        title: 'Read QC and expression quantification',
        desc: 'FASTQ quality control, adapter trimming (fastp), alignment-free quantification (Salmon), and count matrix assembly via tximport — providing clean, reproducible inputs for differential expression analysis.',
        tags: ['FASTQ', 'fastp', 'FastQC', 'Salmon', 'RSEM', 'Count matrices'],
      },
      {
        icon: 'ti-chart-bar',
        title: 'Differential expression analysis',
        desc: 'DESeq2-based workflows for DEG identification, log-fold-change shrinkage (apeglm/ashr), and visualization (PCA, MA plots, volcano plots, heatmaps, UpSet diagrams) to characterize the scale and biological coherence of transcriptional responses.',
        tags: ['DESeq2', 'apeglm', 'ashr', 'edgeR', 'limma', 'PCA'],
      },
      {
        icon: 'ti-git-branch',
        title: 'Genome annotation and ID mapping',
        desc: 'Linking gene, transcript, locus tag, NCBI, UniProt, CottonGen, GO, and KEGG KO identifiers across annotation databases to ensure reliable mapping from count data through enrichment analysis.',
        tags: ['GTF/GFF3', 'tx2gene', 'UniProt', 'BioMart', 'NCBI', 'KEGG KO'],
      },
    ],
  },
  {
    id: 'microbiome',
    label: 'Microbiome',
    cards: [
      {
        icon: 'ti-microscope',
        title: '16S and ITS amplicon analysis',
        desc: 'End-to-end QIIME2/DADA2 pipelines for bacterial and fungal community profiling — from raw paired-end reads through denoising, taxonomic classification, and export of feature tables and phylogenetic trees for R-based downstream analysis.',
        tags: ['QIIME2', 'DADA2', 'Cutadapt', 'BIOM', 'QZA/QZV', 'ASV tables'],
      },
      {
        icon: 'ti-chart-pie',
        title: 'Diversity analysis and multivariate statistics',
        desc: 'Alpha diversity (richness, Shannon, Faith\'s PD), beta diversity ordination (Bray-Curtis, UniFrac, PCoA), PERMANOVA for group-level community differences, and betadisper for dispersion homogeneity — with biological interpretation of significant contrasts.',
        tags: ['phyloseq', 'vegan', 'Alpha diversity', 'PCoA', 'PERMANOVA', 'betadisper'],
      },
      {
        icon: 'ti-topology-star',
        title: 'Taxonomy and predicted functional profiling',
        desc: 'Taxonomic abundance summaries, core microbiome characterization, differential abundance testing, and PICRUSt2-based prediction of functional potential (KO, EC, MetaCyc pathways) to link community composition to metabolic capacity.',
        tags: ['Taxonomy plots', 'Core microbiome', 'PICRUSt2', 'ggpicrust2', 'KO', 'MetaCyc'],
      },
      {
        icon: 'ti-tree',
        title: 'Phylogenetic analysis',
        desc: 'Working with rooted phylogenetic trees for UniFrac-based beta diversity and phylogeny-aware analyses, using ape, ggtree, and phytools within microbiome community analysis pipelines.',
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
        desc: 'Over-representation analysis (ORA) and gene set enrichment analysis (GSEA) for biological process, molecular function, and cellular component GO terms — extracting mechanistic insight from differential expression results.',
        tags: ['clusterProfiler', 'enrichplot', 'GOplot', 'fgsea', 'ORA', 'GSEA'],
      },
      {
        icon: 'ti-route',
        title: 'KEGG pathway analysis',
        desc: 'KEGG ORA and GSEA, KO mapping, pathway membership interpretation, and pathview visualizations linking gene expression changes to canonical metabolic and signaling pathways.',
        tags: ['KEGGREST', 'pathview', 'KEGG ORA', 'KEGG GSEA', 'KO IDs', 'Pathway mapping'],
      },
      {
        icon: 'ti-chart-dots',
        title: 'Scientific visualization',
        desc: 'Publication-quality figures for transcriptomics, microbiome, enrichment analysis, and agronomy data, with consistent aesthetics across projects using modular ggplot2-based workflows.',
        tags: ['ggplot2', 'ComplexHeatmap', 'pheatmap', 'VennDiagram', 'UpSetR', 'ComplexUpset'],
      },
      {
        icon: 'ti-dna',
        title: 'Candidate gene and pathway interpretation',
        desc: 'Connecting differentially expressed genes, annotation identifiers, and enriched pathways to biologically coherent stress-response models — integrating transcriptomics, microbiome, and phenotypic data for holistic interpretation.',
        tags: ['Candidate genes', 'Gene labels', 'Defense response', 'Stress pathways', 'Multi-omics', 'Interpretation'],
      },
    ],
  },
  {
    id: 'rpkgs',
    label: 'R Packages',
    cards: [
      {
        icon: 'ti-table',
        title: 'Data wrangling and file handling',
        desc: 'Reproducible metadata management, annotation table joins, multi-format file import (Excel/CSV/TSV), output filtering, and modular script design for scalable omics analysis pipelines.',
        tags: ['tidyverse', 'dplyr', 'tidyr', 'readr', 'stringr', 'data.table'],
      },
      {
        icon: 'ti-chart-line',
        title: 'Visualization packages',
        desc: 'Custom figure production for omics, microbiome, enrichment, and agronomic data, with publication-ready aesthetics using layered ggplot2-based approaches.',
        tags: ['ggplot2', 'ggrepel', 'patchwork', 'ggprism', 'ggh4x', 'viridis'],
      },
      {
        icon: 'ti-math-function',
        title: 'Statistics and omics packages',
        desc: 'RNA-seq differential expression testing, count normalization, log-fold-change shrinkage, microbiome multivariate statistics, and differential abundance analysis.',
        tags: ['DESeq2', 'tximport', 'edgeR', 'limma', 'vegan', 'Maaslin2'],
      },
      {
        icon: 'ti-database',
        title: 'Bioconductor annotation packages',
        desc: 'Genome annotation parsing, genomic range operations, biological sequence handling, and programmatic access to pathway and orthology databases for ID mapping and enrichment.',
        tags: ['rtracklayer', 'GenomicFeatures', 'Biostrings', 'AnnotationDbi', 'biomaRt', 'KEGGREST'],
      },
    ],
  },
  {
    id: 'linux',
    label: 'Computing',
    cards: [
      {
        icon: 'ti-terminal',
        title: 'Linux bioinformatics workflows',
        desc: 'Ubuntu workstation-based analysis pipeline management, including file-system organization, process monitoring, package installation, storage management, and handling of large genomics datasets generated from sequencing runs.',
        tags: ['Ubuntu', 'Bash', 'File management', 'md5sum', 'Permissions', 'Logs'],
      },
      {
        icon: 'ti-folder-check',
        title: 'Reproducible project organization',
        desc: 'Structured, numbered project directories with rerunnable scripts, QC report archiving, results tables, and figure versioning — enabling clear audit trails and reproducible re-analysis.',
        tags: ['README files', 'Scripts', 'Metadata', 'QC reports', 'Results tables', 'Figures'],
      },
      {
        icon: 'ti-brand-python',
        title: 'Python for bioinformatics and data automation',
        desc: 'Developing Python proficiency applied to file parsing, metadata manipulation, bioinformatics task automation, and data transformation for omics workflows.',
        tags: ['pandas', 'pathlib', 'argparse', 'Jupyter', 'f-strings', 'string parsing'],
      },
      {
        icon: 'ti-database-search',
        title: 'SAS and structured data analysis',
        desc: 'Applied SAS PROC procedures for agronomic trial analysis during Master\'s research, including ANOVA, means comparisons, and repeated-measures models for controlled-environment experimental data.',
        tags: ['SAS PROC', 'ANOVA', 'RStudio', 'SELECT', 'WHERE', 'GROUP BY'],
      },
    ],
  },
]

export const awards = [
  { year: '2025', title: 'Black Tie Gala Scholarship', org: 'Alabama A&M University', amount: '$2,000' },
  { year: '2024', title: 'Graduate Oral Competition – 2nd Place', org: 'AAMU STEM DAY 2024', amount: '$150' },
  { year: '2023–24', title: 'EPSCoR Graduate Research Scholars Program (GRSP)', org: 'Alabama EPSCoR', amount: '$18,750/yr' },
  { year: '2023', title: '3rd Place – Poster Presentation', org: 'ACMAP 12th Annual Conference', amount: '$100' },
  { year: '2023', title: 'Travel Grant', org: 'ASHS Annual Conference', amount: '$500' },
  { year: '2023', title: '3 Minute Thesis – 3rd Place', org: 'AAMU STEM DAY 2023', amount: '$150' },
  { year: '2023', title: 'NRE Department Scholarship (4.0 GPA)', org: 'Alabama A&M University', amount: '$5,000' },
  { year: '2016–20', title: 'Post Matric Merit Scholarship', org: 'Telangana State Government', amount: '$2,400' },
]

export const teaching = [
  {
    term: 'Spring 2024',
    role: 'Teaching Assistant',
    course: 'NRE 199 – Technology in Agricultural & Biological Sciences',
    institution: 'Alabama A&M University',
    instructor: 'Dr. Srinivasa Rao Mentreddy',
    students: 25,
    note: 'Introductory course for freshmen in Agricultural Sciences covering report writing, data analysis, presentations, GIS, statistics, and precision agriculture.',
  },
]

export const service = [
  {
    year: '2023',
    role: 'Session Moderator',
    event: 'Technology Applications in Horticulture – Poster Session',
    org: 'ASHS Annual Conference, Orlando FL',
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
    journal: 'Master\'s thesis, Alabama Agricultural and Mechanical University',
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
