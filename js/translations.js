/* ==========================================================================
   translations.js — every interface string, in English and Arabic.
   Keys are used in HTML as:
     data-i18n="key"            → text
     data-i18n-html="key"       → trusted HTML (emphasis, placeholders)
     data-i18n-lines="key"      → array → heading split into reveal lines
     data-i18n-words="key"      → text split into words for scroll reveal
     data-i18n-attr="attr:key"  → attributes (placeholder, aria-label…)
   Text inside <span class="ph">[…]</span> is a placeholder to replace.
   ========================================================================== */
window.ALYA = window.ALYA || {};

ALYA.translations = {
  en: {
    meta: {
      home: { title: 'Alya Al Ameri — Legal Practice', desc: 'Alya Al Ameri advises individuals and businesses in the UAE, in Arabic and English. Request a consultation.' }
    },
    brand: { name: 'Alya Al Ameri', sub: 'Legal Practice', mark: 'Al Ameri' },
    nav: {
      about: 'About', practice: 'Practice', approach: 'Method', work: 'Work', contact: 'Contact',
      cta: 'Request a consultation', menu: 'Open menu', close: 'Close menu', skip: 'Skip to content',
      lang: 'Switch to Arabic'
    },
    common: { view: 'View', sample: 'Sample', copy: 'Copy', copied: 'Copied', copyFail: 'Select the text to copy it' },
    hero: {
      eyebrowA: 'Legal practice',
      eyebrowB: '<span class="ph">[City]</span>, United Arab Emirates',
      title: ['The law,', 'read <em>closely.</em>'],
      intro: 'Alya Al Ameri advises individuals and businesses on contracts, disputes and the decisions in between. Every matter starts with reading what is already on paper, and ends with advice you can act on.',
      ctaPrimary: 'Request a consultation',
      ctaSecondary: 'Areas of practice',
      noteLabel: 'Practice note',
      noteText: 'Bring the documents you already have. The first meeting is spent reading them with you.',
      meta1: 'Counsel in Arabic & English',
      meta2: 'Consultations by appointment',
      meta3: '<span class="ph">[Licence / registration no.]</span>',
      scroll: 'Scroll'
    },
    statement: {
      label: 'Principle',
      text: 'Most legal problems are written down long before they become disputes. The work is to read what others skim, and to say plainly what it means for you.'
    },
    about: {
      label: 'Profile',
      title: 'A practice built on <em>reading carefully.</em>',
      portraitCaption: 'Portrait placeholder — replace with a professional photograph',
      intro: [
        '<span class="ph">[Write a two- or three-sentence professional introduction: current role, where she practises, and who she typically advises.]</span>',
        'The practice is deliberately small. Each matter is handled personally, from the first meeting to the final document, so the person who reads your file is the person who advises you.'
      ],
      bio: [
        '<span class="ph">[Short biography: education, career path and languages. Use only verified facts.]</span>'
      ],
      qualLabel: 'Qualifications',
      quals: [
        { t: '<span class="ph">[Degree — e.g. Bachelor of Laws]</span>', d: '<span class="ph">[University, year]</span>' },
        { t: '<span class="ph">[Postgraduate study or certification]</span>', d: '<span class="ph">[Institution, year]</span>' },
        { t: '<span class="ph">[Professional licence / registration]</span>', d: '<span class="ph">[Issuing authority, number]</span>' },
        { t: 'Languages', d: 'Arabic and English' },
        { t: '<span class="ph">[Membership or professional body]</span>', d: '<span class="ph">[Name, since year]</span>' },
        { t: '<span class="ph">[Additional training]</span>', d: '<span class="ph">[Provider, year]</span>' }
      ]
    },
    practice: {
      label: 'Areas of practice',
      title: 'Where counsel <em>is needed.</em>',
      text: 'Open an area to see the usual scope of work. Not sure where your matter fits? Describe it in the consultation form.',
      scope: 'Typical scope',
      ask: 'Ask about this area'
    },
    approach: {
      label: 'Method',
      title: 'Four steps, <em>in this order.</em>',
      text: 'Legal advice is only as good as the facts it rests on. This sequence is followed on every matter, large or small.',
      steps: [
        { t: 'Listen', d: 'A first conversation to understand what happened, what you want, and what is at stake for you, in your own words.' },
        { t: 'Read', d: 'Contracts, correspondence, records. Every relevant document is read in full before any opinion is formed.' },
        { t: 'Advise', d: 'A clear written view of your position, your options and their likely costs, without hedging the parts that matter.' },
        { t: 'Act', d: 'Drafting, negotiation or representation, carried through with the same attention to detail as the first reading.' }
      ]
    },
    work: {
      label: 'Selected work',
      title: 'Writing, teaching <em>and practice.</em>',
      note: 'Sample entries. Client matters are never shown without consent.'
    },
    contact: {
      label: 'Consultation',
      title: 'Begin with a <em>conversation.</em>',
      lead: 'Describe your matter briefly and you will receive a reply to arrange a time. Please do not send confidential documents through this form.',
      methods: 'Direct contact',
      email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp', location: 'Office', hours: 'Hours',
      emailPh: '[Add email address]', phonePh: '[Add phone number]', whatsappPh: '[Add WhatsApp number]', locationPh: '[Add office address]',
      openWhatsapp: 'Message on WhatsApp',
      formTitle: 'Consultation request',
      name: 'Full name', namePh: 'Your name',
      emailField: 'Email', emailFieldPh: 'name@example.com',
      phoneField: 'Phone', phoneFieldPh: '+971',
      matter: 'Area of the matter', matterPh: 'Select an area', matterOther: 'Other / not sure',
      langPref: 'Preferred language', langAr: 'Arabic', langEn: 'English',
      method: 'Preferred contact', methodEmail: 'Email', methodPhone: 'Phone', methodWhatsapp: 'WhatsApp',
      message: 'Brief description', messagePh: 'What is the matter about, and is there a deadline?',
      consent: 'I understand that submitting this form does not create a lawyer–client relationship, and I agree to be contacted about my request.',
      submit: 'Send request',
      sending: 'Sending…',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email, for example name@example.com.',
      invalidPhone: 'Enter a phone number with at least 7 digits.',
      consentRequired: 'Please confirm to continue.',
      fixErrors: 'Please correct the highlighted fields.',
      successTitle: 'Request received.',
      successText: 'Thank you. You will receive a reply to arrange a time for your consultation.',
      successAgain: 'Send another request',
      demoNote: 'Demo form: it validates but does not send yet. It will be connected in WordPress.'
    },
    footer: {
      about: 'A legal practice in the United Arab Emirates, advising individuals and businesses in Arabic and English.',
      explore: 'On this page', reach: 'Contact',
      disclaimer: 'The information on this website is general and does not constitute legal advice. Contacting this office does not by itself create a lawyer–client relationship.',
      rights: 'All rights reserved.',
      top: 'Back to top'
    }
  },

  ar: {
    meta: {
      home: { title: 'علياء العامري — ممارسة قانونية', desc: 'علياء العامري تقدّم الاستشارات القانونية للأفراد والشركات في دولة الإمارات، بالعربية والإنجليزية. اطلب استشارة.' }
    },
    brand: { name: 'علياء العامري', sub: 'ممارسة قانونية', mark: 'العامري' },
    nav: {
      about: 'نبذة', practice: 'مجالات الممارسة', approach: 'المنهج', work: 'الأعمال', contact: 'التواصل',
      cta: 'اطلب استشارة', menu: 'فتح القائمة', close: 'إغلاق القائمة', skip: 'انتقل إلى المحتوى',
      lang: 'التبديل إلى الإنجليزية'
    },
    common: { view: 'عرض', sample: 'مثال', copy: 'نسخ', copied: 'تم النسخ', copyFail: 'حدّد النص لنسخه' },
    hero: {
      eyebrowA: 'ممارسة قانونية',
      eyebrowB: '<span class="ph">[المدينة]</span>، الإمارات العربية المتحدة',
      title: ['القانون،', 'حين يُقرأ', '<em>بعناية.</em>'],
      intro: 'تقدّم علياء العامري الاستشارات للأفراد والشركات في العقود والنزاعات وما بينهما من قرارات. يبدأ كل ملف بقراءة ما هو مكتوب أصلًا، وينتهي برأي واضح يمكنك العمل به.',
      ctaPrimary: 'اطلب استشارة',
      ctaSecondary: 'مجالات الممارسة',
      noteLabel: 'ملاحظة مهنية',
      noteText: 'أحضِر ما لديك من مستندات؛ فاللقاء الأول مخصّص لقراءتها معك.',
      meta1: 'استشارات بالعربية والإنجليزية',
      meta2: 'المواعيد بالحجز المسبق',
      meta3: '<span class="ph">[رقم الترخيص / القيد]</span>',
      scroll: 'مرّر'
    },
    statement: {
      label: 'مبدأ',
      text: 'أغلب المشكلات القانونية تُكتب على الورق قبل أن تصير نزاعًا بزمن طويل. والعمل هو أن نقرأ ما يمرّ عليه الآخرون سريعًا، وأن نقول لك بوضوح ما يعنيه.'
    },
    about: {
      label: 'الملف المهني',
      title: 'ممارسة تقوم على <em>القراءة المتأنّية.</em>',
      portraitCaption: 'صورة مؤقتة — تُستبدل بصورة مهنية',
      intro: [
        '<span class="ph">[اكتب تعريفًا مهنيًا من جملتين أو ثلاث: المنصب الحالي، ومكان الممارسة، ومن تخدمهم عادةً.]</span>',
        'الممارسة صغيرة عن قصد؛ إذ يُتابَع كل ملف شخصيًا من اللقاء الأول حتى المستند الأخير، فمن يقرأ ملفك هو نفسه من يقدّم لك المشورة.'
      ],
      bio: [
        '<span class="ph">[سيرة مختصرة: التعليم، والمسار المهني، واللغات. تُذكر الحقائق الموثّقة فقط.]</span>'
      ],
      qualLabel: 'المؤهلات',
      quals: [
        { t: '<span class="ph">[الدرجة العلمية — مثل: بكالوريوس القانون]</span>', d: '<span class="ph">[الجامعة، السنة]</span>' },
        { t: '<span class="ph">[دراسات عليا أو شهادة مهنية]</span>', d: '<span class="ph">[الجهة، السنة]</span>' },
        { t: '<span class="ph">[الترخيص / القيد المهني]</span>', d: '<span class="ph">[الجهة المانحة، الرقم]</span>' },
        { t: 'اللغات', d: 'العربية والإنجليزية' },
        { t: '<span class="ph">[عضوية أو هيئة مهنية]</span>', d: '<span class="ph">[الاسم، منذ سنة]</span>' },
        { t: '<span class="ph">[تدريب إضافي]</span>', d: '<span class="ph">[الجهة، السنة]</span>' }
      ]
    },
    practice: {
      label: 'مجالات الممارسة',
      title: 'حيث تحتاج <em>إلى مشورة.</em>',
      text: 'افتح أي مجال لترى نطاق العمل المعتاد فيه. لست متأكدًا من مجال مسألتك؟ صِفها في نموذج الاستشارة.',
      scope: 'نطاق العمل المعتاد',
      ask: 'استفسر عن هذا المجال'
    },
    approach: {
      label: 'المنهج',
      title: 'أربع خطوات، <em>بهذا الترتيب.</em>',
      text: 'لا تكون المشورة القانونية أدقّ من الوقائع التي تقوم عليها؛ لذلك يُتّبع هذا التسلسل في كل ملف، كبيرًا كان أو صغيرًا.',
      steps: [
        { t: 'الاستماع', d: 'حديث أوّل لفهم ما حدث، وما تريده، وما يهمّك في المسألة، بكلماتك أنت.' },
        { t: 'القراءة', d: 'العقود والمراسلات والسجلات؛ يُقرأ كل مستند ذي صلة كاملًا قبل تكوين أي رأي.' },
        { t: 'الرأي', d: 'رأي مكتوب وواضح في موقفك وخياراتك وكلفتها المتوقعة، دون مواربة في ما يهمّ.' },
        { t: 'التنفيذ', d: 'صياغة أو تفاوض أو تمثيل، يُنجَز بالدقة نفسها التي بدأت بها القراءة الأولى.' }
      ]
    },
    work: {
      label: 'أعمال مختارة',
      title: 'كتابة وتعليم <em>وممارسة.</em>',
      note: 'أمثلة مؤقتة. لا تُعرض ملفات العملاء دون موافقتهم.'
    },
    contact: {
      label: 'الاستشارة',
      title: 'لنبدأ <em>بحديث.</em>',
      lead: 'صِف مسألتك باختصار، وسيصلك ردّ لتحديد موعد. يُرجى عدم إرسال مستندات سرّية عبر هذا النموذج.',
      methods: 'التواصل المباشر',
      email: 'البريد', phone: 'الهاتف', whatsapp: 'واتساب', location: 'المكتب', hours: 'المواعيد',
      emailPh: '[أضف البريد الإلكتروني]', phonePh: '[أضف رقم الهاتف]', whatsappPh: '[أضف رقم واتساب]', locationPh: '[أضف عنوان المكتب]',
      openWhatsapp: 'راسلنا على واتساب',
      formTitle: 'طلب استشارة',
      name: 'الاسم الكامل', namePh: 'اسمك',
      emailField: 'البريد الإلكتروني', emailFieldPh: 'name@example.com',
      phoneField: 'الهاتف', phoneFieldPh: '+971',
      matter: 'مجال المسألة', matterPh: 'اختر المجال', matterOther: 'أخرى / غير متأكد',
      langPref: 'اللغة المفضّلة', langAr: 'العربية', langEn: 'الإنجليزية',
      method: 'وسيلة التواصل المفضّلة', methodEmail: 'البريد', methodPhone: 'الهاتف', methodWhatsapp: 'واتساب',
      message: 'وصف مختصر', messagePh: 'ما موضوع المسألة؟ وهل هناك موعد نهائي؟',
      consent: 'أدرك أن إرسال هذا النموذج لا يُنشئ علاقة بين محامٍ وموكّل، وأوافق على التواصل معي بشأن طلبي.',
      submit: 'إرسال الطلب',
      sending: 'جارٍ الإرسال…',
      required: 'هذا الحقل مطلوب.',
      invalidEmail: 'أدخل بريدًا صحيحًا، مثل name@example.com.',
      invalidPhone: 'أدخل رقم هاتف من 7 أرقام على الأقل.',
      consentRequired: 'يُرجى التأكيد للمتابعة.',
      fixErrors: 'يُرجى تصحيح الحقول المظلّلة.',
      successTitle: 'تم استلام طلبك.',
      successText: 'شكرًا لك. سيصلك ردّ لتحديد موعد الاستشارة.',
      successAgain: 'إرسال طلب آخر',
      demoNote: 'نموذج تجريبي: يتحقق من الحقول لكنه لا يرسل بعد، وسيُربط في ووردبريس.'
    },
    footer: {
      about: 'ممارسة قانونية في دولة الإمارات العربية المتحدة، تقدّم الاستشارات للأفراد والشركات بالعربية والإنجليزية.',
      explore: 'في هذه الصفحة', reach: 'التواصل',
      disclaimer: 'المعلومات الواردة في هذا الموقع عامة ولا تُعدّ مشورة قانونية، ولا يُنشئ التواصل مع المكتب بذاته علاقة بين محامٍ وموكّل.',
      rights: 'جميع الحقوق محفوظة.',
      top: 'العودة إلى الأعلى'
    }
  }
};
