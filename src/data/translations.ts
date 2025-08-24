export type Lang = 'en' | 'ru' | 'kz';

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
      info: "♻️ Large recycling center for businesses! Accepts plastic bottles, cardboard, and all types of metal.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "ТОО KazRecycleService",
      info: "♻️ Крупный центр переработки для бизнеса! Принимает пластиковые бутылки, картон и все виды металла.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "KazRecycleService ЖШС",
      info: "♻️ Бизнес үшін үлкен қайта өңдеу орталығы! Пластик бөтелкелер, картон және барлық түрдегі металдарды қабылдайды.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "LS Ecolife (LS Astana hub – Saryarqa 31A)": {
    en: {
      name: "LS Ecolife (LS Astana hub – Saryarqa 31A)",
      info: "🌱 One-stop recycling hub! Accepts plastic bottles, aluminum cans, paper, glass, and more.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "LS Ecolife (Хаб LS Astana – Сарыарка 31А)",
      info: "🌱 Универсальный центр переработки! Принимает пластиковые бутылки, алюминиевые банки, бумагу, стекло и многое другое.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "LS Ecolife (LS Astana хабі – Сарыарқа 31А)",
      info: "🌱 Бір орынды қайта өңдеу орталығы! Пластик бөтелкелер, алюминий банкалар, қағаз, шыны және басқа да қабылдайды.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Astana Taza Alem": {
    en: {
      name: "Astana Taza Alem",
      info: "🏛️ City recycling partner! Collects cardboard, paper, glass, and metals from local businesses.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Астана Таза Алем",
      info: "🏛️ Городской партнер по переработке! Собирает картон, бумагу, стекло и металлы от местных предприятий.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Астана Таза Әлем",
      info: "🏛️ Қалалық қайта өңдеу серіктесі! Жергілікті кәсіпорындардан картон, қағаз, шыны және металдарды жинайды.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Taza Qala – Taza El": {
    en: {
      name: "Taza Qala – Taza El",
      info: "🔋 Metal recycling experts! Buys scrap metal, colored metals, glass, and old batteries.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Таза Қала – Таза Ел",
      info: "🔋 Эксперты по переработке металлов! Покупает лом черных металлов, цветные металлы, стекло и старые аккумуляторы.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Таза Қала – Таза Ел",
      info: "🔋 Металл қайта өңдеу саласының мамандары! Қара металл қоқысын, түсті металдарды, шыныны және ескі батареяларды сатып алады.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "AstanaQagazy": {
    en: {
      name: "AstanaQagazy",
      info: "📄 Paper recycling specialists! Focuses on cardboard boxes, office paper, and old archives.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "АстанаҚағазы",
      info: "📄 Специалисты по переработке бумаги! Специализируется на картонных коробках, офисной бумаге и старых архивах.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "АстанаҚағазы",
      info: "📄 Қағаз қайта өңдеу саласының мамандары! Картон жәшіктер, кеңсе қағазы және ескі мұрағаттарға маманданған.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Eco Polygon of Astana": {
    en: {
      name: "Eco Polygon of Astana",
      info: "🏭 Industrial waste management center! Handles large industrial loads and construction debris.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Эко Полигон Астаны",
      info: "🏭 Центр управления промышленными отходами! Обрабатывает крупные промышленные грузы и строительный мусор.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Астананың Эко Полигоны",
      info: "🏭 Өнеркәсіптік қоқыс басқару орталығы! Үлкен өнеркәсіптік жүктер мен құрылыс қоқысын өңдейді.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "LS Ecolife kiosk (Saryarqa 31A)": {
    en: {
      name: "LS Ecolife kiosk (Saryarqa 31A)",
      info: "🌿 Friendly recycling kiosk! Accepts plastic bottles, aluminum cans, paper, and glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Сарыарка 31А)",
      info: "🌿 Дружелюбный киоск переработки! Принимает пластиковые бутылки, алюминиевые банки, бумагу и стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Сарыарқа 31А)",
      info: "🌿 Достық қайта өңдеу киоскі! Пластик бөтелкелер, алюминий банкалар, қағаз және шыны қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Teljan Shonanuly 36/1a)": {
    en: {
      name: "LS Ecolife kiosk (Teljan Shonanuly 36/1a)",
      info: "💚 Convenient neighborhood recycling! Accepts plastic bottles, paper, small metals, and glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Тельжан Шонанулы 36/1а)",
      info: "💚 Удобная переработка по соседству! Принимает пластиковые бутылки, бумагу, мелкие металлы и стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Телжан Шонанулы 36/1а)",
      info: "💚 Қасындағы ыңғайлы қайта өңдеу! Пластик бөтелкелер, қағаз, ұсақ металдар және шыны қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Manas 11/4)": {
    en: {
      name: "LS Ecolife kiosk (Manas 11/4)",
      info: "♻️ Community recycling spot! Accepts plastic bottles, paper, small metals, and glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Манас 11/4)",
      info: "♻️ Общественная точка переработки! Принимает пластиковые бутылки, бумагу, мелкие металлы и стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Манас 11/4)",
      info: "♻️ Қоғамдық қайта өңдеу нүктесі! Пластик бөтелкелер, қағаз, ұсақ металдар және шыны қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Mustafina 17/1)": {
    en: {
      name: "LS Ecolife kiosк (Mustafina 17/1)",
      info: "🌱 Local recycling kiosk! Accepts plastic bottles, paper, small metals, and glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Мустафина 17/1)",
      info: "🌱 Местный киоск переработки! Принимает пластиковые бутылки, бумагу, мелкие металлы и стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Мустафина 17/1)",
      info: "🌱 Жергілікті қайта өңдеу киоскі! Пластик бөтелкелер, қағаз, ұсақ металдар және шыны қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM (Astana Airport)": {
    en: {
      name: "Sparklo RVM (Astana Airport)",
      info: "✈️ Airport recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM (Аэропорт Астаны)",
      info: "✈️ Аэропортовый автомат переработки! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM (Астана Әуежайы)",
      info: "✈️ Әуежай қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM (Keruen Mall)": {
    en: {
      name: "Sparklo RVM (Keruen Mall)",
      info: "🛍️ Shopping mall recycling! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM (ТЦ Керуен)",
      info: "🛍️ Переработка в торговом центре! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM (Керуен ДД)",
      info: "🛍️ Сауда орталығындағы қайта өңдеу! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Likekomek charity bin (Turan 55A)": {
    en: {
      name: "Likekomek charity bin (Turan 55A)",
      info: "👕 24/7 clothing donation! Accepts clean clothes, shoes, and bedding.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Благотворительный ящик Likekomek (Туран 55А)",
      info: "👕 Круглосуточное пожертвование одежды! Принимает чистую одежду, обувь и постельное белье.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Likekomek қайырымдылық жәшігі (Тұран 55А)",
      info: "👕 24/7 киім сыйлығы! Таза киім, аяқ киім және төсек орындығы қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "ALGYS charity bin (central)": {
    en: {
      name: "ALGYS charity bin (central)",
      info: "❤️ Central donation center! Accepts clothing, shoes, linens, and small household items.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Благотворительный ящик АЛГЫС (центральный)",
      info: "❤️ Центральный центр пожертвований! Принимает одежду, обувь, белье и мелкие бытовые вещи.",
      audience: "Общественный прием"
    },
    kz: {
      name: "АЛГЫС қайырымдылық жәшігі (орталық)",
      info: "❤️ Орталық сыйлық орталығы! Киім, аяқ киім, кір жуу және ұсақ үй шаруашылығы заттарын қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Eco Paper (Zhanazhol 20/3)": {
    en: {
      name: "Eco Paper (Zhanazhol 20/3)",
      info: "📚 Late-night recycling! Buys back paper, cardboard, plastic bottles, and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Эко Бумага (Жанажол 20/3)",
      info: "📚 Ночная переработка! Выкупает бумагу, картон, пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Эко Қағаз (Жаңажол 20/3)",
      info: "📚 Түнгі қайта өңдеу! Қағаз, картон, пластик бөтелкелер және алюминий банкаларды сатып алады.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Turan 55d": {
    en: {
      name: "Sparklo RVM – Turan 55d",
      info: "🎯 Smart recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Туран 55д",
      info: "🎯 Умная машина переработки! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Тұран 55д",
      info: "🎯 Ақылды қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Konaev 10": {
    en: {
      name: "Sparklo RVM – Konaev 10",
      info: "♻️ Neighborhood recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Конаев 10",
      info: "♻️ Машина переработки по соседству! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Конаев 10",
      info: "♻️ Қасындағы қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Kordai 6": {
    en: {
      name: "Sparklo RVM – Kordai 6",
      info: "🌿 Community recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Кордай 6",
      info: "🌿 Общественная машина переработки! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Қордай 6",
      info: "🌿 Қоғамдық қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Edil 26": {
    en: {
      name: "Sparklo RVM – Edil 26",
      info: "💚 Local recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Еділ 26",
      info: "💚 Местная машина переработки! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Еділ 26",
      info: "💚 Жергілікті қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Kabanbay Batyr 119": {
    en: {
      name: "Sparklo RVM – Kabanbay Batyr 119",
      info: "🎯 Smart recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Қабанбай Батыр 119",
      info: "🎯 Умная машина переработки! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Қабанбай Батыр 119",
      info: "🎯 Ақылды қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Tynyshbayuly 8": {
    en: {
      name: "Sparklo RVM – Tynyshbayuly 8",
      info: "🌱 Neighborhood recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Тынышбайулы 8",
      info: "🌱 Машина переработки по соседству! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Тынышбайұлы 8",
      info: "🌱 Қасындағы қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Shokan Ualikhanov 20": {
    en: {
      name: "Sparklo RVM – Shokan Ualikhanov 20",
      info: "♻️ Community recycling machine! Accepts plastic bottles and aluminum cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Шокан Уалиханов 20",
      info: "♻️ Общественная машина переработки! Принимает пластиковые бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Шоқан Уәлиханов 20",
      info: "♻️ Қоғамдық қайта өңдеу машинасы! Пластик бөтелкелер және алюминий банкалар қабылдайды.",
      audience: "Қоғамдық қабылдау"
    }
  }
}; 