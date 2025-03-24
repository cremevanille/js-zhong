let dictionnary = [
    // {initial: -2, final: -3, pinyin: "ê", simps: ["","","","",""], trads: ["","","","",""]},
    // {initial: -2, final: -2, pinyin: "o", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -2, final: -1, pinyin: "er", simps: ["","儿","耳","二",""], trads: ["","兒","耳","二",""]},
    {initial: -1, final: 1, pinyin: "wu", simps: ["屋","无","五","物",""], trads: ["屋","無","五","物",""]},
    {initial: -1, final: 2, pinyin: "yi", simps: ["一","","以","义",""], trads: ["一","","以","義",""]},
    {initial: -1, final: 3, pinyin: "yu", simps: ["","鱼","雨","",""], trads: ["","魚","雨","",""]},
    {initial: -1, final: 4, pinyin: "eoe", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 5, pinyin: "wo", simps: ["","","我","",""], trads: ["","","我","",""]},
    {initial: -1, final: 6, pinyin: "ye", simps: ["","","","叶",""], trads: ["","","","葉",""]},
    {initial: -1, final: 7, pinyin: "yue", simps: ["","","","月",""], trads: ["","","","月",""]},
    {initial: -1, final: 8, pinyin: "ou", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 10, pinyin: "you", simps: ["","","有","",""], trads: ["","","有","",""]},
    {initial: -1, final: 12, pinyin: "ei", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 13, pinyin: "wei", simps: ["","为","","",""], trads: ["","為","","",""]},
    {initial: -1, final: 16, pinyin: "en", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 17, pinyin: "wen", simps: ["","文","","问",""], trads: ["","文","","問",""]},
    {initial: -1, final: 18, pinyin: "yin", simps: ["阴","","","",""], trads: ["陰","","","",""]},
    // {initial: -1, final: 19, pinyin: "yun", simps: ["","","","",""], trads: ["","","","",""]},
    // {initial: -1, final: 20, pinyin: "eng", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 21, pinyin: "weng", simps: ["翁","","","",""], trads: ["翁","","","",""]},
    // {initial: -1, final: 22, pinyin: "ying", simps: ["","","","",""], trads: ["","","","",""]},
    // {initial: -1, final: 23, pinyin: "yong", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 24, pinyin: "a", simps: ["","","","","啊"], trads: ["","","","","啊"]},
    {initial: -1, final: 25, pinyin: "wa", simps: ["蛙","娃","","",""], trads: ["蛙","娃","","",""]},
    {initial: -1, final: 26, pinyin: "ya", simps: ["","牙","","",""], trads: ["","牙","","",""]},
    {initial: -1, final: 28, pinyin: "ao", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 30, pinyin: "yao", simps: ["要","","","",""], trads: ["要","","","",""]},
    {initial: -1, final: 32, pinyin: "ai", simps: ["","","","爱",""], trads: ["","","","愛",""]},
    {initial: -1, final: 33, pinyin: "wai", simps: ["","","","外",""], trads: ["","","","外",""]},
    {initial: -1, final: 36, pinyin: "an", simps: ["安","","","",""], trads: ["安","","","",""]},
    {initial: -1, final: 37, pinyin: "wan", simps: ["","","","万",""], trads: ["","","","萬",""]},
    {initial: -1, final: 38, pinyin: "yan", simps: ["","言","眼","",""], trads: ["","言","眼","",""]},
    {initial: -1, final: 39, pinyin: "yuan", simps: ["","元","","",""], trads: ["","元","","",""]},
    {initial: -1, final: 40, pinyin: "ang", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: -1, final: 41, pinyin: "wang", simps: ["","王","网","",""], trads: ["","王","網","",""]},
    {initial: -1, final: 42, pinyin: "yang", simps: ["","阳","","",""], trads: ["","陽","","",""]},
    {initial: 0, final: 1, pinyin: "mu", simps: ["","","母","木",""], trads: ["","","母","木",""]},
    {initial: 0, final: 2, pinyin: "mi", simps: ["","","米","",""], trads: ["","","米","",""]},
    {initial: 0, final: 4, pinyin: "me", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 0, final: 5, pinyin: "mo", simps: ["","","",""], trads: ["","","","",""]},
    {initial: 0, final: 6, pinyin: "mie", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 0, final: 8, pinyin: "mou", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 0, final: 10, pinyin: "miu", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 0, final: 12, pinyin: "mei", simps: ["","","每","",""], trads: ["","","每","",""]},
    {initial: 0, final: 16, pinyin: "men", simps: ["","","","","们"], trads: ["","","","","們"]},
    {initial: 0, final: 18, pinyin: "min", simps: ["","民","","",""], trads: ["","民","","",""]},
    {initial: 0, final: 20, pinyin: "meng", simps: ["","","","梦",""], trads: ["","","","夢",""]},
    {initial: 0, final: 22, pinyin: "ming", simps: ["","明","","命",""], trads: ["","明","","命",""]},
    {initial: 0, final: 24, pinyin: "ma", simps: ["妈","麻","马", "骂", "吗"], trads: ["媽","麻","馬","罵","嗎"]},
    {initial: 0, final: 28, pinyin: "mao", simps: ["猫","毛","","",""], trads: ["貓","毛","","",""]},
    {initial: 0, final: 30, pinyin: "miao", simps: ["","","秒","妙",""], trads: ["","","秒","妙",""]},
    {initial: 0, final: 32, pinyin: "mai", simps: ["","","买","卖",""], trads: ["","","買","賣",""]},
    {initial: 0, final: 36, pinyin: "man", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 0, final: 38, pinyin: "mian", simps: ["","眠","免","面",""], trads: ["","眠","免","麵",""]},
    {initial: 0, final: 40, pinyin: "mang", simps: ["","忙","","",""], trads: ["","忙","","",""]},
    {initial: 1, final: 1, pinyin: "nu", simps: ["","","","怒",""], trads: ["","","","怒",""]},
    {initial: 1, final: 2, pinyin: "ni", simps: ["","","你","",""], trads: ["","","你","",""]},
    {initial: 1, final: 3, pinyin: "nü", simps: ["","","女","",""], trads: ["","","女","",""]},
    {initial: 1, final: 4, pinyin: "ne", simps: ["","","","","呢"], trads: ["","","","","呢"]},
    {initial: 1, final: 5, pinyin: "nuo", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 1, final: 6, pinyin: "nie", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 1, final: 7, pinyin: "nüe", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 1, final: 8, pinyin: "nou", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 1, final: 10, pinyin: "niu", simps: ["","牛","","",""], trads: ["","牛","","",""]},
    {initial: 1, final: 12, pinyin: "nei", simps: ["","","","内",""], trads: ["","","","內",""]},
    {initial: 1, final: 16, pinyin: "nen", simps: ["","","","嫩",""], trads: ["","","","嫩",""]}, // only one unusual character
    {initial: 1, final: 17, pinyin: "nun", simps: ["","黁","","",""], trads: ["","","","",""]}, // only one unusual character
    {initial: 1, final: 18, pinyin: "nin", simps: ["","您","","",""], trads: ["","您","","",""]},
    {initial: 1, final: 20, pinyin: "neng", simps: ["","能","","",""], trads: ["","能","","",""]}, // only one character
    {initial: 1, final: 21, pinyin: "nong", simps: ["","农","","",""], trads: ["","農","","",""]},
    {initial: 1, final: 22, pinyin: "ning", simps: ["","宁","","",""], trads: ["","寧","","",""]},
    {initial: 1, final: 24, pinyin: "na", simps: ["","","哪","那",""], trads: ["","","哪","那",""]},
    {initial: 1, final: 28, pinyin: "nao", simps: ["","","脑","",""], trads: ["","","腦","",""]},
    {initial: 1, final: 30, pinyin: "niao", simps: ["","","鸟","尿",""], trads: ["","","鳥","尿",""]},
    {initial: 1, final: 32, pinyin: "nai", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 1, final: 36, pinyin: "nan", simps: ["","南","","",""], trads: ["","南","","",""]},
    {initial: 1, final: 37, pinyin: "nuan", simps: ["","","暖","",""], trads: ["","","暖","",""]},
    {initial: 1, final: 38, pinyin: "nian", simps: ["","年","","念",""], trads: ["","年","","念",""]},
    {initial: 1, final: 40, pinyin: "nang", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 1, final: 42, pinyin: "niang", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 1, pinyin: "pu", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 2, pinyin: "pi", simps: ["","皮","","",""], trads: ["","皮","","",""]},
    {initial: 5, final: 5, pinyin: "po", simps: ["","婆","","破",""], trads: ["","婆","","破",""]},
    {initial: 5, final: 6, pinyin: "pei", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 8, pinyin: "pen", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 12, pinyin: "pin", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 16, pinyin: "peng", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 18, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 5, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 6, final: 1, pinyin: "tu", simps: ["","图","土","兔",""], trads: ["","圖","土","兔",""]},
    {initial: 6, final: 2, pinyin: "ti", simps: ["","题","体","",""], trads: ["","題","體","",""]},
    {initial: 6, final: 4, pinyin: "te", simps: ["","","","特",""], trads: ["","","","特",""]},
    {initial: 6, final: 5, pinyin: "tuo", simps: ["脱","","","",""], trads: ["脫","","","",""]},
    {initial: 6, final: 6, pinyin: "tie", simps: ["贴","","铁","",""], trads: ["貼","","鋨","",""]},
    {initial: 6, final: 8, pinyin: "tou", simps: ["","头","","",""], trads: ["","頭","","",""]},
    {initial: 6, final: 13, pinyin: "tui", simps: ["推","","","退",""], trads: ["推","","","退",""]},
    {initial: 6, final: 17, pinyin: "tun", simps: ["","豚","","",""], trads: ["","豚","","",""]},
    {initial: 6, final: 20, pinyin: "teng", simps: ["","疼","","",""], trads: ["","疼","","",""]},
    {initial: 6, final: 21, pinyin: "tong", simps: ["同","童","","痛",""], trads: ["同","童","","痛",""]},
    {initial: 6, final: 22, pinyin: "ting", simps: ["听","停","","",""], trads: ["聽","停","","",""]},
    {initial: 6, final: 24, pinyin: "ta", simps: ["他","","塔","踏",""], trads: ["他","","塔","踏",""]},
    {initial: 6, final: 28, pinyin: "tao", simps: ["","逃","","",""], trads: ["","逃","","",""]},
    {initial: 6, final: 30, pinyin: "tiao", simps: ["","","","跳",""], trads: ["","","","跳",""]},
    {initial: 6, final: 32, pinyin: "tai", simps: ["台","","","太",""], trads: ["台","","","太",""]},
    {initial: 6, final: 36, pinyin: "tan", simps: ["","谈","毯","",""], trads: ["","談","毯","",""]},
    {initial: 6, final: 37, pinyin: "tuan", simps: ["圕","","","",""], trads: ["圕","","","",""]},
    {initial: 6, final: 38, pinyin: "tian", simps: ["天","田","","",""], trads: ["天","田","","",""]},
    {initial: 6, final: 40, pinyin: "tang", simps: ["汤","糖","","",""], trads: ["湯","糖","","",""]},
    {initial: 9, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 12, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 25, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 33, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 9, final: 41, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 2, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 6, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 12, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 18, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 10, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 2, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 6, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 10, pinyin: "diu", simps: ["丢","","","",""], trads: ["丟","","","",""]}, // only one unusual character
    {initial: 11, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 11, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 8, pinyin: "guo", simps: ["","国","","",""], trads: ["","國","","",""]},
    {initial: 14, final: 12, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 25, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 33, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 14, final: 41, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 16, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 21, pinyin: "chong", simps: ["","虫","","",""], trads: ["","蟲","","",""]},
    {initial: 17, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 25, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 33, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 17, final: 41, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 2, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 3, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 6, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 7, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 10, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 12, pinyin: "zei", simps: ["","贼","","",""], trads: ["","賊","","",""]},
    {initial: 18, final: 18, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 19, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 23, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 26, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 39, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 18, final: 42, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 21, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 21, pinyin: "zhong", simps: ["中","","种","重",""], trads: ["中","","種","重",""]},
    {initial: 22, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 25, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 33, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 22, final: 41, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 2, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 3, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 6, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 7, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 10, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 18, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 19, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 23, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 26, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 39, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 23, final: 42, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 12, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 25, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 26, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 12, pinyin: "shei", simps: ["","谁","","",""], trads: ["","誰","","",""]},
    {initial: 27, final: 13, pinyin: "shui", simps: ["","谁","水","睡",""], trads: ["","誰","水","睡",""]},
    {initial: 27, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 25, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 33, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 27, final: 41, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 2, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 3, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 6, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 7, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 10, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 18, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 19, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 23, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 26, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 39, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 28, final: 42, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 12, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 25, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 33, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 29, final: 41, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 2, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 3, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 6, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 7, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 10, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 12, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 18, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 22, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 24, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 30, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 32, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 38, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 31, final: 42, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 0, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 1, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 4, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 5, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 8, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 13, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 16, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 17, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 20, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 21, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 28, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 36, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 37, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]},
    {initial: 32, final: 40, pinyin: "", simps: ["","","","",""], trads: ["","","","",""]}
]

dictionnary.i2f = Array.from(Array(7*5), (_,i) => dictionnary.reduce((acc,syl) => syl.initial == i ? acc.concat(syl.final) : acc, []));
dictionnary.n2f = dictionnary.reduce((acc, syl) => syl.initial == -1 ? acc.concat(syl.final) : acc, []);
dictionnary.f2i = Array.from(Array(11*4), (_,f) => dictionnary.reduce((acc,syl) => syl.final == f && syl.initial != -1 ? acc.concat(syl.initial) : acc, []));

// dei, tei
// o, ê, yo, lo
// hng, hm, m, ng

let search = document.getElementById("search");

let display = document.getElementById("display");

function show(syl) {
    display.innerHTML = "";
    if (!syl) return;
    for (let t=0; t<5; t++) {
        let sc = syl.simps[t];
        let tc = syl.trads[t];
        if (!sc) continue;
        let tone = document.createElement("DIV");
        let char = document.createElement("SPAN");
        let trad = document.createElement("SPAN");
        let pinyin = document.createElement("SPAN");

        tone.className = "tone";
        char.className = "character simplified";
        trad.className = "character traditional";
        // pinyin.className = "pinyin";

        char.innerText = sc;
        trad.innerText = tc;

        let d = ['\u0304', '\u0301', '\u030C', '\u0300', ''][t];
        pinyin.innerText = syl.pinyin.replace(/(ch|zh|sh|[mpbfntdczslrqjxkghwy])?(i|u)?([aeiou])(.*)/, (_, i, m, n, c) => (i||"") + (m||"") + n + d + c);

        tone.appendChild(char);
        tone.appendChild(trad);
        tone.appendChild(pinyin);
        display.appendChild(tone);
    }
}

let corner = document.querySelector("#initials td");
let initials = document.querySelectorAll("#initials tbody td");
let finals = document.querySelectorAll("#finals tbody td");
let specials = document.querySelectorAll("#specials tbody td");

initials.locked = null;
finals.locked = null;

function unlock(table) {
    if (!table.locked) return;
    table.locked.cell.locked = false;
    table.locked.cell.classList.remove("locked");
    table.locked = null;
}

function lock(table, cell, id) {
    unlock(table);
    cell.locked = true;
    table.locked = {cell, id};
    cell.classList.add("locked");
}

corner.addEventListener("click", () => {
    search.value = "";
    if (corner.locked) {
        show(null);
        unlock(initials);
        finals.forEach(fin => fin.classList.remove("shadow"));

        unlock(specials);
        return;
    }

    specials.forEach(spe => spe.classList.remove("shadow"));

    let syl = undefined;
    if (finals.locked) {
        syl = dictionnary.find(s => {
            if (s.initial != -1) return false;
            return s.final == finals.locked.id;
        });
    }
    if (!syl) {
        unlock(finals);
        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.remove("shadow"));
    }

    lock(initials, corner, -1);
    show(syl);

    let j = 0;
    dictionnary.n2f.forEach(f => {
        while (j<f) finals[j++].classList.add("shadow");
        finals[j++].classList.remove("shadow");
    });
    while (j<finals.length) finals[j++].classList.add("shadow");
});
initials.forEach((cell, i) => {
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            show(null);
            unlock(initials);
            finals.forEach(fin => fin.classList.remove("shadow"));
            return;
        }

        unlock(specials);
        specials.forEach(spe => spe.classList.add("shadow"));

        let syl = undefined;
        if (finals.locked) {
            syl = dictionnary.find(s => {
                if (s.initial != i) return false;
                return s.final == finals.locked.id;
            });
        }
        if (!syl) {
            unlock(finals);
            corner.classList.remove("shadow");
            initials.forEach(ini => ini.classList.remove("shadow"));
        }

        lock(initials, cell, i);
        show(syl);

        let j = 0;
        dictionnary.i2f[i].forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");
    });
});
finals.forEach((cell, f) => {
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            show(null);
            unlock(finals);
            corner.classList.remove("shadow");
            initials.forEach(ini => ini.classList.remove("shadow"));
            return;
        }

        unlock(specials);

        let syl = dictionnary.find(s => {
            if (s.final != f) return false;
            return s.initial == (initials.locked?.id ?? -1);
        });
        if (initials.locked && syl) {
            if (dictionnary.n2f.includes(f)) corner.classList.remove("shadow");
            else corner.classList.add("shadow");
        } else if (syl) {
            lock(initials, corner, -1);
            corner.classList.remove("shadow");

            let j = 0;
            dictionnary.n2f.forEach(f => {
                while (j<f) finals[j++].classList.add("shadow");
                finals[j++].classList.remove("shadow");
            });
            while (j<finals.length) finals[j++].classList.add("shadow");
        } else {
            unlock(initials);
            finals.forEach(fin => fin.classList.remove("shadow"));
            corner.classList.add("shadow");
        }

        lock(finals, cell, f);
        show(syl);

        let j = 0;
        dictionnary.f2i[f].forEach(i => {
            while (j<i) initials[j++].classList.add("shadow");
            initials[j++].classList.remove("shadow");
        });
        while (j<initials.length) initials[j++].classList.add("shadow");
    });
});
specials.forEach((cell, s) => {
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            unlock(specials);
            unlock(initials);

            initials.forEach(ini => ini.classList.remove("shadow"));
            return;
        }

        lock(specials, cell, -s-1);
        lock(initials, corner, -1);
        unlock(finals);

        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.add("shadow"));

        let j = 0;
        dictionnary.n2f.forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");

        specials.forEach(spe => spe.classList.remove("shadow"));

        show(dictionnary.find(syl => syl.final == -s-1))
    });
});

search.addEventListener("keyup", () => {
    if (!search.value) {
        show(null);
        unlock(initials);
        unlock(finals);
        unlock(specials);
        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.remove("shadow"));
        finals.forEach(fin => fin.classList.remove("shadow"));
        specials.forEach(spe => spe.classList.remove("shadow"));
        return;
    }

    let syl = dictionnary.find(s => s.pinyin == search.value);
    if (!syl) {
        show(null);
        unlock(initials);
        unlock(finals);
        unlock(specials);
        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.remove("shadow"));
        finals.forEach(fin => fin.classList.remove("shadow"));
        specials.forEach(spe => spe.classList.remove("shadow"));
        return;
    }
    show(syl);
    if (syl.final < 0) {
        unlock(finals);
        lock(initials, corner, -1);
        lock(specials, specials[-syl.final-1], syl.final);
        return;
    }

    unlock(specials);
    if (syl.initial == -1) {
        lock(initials, corner, -1);

        let j = 0;
        dictionnary.n2f.forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");
    }
    else {
        lock(initials, initials[syl.initial], syl.initial);

        let j = 0;
        dictionnary.i2f[syl.initial].forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");

        specials.forEach(spe => spe.classList.add("shadow"));
    }

    lock(finals, finals[syl.final], syl.final);

    let j = 0;
    dictionnary.f2i[syl.final].forEach(i => {
        while (j<i) initials[j++].classList.add("shadow");
        initials[j++].classList.remove("shadow");
    });
    while (j<initials.length) initials[j++].classList.add("shadow");
    if (dictionnary.n2f.includes(syl.final)) corner.classList.remove("shadow");
    else corner.classList.add("shadow");
});
