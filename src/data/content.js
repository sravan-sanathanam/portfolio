// ── PERSONAL INFO ─────────────────────────────────────────────
// Replace these with your real details
export const personal = {
  name: 'Sravan Sanathanam',
  title: 'PhD Researcher',
  institution: 'Alabama A&M University',
  tagline: 'Plant Genomics, Transcriptomics & Multi-Omics',
  bio: [
    'PhD researcher specialising in plant molecular biology, functional genomics, and computational biology with hands-on expertise in cotton and soybean stress systems. My work integrates wet-lab experimentation with large-scale multi-omics analysis — connecting RNA-seq transcriptomics, rhizosphere microbiome profiling, and functional pathway enrichment.',
    'I thrive at the intersection of plant biology and bioinformatics — designing experiments, building reproducible analysis pipelines, and interpreting complex datasets to extract meaningful biological insight for agriculture and crop improvement.',
  ],
  email: 'sravankumar.sana@bulldogs.aamu.edu',
  linkedin: 'https://www.linkedin.com/in/sravan-sanathanam/',
  github: 'https://github.com/sravan-sanathanam',
  scholar: 'https://scholar.google.com/citations?user=t2o9yU8AAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0002-8192-8400',
  cvUrl: '/cv.pdf',
}

// ── STATS ──────────────────────────────────────────────────────
export const stats = [
  { value: '5+', label: 'Years research' },
  { value: '8',  label: 'Publications'   },
  { value: '40+', label: 'R packages'    },
  { value: '3',  label: 'Crop systems'   },
]

// ── HERO WORKFLOW PILLS ────────────────────────────────────────
export const workflows = [
  {
    label: 'RNA-seq workflow',
    steps: ['FASTQ', 'fastp', 'Salmon', 'tximport', 'DESeq2', 'GO/KEGG'],
  },
  {
    label: 'Microbiome workflow',
    steps: ['Raw reads', 'QIIME2', 'DADA2', 'phyloseq', 'PICRUSt2'],
  },
]

export const heroPills = [
  'RNA-seq', 'DESeq2', 'QIIME2', 'clusterProfiler',
  'phyloseq', 'R / Linux', 'CRISPR', 'GO / KEGG', 'PICRUSt2',
]

// ── SKILLS TABS ────────────────────────────────────────────────
export const skillTabs = [
  {
    id: 'omics',
    label: 'Genomics & Transcriptomics',
    cards: [
      {
        icon: 'ti-file-code',
        title: 'RNA-seq design & QC',
        desc: 'Full experiment design including replicates, time-course, treatment × genotype interaction models.',
        tags: ['fastp', 'FastQC', 'MultiQC', 'FASTQ handling', 'Paired-end reads'],
      },
      {
        icon: 'ti-chart-scatter',
        title: 'Quantification & DEG',
        desc: 'Transcript quantification, count matrix generation, and differential expression across multiple contrasts.',
        tags: ['Salmon', 'tximport', 'DESeq2', 'edgeR', 'limma', 'apeglm', 'ashr'],
      },
      {
        icon: 'ti-git-branch',
        title: 'Annotation & ID mapping',
        desc: 'tx2gene construction, UniProt/KEGG/GO annotation tables, cross-referencing gene/transcript/protein IDs.',
        tags: ['GTF/GFF3', 'BioMart', 'UniProt', 'CottonGen', 'NCBI', 'KEGG KO'],
      },
      {
        icon: 'ti-chart-bar',
        title: 'DEG visualisation',
        desc: 'Publication-quality figures for all stages of RNA-seq analysis.',
        tags: ['PCA', 'Volcano plot', 'MA plot', 'Heatmap', 'UpSet', 'Venn diagram'],
      },
    ],
  },
  {
    id: 'micro',
    label: 'Microbiome',
    cards: [
      {
        icon: 'ti-microscope',
        title: 'Amplicon processing',
        desc: '16S and ITS amplicon processing from raw reads to ASV tables using QIIME2 + DADA2.',
        tags: ['QIIME2', 'DADA2', 'Cutadapt', 'BIOM', 'ASV tables', 'QZA/QZV'],
      },
      {
        icon: 'ti-chart-pie',
        title: 'Diversity analysis',
        desc: 'Alpha and beta diversity, Bray-Curtis distances, ordination, and group significance testing.',
        tags: ['phyloseq', 'vegan', 'PCoA', 'PERMANOVA', 'Betadisper', 'Alpha diversity'],
      },
      {
        icon: 'ti-topology-star',
        title: 'Community & function',
        desc: 'Core microbiome, taxonomic bar plots, and predicted functional profiling of microbial communities.',
        tags: ['PICRUSt2', 'KO/EC/MetaCyc', 'ggpicrust2', 'microbiome', 'Maaslin2'],
      },
      {
        icon: 'ti-tree',
        title: 'Phylogenetics',
        desc: 'Working with phylogenetic trees in microbiome pipelines.',
        tags: ['ape', 'ggtree', 'tidytree', 'phytools', 'qiime2R'],
      },
    ],
  },
  {
    id: 'func',
    label: 'Functional Analysis',
    cards: [
      {
        icon: 'ti-circle-dot',
        title: 'GO enrichment',
        desc: 'Over-representation and gene-set enrichment for biological process, molecular function, and cellular component.',
        tags: ['clusterProfiler', 'enrichplot', 'ORA', 'GSEA', 'GO dot plots', 'GO circle plots'],
      },
      {
        icon: 'ti-route',
        title: 'KEGG pathway analysis',
        desc: 'Pathway-level enrichment, KEGG ORA and GSEA, and pathway visualisation.',
        tags: ['KEGGREST', 'pathview', 'KEGG ORA', 'KEGG GSEA', 'fgsea'],
      },
      {
        icon: 'ti-chart-dots',
        title: 'Enrichment visualisation',
        desc: 'Dot plots, bubble plots, cnet plots, GO circle/chord plots, and enrichment maps.',
        tags: ['GOplot', 'enrichplot', 'ggplot2', 'Cnet plot', 'Enrichment map'],
      },
      {
        icon: 'ti-dna',
        title: 'Genome annotation',
        desc: 'GTF/GFF3 parsing, ID reconciliation, and annotation table construction.',
        tags: ['rtracklayer', 'GenomicFeatures', 'AnnotationDbi', 'biomaRt', 'Biostrings'],
      },
    ],
  },
  {
    id: 'rpkgs',
    label: 'R Packages',
    cards: [
      {
        icon: 'ti-brand-python',
        title: 'Data wrangling',
        desc: 'Core tidyverse ecosystem for metadata cleaning, merging annotation tables, and result summaries.',
        tags: ['tidyverse', 'dplyr', 'tidyr', 'readr', 'stringr', 'data.table', 'readxl', 'openxlsx'],
      },
      {
        icon: 'ti-chart-line',
        title: 'Visualisation packages',
        desc: 'Publication-ready figure generation for genomics and microbiome data.',
        tags: ['ggplot2', 'ComplexHeatmap', 'pheatmap', 'EnhancedVolcano', 'ggrepel', 'patchwork', 'viridis'],
      },
      {
        icon: 'ti-math-function',
        title: 'Stats & DE packages',
        desc: 'Statistical testing, differential expression, and normalisation across omics layers.',
        tags: ['DESeq2', 'edgeR', 'limma', 'apeglm', 'ashr', 'vegan', 'IHW', 'sva'],
      },
      {
        icon: 'ti-circles-relation',
        title: 'Overlap & set plots',
        desc: 'Multi-set comparisons across DEG lists, treatments, and time points.',
        tags: ['UpSetR', 'ComplexUpset', 'VennDiagram', 'ggVennDiagram', 'cowplot', 'ggpubr'],
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Linux',
    cards: [
      {
        icon: 'ti-terminal',
        title: 'Linux & command line',
        desc: 'Ubuntu workstation workflows, directory management, software environments, log troubleshooting.',
        tags: ['Ubuntu', 'Bash', 'HPC concepts', 'md5sum', 'File management'],
      },
      {
        icon: 'ti-dna',
        title: 'Sequencing tools',
        desc: 'End-to-end sequencing data processing tools from QC to quantification and amplicon analysis.',
        tags: ['fastp', 'FastQC', 'Salmon', 'QIIME2', 'DADA2', 'PICRUSt2', 'Cutadapt'],
      },
      {
        icon: 'ti-file-type-py',
        title: 'Programming languages',
        desc: 'Python foundations for data cleaning and metadata handling; SQL basics for structured querying.',
        tags: ['Python', 'R', 'SQL basics', 'Excel', 'f-strings', 'string methods'],
      },
      {
        icon: 'ti-folder-check',
        title: 'Reproducible workflows',
        desc: 'Organised output folders, rerunnable scripts, and robust pipeline debugging.',
        tags: ['Snakemake concepts', 'fs/here', 'Script automation', 'BiocManager'],
      },
    ],
  },
  {
    id: 'mol',
    label: 'Molecular Biology',
    cards: [
      {
        icon: 'ti-flask',
        title: 'Core molecular techniques',
        desc: 'Wet-lab expertise across cloning, expression assays, and plant transformation systems.',
        tags: ['PCR/qPCR', 'Cloning', 'CRISPR', 'Protein assays', 'Plant transformation'],
      },
      {
        icon: 'ti-leaf',
        title: 'Plant stress biology',
        desc: 'Genotype-dependent stress responses, plant-pathogen interactions, and rhizosphere biology.',
        tags: ['Cotton', 'Soybean', 'Arabidopsis', 'Reniform nematode', 'Salt stress', 'Yarrowia'],
      },
      {
        icon: 'ti-test-pipe',
        title: 'Experimental design',
        desc: 'Factorial design, time-course experiments, replicate structure, and interaction models.',
        tags: ['Time-course', 'Treatment × genotype', 'Biological replicates', 'Interaction models'],
      },
      {
        icon: 'ti-users',
        title: 'Scientific communication',
        desc: 'Publications, grant writing, conference presentations, and translating complex genomics for diverse audiences.',
        tags: ['Grants', 'Conferences', 'Teaching', 'Science communication'],
      },
    ],
  },
]

// ── RESEARCH ───────────────────────────────────────────────────
export const research = [
  {
    num: '01',
    title: 'Cotton–reniform nematode interactions',
    desc: 'Connecting plant defense gene expression, root stress responses, rhizosphere microbiome shifts, and resistant vs susceptible genotype comparisons through RNA-seq and microbiome co-analysis.',
  },
  {
    num: '02',
    title: 'Soybean abiotic stress transcriptomics',
    desc: 'Genome-wide transcriptional responses to salt stress across genotypes and time points — identifying candidate genes and pathways underpinning tolerance mechanisms via DESeq2 and functional enrichment.',
  },
  {
    num: '03',
    title: 'Rhizosphere microbiome profiling',
    desc: '16S/ITS amplicon sequencing of root-associated microbial communities under stress conditions, linking microbial diversity to plant phenotype using QIIME2, phyloseq, and PICRUSt2 functional inference.',
  },
  {
    num: '04',
    title: 'Multi-omics pipeline development',
    desc: 'Building scalable, reproducible bioinformatics workflows integrating RNA-seq, microbiome, and functional annotation data — from raw FASTQ to publication-quality figures and biological interpretation.',
  },
]

// ── PUBLICATIONS ───────────────────────────────────────────────
// Replace with your real publications
export const publications = [
  {
    year: '2025',
    title: 'Low-Temperature Plasma: A Green Technology for Improving Crop Productivity and Seed Safety',
    journal: 'Global Journal of Agricultural and Allied Sciences',
    role: 'Author',
    doi: 'https://doi.org/10.35251/gjaas.2025.007',
  },
  {
    year: '2025',
    title: 'Effects of biopolymers, cork, and Rhizobium tropici-derived extracellular polymeric substances on soil microbial communities',
    journal: 'Frontiers in Microbiomes',
    role: 'Author',
    doi: 'https://doi.org/10.3389/frmbi.2025.1614472',
  },
  {
    year: '2024',
    title: 'Physiological and Biochemical Responses of Turmeric (Curcuma longa L.) Under Drought Stress',
    journal: 'Journal of Medicinally Active Plants',
    role: 'Author',
    doi: 'https://doi.org/10.7275/jmap.2315',
  },
  {
    year: '2023',
    title: 'Effects of Low-Temperature Plasma on Seed Germination, Seedling Growth, and Drought Tolerance of Mustard Greens',
    journal: 'HortScience',
    role: 'Author',
    doi: '#',
  },
  {
    year: '2023',
    title: 'Variation in Growth, Yield, and Curcumin Content of Turmeric (Curcuma longa) Genotypes Grown in North Alabama',
    journal: 'HortScience',
    role: 'Author',
    doi: '#',
  },
]
