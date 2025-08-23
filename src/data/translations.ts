export interface LocationTranslations {
  name: string;
  info: string;
  audience: string;
}

export interface LocationData {
  [key: string]: {
    en: LocationTranslations;
    ru: LocationTranslations;
    kz: LocationTranslations;
  };
}

export const locationTranslations: LocationData = {
  "KazRecycleService LLP": {
    en: {
      name: "KazRecycleService LLP",
      info: "♻️ Large recycling center for businesses! We accept plastic bottles, cardboard boxes, and all types of metal. Help us keep Astana clean by bringing your bulk recyclables here.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "ТОО KazRecycleService",
      info: "♻️ Крупный центр переработки для бизнеса! Мы принимаем пластиковые бутылки, картонные коробки и все виды металла. Помогите нам содержать Астану в чистоте, принося сюда ваши объемные отходы.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "KazRecycleService ЖШС",
      info: "♻️ Бизнес үшін үлкен қайта өңдеу орталығы! Біз пластик бөтелкелер, картон жәшіктер және барлық түрдегі металдарды қабылдаймыз. Астананы таза ұстауға көмектесіңіз, көлемді қайта пайдаланылатын материалдарыңызды осында әкеліңіз.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "LS Ecolife (LS Astana hub – Saryarqa 31A)": {
    en: {
      name: "LS Ecolife (LS Astana hub – Saryarqa 31A)",
      info: "🌱 Your one-stop recycling hub! We collect everything: plastic bottles, aluminum cans, paper, glass, and more. Perfect for businesses and large quantities. Let's make Astana greener together!",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "LS Ecolife (Хаб LS Astana – Сарыарка 31А)",
      info: "🌱 Ваш универсальный центр переработки! Мы собираем все: пластиковые бутылки, алюминиевые банки, бумагу, стекло и многое другое. Идеально подходит для бизнеса и больших объемов. Давайте вместе сделаем Астану зеленее!",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "LS Ecolife (LS Astana хабі – Сарыарқа 31А)",
      info: "🌱 Сіздің бір орынды қайта өңдеу орталығыңыз! Біз бәрін жинаймыз: пластик бөтелкелер, алюминий банкалар, қағаз, шыны және басқа да. Бизнес және үлкен көлемдер үшін тамаша. Астананы бірге жасыл етейік!",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Astana Taza Alem": {
    en: {
      name: "Astana Taza Alem",
      info: "🏛️ City recycling partner! We work with local businesses to collect cardboard, paper, glass, and metals. Contact us for container service and regular pickups. Building a cleaner Astana!",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Астана Таза Алем",
      info: "🏛️ Городской партнер по переработке! Мы работаем с местными предприятиями по сбору картона, бумаги, стекла и металлов. Свяжитесь с нами для контейнерного обслуживания и регулярного вывоза. Строим более чистую Астану!",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Астана Таза Әлем",
      info: "🏛️ Қалалық қайта өңдеу серіктесі! Біз жергілікті кәсіпорындармен картон, қағаз, шыны және металдарды жинау бойынша жұмыс істейміз. Контейнер қызметі және тұрақты алу үшін бізбен байланысыңыз. Таза Астана құру!",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Taza Qala – Taza El": {
    en: {
      name: "Taza Qala – Taza El",
      info: "🔋 Metal recycling experts! We buy scrap metal, colored metals, glass, and old batteries. Get paid for your recyclables while helping the environment. We issue official weigh tickets!",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Таза Қала – Таза Ел",
      info: "🔋 Эксперты по переработке металлов! Мы покупаем лом черных металлов, цветные металлы, стекло и старые аккумуляторы. Получайте деньги за ваши отходы, помогая окружающей среде. Мы выдаем официальные весовые талоны!",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Таза Қала – Таза Ел",
      info: "🔋 Металл қайта өңдеу саласының мамандары! Біз қара металл қоқысын, түсті металдарды, шыныны және ескі батареяларды сатып аламыз. Қоршаған ортаға көмектесіп, қайта пайдаланылатын материалдарыңыз үшін ақша алыңыз. Біз ресми салмақ талондарын шығарамыз!",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "AstanaQagazy": {
    en: {
      name: "AstanaQagazy",
      info: "📄 Paper recycling specialists! We focus on cardboard boxes, office paper, and old archives. Self-pickup available for large volumes. Turn your paper waste into new products!",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "АстанаҚағазы",
      info: "📄 Специалисты по переработке бумаги! Мы специализируемся на картонных коробках, офисной бумаге и старых архивах. Доступен самовывоз для больших объемов. Превратите ваши бумажные отходы в новые продукты!",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "АстанаҚағазы",
      info: "📄 Қағаз қайта өңдеу саласының мамандары! Біз картон жәшіктер, кеңсе қағазы және ескі мұрағаттарға маманданған. Үлкен көлемдер үшін өздігінен алу қолжетімді. Қағаз қоқысыңызды жаңа өнімдерге айналдырыңыз!",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Eco Polygon of Astana": {
    en: {
      name: "Eco Polygon of Astana",
      info: "🏭 Industrial waste management center! We handle large industrial loads and construction debris. Contact us first for special arrangements. Helping businesses dispose of waste responsibly!",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Эко Полигон Астаны",
      info: "🏭 Центр управления промышленными отходами! Мы обрабатываем крупные промышленные грузы и строительный мусор. Свяжитесь с нами заранее для специальных договоренностей. Помогаем предприятиям ответственно утилизировать отходы!",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Астананың Эко Полигоны",
      info: "🏭 Өнеркәсіптік қоқыс басқару орталығы! Біз үлкен өнеркәсіптік жүктер мен құрылыс қоқысын өңдейміз. Арнайы келісімдер үшін алдын ала бізбен байланысыңыз. Кәсіпорындарға қоқысты жауапкершілікпен жоюға көмектесу!",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "LS Ecolife kiosk (Saryarqa 31A)": {
    en: {
      name: "LS Ecolife kiosk (Saryarqa 31A)",
      info: "🌿 Friendly recycling kiosk! Drop off your plastic bottles, aluminum cans, paper, and glass. Our staff is here to help! Open daily for your recycling needs.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Сарыарка 31А)",
      info: "🌿 Дружелюбный киоск переработки! Сдавайте пластиковые бутылки, алюминиевые банки, бумагу и стекло. Наш персонал здесь, чтобы помочь! Открыт ежедневно для ваших нужд в переработке.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Сарыарқа 31А)",
      info: "🌿 Достық қайта өңдеу киоскі! Пластик бөтелкелеріңізді, алюминий банкаларыңызды, қағазыңызды және шыныңызды тапсырыңыз. Біздің қызметкерлер көмектесуге мұнда! Қайта өңдеу қажеттіліктеріңіз үшін күнделікті ашық.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Teljan Shonanuly 36/1a)": {
    en: {
      name: "LS Ecolife kiosk (Teljan Shonanuly 36/1a)",
      info: "💚 Convenient neighborhood recycling! Bring your plastic bottles, paper, small metals, and glass. Easy access, friendly service. Every small action helps our planet!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Тельжан Шонанулы 36/1а)",
      info: "💚 Удобная переработка по соседству! Приносите пластиковые бутылки, бумагу, мелкие металлы и стекло. Легкий доступ, дружелюбное обслуживание. Каждое маленькое действие помогает нашей планете!",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Телжан Шонанулы 36/1а)",
      info: "💚 Қасындағы ыңғайлы қайта өңдеу! Пластик бөтелкелеріңізді, қағазыңызды, ұсақ металдарыңызды және шыныңызды әкеліңіз. Оңай кіру, достық қызмет. Әрбір кіші әрекет біздің планетаға көмектеседі!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Manas 11/4)": {
    en: {
      name: "LS Ecolife kiosk (Manas 11/4)",
      info: "♻️ Community recycling spot! Accepting plastic bottles, paper, small metals, and glass. Located in a convenient area. Join us in keeping Astana beautiful!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Манас 11/4)",
      info: "♻️ Общественная точка переработки! Принимаем пластиковые бутылки, бумагу, мелкие металлы и стекло. Расположен в удобном месте. Присоединяйтесь к нам в сохранении красоты Астаны!",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Манас 11/4)",
      info: "♻️ Қоғамдық қайта өңдеу нүктесі! Пластик бөтелкелер, қағаз, ұсақ металдар және шыны қабылдаймыз. Ыңғайлы жерде орналасқан. Астананың сұлулығын сақтауда бізге қосылыңыз!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Mustafina 17/1)": {
    en: {
      name: "LS Ecolife kiosк (Mustafina 17/1)",
      info: "🌱 Local recycling kiosk! We welcome your plastic bottles, paper, small metals, and glass. Easy to find, always open. Let's recycle together!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Мустафина 17/1)",
      info: "🌱 Местный киоск переработки! Мы приветствуем ваши пластиковые бутылки, бумагу, мелкие металлы и стекло. Легко найти, всегда открыт. Давайте перерабатывать вместе!",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Мустафина 17/1)",
      info: "🌱 Жергілікті қайта өңдеу киоскі! Біз сіздің пластик бөтелкелеріңізді, қағазыңызды, ұсақ металдарыңызды және шыныңызды қарсы аламыз. Табу оңай, әрқашан ашық. Бірге қайта өңдейік!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM (Astana Airport)": {
    en: {
      name: "Sparklo RVM (Astana Airport)",
      info: "✈️ Airport recycling machine! Drop off your plastic bottles and aluminum cans before your flight. Earn points in the Sparklo app while helping the environment. Travel green!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM (Аэропорт Астаны)",
      info: "✈️ Аэропортовый автомат переработки! Сдавайте пластиковые бутылки и алюминиевые банки перед полетом. Зарабатывайте баллы в приложении Sparklo, помогая окружающей среде. Путешествуйте экологично!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM (Астана Әуежайы)",
      info: "✈️ Әуежай қайта өңдеу машинасы! Ұшуға дейін пластик бөтелкелеріңізді және алюминий банкаларыңызды тапсырыңыз. Қоршаған ортаға көмектесіп, Sparklo қосымшасында ұпай жинаңыз. Жасыл саяхаттаңыз!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM (Keruen Mall)": {
    en: {
      name: "Sparklo RVM (Keruen Mall)",
      info: "🛍️ Shopping mall recycling! Recycle your bottles and cans while shopping. Earn Sparklo points and help keep our mall clean. Convenient and rewarding!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM (ТЦ Керуен)",
      info: "🛍️ Переработка в торговом центре! Перерабатывайте бутылки и банки во время покупок. Зарабатывайте баллы Sparklo и помогайте содержать наш торговый центр в чистоте. Удобно и выгодно!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM (Керуен ДД)",
      info: "🛍️ Сауда орталығындағы қайта өңдеу! Дүкенге барып жүргенде бөтелкелеріңізді және банкаларыңызды қайта өңдеңіз. Sparklo ұпайларын жинаңыз және біздің сауда орталығын таза ұстауға көмектесіңіз. Ыңғайлы және пайдалы!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Likekomek charity bin (Turan 55A)": {
    en: {
      name: "Likekomek charity bin (Turan 55A)",
      info: "👕 24/7 clothing donation! Give your clean clothes, shoes, and bedding a second life. Help those in need while reducing textile waste. Always open for donations!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Благотворительный ящик Likekomek (Туран 55А)",
      info: "👕 Круглосуточное пожертвование одежды! Дайте вашей чистой одежде, обуви и постельному белью вторую жизнь. Помогите нуждающимся, сокращая текстильные отходы. Всегда открыт для пожертвований!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Likekomek қайырымдылық жәшігі (Тұран 55А)",
      info: "👕 24/7 киім сыйлығы! Таза киіміңізге, аяқ киіміңізге және төсек орындығыңызға екінші өмір беріңіз. Тоқыма қоқысын азайтып, қажеттілерге көмектесіңіз. Сыйлықтар үшін әрқашан ашық!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "ALGYS charity bin (central)": {
    en: {
      name: "ALGYS charity bin (central)",
      info: "❤️ Central donation center! Accepting clothing, shoes, linens, and small household items. Your donations help families in need. Located in the heart of Astana!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Благотворительный ящик АЛГЫС (центральный)",
      info: "❤️ Центральный центр пожертвований! Принимаем одежду, обувь, белье и мелкие бытовые вещи. Ваши пожертвования помогают нуждающимся семьям. Расположен в сердце Астаны!",
      audience: "Общественный прием"
    },
    kz: {
      name: "АЛГЫС қайырымдылық жәшігі (орталық)",
      info: "❤️ Орталық сыйлық орталығы! Киім, аяқ киім, кір жуу және ұсақ үй шаруашылығы заттарын қабылдаймыз. Сіздің сыйлықтарыңыз қажетті отбасыларға көмектеседі. Астананың жүрегінде орналасқан!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Eco Paper (Zhanazhol 20/3)": {
    en: {
      name: "Eco Paper (Zhanazhol 20/3)",
      info: "📚 Late-night recycling! We buy back paper, cardboard, plastic bottles, and aluminum cans. Often open late for your convenience. Get paid for your recyclables!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Эко Бумага (Жанажол 20/3)",
      info: "📚 Ночная переработка! Мы выкупаем бумагу, картон, пластиковые бутылки и алюминиевые банки. Часто работаем допоздна для вашего удобства. Получайте деньги за ваши отходы!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Эко Қағаз (Жаңажол 20/3)",
      info: "📚 Түнгі қайта өңдеу! Біз қағаз, картон, пластик бөтелкелер және алюминий банкаларды сатып аламыз. Сіздің ыңғайлылығыңыз үшін көбіне кешке дейін ашық. Қайта пайдаланылатын материалдарыңыз үшін ақша алыңыз!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Turan 55d": {
    en: {
      name: "Sparklo RVM – Turan 55d",
      info: "🎯 Smart recycling machine! Drop off your plastic bottles and aluminum cans. Earn points in the Sparklo app while helping the environment. Easy and rewarding!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Туран 55д",
      info: "🎯 Умная машина переработки! Сдавайте пластиковые бутылки и алюминиевые банки. Зарабатывайте баллы в приложении Sparklo, помогая окружающей среде. Легко и выгодно!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Тұран 55д",
      info: "🎯 Ақылды қайта өңдеу машинасы! Пластик бөтелкелеріңізді және алюминий банкаларыңызды тапсырыңыз. Қоршаған ортаға көмектесіп, Sparklo қосымшасында ұпай жинаңыз. Оңай және пайдалы!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Konaev 10": {
    en: {
      name: "Sparklo RVM – Konaev 10",
      info: "♻️ Neighborhood recycling machine! Recycle your bottles and cans here. Earn Sparklo points and contribute to a cleaner Astana. Conveniently located!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Конаев 10",
      info: "♻️ Машина переработки по соседству! Перерабатывайте здесь бутылки и банки. Зарабатывайте баллы Sparklo и вносите вклад в более чистую Астану. Удобно расположен!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Конаев 10",
      info: "♻️ Қасындағы қайта өңдеу машинасы! Бөтелкелеріңізді және банкаларыңызды осында қайта өңдеңіз. Sparklo ұпайларын жинаңыз және таза Астанаға үлес қосыңыз. Ыңғайлы орналасқан!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Kordai 6": {
    en: {
      name: "Sparklo RVM – Kordai 6",
      info: "🌿 Community recycling machine! Drop off your plastic bottles and aluminum cans. Earn points while helping the environment. Every bottle counts!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Кордай 6",
      info: "🌿 Общественная машина переработки! Сдавайте пластиковые бутылки и алюминиевые банки. Зарабатывайте баллы, помогая окружающей среде. Каждая бутылка имеет значение!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Қордай 6",
      info: "🌿 Қоғамдық қайта өңдеу машинасы! Пластик бөтелкелеріңізді және алюминий банкаларыңызды тапсырыңыз. Қоршаған ортаға көмектесіп, ұпай жинаңыз. Әрбір бөтелке маңызды!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Edil 26": {
    en: {
      name: "Sparklo RVM – Edil 26",
      info: "💚 Local recycling machine! Recycle your bottles and cans here. Earn Sparklo points and help keep our neighborhood clean. Simple and effective!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Еділ 26",
      info: "💚 Местная машина переработки! Перерабатывайте здесь бутылки и банки. Зарабатывайте баллы Sparklo и помогайте содержать наш район в чистоте. Просто и эффективно!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Еділ 26",
      info: "💚 Жергілікті қайта өңдеу машинасы! Бөтелкелеріңізді және банкаларыңызды осында қайта өңдеңіз. Sparklo ұпайларын жинаңыз және біздің ауданды таза ұстауға көмектесіңіз. Қарапайым және тиімді!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Kabanbay Batyr 119": {
    en: {
      name: "Sparklo RVM – Kabanbay Batyr 119",
      info: "🎯 Smart recycling machine! Drop off your plastic bottles and aluminum cans. Earn points in the Sparklo app while helping the environment. Easy and rewarding!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Қабанбай Батыр 119",
      info: "🎯 Умная машина переработки! Сдавайте пластиковые бутылки и алюминиевые банки. Зарабатывайте баллы в приложении Sparklo, помогая окружающей среде. Легко и выгодно!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Қабанбай Батыр 119",
      info: "🎯 Ақылды қайта өңдеу машинасы! Пластик бөтелкелеріңізді және алюминий банкаларыңызды тапсырыңыз. Қоршаған ортаға көмектесіп, Sparklo қосымшасында ұпай жинаңыз. Оңай және пайдалы!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Tynyshbayuly 8": {
    en: {
      name: "Sparklo RVM – Tynyshbayuly 8",
      info: "🌱 Neighborhood recycling machine! Recycle your bottles and cans here. Earn Sparklo points and contribute to a cleaner Astana. Conveniently located!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Тынышбайулы 8",
      info: "🌱 Машина переработки по соседству! Перерабатывайте здесь бутылки и банки. Зарабатывайте баллы Sparklo и вносите вклад в более чистую Астану. Удобно расположен!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Тынышбайұлы 8",
      info: "🌱 Қасындағы қайта өңдеу машинасы! Бөтелкелеріңізді және банкаларыңызды осында қайта өңдеңіз. Sparklo ұпайларын жинаңыз және таза Астанаға үлес қосыңыз. Ыңғайлы орналасқан!",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Shokan Ualikhanov 20": {
    en: {
      name: "Sparklo RVM – Shokan Ualikhanov 20",
      info: "♻️ Community recycling machine! Drop off your plastic bottles and aluminum cans. Earn points while helping the environment. Every bottle counts!",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Шокан Уалиханов 20",
      info: "♻️ Общественная машина переработки! Сдавайте пластиковые бутылки и алюминиевые банки. Зарабатывайте баллы, помогая окружающей среде. Каждая бутылка имеет значение!",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Шоқан Уәлиханов 20",
      info: "♻️ Қоғамдық қайта өңдеу машинасы! Пластик бөтелкелеріңізді және алюминий банкаларыңызды тапсырыңыз. Қоршаған ортаға көмектесіп, ұпай жинаңыз. Әрбір бөтелке маңызды!",
      audience: "Қоғамдық қабылдау"
    }
  }
}; 