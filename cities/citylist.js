let szavak = [
  {
    //kulcs + adat
    "Név": "Aba",
    "Megye": "Fejér",
    "Népesség": 4619,
    "Terület": "88,05",
    "Irányítószám": 8127,
    "Mióta város": 2013,
    "Népsűrűség": 52
  },
  {
    "Név": "Abádszalók",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 3922,
    "Terület": "132,23",
    "Irányítószám": 5241,
    "Mióta város": 2005,
    "Népsűrűség": 30
  },
  {
    "Név": "Abaújszántó",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 3088,
    "Terület": "47,36",
    "Irányítószám": 3881,
    "Mióta város": 2004,
    "Népsűrűség": 65
  },
  {
    "Név": "Abony",
    "Megye": "Pest",
    "Népesség": 14876,
    "Terület": "127,97",
    "Irányítószám": 2740,
    "Mióta város": 1993,
    "Népsűrűség": 116
  },
  {
    "Név": "Ács",
    "Megye": "Komárom-Esztergom",
    "Népesség": 6965,
    "Terület": "103,75",
    "Irányítószám": 2941,
    "Mióta város": 2007,
    "Népsűrűség": 67
  },
  {
    "Név": "Adony",
    "Megye": "Fejér",
    "Népesség": 3912,
    "Terület": "61,05",
    "Irányítószám": 2457,
    "Mióta város": 2004,
    "Népsűrűség": 64
  },
  {
    "Név": "Ajak",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 3528,
    "Terület": "24,76",
    "Irányítószám": 4524,
    "Mióta város": 2013,
    "Népsűrűség": 142
  },
  {
    "Név": "Ajka",
    "Megye": "Veszprém",
    "Népesség": 29058,
    "Terület": "95,05",
    "Irányítószám": 8400,
    "Mióta város": 1959,
    "Népsűrűség": 306
  },
  {
    "Név": "Albertirsa",
    "Megye": "Pest",
    "Népesség": 12410,
    "Terület": "72,96",
    "Irányítószám": 2730,
    "Mióta város": 2003,
    "Népsűrűség": 170
  },
  {
    "Név": "Alsózsolca",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 5937,
    "Terület": "26,02",
    "Irányítószám": 3571,
    "Mióta város": 2007,
    "Népsűrűség": 228
  },
  {
    "Név": "Aszód",
    "Megye": "Pest",
    "Népesség": 6414,
    "Terület": "16,2",
    "Irányítószám": 2170,
    "Mióta város": 1991,
    "Népsűrűség": 396
  },
  {
    "Név": "Bábolna",
    "Megye": "Komárom-Esztergom",
    "Népesség": 3654,
    "Terület": "33,55",
    "Irányítószám": 2943,
    "Mióta város": 2003,
    "Népsűrűség": 109
  },
  {
    "Név": "Bácsalmás",
    "Megye": "Bács-Kiskun",
    "Népesség": 6697,
    "Terület": "108,32",
    "Irányítószám": 6430,
    "Mióta város": 1986,
    "Népsűrűség": 62
  },
  {
    "Név": "Badacsonytomaj",
    "Megye": "Veszprém",
    "Népesség": 2080,
    "Terület": "32,71",
    "Irányítószám": 8258,
    "Mióta város": 2004,
    "Népsűrűség": 64
  },
  {
    "Név": "Baja",
    "Megye": "Bács-Kiskun",
    "Népesség": 37330,
    "Terület": "177,61",
    "Irányítószám": 6500,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 210
  },
  {
    "Név": "Bakonszeg",
    "Megye": "Hajdú-Bihar",
    "Népesség": 1076,
    "Terület": "35,03",
    "Irányítószám": 4164,
    "Mióta város": "2023",
    "Népsűrűség": 33
  },
  {
    "Név": "Baktalórántháza",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4302,
    "Terület": "35,25",
    "Irányítószám": 4561,
    "Mióta város": 1993,
    "Népsűrűség": 122
  },
  {
    "Név": "Balassagyarmat",
    "Megye": "Nógrád",
    "Népesség": 16133,
    "Terület": "23,74",
    "Irányítószám": 2660,
    "Mióta város": 1923,
    "Népsűrűség": 680
  },
  {
    "Név": "Balatonalmádi",
    "Megye": "Veszprém",
    "Népesség": 9167,
    "Terület": "49,88",
    "Irányítószám": 8220,
    "Mióta város": 1989,
    "Népsűrűség": 184
  },
  {
    "Név": "Balatonboglár",
    "Megye": "Somogy",
    "Népesség": 5932,
    "Terület": "32,04",
    "Irányítószám": 8630,
    "Mióta város": 1991,
    "Népsűrűség": 185
  },
  {
    "Név": "Balatonföldvár",
    "Megye": "Somogy",
    "Népesség": 2064,
    "Terület": "15,32",
    "Irányítószám": 8623,
    "Mióta város": 1992,
    "Népsűrűség": 135
  },
  {
    "Név": "Balatonfüred",
    "Megye": "Veszprém",
    "Népesség": 13532,
    "Terület": "46,45",
    "Irányítószám": 8230,
    "Mióta város": 1971,
    "Népsűrűség": 291
  },
  {
    "Név": "Balatonfűzfő",
    "Megye": "Veszprém",
    "Népesség": 4299,
    "Terület": "9,25",
    "Irányítószám": 8175,
    "Mióta város": 2000,
    "Népsűrűség": 465
  },
  {
    "Név": "Balatonkenese",
    "Megye": "Veszprém",
    "Népesség": 3195,
    "Terület": "65,57",
    "Irányítószám": 8172,
    "Mióta város": 2009,
    "Népsűrűség": 49
  },
  {
    "Név": "Balatonlelle",
    "Megye": "Somogy",
    "Népesség": 4735,
    "Terület": "43,23",
    "Irányítószám": 8638,
    "Mióta város": 1991,
    "Népsűrűség": 110
  },
  {
    "Név": "Balkány",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 6215,
    "Terület": "89,99",
    "Irányítószám": 4233,
    "Mióta város": 2004,
    "Népsűrűség": 69
  },
  {
    "Név": "Balmazújváros",
    "Megye": "Hajdú-Bihar",
    "Népesség": 17354,
    "Terület": "205,45",
    "Irányítószám": 4060,
    "Mióta város": 1989,
    "Népsűrűség": 84
  },
  {
    "Név": "Barcs",
    "Megye": "Somogy",
    "Népesség": 11378,
    "Terület": "122,9",
    "Irányítószám": 7570,
    "Mióta város": 1978,
    "Népsűrűség": 93
  },
  {
    "Név": "Bátaszék",
    "Megye": "Tolna",
    "Népesség": 6388,
    "Terület": "63,55",
    "Irányítószám": 7140,
    "Mióta város": 1995,
    "Népsűrűség": 101
  },
  {
    "Név": "Bátonyterenye",
    "Megye": "Nógrád",
    "Népesség": 12604,
    "Terület": "78,92",
    "Irányítószám": 3070,
    "Mióta város": 1989,
    "Népsűrűség": 160
  },
  {
    "Név": "Battonya",
    "Megye": "Békés",
    "Népesség": 5565,
    "Terület": "145,71",
    "Irányítószám": 5830,
    "Mióta város": 1989,
    "Népsűrűség": 38
  },
  {
    "Név": "Békés",
    "Megye": "Békés",
    "Népesség": 19763,
    "Terület": "127,23",
    "Irányítószám": 5630,
    "Mióta város": 1973,
    "Népsűrűség": 155
  },
  {
    "Név": "Békéscsaba",
    "Megye": "Békés",
    "Népesség": 63752,
    "Terület": "193,93",
    "Irányítószám": 5600,
    "Mióta város": 1918,
    "Népsűrűség": 329
  },
  {
    "Név": "Bélapátfalva",
    "Megye": "Heves",
    "Népesség": 2996,
    "Terület": "36,63",
    "Irányítószám": 3346,
    "Mióta város": 2004,
    "Népsűrűség": 82
  },
  {
    "Név": "Beled",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 2553,
    "Terület": "26,47",
    "Irányítószám": 9343,
    "Mióta város": 2009,
    "Népsűrűség": 96
  },
  {
    "Név": "Berettyóújfalu",
    "Megye": "Hajdú-Bihar",
    "Népesség": 15167,
    "Terület": "170,98",
    "Irányítószám": 4100,
    "Mióta város": 1978,
    "Népsűrűség": 89
  },
  {
    "Név": "Berhida",
    "Megye": "Veszprém",
    "Népesség": 5967,
    "Terület": "42,73",
    "Irányítószám": 8181,
    "Mióta város": 2004,
    "Népsűrűség": 140
  },
  {
    "Név": "Besenyszög",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 3372,
    "Terület": "138,08",
    "Irányítószám": 5071,
    "Mióta város": 2013,
    "Népsűrűség": 24
  },
  {
    "Név": "Biatorbágy",
    "Megye": "Pest",
    "Népesség": 12805,
    "Terület": "44,12",
    "Irányítószám": 2051,
    "Mióta város": 2007,
    "Népsűrűség": 290
  },
  {
    "Név": "Bicske",
    "Megye": "Fejér",
    "Népesség": 11642,
    "Terület": "77,08",
    "Irányítószám": 2060,
    "Mióta város": 1986,
    "Népsűrűség": 151
  },
  {
    "Név": "Biharkeresztes",
    "Megye": "Hajdú-Bihar",
    "Népesség": 3888,
    "Terület": "49,26",
    "Irányítószám": 4110,
    "Mióta város": 1989,
    "Népsűrűség": 79
  },
  {
    "Név": "Bodajk",
    "Megye": "Fejér",
    "Népesség": 4051,
    "Terület": "28,98",
    "Irányítószám": 8053,
    "Mióta város": 2008,
    "Népsűrűség": 140
  },
  {
    "Név": "Bóly",
    "Megye": "Baranya",
    "Népesség": 3996,
    "Terület": "25,38",
    "Irányítószám": 7754,
    "Mióta város": 1997,
    "Népsűrűség": 157
  },
  {
    "Név": "Bonyhád",
    "Megye": "Tolna",
    "Népesség": 13741,
    "Terület": "72,13",
    "Irányítószám": 7150,
    "Mióta város": 1977,
    "Népsűrűség": 191
  },
  {
    "Név": "Borsodnádasd",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 3007,
    "Terület": "28,08",
    "Irányítószám": 3671,
    "Mióta város": 2001,
    "Népsűrűség": 107
  },
  {
    "Név": "Budakalász",
    "Megye": "Pest",
    "Népesség": 10510,
    "Terület": "15,17",
    "Irányítószám": 2011,
    "Mióta város": 2009,
    "Népsűrűség": 693
  },
  {
    "Név": "Budakeszi",
    "Megye": "Pest",
    "Népesség": 14507,
    "Terület": "37,1",
    "Irányítószám": 2092,
    "Mióta város": 2000,
    "Népsűrűség": 391
  },
  {
    "Név": "Budaörs",
    "Megye": "Pest",
    "Népesség": 29605,
    "Terület": "23,59",
    "Irányítószám": 2040,
    "Mióta város": 1986,
    "Népsűrűség": 1255
  },
  {
    "Név": "Budapest",
    "Megye": "Budapest",
    "Népesség": 1740041,
    "Terület": "525,09",
    "Irányítószám": 1000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 3314
  },
  {
    "Név": "Bük",
    "Megye": "Vas",
    "Népesség": 3493,
    "Terület": "20,86",
    "Irányítószám": 9737,
    "Mióta város": 2007,
    "Népsűrűség": 167
  },
  {
    "Név": "Cegléd",
    "Megye": "Pest",
    "Népesség": 37778,
    "Terület": "244,87",
    "Irányítószám": 2700,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 154
  },
  {
    "Név": "Celldömölk",
    "Megye": "Vas",
    "Népesség": 10786,
    "Terület": "52,39",
    "Irányítószám": 9500,
    "Mióta város": 1978,
    "Népsűrűség": 206
  },
  {
    "Név": "Cigánd",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 2682,
    "Terület": "56,76",
    "Irányítószám": 3973,
    "Mióta város": 2004,
    "Népsűrűség": 47
  },
  {
    "Név": "Csákvár",
    "Megye": "Fejér",
    "Népesség": 5221,
    "Terület": "118,76",
    "Irányítószám": 8083,
    "Mióta város": 2013,
    "Népsűrűség": 44
  },
  {
    "Név": "Csanádpalota",
    "Megye": "Csongrád",
    "Népesség": 2968,
    "Terület": "77,76",
    "Irányítószám": 6913,
    "Mióta város": 2009,
    "Népsűrűség": 38
  },
  {
    "Név": "Csenger",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4730,
    "Terület": "36,16",
    "Irányítószám": 4765,
    "Mióta város": 1989,
    "Népsűrűség": 131
  },
  {
    "Név": "Csepreg",
    "Megye": "Vas",
    "Népesség": 3384,
    "Terület": "49,54",
    "Irányítószám": 9735,
    "Mióta város": 1995,
    "Népsűrűség": 68
  },
  {
    "Név": "Csongrád",
    "Megye": "Csongrád",
    "Népesség": 16846,
    "Terület": "173,89",
    "Irányítószám": 6640,
    "Mióta város": 1922,
    "Népsűrűség": 97
  },
  {
    "Név": "Csorna",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 10649,
    "Terület": "91,73",
    "Irányítószám": 9300,
    "Mióta város": 1971,
    "Népsűrűség": 116
  },
  {
    "Név": "Csorvás",
    "Megye": "Békés",
    "Népesség": 4981,
    "Terület": "90,18",
    "Irányítószám": 5920,
    "Mióta város": 2005,
    "Népsűrűség": 55
  },
  {
    "Név": "Csurgó",
    "Megye": "Somogy",
    "Népesség": 5186,
    "Terület": "59,42",
    "Irányítószám": 8840,
    "Mióta város": 1989,
    "Népsűrűség": 87
  },
  {
    "Név": "Dabas",
    "Megye": "Pest",
    "Népesség": 16813,
    "Terület": "165,99",
    "Irányítószám": 2370,
    "Mióta város": 1989,
    "Népsűrűség": 101
  },
  {
    "Név": "Debrecen",
    "Megye": "Hajdú-Bihar",
    "Népesség": 207594,
    "Terület": "461,66",
    "Irányítószám": 4000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 450
  },
  {
    "Név": "Demecser",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4280,
    "Terület": "36,98",
    "Irányítószám": 4516,
    "Mióta város": 2001,
    "Népsűrűség": 116
  },
  {
    "Név": "Derecske",
    "Megye": "Hajdú-Bihar",
    "Népesség": 8906,
    "Terület": "103,58",
    "Irányítószám": 4130,
    "Mióta város": 1991,
    "Népsűrűség": 86
  },
  {
    "Név": "Dévaványa",
    "Megye": "Békés",
    "Népesség": 7622,
    "Terület": "216,55",
    "Irányítószám": 5510,
    "Mióta város": 2000,
    "Népsűrűség": 35
  },
  {
    "Név": "Devecser",
    "Megye": "Veszprém",
    "Népesség": 4325,
    "Terület": "64,11",
    "Irányítószám": 8460,
    "Mióta város": 1997,
    "Népsűrűség": 67
  },
  {
    "Név": "Diósd",
    "Megye": "Pest",
    "Népesség": 9522,
    "Terület": "5,75",
    "Irányítószám": 2049,
    "Mióta város": 2013,
    "Népsűrűség": 1656
  },
  {
    "Név": "Dombóvár",
    "Megye": "Tolna",
    "Népesség": 19494,
    "Terület": "78,48",
    "Irányítószám": 7200,
    "Mióta város": 1970,
    "Népsűrűség": 248
  },
  {
    "Név": "Dombrád",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 3900,
    "Terület": "51,84",
    "Irányítószám": 4492,
    "Mióta város": 2000,
    "Népsűrűség": 75
  },
  {
    "Név": "Dorog",
    "Megye": "Komárom-Esztergom",
    "Népesség": 11996,
    "Terület": "11,54",
    "Irányítószám": 2510,
    "Mióta város": 1984,
    "Népsűrűség": 1040
  },
  {
    "Név": "Dunaföldvár",
    "Megye": "Tolna",
    "Népesség": 8666,
    "Terület": "111,42",
    "Irányítószám": 7020,
    "Mióta város": 1989,
    "Népsűrűség": 78
  },
  {
    "Név": "Dunaharaszti",
    "Megye": "Pest",
    "Népesség": 20260,
    "Terület": "29,17",
    "Irányítószám": 2330,
    "Mióta város": 2000,
    "Népsűrűség": 695
  },
  {
    "Név": "Dunakeszi",
    "Megye": "Pest",
    "Népesség": 40334,
    "Terület": "31,06",
    "Irányítószám": 2120,
    "Mióta város": 1977,
    "Népsűrűség": 1299
  },
  {
    "Név": "Dunaújváros",
    "Megye": "Fejér",
    "Népesség": 48010,
    "Terület": "52,67",
    "Irányítószám": 2400,
    "Mióta város": 1951,
    "Népsűrűség": 912
  },
  {
    "Név": "Dunavarsány",
    "Megye": "Pest",
    "Népesség": 7480,
    "Terület": "22,52",
    "Irányítószám": 2336,
    "Mióta város": 2004,
    "Népsűrűség": 332
  },
  {
    "Név": "Dunavecse",
    "Megye": "Bács-Kiskun",
    "Népesség": 3937,
    "Terület": "66,77",
    "Irányítószám": 6087,
    "Mióta város": 2004,
    "Népsűrűség": 59
  },
  {
    "Név": "Edelény",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 10019,
    "Terület": "56,84",
    "Irányítószám": 3780,
    "Mióta város": 1986,
    "Népsűrűség": 176
  },
  {
    "Név": "Eger",
    "Megye": "Heves",
    "Népesség": 56166,
    "Terület": "92,21",
    "Irányítószám": 3300,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 609
  },
  {
    "Név": "Elek",
    "Megye": "Békés",
    "Népesség": 4816,
    "Terület": "54,91",
    "Irányítószám": 5742,
    "Mióta város": 1996,
    "Népsűrűség": 88
  },
  {
    "Név": "Emőd",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 4895,
    "Terület": "49,37",
    "Irányítószám": 3432,
    "Mióta város": 2001,
    "Népsűrűség": 99
  },
  {
    "Név": "Encs",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 6201,
    "Terület": "25,8",
    "Irányítószám": 3860,
    "Mióta város": 1984,
    "Népsűrűség": 240
  },
  {
    "Név": "Enying",
    "Megye": "Fejér",
    "Népesség": 6768,
    "Terület": "82,78",
    "Irányítószám": 8130,
    "Mióta város": 1992,
    "Népsűrűség": 82
  },
  {
    "Név": "Ercsi",
    "Megye": "Fejér",
    "Népesség": 7999,
    "Terület": "65,31",
    "Irányítószám": 2451,
    "Mióta város": 2000,
    "Népsűrűség": 122
  },
  {
    "Név": "Érd",
    "Megye": "Pest",
    "Népesség": 65277,
    "Terület": "60,54",
    "Irányítószám": 2030,
    "Mióta város": 1978,
    "Népsűrűség": 1078
  },
  {
    "Név": "Esztergom",
    "Megye": "Komárom-Esztergom",
    "Népesség": 30434,
    "Terület": "99,95",
    "Irányítószám": 2500,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 304
  },
  {
    "Név": "Fegyvernek",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 6415,
    "Terület": "71,48",
    "Irányítószám": 5231,
    "Mióta város": 2013,
    "Népsűrűség": 90
  },
  {
    "Név": "Fehérgyarmat",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 7861,
    "Terület": "52,46",
    "Irányítószám": 4900,
    "Mióta város": 1978,
    "Népsűrűség": 150
  },
  {
    "Név": "Felsőzsolca",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 6750,
    "Terület": "16,25",
    "Irányítószám": 3561,
    "Mióta város": 1997,
    "Népsűrűség": 415
  },
  {
    "Név": "Fertőd",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 3461,
    "Terület": "48,56",
    "Irányítószám": 9431,
    "Mióta város": 1995,
    "Népsűrűség": 71
  },
  {
    "Név": "Fertőszentmiklós",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 3891,
    "Terület": "39,39",
    "Irányítószám": 9444,
    "Mióta város": 2008,
    "Népsűrűség": 99
  },
  {
    "Név": "Fonyód",
    "Megye": "Somogy",
    "Népesség": 4728,
    "Terület": "53,55",
    "Irányítószám": 8640,
    "Mióta város": 1989,
    "Népsűrűség": 88
  },
  {
    "Név": "Fót",
    "Megye": "Pest",
    "Népesség": 18968,
    "Terület": "37,4",
    "Irányítószám": 2151,
    "Mióta város": 2004,
    "Népsűrűség": 507
  },
  {
    "Név": "Füzesabony",
    "Megye": "Heves",
    "Népesség": 7781,
    "Terület": "46,34",
    "Irányítószám": 3390,
    "Mióta város": 1989,
    "Népsűrűség": 168
  },
  {
    "Név": "Füzesgyarmat",
    "Megye": "Békés",
    "Népesség": 5665,
    "Terület": "127,34",
    "Irányítószám": 5525,
    "Mióta város": 2000,
    "Népsűrűség": 44
  },
  {
    "Név": "Gárdony",
    "Megye": "Fejér",
    "Népesség": 9927,
    "Terület": "63,5",
    "Irányítószám": 2483,
    "Mióta város": 1989,
    "Népsűrűség": 156
  },
  {
    "Név": "Göd",
    "Megye": "Pest",
    "Népesség": 18565,
    "Terület": "22,23",
    "Irányítószám": 2131,
    "Mióta város": 1999,
    "Népsűrűség": 835
  },
  {
    "Név": "Gödöllő",
    "Megye": "Pest",
    "Népesség": 34172,
    "Terület": "61,92",
    "Irányítószám": 2100,
    "Mióta város": 1966,
    "Népsűrűség": 552
  },
  {
    "Név": "Gönc",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 1951,
    "Terület": "37,27",
    "Irányítószám": 3895,
    "Mióta város": 2001,
    "Népsűrűség": 52
  },
  {
    "Név": "Gyál",
    "Megye": "Pest",
    "Népesség": 23486,
    "Terület": "24,93",
    "Irányítószám": 2360,
    "Mióta város": 1997,
    "Népsűrűség": 942
  },
  {
    "Név": "Gyomaendrőd",
    "Megye": "Békés",
    "Népesség": 13674,
    "Terület": "303,94",
    "Irányítószám": 5500,
    "Mióta város": 1989,
    "Népsűrűség": 45
  },
  {
    "Név": "Gyömrő",
    "Megye": "Pest",
    "Népesség": 16670,
    "Terület": "26,51",
    "Irányítószám": 2230,
    "Mióta város": 2001,
    "Népsűrűség": 629
  },
  {
    "Név": "Gyöngyös",
    "Megye": "Heves",
    "Népesség": 32385,
    "Terület": "55,31",
    "Irányítószám": 3200,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 586
  },
  {
    "Név": "Gyöngyöspata",
    "Megye": "Heves",
    "Népesség": 2472,
    "Terület": "60,75",
    "Irányítószám": 3035,
    "Mióta város": 2013,
    "Népsűrűség": 41
  },
  {
    "Név": "Gyönk",
    "Megye": "Tolna",
    "Népesség": 2066,
    "Terület": "38,12",
    "Irányítószám": 7064,
    "Mióta város": 2009,
    "Népsűrűség": 54
  },
  {
    "Név": "Győr",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 131564,
    "Terület": "174,62",
    "Irányítószám": 9000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 753
  },
  {
    "Név": "Gyula",
    "Megye": "Békés",
    "Népesség": 31679,
    "Terület": "255,8",
    "Irányítószám": 5700,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 124
  },
  {
    "Név": "Hajdúböszörmény",
    "Megye": "Hajdú-Bihar",
    "Népesség": 31306,
    "Terület": "370,78",
    "Irányítószám": 4220,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 84
  },
  {
    "Név": "Hajdúdorog",
    "Megye": "Hajdú-Bihar",
    "Népesség": 8888,
    "Terület": "100,65",
    "Irányítószám": 4087,
    "Mióta város": 1989,
    "Népsűrűség": 88
  },
  {
    "Név": "Hajdúhadház",
    "Megye": "Hajdú-Bihar",
    "Népesség": 12458,
    "Terület": "87,8",
    "Irányítószám": 4242,
    "Mióta város": 1991,
    "Népsűrűség": 142
  },
  {
    "Név": "Hajdúnánás",
    "Megye": "Hajdú-Bihar",
    "Népesség": 16975,
    "Terület": "259,62",
    "Irányítószám": 4080,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 65
  },
  {
    "Név": "Hajdúsámson",
    "Megye": "Hajdú-Bihar",
    "Népesség": 13105,
    "Terület": "69,47",
    "Irányítószám": 4251,
    "Mióta város": 2004,
    "Népsűrűség": 189
  },
  {
    "Név": "Hajdúszoboszló",
    "Megye": "Hajdú-Bihar",
    "Népesség": 23309,
    "Terület": "238,7",
    "Irányítószám": 4200,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 98
  },
  {
    "Név": "Hajós",
    "Megye": "Bács-Kiskun",
    "Népesség": 3134,
    "Terület": "89,92",
    "Irányítószám": 6344,
    "Mióta város": 2008,
    "Népsűrűség": 35
  },
  {
    "Név": "Halásztelek",
    "Megye": "Pest",
    "Népesség": 9310,
    "Terület": "8,64",
    "Irányítószám": 2314,
    "Mióta város": 2008,
    "Népsűrűség": 1078
  },
  {
    "Név": "Harkány",
    "Megye": "Baranya",
    "Népesség": 4065,
    "Terület": "25,69",
    "Irányítószám": 7815,
    "Mióta város": 1999,
    "Népsűrűség": 158
  },
  {
    "Név": "Hatvan",
    "Megye": "Heves",
    "Népesség": 20259,
    "Terület": "66,31",
    "Irányítószám": 3000,
    "Mióta város": 1945,
    "Népsűrűség": 306
  },
  {
    "Név": "Herend",
    "Megye": "Veszprém",
    "Népesség": 3339,
    "Terület": "19,56",
    "Irányítószám": 8440,
    "Mióta város": 1999,
    "Népsűrűség": 171
  },
  {
    "Név": "Heves",
    "Megye": "Heves",
    "Népesség": 10464,
    "Terület": "99,31",
    "Irányítószám": 3360,
    "Mióta város": 1984,
    "Népsűrűség": 105
  },
  {
    "Név": "Hévíz",
    "Megye": "Zala",
    "Népesség": 4375,
    "Terület": "8,31",
    "Irányítószám": 8380,
    "Mióta város": 1992,
    "Népsűrűség": 526
  },
  {
    "Név": "Hódmezővásárhely",
    "Megye": "Csongrád",
    "Népesség": 46522,
    "Terület": "487,98",
    "Irányítószám": 6800,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 95
  },
  {
    "Név": "Ibrány",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 6842,
    "Terület": "60,39",
    "Irányítószám": 4484,
    "Mióta város": 1993,
    "Népsűrűség": 113
  },
  {
    "Név": "Igal",
    "Megye": "Somogy",
    "Népesség": 1308,
    "Terület": "36,06",
    "Irányítószám": 7275,
    "Mióta város": 2009,
    "Népsűrűség": 36
  },
  {
    "Név": "Isaszeg",
    "Megye": "Pest",
    "Népesség": 11397,
    "Terület": "54,84",
    "Irányítószám": 2117,
    "Mióta város": 2008,
    "Népsűrűség": 208
  },
  {
    "Név": "Izsák",
    "Megye": "Bács-Kiskun",
    "Népesség": 5904,
    "Terület": "113,76",
    "Irányítószám": 6070,
    "Mióta város": 1997,
    "Népsűrűség": 52
  },
  {
    "Név": "Jánoshalma",
    "Megye": "Bács-Kiskun",
    "Népesség": 8937,
    "Terület": "132,21",
    "Irányítószám": 6440,
    "Mióta város": 1989,
    "Népsűrűség": 68
  },
  {
    "Név": "Jánosháza",
    "Megye": "Vas",
    "Népesség": 2401,
    "Terület": "23,41",
    "Irányítószám": 9545,
    "Mióta város": 2013,
    "Népsűrűség": 103
  },
  {
    "Név": "Jánossomorja",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 5912,
    "Terület": "148,96",
    "Irányítószám": 9241,
    "Mióta város": 2004,
    "Népsűrűség": 40
  },
  {
    "Név": "Jászapáti",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 8947,
    "Terület": "78,16",
    "Irányítószám": 5130,
    "Mióta város": 1989,
    "Népsűrűség": 114
  },
  {
    "Név": "Jászárokszállás",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 7806,
    "Terület": "77,17",
    "Irányítószám": 5123,
    "Mióta város": 1991,
    "Népsűrűség": 101
  },
  {
    "Név": "Jászberény",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 26924,
    "Terület": "221,35",
    "Irányítószám": 5100,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 122
  },
  {
    "Név": "Jászfényszaru",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 5621,
    "Terület": "76,16",
    "Irányítószám": 5126,
    "Mióta város": 1993,
    "Népsűrűség": 74
  },
  {
    "Név": "Jászkisér",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 5165,
    "Terület": "130,11",
    "Irányítószám": 5137,
    "Mióta város": 2009,
    "Népsűrűség": 40
  },
  {
    "Név": "Kaba",
    "Megye": "Hajdú-Bihar",
    "Népesség": 5932,
    "Terület": "95,04",
    "Irányítószám": 4183,
    "Mióta város": 2003,
    "Népsűrűség": 62
  },
  {
    "Név": "Kadarkút",
    "Megye": "Somogy",
    "Népesség": 2583,
    "Terület": "39,74",
    "Irányítószám": 7530,
    "Mióta város": 2005,
    "Népsűrűség": 65
  },
  {
    "Név": "Kalocsa",
    "Megye": "Bács-Kiskun",
    "Népesség": 16959,
    "Terület": "53,18",
    "Irányítószám": 6300,
    "Mióta város": 1921,
    "Népsűrűség": 319
  },
  {
    "Név": "Kaposvár",
    "Megye": "Somogy",
    "Népesség": 67686,
    "Terület": "113,59",
    "Irányítószám": 7400,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 596
  },
  {
    "Név": "Kapuvár",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 10353,
    "Terület": "96,05",
    "Irányítószám": 9330,
    "Mióta város": 1969,
    "Népsűrűség": 108
  },
  {
    "Név": "Karcag",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 19980,
    "Terület": "368,63",
    "Irányítószám": 5300,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 54
  },
  {
    "Név": "Kazincbarcika",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 28664,
    "Terület": "36,67",
    "Irányítószám": 3700,
    "Mióta város": 1954,
    "Népsűrűség": 782
  },
  {
    "Név": "Kecel",
    "Megye": "Bács-Kiskun",
    "Népesség": 8687,
    "Terület": "114,48",
    "Irányítószám": 6237,
    "Mióta város": 1993,
    "Népsűrűség": 76
  },
  {
    "Név": "Kecskemét",
    "Megye": "Bács-Kiskun",
    "Népesség": 114226,
    "Terület": "322,57",
    "Irányítószám": 6000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 354
  },
  {
    "Név": "Kemecse",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4736,
    "Terület": "38,94",
    "Irányítószám": 4501,
    "Mióta város": 2005,
    "Népsűrűség": 122
  },
  {
    "Név": "Kenderes",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 4647,
    "Terület": "111,24",
    "Irányítószám": 5331,
    "Mióta város": 2004,
    "Népsűrűség": 42
  },
  {
    "Név": "Kerekegyháza",
    "Megye": "Bács-Kiskun",
    "Népesség": 6300,
    "Terület": "81,28",
    "Irányítószám": 6041,
    "Mióta város": 2001,
    "Népsűrűség": 78
  },
  {
    "Név": "Kerepes",
    "Megye": "Pest",
    "Népesség": 10087,
    "Terület": "24,08",
    "Irányítószám": 2144,
    "Mióta város": 2013,
    "Népsűrűség": 419
  },
  {
    "Név": "Keszthely",
    "Megye": "Zala",
    "Népesség": 20895,
    "Terület": "75,98",
    "Irányítószám": 8360,
    "Mióta város": 1954,
    "Népsűrűség": 275
  },
  {
    "Név": "Kisbér",
    "Megye": "Komárom-Esztergom",
    "Népesség": 5282,
    "Terület": "52,16",
    "Irányítószám": 2870,
    "Mióta város": 1986,
    "Népsűrűség": 101
  },
  {
    "Név": "Kisköre",
    "Megye": "Heves",
    "Népesség": 2653,
    "Terület": "68,42",
    "Irányítószám": 3384,
    "Mióta város": 2005,
    "Népsűrűség": 39
  },
  {
    "Név": "Kiskőrös",
    "Megye": "Bács-Kiskun",
    "Népesség": 14259,
    "Terület": "102,23",
    "Irányítószám": 6200,
    "Mióta város": 1973,
    "Népsűrűség": 139
  },
  {
    "Név": "Kiskunfélegyháza",
    "Megye": "Bács-Kiskun",
    "Népesség": 29972,
    "Terület": "256,3",
    "Irányítószám": 6100,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 117
  },
  {
    "Név": "Kiskunhalas",
    "Megye": "Bács-Kiskun",
    "Népesség": 28427,
    "Terület": "227,58",
    "Irányítószám": 6400,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 125
  },
  {
    "Név": "Kiskunmajsa",
    "Megye": "Bács-Kiskun",
    "Népesség": 11766,
    "Terület": "221,99",
    "Irányítószám": 6120,
    "Mióta város": 1989,
    "Népsűrűség": 53
  },
  {
    "Név": "Kistarcsa",
    "Megye": "Pest",
    "Népesség": 11975,
    "Terület": "11,02",
    "Irányítószám": 2143,
    "Mióta város": 2005,
    "Népsűrűség": 1087
  },
  {
    "Név": "Kistelek",
    "Megye": "Csongrád",
    "Népesség": 7020,
    "Terület": "69,19",
    "Irányítószám": 6760,
    "Mióta város": 1989,
    "Népsűrűség": 101
  },
  {
    "Név": "Kisújszállás",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 11367,
    "Terület": "205,27",
    "Irányítószám": 5310,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 55
  },
  {
    "Név": "Kisvárda",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 16473,
    "Terület": "35,91",
    "Irányítószám": 4600,
    "Mióta város": 1970,
    "Népsűrűség": 459
  },
  {
    "Név": "Komádi",
    "Megye": "Hajdú-Bihar",
    "Népesség": 5172,
    "Terület": "144,65",
    "Irányítószám": 4138,
    "Mióta város": 2001,
    "Népsűrűség": 36
  },
  {
    "Név": "Komárom",
    "Megye": "Komárom-Esztergom",
    "Népesség": 19729,
    "Terület": "70,16",
    "Irányítószám": 2900,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 281
  },
  {
    "Név": "Komló",
    "Megye": "Baranya",
    "Népesség": 25020,
    "Terület": "46,55",
    "Irányítószám": 7300,
    "Mióta város": 1951,
    "Népsűrűség": 537
  },
  {
    "Név": "Kondoros",
    "Megye": "Békés",
    "Népesség": 5201,
    "Terület": "81,84",
    "Irányítószám": 5553,
    "Mióta város": 2013,
    "Népsűrűség": 64
  },
  {
    "Név": "Kozármisleny",
    "Megye": "Baranya",
    "Népesség": 6109,
    "Terület": "14,45",
    "Irányítószám": 7761,
    "Mióta város": 2007,
    "Népsűrűség": 423
  },
  {
    "Név": "Körmend",
    "Megye": "Vas",
    "Népesség": 11676,
    "Terület": "52,79",
    "Irányítószám": 9900,
    "Mióta város": 1978,
    "Népsűrűség": 221
  },
  {
    "Név": "Körösladány",
    "Megye": "Békés",
    "Népesség": 4582,
    "Terület": "123,79",
    "Irányítószám": 5516,
    "Mióta város": 2007,
    "Népsűrűség": 37
  },
  {
    "Név": "Kőszeg",
    "Megye": "Vas",
    "Népesség": 12055,
    "Terület": "54,66",
    "Irányítószám": 9730,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 221
  },
  {
    "Név": "Kunhegyes",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 7483,
    "Terület": "148,93",
    "Irányítószám": 5340,
    "Mióta város": 1989,
    "Népsűrűség": 50
  },
  {
    "Név": "Kunszentmárton",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 8373,
    "Terület": "143,65",
    "Irányítószám": 5440,
    "Mióta város": 1986,
    "Népsűrűség": 58
  },
  {
    "Név": "Kunszentmiklós",
    "Megye": "Bács-Kiskun",
    "Népesség": 8515,
    "Terület": "172,11",
    "Irányítószám": 6090,
    "Mióta város": 1989,
    "Népsűrűség": 49
  },
  {
    "Név": "Lábatlan",
    "Megye": "Komárom-Esztergom",
    "Népesség": 4992,
    "Terület": "26,35",
    "Irányítószám": 2541,
    "Mióta város": 2004,
    "Népsűrűség": 189
  },
  {
    "Név": "Lajosmizse",
    "Megye": "Bács-Kiskun",
    "Népesség": 11073,
    "Terület": "164,66",
    "Irányítószám": 6050,
    "Mióta város": 1993,
    "Népsűrűség": 67
  },
  {
    "Név": "Lébény",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 3159,
    "Terület": "81,39",
    "Irányítószám": 9155,
    "Mióta város": 2013,
    "Népsűrűség": 39
  },
  {
    "Név": "Lengyeltóti",
    "Megye": "Somogy",
    "Népesség": 3227,
    "Terület": "39,57",
    "Irányítószám": 8693,
    "Mióta város": 1992,
    "Népsűrűség": 82
  },
  {
    "Név": "Lenti",
    "Megye": "Zala",
    "Népesség": 7971,
    "Terület": "73,8",
    "Irányítószám": 8960,
    "Mióta város": 1978,
    "Népsűrűség": 108
  },
  {
    "Név": "Létavértes",
    "Megye": "Hajdú-Bihar",
    "Népesség": 7090,
    "Terület": "116,62",
    "Irányítószám": 4281,
    "Mióta város": 1996,
    "Népsűrűség": 61
  },
  {
    "Név": "Letenye",
    "Megye": "Zala",
    "Népesség": 4053,
    "Terület": "41,74",
    "Irányítószám": 8868,
    "Mióta város": 1989,
    "Népsűrűség": 97
  },
  {
    "Név": "Lőrinci",
    "Megye": "Heves",
    "Népesség": 5880,
    "Terület": "23,53",
    "Irányítószám": 3021,
    "Mióta város": 1992,
    "Népsűrűség": 250
  },
  {
    "Név": "Maglód",
    "Megye": "Pest",
    "Népesség": 11989,
    "Terület": "22,37",
    "Irányítószám": 2234,
    "Mióta város": 2007,
    "Népsűrűség": 536
  },
  {
    "Név": "Mágocs",
    "Megye": "Baranya",
    "Népesség": 2388,
    "Terület": "42,54",
    "Irányítószám": 7342,
    "Mióta város": 2009,
    "Népsűrűség": 56
  },
  {
    "Név": "Makó",
    "Megye": "Csongrád",
    "Népesség": 23573,
    "Terület": "229,23",
    "Irányítószám": 6900,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 103
  },
  {
    "Név": "Mándok",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4188,
    "Terület": "28,91",
    "Irányítószám": 4644,
    "Mióta város": 2007,
    "Népsűrűség": 145
  },
  {
    "Név": "Marcali",
    "Megye": "Somogy",
    "Népesség": 11567,
    "Terület": "104,4",
    "Irányítószám": 8700,
    "Mióta város": 1977,
    "Népsűrűség": 111
  },
  {
    "Név": "Máriapócs",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 2042,
    "Terület": "22,09",
    "Irányítószám": 4326,
    "Mióta város": 1993,
    "Népsűrűség": 92
  },
  {
    "Név": "Martfű",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 6435,
    "Terület": "23,08",
    "Irányítószám": 5435,
    "Mióta város": 1989,
    "Népsűrűség": 279
  },
  {
    "Név": "Martonvásár",
    "Megye": "Fejér",
    "Népesség": 5811,
    "Terület": "31,25",
    "Irányítószám": 2462,
    "Mióta város": 2005,
    "Népsűrűség": 186
  },
  {
    "Név": "Mátészalka",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 16957,
    "Terület": "41,4",
    "Irányítószám": 4700,
    "Mióta város": 1969,
    "Népsűrűség": 410
  },
  {
    "Név": "Medgyesegyháza",
    "Megye": "Békés",
    "Népesség": 3691,
    "Terület": "64,29",
    "Irányítószám": 5666,
    "Mióta város": 2009,
    "Népsűrűség": 57
  },
  {
    "Név": "Mélykút",
    "Megye": "Bács-Kiskun",
    "Népesség": 5081,
    "Terület": "123,46",
    "Irányítószám": 6449,
    "Mióta város": 2009,
    "Népsűrűség": 41
  },
  {
    "Név": "Mezőberény",
    "Megye": "Békés",
    "Népesség": 10896,
    "Terület": "118,53",
    "Irányítószám": 5650,
    "Mióta város": 1989,
    "Népsűrűség": 92
  },
  {
    "Név": "Mezőcsát",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 5891,
    "Terület": "103,08",
    "Irányítószám": 3450,
    "Mióta város": 1991,
    "Népsűrűség": 57
  },
  {
    "Név": "Mezőhegyes",
    "Megye": "Békés",
    "Népesség": 4994,
    "Terület": "155,44",
    "Irányítószám": 5820,
    "Mióta város": 1989,
    "Népsűrűség": 32
  },
  {
    "Név": "Mezőkeresztes",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 3803,
    "Terület": "74,25",
    "Irányítószám": 3441,
    "Mióta város": 2009,
    "Népsűrűség": 51
  },
  {
    "Név": "Mezőkovácsháza",
    "Megye": "Békés",
    "Népesség": 6049,
    "Terület": "62,59",
    "Irányítószám": 5800,
    "Mióta város": 1986,
    "Népsűrűség": 97
  },
  {
    "Név": "Mezőkövesd",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 16538,
    "Terület": "100,49",
    "Irányítószám": 3400,
    "Mióta város": 1973,
    "Népsűrűség": 165
  },
  {
    "Név": "Mezőtúr",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 17337,
    "Terület": "289,72",
    "Irányítószám": 5400,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 60
  },
  {
    "Név": "Mindszent",
    "Megye": "Csongrád",
    "Népesség": 6685,
    "Terület": "59,35",
    "Irányítószám": 6630,
    "Mióta város": 1993,
    "Népsűrűség": 113
  },
  {
    "Név": "Miskolc",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 166823,
    "Terület": "236,66",
    "Irányítószám": 3500,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 705
  },
  {
    "Név": "Mohács",
    "Megye": "Baranya",
    "Népesség": 18604,
    "Terület": "112,23",
    "Irányítószám": 7700,
    "Mióta város": 1924,
    "Népsűrűség": 166
  },
  {
    "Név": "Monor",
    "Megye": "Pest",
    "Népesség": 18395,
    "Terület": "46,79",
    "Irányítószám": 2200,
    "Mióta város": 1989,
    "Népsűrűség": 393
  },
  {
    "Név": "Mór",
    "Megye": "Fejér",
    "Népesség": 14255,
    "Terület": "108,61",
    "Irányítószám": 8060,
    "Mióta város": 1984,
    "Népsűrűség": 131
  },
  {
    "Név": "Mórahalom",
    "Megye": "Csongrád",
    "Népesség": 6067,
    "Terület": "83,15",
    "Irányítószám": 6782,
    "Mióta város": 1989,
    "Népsűrűség": 73
  },
  {
    "Név": "Mosonmagyaróvár",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 32720,
    "Terület": "84,11",
    "Irányítószám": 9200,
    "Mióta város": 1921,
    "Népsűrűség": 389
  },
  {
    "Név": "Nádudvar",
    "Megye": "Hajdú-Bihar",
    "Népesség": 8768,
    "Terület": "225,91",
    "Irányítószám": 4181,
    "Mióta város": 1989,
    "Népsűrűség": 39
  },
  {
    "Név": "Nagyatád",
    "Megye": "Somogy",
    "Népesség": 10734,
    "Terület": "70,6",
    "Irányítószám": 7500,
    "Mióta város": 1971,
    "Népsűrűség": 152
  },
  {
    "Név": "Nagybajom",
    "Megye": "Somogy",
    "Népesség": 3431,
    "Terület": "108,06",
    "Irányítószám": 7561,
    "Mióta város": 2001,
    "Népsűrűség": 32
  },
  {
    "Név": "Nagyecsed",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 6042,
    "Terület": "43,85",
    "Irányítószám": 4355,
    "Mióta város": 1997,
    "Népsűrűség": 138
  },
  {
    "Név": "Nagyhalász",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 5589,
    "Terület": "44,31",
    "Irányítószám": 4485,
    "Mióta város": 1993,
    "Népsűrűség": 126
  },
  {
    "Név": "Nagykálló",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 9870,
    "Terület": "68,52",
    "Irányítószám": 4320,
    "Mióta város": 1989,
    "Népsűrűség": 144
  },
  {
    "Név": "Nagykanizsa",
    "Megye": "Zala",
    "Népesség": 49302,
    "Terület": "148,4",
    "Irányítószám": 8800,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 332
  },
  {
    "Név": "Nagykáta",
    "Megye": "Pest",
    "Népesség": 12563,
    "Terület": "81,61",
    "Irányítószám": 2760,
    "Mióta város": 1989,
    "Népsűrűség": 154
  },
  {
    "Név": "Nagykőrös",
    "Megye": "Pest",
    "Népesség": 24433,
    "Terület": "227,94",
    "Irányítószám": 2750,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 107
  },
  {
    "Név": "Nagymányok",
    "Megye": "Tolna",
    "Népesség": 2273,
    "Terület": "10,68",
    "Irányítószám": 7355,
    "Mióta város": 2009,
    "Népsűrűség": 213
  },
  {
    "Név": "Nagymaros",
    "Megye": "Pest",
    "Népesség": 4770,
    "Terület": "34,37",
    "Irányítószám": 2626,
    "Mióta város": 1996,
    "Népsűrűség": 139
  },
  {
    "Név": "Nyékládháza",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 5001,
    "Terület": "24,67",
    "Irányítószám": 3433,
    "Mióta város": 2003,
    "Népsűrűség": 203
  },
  {
    "Név": "Nyergesújfalu",
    "Megye": "Komárom-Esztergom",
    "Népesség": 7552,
    "Terület": "39,5",
    "Irányítószám": 2536,
    "Mióta város": 1989,
    "Népsűrűség": 191
  },
  {
    "Név": "Nyíradony",
    "Megye": "Hajdú-Bihar",
    "Népesség": 7798,
    "Terület": "96,59",
    "Irányítószám": 4254,
    "Mióta város": 1992,
    "Népsűrűség": 81
  },
  {
    "Név": "Nyírbátor",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 12018,
    "Terület": "66,73",
    "Irányítószám": 4300,
    "Mióta város": 1973,
    "Népsűrűség": 180
  },
  {
    "Név": "Nyíregyháza",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 117658,
    "Terület": "274,54",
    "Irányítószám": 4400,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 429
  },
  {
    "Név": "Nyírlugos",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 2701,
    "Terület": "58,38",
    "Irányítószám": 4371,
    "Mióta város": 2005,
    "Népsűrűség": 46
  },
  {
    "Név": "Nyírmada",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4762,
    "Terület": "38,8",
    "Irányítószám": 4564,
    "Mióta város": 2009,
    "Népsűrűség": 123
  },
  {
    "Név": "Nyírtelek",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 6783,
    "Terület": "67,92",
    "Irányítószám": 4461,
    "Mióta város": 2005,
    "Népsűrűség": 100
  },
  {
    "Név": "Ócsa",
    "Megye": "Pest",
    "Népesség": 9136,
    "Terület": "81,66",
    "Irányítószám": 2364,
    "Mióta város": 2005,
    "Népsűrűség": 112
  },
  {
    "Név": "Onga",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 4775,
    "Terület": "31,49",
    "Irányítószám": 3562,
    "Mióta város": 2013,
    "Népsűrűség": 152
  },
  {
    "Név": "Orosháza",
    "Megye": "Békés",
    "Népesség": 28910,
    "Terület": "202,22",
    "Irányítószám": 5900,
    "Mióta város": 1946,
    "Népsűrűség": 143
  },
  {
    "Név": "Oroszlány",
    "Megye": "Komárom-Esztergom",
    "Népesség": 18627,
    "Terület": "75,86",
    "Irányítószám": 2840,
    "Mióta város": 1954,
    "Népsűrűség": 246
  },
  {
    "Név": "Ózd",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 33750,
    "Terület": "91,65",
    "Irányítószám": 3600,
    "Mióta város": 1949,
    "Népsűrűség": 368
  },
  {
    "Név": "Őrbottyán",
    "Megye": "Pest",
    "Népesség": 7439,
    "Terület": "27,38",
    "Irányítószám": 2162,
    "Mióta város": 2013,
    "Népsűrűség": 272
  },
  {
    "Név": "Őriszentpéter",
    "Megye": "Vas",
    "Népesség": 1167,
    "Terület": "33,56",
    "Irányítószám": 9941,
    "Mióta város": 2005,
    "Népsűrűség": 35
  },
  {
    "Név": "Örkény",
    "Megye": "Pest",
    "Népesség": 4966,
    "Terület": "36,44",
    "Irányítószám": 2377,
    "Mióta város": 2004,
    "Népsűrűség": 136
  },
  {
    "Név": "Pacsa",
    "Megye": "Zala",
    "Népesség": 1758,
    "Terület": "22,71",
    "Irányítószám": 8761,
    "Mióta város": 2009,
    "Népsűrűség": 77
  },
  {
    "Név": "Paks",
    "Megye": "Tolna",
    "Népesség": 19510,
    "Terület": "154,08",
    "Irányítószám": 7030,
    "Mióta város": 1978,
    "Népsűrűség": 127
  },
  {
    "Név": "Pálháza",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 1000,
    "Terület": "6,75",
    "Irányítószám": 3994,
    "Mióta város": 2005,
    "Népsűrűség": 148
  },
  {
    "Név": "Pannonhalma",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 3937,
    "Terület": "29,58",
    "Irányítószám": 9090,
    "Mióta város": 2000,
    "Népsűrűség": 133
  },
  {
    "Név": "Pápa",
    "Megye": "Veszprém",
    "Népesség": 32052,
    "Terület": "91,62",
    "Irányítószám": 8500,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 350
  },
  {
    "Név": "Pásztó",
    "Megye": "Nógrád",
    "Népesség": 9569,
    "Terület": "72,6",
    "Irányítószám": 3060,
    "Mióta város": 1984,
    "Népsűrűség": 132
  },
  {
    "Név": "Pécel",
    "Megye": "Pest",
    "Népesség": 15437,
    "Terület": "43,63",
    "Irányítószám": 2119,
    "Mióta város": 1996,
    "Népsűrűség": 354
  },
  {
    "Név": "Pécs",
    "Megye": "Baranya",
    "Népesség": 156801,
    "Terület": "162,77",
    "Irányítószám": 7600,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 963
  },
  {
    "Név": "Pécsvárad",
    "Megye": "Baranya",
    "Népesség": 4022,
    "Terület": "36,03",
    "Irányítószám": 7720,
    "Mióta város": 1993,
    "Népsűrűség": 112
  },
  {
    "Név": "Pétervására",
    "Megye": "Heves",
    "Népesség": 2464,
    "Terület": "33,87",
    "Irányítószám": 3250,
    "Mióta város": 1989,
    "Népsűrűség": 73
  },
  {
    "Név": "Pilis",
    "Megye": "Pest",
    "Népesség": 11460,
    "Terület": "47,35",
    "Irányítószám": 2721,
    "Mióta város": 2005,
    "Népsűrűség": 242
  },
  {
    "Név": "Piliscsaba",
    "Megye": "Pest",
    "Népesség": 8381,
    "Terület": "25,57",
    "Irányítószám": 2081,
    "Mióta város": 2013,
    "Népsűrűség": 328
  },
  {
    "Név": "Pilisvörösvár",
    "Megye": "Pest",
    "Népesség": 13768,
    "Terület": "24,3",
    "Irányítószám": 2085,
    "Mióta város": 1997,
    "Népsűrűség": 567
  },
  {
    "Név": "Polgár",
    "Megye": "Hajdú-Bihar",
    "Népesség": 7915,
    "Terület": "97,44",
    "Irányítószám": 4090,
    "Mióta város": 1993,
    "Népsűrűség": 81
  },
  {
    "Név": "Polgárdi",
    "Megye": "Fejér",
    "Népesség": 6964,
    "Terület": "72,16",
    "Irányítószám": 8154,
    "Mióta város": 1997,
    "Népsűrűség": 97
  },
  {
    "Név": "Pomáz",
    "Megye": "Pest",
    "Népesség": 17101,
    "Terület": "49,03",
    "Irányítószám": 2013,
    "Mióta város": 2000,
    "Népsűrűség": 349
  },
  {
    "Név": "Pusztaszabolcs",
    "Megye": "Fejér",
    "Népesség": 5997,
    "Terület": "51,67",
    "Irányítószám": 2490,
    "Mióta város": 2008,
    "Népsűrűség": 116
  },
  {
    "Név": "Putnok",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 6634,
    "Terület": "34,72",
    "Irányítószám": 3630,
    "Mióta város": 1989,
    "Népsűrűség": 191
  },
  {
    "Név": "Püspökladány",
    "Megye": "Hajdú-Bihar",
    "Népesség": 14698,
    "Terület": "186,95",
    "Irányítószám": 4150,
    "Mióta város": 1986,
    "Népsűrűség": 79
  },
  {
    "Név": "Rácalmás",
    "Megye": "Fejér",
    "Népesség": 4488,
    "Terület": "40,64",
    "Irányítószám": 2459,
    "Mióta város": 2009,
    "Népsűrűség": 110
  },
  {
    "Név": "Ráckeve",
    "Megye": "Pest",
    "Népesség": 10022,
    "Terület": "64,09",
    "Irányítószám": 2300,
    "Mióta város": 1989,
    "Népsűrűség": 156
  },
  {
    "Név": "Rakamaz",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 4545,
    "Terület": "42,64",
    "Irányítószám": 4465,
    "Mióta város": 2000,
    "Népsűrűség": 107
  },
  {
    "Név": "Rákóczifalva",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 5359,
    "Terület": "35,94",
    "Irányítószám": 5085,
    "Mióta város": 2009,
    "Népsűrűség": 149
  },
  {
    "Név": "Répcelak",
    "Megye": "Vas",
    "Népesség": 2414,
    "Terület": "13,82",
    "Irányítószám": 9653,
    "Mióta város": 2001,
    "Népsűrűség": 175
  },
  {
    "Név": "Rétság",
    "Megye": "Nógrád",
    "Népesség": 2895,
    "Terület": "19,81",
    "Irányítószám": 2651,
    "Mióta város": 1989,
    "Népsűrűség": 146
  },
  {
    "Név": "Rudabánya",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 2488,
    "Terület": "16,46",
    "Irányítószám": 3733,
    "Mióta város": 2008,
    "Népsűrűség": 151
  },
  {
    "Név": "Sajóbábony",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 2782,
    "Terület": "13,43",
    "Irányítószám": 3792,
    "Mióta város": 2009,
    "Népsűrűség": 207
  },
  {
    "Név": "Sajószentpéter",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 11965,
    "Terület": "34,85",
    "Irányítószám": 3770,
    "Mióta város": 1989,
    "Népsűrűség": 343
  },
  {
    "Név": "Salgótarján",
    "Megye": "Nógrád",
    "Népesség": 36467,
    "Terület": "100,83",
    "Irányítószám": 3100,
    "Mióta város": 1922,
    "Népsűrűség": 362
  },
  {
    "Név": "Sándorfalva",
    "Megye": "Csongrád",
    "Népesség": 7953,
    "Terület": "55,77",
    "Irányítószám": 6762,
    "Mióta város": 2005,
    "Népsűrűség": 143
  },
  {
    "Név": "Sárbogárd",
    "Megye": "Fejér",
    "Népesség": 12448,
    "Terület": "189,33",
    "Irányítószám": 7000,
    "Mióta város": 1986,
    "Népsűrűség": 66
  },
  {
    "Név": "Sarkad",
    "Megye": "Békés",
    "Népesség": 10011,
    "Terület": "125,57",
    "Irányítószám": 5720,
    "Mióta város": 1989,
    "Népsűrűség": 80
  },
  {
    "Név": "Sárospatak",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 12590,
    "Terület": "139,11",
    "Irányítószám": 3950,
    "Mióta város": 1968,
    "Népsűrűség": 91
  },
  {
    "Név": "Sárvár",
    "Megye": "Vas",
    "Népesség": 14764,
    "Terület": "64,65",
    "Irányítószám": 9600,
    "Mióta város": 1968,
    "Népsűrűség": 228
  },
  {
    "Név": "Sásd",
    "Megye": "Baranya",
    "Népesség": 3282,
    "Terület": "14,88",
    "Irányítószám": 7370,
    "Mióta város": 1995,
    "Népsűrűség": 221
  },
  {
    "Név": "Sátoraljaújhely",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 15355,
    "Terület": "73,46",
    "Irányítószám": 3980,
    "Mióta város": 1899,
    "Népsűrűség": 209
  },
  {
    "Név": "Sellye",
    "Megye": "Baranya",
    "Népesség": 2752,
    "Terület": "25,18",
    "Irányítószám": 7960,
    "Mióta város": 1997,
    "Népsűrűség": 109
  },
  {
    "Név": "Siklós",
    "Megye": "Baranya",
    "Népesség": 9631,
    "Terület": "50,92",
    "Irányítószám": 7800,
    "Mióta város": 1977,
    "Népsűrűség": 189
  },
  {
    "Név": "Simontornya",
    "Megye": "Tolna",
    "Népesség": 4028,
    "Terület": "33,83",
    "Irányítószám": 7081,
    "Mióta város": 1995,
    "Népsűrűség": 119
  },
  {
    "Név": "Siófok",
    "Megye": "Somogy",
    "Népesség": 24375,
    "Terület": "124,66",
    "Irányítószám": 8600,
    "Mióta város": 1968,
    "Népsűrűség": 196
  },
  {
    "Név": "Solt",
    "Megye": "Bács-Kiskun",
    "Népesség": 6285,
    "Terület": "132,67",
    "Irányítószám": 6320,
    "Mióta város": 1997,
    "Népsűrűség": 47
  },
  {
    "Név": "Soltvadkert",
    "Megye": "Bács-Kiskun",
    "Népesség": 7433,
    "Terület": "108,86",
    "Irányítószám": 6230,
    "Mióta város": 1993,
    "Népsűrűség": 68
  },
  {
    "Név": "Sopron",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 61390,
    "Terület": "169,01",
    "Irányítószám": 9400,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 363
  },
  {
    "Név": "Sülysáp",
    "Megye": "Pest",
    "Népesség": 8292,
    "Terület": "47,19",
    "Irányítószám": 2241,
    "Mióta város": 2013,
    "Népsűrűség": 176
  },
  {
    "Név": "Sümeg",
    "Megye": "Veszprém",
    "Népesség": 6190,
    "Terület": "64,13",
    "Irányítószám": 8330,
    "Mióta város": 1984,
    "Népsűrűség": 97
  },
  {
    "Név": "Szabadszállás",
    "Megye": "Bács-Kiskun",
    "Népesség": 5896,
    "Terület": "164,62",
    "Irányítószám": 6080,
    "Mióta város": 1995,
    "Népsűrűség": 36
  },
  {
    "Név": "Szarvas",
    "Megye": "Békés",
    "Népesség": 17007,
    "Terület": "161,57",
    "Irányítószám": 5540,
    "Mióta város": 1966,
    "Népsűrűség": 105
  },
  {
    "Név": "Százhalombatta",
    "Megye": "Pest",
    "Népesség": 18896,
    "Terület": "28,06",
    "Irányítószám": 2440,
    "Mióta város": 1970,
    "Népsűrűség": 673
  },
  {
    "Név": "Szécsény",
    "Megye": "Nógrád",
    "Népesség": 5682,
    "Terület": "45,83",
    "Irányítószám": 3170,
    "Mióta város": 1986,
    "Népsűrűség": 124
  },
  {
    "Név": "Szeged",
    "Megye": "Csongrád",
    "Népesség": 170052,
    "Terület": 281,
    "Irányítószám": 6700,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 605
  },
  {
    "Név": "Szeghalom",
    "Megye": "Békés",
    "Népesség": 9115,
    "Terület": "217,13",
    "Irányítószám": 5520,
    "Mióta város": 1984,
    "Népsűrűség": 42
  },
  {
    "Név": "Székesfehérvár",
    "Megye": "Fejér",
    "Népesség": 101722,
    "Terület": "170,89",
    "Irányítószám": 8000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 595
  },
  {
    "Név": "Szekszárd",
    "Megye": "Tolna",
    "Népesség": 33311,
    "Terület": "96,28",
    "Irányítószám": 7100,
    "Mióta város": 1905,
    "Népsűrűség": 346
  },
  {
    "Név": "Szendrő",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 4062,
    "Terület": "53,56",
    "Irányítószám": 3752,
    "Mióta város": 1996,
    "Népsűrűség": 76
  },
  {
    "Név": "Szentendre",
    "Megye": "Pest",
    "Népesség": 26250,
    "Terület": "43,82",
    "Irányítószám": 2000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 599
  },
  {
    "Név": "Szentes",
    "Megye": "Csongrád",
    "Népesség": 28476,
    "Terület": "353,25",
    "Irányítószám": 6600,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 81
  },
  {
    "Név": "Szentgotthárd",
    "Megye": "Vas",
    "Népesség": 8839,
    "Terület": "67,73",
    "Irányítószám": 9970,
    "Mióta város": 1983,
    "Népsűrűség": 131
  },
  {
    "Név": "Szentlőrinc",
    "Megye": "Baranya",
    "Népesség": 6848,
    "Terület": "27,81",
    "Irányítószám": 7940,
    "Mióta város": 1996,
    "Népsűrűség": 246
  },
  {
    "Név": "Szerencs",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 9100,
    "Terület": "36,68",
    "Irányítószám": 3900,
    "Mióta város": 1984,
    "Népsűrűség": 248
  },
  {
    "Név": "Szigethalom",
    "Megye": "Pest",
    "Népesség": 17436,
    "Terület": "9,12",
    "Irányítószám": 2315,
    "Mióta város": 2004,
    "Népsűrűség": 1912
  },
  {
    "Név": "Szigetszentmiklós",
    "Megye": "Pest",
    "Népesség": 34877,
    "Terület": "45,65",
    "Irányítószám": 2310,
    "Mióta város": 1986,
    "Népsűrűség": 764
  },
  {
    "Név": "Szigetvár",
    "Megye": "Baranya",
    "Népesség": 10772,
    "Terület": "39,51",
    "Irányítószám": 7900,
    "Mióta város": 1966,
    "Népsűrűség": 273
  },
  {
    "Név": "Szikszó",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 5348,
    "Terület": "36,23",
    "Irányítószám": 3800,
    "Mióta város": 1989,
    "Népsűrűség": 148
  },
  {
    "Név": "Szob",
    "Megye": "Pest",
    "Népesség": 2915,
    "Terület": "17,97",
    "Irányítószám": 2628,
    "Mióta város": 2000,
    "Népsűrűség": 162
  },
  {
    "Név": "Szolnok",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 74341,
    "Terület": "187,24",
    "Irányítószám": 5000,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 397
  },
  {
    "Név": "Szombathely",
    "Megye": "Vas",
    "Népesség": 79348,
    "Terület": "97,5",
    "Irányítószám": 9700,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 814
  },
  {
    "Név": "Tab",
    "Megye": "Somogy",
    "Népesség": 4242,
    "Terület": "25,86",
    "Irányítószám": 8660,
    "Mióta város": 1989,
    "Népsűrűség": 164
  },
  {
    "Név": "Tamási",
    "Megye": "Tolna",
    "Népesség": 8389,
    "Terület": "111,96",
    "Irányítószám": 7090,
    "Mióta város": 1984,
    "Népsűrűség": 75
  },
  {
    "Név": "Tápiószele",
    "Megye": "Pest",
    "Népesség": 6122,
    "Terület": "36,99",
    "Irányítószám": 2766,
    "Mióta város": 2009,
    "Népsűrűség": 166
  },
  {
    "Név": "Tapolca",
    "Megye": "Veszprém",
    "Népesség": 15596,
    "Terület": "63,46",
    "Irányítószám": 8300,
    "Mióta város": 1966,
    "Népsűrűség": 246
  },
  {
    "Név": "Tát",
    "Megye": "Komárom-Esztergom",
    "Népesség": 5343,
    "Terület": "12,18",
    "Irányítószám": 2534,
    "Mióta város": 2013,
    "Népsűrűség": 439
  },
  {
    "Név": "Tata",
    "Megye": "Komárom-Esztergom",
    "Népesség": 24906,
    "Terület": "78,16",
    "Irányítószám": 2890,
    "Mióta város": 1954,
    "Népsűrűség": 319
  },
  {
    "Név": "Tatabánya",
    "Megye": "Komárom-Esztergom",
    "Népesség": 70003,
    "Terület": "91,42",
    "Irányítószám": 2800,
    "Mióta város": 1947,
    "Népsűrűség": 766
  },
  {
    "Név": "Téglás",
    "Megye": "Hajdú-Bihar",
    "Népesség": 6637,
    "Terület": "38,33",
    "Irányítószám": 4243,
    "Mióta város": 1991,
    "Népsűrűség": 173
  },
  {
    "Név": "Tét",
    "Megye": "Győr-Moson-Sopron",
    "Népesség": 3877,
    "Terület": "56,35",
    "Irányítószám": 9100,
    "Mióta város": 2001,
    "Népsűrűség": 69
  },
  {
    "Név": "Tiszacsege",
    "Megye": "Hajdú-Bihar",
    "Népesség": 4481,
    "Terület": "136,4",
    "Irányítószám": 4066,
    "Mióta város": 2000,
    "Népsűrűség": 33
  },
  {
    "Név": "Tiszaföldvár",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 11120,
    "Terület": "80,34",
    "Irányítószám": 5430,
    "Mióta város": 1993,
    "Népsűrűség": 138
  },
  {
    "Név": "Tiszafüred",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 10694,
    "Terület": "162,18",
    "Irányítószám": 5350,
    "Mióta város": 1984,
    "Népsűrűség": 66
  },
  {
    "Név": "Tiszakécske",
    "Megye": "Bács-Kiskun",
    "Népesség": 11237,
    "Terület": "133,27",
    "Irányítószám": 6060,
    "Mióta város": 1986,
    "Népsűrűség": 84
  },
  {
    "Név": "Tiszalök",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 5517,
    "Terület": "58,72",
    "Irányítószám": 4450,
    "Mióta város": 1992,
    "Népsűrűség": 94
  },
  {
    "Név": "Tiszaújváros",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 16557,
    "Terület": "46,04",
    "Irányítószám": 3580,
    "Mióta város": 1966,
    "Népsűrűség": 360
  },
  {
    "Név": "Tiszavasvári",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 12551,
    "Terület": "128,53",
    "Irányítószám": 4440,
    "Mióta város": 1986,
    "Népsűrűség": 98
  },
  {
    "Név": "Tokaj",
    "Megye": "Borsod-Abaúj-Zemplén",
    "Népesség": 4839,
    "Terület": "28,2",
    "Irányítószám": 3910,
    "Mióta város": 1986,
    "Népsűrűség": 172
  },
  {
    "Név": "Tolna",
    "Megye": "Tolna",
    "Népesség": 11367,
    "Terület": "71,07",
    "Irányítószám": 7130,
    "Mióta város": 1989,
    "Népsűrűség": 160
  },
  {
    "Név": "Tompa",
    "Megye": "Bács-Kiskun",
    "Népesség": 4543,
    "Terület": "81,57",
    "Irányítószám": 6422,
    "Mióta város": 2004,
    "Népsűrűség": 56
  },
  {
    "Név": "Tótkomlós",
    "Megye": "Békés",
    "Népesség": 5780,
    "Terület": "125,05",
    "Irányítószám": 5940,
    "Mióta város": 1993,
    "Népsűrűség": 46
  },
  {
    "Név": "Tököl",
    "Megye": "Pest",
    "Népesség": 10416,
    "Terület": "38,49",
    "Irányítószám": 2316,
    "Mióta város": 2001,
    "Népsűrűség": 271
  },
  {
    "Név": "Törökbálint",
    "Megye": "Pest",
    "Népesség": 13587,
    "Terület": "29,4",
    "Irányítószám": 2045,
    "Mióta város": 2007,
    "Népsűrűség": 462
  },
  {
    "Név": "Törökszentmiklós",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 21043,
    "Terület": "185,16",
    "Irányítószám": 5200,
    "Mióta város": 1952,
    "Népsűrűség": 114
  },
  {
    "Név": "Tura",
    "Megye": "Pest",
    "Népesség": 7731,
    "Terület": "55,92",
    "Irányítószám": 2194,
    "Mióta város": 2001,
    "Népsűrűség": 138
  },
  {
    "Név": "Túrkeve",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 8741,
    "Terület": "236,52",
    "Irányítószám": 5420,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 37
  },
  {
    "Név": "Újfehértó",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 13005,
    "Terület": "140,88",
    "Irányítószám": 4244,
    "Mióta város": 1992,
    "Népsűrűség": 92
  },
  {
    "Név": "Újhartyán",
    "Megye": "Pest",
    "Népesség": 2780,
    "Terület": "22,43",
    "Irányítószám": 2362,
    "Mióta város": 2013,
    "Népsűrűség": 124
  },
  {
    "Név": "Újkígyós",
    "Megye": "Békés",
    "Népesség": 5235,
    "Terület": "54,92",
    "Irányítószám": 5661,
    "Mióta város": 2009,
    "Népsűrűség": 95
  },
  {
    "Név": "Újszász",
    "Megye": "Jász-Nagykun-Szolnok",
    "Népesség": 6360,
    "Terület": "58,2",
    "Irányítószám": 5052,
    "Mióta város": 1997,
    "Népsűrűség": 109
  },
  {
    "Név": "Üllő",
    "Megye": "Pest",
    "Népesség": 11435,
    "Terület": "48,1",
    "Irányítószám": 2225,
    "Mióta város": 2005,
    "Népsűrűség": 238
  },
  {
    "Név": "Vác",
    "Megye": "Pest",
    "Népesség": 34810,
    "Terület": "61,6",
    "Irányítószám": 2600,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 565
  },
  {
    "Név": "Vaja",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 3545,
    "Terület": "28,61",
    "Irányítószám": 4562,
    "Mióta város": 2009,
    "Népsűrűség": 124
  },
  {
    "Név": "Vámospércs",
    "Megye": "Hajdú-Bihar",
    "Népesség": 5263,
    "Terület": "58,19",
    "Irányítószám": 4287,
    "Mióta város": 2001,
    "Népsűrűség": 90
  },
  {
    "Név": "Várpalota",
    "Megye": "Veszprém",
    "Népesség": 20305,
    "Terület": "77,26",
    "Irányítószám": 8100,
    "Mióta város": 1951,
    "Népsűrűség": 263
  },
  {
    "Név": "Vásárosnamény",
    "Megye": "Szabolcs-Szatmár-Bereg",
    "Népesség": 8670,
    "Terület": "65,66",
    "Irányítószám": 4800,
    "Mióta város": 1978,
    "Népsűrűség": 132
  },
  {
    "Név": "Vasvár",
    "Megye": "Vas",
    "Népesség": 4127,
    "Terület": "55,1",
    "Irányítószám": 9800,
    "Mióta város": 1986,
    "Népsűrűség": 75
  },
  {
    "Név": "Vecsés",
    "Megye": "Pest",
    "Népesség": 20910,
    "Terület": "36,17",
    "Irányítószám": 2220,
    "Mióta város": 2001,
    "Népsűrűség": 578
  },
  {
    "Név": "Velence",
    "Megye": "Fejér",
    "Népesség": 5359,
    "Terület": "33,37",
    "Irányítószám": 2481,
    "Mióta város": 2004,
    "Népsűrűség": 161
  },
  {
    "Név": "Vép",
    "Megye": "Vas",
    "Népesség": 3358,
    "Terület": "32,89",
    "Irányítószám": 9751,
    "Mióta város": 2009,
    "Népsűrűség": 102
  },
  {
    "Név": "Veresegyház",
    "Megye": "Pest",
    "Népesség": 16892,
    "Terület": "28,56",
    "Irányítószám": 2112,
    "Mióta város": 1999,
    "Népsűrűség": 591
  },
  {
    "Név": "Verpelét",
    "Megye": "Heves",
    "Népesség": 3812,
    "Terület": "53,18",
    "Irányítószám": 3351,
    "Mióta város": 2013,
    "Népsűrűség": 72
  },
  {
    "Név": "Veszprém",
    "Megye": "Veszprém",
    "Népesség": 64024,
    "Terület": "126,9",
    "Irányítószám": 8200,
    "Mióta város": "1885 előtt",
    "Népsűrűség": 505
  },
  {
    "Név": "Vésztő",
    "Megye": "Békés",
    "Népesség": 6680,
    "Terület": "125,7",
    "Irányítószám": 5530,
    "Mióta város": 2001,
    "Népsűrűség": 53
  },
  {
    "Név": "Villány",
    "Megye": "Baranya",
    "Népesség": 2474,
    "Terület": "22,02",
    "Irányítószám": 7773,
    "Mióta város": 2000,
    "Népsűrűség": 112
  },
  {
    "Név": "Visegrád",
    "Megye": "Pest",
    "Népesség": 1863,
    "Terület": "33,27",
    "Irányítószám": 2025,
    "Mióta város": 2000,
    "Népsűrűség": 56
  },
  {
    "Név": "Zalaegerszeg",
    "Megye": "Zala",
    "Népesség": 61849,
    "Terület": "102,41",
    "Irányítószám": 8900,
    "Mióta város": 1885,
    "Népsűrűség": 604
  },
  {
    "Név": "Zalakaros",
    "Megye": "Zala",
    "Népesség": 1846,
    "Terület": "17,17",
    "Irányítószám": 8749,
    "Mióta város": 1997,
    "Népsűrűség": 108
  },
  {
    "Név": "Zalalövő",
    "Megye": "Zala",
    "Népesség": 3021,
    "Terület": "52,64",
    "Irányítószám": 8999,
    "Mióta város": 2000,
    "Népsűrűség": 57
  },
  {
    "Név": "Zalaszentgrót",
    "Megye": "Zala",
    "Népesség": 6473,
    "Terület": "74,65",
    "Irányítószám": 8790,
    "Mióta város": 1984,
    "Népsűrűség": 87
  },
  {
    "Név": "Zamárdi",
    "Megye": "Somogy",
    "Népesség": 2363,
    "Terület": "45,15",
    "Irányítószám": 8621,
    "Mióta város": 2008,
    "Népsűrűség": 52
  },
  {
    "Név": "Zirc",
    "Megye": "Veszprém",
    "Népesség": 7096,
    "Terület": "37,4",
    "Irányítószám": 8420,
    "Mióta város": 1984,
    "Népsűrűség": 190
  },
  {
    "Név": "Zsámbék",
    "Megye": "Pest",
    "Népesség": 5480,
    "Terület": "33,66",
    "Irányítószám": 2072,
    "Mióta város": 2009,
    "Népsűrűség": 163
  }
]