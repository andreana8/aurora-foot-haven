import type { Language } from "./translations";

export interface AdviceSection {
  paragraphs?: string[];
  listTitle?: string;
  list?: string[];
  note?: string;
}

export interface AdviceTopic {
  title: string;
  sections: AdviceSection[];
}

export interface AdviceContent {
  back: string;
  title: string;
  intro1: string;
  intro2: string;
  intro3: string;
  dailyTitle: string;
  dailyParagraphs: string[];
  topics: AdviceTopic[];
  whenTitle: string;
  whenIntro: string;
  whenList: string[];
  whenNote: string;
  reminderTitle: string;
  reminderFormula: string;
  reminderText: string;
  closing: string;
}

const et: AdviceContent = {
  back: "← Tagasi",
  title: "Nõuanded tervete jalgade heaks",
  intro1: "Meie jalad kannavad meid iga päev, kuid sageli pöörame neile tähelepanu alles siis, kui tekib valu, kuivus, lõhed, küüneprobleemid või muu ebamugavus.",
  intro2: "Regulaarne jalgade hooldus aitab ennetada paljusid probleeme ning märgata muutusi võimalikult vara. Siit leiad lihtsad soovitused jalgade, naha ja küünte igapäevaseks hooldamiseks.",
  intro3: "Kui Sa ei ole kindel, milline hooldus või toode just Sinu jalgadele sobib, küsi nõu jalaspetsialistilt.",
  dailyTitle: "Igapäevane jalgade hooldus",
  dailyParagraphs: [
    "Pese jalgu iga päev leige vee ja õrnatoimelise pesuvahendiga. Väldi väga kuuma vett ja tugevaid pesuaineid, sest need võivad nahka kuivatada.",
    "Kuivata jalad alati hoolikalt, pöörates erilist tähelepanu varbavahedele. Niisked varbavahed soodustavad naha haudumist ja seeninfektsioonide teket.",
    "Kontrolli aeg-ajalt ka jalataldu, varbavahesid ja küüsi. Pane tähele punetust, lõhesid, ville, haavandeid, turset ning küünte värvi või kuju muutusi. Diabeedi korral on igapäevane jalgade kontroll eriti oluline.",
    "Eelista mugavaid ja paraja suurusega jalanõusid ning hingavast materjalist sokke. Sokke tuleks vahetada iga päev, vajadusel sagedamini.",
  ],
  topics: [
    {
      title: "Kuiv jalgade nahk",
      sections: [
        {
          paragraphs: [
            "Kuiv nahk vajab regulaarset niisutamist. Kõige parem on kreemitada jalgu kohe pärast pesemist, kui nahk on veel kergelt niiske.",
            "Kuiva naha hoolduses võivad sobida näiteks kreemid, mis sisaldavad: 5-10% uureat, glütseriini, mesilasvaha, sheavõid, pantenooli või keramiide.",
            "Kreemi võib kasutada üks kuni kaks korda päevas vastavalt naha seisundile. Väga kuiva naha korral võib õhtul kanda jalgadele paksema kreemikihi ja panna jalga puuvillased sokid. Kuiva naha hooldusjuhendis soovitatakse samuti vältida kuuma vett, naha tugevat hõõrumist ning valida mugavad ja hingavad jalanõud.",
            "Kreemi ei panda varbavahedesse, eriti kui need kipuvad olema niisked.",
          ],
        },
      ],
    },
    {
      title: "Kannalõhed",
      sections: [
        {
          paragraphs: [
            "Kannalõhed tekivad sageli siis, kui nahk muutub kuivaks ja pakseneb ning kannale langeb suur koormus.",
          ],
          listTitle: "Kannalõhede ennetamiseks ja hooldamiseks:",
          list: [
            "kreemita jalgu regulaarselt;",
            "kanna mugavaid ja paraja suurusega jalanõusid;",
            "väldi pikalt paljajalu käimist;",
            "võimalusel väldi täiesti avatud kannaga jalanõusid, sest kand jääb toetamata;",
            "eemalda paksenenud nahka ettevaatlikult, mitte agressiivselt;",
            "sügavamate lõhede korral vali tugevamalt niisutav jalahooldustoode.",
          ],
        },
        {
          paragraphs: [
            "Materjalides soovitatakse igapäevaseks hoolduseks ligikaudu 5-10% uureaga kreemi ning sügavamate lõhede puhul tugevama uureasisaldusega toodet.",
          ],
          note: "Kui kannalõhed on sügavad, valulikud, veritsevad või põletikulised, tuleks pöörduda jalaspetsialisti või arsti poole.",
        },
      ],
    },
    {
      title: "Higistavad jalad",
      sections: [
        {
          paragraphs: [
            "Jalgade higistamine on organismi normaalne reaktsioon soojusele, liikumisele ja stressile. Probleemiks muutub see siis, kui jalad on pidevalt märjad, tekib ebameeldiv lõhn või nahaärritus.",
            "Higistamist võivad mõjutada muu hulgas füüsiline koormus, palav ilm, mittehingavad jalanõud ja sokid, stress, hormonaalsed muutused, mõned haigused ning ravimid.",
          ],
          listTitle: "Igapäevaselt aitab:",
          list: [
            "jalgade pesemine ja hoolikas kuivatamine;",
            "sokkide regulaarne vahetamine;",
            "hingavate jalanõude kandmine;",
            "jalanõude tuulutamine;",
            "jalgadele mõeldud antiperspirandi kasutamine;",
            "vajadusel jaladeodorandi kasutamine;",
            "hoolikas jalanõude hügieen.",
          ],
          note: "Kui higistamine tekib ootamatult, tugevneb märgatavalt või sellega kaasnevad muud sümptomid, tasub pöörduda arsti poole.",
        },
      ],
    },
    {
      title: "Varbavahede lõhed ja võimalik seeninfektsioon",
      sections: [
        {
          paragraphs: [
            "Varbavahede lõhed, ketendus, sügelus või naha haudumine võivad olla seotud liigse niiskuse, hõõrdumise või seeninfektsiooniga.",
          ],
          listTitle: "Koduses hoolduses:",
          list: [
            "pese jalgu iga päev;",
            "kuivata varbavahed väga hoolikalt;",
            "vaheta sokke iga päev;",
            "eelista hingavaid sokke ja jalanõusid;",
            "tuuluta ja vajadusel desinfitseeri jalanõusid;",
            "ära jaga teistega rätikuid, sokke ega jalanõusid;",
            "kanna ujulas, saunas ja ühistes duširuumides plätusid.",
          ],
        },
        {
          paragraphs: [
            "Seeninfektsiooni kahtluse korral võib apteegist küsida sobiva seenevastase preparaadi kohta nõu. Ravi tuleb kasutada vastavalt ravimi kasutusjuhendile.",
          ],
          note: "Kui probleem 1–2 nädala jooksul ei parane, süveneb või lisandub tugev valu, punetus või eritis, tuleks pöörduda podoloogi või arsti poole.",
        },
      ],
    },
    {
      title: "Paksenenud küüned",
      sections: [
        {
          paragraphs: [
            "Küüne paksenemisel võib olla mitmeid põhjuseid. Seda võivad mõjutada näiteks korduvad traumad, jalanõude surve, varvastevaheline hõõrdumine, vananemine, vereringehäired ning mõned haigused.",
            "Oluline on teada, et paksenenud küüs ei tähenda alati küüneseent.",
            "Paksu küüne lõikamine võib kodus olla keeruline. Kasuta tugevaid küünetange ning ära lõika küünt liiga lühikeseks. Väga paksu või valuliku küüne korral on turvalisem lasta seda hooldada jalaspetsialistil.",
            "Igapäevaselt aitab küünte ja neid ümbritseva naha kreemitamine ning mugavate, varvastele piisavalt ruumi jätvate jalanõude kandmine.",
          ],
        },
      ],
    },
    {
      title: "Psoriaas ja jalgade hooldus",
      sections: [
        {
          paragraphs: [
            "Psoriaasi korral vajab nahk regulaarset ja õrna hooldust. Psoriaas ei ole nakkav ning naha seisund võib periooditi paraneda või ägeneda.",
          ],
          listTitle: "Koduses hoolduses:",
          list: [
            "niisuta nahka iga päev;",
            "eelista õrnu ja lõhnavabu nahahooldustooteid;",
            "väldi naha vigastamist ja tugevat hõõrumist;",
            "hoolda regulaarselt jalgu ja küüsi.",
          ],
          note: "Ägenemise, valu või põletiku korral tuleb pöörduda arsti poole.",
        },
      ],
    },
    {
      title: "Diabeetiline jalg vajab erilist tähelepanu",
      sections: [
        {
          paragraphs: [
            "Diabeedi korral on jalgade regulaarne kontroll väga oluline. Vaata iga päev üle: jalatallad, varbavahed ja küüned.",
            "Pane tähele lõhesid, punetust, ville, haavandeid, turset, sissekasvanud küüsi ning naha või küünte värvuse ja kuju muutusi.",
          ],
          listTitle: "Diabeediga inimesele on eriti oluline:",
          list: [
            "pesta jalgu leige veega;",
            "kuivatada varbavahed hoolikalt;",
            "kreemitada jalataldu ja kandu;",
            "lõigata küüsi ettevaatlikult;",
            "kanda mugavaid ja kinniseid jalanõusid;",
            "kontrollida enne jalanõude jalga panemist nende sisemust;",
            "mitte käia paljajalu.",
          ],
        },
        {
          paragraphs: [
            "Käia jalgade kontrollis või jalakabinetis vähemalt kord aastas.",
          ],
          note: "Diabeedi korral tuleks haava, põletiku, värvimuutuse või muu olulise muutuse ilmnemisel pöörduda kiiresti tervishoiutöötaja poole.",
        },
      ],
    },
  ],
  whenTitle: "Millal pöörduda jalaspetsialisti poole?",
  whenIntro: "Jalaspetsialist saab aidata nii olemasoleva probleemi korral kui ka ennetavalt. Abi tasub otsida näiteks siis, kui:",
  whenList: [
    "küüned on paksenenud või neid on raske lõigata;",
    "küüs kasvab sisse või põhjustab valu;",
    "esinevad konnasilmad või tugevad nahapaksendid;",
    "kannad lõhenevad korduvalt;",
    "jalgade nahk on väga kuiv või ketendav;",
    "tekivad varbavahede lõhed;",
    "kahtlustad küüne- või jalaseent;",
    "jalgade hooldamine on vanuse, haiguse või liikumisraskuse tõttu keeruline;",
    "soovid lihtsalt kontrollida oma jalgade ja küünte seisundit.",
  ],
  whenNote: "Probleemi ei pea ootama väga suureks. Õigel ajal märgatud muutust on sageli lihtsam käsitleda.",
  reminderTitle: "Väike meelespea tervete jalgade heaks",
  reminderFormula: "Pese - kuivata - kreemita - kontrolli - vali õiged jalanõud.",
  reminderText: "Need viis lihtsat harjumust aitavad hoida jalad heas seisukorras aastaringselt.",
  closing: "Terved jalad toetavad kogu keha heaolu.\u00a0\nKui Sul on jalgade või küüntega mure, ära jää sellega üksi - küsi nõu jalaspetsialistilt.",
};

const en: AdviceContent = {
  back: "← Back",
  title: "Tips for healthy feet",
  intro1: "Our feet carry us every day, yet we often pay attention to them only when pain, dryness, cracks, nail problems or other discomfort appear.",
  intro2: "Regular foot care helps prevent many problems and notice changes as early as possible. Here you will find simple recommendations for the daily care of your feet, skin and nails.",
  intro3: "If you are not sure which care or product suits your feet, ask a foot care specialist for advice.",
  dailyTitle: "Daily foot care",
  dailyParagraphs: [
    "Wash your feet every day with lukewarm water and a gentle cleanser. Avoid very hot water and harsh detergents, as they can dry out the skin.",
    "Always dry your feet carefully, paying special attention to the areas between the toes. Moist toe spaces promote skin maceration and fungal infections.",
    "Check your soles, toe spaces and nails from time to time. Look for redness, cracks, blisters, ulcers, swelling and changes in nail colour or shape. With diabetes, daily foot checks are especially important.",
    "Prefer comfortable, well-fitting footwear and socks made of breathable material. Socks should be changed daily, more often if needed.",
  ],
  topics: [
    {
      title: "Dry skin on the feet",
      sections: [
        {
          paragraphs: [
            "Dry skin needs regular moisturising. The best time to apply cream is right after washing, while the skin is still slightly damp.",
            "Creams containing 5–10% urea, glycerin, beeswax, shea butter, panthenol or ceramides may be suitable for dry skin care.",
            "Cream can be used once or twice a day depending on the condition of the skin. For very dry skin, you can apply a thicker layer of cream in the evening and put on cotton socks. Dry skin care guides also recommend avoiding hot water, vigorous rubbing of the skin, and choosing comfortable, breathable footwear.",
            "Cream should not be applied between the toes, especially if they tend to be moist.",
          ],
        },
      ],
    },
    {
      title: "Cracked heels",
      sections: [
        {
          paragraphs: [
            "Heel cracks often occur when the skin becomes dry and thickened and the heel is under heavy load.",
          ],
          listTitle: "To prevent and care for cracked heels:",
          list: [
            "moisturise your feet regularly;",
            "wear comfortable, well-fitting footwear;",
            "avoid walking barefoot for long periods;",
            "if possible, avoid fully open-heeled shoes, as the heel is left unsupported;",
            "remove thickened skin gently, not aggressively;",
            "for deeper cracks, choose a more intensely moisturising foot care product.",
          ],
        },
        {
          paragraphs: [
            "For daily care, a cream with about 5–10% urea is recommended, and for deeper cracks a product with a higher urea content.",
          ],
          note: "If heel cracks are deep, painful, bleeding or inflamed, you should see a foot care specialist or a doctor.",
        },
      ],
    },
    {
      title: "Sweaty feet",
      sections: [
        {
          paragraphs: [
            "Foot sweating is the body's normal reaction to heat, movement and stress. It becomes a problem when the feet are constantly wet, an unpleasant odour or skin irritation develops.",
            "Sweating can be affected by physical exertion, hot weather, non-breathable footwear and socks, stress, hormonal changes, certain illnesses and medications.",
          ],
          listTitle: "Daily habits that help:",
          list: [
            "washing and carefully drying the feet;",
            "changing socks regularly;",
            "wearing breathable footwear;",
            "airing out shoes;",
            "using an antiperspirant designed for feet;",
            "using a foot deodorant if needed;",
            "careful footwear hygiene.",
          ],
          note: "If sweating starts unexpectedly, increases noticeably or is accompanied by other symptoms, it is worth seeing a doctor.",
        },
      ],
    },
    {
      title: "Cracks between the toes and possible fungal infection",
      sections: [
        {
          paragraphs: [
            "Cracks, flaking, itching or maceration between the toes may be related to excess moisture, friction or a fungal infection.",
          ],
          listTitle: "In home care:",
          list: [
            "wash your feet every day;",
            "dry the toe spaces very carefully;",
            "change socks every day;",
            "prefer breathable socks and footwear;",
            "air out and, if necessary, disinfect your shoes;",
            "do not share towels, socks or footwear with others;",
            "wear flip-flops in swimming pools, saunas and shared showers.",
          ],
        },
        {
          paragraphs: [
            "If you suspect a fungal infection, you can ask a pharmacy for advice on a suitable antifungal product. Treatment should be used according to the product instructions.",
          ],
          note: "If the problem does not improve within 1–2 weeks, worsens, or is accompanied by severe pain, redness or discharge, you should see a podologist or a doctor.",
        },
      ],
    },
    {
      title: "Thickened nails",
      sections: [
        {
          paragraphs: [
            "Nail thickening can have several causes. It can be affected by repeated trauma, pressure from footwear, friction between the toes, ageing, circulatory disorders and certain illnesses.",
            "It is important to know that a thickened nail does not always mean nail fungus.",
            "Cutting a thick nail at home can be difficult. Use strong nail clippers and do not cut the nail too short. For a very thick or painful nail, it is safer to have it cared for by a foot care specialist.",
            "Daily moisturising of the nails and surrounding skin, and wearing comfortable footwear that leaves enough room for the toes, also helps.",
          ],
        },
      ],
    },
    {
      title: "Psoriasis and foot care",
      sections: [
        {
          paragraphs: [
            "With psoriasis, the skin needs regular and gentle care. Psoriasis is not contagious, and the condition of the skin may improve or flare up periodically.",
          ],
          listTitle: "In home care:",
          list: [
            "moisturise the skin every day;",
            "prefer gentle, fragrance-free skin care products;",
            "avoid injuring the skin and vigorous rubbing;",
            "care for your feet and nails regularly.",
          ],
          note: "In case of flare-ups, pain or inflammation, you should see a doctor.",
        },
      ],
    },
    {
      title: "The diabetic foot needs special attention",
      sections: [
        {
          paragraphs: [
            "With diabetes, regular foot checks are very important. Check every day: the soles, toe spaces and nails.",
            "Look for cracks, redness, blisters, ulcers, swelling, ingrown nails and changes in the colour or shape of the skin or nails.",
          ],
          listTitle: "Especially important for a person with diabetes:",
          list: [
            "wash feet with lukewarm water;",
            "dry the toe spaces carefully;",
            "moisturise the soles and heels;",
            "cut nails carefully;",
            "wear comfortable, closed footwear;",
            "check the inside of shoes before putting them on;",
            "do not walk barefoot.",
          ],
        },
        {
          paragraphs: [
            "Have your feet checked or visit a foot care clinic at least once a year.",
          ],
          note: "With diabetes, if a wound, inflammation, colour change or other significant change appears, you should quickly contact a healthcare professional.",
        },
      ],
    },
  ],
  whenTitle: "When to see a foot care specialist?",
  whenIntro: "A foot care specialist can help both with an existing problem and preventively. It is worth seeking help, for example, when:",
  whenList: [
    "nails are thickened or difficult to cut;",
    "a nail grows in or causes pain;",
    "there are corns or severe calluses;",
    "heels crack repeatedly;",
    "the skin of the feet is very dry or flaky;",
    "cracks appear between the toes;",
    "you suspect nail or foot fungus;",
    "foot care is difficult due to age, illness or reduced mobility;",
    "you simply want to check the condition of your feet and nails.",
  ],
  whenNote: "You don't have to wait for a problem to become very big. A change noticed in time is often easier to treat.",
  reminderTitle: "A little reminder for healthy feet",
  reminderFormula: "Wash – dry – moisturise – check – choose the right footwear.",
  reminderText: "These five simple habits help keep your feet in good condition all year round.",
  closing: "Healthy feet support the well-being of the whole body. If you have a concern with your feet or nails, don't stay alone with it – ask a foot care specialist for advice.",
};

const ru: AdviceContent = {
  back: "← Назад",
  title: "Советы для здоровых ног",
  intro1: "Наши ноги несут нас каждый день, но часто мы обращаем на них внимание только тогда, когда появляется боль, сухость, трещины, проблемы с ногтями или другой дискомфорт.",
  intro2: "Регулярный уход за ногами помогает предотвратить многие проблемы и заметить изменения как можно раньше. Здесь вы найдёте простые рекомендации по ежедневному уходу за ногами, кожей и ногтями.",
  intro3: "Если вы не уверены, какой уход или средство подходит именно вашим ногам, спросите совета у специалиста по уходу за ногами.",
  dailyTitle: "Ежедневный уход за ногами",
  dailyParagraphs: [
    "Мойте ноги каждый день тёплой водой с мягким моющим средством. Избегайте очень горячей воды и агрессивных моющих средств, так как они могут сушить кожу.",
    "Всегда тщательно вытирайте ноги, уделяя особое внимание межпальцевым промежуткам. Влажные межпальцевые промежутки способствуют мацерации кожи и развитию грибковых инфекций.",
    "Время от времени проверяйте стопы, межпальцевые промежутки и ногти. Обращайте внимание на покраснения, трещины, волдыри, язвы, отёки, а также на изменения цвета или формы ногтей. При диабете ежедневный осмотр ног особенно важен.",
    "Отдавайте предпочтение удобной обуви подходящего размера и носкам из дышащего материала. Носки следует менять каждый день, при необходимости чаще.",
  ],
  topics: [
    {
      title: "Сухая кожа ног",
      sections: [
        {
          paragraphs: [
            "Сухая кожа нуждается в регулярном увлажнении. Лучше всего наносить крем сразу после мытья, когда кожа ещё слегка влажная.",
            "Для ухода за сухой кожей могут подойти кремы, содержащие 5–10% мочевины, глицерин, пчелиный воск, масло ши, пантенол или церамиды.",
            "Крем можно использовать один-два раза в день в зависимости от состояния кожи. При очень сухой коже можно вечером нанести на ноги более толстый слой крема и надеть хлопковые носки. Руководства по уходу за сухой кожей также рекомендуют избегать горячей воды, сильного трения кожи и выбирать удобную дышащую обувь.",
            "Крем не наносят между пальцами, особенно если они склонны к влажности.",
          ],
        },
      ],
    },
    {
      title: "Трещины на пятках",
      sections: [
        {
          paragraphs: [
            "Трещины на пятках часто возникают, когда кожа становится сухой и утолщённой, а на пятку приходится большая нагрузка.",
          ],
          listTitle: "Для профилактики и ухода за трещинами на пятках:",
          list: [
            "регулярно увлажняйте ноги;",
            "носите удобную обувь подходящего размера;",
            "избегайте длительной ходьбы босиком;",
            "по возможности избегайте обуви с полностью открытой пяткой, так как пятка остаётся без поддержки;",
            "удаляйте утолщённую кожу осторожно, не агрессивно;",
            "при более глубоких трещинах выбирайте более интенсивно увлажняющее средство для ухода за ногами.",
          ],
        },
        {
          paragraphs: [
            "Для ежедневного ухода рекомендуется крем с содержанием мочевины около 5–10%, а при более глубоких трещинах — средство с более высоким содержанием мочевины.",
          ],
          note: "Если трещины на пятках глубокие, болезненные, кровоточат или воспалены, следует обратиться к специалисту по уходу за ногами или к врачу.",
        },
      ],
    },
    {
      title: "Потливость ног",
      sections: [
        {
          paragraphs: [
            "Потливость ног — это нормальная реакция организма на тепло, движение и стресс. Проблемой она становится, когда ноги постоянно влажные, появляется неприятный запах или раздражение кожи.",
            "На потливость могут влиять физическая нагрузка, жаркая погода, недышащая обувь и носки, стресс, гормональные изменения, некоторые заболевания и лекарства.",
          ],
          listTitle: "Ежедневно помогает:",
          list: [
            "мытьё ног и тщательное высушивание;",
            "регулярная смена носков;",
            "ношение дышащей обуви;",
            "проветривание обуви;",
            "использование антиперспиранта для ног;",
            "при необходимости использование дезодоранта для ног;",
            "тщательная гигиена обуви.",
          ],
          note: "Если потливость возникает неожиданно, заметно усиливается или сопровождается другими симптомами, стоит обратиться к врачу.",
        },
      ],
    },
    {
      title: "Трещины между пальцами и возможная грибковая инфекция",
      sections: [
        {
          paragraphs: [
            "Трещины, шелушение, зуд или мацерация кожи между пальцами могут быть связаны с избыточной влажностью, трением или грибковой инфекцией.",
          ],
          listTitle: "В домашнем уходе:",
          list: [
            "мойте ноги каждый день;",
            "очень тщательно высушивайте межпальцевые промежутки;",
            "меняйте носки каждый день;",
            "отдавайте предпочтение дышащим носкам и обуви;",
            "проветривайте и при необходимости дезинфицируйте обувь;",
            "не делитесь с другими полотенцами, носками или обувью;",
            "носите сланцы в бассейне, сауне и общих душевых.",
          ],
        },
        {
          paragraphs: [
            "При подозрении на грибковую инфекцию можно спросить в аптеке совет о подходящем противогрибковом средстве. Лечение следует применять в соответствии с инструкцией по применению препарата.",
          ],
          note: "Если проблема не улучшается в течение 1–2 недель, усугубляется или добавляется сильная боль, покраснение или выделения, следует обратиться к подологу или врачу.",
        },
      ],
    },
    {
      title: "Утолщённые ногти",
      sections: [
        {
          paragraphs: [
            "У утолщения ногтя может быть несколько причин. На это могут влиять повторные травмы, давление обуви, трение между пальцами, старение, нарушения кровообращения и некоторые заболевания.",
            "Важно знать, что утолщённый ноготь не всегда означает грибок ногтя.",
            "Стрижка толстого ногтя в домашних условиях может быть сложной. Используйте прочные кусачки для ногтей и не срезайте ноготь слишком коротко. При очень толстом или болезненном ногте безопаснее доверить уход специалисту по уходу за ногами.",
            "Ежедневно помогает увлажнение ногтей и окружающей их кожи, а также ношение удобной обуви, оставляющей достаточно места для пальцев.",
          ],
        },
      ],
    },
    {
      title: "Псориаз и уход за ногами",
      sections: [
        {
          paragraphs: [
            "При псориазе кожа нуждается в регулярном и бережном уходе. Псориаз не заразен, и состояние кожи может периодически улучшаться или обостряться.",
          ],
          listTitle: "В домашнем уходе:",
          list: [
            "увлажняйте кожу каждый день;",
            "отдавайте предпочтение мягким средствам по уходу за кожей без отдушек;",
            "избегайте травмирования кожи и сильного трения;",
            "регулярно ухаживайте за ногами и ногтями.",
          ],
          note: "При обострении, боли или воспалении следует обратиться к врачу.",
        },
      ],
    },
    {
      title: "Диабетическая стопа требует особого внимания",
      sections: [
        {
          paragraphs: [
            "При диабете регулярный осмотр ног очень важен. Проверяйте каждый день: стопы, межпальцевые промежутки и ногти.",
            "Обращайте внимание на трещины, покраснения, волдыри, язвы, отёки, вросшие ногти, а также на изменения цвета и формы кожи или ногтей.",
          ],
          listTitle: "Для человека с диабетом особенно важно:",
          list: [
            "мыть ноги тёплой водой;",
            "тщательно высушивать межпальцевые промежутки;",
            "увлажнять стопы и пятки;",
            "осторожно подстригать ногти;",
            "носить удобную и закрытую обувь;",
            "проверять внутреннюю часть обуви перед надеванием;",
            "не ходить босиком.",
          ],
        },
        {
          paragraphs: [
            "Проходить осмотр ног или посещать кабинет ухода за ногами не реже одного раза в год.",
          ],
          note: "При диабете при появлении раны, воспаления, изменения цвета или другого существенного изменения следует быстро обратиться к медицинскому работнику.",
        },
      ],
    },
  ],
  whenTitle: "Когда обращаться к специалисту по уходу за ногами?",
  whenIntro: "Специалист по уходу за ногами может помочь как при существующей проблеме, так и в профилактических целях. За помощью стоит обратиться, например, когда:",
  whenList: [
    "ногти утолщены или их трудно подстричь;",
    "ноготь врастает или вызывает боль;",
    "есть мозоли или сильные натоптыши;",
    "пятки постоянно трескаются;",
    "кожа ног очень сухая или шелушится;",
    "появляются трещины между пальцами;",
    "вы подозреваете грибок ногтей или стоп;",
    "уход за ногами затруднён из-за возраста, болезни или ограниченной подвижности;",
    "вы просто хотите проверить состояние своих ног и ногтей.",
  ],
  whenNote: "Не нужно ждать, пока проблема станет очень большой. Вовремя замеченное изменение часто легче устранить.",
  reminderTitle: "Небольшая памятка для здоровых ног",
  reminderFormula: "Мой – суши – увлажняй – проверяй – выбирай правильную обувь.",
  reminderText: "Эти пять простых привычек помогают поддерживать ноги в хорошем состоянии круглый год.",
  closing: "Здоровые ноги поддерживают благополучие всего организма. Если у вас есть проблемы с ногами или ногтями, не оставайтесь с этим наедине – спросите совета у специалиста по уходу за ногами.",
};

const fi: AdviceContent = {
  back: "← Takaisin",
  title: "Vinkkejä terveille jaloille",
  intro1: "Jalkamme kantavat meitä joka päivä, mutta usein kiinnitämme niihin huomiota vasta, kun ilmaantuu kipua, kuivuutta, halkeamia, kynsiongelmia tai muuta epämukavuutta.",
  intro2: "Säännöllinen jalkojen hoito auttaa ehkäisemään monia ongelmia ja huomaamaan muutokset mahdollisimman varhaisessa vaiheessa. Täältä löydät yksinkertaisia suosituksia jalkojen, ihon ja kynsien päivittäiseen hoitoon.",
  intro3: "Jos et ole varma, mikä hoito tai tuote sopii juuri sinun jaloillesi, kysy neuvoa jalkojenhoitoalan ammattilaiselta.",
  dailyTitle: "Jalkojen päivittäinen hoito",
  dailyParagraphs: [
    "Pese jalat joka päivä haalealla vedellä ja miedolla pesuaineella. Vältä erittäin kuumaa vettä ja voimakkaita pesuaineita, sillä ne voivat kuivattaa ihoa.",
    "Kuivaa jalat aina huolellisesti, kiinnittäen erityistä huomiota varvasväleihin. Kosteat varvasvälit edistävät ihon maserointia ja sieni-infektioiden syntyä.",
    "Tarkista ajoittain myös jalkapohjat, varvasvälit ja kynnet. Kiinnitä huomiota punoitukseen, halkeamiin, rakkuloihin, haavaumiin, turvotukseen sekä kynsien värin tai muodon muutoksiin. Diabeteksessa jalkojen päivittäinen tarkistus on erityisen tärkeää.",
    "Suosi mukavia ja oikeankokoisia jalkineita sekä hengittävästä materiaalista valmistettuja sukkia. Sukat tulisi vaihtaa joka päivä, tarvittaessa useamminkin.",
  ],
  topics: [
    {
      title: "Kuiva jalkojen iho",
      sections: [
        {
          paragraphs: [
            "Kuiva iho tarvitsee säännöllistä kosteutusta. Paras aika voidella jalat on heti pesun jälkeen, kun iho on vielä hieman kostea.",
            "Kuivan ihon hoitoon voivat sopia esimerkiksi voiteet, jotka sisältävät 5–10 % ureaa, glyseriiniä, mehiläisvahaa, sheavoita, pantenolia tai keramideja.",
            "Voidetta voi käyttää yhdestä kahteen kertaan päivässä ihon kunnon mukaan. Erittäin kuivan ihon kohdalla voi illalla levittää jalkoihin paksumman voidekerroksen ja laittaa jalkaan puuvillasukat. Kuivan ihon hoito-ohjeissa suositellaan myös välttämään kuumaa vettä, ihon voimakasta hankaamista sekä valitsemaan mukavat ja hengittävät jalkineet.",
            "Voidetta ei laiteta varvasväleihin, erityisesti jos ne ovat taipuvaisia kosteuteen.",
          ],
        },
      ],
    },
    {
      title: "Kantapäiden halkeamat",
      sections: [
        {
          paragraphs: [
            "Kantapäiden halkeamat syntyvät usein silloin, kun iho muuttuu kuivaksi ja paksuuntuu ja kantapäähän kohdistuu suuri kuormitus.",
          ],
          listTitle: "Kantapäiden halkeamien ehkäisemiseksi ja hoitamiseksi:",
          list: [
            "voitele jalkoja säännöllisesti;",
            "käytä mukavia ja oikeankokoisia jalkineita;",
            "vältä pitkäaikaista paljain jaloin kävelyä;",
            "mahdollisuuksien mukaan vältä täysin avokantaisia jalkineita, sillä kantapää jää ilman tukea;",
            "poista paksuuntunut iho varovasti, ei aggressiivisesti;",
            "syvempien halkeamien kohdalla valitse voimakkaammin kosteuttava jalkojenhoitotuote.",
          ],
        },
        {
          paragraphs: [
            "Päivittäiseen hoitoon suositellaan noin 5–10 % ureaa sisältävää voidetta ja syvempiin halkeamiin suuremman urea-pitoisuuden tuotetta.",
          ],
          note: "Jos kantapäiden halkeamat ovat syviä, kivuliaita, verenvuotavia tai tulehtuneita, tulee kääntyä jalkojenhoitoalan ammattilaisen tai lääkärin puoleen.",
        },
      ],
    },
    {
      title: "Hikoilevat jalat",
      sections: [
        {
          paragraphs: [
            "Jalkojen hikoilu on kehon normaali reaktio kuumuuteen, liikuntaan ja stressiin. Ongelmaksi se muuttuu silloin, kun jalat ovat jatkuvasti märät, ilmaantuu epämiellyttävää hajua tai ihoärsytystä.",
            "Hikoiluun voivat vaikuttaa muun muassa fyysinen kuormitus, kuuma sää, hengittämättömät jalkineet ja sukat, stressi, hormonaaliset muutokset, jotkin sairaudet sekä lääkitykset.",
          ],
          listTitle: "Päivittäin auttaa:",
          list: [
            "jalkojen pesu ja huolellinen kuivaaminen;",
            "sukkien säännöllinen vaihtaminen;",
            "hengittävien jalkineiden käyttö;",
            "jalkineiden tuuletus;",
            "jaloille tarkoitetun antiperspirantin käyttö;",
            "tarvittaessa jalkadeodorantin käyttö;",
            "huolellinen jalkineiden hygienia.",
          ],
          note: "Jos hikoilu alkaa odottamatta, voimistuu selvästi tai siihen liittyy muita oireita, kannattaa kääntyä lääkärin puoleen.",
        },
      ],
    },
    {
      title: "Varvasvälien halkeamat ja mahdollinen sieni-infektio",
      sections: [
        {
          paragraphs: [
            "Varvasvälien halkeamat, hilseily, kutina tai ihon maserointi voivat liittyä liialliseen kosteuteen, hankaukseen tai sieni-infektioon.",
          ],
          listTitle: "Kotihoidossa:",
          list: [
            "pese jalat joka päivä;",
            "kuivaa varvasvälit erittäin huolellisesti;",
            "vaihda sukat joka päivä;",
            "suosi hengittäviä sukkia ja jalkineita;",
            "tuuleta ja tarvittaessa desinfioi jalkineet;",
            "älä jaa muiden kanssa pyyhkeitä, sukkia tai jalkineita;",
            "käytä varvastossuja uimahallissa, saunassa ja yhteisissä suihkuissa.",
          ],
        },
        {
          paragraphs: [
            "Sieni-infektioepäilyn kohdalla apteekista voi kysyä neuvoa sopivasta sienilääkkeestä. Hoitoa tulee käyttää lääkkeen käyttöohjeen mukaisesti.",
          ],
          note: "Jos ongelma ei parane 1–2 viikon kuluessa, pahenee tai siihen liittyy voimakasta kipua, punoitusta tai eritettä, tulee kääntyä jalkaterapeutin tai lääkärin puoleen.",
        },
      ],
    },
    {
      title: "Paksuuntuneet kynnet",
      sections: [
        {
          paragraphs: [
            "Kynsen paksuuntumisella voi olla useita syitä. Siihen voivat vaikuttaa esimerkiksi toistuvat vammat, jalkineiden paine, varpaiden välinen hankaus, ikääntyminen, verenkiertohäiriöt sekä jotkin sairaudet.",
            "On tärkeää tietää, että paksuuntunut kynsi ei aina tarkoita kynsisientä.",
            "Paksun kynsen leikkaaminen voi olla kotona vaikeaa. Käytä vahvoja kynsipihdit ja älä leikkaa kynttä liian lyhyeksi. Erittäin paksun tai kivuliaan kynsen kohdalla on turvallisempaa antaa jalkojenhoitoalan ammattilaisen hoitaa se.",
            "Päivittäin auttaa kynsien ja niitä ympäröivän ihon voitelu sekä mukavien, varpaille riittävästi tilaa jättävien jalkineiden käyttö.",
          ],
        },
      ],
    },
    {
      title: "Psoriaasi ja jalkojen hoito",
      sections: [
        {
          paragraphs: [
            "Psoriaasin kohdalla iho tarvitsee säännöllistä ja hellävaraista hoitoa. Psoriaasi ei ole tarttuva, ja ihon kunto voi jaksoittain parantua tai pahentua.",
          ],
          listTitle: "Kotihoidossa:",
          list: [
            "kosteuta ihoa joka päivä;",
            "suosi mietoja ja hajusteettomia ihonhoitotuotteita;",
            "vältä ihon vaurioitumista ja voimakasta hankaamista;",
            "hoida säännöllisesti jalkoja ja kynsiä.",
          ],
          note: "Pahenemisen, kivun tai tulehduksen kohdalla tulee kääntyä lääkärin puoleen.",
        },
      ],
    },
    {
      title: "Diabeetikon jalka tarvitsee erityistä huomiota",
      sections: [
        {
          paragraphs: [
            "Diabeteksessa jalkojen säännöllinen tarkistus on erittäin tärkeää. Tarkista joka päivä: jalkapohjat, varvasvälit ja kynnet.",
            "Kiinnitä huomiota halkeamiin, punoitukseen, rakkuloihin, haavaumiin, turvotukseen, sisäänkasvaneisiin kynsiin sekä ihon tai kynsien värin ja muodon muutoksiin.",
          ],
          listTitle: "Diabeetikolle on erityisen tärkeää:",
          list: [
            "pestä jalat haalealla vedellä;",
            "kuivata varvasvälit huolellisesti;",
            "voidella jalkapohjat ja kantapäät;",
            "leikata kynnet varovasti;",
            "käyttää mukavia ja suljettuja jalkineita;",
            "tarkistaa jalkineiden sisäpuoli ennen jalkaan laittamista;",
            "olla kävelemättä paljain jaloin.",
          ],
        },
        {
          paragraphs: [
            "Käydä jalkojen tarkistuksessa tai jalkahoitolassa vähintään kerran vuodessa.",
          ],
          note: "Diabeteksessa haavan, tulehduksen, värimuutoksen tai muun merkittävän muutoksen ilmaantuessa tulee nopeasti kääntyä terveydenhuollon ammattilaisen puoleen.",
        },
      ],
    },
  ],
  whenTitle: "Milloin kääntyä jalkojenhoitoalan ammattilaisen puoleen?",
  whenIntro: "Jalkojenhoitoalan ammattilainen voi auttaa sekä olemassa olevan ongelman kohdalla että ennaltaehkäisevästi. Apua kannattaa hakea esimerkiksi silloin, kun:",
  whenList: [
    "kynnet ovat paksuuntuneet tai niitä on vaikea leikata;",
    "kynsi kasvaa sisään tai aiheuttaa kipua;",
    "esiintyy känsiä tai voimakkaita ihon paksuuntumia;",
    "kantapäät halkeilevat toistuvasti;",
    "jalkojen iho on erittäin kuiva tai hilseilevä;",
    "varvasväleihin ilmaantuu halkeamia;",
    "epäilet kynsi- tai jalkasientä;",
    "jalkojen hoitaminen on iän, sairauden tai liikuntarajoitteiden vuoksi vaikeaa;",
    "haluat yksinkertaisesti tarkistuttaa jalkojesi ja kynsiesi kunnon.",
  ],
  whenNote: "Ongelman ei tarvitse odottaa kasvavan kovin suureksi. Oikeaan aikaan huomattu muutos on usein helpompi käsitellä.",
  reminderTitle: "Pieni muistutus terveille jaloille",
  reminderFormula: "Pese – kuivaa – voitele – tarkista – valitse oikeat jalkineet.",
  reminderText: "Nämä viisi yksinkertaista tapaa auttavat pitämään jalat hyvässä kunnossa ympäri vuoden.",
  closing: "Terveet jalat tukevat koko kehon hyvinvointia. Jos sinulla on huoli jalkojesi tai kynsiesi kanssa, älä jää sen kanssa yksin – kysy neuvoa jalkojenhoitoalan ammattilaiselta.",
};

export const nouandedContent: Record<Language, AdviceContent> = { et, en, ru, fi };
