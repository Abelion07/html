let szavak = [
  {
    "Neve": "dák háborúk",
    "Ideje": "101–106",
    "Hadviselő felek": "Róma (Trajánus)–Dácia (Decebál)",
    "Következményei": "Dácia római provincia – a limes-rendszer kiépítése"
  },
  {
    "Neve": "parthus háború",
    "Ideje": "162–166",
    "Hadviselő felek": "Róma-Parthus Birodalom",
    "Következményei": "Rómáé egész Mezopotámia – kiépítik a kelet-római határrendszert"
  },
  {
    "Neve": "hun–kínai háborúk",
    "Ideje": "304–329",
    "Hadviselő felek": "hun „hsziungnu” törzsek–Kína",
    "Következményei": "A hunok kínai államának kiépülése"
  },
  {
    "Neve": "hadrianapolisi csata",
    "Ideje": "378",
    "Hadviselő felek": "Róma–gótok",
    "Következményei": "Gót győzelem – övék a Balkán-félsziget"
  },
  {
    "Neve": "catalaunumi csata",
    "Ideje": "451",
    "Hadviselő felek": "Róma (Aetius), gótok–hunok (Attila)",
    "Következményei": "A hun terjeszkedés megállítása"
  },
  {
    "Neve": "arab hódítások",
    "Ideje": "635–650",
    "Hadviselő felek": "arabok–Bizánc, Perzsi",
    "Következményei": "Az arabok meghódítják Szíriát, Palesztinát, Mezopotámiát, Egyiptomot, Perzsiát"
  },
  {
    "Neve": "arab hódítások",
    "Ideje": "670–715",
    "Hadviselő felek": "arabok (Tarik)–berberek, közép-ázsiai országok, vizigót királyság",
    "Következményei": "Az arabok meghódítják Észak-Afrikát, az Ibériai-félszigetet, a Kaukázus vidékét, Közép-Ázsiát"
  },
  {
    "Neve": "frank hódítások",
    "Ideje": "795–796",
    "Hadviselő felek": "frank birodalom–avar birodalom",
    "Következményei": "Az avar birodalom összeomlása"
  },
  {
    "Neve": "merseburgi csata",
    "Ideje": "933",
    "Hadviselő felek": "német birodalom–magyarok",
    "Következményei": "A kalandozó magyarok első veresége"
  },
  {
    "Neve": "augsburgi csata",
    "Ideje": "955",
    "Hadviselő felek": "német birodalom–magyarok",
    "Következményei": "Magyar vereség – a nyugati irányú zsákmányoló hadjáratok megszűnése"
  },
  {
    "Neve": "hastingsi csata",
    "Ideje": "1066",
    "Hadviselő felek": "normannok (Hódító Vilmos)–angolszászok",
    "Következményei": "A normannok meghódítják Angliát"
  },
  {
    "Neve": "I. keresztes hadjárat",
    "Ideje": "1096–1099",
    "Hadviselő felek": "nyugat-európai lovagok (Bouillon Gottfried)–mohamedán emírségek",
    "Következményei": "Keresztény feudális államok kialakulása Kis-Ázsiában, Palesztinában"
  },
  {
    "Neve": "II. keresztes hadjárat",
    "Ideje": "1147–1149",
    "Hadviselő felek": "német (III. Konrád), francia (VII. Lajos) lovagok–szeldzsuk törökök, arabok",
    "Következményei": "A keresztesek veresége"
  },
  {
    "Neve": "III. keresztes hadjárat",
    "Ideje": "1189–1192",
    "Hadviselő felek": "nyugat-európai lovagok (I. Frigyes)–arabok (Szaladin)",
    "Következményei": "Az európaiak viszonylag szabadon kereskedhetnek, zarándokolhatnak Palesztinában – 1192 Jeruzsálem"
  },
  {
    "Neve": "IV. keresztes hadjárat",
    "Ideje": "1202–1204",
    "Hadviselő felek": "nyugat-európaiak–Bizánc",
    "Következményei": "Konstantinápoly bevétele, latin császárság és államok megalakulása"
  },
  {
    "Neve": "II. Frigyes keresztes hadjárata",
    "Ideje": "1228–1229",
    "Hadviselő felek": "német lovatok–arabok",
    "Következményei": "A lovagok veresége, az arabok 1244-ben végleg elfoglalják Jeruzsálemet"
  },
  {
    "Neve": "IX. Lajos második keresztes hadjárata",
    "Ideje": "1270",
    "Hadviselő felek": "francia lovagok–tuniszi szultánság",
    "Következményei": "A király és egész serege pestisben elpusztul, rövid időn belül elvesznek a keresztesek gyarmatai (Ciprus kivételével)"
  },
  {
    "Neve": "mongol invázió",
    "Ideje": "1274–1281",
    "Hadviselő felek": "mongolok-Japán",
    "Következményei": "A mongolok veresége"
  },
  {
    "Neve": "morvamezei csata",
    "Ideje": "1278",
    "Hadviselő felek": "Csehország (II. Ottokár)–Habsburgok (I. Rudolf), magyarok (Kun László)",
    "Következményei": "Cseh vereség, a Habsburg-dinasztia felemelkedésének kezdete"
  },
  {
    "Neve": "plovai csata",
    "Ideje": "1331",
    "Hadviselő felek": "Lengyelország (Lokietek Ulászló)–némeg lovagrend",
    "Következményei": "A lovagok veresége, Lengyelország egyesítése"
  },
  {
    "Neve": "százéves háború",
    "Ideje": "1338–1453",
    "Hadviselő felek": "Anglia-Franciaország (Szent Johanna)",
    "Következményei": "Az angolok Calais kivételével elvesztik, összes franciaországi birtokaikat – 1435: arrasi béke"
  },
  {
    "Neve": "rigómezei csata",
    "Ideje": "1389",
    "Hadviselő felek": "szerbek–oszmán törökök",
    "Következményei": "Szerbia török tartománnyá válik"
  },
  {
    "Neve": "grunwaldi csata",
    "Ideje": "1410",
    "Hadviselő felek": "Lengyelország, Litvánia–német lovagrend",
    "Következményei": "A német lovagrend meghódol a lengyel királynak – 1466: thoruni béke"
  },
  {
    "Neve": "várnai csata",
    "Ideje": "1444",
    "Hadviselő felek": "Magyarország (Hunyadi János)–törökök",
    "Következményei": "Török győzelem, I. Ulászló magyar király halála"
  },
  {
    "Neve": "rigómezei csata",
    "Ideje": "1448",
    "Hadviselő felek": "Magyarország (Hunyadi János)–törökök",
    "Következményei": "Magyar vereség, a törökök szabadon vonulhatnak Konstantinápoly ellen"
  },
  {
    "Neve": "Konstantinápoly ostroma",
    "Ideje": "1453",
    "Hadviselő felek": "Bizánc–törökök (II. [Hódító] Mohamed)",
    "Következményei": "Konstantinápoly eleste, a bizánci birodalom vége"
  },
  {
    "Neve": "Nándorfehérvár (Belgrád) ostroma",
    "Ideje": "1456",
    "Hadviselő felek": "Magyarország (Hunyadi János)–törökök (II. [Hódító] Mohamed)",
    "Következményei": "Sikertelen török ostrom, Magyarországot évtizedekig nem éri török támadás"
  },
  {
    "Neve": "Mexikó meghódítása",
    "Ideje": "1519–1521",
    "Hadviselő felek": "Spanyolország (Cortez)–azték birodalom (Montezuma)",
    "Következményei": "Közép- és Észak-Amerika spanyol meghódítása, az amerikai nemesfémek Európába áramlása, az „eredeti tőkefelhalmozás” kezdete Nyugat-Európában"
  },
  {
    "Neve": "mohácsi csata",
    "Ideje": "1526",
    "Hadviselő felek": "Magyarország (Tomori Pál)–törökök (II. Szulejmán)",
    "Következményei": "Magyar vereség, Budát elfoglalják a törökök (1542), a középkori magyar állam vége"
  },
  {
    "Neve": "Bécs első ostroma",
    "Ideje": "1529",
    "Hadviselő felek": "Habsburgok–törökök",
    "Következményei": "Sikertelen török ostrom, a fegyverszünet lehetővé teszi a törököknek, hogy keleti hódításokra induljanak – 1553: fegyverszünet"
  },
  {
    "Neve": "Pizarro expedíciója",
    "Ideje": "1531–1534",
    "Hadviselő felek": "Spanyolország (Pizarro)–perui inka birodalom",
    "Következményei": "A spanyolok meghódítják egész Dél-Amerikát (Brazília kivételével)"
  },
  {
    "Neve": "hosszú háború",
    "Ideje": "1558–1582",
    "Hadviselő felek": "Oroszország (IV. Iván)–Svédország, Lengyelország (Báthory István)",
    "Következményei": "Oroszország lemond a balti hódításokról – 1582: lengyel béke; 1581: svéd béke"
  },
  {
    "Neve": "Szigetvár ostroma",
    "Ideje": "1566",
    "Hadviselő felek": "Magyarország (Zrínyi Miklós), Ausztria–török birodalom (II. Szulejmán)",
    "Következményei": "Szigetvár védelme megállítja a törökök előrenyomulását Bécs felé, II. Szulejmán halála, negyedszázados béke – 1568: drinápolyi béke"
  },
  {
    "Neve": "lepantói tengeri csata",
    "Ideje": "1571",
    "Hadviselő felek": "Spanyolország (Don Juan d’Austria), Velence–török birodalom",
    "Következményei": "A török flotta veresége, Spanyolország a Földközi-tenger ura"
  },
  {
    "Neve": "angol–spanyol háborúk",
    "Ideje": "1588–1595",
    "Hadviselő felek": "Anglia–Spanyolország",
    "Következményei": "A spanyol „Armada” megsemmisülése, a spanyol tengeri hatalomvége, az angol gyarmatbirodalom kiépítésének kezdete – 1604: békekötés"
  },
  {
    "Neve": "tizenöt éves háború",
    "Ideje": "1593–1606",
    "Hadviselő felek": "Ausztria, Magyarország, Erdély (Bocskai István), Moldva, Havasalföld (Mihály vajda)–török birodalom",
    "Következményei": "Erdély újra török függőség alá kerül, de a Habsburg-uralkodók többé nem fizetnek adót a szultánnak – 1606: zsitvatoroki béke"
  },
  {
    "Neve": "harmincéves háború",
    "Ideje": "1618–1648",
    "Hadviselő felek": "az első általános európai háború (Wallenstein, Tilly, Bethlen Gábor)",
    "Következményei": "Ismét érvénybe lép az augsburgi vallásbéke; Svédország, Franciaország, Bajorország; területi nyereségek; német fejedelemségek önállóságának megerősödése; Svájc teljes függetlensége, Hollandia függetlensége – 1648: westfáliai béke"
  },
  {
    "Neve": "a Szent Liga hadjárata",
    "Ideje": "1683–1699",
    "Hadviselő felek": "pápa, Lengyelország (Sobieski János), Velence, Ausztria (Savoyai Jenő), Oroszország–török birodalom",
    "Következményei": "Bécs felmentése, Buda, majd csaknem egész Magyarország visszafoglalása a törököktől, Ausztria európai nagyhatalom – 1699: karlócai béke"
  },
  {
    "Neve": "nagy északi háború",
    "Ideje": "1699–1721",
    "Hadviselő felek": "Dánia, Lengyelország, Oroszország (I. Péter)–Svédország (XII. Károly)",
    "Következményei": "Dánia veresége Svédországtól – 1700: travendali béke"
  },
  {
    "Neve": "spanyol örökösödési háború",
    "Ideje": "1701–1713",
    "Hadviselő felek": "általános európai háború (Savoyai Jenő)",
    "Következményei": "A spanyol birodalom felosztása: a németalföldi és olasz birtokokat Ausztria kapja, Anglia kiváltságokat kap a spanyol gyarmatokon, megszerzi Gibraltárt – 1713: utrechti béke"
  },
  {
    "Neve": "osztrák örökösödési háború",
    "Ideje": "1740–1748",
    "Hadviselő felek": "Ausztria, Nagy-Britannia–Poroszország (II. Frigyes), Franciaország, Spanyolország, Bajorország",
    "Következményei": "Poroszország megszerzi Sziléziát Ausztriától – 1748: aacheni béke"
  },
  {
    "Neve": "hétéves háború",
    "Ideje": "1756–1763",
    "Hadviselő felek": "Nagy-Britannia, Poroszország-Oroszország, Ausztria, Franciaország, Szászország, Svédország",
    "Következményei": "Erdőegyensúly Ausztria és Poroszországi között, Oroszország nemcsak ázsiai, hanem európai nagyhatalom is; Anglia megszerzi Kanadát és Indiát – 1763: hubertusburgi béke"
  },
  {
    "Neve": "I. koalíció",
    "Ideje": "1793–1795",
    "Hadviselő felek": "Nagy-Britannia, Spanyolország, Ausztria, Hollandia–Franciaország",
    "Következményei": "Francia területi nyereségek, Belgium bekebelezése – 1795: bázeli béke Poroszországgal, Hollandiával, Spanyolországgal, fegyverszünet Ausztriával"
  },
  {
    "Neve": "II. koalíció",
    "Ideje": "1799–1802",
    "Hadviselő felek": "Nagy-Britannia, Oroszország, Svédország, Ausztria–Franciaország (Napóleon), Spanyolország",
    "Következményei": "Ausztria lemond minden itáliai igényéről, a britek lemondanak Máltáról, visszaadják tengerentúli gyarmati hódításaik egy részét – 1801: béke Oroszországgal, 1802: amiens-i béke a britekkel"
  },
  {
    "Neve": "III. koalíció",
    "Ideje": "1805",
    "Hadviselő felek": "Nagy-Britannia, Oroszország, Svédország, Ausztria–Franciaország (Napóleon), Spanyolország",
    "Következményei": "Ausztria elveszti Velencét, Isztriát, Dalmáciát, a Német-római Császárság megszűnése – 1805: pozsonyi béke Ausztriával"
  },
  {
    "Neve": "IV. koalíció",
    "Ideje": "1806–1807",
    "Hadviselő felek": "Nagy-Britannia, Oroszország, Poroszország, Svédország–Franciaország (Napóleon)",
    "Következményei": "Poroszország területeket enged át Oroszországnak, elismeri Napóleon fivéreinek királyságait, csatlakozik a britek elleni kontinentális zárlathoz, Napóleon létrehozza a Varsói Nagyhercegséget – 1807: tilsiti béke"
  },
  {
    "Neve": "V. koalíció",
    "Ideje": "1809",
    "Hadviselő felek": "Nagy-Britannia, Ausztria–Franciaország (Napóleon)",
    "Következményei": "Ausztria területi veszteségei, csatlakozása a kontinentális zárlathoz – 1809: bécsi béke"
  },
  {
    "Neve": "VI. koalíció („népek csatája”)",
    "Ideje": "1813",
    "Hadviselő felek": "Poroszország (Blücher), Oroszország, Svédország, Nagy-Britannia, Ausztria–Franciaország (Napóleon)",
    "Következményei": "Napóleont császárként Elba szigetére viszik, Franciaország megtartja 1792-es határait – 1814: első párizsi béke, 1914–1815: bécsi kongresszus"
  },
  {
    "Neve": "VII. koalíció (waterlooi csata)",
    "Ideje": "1815",
    "Hadviselő felek": "Nagy-Britannia (Wellington), Oroszország, Poroszország (Blücher), Ausztria–Franciaország (Napóleon)",
    "Következményei": "Franciaország visszavonul az 1789-es határok mögé, szövetséges megszállás, napóleont Szent Ilona-szigetére száműzik – 1815: második párizsi béke"
  },
  {
    "Neve": "I. ópiumháború",
    "Ideje": "1839–1842",
    "Hadviselő felek": "Kína–Nagy-Britannia",
    "Következményei": "Kína öt kikötője megnyílik az angolok előtt, akik területenkívüliséget is élveznek – 1842: nankingi béke"
  },
  {
    "Neve": "II. angol–szikh háború",
    "Ideje": "1848–1849",
    "Hadviselő felek": "britek–szikhek",
    "Következményei": "Befejeződik India teljes brit meghódítása"
  },
  {
    "Neve": "krími háború",
    "Ideje": "1853–1856",
    "Hadviselő felek": "Oroszország–Törökország, Nagy-Britannia, Franciaország",
    "Következményei": "A Fekete-tengert semlegesnek nyilvánítják, tengerszorosok elzárása minden külföldi hadihajó előtt, Besszarábia déli részét Moldva kapja, Oroszország meggyengül – 1856: párizsi béke"
  },
  {
    "Neve": "porosz–francia háború",
    "Ideje": "1870–1871",
    "Hadviselő felek": "Poroszország (Moltke), Északnémet Szövetség, délnémet államok–Franciaország (Mac Mahon)",
    "Következményei": "Francia vereség, III. Napóleon trónfosztása, Elzász és Lotharingia Németországhoz csatolása, hadisarc, a Német Császárság megalakulása – 1871: frankfurti béke"
  },
  {
    "Neve": "I. Balkán-háború",
    "Ideje": "1912",
    "Hadviselő felek": "Törökország–Szerbia, Bulgária, Görögország, Montenegró",
    "Következményei": "Török vereség, bolgár területi nyereség"
  },
  {
    "Neve": "II. Balkán-háború",
    "Ideje": "1913",
    "Hadviselő felek": "Bulgária-Szerbia, Görögország, Románia, Törökország",
    "Következményei": "Bulgári területének jelentős részét elveszíti, Szerbia megerősödik – 1913: bukaresti béke"
  },
  {
    "Neve": "I. világháború",
    "Ideje": "1914–1918",
    "Hadviselő felek": "antanthatalmak (Joffre, Foch, Bruszilov, Haig, Pershing)–központi hatalmak (Conrad, Hindenburg, Falkenhayn, Potiorek)",
    "Következményei": "Németország elveszíti gyarmatait, Elzász–Lotharingát Franciaországhoz csatolják, a Saar-vidéken 15 évre külön államot hoznak létre, szétesik az Osztrák-Magyar Monarchia, megcsonkítják Magyarországot, Bulgáriát és Törökországot – 1919–1920: versailles–triatron–sévres-i békeszerződések"
  },
  {
    "Neve": "Mandzsúria megszállása",
    "Ideje": "1931–1932",
    "Hadviselő felek": "Japán–Kína",
    "Következményei": "Mandzsuikuo bábcsászárság megalakulása, japán fennhatóság"
  },
  {
    "Neve": "II. világháború",
    "Ideje": "1939–1945",
    "Hadviselő felek": "szövetséges hatalmak (Zsukov, Eisenhower, Montgomery)–tengelyhatalmak (Keitel, Badogio, Todzso)",
    "Következményei": "A tengelyhatalmak veresége; háborús jóvátétel, Németország, Japán megszállása, területi hódításaik érvénytelenítése – 1943: olasz fegyverletétel; 1945: német és japán kapituláció; 1946–1947: párizsi béketárgyalások, majd szerződés Olaszországgal, Romániával, Bulgáriával, Magyarországgal és Finnországgal; 1951: USA–Japán különbéke"
  },
  {
    "Neve": "„szennyes háború”",
    "Ideje": "1946–1949",
    "Hadviselő felek": "Franciaország–Vietnam",
    "Következményei": "Franciaország kivonul Vietnamból, amelynek két része között a 17. szélességi fok mentén húzzák meg a demarkációs vonalat – 1954: genfi szerződés"
  },
  {
    "Neve": "I. arab-izraeli háború",
    "Ideje": "1948–1949",
    "Hadviselő felek": "Egyiptom, Szíria, Libanon, Irak, Transzjordánia–Izrael",
    "Következményei": "Izrael területi nyereségei – 1949: rodoszi fegyverszünet"
  },
  {
    "Neve": "koreai háború",
    "Ideje": "1950–1953",
    "Hadviselő felek": "Észak-Korea, kínai önkéntesek–Dél-Korea, ENSZ-zászló alatt észak-amerikai, angol, francia, ausztrál, belga, kolumbiai, etiópiai, görög, luxemburgi, holland, új-zélandi, Fülöp-szigeteki, thaiföldi, török, dél-afrikai csapatok",
    "Következményei": "Demilitarizált övezet kialakítása Észak- és Dél-Korea között – 1953: panmindzsoni fegyverszünet"
  },
  {
    "Neve": "II. arab–izraeli háború",
    "Ideje": "1956",
    "Hadviselő felek": "Egyiptom–Izrael, Anglia, Franciaország",
    "Következményei": "ENSZ békefenntartó erők mennek a hadszíntérre; Izrael kivonja csapatait a Sínai-félszigetről, Egyiptom viszont garantálja a szabad hajózást a Tirrén-szoroson át a Vörös-tengerre; az angol–francia csapatokat kivonják a Szuezi-csatorna övezetéből – 1956: tűzszünet (ENSZ)"
  },
  {
    "Neve": "III. arab–izraeli háború („hatnapos háború”)",
    "Ideje": "1967",
    "Hadviselő felek": "Egyiptom, Szíria, Jordánia–Izrael",
    "Következményei": "Izrael megszállja a Sínai-félszigetet, a gázai övezetet, a Golan-fennsíkot, Ciszjordániát, Jeruzsálem arab részét – 1967: tűzszünet"
  },
  {
    "Neve": "IV. arab–izraeli háború",
    "Ideje": "1973",
    "Hadviselő felek": "Egyiptom, Szíria, Irak, Jordánia–Izrael",
    "Következményei": "Izraeli győzelem, csapatszétválasztási egyezmény, ütközőzóna ENSZ-csapatokkal – 1973: tűzszünet (ENSZ); Izrael szakaszosan kivonul az Egyiptomból elfoglalt területekről – 1978: Camp-David, egyiptomi–izraeli különbéke"
  },
  {
    "Neve": "falklandi háború",
    "Ideje": "1982",
    "Hadviselő felek": "Argentína–Nagy-Britannia",
    "Következményei": "Argetína veresége, a Falkland- (Malvinas-) szigetcsoport brit ellenőrzés alatt marad. Argentínában megbukik a katonai junta, polgári demokratikus kormány alakul – 1982: fegyverszünet"
  },
  {
    "Neve": "V. arab-izraeli háború",
    "Ideje": "1982",
    "Hadviselő felek": "Szíria, Libanon, Palesztinai Felszabadítási Szervezet–Izrael",
    "Következményei": "Bejrútba ENSZ-csapatok vonulnak be, a palesztin egységeket kivonják a libanoni fővárosból, dél-libanoni területek izraeli ellenőrzés alatt – 1982: bejrúti tűzszünet"
  }
]