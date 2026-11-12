/* ==========================================================================
   data.js — content for the repeated parts of the page.
   services → Areas of practice accordion   (edit, add or remove freely)
   projects → Selected work row             (SAMPLE entries — replace or delete)
   Every text field is { en, ar }. Images point to assets/images.
   ========================================================================== */
window.ALYA = window.ALYA || {};

ALYA.data = {
  "services": [
    {
      "slug": "corporate-commercial",
      "order": 1,
      "image": "assets/images/service-corporate.jpg",
      "title": {
        "en": "Corporate & Commercial",
        "ar": "الشركات والأعمال التجارية"
      },
      "short": {
        "en": "Company formation, shareholder arrangements and the commercial agreements a business runs on.",
        "ar": "تأسيس الشركات، واتفاقيات الشركاء، والعقود التجارية التي يقوم عليها العمل."
      },
      "body": {
        "en": [
          "A business is a set of agreements: between founders, with suppliers, with customers. Advice in this area keeps those agreements consistent with each other and with the way the business actually operates.",
          "Work ranges from setting up a structure at the start, to reviewing arrangements when a partner joins or leaves, to preparing the documents for a sale or investment."
        ],
        "ar": [
          "العمل التجاري مجموعة من الاتفاقات: بين المؤسسين، ومع الموردين، ومع العملاء. والمشورة في هذا المجال تُبقي هذه الاتفاقات منسجمة فيما بينها، ومع الطريقة التي يعمل بها النشاط فعلًا.",
          "يمتد العمل من وضع الهيكل عند التأسيس، إلى مراجعة الترتيبات عند انضمام شريك أو خروجه، إلى إعداد مستندات البيع أو الاستثمار."
        ]
      },
      "scope": {
        "en": [
          "Choosing and setting up a company structure",
          "Shareholder and partnership agreements",
          "Supply, distribution and agency agreements",
          "Corporate housekeeping: resolutions, registers, amendments",
          "Preparing for investment or sale"
        ],
        "ar": [
          "اختيار هيكل الشركة وتأسيسها",
          "اتفاقيات المساهمين والشراكة",
          "عقود التوريد والتوزيع والوكالة",
          "الإجراءات المؤسسية: القرارات والسجلات والتعديلات",
          "الاستعداد للاستثمار أو البيع"
        ]
      }
    },
    {
      "slug": "civil-litigation",
      "order": 2,
      "image": "assets/images/service-litigation.jpg",
      "title": {
        "en": "Civil Litigation",
        "ar": "التقاضي المدني"
      },
      "short": {
        "en": "Assessing a claim, preparing the file, and representing the client through each stage of a dispute.",
        "ar": "تقييم الدعوى، وإعداد الملف، وتمثيل الموكّل في كل مرحلة من مراحل النزاع."
      },
      "body": {
        "en": [
          "Litigation begins long before a hearing. The first task is an honest assessment of the claim: the documents, the evidence, the costs and the realistic range of outcomes.",
          "Where a dispute does proceed, the file is prepared with the same care: a clear chronology, organised evidence, and submissions that a judge can follow."
        ],
        "ar": [
          "يبدأ التقاضي قبل الجلسة بزمن طويل. والمهمة الأولى تقييم صادق للدعوى: المستندات، والأدلة، والتكاليف، والنتائج المحتملة واقعيًا.",
          "وإن مضى النزاع إلى المحكمة، يُعَدّ الملف بالعناية نفسها: تسلسل زمني واضح، وأدلة منظّمة، ومذكرات يسهل على القاضي تتبّعها."
        ]
      },
      "scope": {
        "en": [
          "Initial case assessment and strategy",
          "Pre-action letters and negotiation",
          "Preparing pleadings and evidence",
          "Representation at hearings",
          "Enforcement of judgments"
        ],
        "ar": [
          "التقييم الأوّلي للدعوى ووضع الاستراتيجية",
          "الإنذارات والتفاوض قبل رفع الدعوى",
          "إعداد اللوائح والأدلة",
          "التمثيل في الجلسات",
          "تنفيذ الأحكام"
        ]
      }
    },
    {
      "slug": "contract-drafting",
      "order": 3,
      "image": "assets/images/service-contracts.jpg",
      "title": {
        "en": "Contract Drafting & Review",
        "ar": "صياغة العقود ومراجعتها"
      },
      "short": {
        "en": "Drafting agreements from first principles, and reviewing the ones you have been asked to sign.",
        "ar": "صياغة العقود من أساسها، ومراجعة ما يُطلب منك توقيعه."
      },
      "body": {
        "en": [
          "A contract is useful only if it says what the parties meant and still makes sense when something goes wrong. Drafting focuses on both.",
          "Reviews come back as a short written note: the clauses that matter, what they mean in practice, and suggested changes in priority order."
        ],
        "ar": [
          "لا يكون العقد نافعًا إلا إذا قال ما قصده أطرافه، وبقي مفهومًا حين يقع خلل. والصياغة تُعنى بالأمرين معًا.",
          "وتُسلَّم المراجعة في مذكرة مكتوبة مختصرة: البنود المهمة، ومعناها عمليًا، والتعديلات المقترحة مرتّبة حسب الأولوية."
        ]
      },
      "scope": {
        "en": [
          "Bespoke drafting of commercial agreements",
          "Review of contracts before signature",
          "Templates and standard terms for a business",
          "Amendments, renewals and terminations",
          "Bilingual contracts in Arabic and English"
        ],
        "ar": [
          "صياغة العقود التجارية حسب الحاجة",
          "مراجعة العقود قبل التوقيع",
          "نماذج وشروط عامة للنشاط التجاري",
          "التعديل والتجديد والإنهاء",
          "عقود ثنائية اللغة بالعربية والإنجليزية"
        ]
      }
    },
    {
      "slug": "legal-consultancy",
      "order": 4,
      "image": "assets/images/service-consultancy.jpg",
      "title": {
        "en": "Legal Consultancy",
        "ar": "الاستشارات القانونية"
      },
      "short": {
        "en": "A clear written opinion on a specific question, so you can decide with the facts in front of you.",
        "ar": "رأي مكتوب وواضح في مسألة محددة، لتقرّر والوقائع أمامك."
      },
      "body": {
        "en": [
          "Sometimes the need is not a document or a case, but an answer. Consultancy sets out the question, the relevant rules, and a direct view on what you should do next.",
          "Opinions are written to be read by the person who has to make the decision, not only by other lawyers."
        ],
        "ar": [
          "أحيانًا لا تكون الحاجة إلى مستند أو دعوى، بل إلى جواب. والاستشارة تحدّد السؤال، والقواعد ذات الصلة، ورأيًا مباشرًا في ما ينبغي فعله.",
          "ويُكتب الرأي ليقرأه صاحب القرار، لا المختصون وحدهم."
        ]
      },
      "scope": {
        "en": [
          "Written legal opinions",
          "Ongoing advisory arrangements",
          "Regulatory and compliance questions",
          "Second opinions on existing advice",
          "Risk review before a major decision"
        ],
        "ar": [
          "آراء قانونية مكتوبة",
          "ترتيبات استشارية مستمرة",
          "مسائل الأنظمة والامتثال",
          "رأي ثانٍ في مشورة سابقة",
          "مراجعة المخاطر قبل القرارات الكبرى"
        ]
      }
    },
    {
      "slug": "employment-labour",
      "order": 5,
      "image": "assets/images/service-employment.jpg",
      "title": {
        "en": "Employment & Labour",
        "ar": "العمل والعمّال"
      },
      "short": {
        "en": "Contracts, policies and disputes between employers and employees, from either side.",
        "ar": "العقود واللوائح والنزاعات بين أصحاب العمل والعاملين، لأي من الطرفين."
      },
      "body": {
        "en": [
          "Employment relationships are governed by the contract, the employer’s policies and the applicable labour rules, and the three do not always agree.",
          "Advice covers both employers setting up fair, enforceable terms and employees who want to understand their position."
        ],
        "ar": [
          "تحكم علاقةَ العمل ثلاثةُ مصادر: العقد، ولوائح صاحب العمل، وأحكام العمل المعمول بها، ولا تتفق هذه الثلاثة دائمًا.",
          "وتشمل المشورة أصحاب العمل الذين يضعون شروطًا عادلة قابلة للتنفيذ، والعاملين الذين يريدون فهم موقفهم."
        ]
      },
      "scope": {
        "en": [
          "Employment contracts and offer letters",
          "Workplace policies and handbooks",
          "Termination and end-of-service questions",
          "Restrictive covenants",
          "Employment disputes"
        ],
        "ar": [
          "عقود العمل وخطابات العرض",
          "لوائح العمل وأدلّته",
          "إنهاء الخدمة ومستحقاتها",
          "شروط عدم المنافسة",
          "نزاعات العمل"
        ]
      }
    },
    {
      "slug": "real-estate",
      "order": 6,
      "image": "assets/images/service-realestate.jpg",
      "title": {
        "en": "Real Estate",
        "ar": "العقارات"
      },
      "short": {
        "en": "Sale, purchase and lease of property, and the disputes that sometimes follow.",
        "ar": "بيع العقارات وشراؤها وتأجيرها، وما قد يتبع ذلك من نزاعات."
      },
      "body": {
        "en": [
          "Property transactions involve large sums and long commitments. Careful review at the start avoids most of the problems that appear later.",
          "Work includes reviewing sale and purchase agreements, drafting leases, and advising landlords or tenants when a disagreement arises."
        ],
        "ar": [
          "تتضمّن معاملات العقار مبالغ كبيرة والتزامات طويلة، والمراجعة الدقيقة في البداية تجنّب أكثر المشكلات التي تظهر لاحقًا.",
          "ويشمل العمل مراجعة عقود البيع والشراء، وصياغة عقود الإيجار، ومشورة الملّاك أو المستأجرين عند الخلاف."
        ]
      },
      "scope": {
        "en": [
          "Sale and purchase agreements",
          "Commercial and residential leases",
          "Off-plan purchase review",
          "Landlord and tenant disputes",
          "Property due diligence"
        ],
        "ar": [
          "عقود البيع والشراء",
          "عقود الإيجار التجارية والسكنية",
          "مراجعة الشراء على المخطط",
          "نزاعات المؤجّر والمستأجر",
          "الفحص النافي للجهالة للعقار"
        ]
      }
    },
    {
      "slug": "family-law",
      "order": 7,
      "image": "assets/images/service-family.jpg",
      "title": {
        "en": "Family Matters",
        "ar": "الأحوال الشخصية"
      },
      "short": {
        "en": "Personal status matters handled with discretion, clarity and care for everyone involved.",
        "ar": "مسائل الأحوال الشخصية، تُدار بسرّية ووضوح ومراعاة لكل الأطراف."
      },
      "body": {
        "en": [
          "Family matters are personal and often urgent. The aim is to explain the options clearly and calmly, and to reduce conflict wherever that is possible.",
          "All family matters are handled with strict confidentiality, and meetings can be arranged privately."
        ],
        "ar": [
          "مسائل الأسرة شخصية، وكثيرًا ما تكون عاجلة. والغاية شرح الخيارات بهدوء ووضوح، وتخفيف الخلاف ما أمكن.",
          "وتُعامَل جميع هذه المسائل بسرّية تامة، ويمكن ترتيب اللقاءات على انفراد."
        ]
      },
      "scope": {
        "en": [
          "Marriage and separation matters",
          "Custody and visitation arrangements",
          "Maintenance",
          "Inheritance and estate questions",
          "Mediated family agreements"
        ],
        "ar": [
          "مسائل الزواج والانفصال",
          "ترتيبات الحضانة والرؤية",
          "النفقة",
          "مسائل الميراث والتركات",
          "الاتفاقات الأسرية بالتوفيق"
        ]
      }
    }
  ],
  "projects": [
    {
      "slug": "bilingual-contract-guide",
      "sample": true,
      "type": {
        "en": "Publication",
        "ar": "منشور"
      },
      "year": "",
      "image": "assets/images/project-1.jpg",
      "title": {
        "en": "A plain-language guide to bilingual contracts",
        "ar": "دليل مبسّط للعقود ثنائية اللغة"
      },
      "desc": {
        "en": "Sample entry for a publication. Replace with the real title, publisher and a short description.",
        "ar": "مثال لمنشور. استبدله بالعنوان الحقيقي وجهة النشر ووصف مختصر."
      }
    },
    {
      "slug": "contracts-workshop",
      "sample": true,
      "type": {
        "en": "Talk",
        "ar": "محاضرة"
      },
      "year": "",
      "image": "assets/images/project-2.jpg",
      "title": {
        "en": "Workshop: reading a contract before signature",
        "ar": "ورشة: قراءة العقد قبل التوقيع"
      },
      "desc": {
        "en": "Sample entry for a talk or workshop. Replace with the event, host and date.",
        "ar": "مثال لمحاضرة أو ورشة. استبدله باسم الفعالية والجهة المنظّمة والتاريخ."
      }
    },
    {
      "slug": "family-business-governance",
      "sample": true,
      "type": {
        "en": "Engagement",
        "ar": "مشاركة مهنية"
      },
      "year": "",
      "image": "assets/images/project-3.jpg",
      "title": {
        "en": "Governance documents for a family business",
        "ar": "وثائق الحوكمة لشركة عائلية"
      },
      "desc": {
        "en": "Sample entry for a professional engagement, described without identifying the client.",
        "ar": "مثال لمشاركة مهنية، تُوصف دون الكشف عن هوية العميل."
      }
    },
    {
      "slug": "community-legal-clinic",
      "sample": true,
      "type": {
        "en": "Engagement",
        "ar": "مشاركة مهنية"
      },
      "year": "",
      "image": "assets/images/project-4.jpg",
      "title": {
        "en": "Community legal information sessions",
        "ar": "لقاءات توعية قانونية مجتمعية"
      },
      "desc": {
        "en": "Sample entry for pro bono or community work. Replace with real details.",
        "ar": "مثال لعمل تطوعي أو مجتمعي. استبدله بالتفاصيل الحقيقية."
      }
    }
  ]
};
