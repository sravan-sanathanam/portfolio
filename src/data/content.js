export const personal = {
  name: 'Sravan Kumar Sanathanam',
  shortName: 'Sravan K. Sanathanam',
  title: 'Plant Molecular Biology & Bioinformatics Researcher',
  institution: 'Alabama A&M University',
  tagline: 'Plant Molecular Biology, Transcriptomics, Microbiome & Functional Genomics',
  bio: [
    'Ph.D. student in Plant and Soil Science at Alabama A&M University. My research applies a multi-omics framework to cotton–reniform nematode (Rotylenchulus reniformis) interactions, combining whole-transcriptome RNA-seq with rhizosphere 16S/ITS amplicon sequencing to resolve how susceptible and tolerant Gossypium hirsutum genotypes diverge in transcriptional regulation and microbial community structure under nematode pressure.',
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

export const skillGroups = [
  {
    label: 'Transcriptomics',
    items: [
      { title: 'RNA-seq experimental design', tools: ['Metadata design', 'Replicates', 'Treatment effects', 'Time effects', 'Genotype effects', 'Interaction models'] },
      { title: 'Read QC and expression quantification', tools: ['FASTQ', 'fastp', 'FastQC', 'Salmon', 'RSEM', 'Count matrices'] },
      { title: 'Differential expression analysis', tools: ['DESeq2', 'apeglm', 'ashr', 'edgeR', 'limma', 'PCA'] },
      { title: 'Genome annotation and ID mapping', tools: ['GTF/GFF3', 'tx2gene', 'UniProt', 'BioMart', 'NCBI', 'KEGG KO'] },
      { title: 'GO enrichment analysis', tools: ['clusterProfiler', 'enrichplot', 'GOplot', 'fgsea', 'ORA', 'GSEA'] },
      { title: 'KEGG pathway analysis', tools: ['KEGGREST', 'pathview', 'KEGG ORA', 'KEGG GSEA', 'KO IDs', 'Pathway mapping'] },
      { title: 'Scientific visualization', tools: ['ggplot2', 'ComplexHeatmap', 'pheatmap', 'VennDiagram', 'UpSetR', 'ComplexUpset'] },
      { title: 'Candidate gene and pathway interpretation', tools: ['Candidate genes', 'Gene labels', 'Defense response', 'Stress pathways', 'Multi-omics', 'Interpretation'] },
    ],
  },
  {
    label: 'Microbiome',
    items: [
      { title: '16S and ITS amplicon analysis', tools: ['QIIME2', 'DADA2', 'Cutadapt', 'BIOM', 'QZA/QZV', 'ASV tables'] },
      { title: 'Diversity analysis and multivariate statistics', tools: ['phyloseq', 'vegan', 'Alpha diversity', 'PCoA', 'PERMANOVA', 'betadisper'] },
      { title: 'Taxonomy and predicted functional profiling', tools: ['Taxonomy plots', 'Core microbiome', 'PICRUSt2', 'ggpicrust2', 'KO', 'MetaCyc'] },
      { title: 'Phylogenetic analysis', tools: ['ape', 'ggtree', 'tidytree', 'phytools', 'qiime2R', 'phyloseq tree'] },
    ],
  },
  {
    label: 'Nematology & wet lab',
    items: [
      { title: 'Plant stress biology', tools: ['Cotton', 'Soybean', 'Microgreens', 'Reniform nematode', 'Salt stress', 'Drought stress'] },
      { title: 'Greenhouse and controlled-environment experiments', tools: ['Controls', 'Treatments', 'Replicates', 'Randomization', 'Time-course', 'Phenotyping'] },
      { title: 'Nematology workflows', tools: ['Nematode extraction', 'Soil samples', 'Root samples', 'Egg extraction', 'Microscope counting', 'Inoculation'] },
      { title: 'Plant and rhizosphere sampling', tools: ['Root sampling', 'Leaf sampling', 'Rhizosphere soil', 'Sample labeling', 'Cold storage', 'Metadata'] },
      { title: 'DNA and RNA isolation', tools: ['CTAB DNA extraction', 'RNeasy RNA extraction', 'Plant tissue', 'Root/leaf samples', 'RNA quality', 'DNA quality'] },
      { title: 'RT-qPCR and gene expression', tools: ['Primer3', 'PCR', 'RT-qPCR', 'Melt curves', 'Delta-Delta Ct', 'Gene expression'] },
      { title: 'Microscopy and laboratory methods', tools: ['SEM', 'Gel electrophoresis', 'Spectrophotometer', 'Autoclave', 'Micropipette', 'Incubator'] },
      { title: 'Agronomy and applied plant science', tools: ['Agronomy', 'Tissue culture', 'Seed testing', 'Microgreens', 'Biocontrol', 'IPM'] },
    ],
  },
  {
    label: 'Computing',
    items: [
      { title: 'Data wrangling and file handling', tools: ['tidyverse', 'dplyr', 'tidyr', 'readr', 'stringr', 'data.table'] },
      { title: 'Visualization packages', tools: ['ggplot2', 'ggrepel', 'patchwork', 'ggprism', 'ggh4x', 'viridis'] },
      { title: 'Statistics and omics packages', tools: ['DESeq2', 'tximport', 'edgeR', 'limma', 'vegan', 'Maaslin2'] },
      { title: 'Bioconductor annotation packages', tools: ['rtracklayer', 'GenomicFeatures', 'Biostrings', 'AnnotationDbi', 'biomaRt', 'KEGGREST'] },
      { title: 'Linux bioinformatics workflows', tools: ['Ubuntu', 'Bash', 'File management', 'md5sum', 'Permissions', 'Logs'] },
      { title: 'Reproducible project organization', tools: ['README files', 'Scripts', 'Metadata', 'QC reports', 'Results tables', 'Figures'] },
      { title: 'Python for bioinformatics and data automation', tools: ['pandas', 'pathlib', 'argparse', 'Jupyter', 'f-strings', 'string parsing'] },
      { title: 'SAS and structured data analysis', tools: ['SAS PROC', 'ANOVA', 'RStudio', 'SELECT', 'WHERE', 'GROUP BY'] },
    ],
  },
]

export const awards = [
  { year: '2026', title: 'Third Place, Graduate Student Poster Competition (Agricultural Systems and Technology)', org: 'Association of Research Directors Symposium', amount: '' },
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
    term: 'Fall 2026',
    role: 'Graduate Instructor',
    course: 'NRE 535 – Introduction to Bioinformatics',
    institution: 'Alabama A&M University',
    note: 'Taught the full graduate course under faculty supervision (NRE 798 Teaching Experience).',
  },
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

export const talks = [
  { year: '2025', title: 'Invited talk', event: 'NSF EPSCoR FTPP Annual Meeting' },
  { year: '2024', title: 'Invited talk', event: 'NSF EPSCoR FTPP Annual Meeting' },
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
    peerReviewed: true,
  },
  {
    year: '2025',
    title: 'Low-Temperature Plasma: A Green Technology for Improving Crop Productivity and Seed Safety',
    journal: 'Global Journal of Agricultural and Allied Sciences',
    role: 'Author',
    doi: 'https://doi.org/10.35251/gjaas.2025.007',
    peerReviewed: true,
  },
  {
    year: '2025',
    title: 'Evaluation of turmeric (Curcuma longa) varieties in high tunnel vs. open field',
    journal: 'Global Journal of Agricultural and Allied Sciences',
    role: 'Author',
    doi: '',
    peerReviewed: true,
  },
  {
    year: '2024',
    title: 'Physiological and Biochemical Responses of Turmeric (Curcuma longa L.) Under Drought Stress',
    journal: 'Journal of Medicinally Active Plants',
    role: 'Author',
    doi: 'https://doi.org/10.7275/jmap.2315',
    peerReviewed: true,
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

export const inPreparation = {
  count: 5,
  topics: 'salt tolerance in soybean and cotton, soil microbial diversity, bat microbiomes',
}
