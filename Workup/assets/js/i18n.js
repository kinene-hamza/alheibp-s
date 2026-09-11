/* =====================================================
   Alheib Primary School - Arabic / English i18n
   Toggle button (#lang-toggle) in the header switches the
   entire site between English (LTR) and Arabic (RTL).
   ===================================================== */
(function () {
  "use strict";

  var LANG_KEY = "alheib-lang";

  /* English -> Arabic pairs (bidirectional, toggle-safe) */
  var PAIRS = [
    /* Brand / nav / footer (shared) */
    ["ALHEIB PRIMARY SCHOOL", "مدرسة الهيب الابتدائية"],
    ["Kira Kitikifumba · Uganda", "كيرا كيتيكيفومبا · أوغندا"],
    ["Home", "الرئيسية"],
    ["About", "من نحن"],
    ["Programs", "البرامج"],
    ["Admissions", "القبول والتسجيل"],
    ["Gallery", "معرض الصور"],
    ["News", "الأخبار"],
    ["Contact", "اتصل بنا"],
    ["About ", "من نحن"],
    ["Quick Links", "روابط سريعة"],
    ["About Us", "من نحن"],
    ["- Programs -", "- البرامج -"],
    ["- Contact -", "- اتصل بنا -"],
    ["Latest News from Alheib Primary School.", "أحدث أخبار مدرسة الهيب الابتدائية."],
    ["Why families choose Alheib.", "لماذا تختار الأسر مدرسة الهيب."],
    ["Contact ", "اتصل بنا"],
    ["About ", "من نحن"],
    ["Alheib Primary School is a government-sponsored school and orphanage centre in Kira Kitikifumba, Uganda, established in 2002 with the support of IICO Kuwait.", "مدرسة الهيب الابتدائية مدرسة حكومية ومركز للأيتام في كيرا كيتيكيفومبا، أوغندا، تأسست عام 2002 بدعم من مؤسسة الإغاثة الإسلامية (IICO) بدولة الكويت."],
    ["\"Building character through knowledge.\"", "«بناء الشخصية من خلال المعرفة.»"],
    ["P.O. Box 2891, Kampala - Uganda (Kira Kitikifumba)", "ص.ب 2891، كمبالا - أوغندا (كيرا كيتيكيفومبا)"],
    ["Office Hours: Mon - Fri, 8AM - 5PM", "ساعات العمل: الاثنين - الجمعة، 8 صباحًا - 5 مساءً"],
    ["Office Hours: Mon - Fri, 8AM -", "ساعات العمل: الاثنين - الجمعة، 8 صباحًا -"],
    ["5PM", "5 مساءً"],
    ["Alheib Primary School. All rights reserved.", "مدرسة الهيب الابتدائية. جميع الحقوق محفوظة."],
    ["info@sised.sc.ug", "info@sised.sc.ug"],
    ["Find us on Facebook", "تجدونا على فيسبوك"],
    ["Find us on TikTok", "تجدونا على تيك توك"],
    ["Chat with us on WhatsApp", "تواصلوا معنا عبر واتساب"],
    ["Follow on Facebook", "تابعنا على فيسبوك"],
    ["Follow on TikTok", "تابعنا على تيك توك"],
    ["Go to top", "العودة إلى الأعلى"],
    ["Toggle navigation", "تبديل القائمة"],
    ["Search", "بحث"],
    ["Enter Keyword...", "أدخل كلمة البحث..."],
    ["Your Name", "اسمك"],
    ["Your Email", "بريدك الإلكتروني"],
    ["Write Message", "اكتب رسالتك"],
    ["Alheib Primary School badge", "شارة مدرسة الهيب الابتدائية"],
    ["parent testimonial", "شهادة ولي أمر"],
    ["admin", "إدارة المدرسة"],
    ["school news", "أخبار المدرسة"],
    ["sports news", "أخبار الرياضة"],
    ["nav-divider", "nav-divider"],

    /* Index */
    ["WELCOME TO ALHEIB PRIMARY SCHOOL", "أهلًا بكم في مدرسة الهيب الابتدائية"],
    ["A home of balanced education, Islamic values and community care, proudly serving the children of Kitikifumba since 2002.", "بيت للتربية المتوازنة والقيم الإسلامية والرعاية المجتمعية، تخدم أطفال كيتيكيفومبا بكل فخر منذ عام 2002."],
    ["— our promise to every learner.", "— وعدنا لكل متعلم."],
    ["Payments", "الكفالات والرعاية"],
    ["Being An orphanage centre affiliated to International Islamic Charitable Organization (IICO) based in state of Kuwait - Uganda office.", "كونها مركزًا للأيتام تابعًا لمنظمة الإغاثة الإسلامية العالمية (IICO) ومقرها دولة الكويت — مكتب أوغندا."],
    ["Students pay zero fee - Thanking the sponsorships received!", "يدفع الطلاب صفر رسوم — شكرًا للكفالات المقدمة!"],
    ["Education", "التعليم"],
    ["The School believes that while what students know is vital, the true and realistic measure of a student's education is the ability to analyse what they do not know.", "تؤمن المدرسة بأنه رغم أهمية ما يعرفه الطلاب، فإن المقياس الحقيقي والواقعي لتعليم الطالب هو قدرته على تحليل ما لا يعرفه."],
    ["Pure Perfomance is our major focus .", "الأداء المتقن هو محور تركيزنا الأساسي."],
    ["Personality", "الشخصية"],
    ["The School challenges pupils to be intellectually inquisitive and socially conscious.", "تشجع المدرسة التلاميذ على حب الاستطلاع الفكري والوعي الاجتماعي."],
    ["As an Islamic School we abide by the rules of Quran and Sunnah in the uprooting of the Pupils.", "كمدرسة إسلامية نلتزم بتعاليم القرآن والسنة في تربية التلاميذ."],
    ["Sports", "الرياضة"],
    ["\"Al-liheib Primary School was the top in the sports competitions in the district\"", "«كانت مدرسة الهيب الابتدائية الأولى في المسابقات الرياضية على مستوى المنطقة»"],
    ["A voice from the community giving proof about the school during sports and games at district level.", "شهادة من المجتمع تؤكد تفوق المدرسة في الرياضة والألعاب على مستوى المنطقة."],
    ["Read more", "اقرأ المزيد"],
    ["Learn More", "اعرف المزيد"],
    ["Why choose us", "لماذا تختارنا"],
    ["A RIGHT CHOICE THAT MAKES THE DIFFERENCE", "اختيار صحيح يصنع الفرق"],
    ["We provide quality education at no cost to families,", "نقدم تعليمًا عالي الجودة دون أي تكلفة على الأسر،"],
    ["guided by Islamic values and supported by generous sponsors,", "في ضوء القيم الإسلامية وبدعم من رعاة كرماء،"],
    ["giving every child a fair chance to succeed.", "لنمنح كل طفل فرصة عادلة للنجاح."],
    ["Zero School Fees", "صفر رسوم مدرسية"],
    ["Students pay no school fees, thanks to IICO sponsorship and donors.", "لا يدفع الطلاب أي رسوم مدرسية بفضل كفالة (IICO) والمتبرعين."],
    ["Balanced Education", "التربية المتوازنة"],
    ["Academics, sports, culture and community life, all in harmony.", "الدراسة والرياضة والثقافة والحياة المجتمعية في تناغم تام."],
    ["24", "24"],
    ["Years of education", "عامًا من التعليم"],
    ["Our Programs", "برامجنا"],
    ["A Complete Foundation for Every Child", "أساس متكامل لكل طفل"],
    ["A complete foundation for every child", "أساس متكامل لكل طفل"],
    ["Primary Education", "التعليم الابتدائي"],
    ["Uganda government curriculum in English from Primary 1 to Primary 7, preparing pupils for the PLE examinations.", "منهاج الحكومة الأوغندية بالإنجليزية من الصف الأول إلى الصف السابع، وإعداد التلاميذ لامتحانات الشهادة الابتدائية."],
    ["Uganda government curriculum in English from Primary 1 to Primary 7, preparing pupils for the Primary Leaving Examinations.", "منهاج الحكومة الأوغندية بالإنجليزية من الصف الأول إلى الصف السابع، وإعداد التلاميذ لامتحانات الشهادة الابتدائية."],
    ["Islamic Studies", "الدراسات الإسلامية"],
    ["Quran memorisation and Arabic language, nurturing pupils to abide by the rules of Quran and Sunnah.", "حفظ القرآن وتعليم اللغة العربية، وتربية التلاميذ على الالتزام بتعاليم القرآن والسنة."],
    ["Quran memorisation and Arabic language, nurturing pupils to abide by the rules of Quran and Sunnah in their uprooting.", "حفظ القرآن وتعليم اللغة العربية، وتربية التلاميذ على الالتزام بتعاليم القرآن والسنة."],
    ["Sports & Games", "الرياضة والألعاب"],
    ["A district-leading sports programme. Alheib has been top in district sports competitions.", "برنامج رياضي رائد على مستوى المنطقة. تصدرت الهيب مسابقات الرياضة الإقليمية."],
    ["A district-leading sports programme. Alheib Primary School was the top school in sports competitions at district level.", "برنامج رياضي رائد على مستوى المنطقة، إذ كانت الهيب المدرسة الأولى في المسابقات الرياضية على مستوى المنطقة."],
    ["Arts & Culture", "الفنون والثقافة"],
    ["Music, dance and cultural activities that celebrate our heritage and creativity.", "موسيقى ورقص وأنشطة ثقافية تحتفل بتراثنا وإبداعنا."],
    ["Music, dance and cultural activities that celebrate our heritage and the creativity of our sons and daughters.", "موسيقى ورقص وأنشطة ثقافية تحتفل بتراثنا بإبداع أبنائنا وبناتنا."],
    ["Digital Skills", "المهارات الرقمية"],
    ["Accredited under the global Canva for Education programme for digital learning.", "معتمدة ضمن برنامج Canva for Education العالمي للتعلم الرقمي."],
    ["A school accredited under the global Canva for Education programme, equipping teachers and pupils with modern digital tools.", "مدرسة معتمدة ضمن برنامج Canva for Education العالمي، تزوّد المعلمين والتلاميذ بأدوات رقمية حديثة."],
    ["Community Care", "الرعاية المجتمعية"],
    ["An orphanage centre caring for orphans and children from poor backgrounds, sponsored by IICO Kuwait.", "مركز للأيتام يهتم بالأيتام والأطفال من الأسر الفقيرة، برعاية (IICO) الكويت."],
    ["An orphanage centre caring for orphans and children from poor backgrounds, sponsored by the IICO Kuwait.", "مركز للأيتام يهتم بالأيتام والأطفال من الأسر الفقيرة، برعاية (IICO) الكويت."],
    ["Why we do it", "لماذا نفعل ذلك"],
    ["We take care of the Future!", "نعتني بالمستقبل!"],
    ["Education", "التعليم"],
    ["Quality learning for every child", "تعليم عالي الجودة لكل طفل"],
    ["Care", "الرعاية"],
    ["Supporting orphans and the needy", "دعم الأيتام والمحتاجين"],
    ["Values", "القيم"],
    ["Faith and character first", "الإيمان والشخصية أولًا"],
    ["Read", "اقرأ"],
    ["More", "المزيد"],
    ["Read More", "اقرأ المزيد"],
    ["Numbers that speak", "أرقام تتحدث عنا"],
    ["A school built by sponsors, loved by the community", "مدرسة بناها الرعاة وأحبها المجتمع"],
    ["Alheib Primary School is sponsored by the International Islamic Charitable Organization (IICO) of Kuwait, enabling orphaned and needy children to study free of charge.", "رعت منظمة الإغاثة الإسلامية العالمية (IICO) الكويتية مدرسة الهيب الابتدائية، ما مكّن الأيتام والأطفال المحتاجين من الدراسة مجانًا."],
    ["Active Learners", "الطلاب النشطون"],
    ["Classes (P1 - P7)", "الصفوف (P1 - P7)"],
    ["Teachers & Staff", "المعلمون والموظفون"],
    ["Years of Service", "سنوات الخدمة"],
    ["MOTTO", "شعارنا"],
    ["Balanced Education is our concern", "التربية المتوازنة هي اهتمامنا"],
    ["VISION", "رؤيتنا"],
    ["We strive to create a harmonious balance between academic demands, sporting and cultural activities and community life.", "نسعى إلى تحقيق توازن متناغم بين المتطلبات الأكاديمية والأنشطة الرياضية والثقافية والحياة المجتمعية."],
    ["MISSION", "رسالتنا"],
    ["The School challenges pupils to be intellectually inquisitive and socially conscious.", "تتحدى المدرسة التلاميذ ليكونوا مفكرين فكريًا وواعين اجتماعيًا."],
    ["ESTABLISHMENT", "التأسيس"],
    ["Established in 2002 in Kitikifumba, Kira town council, Wakiso District,(U)", "تأسست عام 2002 في كيتيكيفومبا، مجلس بلدة كيرا، منطقة واكيسو (أوغندا)"],
    ["The teachers here know every child by name and genuinely care. My children learn, play and pray in a safe, happy environment — all at no cost to us. We are forever grateful to the sponsors.", "المعلمون هنا يعرفون كل طفل باسمه ويهتمون به حقًا. يتعلم أطفالي ويلعبون ويصلون في بيئة آمنة وسعيدة — دون أي تكلفة علينا. نحن شاكرون للرعاة إلى الأبد."],
    ["- Parent of P3 & P5 learners", "— أحد الوالدين لطلاب P3 و P5"],
    ["Alheib gave my orphaned nephew a home and a school. Today he is confident, disciplined and performing well in class. This school truly changed our family’s life.", "أعطت الهيب لابن أختي اليتيم مأوى ومدرسة. اليوم هو واثق ومنضبط ومتفوق في الفصل. لقد غيّرت هذه المدرسة حياة أسرتنا حقًا."],
    ["- Guardian of a P6 learner", "— وصي لطالب في P6"],
    ["The balanced curriculum is wonderful — strong academics, top sports and Islamic values. My daughter especially enjoys her Arabic lessons and the school teams.", "المنهاج المتوازن رائع — أكاديمي قوي ورياضة مميزة وقيم إسلامية. ابنتي على وجه الخصوص تستمتع بدروس العربية وفرق المدرسة."],
    ["- Parent of a P4 learner", "— أحد الوالدين لطالب في P4"],
    ["As a struggling widow, I could not afford school fees, yet Alheib welcomed my children free of charge. The teachers are patient and kind. May Allah bless the sponsors and this school.", "كأرملة معسرة لم أستطع دفع الرسوم، ومع ذلك رحّبت الهيب بأطفالي مجانًا. المعلمون صبورون ولطفاء. بارك الله في الرعاة وفي هذه المدرسة."],
    ["- A grateful mother", "— أم شاكرة"],
    ["Pupils from Alheib are well-behaved and hardworking. I have watched them top district sports competitions and produce strong PLE results. Quality education with strong character.", "تلاميذ الهيب مؤدبون ومجتهدون. رأيتهم يتصدرون مسابقات الرياضة الإقليمية ويحققون نتائج قوية في الشهادة الابتدائية. تعليم عالي الجودة بشخصية قوية."],
    ["- Community leader, Kira", "— قائد مجتمعي، كيرا"],
    ["School News", "أخبار المدرسة"],
    ["Latest Updates from Alheib", "آخر التحديثات من الهيب"],
    ["Alheib earns Canva for Education accreditation", "الهيب تحصل على اعتماد Canva for Education"],
    ["Our school has been officially accredited under the global Canva for Education programme.", "تم اعتماد مدرستنا رسميًا ضمن برنامج Canva for Education العالمي."],
    ["420 school uniforms distributed to orphans", "توزيع 420 زيًا مدرسيًا على الأيتام"],
    ["IICO distributed uniforms, sportswear, winter clothes and shoes to our pupils.", "وزعت (IICO) الأزياء والملابس الرياضية والشتوية والأحذية على تلاميذنا."],
    ["Inter-School Quiz: Alheb Shines", "مسابقة المدارس: الهيب تتألق"],
    ["Our senior learners impressed at the inter-school academic quiz, showing strong command of literacy, numeracy and Islamic studies.", "أبهر طلابنا المتقدمون في المسابقة الأكاديمية بين المدارس بإتقانهم القراءة والحساب والدراسات الإسلامية."],
    ["Latest", "الأحدث"],

    /* About */
    ["Two decades of balanced education in Kitikifumba", "عقدان من التربية المتوازنة في كيتيكيفومبا"],
    ["Alheib Primary School was established in 2002 in Kitikifumba, Kira Town Council, Wakiso District. As a government-sponsored school and orphanage centre, we are affiliated with the International Islamic Charitable Organization (IICO) based in the State of Kuwait, which sponsors our pupils so they learn free of charge.", "تأسست مدرسة الهيب الابتدائية عام 2002 في كيتيكيفومبا، مجلس بلدة كيرا، منطقة واكيسو. كمدرسة حكومية ومركز للأيتام، نحن تابعون لمنظمة الإغاثة الإسلامية العالمية (IICO) بدولة الكويت، التي تكفل تلاميذنا ليتعلموا مجانًا."],
    ["Established 2002, serving the community for over 20 years", "تأسست عام 2002، وتخدم المجتمع لأكثر من 20 عامًا"],
    ["Government-sponsored with IICO Kuwait affiliation", "مدرسة حكومية بانتساب إلى (IICO) الكويت"],
    ["Zero school fees thanks to generous sponsors", "صفر رسوم مدرسية بفضل الرعاة الكرماء"],
    ["Uganda curriculum (English) plus Islamic curriculum (Arabic)", "المنهاج الأوغندي (بالإنجليزية) إضافة إلى المنهاج الإسلامي (بالعربية)"],
    ["View Our Programs", "عرض برامجنا"],
    ["What We Stand For", "ماذا نؤمن به"],
    ["Our Core Values", "قيمنا الأساسية"],
    ["Academic Excellence", "التفوق الأكاديمي"],
    ["We challenge pupils to be intellectually inquisitive, with pure performance as our major focus.", "نتحدى التلاميذ ليكونوا مفكرين فكريًا، مع التركيز على الأداء المتقن."],
    ["Community Care", "الرعاية المجتمعية"],
    ["Balanced Growth", "النمو المتوازن"],
    ["A harmonious blend of academics, sporting and cultural activities and community life.", "مزيج متناغم من الدراسة والأنشطة الرياضية والثقافية والحياة المجتمعية."],
    ["A school where every child matters", "مدرسة يهمّها كل طفل"],
    ["We pride ourselves on skills and creativity of our sons and daughters, praying and promising their talents continue growing every year bigger and better.", "نفخر بمهارات أبنائنا وبناتنا وإبداعهم، وندعو ونعد بأن تظل مواهبهم تنمو كل عام أكبر وأفضل."],
    ["Free Education", "التعليم المجاني"],
    ["Students pay zero fees, thanking the sponsorships received.", "يدفع الطلاب صفر رسوم، شكرًا للكفالات المقدمة."],
    ["Islamic Foundation", "الأساس الإسلامي"],
    ["We abide by the rules of Quran and Sunnah in the uprooting of pupils.", "نلتزم بتعاليم القرآن والسنة في تربية التلاميذ."],
    ["Our Story", "قصتنا"],
    ["A vision of balanced education for all", "رؤية التربية المتوازنة للجميع"],
    ["We strive to create a harmonious balance between academic demands, sporting and cultural activities and community life, challenging pupils to be intellectually inquisitive and socially conscious.", "نسعى إلى تحقيق توازن متناغم بين المتطلبات الأكاديمية والأنشطة الرياضية والثقافية والحياة المجتمعية، متحدين التلاميذ ليكونوا مفكرين فكريًا وواعين اجتماعيًا."],
    ["Students Enrolled", "الطلاب المسجلون"],
    ["School Capacity", "السعة المدرسية"],
    ["Our People", "فريقنا"],
    ["Meet Our Dedicated Team", "تعرّف على فريقنا المخلص"],
    ["Head Teacher", "مديرة المدرسة"],
    ["Deputy Head Teacher", "نائب المدير"],
    ["Head of Academics", "رئيس الشؤون الأكاديمية"],
    ["Head of Religious Studies", "رئيس الدراسات الدينية"],
    ["Aidah Nakayiza", "عايدة ناكاييزا"],
    ["Isiko Mohammed", "إسيكو محمد"],
    ["Abdulnoor Saidi Kiyemba", "عبدالنور سعيد كيمبا"],
    ["Namuhyama Fatuma", "ناموهياما فاطمة"],
    ["- Abdullah K. Namandi Safari, Software Engineer", "— عبدالله ك. نموندي سفاري، مهندس برمجيات"],
    ["I designed and built the school management system that powers this site. Everything you see — top performers, the academic calendar and donations — flows live from the school's own database. It has been a joy building tools that help Alheib's learners and staff work better every single day.", "صممت وبنيت نظام إدارة المدرسة الذي يشغّل هذا الموقع. كل ما ترونه — المتفوقون، التقويم الأكاديمي والتبرعات — يتدفق مباشرة من قاعدة بيانات المدرسة. كان من دواعي سروري بناء أدوات تساعد متعلمي الهيب وكادرها على العمل بشكل أفضل كل يوم."],

    /* Services */
    ["We care for the future of every child", "نهتم بمستقبل كل طفل"],
    ["Every child deserves a balanced education, a caring community and a fair chance in life. At Alheib, orphaned and needy children learn free of charge, guided by Islamic values.", "يستحق كل طفل تعليمًا متوازنًا ومجتمعًا رحيمًا وفرصة عادلة في الحياة. في الهيب، يتعلم الأيتام والأطفال المحتاجون مجانًا وفق القيم الإسلامية."],
    ["Contact Us", "اتصل بنا"],
    ["Highlights", "أبرز اللحظات"],
    ["Moments that make us proud", "لحظات تجعلنا فخورين"],
    ["Top in district competitions", "الأولى في مسابقات المنطقة"],
    ["Digital Learning", "التعلم الرقمي"],
    ["Canva for Education accreditation", "اعتماد Canva for Education"],
    ["Outreach", "العطاء المجتمعي"],
    ["School uniforms for our pupils", "أزياء مدرسية لتلاميذنا"],

    /* Admissions */
    ["Enrolment", "التسجيل"],
    ["We welcome every child, regardless of background", "نرحب بكل طفل مهما كانت خلفيته"],
    ["Alheib Primary School provides free, quality education to orphaned and needy children in", "توفر مدرسة الهيب الابتدائية تعليمًا مجانيًا عالي الجودة للأيتام والأطفال المحتاجين في"],
    ["Kitikifumba. Thanks to our sponsors at the International Islamic Charitable Organization (IICO)", "كيتيكيفومبا. بفضل رعاتنا في منظمة الإغاثة الإسلامية العالمية (IICO)"],
    ["of Kuwait, pupils pay zero school fees.", "الكويت، يدفع التلاميذ رسومًا مدرسية صفرًا."],
    ["Primary 1 to Primary 7 (Uganda curriculum)", "من الصف الأول إلى الصف السابع (المنهاج الأوغندي)"],
    ["Islamic studies and Quran memorisation", "الدراسات الإسلامية وحفظ القرآن"],
    ["Day school with a caring, disciplined environment", "مدرسة نهارية في بيئة رحيمة ومنضبطة"],
    ["Zero school fees for sponsored pupils", "صفر رسوم مدرسية للتلاميذ المكفولين"],
    ["Enquire Now", "استفسر الآن"],
    ["How To Apply", "كيفية التقديم"],
    ["A simple process for parents and guardians", "إجراء بسيط للآباء والأوصياء"],
    ["1. Visit the School", "1. زيارة المدرسة"],
    ["Come to our campus in Kitikifumba, Kira Town Council, and speak with the", "تفضلوا بزيارة حرمنا المدرسي في كيتيكيفومبا، مجلس بلدة كيرا، وتحدثوا مع"],
    ["administration about your child.", "الإدارة عن طفلكم."],
    ["2. Submit Details", "2. تقديم البيانات"],
    ["Provide the child's birth certificate or recommendation letter, and any", "قدموا شهادة ميلاد الطفل أو خطاب توصية، وأي"],
    ["documents showing orphan or needy status for sponsorship.", "وثائق تثبت حالة اليتم أو الاحتياج للحصول على الكفالة."],
    ["3. Enrol & Welcome", "3. التسجيل والترحيب"],
    ["Once approved, your child is welcomed into a class and issued with school", "بمجرد الموافقة، يُرحَّب بطفلكم في فصله ويُزوَّد بمستلزمات"],
    ["materials and a uniform programme.", "دراسية وبرنامج زي موحد."],
    ["Documents Required", "المستندات المطلوبة"],
    ["What to bring when applying", "ماذا تحضرون عند التقديم"],
    ["To complete enrolment, parents or guardians should bring the following documents", "لإتمام التسجيل، على الآباء أو الأوصياء إحضار المستندات التالية"],
    ["for the child:", "الخاصة بالطفل:"],
    ["Birth Certificate", "شهادة الميلاد"],
    ["Official copy for age verification.", "نسخة رسمية للتحقق من العمر."],
    ["Recommendation Letter", "خطاب التوصية"],
    ["From a religious or community leader, if available.", "من قائد ديني أو مجتمعي، إن توفر."],
    ["Orphan / Needy Status", "حالة اليتم / الاحتياج"],
    ["Evidence of orphaning or need helps our sponsorship team assist.", "دليل اليتم أو الاحتياج يساعد فريق الكفالة على تقديم المساعدة."],
    ["Medical Records", "السجلات الطبية"],
    ["Immunisation and health records if available.", "سجلات التطعيم والرعاية الصحية إن توفرت."],
    ["School fees for sponsored pupils", "رسوم المدرسة للطلاب المكفولين"],
    ["School Calendar", "التقويم المدرسي"],
    ["Three terms, one goal: balanced education", "ثلاثة فصول دراسية، وهدف واحد: التربية المتوازنة"],
    ["The Ugandan school year runs across three terms. Our 2026 calendar, as recorded in the official school system, is shown below.", "يمتد العام الدراسي الأوغندي عبر ثلاثة فصول. تقويمنا لعام 2026، كما هو مسجل في نظام المدرسة الرسمي، موضح أدناه."],
    ["Term 1, 2026", "الفصل الأول 2026"],
    ["5 Feb - 3 May", "5 فبراير - 3 مايو"],
    ["Term 2, 2026", "الفصل الثاني 2026"],
    ["27 May - 23 Aug", "27 مايو - 23 أغسطس"],
    ["Term 3, 2026", "الفصل الثالث 2026"],
    ["16 Sep - 5 Dec", "16 سبتمبر - 5 ديسمبر"],
    ["Ask About Term Dates", "استفسر عن مواعيد الفصول"],

    /* Gallery */
    ["Moments at Alheib", "لحظات من الهيب"],
    ["Life at the school", "الحياة في المدرسة"],
    ["Real photos of our pupils and school life are shared on our", "نشارك صورًا حقيقية لتلاميذنا وحياتنا المدرسية على"],
    ["Facebook page", "صفحة فيسبوك"],
    ["and", "و"],
    ["TikTok", "تيك توك"],
    ["— follow Alheib Primary School to see the latest moments.", "— تابعوا مدرسة الهيب الابتدائية لمشاهدة أحدث اللحظات."],
    ["Our School & Classrooms", "مدرستنا وفصولنا الدراسية"],
    ["Our School Building", "مبنى مدرستنا"],
    ["Bright Classrooms", "فصول دراسية مشرقة"],
    ["Learning in Action", "التعلم في الممارسة"],
    ["Sports & Games", "الرياضة والألعاب"],
    ["Football Practice", "تدريب كرة القدم"],
    ["District Sports Finals", "نهائيات الرياضة على مستوى المنطقة"],
    ["Sports Day", "يوم الرياضة"],
    ["Events & Celebrations", "الفعاليات والاحتفالات"],
    ["Graduation & PLE Celebration", "احتفال التخرج والشهادة الابتدائية"],
    ["School Events", "فعاليات المدرسة"],
    ["Celebrating Our Learners", "الاحتفاء بتلاميذنا"],
    ["Alheib at the district sports finals", "الهيب في نهائيات الرياضة الإقليمية"],
    ["Alheib sports day", "يوم الرياضة في الهيب"],
    ["Bright classrooms at Alheib", "فصول مشرقة في الهيب"],
    ["Celebrations at Alheib", "احتفالات في الهيب"],
    ["Football practice at Alheib", "تدريب كرة القدم في الهيب"],
    ["PLE graduation celebration", "احتفال تخرج الشهادة الابتدائية"],
    ["Pupils learning in action", "تلاميذ يتعلمون في الممارسة"],
    ["School events and assemblies", "فعاليات واجتماعات المدرسة"],
    ["The Alheib school block", "مبنى مدرسة الهيب"],

    /* News */
    ["News & Events", "الأخبار والفعاليات"],
    ["Updates", "التحديثات"],
    ["News from Alheib", "أخبار من الهيب"],
    ["Latest News", "آخر الأخبار"],
    ["Term II, 2026 Examinations Completed Successfully", "امتحانات الفصل الثاني 2026 اكتملت بنجاح"],
    ["Our learners sat for the end-of-term examinations with discipline and focus. Results have been compiled in the school management system. Congratulations to every learner and thank you to our teachers.", "أدى متعلمونا امتحانات نهاية الفصل بانضباط وتركيز. جُمعت النتائج في نظام إدارة المدرسة. تهانينا لكل متعلم وشكرًا لمعلمينا."],
    ["Aug 2026", "أغسطس 2026"],
    ["Aug 2024", "أغسطس 2024"],
    ["New Learning Resources Arrive", "وصول موارد تعليمية جديدة"],
    ["The school has received new learning materials and updated classroom resources for the coming term. The computer lab continues to grow and science lessons remain hands-on.", "استلمت المدرسة مواد تعليمية جديدة وموردًا محدثة للفصول في الفصل القادم. يستمر مختبر الحاسوب في النمو وتبقى دروس العلوم عملية."],
    ["Inter-School Quiz: Alheb Shines", "مسابقة المدارس: الهيب تتألق"],
    ["Our senior learners represented the school at the inter-school academic quiz and returned with an impressive performance, showing strong command of literacy, numeracy and Islamic studies.", "مثل طلابنا المتقدمون المدرسة في المسابقة الأكاديمية بين المدارس وعادوا بأداء رائع، مظهرين إتقانًا قويًا للقراءة والحساب والدراسات الإسلامية."],
    ["Upcoming Events", "الفعاليات القادمة"],
    ["Opening of Term III, 2026", "افتتاح الفصل الثالث 2026"],
    ["16 September 2026. Parents and guardians welcome to the opening assembly.", "16 سبتمبر 2026. الآباء والأوصياء مدعوون لحضور الاجتماع الافتتاحي."],
    ["Mid-Term Assessment", "التقييم منتصف الفصل"],
    ["Theology and mid-term assessments take place in Term III, 2026.", "تُعقد التقييمات اللاهوتية ومنتصف الفصل في الفصل الثالث 2026."],
    ["End of Term III & PLE", "ختام الفصل الثالث والشهادة الابتدائية"],
    ["5 December 2026. Celebrating our Primary 7 graduates and 2026 PLE candidates.", "5 ديسمبر 2026. الاحتفال بخريجي الصف السابع ومرشحي الشهادة الابتدائية 2026."],

    /* Contact */
    ["Get In Touch", "تواصلوا معنا"],
    ["Visit Us:", "زورونا:"],
    ["Call Us:", "اتصلوا بنا:"],
    ["Mail Us:", "راسلونا:"],
    ["Submit Form", "إرسال النموذج"],
    ["Top Performers", "المتفوقون"],
    ["Celebrating our stars", "نحتفل بنجومنا"],
    ["Every term we celebrate the hard work of our learners — from class leaders to district champions. Results are shared at school and on our news page.", "في كل فصل نكرم اجتهاد متعلمينا — من أوائل الصفوف إلى أبطال المنطقة. تُعلن النتائج في المدرسة وعلى صفحة الأخبار."],
    ["Top learners in every class are recognised each term, with the P7 class sitting PLE this Term III, closing 5 December 2026.", "يُكرم أوائل الصفوف في كل فصل دراسي، ويجلس صف P7 لامتحان الشهادة الابتدائية في الفصل الثالث الذي يُختتم في 5 ديسمبر 2026."],
    ["District Champions", "أبطال المنطقة"],
    ["Our sports teams topped district competitions, and our learners shine at inter-school academic quizzes.", "تصدرت فرقنا الرياضية مسابقات المنطقة، وتألق متعلمونا في المسابقات الأكاديمية بين المدارس."],
    ["Character & Faith", "الشخصية والإيمان"],
    ["Pupils are nurtured on Quran and Sunnah, with Madrasa and Arabic studies forming a core part of their success.", "يتربى التلاميذ على القرآن والسنة، وتشكل دروس المدرسة الإسلامية والعربية جزءًا أساسيًا من نجاحهم."],
    ["Academic Calendar", "التقويم الأكاديمي"],
    ["2026 school year — three terms, one goal", "العام الدراسي 2026 — ثلاثة فصول وهدف واحد"],
    ["The Ugandan school year runs across three terms. Key dates for our 2026 calendar are recorded in the official school system and shown below.", "يمتد العام الدراسي الأوغندي عبر ثلاثة فصول. المواعيد الرئيسية لتقويمنا لعام 2026 مسجلة في نظام المدرسة الرسمي وتظهر أدناه."],
    ["Term I", "الفصل الأول"],
    ["First Term", "الفصل الأول"],
    ["5 Feb – 3 May 2026", "5 فبراير – 3 مايو 2026"],
    ["Term II", "الفصل الثاني"],
    ["27 May – 23 Aug 2026", "27 مايو – 23 أغسطس 2026"],
    ["Term III", "الفصل الثالث"],
    ["16 Sep – 5 Dec 2026", "16 سبتمبر – 5 ديسمبر 2026"],
    ["School opens and classes begin", "تفتح المدرسة وتبدأ الدروس"],
    ["Enrolment of new pupils opens", "يبدأ تسجيل التلاميذ الجدد"],
    ["Mid-term assessments", "تقييمات منتصف الفصل"],
    ["Inter-school academic quiz", "المسابقة الأكاديمية بين المدارس"],
    ["District sports competitions", "مسابقات الرياضة على مستوى المنطقة"],
    ["End-of-term examinations", "امتحانات نهاية الفصل"],
    ["PLE for Primary 7 candidates", "الشهادة الابتدائية لمرشحي الصف السابع"],
    ["Graduation & closing ceremonies", "حفلات التخرج والاختتام"],
    ["Results released at school", "تُعلن النتائج في المدرسة"],
    ["Term I opens — 5 Feb", "بداية الفصل الأول — 5 فبراير"],
    ["Term II opens — 27 May", "بداية الفصل الثاني — 27 مايو"],
    ["Term III opens — 16 Sep", "بداية الفصل الثالث — 16 سبتمبر"],
    ["PLE & closing — 5 Dec", "الشهادة الابتدائية والختام — 5 ديسمبر"],
    ["School Profile", "ملف المدرسة"],
    ["Quick facts", "معلومات سريعة"],
    ["Established", "التأسيس"],
    ["School Type", "نوع المدرسة"],
    ["Government school & orphanage centre", "مدرسة حكومية ومركز للأيتام"],
    ["Sponsorship", "الكفالة"],
    ["IICO Kuwait supports our pupils", "مؤسسة IICO الكويتية تكفل تلاميذنا"],
    ["Fees", "الرسوم المدرسية"],
    ["Zero school fees", "صفر رسوم مدرسية"],
    ["Location", "الموقع"],
    ["Kitikifumba, Kira Town Council, Wakiso District", "كيتيكيفومبا، مجلس بلدة كيرا، منطقة واكيسو"],
    ["Office Hours", "ساعات العمل"],
    ["Mon - Fri, 8AM - 5PM", "الاثنين - الجمعة، 8 صباحًا - 5 مساءً"],
    ["Who to contact", "للاتصال"],
    ["School staff directory", "دليل كادر المدرسة"],
    ["Reach our leadership directly, or call the school office during working hours. All enquiries are answered in English and Arabic.", "تواصلوا مع قيادة المدرسة مباشرة، أو اتصلوا بمكتب المدرسة خلال ساعات العمل. تُرد على جميع الاستفسارات باللغتين الإنجليزية والعربية."],
    ["Head of Academics", "مدير الدراسات"],
    ["Head of Religious Studies", "مدير الدراسات الدينية"],
    ["Office", "المكتب"],
    ["WhatsApp", "واتساب"],
    ["Director", "المدير"],
    ["Director of Studies", "مدير الدراسات"],
    ["Head of Internal", "رئيس الشؤون الداخلية"],
    ["Ali Abdo Saleh", "علي عبده صالح"]
  ];

  var en = {}, ar = {};
  for (var i = 0; i < PAIRS.length; i++) {
    en[PAIRS[i][0]] = PAIRS[i][1];
    ar[PAIRS[i][1]] = PAIRS[i][0];
  }

  var ATTRS = ["placeholder", "title", "alt", "aria-label"];

  var TITLES = {
    "index": ["Alheib Primary School - Balanced Education is Our Concern", "مدرسة الهيب الابتدائية - التربية المتوازنة هي اهتمامنا"],
    "about": ["About Us - Alheib Primary School", "من نحن - مدرسة الهيب الابتدائية"],
    "services": ["Our Programs - Alheib Primary School", "برامجنا - مدرسة الهيب الابتدائية"],
    "admissions": ["Admissions - Alheib Primary School", "القبول والتسجيل - مدرسة الهيب الابتدائية"],
    "gallery": ["Gallery - Alheib Primary School", "معرض الصور - مدرسة الهيب الابتدائية"],
    "news": ["News & Events - Alheib Primary School", "الأخبار والفعاليات - مدرسة الهيب الابتدائية"],
    "contact": ["Contact Us - Alheib Primary School", "اتصل بنا - مدرسة الهيب الابتدائية"]
  };

  function norm(s) {
    return s.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  }

  function currentLang() {
    try {
      return localStorage.getItem(LANG_KEY) === "ar" ? "ar" : "en";
    } catch (e) {
      return "en";
    }
  }

  function saveLang(l) {
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
  }

  function pageName() {
    var p = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
    return p.indexOf(".") > -1 ? "index" : (TITLES[p] ? p : "index");
  }

  function setHtml(lang) {
    var h = document.documentElement;
    h.setAttribute("lang", lang);
    h.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  function applyAttrs(lang) {
    var els = document.querySelectorAll("body *");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      for (var j = 0; j < ATTRS.length; j++) {
        var a = ATTRS[j];
        if (!el.hasAttribute(a)) continue;
        var v = norm(el.getAttribute(a));
        if (!v) continue;
        var t = lang === "ar" ? en[v] : ar[v];
        if (t) el.setAttribute(a, t);
      }
    }
  }

  function applyText(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        if (p && (p.nodeName === "SCRIPT" || p.nodeName === "STYLE" || p.nodeName === "NOSCRIPT")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var orig = n.nodeValue;
      var m = orig.match(/\S[\s\S]*\S|\S/);
      if (!m) continue;
      var content = m[0];
      var leadIdx = orig.indexOf(content);
      var lead = orig.slice(0, leadIdx);
      var trail = orig.slice(leadIdx + content.length);
      var v = norm(content);
      if (!v) continue;
      var t = lang === "ar" ? en[v] : ar[v];
      if (t) n.nodeValue = lead + t + trail;
    }
  }

  function applyTitle(lang) {
    var t = TITLES[pageName()];
    if (t) document.title = lang === "ar" ? t[1] : t[0];
  }

  function refreshControl(lang) {
    var btn = document.getElementById("lang-toggle");
    if (!btn) return;
    var label = document.getElementById("lang-toggle-label");
    var isAr = lang === "ar";
    if (label) label.textContent = isAr ? "English" : "العربية";
    btn.setAttribute("title", isAr ? "التبديل إلى الإنجليزية" : "التبديل إلى العربية");
    btn.setAttribute("aria-label", isAr ? "Switch to English" : "التبديل إلى العربية");
  }

  function apply(lang) {
    setHtml(lang);
    applyAttrs(lang);
    applyText(lang);
    applyTitle(lang);
  }

  function init() {
    var lang = currentLang();
    apply(lang);
    refreshControl(lang);

    var btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = currentLang() === "ar" ? "en" : "ar";
      saveLang(next);
      apply(next);
      refreshControl(next);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();