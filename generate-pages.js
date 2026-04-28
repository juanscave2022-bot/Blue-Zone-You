// Run with: node generate-pages.js
// Generates all 25 individual service pages — NO pricing, telehealth consult CTAs, clinic images

const fs = require('fs');
const path = require('path');

const services = [
  // ═══ GENETIC TESTING ═══
  {
    file: 'pages/genetic-testing/dna-longevity-test.html',
    title: 'DNA Longevity Test',
    metaDesc: 'Blue Zone You DNA Longevity Test analyzes 200+ genetic markers across 6 longevity categories. Book your free telehealth consultation. Daytona Beach, FL.',
    category: 'genetic-testing',
    parentLabel: 'Genetic Testing',
    kicker: 'Our Flagship Test',
    heroP1: 'The DNA Longevity Test is the foundation of everything we do at Blue Zone You. With a single painless cheek swab, we analyze over 200 genetic markers across six critical longevity categories: biological aging, cardiovascular health, inflammation pathways, metabolic function, cognitive health, and nutrigenomics.',
    heroP2: 'Your results are compiled into a comprehensive Longevity Blueprint report and reviewed one-on-one with a clinician who translates your genetic data into a personalized protocol. This is not a consumer ancestry test. This is medical-grade genomic analysis designed to help you live longer.',
    stats: [{val:'200+',label:'Genetic Markers'},{val:'6',label:'Longevity Categories'},{val:'2-3wk',label:'Results Turnaround'},{val:'1:1',label:'Clinician Review'}],
    showImage: true,
    contentSections: [
      { heading: 'What We Analyze', copy: 'Your DNA Longevity Test examines genetic variants across the six pillars of longevity science. Each category reveals actionable insights that inform your personalized protocol.', cards: [
        {t:'Biological Aging',d:'Telomere-related genes and epigenetic clock markers that determine your true cellular age and rate of aging. This baseline allows us to track reversal over time.'},
        {t:'Cardiovascular Health',d:'38 genes governing cholesterol metabolism, blood pressure regulation, clotting factors, and arterial inflammation. Early genetic detection means intervention years before symptoms.'},
        {t:'Inflammation Pathways',d:'47 inflammatory pathway genes that reveal where chronic silent inflammation may be accelerating aging and disease risk throughout your body.'},
        {t:'Metabolic Function',d:'63 markers covering insulin sensitivity, fat storage patterns, mitochondrial efficiency, and cellular energy production.'},
        {t:'Cognitive Health',d:'Genes linked to neurodegeneration, neurotransmitter balance, BDNF production, and blood-brain barrier integrity.'},
        {t:'Nutrigenomics',d:'How your body absorbs vitamins, minerals, and macronutrients is genetically determined. Your supplement protocol should match your biology.'},
      ]},
      { heading: 'What You Receive', copy: 'Every DNA Longevity Test includes a complete suite of deliverables designed to turn your genetic data into action.', bullets: [
        'Comprehensive Longevity Blueprint report with risk scores across all 6 categories',
        'One-on-one clinician consultation (45-60 minutes) to review findings in detail',
        'Custom supplement protocol matched to your nutrigenomics profile',
        'Personalized nutrition and exercise recommendations based on metabolic genes',
        '90-day action plan with specific, measurable targets for each category',
        'Access to quarterly progress check-ins to track biomarker improvements',
      ]},
    ],
    faqs: [
      {q:'How is this different from 23andMe?',a:'Consumer DNA tests focus on ancestry and basic traits. Our test is medical-grade, analyzing 200+ longevity-specific markers with a clinician consultation and personalized protocol included.'},
      {q:'Is the cheek swab really painless?',a:'Yes. You swab the inside of your cheek for about 30 seconds. No blood draw, no needles, no fasting. At-home kits include prepaid return shipping.'},
      {q:'How long until I get my results?',a:'Results are typically available within 2-3 weeks. We notify you as soon as your Longevity Blueprint is ready and schedule your clinician review.'},
      {q:'Do I need to take this test more than once?',a:'Your DNA does not change, so the core test only needs to be done once. We recommend retesting your epigenetic age every 6 months to track biological age reversal.'},
      {q:'Is my genetic data secure?',a:'Absolutely. Your data is HIPAA-protected and never shared with third parties, insurance companies, or data brokers. You own your data.'},
      {q:'Can I combine this with other services?',a:'That is exactly how we recommend it. Your genetic data informs every other service we offer, from hormones to IV therapy to weight management.'},
    ],
    related: [
      {label:'Epigenetic Age Testing',href:'/pages/genetic-testing/epigenetic-age-testing.html',desc:'Track your biological age over time.'},
      {label:'Nutrigenomics Panel',href:'/pages/genetic-testing/nutrigenomics-panel.html',desc:'Optimize your diet based on DNA.'},
      {label:'Hormone Optimization',href:'/pages/hormones.html',desc:'Gene-guided hormone protocols.'},
      {label:'Wellness & Recovery',href:'/pages/wellness.html',desc:'IV therapy, peptides, and NAD+.'},
    ],
  },
  {
    file: 'pages/genetic-testing/epigenetic-age-testing.html', title: 'Epigenetic Age Testing', category: 'genetic-testing', parentLabel: 'Genetic Testing', kicker: 'Measure Your True Age',
    heroP1: 'Your chronological age is just a number. Your biological age tells the real story of how fast your body is aging at the cellular level. Our Epigenetic Age Test measures DNA methylation patterns across key aging biomarkers to calculate your true biological age with scientific precision.',
    heroP2: 'This test is the gold standard for tracking whether your longevity interventions are working. We recommend retesting every 6 months so you can see measurable reversal. Many clients see significant improvement within the first 90 days of following their personalized protocol.',
    stats: [{val:'850K+',label:'Methylation Sites'},{val:'6mo',label:'Retest Interval'},{val:'90day',label:'Avg First Results'},{val:'1:1',label:'Clinician Review'}],
    contentSections: [{heading:'How It Works',copy:'DNA methylation is one of the most accurate biological clocks discovered by modern science.',cards:[
      {t:'Methylation Analysis',d:'We measure over 850,000 methylation sites using Illumina array technology, then calculate your biological age using validated epigenetic clock algorithms.'},
      {t:'Age Gap Report',d:'Your report shows the gap between chronological and biological age. A negative gap means you are aging slower than average.'},
      {t:'Trajectory Tracking',d:'Each retest builds your aging trajectory curve, showing whether your protocol is decelerating, halting, or reversing biological aging.'},
    ]}],
    faqs: [{q:'How accurate is epigenetic age testing?',a:'Epigenetic clocks are the most scientifically validated measure of biological aging available, with accuracy within 1-2 years.'},{q:'How often should I retest?',a:'Every 6 months gives your body enough time to respond to protocol changes while catching trends early.'},{q:'What if my biological age is higher?',a:'This is valuable information. Our clinicians can identify specific interventions to slow or reverse that trajectory.'},{q:'Can lifestyle changes really reverse biological age?',a:'Yes. Published research shows targeted interventions can reduce biological age by 3-8 years within 6-12 months.'}],
    related: [{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'Full 200+ marker analysis.'},{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Cellular energy for age reversal.'},{label:'Peptide Therapy',href:'/pages/wellness/peptide-therapy.html',desc:'Growth hormone and tissue repair.'},{label:'Longevity Blueprint',href:'/pages/genetic-testing/longevity-blueprint-report.html',desc:'All panels with 1-year support.'}],
  },
  {
    file: 'pages/genetic-testing/nutrigenomics-panel.html', title: 'Nutrigenomics Panel', category: 'genetic-testing', parentLabel: 'Genetic Testing', kicker: 'Eat for Your DNA',
    heroP1: 'Stop guessing what to eat. Your Nutrigenomics Panel reveals exactly how your body processes macronutrients, absorbs vitamins and minerals, metabolizes caffeine and alcohol, and responds to common food sensitivities.',
    heroP2: 'This panel analyzes 42 nutrient-related genes to identify optimal macronutrient ratios, meal timing based on your circadian genes, supplement recommendations for absorption gaps, and a complete food sensitivity profile.',
    stats: [{val:'42',label:'Nutrient Genes'},{val:'100%',label:'Personalized Plan'},{val:'2-3wk',label:'Results'},{val:'1:1',label:'Diet Consultation'}], showImage: true,
    contentSections: [{heading:'What Your Genes Reveal About Nutrition',copy:'Your nutrigenomics profile covers every aspect of how food interacts with your biology.',bullets:['Macronutrient metabolism: how your body processes carbs, fats, and proteins','Vitamin and mineral absorption efficiency and supplementation needs','Caffeine metabolism speed and optimal intake timing','Food sensitivity and intolerance genetic markers','Circadian gene-based meal timing recommendations','Detoxification pathway efficiency and support requirements']}],
    faqs: [{q:'Will this replace my current diet?',a:'It will optimize it. Your clinician translates genetic findings into practical daily guidance that works with your lifestyle and preferences.'},{q:'How is this different from a food allergy test?',a:'Food allergy tests measure immune reactions. Nutrigenomics reveals how your genes process nutrients at the cellular level, a much deeper and more permanent insight.'},{q:'Do I need the full DNA test first?',a:'The Nutrigenomics Panel can be taken standalone, but combining it with the full DNA Longevity Test gives your clinician the most complete picture.'}],
    related: [{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'Full 200+ marker analysis.'},{label:'Nutrition Guidance',href:'/pages/weight-body/nutrition-guidance.html',desc:'Ongoing nutrition coaching.'},{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Gene-guided weight management.'},{label:'Nutraceuticals',href:'/pages/weight-body/nutraceuticals.html',desc:'Gene-matched supplements.'}],
  },
  {
    file: 'pages/genetic-testing/cardiovascular-gene-panel.html', title: 'Cardiovascular Gene Panel', category: 'genetic-testing', parentLabel: 'Genetic Testing', kicker: 'Protect Your Heart',
    heroP1: 'Heart disease is the number one killer worldwide, but it does not have to be your destiny. Our Cardiovascular Gene Panel examines 38 genes that govern cholesterol metabolism, blood pressure regulation, clotting factor production, and arterial inflammation.',
    heroP2: 'Early detection at the genetic level means we can intervene years before symptoms appear. This panel is especially recommended for anyone with a family history of heart disease, stroke, or hypertension.',
    stats: [{val:'38',label:'CV Genes'},{val:'#1',label:'Killer Prevented'},{val:'10yr+',label:'Early Detection'},{val:'1:1',label:'Risk Review'}],
    contentSections: [{heading:'Cardiovascular Genetic Categories',copy:'Our panel covers the full spectrum of genetic cardiovascular risk factors.',cards:[
      {t:'Cholesterol Metabolism',d:'Genes controlling LDL, HDL, and triglyceride processing. Understanding your genetic cholesterol pathways guides statin decisions and dietary interventions.'},
      {t:'Blood Pressure Regulation',d:'Variants in the renin-angiotensin system, sodium sensitivity, and vascular tone that predispose you to hypertension.'},
      {t:'Clotting & Thrombosis',d:'Factor V Leiden, prothrombin mutations, and other variants that increase clotting risk, especially important for HRT candidates.'},
    ]}],
    faqs: [{q:'Who should get this panel?',a:'Anyone with a family history of heart disease, stroke, or hypertension. Also recommended for clients considering hormone therapy, as some genetic variants affect clotting risk.'},{q:'Can genetic heart risk be mitigated?',a:'Absolutely. Most genetic cardiovascular risks can be significantly reduced through targeted lifestyle changes, supplementation, and when appropriate, medication guided by your genetic profile.'}],
    related: [{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'Full 200+ marker analysis.'},{label:'Bioidentical HRT',href:'/pages/hormones/bioidentical-hrt.html',desc:'Safe, gene-guided HRT.'},{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Heart-healthy nutrient support.'},{label:'Red Light Therapy',href:'/pages/wellness/red-light-therapy.html',desc:'Reduce inflammation naturally.'}],
  },
  {
    file: 'pages/genetic-testing/longevity-blueprint-report.html', title: 'Longevity Blueprint Report', category: 'genetic-testing', parentLabel: 'Genetic Testing', kicker: 'The Complete Picture',
    heroP1: 'The Longevity Blueprint Report is our most comprehensive offering. It combines every genetic panel into one integrated analysis: the full 200+ marker DNA Longevity Test, epigenetic age testing, nutrigenomics panel, and cardiovascular gene panel bundled with a unified report.',
    heroP2: 'This premium package includes a 90-day action plan, custom supplement protocol, and quarterly clinician check-ins for a full year. This is the plan for clients who are serious about longevity and want ongoing clinical support as their biomarkers improve.',
    stats: [{val:'All',label:'Panels Combined'},{val:'1yr',label:'Clinical Support'},{val:'4x',label:'Quarterly Check-ins'},{val:'90day',label:'Action Plan'}], showImage: true,
    contentSections: [{heading:'Everything Included',copy:'The Longevity Blueprint combines all of our genetic testing into one comprehensive program.',bullets:['Full DNA Longevity Test (200+ markers across 6 categories)','Epigenetic Age Testing with 6-month retest included','Complete Nutrigenomics Panel with custom diet plan','Cardiovascular Gene Panel with risk assessment','Unified Longevity Blueprint report connecting all findings','90-day action plan with quarterly clinician check-ins for 1 year','Custom supplement protocol and ongoing adjustments']}],
    faqs: [{q:'How is this different from ordering tests separately?',a:'Beyond savings, the Blueprint connects findings across all panels into a unified analysis. Interactions between cardiovascular genes and metabolic pathways, for example, are only visible when analyzed together.'},{q:'What happens during quarterly check-ins?',a:'Your clinician reviews updated bloodwork, tracks your biomarker trajectory, adjusts your protocol, and addresses any new symptoms or goals. Each check-in is 30-45 minutes.'}],
    related: [{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'Our flagship genetic panel.'},{label:'Epigenetic Age Testing',href:'/pages/genetic-testing/epigenetic-age-testing.html',desc:'Track biological age reversal.'},{label:'Hormone Optimization',href:'/pages/hormones.html',desc:'Gene-guided hormone protocols.'},{label:'Wellness & Recovery',href:'/pages/wellness.html',desc:'Advanced recovery therapies.'}],
  },
  // ═══ HORMONES ═══
  {file:'pages/hormones/bioidentical-hrt.html',title:'Bioidentical HRT',category:'hormones',parentLabel:'Hormones',kicker:'Restore Natural Balance',heroP1:'Bioidentical hormones are molecularly identical to what your body naturally produces. At Blue Zone You, we use your genetic data and comprehensive bloodwork to create a precision HRT protocol that restores optimal levels safely, without the risks associated with synthetic alternatives.',heroP2:'Every protocol is individually compounded and monitored with regular blood panels. Your clinician adjusts dosages based on your symptoms, lab values, and genetic metabolism profile to ensure you stay in the optimal range.',stats:[{val:'Bio',label:'Identical Hormones'},{val:'6wk',label:'To Feel Results'},{val:'94%',label:'Symptom Relief'},{val:'1:1',label:'Ongoing Monitoring'}],showImage:true,contentSections:[{heading:'The Bioidentical Advantage',copy:'Unlike synthetic hormones, bioidentical hormones are recognized by your body as its own.',bullets:['Molecularly identical to your natural hormones for optimal receptor binding','Individually compounded dosages based on your genetic metabolism profile','Multiple delivery methods: creams, pellets, injections, or sublingual','Regular blood monitoring with protocol adjustments as your body responds','Genetic testing identifies how you metabolize hormones for precise dosing','Integration with your broader longevity protocol for compounding benefits']}],faqs:[{q:'Are bioidentical hormones safer than synthetic?',a:'Research suggests bioidentical hormones have a more favorable safety profile because they are molecularly identical to your natural hormones. Our genetic testing adds another layer of safety by identifying metabolism patterns.'},{q:'How soon will I feel results?',a:'Most clients notice improvements in energy, sleep, and mood within 4-6 weeks. Full optimization typically takes 3-6 months with ongoing monitoring and adjustments.'},{q:'Do I need genetic testing first?',a:'We strongly recommend it. Your genes determine how you metabolize hormones, your receptor sensitivity, and potential risk factors. This data makes your protocol significantly safer and more effective.'}],related:[{label:'Testosterone Optimization',href:'/pages/hormones/testosterone-optimization.html',desc:'Targeted testosterone protocols.'},{label:'Female Hormone Balance',href:'/pages/hormones/female-hormone-balance.html',desc:'Comprehensive female HRT.'},{label:'Thyroid Support',href:'/pages/hormones/thyroid-support.html',desc:'Complete thyroid optimization.'},{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'The foundation of all protocols.'}]},
  {file:'pages/hormones/testosterone-optimization.html',title:'Testosterone Optimization',category:'hormones',parentLabel:'Hormones',kicker:'Reclaim Your Edge',heroP1:'Low testosterone affects far more than libido. It impacts energy, muscle mass, body composition, mood, cognitive clarity, and cardiovascular health. After age 30, testosterone declines approximately 1-2% per year, and by the time symptoms are obvious, levels may have dropped significantly.',heroP2:'Our testosterone optimization uses genetic insights to determine the ideal approach for your body. Whether through TRT, peptide therapy, or natural optimization, every decision is guided by your DNA and monitored with regular lab work.',stats:[{val:'15+',label:'Markers Tested'},{val:'1-2%',label:'Annual Decline After 30'},{val:'4-6wk',label:'To Feel Results'},{val:'1:1',label:'Clinician-Managed'}],contentSections:[{heading:'Our Approach',copy:'We offer multiple pathways to testosterone optimization, selected based on your genetics and goals.',cards:[{t:'TRT Protocols',d:'Traditional testosterone replacement with genetic dosing guidance, multiple delivery methods, and regular monitoring to maintain optimal levels safely.'},{t:'Peptide Optimization',d:'Growth hormone secretagogues and other peptides that stimulate your body\'s own testosterone production, ideal for younger men or those preferring a natural approach.'},{t:'Natural Protocols',d:'Evidence-based lifestyle, supplement, and nutrition interventions that can boost testosterone 20-40% without exogenous hormones.'}]}],faqs:[{q:'How do I know if my testosterone is low?',a:'Common symptoms include fatigue, reduced motivation, difficulty building muscle, increased body fat, brain fog, low libido, and mood changes. A blood panel confirms the diagnosis.'},{q:'Will TRT affect my fertility?',a:'It can. We discuss fertility preservation options before starting any protocol and offer alternatives like peptide therapy that maintain natural production.'}],related:[{label:'Bioidentical HRT',href:'/pages/hormones/bioidentical-hrt.html',desc:'Full hormone replacement.'},{label:'Peptide Therapy',href:'/pages/wellness/peptide-therapy.html',desc:'Stimulate natural production.'},{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Optimize body composition.'},{label:'Body Composition',href:'/pages/weight-body/body-composition.html',desc:'Track lean mass gains.'}]},
  {file:'pages/hormones/female-hormone-balance.html',title:'Female Hormone Balance',category:'hormones',parentLabel:'Hormones',kicker:'Thrive at Every Stage',heroP1:'From perimenopause through post-menopause, hormonal shifts can dramatically impact every aspect of quality of life. Hot flashes, sleep disruption, mood changes, weight gain, brain fog, and declining bone density are not inevitable. They are treatable hormonal imbalances.',heroP2:'We provide personalized hormone balancing using bioidentical estrogen, progesterone, and testosterone as guided by your genetic profile. Your genes determine how you metabolize estrogen, your receptor sensitivity, and your risk factors.',stats:[{val:'3',label:'Key Hormones Balanced'},{val:'94%',label:'Report Improvement'},{val:'Gene',label:'Guided Dosing'},{val:'1:1',label:'Ongoing Care'}],showImage:true,contentSections:[{heading:'Symptoms We Address',copy:'Hormonal imbalance affects nearly every system in a woman\'s body. Our protocols target the root cause.',bullets:['Hot flashes, night sweats, and temperature dysregulation','Sleep disruption, insomnia, and fatigue','Mood swings, anxiety, irritability, and depression','Weight gain, especially around the midsection','Brain fog, memory issues, and reduced cognitive clarity','Declining bone density and joint pain','Low libido and vaginal dryness']}],faqs:[{q:'Is hormone therapy safe for women?',a:'Bioidentical hormone therapy, when properly prescribed and monitored with genetic data, has a strong safety profile. We use the latest research to guide every decision.'},{q:'What age should I start considering HRT?',a:'Many women benefit from starting in perimenopause (typically mid-40s) when symptoms first appear. Earlier intervention often leads to better outcomes.'}],related:[{label:'Bioidentical HRT',href:'/pages/hormones/bioidentical-hrt.html',desc:'Our full HRT program.'},{label:'Thyroid Support',href:'/pages/hormones/thyroid-support.html',desc:'Often linked to female hormones.'},{label:'Bone & Body Composition',href:'/pages/weight-body/body-composition.html',desc:'Track bone density changes.'},{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Support hormonal transitions.'}]},
  {file:'pages/hormones/thyroid-support.html',title:'Thyroid Support',category:'hormones',parentLabel:'Hormones',kicker:'Master Your Metabolism',heroP1:'Your thyroid controls metabolism, energy production, body temperature, heart rate, and weight regulation. Standard thyroid testing often misses subclinical dysfunction because it relies on a single marker (TSH) with outdated reference ranges.',heroP2:'Our comprehensive thyroid evaluation includes full panels (TSH, free T3, free T4, reverse T3, thyroid antibodies), genetic analysis of hormone conversion pathways, and clinical symptom assessment. We find and treat the root cause.',stats:[{val:'7+',label:'Thyroid Markers'},{val:'Root',label:'Cause Approach'},{val:'Gene',label:'Conversion Analysis'},{val:'1:1',label:'Clinician Care'}],contentSections:[{heading:'Beyond Standard Testing',copy:'Most doctors only test TSH. We go deeper.',cards:[{t:'Complete Thyroid Panel',d:'TSH, free T3, free T4, reverse T3, and thyroid antibodies. This reveals the full picture of thyroid function, not just a single snapshot.'},{t:'Genetic Conversion Analysis',d:'Your genes determine how efficiently you convert T4 to active T3. Variants in the DIO1 and DIO2 genes can cause symptoms even with normal TSH.'},{t:'Root Cause Investigation',d:'We identify whether dysfunction is driven by autoimmunity, nutrient deficiency (iodine, selenium, zinc), stress, or medication interactions.'}]}],faqs:[{q:'My doctor says my thyroid is normal. Could it still be an issue?',a:'Yes. Standard TSH-only testing misses many cases of subclinical thyroid dysfunction. Our comprehensive panel catches what standard testing misses.'},{q:'Can thyroid issues cause weight gain?',a:'Absolutely. Even mild thyroid dysfunction can slow metabolism significantly. Optimizing thyroid function is often a key component of weight management.'}],related:[{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Address metabolic root causes.'},{label:'Female Hormone Balance',href:'/pages/hormones/female-hormone-balance.html',desc:'Thyroid and female hormones interact.'},{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'Full genetic picture.'},{label:'Nutrition Guidance',href:'/pages/weight-body/nutrition-guidance.html',desc:'Thyroid-supportive nutrition.'}]},
  {file:'pages/hormones/hormone-quiz.html',title:'Hormone Quiz',category:'hormones',parentLabel:'Hormones',kicker:'Find Your Starting Point',heroP1:'Not sure if your hormones are out of balance? Our free 2-minute hormone quiz helps you identify common symptoms of hormonal imbalance and points you toward the right evaluation. It covers energy, sleep, mood, body composition, cognition, libido, and recovery.',heroP2:'Based on your answers, we recommend the appropriate evaluation pathway and connect you with a clinician who can run the right tests. No commitment, no cost. Just clarity about your next step.',stats:[{val:'2min',label:'Quick Assessment'},{val:'Free',label:'No Cost'},{val:'7',label:'Symptom Categories'},{val:'Next',label:'Step Guidance'}],contentSections:[{heading:'What the Quiz Covers',copy:'Seven key areas that indicate hormonal health.',bullets:['Energy levels and daily fatigue patterns','Sleep quality, onset, and nighttime waking','Mood stability, anxiety, and irritability','Body composition changes and stubborn weight','Cognitive clarity, focus, and memory','Libido and sexual health','Recovery speed from exercise and illness']}],faqs:[{q:'Is the quiz a diagnosis?',a:'No. The quiz identifies symptom patterns that warrant professional evaluation. Only bloodwork and clinical assessment can confirm hormonal imbalance.'},{q:'What happens after I complete the quiz?',a:'You receive personalized recommendations and an invitation to schedule a free telehealth consultation with one of our hormone specialists.'}],related:[{label:'Bioidentical HRT',href:'/pages/hormones/bioidentical-hrt.html',desc:'Our full HRT program.'},{label:'Testosterone Optimization',href:'/pages/hormones/testosterone-optimization.html',desc:'For men experiencing decline.'},{label:'Female Hormone Balance',href:'/pages/hormones/female-hormone-balance.html',desc:'For women in transition.'},{label:'Thyroid Support',href:'/pages/hormones/thyroid-support.html',desc:'Often missed thyroid issues.'}]},
  // ═══ WEIGHT & BODY ═══
  {file:'pages/weight-body/metabolic-weight-loss.html',title:'Metabolic Weight Loss',category:'weight-body',parentLabel:'Weight & Body',kicker:'Work With Your Biology',heroP1:'Our metabolic weight loss program starts where generic diets fail: your DNA. We use genetic testing to understand your unique metabolic pathways, including how your body stores fat, burns energy, responds to macronutrients, and regulates appetite.',heroP2:'Every program includes monthly body composition scans, clinician check-ins, and protocol adjustments based on real data. We combine nutrition, exercise, supplements, and pharmaceutical support to achieve sustainable results.',stats:[{val:'30+',label:'Avg Lbs Lost'},{val:'Gene',label:'Guided Protocol'},{val:'Monthly',label:'Body Scans'},{val:'1:1',label:'Clinician Support'}],showImage:true,contentSections:[{heading:'Five Pillars of Metabolic Success',copy:'Sustainable weight loss requires a multi-modal approach guided by your biology.',cards:[{t:'Genetic Metabolic Profiling',d:'Understand your fat storage genes, appetite regulation variants, and metabolic rate determinants before building any plan.'},{t:'Precision Nutrition',d:'Nutrigenomics-based meal plans with optimal macronutrient ratios, timing, and food choices matched to your DNA.'},{t:'Clinical Monitoring',d:'Monthly body composition scans, bloodwork, and clinician reviews to track progress and adjust your protocol in real time.'},{t:'Pharmaceutical Support',d:'When appropriate, medically supervised GLP-1 therapy or other interventions titrated to your genetic response profile.'},{t:'Behavioral Coaching',d:'Sustainable habit formation, stress management, and sleep optimization to support long-term metabolic health.'}]}],faqs:[{q:'How is this different from a regular diet program?',a:'We start with your genetic data. Generic diets ignore the fact that every metabolism is different. Our protocols are built specifically for your biology.'},{q:'Will I regain the weight?',a:'Sustainability is built into our approach. By addressing the genetic and hormonal root causes of weight gain, our clients maintain results long-term.'}],related:[{label:'GLP-1 Therapy',href:'/pages/weight-body/glp1-therapy.html',desc:'Medical weight management.'},{label:'Body Composition',href:'/pages/weight-body/body-composition.html',desc:'Track your transformation.'},{label:'Nutrition Guidance',href:'/pages/weight-body/nutrition-guidance.html',desc:'Ongoing nutrition coaching.'},{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'The foundation of your protocol.'}]},
  {file:'pages/weight-body/glp1-therapy.html',title:'GLP-1 Therapy',category:'weight-body',parentLabel:'Weight & Body',kicker:'Medical Weight Management',heroP1:'GLP-1 receptor agonists like semaglutide and tirzepatide have transformed medical weight management. At Blue Zone You, we combine these medications with your genetic profile and comprehensive clinical oversight for safe, effective, sustainable results.',heroP2:'Unlike online telehealth mills that prescribe without monitoring, we start with genetic and metabolic testing, titrate based on your response, and support you with nutrition guidance and body composition tracking throughout.',stats:[{val:'FDA',label:'Approved Meds'},{val:'Gene',label:'Guided Dosing'},{val:'Monthly',label:'Clinical Monitoring'},{val:'Full',label:'Support Team'}],contentSections:[{heading:'Our GLP-1 Difference',copy:'Medically supervised GLP-1 therapy with genetic precision.',bullets:['Comprehensive metabolic and genetic testing before prescribing','Genetically-informed dosage titration for optimal response with minimal side effects','Monthly body composition scans to track fat loss vs. lean mass preservation','Nutrition guidance to prevent muscle loss during rapid weight reduction','Clinician monitoring at every step with proactive protocol adjustments','Transition planning for medication tapering and long-term maintenance']}],faqs:[{q:'Am I a candidate for GLP-1 therapy?',a:'A telehealth consultation with our clinician will determine candidacy based on your BMI, metabolic health, and genetic profile. Not everyone needs medication, and we explore all options.'},{q:'What about side effects?',a:'Our genetic testing helps predict individual side effect risk. We start with low doses and titrate slowly based on your response, significantly reducing common side effects like nausea.'}],related:[{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Comprehensive metabolic program.'},{label:'Body Composition',href:'/pages/weight-body/body-composition.html',desc:'Track your progress.'},{label:'Nutraceuticals',href:'/pages/weight-body/nutraceuticals.html',desc:'Support your metabolism.'},{label:'Nutrition Guidance',href:'/pages/weight-body/nutrition-guidance.html',desc:'Prevent muscle loss.'}]},
  {file:'pages/weight-body/body-composition.html',title:'Body Composition Analysis',category:'weight-body',parentLabel:'Weight & Body',kicker:'Beyond the Scale',heroP1:'The number on your scale tells you almost nothing about your health. Our advanced body composition scanning measures what actually matters: lean muscle mass, visceral fat, subcutaneous fat distribution, bone mineral density, and metabolic rate.',heroP2:'Monthly scans track your progress over time, showing exactly where you are gaining muscle, losing fat, and improving metabolic markers. Your clinician uses this data to adjust your protocol for optimal results.',stats:[{val:'5',label:'Key Metrics'},{val:'Clinical',label:'Grade Accuracy'},{val:'Monthly',label:'Tracking'},{val:'Data',label:'Driven Adjustments'}],contentSections:[{heading:'What We Measure',copy:'A comprehensive view of your body composition beyond weight alone.',cards:[{t:'Lean Muscle Mass',d:'Track muscle gains and prevent muscle loss during weight management. Critical for metabolic health and longevity.'},{t:'Visceral Fat',d:'The dangerous fat surrounding your organs. Visceral fat is the strongest predictor of metabolic disease, independent of total body weight.'},{t:'Bone Mineral Density',d:'Essential for long-term skeletal health, especially for women in hormonal transition and anyone over 50.'}]}],faqs:[{q:'How often should I get scanned?',a:'Monthly scans provide the best data for tracking trends and adjusting protocols. Quarterly scans are minimum for meaningful insights.'},{q:'Is this like a DEXA scan?',a:'Our scanning technology provides DEXA-equivalent accuracy in a faster, more comfortable format.'}],related:[{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Gene-guided weight management.'},{label:'GLP-1 Therapy',href:'/pages/weight-body/glp1-therapy.html',desc:'Medical weight management.'},{label:'Testosterone Optimization',href:'/pages/hormones/testosterone-optimization.html',desc:'Build lean mass.'},{label:'Recovery Protocols',href:'/pages/wellness/recovery-protocols.html',desc:'Optimize your recovery.'}]},
  {file:'pages/weight-body/nutrition-guidance.html',title:'Nutrition Guidance',category:'weight-body',parentLabel:'Weight & Body',kicker:'Eat for Your Genes',heroP1:'Personalized nutrition plans built from your nutrigenomics data, not generic calorie counting. We identify how your body processes macronutrients, your genetic food sensitivities, optimal meal timing based on circadian genes, and which micronutrients you may be under-absorbing.',heroP2:'Your nutrition plan evolves as you do. Monthly check-ins with your clinician refine your diet based on how your body responds, your changing goals, and updated lab work. Every recommendation is backed by your genetic data.',stats:[{val:'42',label:'Nutrient Genes'},{val:'100%',label:'Personalized'},{val:'Monthly',label:'Refinements'},{val:'1:1',label:'Coaching'}],showImage:true,contentSections:[{heading:'Your Genetic Nutrition Advantage',copy:'Generic diets fail because they ignore your biology. We build your plan from your DNA.',bullets:['Optimal macronutrient ratios based on your metabolic genes','Meal timing aligned with your circadian rhythm genetics','Food sensitivity identification and elimination guidance','Micronutrient absorption gaps with targeted supplementation','Caffeine and alcohol metabolism insights','Inflammation-reducing dietary protocols matched to your genetic pathways']}],faqs:[{q:'Will I have to follow a strict diet?',a:'No. We work with your food preferences and lifestyle. The goal is optimization, not restriction. Your plan will feel sustainable because it is designed for your biology.'},{q:'How is this different from seeing a nutritionist?',a:'Traditional nutrition advice is based on population averages. Our guidance is based on your individual genetic data, making recommendations far more precise and effective.'}],related:[{label:'Nutrigenomics Panel',href:'/pages/genetic-testing/nutrigenomics-panel.html',desc:'The genetic foundation.'},{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Full weight management.'},{label:'Nutraceuticals',href:'/pages/weight-body/nutraceuticals.html',desc:'Gene-matched supplements.'},{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Direct nutrient delivery.'}]},
  {file:'pages/weight-body/nutraceuticals.html',title:'Nutraceuticals',category:'weight-body',parentLabel:'Weight & Body',kicker:'Supplements That Work',heroP1:'Most supplements are wasted money because they are not matched to your biology. At Blue Zone You, every nutraceutical recommendation is driven by your genetic profile. We identify which nutrients your body struggles to absorb and which compounds will have the greatest impact.',heroP2:'We use only pharmaceutical-grade supplements from verified manufacturers. Your custom stack is reviewed and adjusted quarterly based on updated lab work and your clinician\'s assessment of your progress.',stats:[{val:'Pharma',label:'Grade Quality'},{val:'Gene',label:'Matched Stack'},{val:'Quarterly',label:'Adjustments'},{val:'Lab',label:'Verified Results'}],contentSections:[{heading:'Why Gene-Matched Supplements Matter',copy:'Your genetics determine supplement efficacy.',bullets:['MTHFR variants affect folate metabolism and require specific supplementation forms','VDR gene variants influence vitamin D absorption and optimal dosing','COMT variants impact magnesium needs and stress-response nutrients','Omega-3 metabolism genes determine EPA/DHA dosing requirements','Antioxidant pathway genes guide CoQ10, glutathione, and vitamin C protocols','Detoxification genes inform liver support and heavy metal chelation needs']}],faqs:[{q:'Can I just take a multivitamin instead?',a:'Multivitamins are generic and often contain forms of nutrients your body cannot efficiently use. Gene-matched supplements deliver the right compounds in the right forms at the right doses.'},{q:'How do you select supplement brands?',a:'We use only pharmaceutical-grade supplements that have been third-party tested for purity, potency, and bioavailability. No proprietary blends, no fillers.'}],related:[{label:'Nutrigenomics Panel',href:'/pages/genetic-testing/nutrigenomics-panel.html',desc:'Identify your nutrient genes.'},{label:'Nutrition Guidance',href:'/pages/weight-body/nutrition-guidance.html',desc:'Complete nutrition coaching.'},{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Direct nutrient delivery.'},{label:'DNA Longevity Test',href:'/pages/genetic-testing/dna-longevity-test.html',desc:'Full genetic analysis.'}]},
  // ═══ WELLNESS ═══
  {file:'pages/wellness/iv-nutrient-therapy.html',title:'IV Nutrient Therapy',category:'wellness',parentLabel:'Wellness',kicker:'100% Bioavailability',heroP1:'Oral supplements lose 50-80% of their potency during digestion. IV nutrient therapy bypasses the gut entirely, delivering vitamins, minerals, amino acids, and antioxidants directly into your bloodstream at 100% bioavailability.',heroP2:'At Blue Zone You, our IV formulations are not one-size-fits-all cocktails. Your genetic nutrient absorption profile determines exactly which compounds go into your drip and at what concentrations.',stats:[{val:'100%',label:'Bioavailability'},{val:'45-60',label:'Min Per Session'},{val:'Gene',label:'Custom Formulas'},{val:'Immediate',label:'Impact'}],showImage:true,contentSections:[{heading:'Available IV Protocols',copy:'Each formula is customized based on your genetic and clinical needs.',cards:[{t:'Longevity Drip',d:'High-dose NAD+ precursors, glutathione, vitamin C, and mitochondrial support compounds for cellular energy and anti-aging.'},{t:'Performance Drip',d:'Amino acids, B-vitamins, magnesium, and zinc for athletic recovery, muscle repair, and sustained energy.'},{t:'Immune Drip',d:'High-dose vitamin C, zinc, selenium, and glutathione for immune system fortification during illness or high-stress periods.'},{t:'Detox Drip',d:'Glutathione, alpha-lipoic acid, and liver support compounds for heavy metal chelation and toxin clearance.'}]}],faqs:[{q:'How often should I get IV therapy?',a:'Frequency depends on your goals and genetic profile. Most clients benefit from weekly or bi-weekly sessions. Your clinician will recommend the optimal schedule.'},{q:'Is IV therapy safe?',a:'Yes. All infusions are administered by trained clinical staff in our Daytona Beach clinic. We use pharmaceutical-grade ingredients and sterile protocols.'}],related:[{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Advanced cellular energy.'},{label:'Peptide Therapy',href:'/pages/wellness/peptide-therapy.html',desc:'Targeted cellular repair.'},{label:'Nutraceuticals',href:'/pages/weight-body/nutraceuticals.html',desc:'Oral supplement support.'},{label:'Recovery Protocols',href:'/pages/wellness/recovery-protocols.html',desc:'Multi-modal recovery.'}]},
  {file:'pages/wellness/peptide-therapy.html',title:'Peptide Therapy',category:'wellness',parentLabel:'Wellness',kicker:'Targeted Cellular Repair',heroP1:'Peptides are short chains of amino acids that signal specific biological processes. From growth hormone optimization and tissue repair to immune modulation and cognitive enhancement, peptide therapy offers targeted interventions at the cellular level.',heroP2:'Our peptide protocols are selected based on your genetic response profile and clinical goals. Every protocol is clinician-managed with regular monitoring to ensure safety and efficacy.',stats:[{val:'10+',label:'Peptide Options'},{val:'Targeted',label:'Cell Signaling'},{val:'Gene',label:'Guided Selection'},{val:'1:1',label:'Clinical Oversight'}],contentSections:[{heading:'Available Peptide Protocols',copy:'Each peptide targets specific biological pathways.',cards:[{t:'BPC-157',d:'Tissue repair peptide that accelerates healing of tendons, ligaments, muscles, and gut lining. Ideal for athletes and post-surgical recovery.'},{t:'Growth Hormone Secretagogues',d:'Peptides like CJC-1295 and Ipamorelin that stimulate your body\'s natural growth hormone production for recovery, body composition, and anti-aging.'},{t:'Thymosin Alpha-1',d:'Immune-modulating peptide that enhances T-cell function and overall immune surveillance. Used for chronic infections and immune optimization.'},{t:'Cognitive Peptides',d:'Selank and Semax for cognitive enhancement, anxiety reduction, and neuroprotection. Gene-guided selection based on neurotransmitter profiles.'}]}],faqs:[{q:'Are peptides safe?',a:'When prescribed by a qualified clinician and sourced from licensed compounding pharmacies, peptides have an excellent safety profile. We monitor all patients regularly.'},{q:'How are peptides administered?',a:'Most peptides are administered via subcutaneous injection, which is a simple, nearly painless process. Some are available in oral or nasal spray forms.'}],related:[{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Cellular energy restoration.'},{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Direct nutrient delivery.'},{label:'Testosterone Optimization',href:'/pages/hormones/testosterone-optimization.html',desc:'Hormone peptide protocols.'},{label:'Recovery Protocols',href:'/pages/wellness/recovery-protocols.html',desc:'Multi-modal recovery.'}]},
  {file:'pages/wellness/nad-therapy.html',title:'NAD+ Therapy',category:'wellness',parentLabel:'Wellness',kicker:'Cellular Energy Restored',heroP1:'NAD+ is essential for cellular energy production and DNA repair. Levels decline significantly with age. By age 50, most people have lost 50% or more of their NAD+ reserves, contributing to fatigue, cognitive decline, and accelerated aging.',heroP2:'Our IV NAD+ infusions restore cellular function at the molecular level. Clients consistently report enhanced mental clarity, sustained energy, improved mood, and better sleep.',stats:[{val:'50%',label:'Lost by Age 50'},{val:'DNA',label:'Repair Support'},{val:'2-4hr',label:'Per Infusion'},{val:'Immediate',label:'Clarity & Energy'}],showImage:true,contentSections:[{heading:'The Science of NAD+',copy:'NAD+ is a coenzyme found in every living cell.',cards:[{t:'Energy Production',d:'NAD+ is required for mitochondrial function. Without adequate NAD+, your cells cannot produce ATP efficiently, leading to fatigue and metabolic dysfunction.'},{t:'DNA Repair',d:'NAD+ activates sirtuins and PARPs, the enzymes responsible for repairing damaged DNA. This is one of the primary mechanisms of biological aging.'},{t:'Neuroprotection',d:'NAD+ supports neurotransmitter production and protects neurons from oxidative damage. Clients report dramatic improvements in mental clarity and focus.'}]}],faqs:[{q:'How long does an NAD+ infusion take?',a:'Typically 2-4 hours depending on the dose. We provide a comfortable, private setting with amenities during your infusion.'},{q:'How often should I get NAD+ therapy?',a:'Most clients start with a loading protocol of 2-3 infusions over the first week, then transition to monthly maintenance.'}],related:[{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Pair with nutrient support.'},{label:'Epigenetic Age Testing',href:'/pages/genetic-testing/epigenetic-age-testing.html',desc:'Track aging reversal.'},{label:'Red Light Therapy',href:'/pages/wellness/red-light-therapy.html',desc:'Boost mitochondrial function.'},{label:'Peptide Therapy',href:'/pages/wellness/peptide-therapy.html',desc:'Growth hormone support.'}]},
  {file:'pages/wellness/red-light-therapy.html',title:'Red Light Therapy',category:'wellness',parentLabel:'Wellness',kicker:'Photobiomodulation',heroP1:'Red and near-infrared light therapy stimulates mitochondrial function at the cellular level. By activating cytochrome c oxidase, photobiomodulation increases ATP production, reduces oxidative stress, and decreases inflammation.',heroP2:'Our full-body red light beds deliver calibrated wavelengths (630-670nm red, 810-850nm near-infrared) for maximum cellular penetration. Sessions are 20 minutes, non-invasive, and deeply relaxing.',stats:[{val:'20min',label:'Per Session'},{val:'2',label:'Wavelength Bands'},{val:'ATP',label:'Production Boost'},{val:'Zero',label:'Downtime'}],contentSections:[{heading:'Benefits of Photobiomodulation',copy:'Published research supports red light therapy across multiple health domains.',bullets:['Increased mitochondrial ATP production and cellular energy','Reduced chronic inflammation and oxidative stress','Accelerated wound healing and tissue repair','Improved skin health, collagen production, and complexion','Enhanced muscle recovery and reduced soreness post-exercise','Improved joint mobility and reduced pain']}],faqs:[{q:'Is red light therapy safe?',a:'Yes. Red and near-infrared light are non-ionizing and have no known negative side effects. It is one of the safest therapeutic modalities available.'},{q:'How many sessions do I need?',a:'Most clients see benefits with 2-3 sessions per week. Your clinician will recommend a frequency based on your goals.'}],related:[{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Cellular energy pairing.'},{label:'Hyperbaric Oxygen',href:'/pages/wellness/hyperbaric-oxygen.html',desc:'Oxygenation therapy.'},{label:'Skin Rejuvenation',href:'/pages/aesthetics/skin-rejuvenation.html',desc:'Collagen and skin health.'},{label:'Recovery Protocols',href:'/pages/wellness/recovery-protocols.html',desc:'Multi-modal recovery.'}]},
  {file:'pages/wellness/hyperbaric-oxygen.html',title:'Hyperbaric Oxygen Therapy',category:'wellness',parentLabel:'Wellness',kicker:'Pressurized Healing',heroP1:'HBOT places you in a pressurized chamber breathing pure oxygen at 1.5-2.0 atmospheres. This saturates your tissues with up to 10x normal oxygen levels, triggering stem cell mobilization, angiogenesis, and dramatic inflammation reduction.',heroP2:'Published research demonstrates HBOT effectiveness for wound healing, cognitive function, chronic inflammation, and even telomere lengthening. We integrate HBOT into your broader longevity protocol for compounding benefits.',stats:[{val:'10x',label:'Oxygen Saturation'},{val:'60min',label:'Per Session'},{val:'Stem',label:'Cell Mobilization'},{val:'Research',label:'Backed'}],contentSections:[{heading:'Clinical Applications',copy:'HBOT has demonstrated benefits across a wide range of conditions.',bullets:['Accelerated surgical and wound healing','Cognitive enhancement and neuroprotection','Chronic inflammation reduction','Stem cell production and mobilization','Telomere lengthening (published research)','Athletic recovery and performance optimization']}],faqs:[{q:'Is HBOT comfortable?',a:'Yes. You relax in a spacious chamber for 60 minutes. Many clients read, listen to music, or nap during sessions.'},{q:'How many sessions are recommended?',a:'Protocols typically range from 10-40 sessions depending on your goals. Your clinician designs the optimal schedule.'}],related:[{label:'Red Light Therapy',href:'/pages/wellness/red-light-therapy.html',desc:'Pair for cellular benefits.'},{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Cellular energy support.'},{label:'Recovery Protocols',href:'/pages/wellness/recovery-protocols.html',desc:'Multi-modal packages.'},{label:'Epigenetic Age Testing',href:'/pages/genetic-testing/epigenetic-age-testing.html',desc:'Track aging reversal.'}]},
  {file:'pages/wellness/recovery-protocols.html',title:'Recovery Protocols',category:'wellness',parentLabel:'Wellness',kicker:'Multi-Modal Recovery',heroP1:'Our Recovery Protocols combine multiple therapies into comprehensive packages for maximum impact. Whether you are an athlete, recovering from surgery, managing chronic fatigue, or optimizing repair systems, we build a multi-modal approach tailored to your goals.',heroP2:'Each protocol is designed by your clinician using your genetic data and current health status. A typical package combines IV therapy, peptides, red light, and HBOT in a sequenced program that amplifies each modality.',stats:[{val:'2-4',label:'Modalities Combined'},{val:'Gene',label:'Informed Design'},{val:'4-8wk',label:'Program Length'},{val:'Full',label:'Clinical Support'}],showImage:true,contentSections:[{heading:'Who Benefits from Recovery Protocols',copy:'Multi-modal recovery is designed for high-demand situations.',cards:[{t:'Athletes',d:'Pre-competition preparation and post-event recovery. Accelerate tissue repair, reduce inflammation, and restore energy for faster return to training.'},{t:'Post-Surgical',d:'Speed healing, reduce scarring, and minimize downtime after surgical procedures. Our protocols support every phase of recovery.'},{t:'Chronic Fatigue',d:'Multi-modal approach to restoring cellular energy, addressing mitochondrial dysfunction, and rebuilding immune resilience.'},{t:'Anti-Aging',d:'Comprehensive recovery stacks that target the biological mechanisms of aging from multiple angles simultaneously.'}]}],faqs:[{q:'How do you design my protocol?',a:'Your clinician reviews your genetic data, health history, current symptoms, and goals to select the optimal combination of modalities and sequencing.'},{q:'Can I do individual therapies instead?',a:'Absolutely. Recovery Protocols are designed for clients who want maximum impact from combined therapies, but every modality is available individually.'}],related:[{label:'IV Nutrient Therapy',href:'/pages/wellness/iv-nutrient-therapy.html',desc:'Foundation of most protocols.'},{label:'Peptide Therapy',href:'/pages/wellness/peptide-therapy.html',desc:'Targeted repair.'},{label:'Red Light Therapy',href:'/pages/wellness/red-light-therapy.html',desc:'Cellular stimulation.'},{label:'Hyperbaric Oxygen',href:'/pages/wellness/hyperbaric-oxygen.html',desc:'Pressurized healing.'}]},
  // ═══ AESTHETICS ═══
  {file:'pages/aesthetics/skin-rejuvenation.html',title:'Skin Rejuvenation',category:'aesthetics',parentLabel:'Aesthetics',kicker:'Genetic Skin Science',heroP1:'Your skin aging is genetically programmed. Collagen degradation, elastin integrity, UV damage susceptibility, and inflammatory response patterns are written in your DNA. We analyze your genetic skin profile before recommending any treatment.',heroP2:'Treatments include microneedling with PRP, medical-grade facials, LED therapy, and targeted topical protocols. When we know your collagen genes and cellular turnover rate, we select the exact combination for visible transformation.',stats:[{val:'18',label:'Skin Genes'},{val:'Gene',label:'Matched Treatments'},{val:'4-6wk',label:'Visible Results'},{val:'1:1',label:'Clinician Guided'}],showImage:true,contentSections:[{heading:'Available Treatments',copy:'Each treatment is selected based on your genetic skin profile.',cards:[{t:'Microneedling with PRP',d:'Collagen induction therapy using your own platelet-rich plasma. Gene testing predicts collagen production response to optimize treatment frequency and depth.'},{t:'Medical-Grade Facials',d:'Clinical facial treatments using active ingredients matched to your skin genetics. Far beyond what over-the-counter products can achieve.'},{t:'LED Phototherapy',d:'Targeted wavelengths that stimulate collagen production, reduce inflammation, and accelerate cellular turnover based on your skin\'s genetic response profile.'}]}],faqs:[{q:'How long until I see results?',a:'Most clients see visible improvement within 4-6 weeks. Optimal results develop over 3-6 months as collagen remodeling completes.'},{q:'Do I need genetic testing first?',a:'We strongly recommend it. Knowing your collagen and elastin genes allows us to select treatments that your skin will actually respond to, avoiding wasted time and money.'}],related:[{label:'Anti-Aging Treatments',href:'/pages/aesthetics/anti-aging-treatments.html',desc:'Comprehensive anti-aging.'},{label:'Red Light Therapy',href:'/pages/wellness/red-light-therapy.html',desc:'Collagen stimulation.'},{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Cellular rejuvenation.'},{label:'Hair Restoration',href:'/pages/aesthetics/hair-restoration.html',desc:'Complete aesthetic care.'}]},
  {file:'pages/aesthetics/hair-restoration.html',title:'Hair Restoration',category:'aesthetics',parentLabel:'Aesthetics',kicker:'Science-Backed Regrowth',heroP1:'Hair loss affects millions, but the underlying genetic causes vary dramatically. Our program begins with genetic testing to identify your specific hair loss risk factors, DHT sensitivity, follicle cycling genes, and response predictors.',heroP2:'We offer PRP scalp therapy, low-level laser therapy, targeted nutraceuticals, and peptide protocols. By matching treatments to your genetic profile, we dramatically increase the probability of meaningful results.',stats:[{val:'22',label:'Hair Genes'},{val:'PRP',label:'& Laser Available'},{val:'3-6mo',label:'Growth Timeline'},{val:'Gene',label:'Guided Protocol'}],contentSections:[{heading:'Our Hair Restoration Approach',copy:'Genetically-informed treatment selection for maximum efficacy.',cards:[{t:'PRP Scalp Therapy',d:'Platelet-rich plasma injected into the scalp stimulates dormant follicles and increases blood supply. Gene testing predicts growth factor response.'},{t:'Low-Level Laser Therapy',d:'FDA-cleared laser devices stimulate cellular metabolism in hair follicles. Your genetic profile helps determine optimal wavelength and frequency.'},{t:'Peptide & Nutraceutical Support',d:'Targeted peptides and pharmaceutical-grade supplements that address the specific genetic pathways driving your hair loss.'}]}],faqs:[{q:'Can genetic testing predict which treatments will work for me?',a:'Yes. Your genetic profile reveals DHT sensitivity, follicle cycling patterns, and growth factor response, allowing us to select the most effective approach.'},{q:'How long before I see new growth?',a:'Most clients begin seeing new growth within 3-6 months. Full results typically develop over 9-12 months with consistent treatment.'}],related:[{label:'Skin Rejuvenation',href:'/pages/aesthetics/skin-rejuvenation.html',desc:'Complete skin care.'},{label:'Peptide Therapy',href:'/pages/wellness/peptide-therapy.html',desc:'Growth factor peptides.'},{label:'Nutraceuticals',href:'/pages/weight-body/nutraceuticals.html',desc:'Hair growth supplements.'},{label:'Anti-Aging Treatments',href:'/pages/aesthetics/anti-aging-treatments.html',desc:'Comprehensive anti-aging.'}]},
  {file:'pages/aesthetics/body-contouring.html',title:'Body Contouring',category:'aesthetics',parentLabel:'Aesthetics',kicker:'Sculpt Without Surgery',heroP1:'Non-invasive body contouring targets stubborn fat deposits that resist diet and exercise. We combine advanced sculpting technologies with your metabolic genetic data to maximize results and ensure long-term maintenance.',heroP2:'Your genetic profile reveals how your body stores fat, your response to different treatment modalities, and the metabolic pathways that will help you maintain results.',stats:[{val:'Non',label:'Invasive'},{val:'Gene',label:'Guided Selection'},{val:'2-4',label:'Sessions Typical'},{val:'Zero',label:'Downtime'}],contentSections:[{heading:'The Genetic Advantage',copy:'Your DNA determines the most effective contouring approach.',bullets:['Genetic fat storage pattern analysis to target the right areas','Treatment modality matching based on your biological response profile','Metabolic pathway optimization to maintain results long-term','Integration with weight management and nutrition protocols','Non-invasive options with zero downtime and minimal discomfort','Progress tracking with body composition scanning']}],faqs:[{q:'How many sessions do I need?',a:'Most clients achieve desired results in 2-4 sessions, spaced 4-6 weeks apart. Your clinician will design the optimal treatment plan based on your goals and genetics.'},{q:'Is body contouring permanent?',a:'Results can be long-lasting when combined with proper nutrition and metabolic optimization guided by your genetic data.'}],related:[{label:'Metabolic Weight Loss',href:'/pages/weight-body/metabolic-weight-loss.html',desc:'Comprehensive weight management.'},{label:'Body Composition',href:'/pages/weight-body/body-composition.html',desc:'Track your transformation.'},{label:'Skin Rejuvenation',href:'/pages/aesthetics/skin-rejuvenation.html',desc:'Skin tightening support.'},{label:'Nutrition Guidance',href:'/pages/weight-body/nutrition-guidance.html',desc:'Maintain your results.'}]},
  {file:'pages/aesthetics/anti-aging-treatments.html',title:'Anti-Aging Treatments',category:'aesthetics',parentLabel:'Aesthetics',kicker:'Reverse Visible Aging',heroP1:'Comprehensive anti-aging programs that combine topical treatments, advanced therapies, and internal protocols to address aging from every angle. Your genetic aging profile determines which combination will turn back the clock most effectively.',heroP2:'Our packages may include microneedling, PRP therapy, red light photobiomodulation, collagen-stimulating peptides, telomere-support nutraceuticals, and NAD+ infusions. Each element is selected based on your DNA.',stats:[{val:'Multi',label:'Modal Approach'},{val:'Gene',label:'Aging Profile'},{val:'Inside',label:'& Out Treatment'},{val:'Tracked',label:'Results Over Time'}],showImage:true,contentSections:[{heading:'Inside-Out Anti-Aging',copy:'True anti-aging works at every level, from cellular function to visible appearance.',cards:[{t:'External Treatments',d:'Microneedling, PRP, LED phototherapy, and medical-grade topicals selected for your genetic collagen and elastin profile.'},{t:'Internal Protocols',d:'NAD+ infusions, peptide therapy, and targeted nutraceuticals that address aging at the cellular and molecular level.'},{t:'Lifestyle Optimization',d:'Nutrition, sleep, exercise, and stress management protocols informed by your genetic data for compounding anti-aging benefits.'},{t:'Progress Tracking',d:'Epigenetic age testing and body composition scanning to measure biological age reversal and treatment efficacy over time.'}]}],faqs:[{q:'At what age should I start anti-aging treatments?',a:'Prevention is always easier than reversal. Many clients start in their 30s-40s, but meaningful results are achievable at any age.'},{q:'How do you measure anti-aging results?',a:'We use epigenetic age testing, body composition scanning, and clinical biomarker tracking to objectively measure biological age reversal.'}],related:[{label:'Skin Rejuvenation',href:'/pages/aesthetics/skin-rejuvenation.html',desc:'Targeted skin treatments.'},{label:'NAD+ Therapy',href:'/pages/wellness/nad-therapy.html',desc:'Cellular age reversal.'},{label:'Epigenetic Age Testing',href:'/pages/genetic-testing/epigenetic-age-testing.html',desc:'Measure your true age.'},{label:'Recovery Protocols',href:'/pages/wellness/recovery-protocols.html',desc:'Multi-modal rejuvenation.'}]},
];

// ═══ 5 LAYOUT TYPES ═══
const LAYOUTS = ['split-image', 'centered-stats', 'overlay-hero', 'timeline', 'magazine'];

// ═══ PAGE TEMPLATE ═══
function buildPage(svc) {
  const idx = services.indexOf(svc);
  const layout = LAYOUTS[idx % 5];
  const bc = `<a href="/index.html" class="hover:text-brand-gold transition-colors">Home</a><span>/</span><a href="/pages/${svc.category}.html" class="hover:text-brand-gold transition-colors">${svc.parentLabel}</a><span>/</span><span class="text-white/70">${svc.title}</span>`;

  const statColors = ['brand-gold', 'brand-cyan', 'brand-teal', 'brand-gold'];
  const statsHtml = (svc.stats||[]).map((s,i)=>`<div class="rounded-2xl p-6 border border-${statColors[i%4]}/15 hover-shimmer" style="background:rgba(27,42,74,0.3);"><span class="font-heading italic text-${statColors[i%4]} text-5xl leading-none">${s.val}</span><p class="text-xs text-white/50 font-body mt-2">${s.label}</p></div>`).join('\n            ');

  // Alternate images
  const heroImg = idx % 2 === 0 ? '/img/clinic-lobby.jpg' : '/img/clinic-consult.jpg';
  const ctaImg = idx % 2 === 0 ? '/img/clinic-consult.jpg' : '/img/clinic-lobby.jpg';

  // Always show a full-width image banner after hero
  const imageSection = `
  <!-- Clinic Image Banner -->
  <section class="section-block bg-brand-dark border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-12">
      <div class="rounded-3xl overflow-hidden">
        <img src="${heroImg}" alt="Blue Zone You clinic in Daytona Beach" class="w-full h-56 md:h-80 lg:h-96 object-cover" loading="lazy" />
      </div>
    </div>
  </section>`;

  let contentHtml = '';
  (svc.contentSections||[]).forEach(sec => {
    if (sec.cards) {
      const icons = [
        '<path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" stroke-linecap="round" stroke-linejoin="round"/>',
      ];
      const cards = sec.cards.map((c,ci)=>{
        const accent = ci % 3 === 0 ? 'brand-gold' : ci % 3 === 1 ? 'brand-cyan' : 'brand-teal';
        const icon = icons[ci % icons.length];
        return `
          <div class="rounded-3xl p-7 border border-white/5 hover-lift hover-shimmer" style="background:linear-gradient(135deg, rgba(27,42,74,0.4) 0%, rgba(10,10,10,0.8) 100%);">
            <div class="w-12 h-12 rounded-xl bg-${accent}/10 border border-${accent}/20 flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-${accent}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">${icon}</svg>
            </div>
            <h3 class="font-heading text-white text-2xl tracking-[-0.5px] mb-3">${c.t}</h3>
            <p class="text-sm text-white/60 font-body font-light leading-relaxed">${c.d}</p>
          </div>`;
      }).join('');
      contentHtml += `
  <section class="section-block py-20 lg:py-28" style="background:linear-gradient(180deg, #0A0A0A 0%, #0F1B33 50%, #0A0A0A 100%);">
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 relative">
      <h2 class="font-heading text-white text-4xl md:text-5xl tracking-[-2px] mb-4">${sec.heading}</h2>
      <p class="text-base text-white/60 font-body font-light max-w-2xl mb-12">${sec.copy}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}
      </div>
    </div>
  </section>`;
    }
    if (sec.bullets) {
      const lis = sec.bullets.map(b=>`
          <li class="flex items-start gap-3 text-sm text-white/70 font-body font-light"><svg class="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>${b}</li>`).join('');
      contentHtml += `
  <section class="section-block py-20 lg:py-28 bg-brand-dark relative">
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="font-heading text-white text-4xl md:text-5xl tracking-[-2px] mb-4">${sec.heading}</h2>
          <p class="text-base text-white/60 font-body font-light max-w-2xl mb-8">${sec.copy}</p>
        </div>
        <div class="rounded-3xl p-8 border border-brand-navy-light/30" style="background:linear-gradient(135deg, rgba(27,42,74,0.3) 0%, rgba(10,10,10,0.6) 100%);">
          <ul class="space-y-4">${lis}
          </ul>
        </div>
      </div>
    </div>
  </section>`;
    }
  });

  let faqHtml = '';
  if (svc.faqs && svc.faqs.length) {
    const items = svc.faqs.map(f=>`
        <details class="group border-b border-white/5">
          <summary class="flex items-center justify-between py-6 px-2 cursor-pointer list-none">
            <span class="text-base text-white font-body font-medium pr-4">${f.q}</span>
            <svg class="w-5 h-5 text-white/40 flex-shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </summary>
          <p class="text-sm text-white/60 font-body font-light leading-relaxed pb-5">${f.a}</p>
        </details>`).join('');
    faqHtml = `
  <section class="section-block py-20 lg:py-28 relative" style="background:linear-gradient(180deg, #0A0A0A 0%, #0F1B33 100%);">
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
    <div class="max-w-5xl mx-auto px-6 md:px-16 lg:px-20">
      <p class="text-sm font-body text-brand-teal mb-3 tracking-widest uppercase">Questions</p>
      <h2 class="font-heading text-white text-4xl md:text-5xl tracking-[-2px] mb-12">Frequently Asked Questions</h2>
      <div class="space-y-0 rounded-3xl border border-white/5 overflow-hidden p-6 md:p-10" style="background:rgba(27,42,74,0.2);">${items}
      </div>
    </div>
  </section>`;
  }

  let relatedHtml = '';
  if (svc.related && svc.related.length) {
    const cards = svc.related.map(r=>`
        <a href="${r.href}" class="liquid-glass rounded-3xl p-6 group hover:bg-white/[0.04] transition-colors cursor-pointer">
          <h3 class="font-heading text-white text-xl mb-2 group-hover:text-brand-gold transition-colors">${r.label}</h3>
          <p class="text-xs text-white/50 font-body font-light leading-relaxed">${r.desc}</p>
          <span class="inline-flex items-center gap-1 text-xs text-brand-gold font-body mt-3">Learn More <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>`).join('');
    relatedHtml = `
  <section class="section-block py-20 lg:py-28 relative bg-brand-dark">
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
      <p class="text-sm font-body text-brand-cyan mb-3 tracking-widest uppercase">Explore More</p>
      <h2 class="font-heading text-white text-4xl md:text-5xl tracking-[-2px] mb-4">Related Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">${cards}
      </div>
    </div>
  </section>`;
  }

  const meta = svc.metaDesc || `${svc.title} at Blue Zone You. Genetically-guided longevity medicine. Book your free telehealth consultation. Daytona Beach, FL.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${svc.title} — Blue Zone You | Daytona Beach Longevity Clinic</title>
  <meta name="description" content="${meta}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwindcss.config = {
      theme: { extend: {
        fontFamily: { heading: ["'DM Serif Display'","serif"], body: ["'Inter'","sans-serif"] },
        colors: { brand: { gold: "#C5A33B", "gold-light": "#D4B84E", navy: "#1B2A4A", "navy-deep": "#0F1B33", "navy-light": "#253A5C", cream: "#F5F0E8", "cream-dark": "#E8E0D0", cyan: "#06b6d4", teal: "#14b8a6", dark: "#0A0A0A" } }
      }}
    };
  </script>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style="background:rgba(10,10,10,0.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.06);"></nav>

  ${layout === 'split-image' ? `
  <!-- LAYOUT A: Split Image Hero -->
  <section class="relative min-h-[80vh] flex items-end pt-32 pb-16 px-6 md:px-16 lg:px-20" style="background:linear-gradient(135deg, #0F1B33 0%, #1B2A4A 60%, #0A0A0A 100%);">
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
    <div class="max-w-7xl mx-auto w-full">
      <nav class="flex items-center gap-2 text-xs font-body text-white/40 mb-6">${bc}</nav>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-sm font-body text-brand-gold mb-3 tracking-widest uppercase">${svc.kicker}</p>
          <h1 class="font-heading text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.85] tracking-[-3px] mb-6"><span class="text-brand-gold italic">${svc.title}</span></h1>
          <p class="text-base text-white/70 font-body font-light leading-relaxed mb-4">${svc.heroP1}</p>
          <p class="text-base text-white/70 font-body font-light leading-relaxed mb-8">${svc.heroP2}</p>
          <div class="flex flex-wrap gap-4">
            <a href="/pages/book.html" target="_blank" class="bg-brand-gold text-white rounded-xl px-7 py-3.5 text-sm font-semibold font-body flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20">Book Free Telehealth Consult <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="tel:+13867323003" class="border border-brand-gold/30 text-brand-gold rounded-xl px-7 py-3.5 text-sm font-medium font-body flex items-center gap-2 hover:bg-brand-gold/10 transition-colors">(386) 732-3003</a>
          </div>
        </div>
        <div class="rounded-3xl overflow-hidden border border-brand-gold/10 shadow-2xl">
          <img src="${heroImg}" alt="${svc.title} at Blue Zone You" class="w-full h-72 lg:h-96 object-cover" loading="lazy" />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">${statsHtml}</div>
    </div>
  </section>`

  : layout === 'centered-stats' ? `
  <!-- LAYOUT B: Centered Hero + Horizontal Stats -->
  <section class="relative min-h-[70vh] flex flex-col justify-end pt-40 pb-0" style="background:linear-gradient(180deg, #0F1B33 0%, #0A0A0A 100%);">
    <div class="max-w-4xl mx-auto w-full text-center px-6 pb-16">
      <nav class="flex items-center justify-center gap-2 text-xs font-body text-white/40 mb-6">${bc}</nav>
      <p class="text-sm font-body text-brand-gold mb-3 tracking-widest uppercase">${svc.kicker}</p>
      <h1 class="font-heading text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.85] tracking-[-3px] mb-6"><span class="text-brand-gold italic">${svc.title}</span></h1>
      <p class="text-base text-white/70 font-body font-light leading-relaxed mb-4 max-w-2xl mx-auto">${svc.heroP1}</p>
      <p class="text-base text-white/60 font-body font-light leading-relaxed mb-8 max-w-2xl mx-auto">${svc.heroP2}</p>
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/pages/book.html" target="_blank" class="bg-brand-gold text-white rounded-xl px-7 py-3.5 text-sm font-semibold font-body flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20">Book Free Telehealth Consult <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="tel:+13867323003" class="border border-brand-gold/30 text-brand-gold rounded-xl px-7 py-3.5 text-sm font-medium font-body flex items-center gap-2 hover:bg-brand-gold/10 transition-colors">(386) 732-3003</a>
      </div>
    </div>
    <div class="w-full border-t border-white/5" style="background:rgba(27,42,74,0.3);">
      <div class="max-w-7xl mx-auto px-6 md:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">${statsHtml}</div>
    </div>
  </section>`

  : layout === 'overlay-hero' ? `
  <!-- LAYOUT C: Full-Width Image with Overlay -->
  <section class="relative min-h-[80vh] flex items-end">
    <img src="${heroImg}" alt="${svc.title}" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div class="absolute inset-0" style="background:linear-gradient(180deg, rgba(15,27,51,0.4) 0%, rgba(10,10,10,0.95) 100%);"></div>
    <div class="relative z-10 w-full px-6 md:px-16 lg:px-20 pb-16 pt-40">
      <div class="max-w-7xl mx-auto">
        <nav class="flex items-center gap-2 text-xs font-body text-white/40 mb-6">${bc}</nav>
        <p class="text-sm font-body text-brand-gold mb-3 tracking-widest uppercase">${svc.kicker}</p>
        <h1 class="font-heading text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.85] tracking-[-3px] mb-6"><span class="text-brand-gold italic">${svc.title}</span></h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p class="text-base text-white/80 font-body font-light leading-relaxed mb-4">${svc.heroP1}</p>
            <p class="text-base text-white/70 font-body font-light leading-relaxed mb-8">${svc.heroP2}</p>
            <div class="flex flex-wrap gap-4">
              <a href="/pages/book.html" target="_blank" class="bg-brand-gold text-white rounded-xl px-7 py-3.5 text-sm font-semibold font-body flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20">Book Free Telehealth Consult <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              <a href="tel:+13867323003" class="border border-brand-gold/30 text-brand-gold rounded-xl px-7 py-3.5 text-sm font-medium font-body flex items-center gap-2 hover:bg-brand-gold/10 transition-colors">(386) 732-3003</a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">${statsHtml}</div>
        </div>
      </div>
    </div>
  </section>`

  : layout === 'timeline' ? `
  <!-- LAYOUT D: Vertical Timeline Hero -->
  <section class="relative pt-40 pb-16 px-6 md:px-16 lg:px-20" style="background:linear-gradient(180deg, #1B2A4A 0%, #0F1B33 40%, #0A0A0A 100%);">
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-teal/20 via-brand-gold/40 to-brand-cyan/20"></div>
    <div class="max-w-7xl mx-auto">
      <nav class="flex items-center gap-2 text-xs font-body text-white/40 mb-6">${bc}</nav>
      <div class="max-w-2xl mb-16">
        <p class="text-sm font-body text-brand-gold mb-3 tracking-widest uppercase">${svc.kicker}</p>
        <h1 class="font-heading text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.85] tracking-[-3px] mb-6"><span class="text-brand-gold italic">${svc.title}</span></h1>
        <p class="text-base text-white/70 font-body font-light leading-relaxed mb-4">${svc.heroP1}</p>
        <p class="text-base text-white/60 font-body font-light leading-relaxed mb-8">${svc.heroP2}</p>
        <div class="flex flex-wrap gap-4">
          <a href="/pages/book.html" target="_blank" class="bg-brand-gold text-white rounded-xl px-7 py-3.5 text-sm font-semibold font-body flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20">Book Free Telehealth Consult <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
      <!-- Stats as timeline steps -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-0">
        ${(svc.stats||[]).map((s,i)=>`<div class="flex items-start gap-4 p-6 ${i<3?'border-r border-white/5':''}">
          <span class="font-heading italic text-brand-gold/30 text-5xl leading-none">${String(i+1).padStart(2,'0')}</span>
          <div><span class="font-heading italic text-${statColors[i%4]} text-3xl leading-none">${s.val}</span><p class="text-xs text-white/50 font-body mt-1">${s.label}</p></div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  : `
  <!-- LAYOUT E: Magazine / Alternating Blocks -->
  <section class="relative pt-40 pb-16" style="background:linear-gradient(180deg, #0A0A0A 0%, #0F1B33 50%, #0A0A0A 100%);">
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
      <nav class="flex items-center gap-2 text-xs font-body text-white/40 mb-6">${bc}</nav>
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div class="lg:col-span-3">
          <p class="text-sm font-body text-brand-gold mb-3 tracking-widest uppercase">${svc.kicker}</p>
          <h1 class="font-heading text-white text-5xl md:text-6xl lg:text-[5rem] leading-[0.85] tracking-[-3px] mb-6"><span class="text-brand-gold italic">${svc.title}</span></h1>
          <p class="text-lg text-white/70 font-body font-light leading-relaxed mb-4">${svc.heroP1}</p>
          <p class="text-base text-white/60 font-body font-light leading-relaxed mb-8">${svc.heroP2}</p>
          <div class="flex flex-wrap gap-4">
            <a href="/pages/book.html" target="_blank" class="bg-brand-gold text-white rounded-xl px-7 py-3.5 text-sm font-semibold font-body flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20">Book Free Telehealth Consult <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="tel:+13867323003" class="border border-brand-gold/30 text-brand-gold rounded-xl px-7 py-3.5 text-sm font-medium font-body flex items-center gap-2 hover:bg-brand-gold/10 transition-colors">(386) 732-3003</a>
          </div>
        </div>
        <div class="lg:col-span-2 space-y-4">
          <div class="rounded-3xl overflow-hidden border border-brand-gold/10 mb-4">
            <img src="${heroImg}" alt="${svc.title}" class="w-full h-48 object-cover" loading="lazy" />
          </div>
          ${statsHtml}
        </div>
      </div>
    </div>
  </section>`
  }
${imageSection}
${contentHtml}
${faqHtml}
${relatedHtml}

  <!-- TELEHEALTH CTA -->
  <section class="section-block relative py-24 overflow-hidden" style="background:linear-gradient(135deg, #1B2A4A 0%, #0F1B33 100%);">
    <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 80% 50%, rgba(197,163,59,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.05) 0%, transparent 40%);"></div>
    <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-cyan/20 via-brand-gold/40 to-brand-teal/20"></div>
    <div class="relative z-10 max-w-5xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="rounded-3xl overflow-hidden border border-brand-gold/10 shadow-2xl">
          <img src="${ctaImg}" alt="Blue Zone You clinic" class="w-full h-72 object-cover" loading="lazy" />
        </div>
        <div class="text-center md:text-left">
          <p class="text-sm font-body text-brand-cyan mb-3 tracking-widest uppercase">Get Started Today</p>
          <h2 class="font-heading text-white text-3xl md:text-4xl tracking-[-1px] mb-4">Your Free Telehealth Consultation</h2>
          <p class="text-sm text-white/60 font-body font-light mb-6 leading-relaxed">Speak with a longevity clinician from the comfort of your home. We will discuss your goals, answer your questions, and determine the best path forward for your unique biology.</p>
          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="/pages/book.html" target="_blank" class="bg-brand-gold text-white rounded-xl px-7 py-3.5 text-sm font-semibold font-body flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20">
              Book Free Consult
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a href="tel:+13867323003" class="border border-brand-gold/30 text-brand-gold rounded-xl px-7 py-3.5 text-sm font-medium font-body flex items-center gap-2 hover:bg-brand-gold/10 transition-colors">(386) 732-3003</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="site-footer" class="section-block bg-brand-dark border-t border-white/5"></footer>
  <div id="sticky-cta" class="fixed bottom-0 left-0 right-0 z-40 translate-y-full transition-transform duration-300" style="background:rgba(10,10,10,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.06);"></div>

  <script src="/shared.js"></script>
  <script>initShared('${svc.category}');</script>
  <script src="/animations.js"></script>
</body>
</html>`;
}

// Generate
let count = 0;
services.forEach(svc => {
  const fp = path.join(__dirname, svc.file);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, buildPage(svc));
  count++;
  console.log(`  [${count}/${services.length}] ${svc.file}`);
});
console.log(`\nDone. Generated ${count} pages. No pricing. Telehealth consult CTAs. Clinic images integrated.`);
