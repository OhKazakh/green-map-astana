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
      info: "Industrial MRF/baling plant in Promyshlennyi zone – plastics (PET/PE), cardboard, ferrous & non-ferrous metals.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "ТОО KazRecycleService",
      info: "Промышленный завод по сортировке и прессованию в Промышленной зоне – пластик (ПЭТ/ПЭ), картон, черные и цветные металлы.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "KazRecycleService ЖШС",
      info: "Өнеркәсіптік айырбастау және пресслеу зауыты – пластик (ПЭТ/ПЭ), картон, қара және түсті металдар.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "LS Ecolife (LS Astana hub – Saryarqa 31A)": {
    en: {
      name: "LS Ecolife (LS Astana hub – Saryarqa 31A)",
      info: "Private multi-site collection & baling network; bulk pickup. Takes PET/other plastics, Al cans, cardboard, paper, glass, PE film.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "LS Ecolife (Хаб LS Astana – Сарыарка 31А)",
      info: "Частная сеть сбора и прессования на нескольких площадках; массовый вывоз. Принимает ПЭТ/другой пластик, алюминиевые банки, картон, бумагу, стекло, ПЭ пленку.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "LS Ecolife (LS Astana хабі – Сарыарқа 31А)",
      info: "Жеке көп орынды жинау және пресслеу желісі; көлемдік алу. ПЭТ/басқа пластик, алюминий банкалар, картон, қағаз, шыны, ПЭ пленкасын қабылдайды.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Astana Taza Alem": {
    en: {
      name: "Astana Taza Alem",
      info: "Municipal contractor; accepts sorted recyclables by agreement. Cardboard, paper, glass, metals; container service for businesses.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Астана Таза Алем",
      info: "Муниципальный подрядчик; принимает отсортированные отходы по договоренности. Картон, бумага, стекло, металлы; контейнерное обслуживание для бизнеса.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Астана Таза Әлем",
      info: "Мемлекеттік подрядчик; келісім бойынша сұрыпталған қайта пайдаланылатын материалдарды қабылдайды. Картон, қағаз, шыны, металдар; бизнес үшін контейнер қызметі.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Taza Qala – Taza El": {
    en: {
      name: "Taza Qala – Taza El",
      info: "Scrap & recyclables buyer; issues weigh tickets. Scrap metal, coloured metals, glass, lead-acid batteries.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Таза Қала – Таза Ел",
      info: "Покупатель лома и вторсырья; выдает весовые талоны. Лом черных металлов, цветные металлы, стекло, свинцово-кислотные аккумуляторы.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Таза Қала – Таза Ел",
      info: "Қоқыс және қайта пайдаланылатын материалдарды сатып алушы; салмақ талондарын шығарады. Қара металл қоқысы, түсті металдар, шыны, қорғасын-қышқыл батареялар.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "AstanaQagazy": {
    en: {
      name: "AstanaQagazy",
      info: "OCC & office paper specialist; self-pickup for volume. Cardboard (OCC), mixed office paper, archives.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "АстанаҚағазы",
      info: "Специалист по ОСС и офисной бумаге; самовывоз для объема. Картон (ОСС), смешанная офисная бумага, архивы.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "АстанаҚағазы",
      info: "ОСС және кеңсе қағазы маманы; көлем үшін өздігінен алу. Картон (ОСС), аралас кеңсе қағазы, мұрағаттар.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "Eco Polygon of Astana": {
    en: {
      name: "Eco Polygon of Astana",
      info: "Paid tipping point near city waste plant; segregated industrial loads & large debris by prior agreement.",
      audience: "Business / Bulk only"
    },
    ru: {
      name: "Эко Полигон Астаны",
      info: "Платная точка выгрузки возле городского мусороперерабатывающего завода; сегрегированные промышленные грузы и крупный мусор по предварительной договоренности.",
      audience: "Только для бизнеса / Оптом"
    },
    kz: {
      name: "Астананың Эко Полигоны",
      info: "Қалалық қоқыс зауытының жанындағы ақылы түсіру нүктесі; алдын ала келісім бойынша бөлінген өнеркәсіптік жүктер және үлкен қоқыс.",
      audience: "Тек бизнес үшін / Көлемдік"
    }
  },
  "LS Ecolife kiosk (Saryarqa 31A)": {
    en: {
      name: "LS Ecolife kiosk (Saryarqa 31A)",
      info: "Staffed walk-up point. PET1, HDPE2, aluminium cans, cardboard/paper, glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Сарыарка 31А)",
      info: "Обслуживаемый пункт приема. ПЭТ1, ПНД2, алюминиевые банки, картон/бумага, стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Сарыарқа 31А)",
      info: "Қызмет көрсетілетін қабылдау нүктесі. ПЭТ1, ПНД2, алюминий банкалар, картон/қағаз, шыны.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Teljan Shonanuly 36/1a)": {
    en: {
      name: "LS Ecolife kiosk (Teljan Shonanuly 36/1a)",
      info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Тельжан Шонанулы 36/1а)",
      info: "Обслуживаемый пункт приема. ПЭТ, бумага/картон, мелкие металлы, стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Телжан Шонанулы 36/1а)",
      info: "Қызмет көрсетілетін қабылдау нүктесі. ПЭТ, қағаз/картон, ұсақ металдар, шыны.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Manas 11/4)": {
    en: {
      name: "LS Ecolife kiosk (Manas 11/4)",
      info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Манас 11/4)",
      info: "Обслуживаемый пункт приема. ПЭТ, бумага/картон, мелкие металлы, стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Манас 11/4)",
      info: "Қызмет көрсетілетін қабылдау нүктесі. ПЭТ, қағаз/картон, ұсақ металдар, шыны.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "LS Ecolife kiosk (Mustafina 17/1)": {
    en: {
      name: "LS Ecolife kiosk (Mustafina 17/1)",
      info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Киоск LS Ecolife (Мустафина 17/1)",
      info: "Обслуживаемый пункт приема. ПЭТ, бумага/картон, мелкие металлы, стекло.",
      audience: "Общественный прием"
    },
    kz: {
      name: "LS Ecolife киоск (Мустафина 17/1)",
      info: "Қызмет көрсетілетін қабылдау нүктесі. ПЭТ, қағаз/картон, ұсақ металдар, шыны.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM (Astana Airport)": {
    en: {
      name: "Sparklo RVM (Astana Airport)",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles, aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM (Аэропорт Астаны)",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки, алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM (Астана Әуежайы)",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер, алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM (Keruen Mall)": {
    en: {
      name: "Sparklo RVM (Keruen Mall)",
      info: "RVM in shopping mall; see app for full list. PET bottles, aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM (ТЦ Керуен)",
      info: "RVM в торговом центре; полный список смотрите в приложении. ПЭТ бутылки, алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM (Керуен ДД)",
      info: "Сауда орталығындағы RVM; толық тізімді қосымшадан қараңыз. ПЭТ бөтелкелер, алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Likekomek charity bin (Turan 55A)": {
    en: {
      name: "Likekomek charity bin (Turan 55A)",
      info: "24/7 textile donation box. Clean clothing, paired footwear, bedding.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Благотворительный ящик Likekomek (Туран 55А)",
      info: "Круглосуточный ящик для пожертвования текстиля. Чистая одежда, парная обувь, постельное белье.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Likekomek қайырымдылық жәшігі (Тұран 55А)",
      info: "Тоқыма жәшігі 24/7. Таза киім, жұп аяқ киім, төсек орындығы.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "ALGYS charity bin (central)": {
    en: {
      name: "ALGYS charity bin (central)",
      info: "Textile/household donation box. Clothing, shoes, linens, small goods.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Благотворительный ящик АЛГЫС (центральный)",
      info: "Ящик для пожертвования текстиля/бытовых вещей. Одежда, обувь, белье, мелкие вещи.",
      audience: "Общественный прием"
    },
    kz: {
      name: "АЛГЫС қайырымдылық жәшігі (орталық)",
      info: "Тоқыма/үй шаруашылығы жәшігі. Киім, аяқ киім, кір жуу, ұсақ заттар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Eco Paper (Zhanazhol 20/3)": {
    en: {
      name: "Eco Paper (Zhanazhol 20/3)",
      info: "Garage-format buy-back point; often open late. Paper, cardboard, PET, PE film, aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Эко Бумага (Жанажол 20/3)",
      info: "Пункт выкупа в гараже; часто работает допоздна. Бумага, картон, ПЭТ, ПЭ пленка, алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Эко Қағаз (Жаңажол 20/3)",
      info: "Гараж форматындағы сатып алу нүктесі; көбіне кешке дейін ашық. Қағаз, картон, ПЭТ, ПЭ пленка, алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Turan 55d": {
    en: {
      name: "Sparklo RVM – Turan 55d",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Туран 55д",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Тұран 55д",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Konaev 10": {
    en: {
      name: "Sparklo RVM – Konaev 10",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Конаев 10",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Конаев 10",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Kordai 6": {
    en: {
      name: "Sparklo RVM – Kordai 6",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Кордай 6",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Қордай 6",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Edil 26": {
    en: {
      name: "Sparklo RVM – Edil 26",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Еділ 26",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Еділ 26",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Kabanbay Batyr 119": {
    en: {
      name: "Sparklo RVM – Kabanbay Batyr 119",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Қабанбай Батыр 119",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Қабанбай Батыр 119",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Tynyshbayuly 8": {
    en: {
      name: "Sparklo RVM – Tynyshbayuly 8",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Тынышбайулы 8",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Тынышбайұлы 8",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  },
  "Sparklo RVM – Shokan Ualikhanov 20": {
    en: {
      name: "Sparklo RVM – Shokan Ualikhanov 20",
      info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
      audience: "Public drop-off"
    },
    ru: {
      name: "Sparklo RVM – Шокан Уалиханов 20",
      info: "Автомат обратного приема; зарабатывайте баллы в приложении Sparklo. ПЭТ бутылки и алюминиевые банки.",
      audience: "Общественный прием"
    },
    kz: {
      name: "Sparklo RVM – Шоқан Уәлиханов 20",
      info: "Кері қабылдау автоматы; Sparklo қосымшасында ұпай жинаңыз. ПЭТ бөтелкелер және алюминий банкалар.",
      audience: "Қоғамдық қабылдау"
    }
  }
}; 