# Unihan kJapaneseKun & kJapaneseOn Error Report \[Draft\]

- **Subject: Unihan kJapaneseKun & kJapaneseOn Error Report**
- **Date: 2019-09-29**
- **Author: Michel MARIANI**

This error report intends to correct issues found in the `kJapaneseKun` and `kJapaneseOn` fields of the **Unihan_Readings.txt** data file.

    # Unihan_Readings.txt
    # Date: 2018-11-09 21:36:19 GMT [JHJ]
    # Unicode version: 12.0.0

## Aims and Objectives

- Fix typos, omissions and duplicates; split accidentally joined readings; join accidentally split readings.
- Apply proper romanization to readings using modern (instead of ancient/historical) Japanese orthography.
- Conversely, restore correct romanization of pronunciations misidentified with historical orthography.
- Use recent spellings for names of chemical elements and units of measurement.
- Adopt a unique, consistent romanization style based on Hepburn (ヘボン式), not Kunrei (訓令式): ふ → always FU, not HU.
- Allow for lossless, round-trip conversion between rōmaji and kana, by extending the Hepburn system for the two syllables ぢ → DJI and づ → DZU.
- Detect and correct misclassified readings, i.e., when a `kJapaneseKun` reading should be `kJapaneseOn` instead, or vice versa.

## Proposed Modifications

The attached files **kJapaneseKun-Corrections.tsv** and **kJapaneseOn-Corrections.tsv** list all the suggested changes in tab-separated values (tsv) format.

The attached files **Unihan_Readings_kJapaneseKun-Corrected.txt** and **Unihan_Readings_kJapaneseOn-Corrected.txt** list all the suggested changes in the same format than the original data file **Unihan_Readings.txt**, but containing only the modified lines. Any line whose third tab-separated field value is empty (no readings) is meant to be deleted in the original file.

**Note**: In order to accommodate for corrections of readings making use of a single quote, e.g., to desambiguate between IWANYA (いわにゃ) and IWAN'YA (いわんや), the current syntax (regular expression) for `kJapaneseKun` (and possibly `kJapaneseOn` for the sake of consistency) would have to be updated: `[A-Z]+` → `[A-Z']+`, in the document [Unicode® Standard Annex #38 - Unicode Han Database (Unihan)](https://www.unicode.org/reports/tr18/).

## kJapaneseKun

<table>
<tr><th>Code</th><th>Char</th><th>Issue</th><th>Correction</th><th>Rationale&nbsp;/&nbsp;References</th><tr>
<tr><td>U+4E00</td><td>一</td><td>HITOTSU HITOTABI HAJIME</td><td>HITO HITOTSU HITOTABI HAJIME</td><td><a href="https://en.wiktionary.org/wiki/%E4%B8%80">一 - Wiktionary</a>:<br>Kun: ひと (hito, 一, Jōyō); ひとつ (hitotsu, 一つ, Jōyō)</td></tr>
<tr><td>U+4E03</td><td>七</td><td>NANATSU NANATABI</td><td>NANA NANO NANATSU NANATABI</td><td><a href="https://en.wiktionary.org/wiki/%E4%B8%83">七 - Wiktionary</a>:<br>Kun: なな (nana, 七, Jōyō); ななつ (nanatsu, 七つ, Jōyō); なの (nano, 七, Jōyō, uncommon)</td></tr>
<tr><td>U+4E09</td><td>三</td><td>MITSU MITABI</td><td>MI MITSU MITTSU MITABI</td><td><a href="https://en.wiktionary.org/wiki/%E4%B8%89">三 - Wiktionary</a>:<br>Kun: み (mi, 三, Jōyō); みつ (mitsu, 三つ, Jōyō); みっつ (mittsu, 三つ, Jōyō)</td></tr>
<tr><td>U+4E2B</td><td>丫</td><td>HUTAMATA AGEMAKI</td><td>FUTAMATA AGEMAKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+4E3D</td><td>丽</td><td>URUWASHI</td><td>URUWASHII</td><td>Consistent with U+9E97 麗 URUWASHII</td></tr>
<tr><td>U+4E5D</td><td>九</td><td>KOKONOTSU</td><td>KOKONO KOKONOTSU</td><td><a href="https://en.wiktionary.org/wiki/%E4%B9%9D">九 - Wiktionary</a>:<br>Kun: ここの (kokono, 九, Jōyō); ここのつ (kokonotsu, 九つ, Jōyō)</td></tr>
<tr><td>U+4E8C</td><td>二</td><td>FUTATSU FUTATABI</td><td>FUTA FUTATSU FUTATABI</td><td><a href="https://en.wiktionary.org/wiki/%E4%BA%8C">二 - Wiktionary</a>:<br>Kun: ふた (futa, 二, Jōyō); ふたつ (futatsu, 二つ, Jōyō); ふつ (futsu, 二つ)</td></tr>
<tr><td>U+4E94</td><td>五</td><td>ITSUTSU</td><td>ITSU ITSUTSU</td><td><a href="https://en.wiktionary.org/wiki/%E4%BA%94">五 - Wiktionary</a>:<br>Kun: いつ (itsu, 五, Jōyō); いつつ (itsutsu, 五つ, Jōyō)</td></tr>
<tr><td>U+4EFE</td><td>仾</td><td>HIKUMERU HIKUMARU</td><td>HIKUI HIKUMERU HIKUMARU</td><td>HIKUI: kJapaneseKun, not kJapaneseOn<br><a href="https://en.wiktionary.org/wiki/%E4%BB%BE">仾 - Wiktionary</a>:<br>Kun: ひくい(hikui),ひくめる (hikumeru), ひくまる (hikumaru)</td></tr>
<tr><td>U+4F74</td><td>佴</td><td>TASUKE SOHI NARABU ORU TSUGU</td><td>TASUKE SOI NARABU ORU TSUGU</td><td>そひ → そい (modern Japanese orthography)</td></tr>
<tr><td>U+4F7D</td><td>佽</td><td>SUBOSHIKOI NARABU TASUKERU OYOBI KAHARUGAHARU</td><td>SUBASHIKOI NARABU TASUKERU OYOBI KAWARUGAWARU</td><td>Typo: SUBOSHIKOI → SUBASHIKOI<br>かはるがはる → かわるがわる (modern Japanese orthography)</td></tr>
<tr><td>U+4F81</td><td>侁</td><td>YUKUSAMA TSUKAHI</td><td>YUKUSAMA TSUKAI</td><td>つかひ → つかい (modern Japanese orthography)</td></tr>
<tr><td>U+4F97</td><td>侗</td><td>OROKA ITAMU KATACHI NAHOI MAKOTO TSUTSUSHIMU</td><td>OROKA ITAMU KATACHI NAOI MAKOTO TSUTSUSHIMU</td><td><a href="https://tangorin.com/kanji?search=%E4%BE%97">侗 - Kanji - Japanese Dictionary Tangorin</a>:<br>おろか・いたむ・かたち・なおい・まこと・つつしむ</td></tr>
<tr><td>U+4F9A</td><td>侚</td><td>SUMIYAKA SHIMESU TONAERU HUKAI TSUKAHU</td><td>SUMIYAKA SHIMESU TONAERU FUKAI TSUKAU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>つかふ → つかう (modern Japanese orthography)</td></tr>
<tr><td>U+4F9E</td><td>侞</td><td>HITOSHII SHITAGAHENARASU</td><td>HITOSHII SHITAGAENARASU</td><td>したがへならす → したがえならす (modern Japanese orthography)</td></tr>
<tr><td>U+4FA0</td><td>侠</td><td>OTOKODATE KYAN</td><td>OTOKODATE</td><td>KYAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+4FBB</td><td>侻</td><td>KANAHU YOI TEGARU TAYASUI KARUI</td><td>KANAU YOI TEGARU TAYASUI KARUI</td><td>かなふ → かなう (modern Japanese orthography)</td></tr>
<tr><td>U+4FCF</td><td>俏</td><td>NIRU KATADORU MIMETOISAMA</td><td>NIRU KATADORU MIMEYOISAMA</td><td><a href="https://tangorin.com/kanji?search=%E4%BF%8F">俏 - Kanji - Japanese Dictionary Tangorin</a>:<br>にる・かたどる・みめよい・やつす</td></tr>
<tr><td>U+4FD2</td><td>俒</td><td>MATSUTASHI KEGASU</td><td>MATTASHI KEGASU</td><td><a href="https://tangorin.com/kanji?search=%E4%BF%92">俒 - Kanji - Japanese Dictionary Tangorin</a>:<br>まったし・けがす</td></tr>
<tr><td>U+4FD3</td><td>俓</td><td>ISOGU WAGI NAHOI KATAI</td><td>ISOGU WAGI NAOI KATAI</td><td>なほい → なおい (modern Japanese orthography)</td></tr>
<tr><td>U+4FD9</td><td>俙</td><td>UTSUTAERU KOBIHETSURAU HONOKA</td><td>UTTAERU KOBIHETSURAU HONOKA</td><td>うつたえる → うったえる (modern Japanese orthography)</td></tr>
<tr><td>U+4FE0</td><td>俠</td><td>OTOKODATE KYAN</td><td>OTOKODATE</td><td>KYAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+5018</td><td>倘</td><td>MOSHI TACHIMOTOHORU</td><td>MOSHI TACHIMOTOORU</td><td>たちもとほる → たちもとおる<br>(modern Japanese orthography)</td></tr>
<tr><td>U+501E</td><td>倞</td><td>TSUYOI AKIRAKA TOOI MOTOMERU KISOHU</td><td>TSUYOI AKIRAKA TOOI MOTOMERU KISOU</td><td>きそふ → きそう (modern Japanese orthography)</td></tr>
<tr><td>U+5039</td><td>倹</td><td>TSUZUMAYAKA</td><td>TSUDZUMAYAKA</td><td><a href="https://tangorin.com/kanji?search=%E5%80%B9">倹 - Kanji - Japanese Dictionary Tangorin</a>:<br>つましい・つづまやか</td></tr>
<tr><td>U+5052</td><td>偒</td><td>MATSUSUGU</td><td>MASSUGU</td><td><a href="https://tangorin.com/kanji?search=%E5%81%92">偒 - Kanji - Japanese Dictionary Tangorin</a>:<br>まっすぐ</td></tr>
<tr><td>U+5053</td><td>偓</td><td>KAKAHARUSAMA</td><td>KAKAWARUSAMA</td><td>かかはるさま → かかわるさま (modern Japanese orthography)</td></tr>
<tr><td>U+5057</td><td>偗</td><td>MATSUSUGUNASAMA</td><td>MASSUGUNASAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%81%97">偗 - Kanji - Japanese Dictionary Tangorin</a>:<br>まっすぐ</td></tr>
<tr><td>U+505E</td><td>偞</td><td>KARUI MIMEYOISAMA IYASHII OSU OSAHETSUKERU UTSUKUSHII</td><td>KARUI MIMEYOISAMA IYASHII OSU OSAETSUKERU UTSUKUSHII</td><td>おさへつける → おさえつける (modern Japanese orthography)</td></tr>
<tr><td>U+505F</td><td>偟</td><td>TATAZUMU SAMAYOHU TACHIMOTOHORU ITOMA</td><td>TATAZUMU SAMAYOU TACHIMOTOORU ITOMA</td><td>さまよふ → さまよう<br>たちもとほる → たちもとおる<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5061</td><td>偡</td><td>SOROTSUTESUSUMU TOTONOTSUTASAMA</td><td>SOROTTESUSUMU TOTONOTTASAMA</td><td><a href="https://en.wiktionary.org/wiki/%E5%81%A1">偡 - Wiktionary</a>:<br>Kun: そろってすすむ (sorottesusumu), ととのったさま (totonottasama)</td></tr>
<tr><td>U+5062</td><td>偢</td><td>ITSUKUSHIMANAI UREHERUSAMA</td><td>ITSUKUSHIMANAI UREERUSAMA</td><td>うれへるさま → うれえるさま (modern Japanese orthography)</td></tr>
<tr><td>U+5073</td><td>偳</td><td>CHIHISAI SUKOSHI</td><td>CHIISAI SUKOSHI</td><td>ちひさい → ちいさい (modern Japanese orthography)</td></tr>
<tr><td>U+5082</td><td>傂</td><td>KATATAGAHI HITOSHIKUNAI</td><td>KATATAGAI HITOSHIKUNAI</td><td>かたたがひ → かたたがい (modern Japanese orthography)</td></tr>
<tr><td>U+508B</td><td>傋</td><td>HETSURAHANU OROKA</td><td>HETSURAWANU OROKA</td><td>へつらはぬ → へつらわぬ (modern Japanese orthography)<br><a href="https://en.wiktionary.org/wiki/%E5%82%8B">傋 - Wiktionary</a>:<br>Kun: へつらわぬ (hetsurawanu), おろか (oroka)</td></tr>
<tr><td>U+508E</td><td>傎</td><td>SAKASAMA KURUHU</td><td>SAKASAMA KURUU</td><td>くるふ → くるう (modern Japanese orthography)</td></tr>
<tr><td>U+5092</td><td>傒</td><td>AYAHUI TSUNAGU</td><td>AYAUI TSUNAGU</td><td>あやふい → あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+5096</td><td>傖</td><td>IYASHII IYASHIIMONO RUNAKAMONO</td><td>IYASHII IYASHIIMONO INAKAMONO</td><td>Typo: RUNAKAMONO → INAKAMONO<br>Possible confusion between ゐ and る?<br><a href="https://en.wiktionary.org/wiki/%E5%82%96">傖 - Wiktionary</a>:<br>Kun: いやしい (iyashii), いやしいもの (iyashiimono), いなかもの (inakamono)</td></tr>
<tr><td>U+509C</td><td>傜</td><td>HUZOROI EDACHI TSUKAI</td><td>FUZOROI EDACHI TSUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+50BF</td><td>傿</td><td>KAKENEOSURU</td><td>KAKENEWOSURU</td><td><a href="https://en.wiktionary.org/wiki/%E5%82%BF">傿 - Wiktionary</a>:<br>Kun: かけねをする (kakeneosuru)</td></tr>
<tr><td>U+50C6</td><td>僆</td><td>HUTAGO OYOBU OHITSUKU</td><td>FUTAGO OYOBU OITSUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>おひつく → おいつく (modern Japanese orthography)</td></tr>
<tr><td>U+50D3</td><td>僓</td><td>NARAU MIYABIYAKA SHITAGAHU</td><td>NARAU MIYABIYAKA SHITAGAU</td><td>したがふ → したがう (modern Japanese orthography)</td></tr>
<tr><td>U+5103</td><td>儃</td><td>TATAZUMU YAUSU HOSHIIMAMA</td><td>TATAZUMU YOUSU HOSHIIMAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%83">儃 - Kanji - Japanese Dictionary Tangorin</a>:<br>たたずむ・ようす・ほしいまま</td></tr>
<tr><td>U+5107</td><td>儇</td><td>KASHIKOI AGIMUKU TOI MATOHU</td><td>KASHIKOI AGIMUKU TOI MATOU</td><td>まとふ → まとう (modern Japanese orthography)</td></tr>
<tr><td>U+5109</td><td>儉</td><td>TSUZUMAYAKA</td><td>TSUDZUMAYAKA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%89">儉 - Kanji - Japanese Dictionary Tangorin</a>:<br>つましい・つづまやか</td></tr>
<tr><td>U+512F</td><td>儯</td><td>MUGAI</td><td>NAGAI</td><td><a href="https://en.wiktionary.org/wiki/%E5%84%AF">儯 - Wiktionary</a>:<br>Kun: ながい (nagai)</td></tr>
<tr><td>U+5131</td><td>儱</td><td>DESAAGARANAI UYAMUYA</td><td>DEKIAGARANAI UYAMUYA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%B1">儱 - Kanji - Japanese Dictionary Tangorin</a>:<br>できあがらない・うやむや</td></tr>
<tr><td>U+5133</td><td>儳</td><td>TOTONOHANU HAYAI WARUISAMA</td><td>TOTONOWANU HAYAI WARUISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%B3">儳 - Kanji - Japanese Dictionary Tangorin</a>:<br>ととのわぬ・はやい・わるい</td></tr>
<tr><td>U+513B</td><td>儻</td><td>SUGURERU MOSHI ARUIWA</td><td>SUGURERU MOSHI ARUIHA</td><td><a href="https://en.wiktionary.org/wiki/%E5%84%BB">儻 - Wiktionary</a>:<br>Kun: すぐれる (sugureru); もし (moshi); あるいは (arui wa)</td></tr>
<tr><td>U+516B</td><td>八</td><td>YATSU YATABI</td><td>YA YOU YATSU YATTSU YATABI</td><td><a href="https://en.wiktionary.org/wiki/%E5%85%AB">八 - Wiktionary</a>:<br>Kun: や (ya, 八, Jōyō); やつ (yatsu, 八つ, Jōyō); やっつ (yattsu, 八つ, Jōyō); よう (yō, 八, Jōyō, uncommon)</td></tr>
<tr><td>U+516D</td><td>六</td><td>MUTSU MUTABI</td><td>MU MUI MUTSU MUTTSU MUTABI</td><td><a href="https://en.wiktionary.org/wiki/%E5%85%AD">六 - Wiktionary</a>:<br>Kun: む (mu, 六, Jōyō); むい (mui, 六, Jōyō, uncommon); むつ (mutsu, 六つ, Jōyō); むっつ (muttsu, 六つ, Jōyō)</td></tr>
<tr><td>U+5180</td><td>冀</td><td>KOINEGAU KOINEGAWA</td><td>KOINEGAU KOINEGAWAKUHA</td><td><a href="https://en.wiktionary.org/wiki/%E5%86%80">冀 - Wiktionary</a>:<br>Kun: こいねがう (koinegau, 冀う)←こひねがふ (kofinegafu, historical); こいねがわくは (koinegawakuha, 冀わくは)←こひねがはくは (kofinegafakufa, historical)<br>Related to【乞い願わくは・希くは・冀くは・〈庶幾〉くは】こいねがわくは</td></tr>
<tr><td>U+5198</td><td>冘</td><td>OKOTARU TAMERAHU UTAGAHU</td><td>OKOTARU TAMERAU UTAGAU</td><td>ためらふ → ためらう<br>うたがふ → うたがう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+51B5</td><td>况</td><td>IWANYA OMOMUKI</td><td>IWAN'YA OMOMUKI</td><td>Use single quote for ん disambiguation<br><a href="https://en.wiktionary.org/wiki/%E5%86%B5">况 - Wiktionary</a>:<br>Kun: いわんや (iwan'ya), おもむき (omomuki)</td></tr>
<tr><td>U+5202</td><td>刂</td><td>RITSUTOU</td><td>RITTOU</td><td>【立刀】りっとう</td></tr>
<tr><td>U+5216</td><td>刖</td><td>KIRU AYAHUI</td><td>KIRU AYAUI</td><td>あやふい → あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+5226</td><td>刦</td><td>OIYAKASU</td><td>OBIYAKASU</td><td>Consistent with:<br>• U+52AB 劫 OBIYAKASU</td></tr>
<tr><td>U+5227</td><td>刧</td><td>OBYAKASU</td><td>OBIYAKASU</td><td>Consistent with:<br>• U+52AB 劫 OBIYAKASU</td></tr>
<tr><td>U+5249</td><td>剉</td><td>KUJIKU KADOOTORU</td><td>KUJIKU KADOWOTORU</td><td><a href="https://en.wiktionary.org/wiki/%E5%89%89">剉 - Wiktionary</a>:<br>Kun: くじく (kujiku); かどをとる (kadootoru, 剉る)</td></tr>
<tr><td>U+5261</td><td>剡</td><td>SURUDOI SORUDOKUSURU KEZURU</td><td>SURUDOI SURUDOKUSURU KEZURU</td><td>Typo: SORUDOKUSURU → SURUDOKUSURU, consistent with SURUDOI<br><a href="https://tangorin.com/kanji?search=%E5%89%A1">剡 - Kanji - Japanese Dictionary Tangorin</a>:<br>するどい・するどくする・けずる</td></tr>
<tr><td>U+527D</td><td>剽</td><td>OBYAKASU</td><td>OBIYAKASU</td><td><a href="https://tangorin.com/kanji?search=%E5%89%BD">剽 - Kanji - Japanese Dictionary Tangorin</a>:<br>おびやかす・さす</td></tr>
<tr><td>U+528C</td><td>劌</td><td>SOKONAU SAKU HARI TOGE AHU</td><td>SOKONAU SAKU HARI TOGE AU</td><td>あふ → あう (modern Japanese orthography)</td></tr>
<tr><td>U+5297</td><td>劗</td><td>HERISU KIRU</td><td>HERASU KIRU</td><td><a href="https://tangorin.com/kanji?search=%E5%8A%97">劗 - Kanji - Japanese Dictionary Tangorin</a>:<br>へらす・きる</td></tr>
<tr><td>U+52A4</td><td>劤</td><td>CHIKARI</td><td>CHIKARA</td><td><a href="https://tangorin.com/kanji?search=%E5%8A%A4">劤 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちから</td></tr>
<tr><td>U+52A6</td><td>劦</td><td>NIWAKA GATOTONOU</td><td>NIWAKA TOTONOU</td><td><a href="https://tangorin.com/kanji?search=%E5%8A%A6">劦 - Kanji - Japanese Dictionary Tangorin</a>:<br>にわか・ととのう</td></tr>
<tr><td>U+52BD</td><td>劽</td><td>GAARU</td><td>GARU</td><td><a href="https://tangorin.com/kanji?search=%E5%8A%BD">劽 - Kanji - Japanese Dictionary Tangorin</a>:<br>かる</td></tr>
<tr><td>U+52BE</td><td>劾</td><td>SABAKU SHIRABEGA TSUTOMERU</td><td>SABAKU SHIRABERU TSUTOMERU</td><td>SHIRABEGA → SHIRABERU or SHIRABEGATSUKU?<br><a href="https://en.wiktionary.org/wiki/%E5%8A%BE">劾 - Wiktionary</a>:<br>Kun: さばく (sabaku); しらべる (shiraberu, 劾べる); きわめる (kiwameru); つとめる (tsutomeru)</td></tr>
<tr><td>U+52C6</td><td>勆</td><td>TSUTOI</td><td>TSUYOI</td><td><a href="https://tangorin.com/kanji?search=%E5%8B%86">勆 - Kanji - Japanese Dictionary Tangorin</a>:<br>つよい</td></tr>
<tr><td>U+52DC</td><td>勜</td><td>TSUTOI</td><td>TSUYOI</td><td><a href="https://tangorin.com/kanji?search=%E5%8B%9C">勜 - Kanji - Japanese Dictionary Tangorin</a>:<br>つよい</td></tr>
<tr><td>U+5318</td><td>匘</td><td>NAUZURU</td><td>NOUZURU</td><td>ナウ → ノウ (modern Japanese orthography)<br><a href="https://tangorin.com/kanji?search=%E5%8C%98">匘 - Kanji - Japanese Dictionary Tangorin</a>:<br>のうずる</td></tr>
<tr><td>U+533D</td><td>匽</td><td>KAKUSU HUSU NABIKU HAKO DOBU</td><td>KAKUSU FUSU NABIKU HAKO DOBU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5341</td><td>十</td><td>TOU TOTABI</td><td>TO TOO TOTABI</td><td><a href="https://en.wiktionary.org/wiki/%E5%8D%81">十 - Wiktionary</a>:<br>Kun: と (to, 十, Jōyō); とお (tō, 十, Jōyō)←とを (towo, historical)</td></tr>
<tr><td>U+537C</td><td>卼</td><td>AYAI</td><td>AYAUI</td><td><a href="https://en.wiktionary.org/wiki/%E5%8D%BC">卼 - Wiktionary</a>:<br>Kun: あやうい (ayaui, 卼うい)←あやふい (ayafui, historical)</td></tr>
<tr><td>U+5393</td><td>厓</td><td>GAKE KISHI KATAHE HATE</td><td>GAKE KISHI KATAE HATE</td><td>かたへ → かたえ (modern Japanese orthography)</td></tr>
<tr><td>U+53AF</td><td>厯</td><td>KOROMI</td><td>KOYOMI</td><td>Consistent with U+66A6 暦 KOYOMI<br><a href="https://tangorin.com/kanji?search=%E5%8E%AF">厯 - Kanji - Japanese Dictionary Tangorin</a>:<br>こよみ</td></tr>
<tr><td>U+53D5</td><td>叕</td><td>TSUZURU SUMIYAKA</td><td>TSUDZURU SUMIYAKA</td><td><a href="https://tangorin.com/kanji?search=%E5%8F%95">叕 - Kanji - Japanese Dictionary Tangorin</a>:<br>とじる・つづる・すみやか</td></tr>
<tr><td>U+540D</td><td>名</td><td>NA NANORU NAZUKERU</td><td>NA NANORU NADZUKERU</td><td><a href="https://en.wiktionary.org/wiki/%E5%90%8D">名 - Wiktionary</a>:<br>Kun: な (na, 名, Jōyō); なのる (nanoru, 名); なづける (nazukeru, 名ける)</td></tr>
<tr><td>U+544F</td><td>呏</td><td>GARON KUOTO</td><td>GARON KUOOTO</td><td>Usually in katakana: クオート (or クォート)<br><a href="https://tangorin.com/kanji?search=%E5%91%8F">呏 - Kanji - Japanese Dictionary Tangorin</a>:<br>くおおと</td></tr>
<tr><td>U+5481</td><td>咁</td><td>HUKUMU</td><td>FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5485</td><td>咅</td><td>TSUBAOHAITEINAMU</td><td>TSUBAWOHAITEINAMU</td><td><a href="https://tangorin.com/kanji?search=%E5%92%85">咅 - Kanji - Japanese Dictionary Tangorin</a>:<br>つばをはいていなむ</td></tr>
<tr><td>U+548D</td><td>咍</td><td>WARAHU YOROKOBU</td><td>WARAU YOROKOBU</td><td>わらふ → わらう (modern Japanese orthography)</td></tr>
<tr><td>U+54CD</td><td>响</td><td>HIBIIKU</td><td>HIBIKU</td><td><a href="https://en.wiktionary.org/wiki/%E5%93%8D">响 - Wiktionary</a>:<br>Kun: ひびく (hibiku, 响く)</td></tr>
<tr><td>U+5500</td><td>唀</td><td>SASOOU</td><td>SASOU</td><td>Consistent with:<br>• U+8A98 誘 SASOU</td></tr>
<tr><td>U+5505</td><td>唅</td><td>HUKUMU HUKUMASEMONO</td><td>FUKUMU FUKUMASEMONO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5509</td><td>唉</td><td>AA AAOO IYAIYAKOTAERU</td><td>AA AO IYAIYAKOTAERU</td><td><a href="https://tangorin.com/kanji?search=%E5%94%89">唉 - Kanji - Japanese Dictionary Tangorin</a>:<br>ああ・あお・いやいやこたえる</td></tr>
<tr><td>U+552B</td><td>唫</td><td>DOMORU OTOJIRU UUTAU</td><td>DOMORU KUCHIWOTOJIRU UTAUTAU</td><td><a href="https://tangorin.com/kanji?search=%E5%94%AB">唫 - Kanji - Japanese Dictionary Tangorin</a>:<br>どもる・くちをとじる・うたうたう</td></tr>
<tr><td>U+5530</td><td>唰</td><td>HANETSUKUROHU</td><td>HANETSUKUROU</td><td>はねつくろふ → はねつくろう (modern Japanese orthography)</td></tr>
<tr><td>U+5535</td><td>唵</td><td>HUKUMU</td><td>FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+553C</td><td>唼</td><td>KURAHU SUSURU TSUIBAMU HUMU</td><td>KURAU SUSURU TSUIBAMU FUMU</td><td>くらふ → くらう (modern Japanese orthography)<br>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+554E</td><td>啎</td><td>SAKARAU AU HURERU</td><td>SAKARAU AU FURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+55A2</td><td>喢</td><td>OSHIYABERI</td><td>OSHABERI</td><td>Consistent with:<br>• U+5555 啕 OSHABERI<br>• U+55A6 喦 OSHABERI</td></tr>
<tr><td>U+55CD</td><td>嗍</td><td>SUHU</td><td>SUU</td><td>すふ → すう (modern Japanese orthography)</td></tr>
<tr><td>U+55D1</td><td>嗑</td><td>OSHIYABERI AHU NOMU KATARU</td><td>OSHABERI AU NOMU KATARU</td><td>Consistent with:<br>• U+5555 啕 OSHABERI<br>• U+55A6 喦 OSHABERI<br>あふ → あう (modern Japanese orthography)</td></tr>
<tr><td>U+55DB</td><td>嗛</td><td>HUKUMU URAMU HERIKUDARU</td><td>FUKUMU URAMU HERIKUDARU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+55DE</td><td>嗞</td><td>NAGEKU WARAHU</td><td>NAGEKU WARAU</td><td>わらふ → わらう (modern Japanese orthography)</td></tr>
<tr><td>U+560D</td><td>嘍</td><td>URUSAISAAMA MIDARERU</td><td>URUSAISAMA MIDARERU</td><td><a href="https://tangorin.com/kanji?search=%E5%98%8D">嘍 - Kanji - Japanese Dictionary Tangorin</a>:<br>うるさい・みだれる</td></tr>
<tr><td>U+563B</td><td>嘻</td><td>IMASHIME YAHARAGU AA WARAHU</td><td>IMASHIME YAWARAGU AA WARAU</td><td>やはらぐ → やわらぐ<br>わらふ → わらう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+563E</td><td>嘾</td><td>HUKUMU MUSABORU</td><td>FUKUMU MUSABORU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5646</td><td>噆</td><td>HUKUMU KAMU</td><td>FUKUMU KAMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+564A</td><td>噊</td><td>AYAHUI</td><td>AYAUI</td><td>あやふい → あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+5659</td><td>噙</td><td>HUKUMU</td><td>FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5663</td><td>噣</td><td>KUSABASHI TSUIBAMU</td><td>KUCHIBASHI TSUIBAMU</td><td>Possible confusion between さ and ち?<br><a href="https://tangorin.com/kanji?search=%E5%99%A3">噣 - Kanji - Japanese Dictionary Tangorin</a>:<br>くちばし・ついばむ</td></tr>
<tr><td>U+56DB</td><td>四</td><td>YOTSU YOTABI</td><td>YO YON YOTSU YOTTSU YOTABI</td><td><a href="https://en.wiktionary.org/wiki/%E5%9B%9B">四 - Wiktionary</a>:<br>Kun: よ (yo, 四, Jōyō); よつ (yotsu, 四つ, Jōyō); よっつ (yottsu, 四つ, Jōyō); よん (yon, 四, Jōyō)</td></tr>
<tr><td>U+56E6</td><td>囦</td><td>HUCHI</td><td>FUCHI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+56EB</td><td>囫</td><td>MATSUTASHI HATSUKIRISHINAI</td><td>MATTASHI HAKKIRISHINAI</td><td><a href="https://tangorin.com/kanji?search=%E5%9B%AB">囫 - Kanji - Japanese Dictionary Tangorin</a>:<br>まったし・はっきりしない</td></tr>
<tr><td>U+5705</td><td>圅</td><td>AGO HUKUMU</td><td>AGO FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5715</td><td>圕</td><td></td><td>TOSHOKAN</td><td>TOSHOKAN: kJapaneseKun, not kJapaneseOn<br><a href="https://en.wiktionary.org/wiki/%E5%9C%95">圕 - Wiktionary</a>:<br>Kun: としょかん (toshokan, 圕)</td></tr>
<tr><td>U+5717</td><td>圗</td><td>HAKARU EGAAKU E</td><td>HAKARU EGAKU E</td><td>Typo: EGAAKU → EGAKU</td></tr>
<tr><td>U+5749</td><td>坉</td><td>HUSAGU KIZUKU UNE HUSAGARU</td><td>FUSAGU KIZUKU UNE FUSAGARU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+574B</td><td>坋</td><td>CHIRI HURIKAKERU KAKIMAZERUTSUTSUMI</td><td>CHIRI FURIKAKERU KAKIMAZERUTSUTSUMI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5752</td><td>坒</td><td>KIJIHASHI</td><td>KIZAHASHI</td><td><a href="https://tangorin.com/kanji?search=%E5%9D%92">坒 - Kanji - Japanese Dictionary Tangorin</a>:<br>きざはし</td></tr>
<tr><td>U+5762</td><td>坢</td><td>TAHIRAKA CHIRI</td><td>TAIRAKA CHIRI</td><td><a href="https://tangorin.com/kanji?search=%E5%9D%A2">坢 - Kanji - Japanese Dictionary Tangorin</a>:<br>たいらか・ちり</td></tr>
<tr><td>U+577B</td><td>坻</td><td>NAKISA KIZAHASHI SAKA NIHA TOMARU</td><td>NAGISA KIZAHASHI SAKA NIWA TOMARU</td><td><a href="https://en.wiktionary.org/wiki/%E5%9D%BB">坻 - Wiktionary</a>:<br>Kun: なぎさ (nagisa), さか (saka), にわ (niwa), とまる (tomaru)</td></tr>
<tr><td>U+5780</td><td>垀</td><td>KAMAHE WAZURAHAI</td><td>KAMAE WAZURAWAI</td><td>かまへ → かまえ<br>わずらはい → わずらわい<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5794</td><td>垔</td><td>HUSAGU</td><td>FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5797</td><td>垗</td><td>HAURIDOKORO</td><td>HAFURIDOKORO</td><td><a href="https://tangorin.com/kanji?search=%E5%9E%97">垗 - Kanji - Japanese Dictionary Tangorin</a>:<br>はふりどころ</td></tr>
<tr><td>U+579C</td><td>垜</td><td>TSUMIKASARERU</td><td>TSUMIKASANERU</td><td><a href="https://tangorin.com/kanji?search=%E5%9E%9C">垜 - Kanji - Japanese Dictionary Tangorin</a>:<br>つみかさねる</td></tr>
<tr><td>U+57A4</td><td>垤</td><td>ARIZUKA</td><td>ARIDZUKA</td><td><a href="https://en.wiktionary.org/wiki/%E5%9E%A4">垤 - Wiktionary</a>:<br>Kun: ありづか (arizuka)</td></tr>
<tr><td>U+57A8</td><td>垨</td><td>MAMOORU MORI KAMI</td><td>MAMORU MORI KAMI</td><td><a href="https://tangorin.com/kanji?search=%E5%9E%A8">垨 - Kanji - Japanese Dictionary Tangorin</a>:<br>まもる・もり・かみ</td></tr>
<tr><td>U+57BA</td><td>垺</td><td>KURUWA OHOKII SAKAN TSUKA</td><td>KURUWA OOKII SAKAN TSUKA</td><td>おほきい → おおきい (modern Japanese orthography)</td></tr>
<tr><td>U+57CF</td><td>埏</td><td>HAKAMICHI NOBORU YAHARAGERUKONERU</td><td>HAKAMICHI NOBORU YAWARAGERU KONERU</td><td>やはらげる → やわらげる (modern Japanese orthography)<br>+ split</td></tr>
<tr><td>U+57E4</td><td>埤</td><td>MASU ATAHERU TASUKERU HIKUIHIMEGAKI</td><td>MASU ATAERU TASUKERU HIKUIHIMEGAKI</td><td>あたへる → あたえる<br>(modern Japanese orthography)</td></tr>
<tr><td>U+57F6</td><td>埶</td><td>UERU WAZA IKIHOHI</td><td>UERU WAZA IKIOI</td><td>いきほひ → いきおい (modern Japanese orthography)</td></tr>
<tr><td>U+57F8</td><td>埸</td><td>SAKAHI AZE</td><td>SAKAI AZE</td><td>さかひ → さかい (modern Japanese orthography)</td></tr>
<tr><td>U+57FA</td><td>基</td><td>MOTOI MOTO MOTOZUKU</td><td>MOTOI MOTO MOTODZUKU</td><td><a href="https://en.wiktionary.org/wiki/%E5%9F%BA">基 - Wiktionary</a>:<br>Kun: もと (moto, 基, Jōyō); もとい (motoi, 基, Jōyō); もとづく (motozuku)</td></tr>
<tr><td>U+57FF</td><td>埿</td><td>NURU KOTE NUKARAMI</td><td>NURU KOTE NUKARUMI</td><td><a href="https://tangorin.com/kanji?search=%E5%9F%BF">埿 - Kanji - Japanese Dictionary Tangorin</a>:<br>ぬる・こて・ぬかるみ</td></tr>
<tr><td>U+5825</td><td>堥</td><td>KAHARAKE</td><td>KAWARAKE</td><td>かはらけ → かわらけ (modern Japanese orthography)</td></tr>
<tr><td>U+5832</td><td>堲</td><td>YAKITSUCHI MOESASHI NIKUMU ASAGU</td><td>YAKITSUCHI MOESASHI NIKUMU FUSAGU</td><td><a href="https://tangorin.com/kanji?search=%E5%A0%B2">堲 - Kanji - Japanese Dictionary Tangorin</a>:<br>やきつち・もえさし・にくむ・ふさぐ<br>Possible confusion between ア and フ, or あ and ふ?</td></tr>
<tr><td>U+583B</td><td>堻</td><td>URUHOHI URUHOU</td><td>URUOI URUOU</td><td>うるほひ → うるおい<br>うるほう → うるおう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5841</td><td>塁</td><td>TORIDE RUI</td><td>TORIDE</td><td>RUI: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+585B</td><td>塛</td><td>HUSAGARU</td><td>FUSAGARU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+585F</td><td>塟</td><td>HOUMUURU</td><td>HOUMURU</td><td><a href="https://tangorin.com/kanji?search=%E5%A1%9F">塟 - Kanji - Japanese Dictionary Tangorin</a>:<br>ほうむる</td></tr>
<tr><td>U+5863</td><td>塣</td><td>TOHORU</td><td>TOORU</td><td>とほる → とおる (modern Japanese orthography)</td></tr>
<tr><td>U+5874</td><td>塴</td><td>HAUMURU</td><td>HOUMURU</td><td>Related to U+585F 塟 HOUMURU?</td></tr>
<tr><td>U+587C</td><td>塼</td><td>KAHARA</td><td>KAWARA</td><td>かはら → かわら (modern Japanese orthography)</td></tr>
<tr><td>U+5886</td><td>墆</td><td>TAKUHAHERU TAKUHAHE TOMERUTSUTSUMI</td><td>TAKUWAERU TAKUWAE TOMERUTSUTSUMI</td><td>たくはへる → たくわえる<br>たくはへ → たくわえ<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5887</td><td>墇</td><td>HUSEGU</td><td>FUSEGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5888</td><td>墈</td><td>SAKAHI</td><td>SAKAI</td><td>さかひ → さかい (modern Japanese orthography)</td></tr>
<tr><td>U+58A3</td><td>墣</td><td>TSUIKURE</td><td>TSUCHIKURE</td><td>Same as U+5724 圤 TSUCHIKURE<br>Related to【土塊】つちくれ</td></tr>
<tr><td>U+58A5</td><td>墥</td><td>ARIZUKA</td><td>ARIDZUKA</td><td><a href="https://en.wiktionary.org/wiki/%E5%A2%A5">墥 - Wiktionary</a>:<br>Kun: ありづか (arizuka)</td></tr>
<tr><td>U+58DA</td><td>壚</td><td>RURORI</td><td>IRORI</td><td>Typo: RURORI → IRORI<br>Possible confusion between ゐ and る?<br><a href="https://tangorin.com/kanji?search=%E5%A3%9A">壚 - Kanji - Japanese Dictionary Tangorin</a>:<br>いろり</td></tr>
<tr><td>U+58FD</td><td>壽</td><td>KOTOBUKI HISASHII KOTOOGU</td><td>KOTOBUKI HISASHII KOTOHOGU</td><td>Consistent with:<br>• U+5BFF 寿 KOTOBUKI HISASHII KOTOHOGU</td></tr>
<tr><td>U+5905</td><td>夅</td><td>OORIRU OOROSU HUURU</td><td>ORIRU OROSU FURU</td><td><a href="https://tangorin.com/kanji?search=%E5%A4%85">夅 - Kanji - Japanese Dictionary Tangorin</a>:<br>おりる・おろす・ふる・くだる・くだす</td></tr>
<tr><td>U+5925</td><td>夥</td><td>OBITADA</td><td>OBITADASHII</td><td><a href="https://tangorin.com/kanji?search=%E5%A4%A5">夥 - Kanji - Japanese Dictionary Tangorin</a>:<br>おびただしい</td></tr>
<tr><td>U+5936</td><td>夶</td><td>KURAABERU</td><td>KURABERU</td><td>Consistent with:<br>• U+6BD4 比 KURABERU</td></tr>
<tr><td>U+5952</td><td>奒</td><td>TATEMATSUURU MATSURU</td><td>TATEMATSURU MATSURU</td><td><a href="https://tangorin.com/kanji?search=%E5%A5%92">奒 - Kanji - Japanese Dictionary Tangorin</a>:<br>たてまつる・まつる</td></tr>
<tr><td>U+5992</td><td>妒</td><td>NETAMU SONEMU TSUMORU HUSAGU</td><td>NETAMU SONEMU TSUMORU FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+59AE</td><td>妮</td><td>HASHITAME YAHARAKAKUMATSUHARU</td><td>HASHITAME YAWARAKAKUMATSUWARU</td><td>やはらかくまつはる → やわらかくまつわる (modern Japanese orthography)</td></tr>
<tr><td>U+59C5</td><td>姅</td><td>MIMOSAGAKIZUTSUKU</td><td>MIMOCHIGAKIZUTSUKU</td><td><a href="https://en.wiktionary.org/wiki/%E5%A7%85">姅 - Wiktionary</a>:<br>Kun: みもちがきずつく (mimochigakizutsuku)</td></tr>
<tr><td>U+59FC</td><td>姼</td><td>TAOYAME KAROGAROSHII MIMETOI</td><td>TAOYAME KAROGAROSHII MIMEYOI</td><td>Typo: MIMETOI → MIMEYOI</td></tr>
<tr><td>U+5A19</td><td>娙</td><td>SURARITOSHITEMIMEYOI HASHITAAME</td><td>SURARITOSHITEMIMEYOI HASHITAME</td><td>Typo<br>Possibly related to:<br>• U+59AE 妮 HASHITAME<br>• U+5A2D 娭 HASHITAME<br>• U+5A62 婢 HASHITAME</td></tr>
<tr><td>U+5A2D</td><td>娭</td><td>TAHOMURERU HASHITAME</td><td>TAWAMURERU HASHITAME</td><td><a href="https://tangorin.com/kanji?search=%E5%A8%AD">娭 - Kanji - Japanese Dictionary Tangorin</a>:<br>たわむれる・はしため</td></tr>
<tr><td>U+5A42</td><td>婂</td><td>BEN MEN</td><td></td><td>BEN MEN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+5A5E</td><td>婞</td><td>MOTORU MATSUSUGU</td><td>MOTORU MASSUGU</td><td><a href="https://tangorin.com/kanji?search=%E5%A9%9E">婞 - Kanji - Japanese Dictionary Tangorin</a>:<br>もとる・まっすぐ</td></tr>
<tr><td>U+5A69</td><td>婩</td><td>TOTONOU MIMEYOI MUTSUTSURISURU</td><td>TOTONOU MIMEYOI MUTTSURISURU</td><td>むつつりする → むっつりする (modern Japanese orthography)</td></tr>
<tr><td>U+5AB1</td><td>媱</td><td>MIMEYOI TAHAMURERU</td><td>MIMEYOI TAWAMURERU</td><td>たはむれる → たわむれる (modern Japanese orthography)</td></tr>
<tr><td>U+5AB2</td><td>媲</td><td>TSUREAHI</td><td>TSUREAI</td><td>つれあひ → つれあい (modern Japanese orthography)</td></tr>
<tr><td>U+5AB5</td><td>媵</td><td>OKURU TSUKISOHI OKURIME OKURIBITO</td><td>OKURU TSUKISOI OKURIME OKURIBITO</td><td>つきそひ → つきそい (modern Japanese orthography)</td></tr>
<tr><td>U+5AC2</td><td>嫂</td><td>ANYOME</td><td>ANIYOME</td><td>Typo: ANYOME → ANIYOME<br><a href="https://en.wiktionary.org/wiki/%E5%AB%82">嫂 - Wiktionary</a>:<br>Kun: あによめ (aniyome)</td></tr>
<tr><td>U+5AD5</td><td>嫕</td><td>SHITOYAKA SUNAHO</td><td>SHITOYAKA SUNAO</td><td>すなほ → すなお (modern Japanese orthography)</td></tr>
<tr><td>U+5ADB</td><td>嫛</td><td>MIDORIGO SUNAHO</td><td>MIDORIGO SUNAO</td><td>すなほ → すなお (modern Japanese orthography)</td></tr>
<tr><td>U+5AE5</td><td>嫥</td><td>MOTSUPARA TOTONOHERU</td><td>MOPPARA TOTONOERU</td><td><a href="https://tangorin.com/kanji?search=%E5%AB%A5">嫥 - Kanji - Japanese Dictionary Tangorin</a>:<br>もっぱら・ととのえる</td></tr>
<tr><td>U+5AEA</td><td>嫪</td><td>KOHISHITAHU NAYAMU</td><td>KOISHITAU NAYAMU</td><td>こひしたふ → こいしたう (modern Japanese orthography)</td></tr>
<tr><td>U+5AF4</td><td>嫴</td><td>MAKASERU SHIBARAKU HAKARU SUUBERU</td><td>MAKASERU SHIBARAKU HAKARU SUBERU</td><td>Typo: すうべる → すべる?</td></tr>
<tr><td>U+5AFD</td><td>嫽</td><td>TAWAMURERU MIMEYOI TAWARERU MIDARERU SATOI</td><td>TAWAMURERU MIMEYOI MIDARERU SATOI</td><td>Remove unlikely reading: TAWARERU?<br><a href="https://tangorin.com/kanji?search=%E5%AB%BD">嫽 - Kanji - Japanese Dictionary Tangorin</a>:<br>たわむれる・みめよい・みだれる・さとい</td></tr>
<tr><td>U+5B36</td><td>嬶</td><td>KAKA KAKAU</td><td>KAKA KAKAA</td><td><a href="https://tangorin.com/kanji?search=%E5%AC%B6">嬶 - Kanji - Japanese Dictionary Tangorin</a>:<br>かか・かかあ</td></tr>
<tr><td>U+5B48</td><td>孈</td><td>OROKADESHINAOTSUKURU</td><td>OROKADESHINAWOTSUKURU</td><td>Particle を → WO</td></tr>
<tr><td>U+5B56</td><td>孖</td><td>HUTAGO</td><td>FUTAGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5B77</td><td>孷</td><td>HUTAGO</td><td>FUTAGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5B7C</td><td>孼</td><td>WAKIBARA HIKOBAE WAZAHAHI</td><td>WAKIBARA HIKOBAE WAZAWAI</td><td>わざはひ → わざわい (modern Japanese orthography)</td></tr>
<tr><td>U+5B7F</td><td>孿</td><td>HUTAGO</td><td>FUTAGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5B84</td><td>宄</td><td>MIDARE MIKOSHIMA</td><td>MIDARE YOKOSHIMA</td><td><a href="https://tangorin.com/kanji?search=%E5%AE%84">宄 - Kanji - Japanese Dictionary Tangorin</a>:<br>みだれ・よこしま</td></tr>
<tr><td>U+5B89</td><td>安</td><td>YASUI YASUNJIRU IZUKUNSO</td><td>YASUI YASUNJIRU IZUKUNZO</td><td><a href="https://en.wiktionary.org/wiki/%E5%AE%89">安 - Wiktionary</a>:<br>Kun: やすい (yasui, 安い, Jōyō); やすらか (yasuraka, 安らか); やすんじる (yasunjiru, 安んじる); いずくんぞ (izukunzo, 安んぞ)</td></tr>
<tr><td>U+5B8A</td><td>宊</td><td>TSUUKU</td><td>TSUKU</td><td><a href="https://tangorin.com/kanji?search=%E5%AE%8A">宊 - Kanji - Japanese Dictionary Tangorin</a>:<br>つく</td></tr>
<tr><td>U+5B90</td><td>宐</td><td>MIROSHII MUBE</td><td>YOROSHII MUBE</td><td>Consistent with U+5B9C 宜 YOROSHII MUBE<br><a href="https://tangorin.com/kanji?search=%E5%AE%90">宐 - Kanji - Japanese Dictionary Tangorin</a>:<br>よろしい・よろしく</td></tr>
<tr><td>U+5BAF</td><td>宯</td><td>KIGAAGARINUSU</td><td>KIGAAGARIMUSU</td><td><a href="https://tangorin.com/kanji?search=%E5%AE%AF">宯 - Kanji - Japanese Dictionary Tangorin</a>:<br>きがあがりむす</td></tr>
<tr><td>U+5BD1</td><td>寑</td><td>HUSU NERU OKUZASHIKI</td><td>FUSU NERU OKUZASHIKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5BE0</td><td>寠</td><td>MAZUSHII YATSURERU CHIHISAI</td><td>MAZUSHII YATSURERU CHIISAI</td><td>ちひさい → ちいさい (modern Japanese orthography)</td></tr>
<tr><td>U+5C0C</td><td>尌</td><td>TATERU TATSU WARAHA SHIMOBE</td><td>TATERU TATSU WARAWA SHIMOBE</td><td><a href="https://tangorin.com/kanji?search=%E5%B0%8C">尌 - Kanji - Japanese Dictionary Tangorin</a>:<br>たてる・たつ・わらわ・しもべ</td></tr>
<tr><td>U+5C10</td><td>尐</td><td>SUKUNAI CHIHISAI</td><td>SUKUNAI CHIISAI</td><td>ちひさい → ちいさい (modern Japanese orthography)</td></tr>
<tr><td>U+5C29</td><td>尩</td><td>ASHINAE SUNENOMAGATSUTAHITO</td><td>ASHINAE SUNENOMAGATTAHITO</td><td><a href="https://en.wiktionary.org/wiki/%E5%B0%A9">尩 - Wiktionary</a>:<br>Kun: あしなえ (ashinae), すねのまがったひと (sunenomagattahito)</td></tr>
<tr><td>U+5C51</td><td>屑</td><td>ISAGYOI KUZU</td><td>ISAGIYOI KUZU</td><td><a href="https://tangorin.com/kanji?search=%E5%B1%91">屑 - Kanji - Japanese Dictionary Tangorin</a>:<br>くず・いさぎよい</td></tr>
<tr><td>U+5C75</td><td>屵</td><td>KISHIGATAKA AOGO</td><td>KISHIGATAKAI AOGO</td><td><a href="https://tangorin.com/kanji?search=%E5%B1%B5">屵 - Kanji - Japanese Dictionary Tangorin</a>:<br>きしがたかい・あおご</td></tr>
<tr><td>U+5C87</td><td>岇</td><td>YAMANOTAKIISAMA</td><td>YAMANOTAKAISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%B2%87">岇 - Kanji - Japanese Dictionary Tangorin</a>:<br>やまのたかい</td></tr>
<tr><td>U+5C8F</td><td>岏</td><td>KEHASHII TAKAI</td><td>KEWASHII TAKAI</td><td><a href="https://en.wiktionary.org/wiki/%E5%B2%8F">岏 - Wiktionary</a>:<br>Kun: けわしい (kewashii, 岏しい)←けはしい (kefasii, historical); たかい (takai, 岏い)</td></tr>
<tr><td>U+5C9F</td><td>岟</td><td>HUMOTO</td><td>FUMOTO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5CA8</td><td>岨</td><td>ISHAMA SOBA</td><td>ISHIYAMA SOBA</td><td><a href="https://en.wiktionary.org/wiki/%E5%B2%A8">岨 - Wiktionary</a>:<br>Kun: いしやま (ishiyama); そば (soba)</td></tr>
<tr><td>U+5CDC</td><td>峜</td><td>KAZOHERU</td><td>KAZOERU</td><td>かぞへる → かぞえる (modern Japanese orthography)</td></tr>
<tr><td>U+5D01</td><td>崁</td><td>KU BOMI</td><td>KUBOMI</td><td><a href="https://en.wiktionary.org/wiki/%E5%B4%81">崁 - Wiktionary</a>:<br>Kun: くぼみ (kubomi)</td></tr>
<tr><td>U+5D43</td><td>嵃</td><td>KEHASHII KEHASHIISAMA</td><td>KEWASHII KEWASHIISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%B5%83">嵃 - Kanji - Japanese Dictionary Tangorin</a>:<br>けわしい</td></tr>
<tr><td>U+5D70</td><td>嵰</td><td>YAMANOTAKUISAMA</td><td>YAMANOTAKAISAMA</td><td>Typo: related to U+5C87 岇 YAMANOTAKAISAMA</td></tr>
<tr><td>U+5DF9</td><td>巹</td><td>SHITAGAU NOBIRU SAKAZURU</td><td>SHITAGAU NOBIRU SAKAZUKI</td><td><a href="https://tangorin.com/kanji?search=%E5%B7%B9">巹 - Kanji - Japanese Dictionary Tangorin</a>:<br>したがう・のびる・さかずき</td></tr>
<tr><td>U+5E14</td><td>帔</td><td>HUKURO</td><td>FUKURO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E23</td><td>帣</td><td>HUKURO</td><td>FUKURO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E25</td><td>帥</td><td>HIKIIRU SOTSU</td><td>HIKIIRU</td><td>SOTSU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+5E28</td><td>帨</td><td>TEHUKI</td><td>TEFUKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E43</td><td>幃</td><td>TOBARI NIOIBUKU FUKURO</td><td>TOBARI NIOIBUKURO FUKURO</td><td>NIOIBUKURO: related to【匂い袋】においぶくろ<br>Consistent with U+5E50 幐 NIOIBUKURO</td></tr>
<tr><td>U+5E49</td><td>幉</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E5%B9%89">幉 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+5E56</td><td>幖</td><td>SHIRUSHI HATA NOORI</td><td>SHIRUSHI HATA NOBORI</td><td><a href="https://tangorin.com/kanji?search=%E5%B9%96">幖 - Kanji - Japanese Dictionary Tangorin</a>:<br>しるし・はた・のぼり</td></tr>
<tr><td>U+5E60</td><td>幠</td><td>OHOHI OHOHU</td><td>OOI OOU</td><td>おほひ → おおい<br>おほふ → おおう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5E6A</td><td>幪</td><td>HUKUSA</td><td>FUKUSA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E6D</td><td>幭</td><td>OHOHI</td><td>OOI</td><td>おほひ → おおい (modern Japanese orthography)</td></tr>
<tr><td>U+5E6F</td><td>幯</td><td>NUGUHU</td><td>NUGUU</td><td>ぬぐふ → ぬぐう (modern Japanese orthography)</td></tr>
<tr><td>U+5E96</td><td>庖</td><td>KURYA</td><td>KURIYA</td><td><a href="https://en.wiktionary.org/wiki/%E5%BA%96">庖 - Wiktionary</a>:<br>Kun: くりや (kuriya, 庖)</td></tr>
<tr><td>U+5EA2</td><td>庢</td><td>SAHEGIRITODOMERU</td><td>SAEGIRITODOMERU</td><td>さへぎりとどめる → さえぎりとどめる (modern Japanese orthography)</td></tr>
<tr><td>U+5EB2</td><td>庲</td><td>IHE</td><td>IE</td><td>いへ → いえ (modern Japanese orthography)</td></tr>
<tr><td>U+5ECE</td><td>廎</td><td>IHENOKATAHARA</td><td>IENOKATAWARA</td><td>いへのかたはら → いえのかたわら (modern Japanese orthography)</td></tr>
<tr><td>U+5ED5</td><td>廕</td><td>OHOHU KABAHU KAGE</td><td>OOU KABAU KAGE</td><td>おほふ → おおう<br>かばふ → かばう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5ED7</td><td>廗</td><td>IHEGAYUGAMU</td><td>IEGAYUGAMU</td><td>いへがゆがむ → いえがゆがむ (modern Japanese orthography)</td></tr>
<tr><td>U+5EDA</td><td>廚</td><td>KURYA</td><td>KURIYA</td><td>Consistent with:<br>• U+53A8 厨 KURIYA<br>• U+2228D 𢊍 KURIYA</td></tr>
<tr><td>U+5EDC</td><td>塼</td><td>IHORI</td><td>IORI</td><td>いほり → いおり (modern Japanese orthography)</td></tr>
<tr><td>U+5EDE</td><td>廞</td><td>TSURANERU OKOSU KEHASHIISAMA</td><td>TSURANERU OKOSU KEWASHIISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%BB%9E">廞 - Kanji - Japanese Dictionary Tangorin</a>:<br>つらねる・おこす・けわしい</td></tr>
<tr><td>U+5F0E</td><td>弎</td><td>MI MIITSU MIITTSU</td><td>MI MITSU MITTSU</td><td>Consistent with:<br>• U+4E09 三 MITSU</td></tr>
<tr><td>U+5F19</td><td>弙</td><td>OHATSUTENERAFU MOTSU</td><td>YUMIWOHATTENERAU MOTSU</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%99">弙 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆみをはってねらう・もつ</td></tr>
<tr><td>U+5F1D</td><td>弝</td><td>YUZUKA TSUKA</td><td>YUDZUKA TSUKA</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%9D">弝 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆづか・つか</td></tr>
<tr><td>U+5F23</td><td>弣</td><td>YUZUKA</td><td>YUDZUKA</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%A3">弣 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆづか</td></tr>
<tr><td>U+5F27</td><td>弧</td><td>KYUMI</td><td>KIYUMI</td><td>Related to【木弓】きゆみ<br><a href="https://en.wiktionary.org/wiki/%E5%BC%A7">弧 - Wiktionary</a>:<br>Kun: きゆみ (kiyumi, 弧)</td></tr>
<tr><td>U+5F29</td><td>弩</td><td>ISHUMI</td><td>ISHIYUMI</td><td>Related to【石弓・弩】いしゆみ<br><a href="https://en.wiktionary.org/wiki/%E5%BC%A9">弩 - Wiktionary</a>:<br>Kun: いしゆみ (ishiyumi, 弩); おおゆみ (ōyumi, 弩)←おほゆみ (ofoyumi, historical)</td></tr>
<tr><td>U+5F36</td><td>弶</td><td>AMIOHARU WANAOKAKERU</td><td>AMIWOHARU WANAWOKAKERU</td><td><a href="https://en.wiktionary.org/wiki/%E5%BC%B6">弶 - Wiktionary</a>:<br>Kun: あみをはる (amioharu), わなをかける (wanaokakeru)</td></tr>
<tr><td>U+5F43</td><td>彃</td><td>IRU YUMIZURU</td><td>IRU YUMIDZURU</td><td>Related to【弓弦】ゆみづる?</td></tr>
<tr><td>U+5F47</td><td>彇</td><td>YUWAZU</td><td>YUHAZU</td><td><a href="https://tangorin.com/kanji?search=%E5%BD%87">彇 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆはず<br>Related to【弓筈・弓弭・弓彇】ゆはず</td></tr>
<tr><td>U+5F4B</td><td>彋</td><td>TOBARINOHIRUGAHERUKOE</td><td>TOBARINOHIRUGAERUKOE</td><td>とばりのひるがへるこえ → とばりのひるがえるこえ (modern Japanese orthography)</td></tr>
<tr><td>U+5F7D</td><td>彽</td><td>TACHIMOTOHORU</td><td>TACHIMOTOORU</td><td>たちもとほる → たちもとおる<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5F8C</td><td>後</td><td>OKURERU NOCHI ATO</td><td>OKURERU NOCHI ATO USHIRO</td><td>USHIRO: missing common reading</td></tr>
<tr><td>U+5FAF</td><td>徯</td><td>KOMISA MOTSU</td><td>KOMICHI MOTSU</td><td>Possible confusion between さ and ち?<br><a href="https://tangorin.com/kanji?search=%E5%BE%AF">徯 - Kanji - Japanese Dictionary Tangorin</a>:<br>こみち・もつ</td></tr>
<tr><td>U+5FC4</td><td>忄</td><td>RITSUSHINBEN</td><td>RISSHINBEN</td><td>【立心偏】りっしんべん</td></tr>
<tr><td>U+6056</td><td>恖</td><td>OMOOU OMOERAKU OBOSU</td><td>OMOU OMOERAKU OBOSU</td><td>Consistent with:<br>• U+601D 思 OMOU</td></tr>
<tr><td>U+6059</td><td>恙</td><td>TSUTSUGA</td><td>TSUTSUGANAI</td><td><a href="https://tangorin.com/kanji?search=%E6%81%99">恙 - Kanji - Japanese Dictionary Tangorin</a>:<br>つつがない</td></tr>
<tr><td>U+60AA</td><td>悪</td><td>WARUI NIKUMU IZUKUNSO</td><td>WARUI NIKUMU IZUKUNZO</td><td><a href="https://en.wiktionary.org/wiki/%E6%82%AA">悪 - Wiktionary</a>:<br>Kun: わるい (warui, 悪い, Jōyō); にくむ (nikumu, 悪む); いずくんぞ (izukunzo, 悪んぞ)</td></tr>
<tr><td>U+60BE</td><td>悾</td><td>MOKOTO</td><td>MAKOTO</td><td><a href="https://en.wiktionary.org/wiki/%E6%82%BE">悾 - Wiktionary</a>:<br>Kun: まこと (makoto, 悾)</td></tr>
<tr><td>U+60DD</td><td>惝</td><td>UTSUTORISURU</td><td>UTTORISURU</td><td><a href="https://tangorin.com/kanji?search=%E6%83%9D">惝 - Kanji - Japanese Dictionary Tangorin</a>:<br>うっとりする</td></tr>
<tr><td>U+618B</td><td>憋</td><td>SETSUKACHI</td><td>SEKKACHI</td><td><a href="https://tangorin.com/kanji?search=%E6%86%8B">憋 - Kanji - Japanese Dictionary Tangorin</a>:<br>せっかち</td></tr>
<tr><td>U+619C</td><td>憜</td><td>TSUTSUMANAI</td><td>TSUTSUSHIMANAI</td><td><a href="https://tangorin.com/kanji?search=%E6%86%9C">憜 - Kanji - Japanese Dictionary Tangorin</a>:<br>つつしまない</td></tr>
<tr><td>U+61E4</td><td>懤</td><td>HOGARAKA UREHERU</td><td>HOGARAKA UREERU</td><td>うれへる → うれえる (modern Japanese orthography)</td></tr>
<tr><td>U+61EC</td><td>懬</td><td>HIROI OOKII MUNASHI TSUYOI</td><td>HIROI OOKII MUNASHII TSUYOI</td><td><a href="https://en.wiktionary.org/wiki/%E6%87%AC">懬 - Wiktionary</a>:<br>Kun: ひろい (hiroi, 懬い); おおきい (ōkii, 懬きい); むなしい (munashii, 懬しい); つよい (tsuyoi, 懬い)</td></tr>
<tr><td>U+623B</td><td>戻</td><td>MODOSU MOTORU ITARU</td><td>MODOSU MODORU ITARU</td><td><a href="https://tangorin.com/kanji?search=%E6%88%BB">戻 - Kanji - Japanese Dictionary Tangorin</a>:<br>もどす・もどる</td></tr>
<tr><td>U+6253</td><td>打</td><td>UTSU DAUSU UCHI</td><td>UTSU DAASU UCHI</td><td>DAASU: usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%BC%E3%82%B9">ダース</a></td></tr>
<tr><td>U+6254</td><td>扔</td><td>YORU HURERU SUTERU</td><td>YORU FURERU SUTERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+628D</td><td>抍</td><td>AGERU NUKU ZUKUU TORU</td><td>AGERU NUKU SUKUU TORU</td><td><a href="https://tangorin.com/kanji?search=%E6%8A%8D">抍 - Kanji - Japanese Dictionary Tangorin</a>:<br>あげる・ぬく・すくう・とる</td></tr>
<tr><td>U+62DA</td><td>拚</td><td>TEOUTSU</td><td>TEWOUTSU</td><td><a href="https://tangorin.com/kanji?search=%E6%8B%9A">拚 - Kanji - Japanese Dictionary Tangorin</a>:<br>てをうつ</td></tr>
<tr><td>U+6308</td><td>挈</td><td>HITSUSAGERU</td><td>HISSAGERU</td><td><a href="https://tangorin.com/kanji?search=%E6%8C%88">挈 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひっさげる</td></tr>
<tr><td>U+6342</td><td>捂</td><td>HURERU</td><td>FURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6371</td><td>捱</td><td>HUSEGU</td><td>FUSEGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+63A4</td><td>掤</td><td>HUTA</td><td>FUTA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+63BD</td><td>掽</td><td>TSUKU HAEZUMI</td><td>TSUKU HAEDZUMI</td><td><a href="https://en.wiktionary.org/wiki/%E6%8E%BD">掽 - Wiktionary</a>:<br>Derived terms:【掽積み】はえづみ (haezumi)</td></tr>
<tr><td>U+63E0</td><td>揠</td><td>NUKU HUDA</td><td>NUKU FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+645D</td><td>摝</td><td>NAGOKASU</td><td>UGOKASU</td><td><a href="https://tangorin.com/kanji?search=%E6%91%9D">摝 - Kanji - Japanese Dictionary Tangorin</a>:<br>うごかす</td></tr>
<tr><td>U+64C4</td><td>擄</td><td>TORIKU</td><td>TORIKO</td><td>Consistent with U+865C 虜 TORIKO</td></tr>
<tr><td>U+64D1</td><td>擑</td><td>TSUUGU</td><td>TSUGU</td><td><a href="https://tangorin.com/kanji?search=%E6%93%91">擑 - Kanji - Japanese Dictionary Tangorin</a>:<br>つぐ</td></tr>
<tr><td>U+64D5</td><td>擕</td><td>TAZUSAAERU TAZUSAAWARU</td><td>TAZUSAERU TAZUSAWARU</td><td><a href="https://en.wiktionary.org/wiki/%E6%93%95">擕 - Wiktionary</a>:<br>Kun: たずさえる (tazusaeru), たずさわる (tazusawaru)</td></tr>
<tr><td>U+64D7</td><td>擗</td><td>MUNEOUTSU</td><td>MUNEWOUTSU</td><td><a href="https://tangorin.com/kanji?search=%E6%93%97">擗 - Kanji - Japanese Dictionary Tangorin</a>:<br>むねをうつ</td></tr>
<tr><td>U+64E4</td><td>擤</td><td>HANAOKAMU</td><td>HANAWOKAMU KAMU</td><td><a href="https://tangorin.com/kanji?search=%E6%93%A4">擤 - Kanji - Japanese Dictionary Tangorin</a>:<br>かむ<br>Related to【鼻を擤む】はなをかむ</td></tr>
<tr><td>U+64ED</td><td>擭</td><td>AAGERU AAGARU</td><td>AGERU AGARU</td><td><a href="https://tangorin.com/kanji?search=%E6%93%AD">擭 - Kanji - Japanese Dictionary Tangorin</a>:<br>あげる・あがる</td></tr>
<tr><td>U+657A</td><td>敺</td><td>KAAKERU KAARU</td><td>KAKERU KARU</td><td><a href="https://tangorin.com/kanji?search=%E6%95%BA">敺 - Kanji - Japanese Dictionary Tangorin</a>:<br>かける・かる</td></tr>
<tr><td>U+65C9</td><td>旉</td><td>HU</td><td></td><td>Variant of U+6577 敷<br>HU → FU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+6635</td><td>昵</td><td>CHIKAZUKU</td><td>CHIKADZUKU</td><td><a href="https://tangorin.com/kanji?search=%E6%98%B5">昵 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちかづく</td></tr>
<tr><td>U+665C</td><td>晜</td><td></td><td>ANI</td><td>ANI: kJapaneseKun, not kJapaneseOn<br><a href="https://tangorin.com/kanji?search=%E6%99%9C">晜 - Kanji - Japanese Dictionary Tangorin</a>:<br>コン・あに</td></tr>
<tr><td>U+6680</td><td>暀</td><td>KAGAYAKIUTSUKUSHII</td><td>KAGAYAKI UTSUKUSHII</td><td><a href="https://tangorin.com/kanji?search=%E6%9A%80">暀 - Kanji - Japanese Dictionary Tangorin</a>:<br>かがやき・うつくしい・さかん</td></tr>
<tr><td>U+668F</td><td>暏</td><td>ATSUI ATSUA</td><td>ATSUI ATSUSA</td><td>Consistent with:<br>• U+6691 暑 ATSUSA</td></tr>
<tr><td>U+66B1</td><td>暱</td><td>CHIKAZUKU CHIKAZUKI</td><td>CHIKADZUKU CHIKADZUKI</td><td><a href="https://tangorin.com/kanji?search=%E6%9A%B1">暱 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちかづく</td></tr>
<tr><td>U+66CC</td><td>曌</td><td>TEERU TEERASU TEERERU</td><td>TERU TERASU TERERU</td><td><a href="https://tangorin.com/kanji?search=%E6%9B%8C">曌 - Kanji - Japanese Dictionary Tangorin</a>:<br>てる・てらす・てれる</td></tr>
<tr><td>U+66F7</td><td>曷</td><td>NANI NANZO IZUKUNSO</td><td>NANI NANZO IZUKUNZO</td><td><a href="https://tangorin.com/kanji?search=%E6%9B%B7">曷 - Kanji - Japanese Dictionary Tangorin</a>:<br>なんぞ・いつ・いずくんぞ・なに</td></tr>
<tr><td>U+670E</td><td>朎</td><td>TSUKINOUSHIINIKARI</td><td>TSUKINOUTSUKUSHIIHIKARI</td><td><a href="https://tangorin.com/kanji?search=%E6%9C%8E">朎 - Kanji - Japanese Dictionary Tangorin</a>:<br>つきのうつくしいひかり</td></tr>
<tr><td>U+670F</td><td>朏</td><td>MIKAZUKI KURAI OROKA</td><td>MIKADZUKI KURAI OROKA</td><td><a href="https://en.wiktionary.org/wiki/%E6%9C%8F">朏 - Wiktionary</a>:<br>Kun: みかづき (mikazuki, 朏)</td></tr>
<tr><td>U+6718</td><td>朘</td><td>CHIJIMARU CHIJIMU HERU</td><td>CHIDJIMARU CHIDJIMU HERU</td><td>Consistent with:<br>• U+7E2E 縮 CHIDJIMU CHIDJIMARU など</td></tr>
<tr><td>U+6719</td><td>朙</td><td>AAKARI AKAARUI AKAARUMU</td><td>AKARI AKARUI AKARUMU</td><td><a href="https://tangorin.com/kanji?search=%E6%9C%99">朙 - Kanji - Japanese Dictionary Tangorin</a>:<br>あかり・あかるい・あかるむ・あからむ・あきらか・あける・あくる・あかす</td></tr>
<tr><td>U+6722</td><td>朢</td><td>MOCHIZUKI</td><td>MOCHIDZUKI</td><td><a href="https://en.wiktionary.org/wiki/%E6%9C%A2">朢 - Wiktionary</a>:<br>Kun: もちづき (mochizuki)</td></tr>
<tr><td>U+676C</td><td>杬</td><td>HUJIMODOKI</td><td>FUJIMODOKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6784</td><td>构</td><td>KAMAAERU KAMAAU</td><td>KAMAERU KAMAU</td><td><a href="https://en.wiktionary.org/wiki/%E6%9E%84">构 - Wiktionary</a>:<br>Kun: かまえる (kamaeru), かまう (kamau)</td></tr>
<tr><td>U+678B</td><td>枋</td><td>MAYUMI FUSHIZUKE IKADA</td><td>MAYUMI FUSHIDZUKE IKADA</td><td>Consistent with etymology?:<br>ふしずけ → ふしづけ</td></tr>
<tr><td>U+6793</td><td>枓</td><td>HISHIYAKU</td><td>HISHAKU</td><td><a href="https://tangorin.com/kanji?search=%E6%9E%93">枓 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひしゃく</td></tr>
<tr><td>U+6799</td><td>枙</td><td>HUSHI</td><td>FUSHI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+679B</td><td>枛</td><td>KINOTOGI</td><td>KINOTOGE</td><td>Related to【木の棘】きのとげ<br><a href="https://tangorin.com/kanji?search=%E6%9E%9B">枛 - Kanji - Japanese Dictionary Tangorin</a>:<br>きのとげ</td></tr>
<tr><td>U+682B</td><td>栫</td><td>FUSHIZUKE KAKOMI MAGAKI</td><td>FUSHIDZUKE KAKOMI MAGAKI</td><td>Consistent with etymology?:<br>ふしずけ → ふしづけ</td></tr>
<tr><td>U+682C</td><td>栬</td><td>CHISANAKUI</td><td>CHIISANAKUI</td><td><a href="https://tangorin.com/kanji?search=%E6%A0%AC">栬 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちいさなくい</td></tr>
<tr><td>U+685B</td><td>桛</td><td>KASEI</td><td>KASE</td><td><a href="https://tangorin.com/kanji?search=%E6%A1%9B">桛 - Kanji - Japanese Dictionary Tangorin</a>:<br>かせ</td></tr>
<tr><td>U+687F</td><td>桿</td><td>TEKO POURU</td><td>TEKO POORU</td><td>POORU: usually in katakana: ポール</td></tr>
<tr><td>U+6888</td><td>梈</td><td>KIDETSUKUTSUTAOOYUMI</td><td>KIDETSUKUTTAOOYUMI</td><td>【木で作った大弓】きでつくったおおゆみ</td></tr>
<tr><td>U+68D3</td><td>棓</td><td>TSUE HUMIITA</td><td>TSUE FUMIITA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+68D9</td><td>棙</td><td>KARAKURI NEJIRU NEJIKI</td><td>KARAKURI NEJIRU NEJIKIRU</td><td><a href="https://tangorin.com/kanji?search=%E6%A3%99">棙 - Kanji - Japanese Dictionary Tangorin</a>:<br>からくり・ねじる・ねじきる</td></tr>
<tr><td>U+6909</td><td>椉</td><td>NOORU NOOSERU</td><td>NORU NOSERU</td><td>Consistent with:<br>• U+4E57 乗 NORU NOSERU<br>• U+4E58 乘 NORU</td></tr>
<tr><td>U+6911</td><td>椑</td><td>TARU HUDA</td><td>TARU FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+696C</td><td>楬</td><td>TATEHUDA</td><td>TATEFUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+69BA</td><td>榺</td><td>HATANOKEISHIWOMOTSUGU</td><td>HATAKENOISHIWOKATSUGU</td><td><a href="https://tangorin.com/kanji?search=%E6%A6%BA">榺 - Kanji - Japanese Dictionary Tangorin</a>:<br>はたけのいしをかつぐ</td></tr>
<tr><td>U+69D6</td><td>槖</td><td>HUKURO HUIGO</td><td>FUKURO FUIGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6A50</td><td>橐</td><td>HUKURO HUIGO</td><td>FUKURO FUIGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6A62</td><td>橢</td><td>KOBANGA</td><td>KOBANGATA</td><td>Related to【小判形】こばんがた</td></tr>
<tr><td>U+6A67</td><td>橧</td><td>SOMAI</td><td>SUMAI</td><td><a href="https://tangorin.com/kanji?search=%E6%A9%A7">橧 - Kanji - Japanese Dictionary Tangorin</a>:<br>すまい</td></tr>
<tr><td>U+6A6B</td><td>橫</td><td>YOKO YOKOTAWARU YOKOTAERU YOKO YOKOTAWARU YOKOTAERU</td><td>YOKO YOKOTAWARU YOKOTAERU</td><td>Duplicate readings:<br><a href="https://unicode.org/mail-arch/unicode-ml/y2010-m08/0184.html">https://unicode.org/mail-arch/unicode-ml/y2010-m08/0184.html</a></td></tr>
<tr><td>U+6AD0</td><td>櫐</td><td>HUJI</td><td>FUJI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6B28</td><td>欨</td><td>HUKU</td><td>FUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6B6E</td><td>歮</td><td>SHIBU SHIBUUI SHIBUURU</td><td>SHIBU SHIBUI SHIBURU</td><td><a href="https://tangorin.com/kanji?search=%E6%AD%AE">歮 - Kanji - Japanese Dictionary Tangorin</a>:<br>しぶ・しぶい・しぶる</td></tr>
<tr><td>U+6BC9</td><td>毉</td><td>ISHIYA</td><td>ISHA</td><td>Related to【医者】いしゃ</td></tr>
<tr><td>U+6C10</td><td>氐</td><td>HUMOTO</td><td>FUMOTO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6C4F</td><td>汏</td><td>ARUU</td><td>ARAU</td><td><a href="https://tangorin.com/kanji?search=%E6%B1%8F">汏 - Kanji - Japanese Dictionary Tangorin</a>:<br>あらう</td></tr>
<tr><td>U+6C59</td><td>汙</td><td>KEGAASU KEGAARERU TOGOOSU KEGAARERUKEGAARUWASHII</td><td>KEGASU KEGARERU YOGOSU KEGARAWASHII</td><td>Deliberate vandalism?<br><a href="https://tangorin.com/kanji?search=%E6%B1%99">汙 - Kanji - Japanese Dictionary Tangorin</a>:<br>けがす・けがれる・けがらわしい・よごす・よごれる・きたない</td></tr>
<tr><td>U+6C89</td><td>沉</td><td>SHIZUUMU SHIZUUMERU</td><td>SHIZUMU SHIZUMERU</td><td>Consistent with:<br>• U+6C88 沈 SHIZUMU SHIZUMERU</td></tr>
<tr><td>U+6C97</td><td>沗</td><td>MOOERU MOOU</td><td>MOERU MOU</td><td><a href="https://tangorin.com/kanji?search=%E6%B2%97">沗 - Kanji - Japanese Dictionary Tangorin</a>:<br>そえる・そう・もえる・もう</td></tr>
<tr><td>U+6CB4</td><td>沴</td><td>MOKONAU</td><td>SOKONAU</td><td><a href="https://tangorin.com/kanji?search=%E6%B2%B4">沴 - Kanji - Japanese Dictionary Tangorin</a>:<br>そこなう</td></tr>
<tr><td>U+6CC1</td><td>況</td><td>IWANYA OMOMUKI</td><td>IWAN'YA OMOMUKI</td><td>Use single quote for ん disambiguation<br><a href="https://en.wiktionary.org/wiki/%E6%B3%81">況 - Wiktionary</a>:<br>Kun: まして (mashite, 況して); いわんや (iwan'ya, 況んや)←いはんや (ifan'ya, historical); おもむき (omomuki, 況)</td></tr>
<tr><td>U+6CC6</td><td>泆</td><td>AHURERU</td><td>AFURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6D0C</td><td>洌</td><td>KYOI</td><td>KIYOI</td><td><a href="https://en.wiktionary.org/wiki/%E6%B4%8C">洌 - Wiktionary</a>:<br>Kun: きよい (kiyoi)</td></tr>
<tr><td>U+6D13</td><td>洓</td><td>SOBOURU HITASU</td><td>SOBOFURU HITASU</td><td><a href="https://tangorin.com/kanji?search=%E6%B4%93">洓 - Kanji - Japanese Dictionary Tangorin</a>:<br>そぼふる・ひたす</td></tr>
<tr><td>U+6D2A</td><td>洪</td><td>OUMIZU</td><td>OOMIZU</td><td><a href="https://en.wiktionary.org/wiki/%E6%B4%AA">洪 - Wiktionary</a>:<br>Kun: おおみず (ōmizu, 洪)</td></tr>
<tr><td>U+6D2F</td><td>洯</td><td>ISAGIYOOI</td><td>ISAGIYOI</td><td><a href="https://tangorin.com/kanji?search=%E6%B4%AF">洯 - Kanji - Japanese Dictionary Tangorin</a>:<br>いさぎよい</td></tr>
<tr><td>U+6D33</td><td>洳</td><td>HITARIURUO</td><td>HITARIURUOU</td><td>Related to【浸り潤う】ひたりうるおう?</td></tr>
<tr><td>U+6D44</td><td>浄</td><td>KYOI TORO</td><td>KIYOI TORO</td><td><a href="https://en.wiktionary.org/wiki/%E6%B5%84">浄 - Wiktionary</a>:<br>Kun: きよい (kiyoi, 浄い); とろ (toro)</td></tr>
<tr><td>U+6DC5</td><td>淅</td><td>YONAGU KASHONE</td><td>YONAGU KASHIYONE</td><td><a href="https://en.wiktionary.org/wiki/%E6%B7%85">淅 - Wiktionary</a>:<br>Kun: よなぐ (yonagu); かしよね (kashiyone)<br>Related to【粿米・淅米】かしよね</td></tr>
<tr><td>U+6DCE</td><td>淎</td><td>HOU HU</td><td></td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>HOU FU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+6DE8</td><td>淨</td><td>KYOI</td><td>KIYOI</td><td><a href="https://en.wiktionary.org/wiki/%E6%B7%A8">淨 - Wiktionary</a>:<br>Kun: きよい (kiyoi)</td></tr>
<tr><td>U+6DF8</td><td>淸</td><td>KYOI KIYOMERU</td><td>KIYOI KIYOMERU</td><td><a href="https://en.wiktionary.org/wiki/%E6%B7%B8">淸 - Wiktionary</a>:<br>Kun: きよい (kiyoi), きよめる (kiyomeru)</td></tr>
<tr><td>U+6E52</td><td>湒</td><td>HURU</td><td>FURU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6E53</td><td>湓</td><td>AHURERU</td><td>AFURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6E72</td><td>湲</td><td>KYOI</td><td>KIYOI</td><td><a href="https://en.wiktionary.org/wiki/%E6%B9%B2">湲 - Wiktionary</a>:<br>Kun: きよい (kiyoi)</td></tr>
<tr><td>U+6ECE</td><td>滎</td><td>CHIYOROCHIYORO</td><td>CHOROCHORO</td><td><a href="https://en.wiktionary.org/wiki/%E6%BB%8E">滎 - Wiktionary</a>:<br>Kun: ちょろちょろ (chorochoro, 滎)</td></tr>
<tr><td>U+6F36</td><td>漶</td><td>HATSUKIRISHINAI</td><td>HAKKIRISHINAI</td><td><a href="https://tangorin.com/kanji?search=%E6%BC%B6">漶 - Kanji - Japanese Dictionary Tangorin</a>:<br>はっきりしない</td></tr>
<tr><td>U+6F3C</td><td>漼</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6F54</td><td>潔</td><td>ISAGYOI</td><td>ISAGIYOI</td><td><a href="https://tangorin.com/kanji?search=%E6%BD%94">潔 - Kanji - Japanese Dictionary Tangorin</a>:<br>いさぎよい</td></tr>
<tr><td>U+6FF9</td><td>濹</td><td>BOKU</td><td></td><td>BOKU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+7011</td><td>瀑</td><td>NIWAKAUME TAKI</td><td>NIWAKAAME TAKI</td><td><a href="https://en.wiktionary.org/wiki/%E7%80%91">瀑 - Wiktionary</a>:<br>Kun: にわかあめ (niwakaame, 瀑); たき (taki, 瀑)</td></tr>
<tr><td>U+701E</td><td>瀞</td><td>KYOI TORO</td><td>KIYOI TORO</td><td><a href="https://en.wiktionary.org/wiki/%E7%80%9E">瀞 - Wiktionary</a>:<br>Kun: とろ (toro, 瀞); きよい (kiyoi)</td></tr>
<tr><td>U+7034</td><td>瀴</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+706C</td><td>灬</td><td>RETSUKA</td><td>REKKA</td><td>【列火】れっか</td></tr>
<tr><td>U+706E</td><td>灮</td><td>HIKAARU HIKARI</td><td>HIKARU HIKARI</td><td><a href="https://tangorin.com/kanji?search=%E7%81%AE">灮 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひかる・ひかり</td></tr>
<tr><td>U+7076</td><td>灶</td><td>KAMA KAMADO HETSUTSUI</td><td>KAMA KAMADO HETTSUI</td><td><a href="https://tangorin.com/kanji?search=%E7%81%B6">灶 - Kanji - Japanese Dictionary Tangorin</a>:<br>かまど・かま・へっつい</td></tr>
<tr><td>U+707E</td><td>灾</td><td>WAZAWAAI</td><td>WAZAWAI</td><td><a href="https://en.wiktionary.org/wiki/%E7%81%BE">灾 - Wiktionary</a>:<br>Kun: わざわい (wazawai)</td></tr>
<tr><td>U+7097</td><td>炗</td><td>HIKAARU HIKARI</td><td>HIKARU HIKARI</td><td><a href="https://tangorin.com/kanji?search=%E7%82%97">炗 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひかる・ひかり</td></tr>
<tr><td>U+709B</td><td>炛</td><td>TERUSU</td><td>TERASU</td><td><a href="https://tangorin.com/kanji?search=%E7%82%9B">炛 - Kanji - Japanese Dictionary Tangorin</a>:<br>てらす</td></tr>
<tr><td>U+70CF</td><td>烏</td><td>KARASU IZUKUNSO</td><td>KARASU IZUKUNZO</td><td><a href="https://tangorin.com/kanji?search=%E7%83%8F">烏 - Kanji - Japanese Dictionary Tangorin</a>:<br>からす・いずくんぞ・なんぞ</td></tr>
<tr><td>U+70D6</td><td>烖</td><td>WAZAWAAI</td><td>WAZAWAI</td><td><a href="https://en.wiktionary.org/wiki/%E7%83%96">烖 - Wiktionary</a>:<br>Kun: わざわい (wazawai)</td></tr>
<tr><td>U+7109</td><td>焉</td><td>IZUKUNSO SUNAWACHI KORE</td><td>IZUKUNZO SUNAWACHI KORE</td><td><a href="https://tangorin.com/kanji?search=%E7%84%89">焉 - Kanji - Japanese Dictionary Tangorin</a>:<br>いずくんぞ・ここに・これ</td></tr>
<tr><td>U+7145</td><td>煅</td><td>KITAAERU</td><td>KITAERU</td><td><a href="https://en.wiktionary.org/wiki/%E7%85%85">煅 - Wiktionary</a>:<br>Kun: きたえる (kitaeru)</td></tr>
<tr><td>U+7195</td><td>熕</td><td>OOZUTSU</td><td>OODZUTSU</td><td><a href="https://tangorin.com/kanji?search=%E7%86%95">熕 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおづつ</td></tr>
<tr><td>U+71AF</td><td>熯</td><td>GAWAKU</td><td>KAWAKU</td><td><a href="https://tangorin.com/kanji?search=%E7%86%AF">熯 - Kanji - Japanese Dictionary Tangorin</a>:<br>かわく</td></tr>
<tr><td>U+71B3</td><td>熳</td><td>MIGARINI</td><td>MIDARINI</td><td>Consistent with U+6F2B 漫 MIDARINI<br><a href="https://tangorin.com/kanji?search=%E7%86%B3">熳 - Kanji - Japanese Dictionary Tangorin</a>:<br>みだりに</td></tr>
<tr><td>U+71D7</td><td>燗</td><td>KAN KANSURU</td><td>KANSURU</td><td>KAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+722F</td><td>爯</td><td>TONAHE AGERU</td><td>TONAE AGERU</td><td>となへ → となえ (modern Japanese orthography)</td></tr>
<tr><td>U+7253</td><td>牓</td><td>HUDA</td><td>FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7263</td><td>牣</td><td>MISARU</td><td>MICHIRU</td><td><a href="https://tangorin.com/kanji?search=%E7%89%A3">牣 - Kanji - Japanese Dictionary Tangorin</a>:<br>みちる</td></tr>
<tr><td>U+726E</td><td>牮</td><td>TSUTSUPORI</td><td>TSUPPORI</td><td><a href="https://tangorin.com/kanji?search=%E7%89%AE">牮 - Kanji - Japanese Dictionary Tangorin</a>:<br>つっぽり</td></tr>
<tr><td>U+72CC</td><td>狌</td><td>SHIYOUJIYOU</td><td>SHOUJOU</td><td><a href="https://en.wiktionary.org/wiki/%E7%8B%8C">狌 - Wiktionary</a>:<br>Kun: いたち (itachi, 狌); しょうじょう (shōjō)←しやうじやう (syauzyau, historical)</td></tr>
<tr><td>U+72E1</td><td>狡</td><td>ZURUI WARUGASHIKO</td><td>ZURUI WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E7%8B%A1">狡 - Kanji - Japanese Dictionary Tangorin</a>:<br>ずるい・こすい・わるがしこい</td></tr>
<tr><td>U+733E</td><td>猾</td><td>WARUGASHIKO</td><td>WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E7%8C%BE">猾 - Kanji - Japanese Dictionary Tangorin</a>:<br>わるがしこい</td></tr>
<tr><td>U+736A</td><td>獪</td><td>WARUGASHIKO</td><td>WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E7%8D%AA">獪 - Kanji - Japanese Dictionary Tangorin</a>:<br>わるがしこい</td></tr>
<tr><td>U+7400</td><td>琀</td><td>HUKUMIDAMA</td><td>FUKUMIDAMA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+74EA</td><td>瓪</td><td>MEGAHARA</td><td>MEGAWARA</td><td>めがはら → めがわら (modern Japanese orthography)</td></tr>
<tr><td>U+74F8</td><td>瓸</td><td>HEKUTOGURA</td><td>HEKUTOGURAMU</td><td rowspan="2">Consistent with:<br>• U+74E6 瓦 GURAMU<br>• U+74E7 瓧 DEKAGURAMU<br>• U+74E9 瓩 KIROGURAMU<br>• U+74F0 瓰 DESHIGURAMU<br>• U+74F1 瓱 MIRIGURAMU</td></tr>
<tr><td>U+7505</td><td>甅</td><td>SENCHIGURA</td><td>SENCHIGURAMU</td></tr>
<tr><td>U+755F</td><td>畟</td><td>SOKU</td><td></td><td>SOKU: kJapaneseOn, not kJapaneseKun<br><a href="https://tangorin.com/kanji?search=%E7%95%9F">畟 - Kanji - Japanese Dictionary Tangorin</a>:<br>ショク・シキ・ソク</td></tr>
<tr><td>U+7571</td><td>畱</td><td>TOOMERU TOOMARU</td><td>TOMERU TOMARU</td><td>Consistent with:<br>• U+7559 留 TOMERU TOMARU</td></tr>
<tr><td>U+7593</td><td>疓</td><td>YAMU YAMAI HOTSUSU</td><td>YAMU YAMAI HOSSU</td><td><a href="https://tangorin.com/kanji?search=%E7%96%93">疓 - Kanji - Japanese Dictionary Tangorin</a>:<br>やむ・やまい・ほっす</td></tr>
<tr><td>U+75C5</td><td>病</td><td>YAMU YAMAI UREE</td><td>YAMU YAMAI UREI</td><td><a href="https://en.wiktionary.org/wiki/%E7%97%85">病 - Wiktionary</a>:<br>Kun: やむ (yamu, 病む, Jōyō); やまい (yamai, 病, Jōyō)←やまひ (yamafi, historical); うれい (urei, 病)←うれひ (urefi, historical)</td></tr>
<tr><td>U+75E4</td><td>痤</td><td>ENOGO HARIMONO</td><td>ENOGO HAREMONO</td><td><a href="https://tangorin.com/kanji?search=%E7%97%A4">痤 - Kanji - Japanese Dictionary Tangorin</a>:<br>はれもの・えのご</td></tr>
<tr><td>U+75EE</td><td>痮</td><td>HUKURERU</td><td>FUKURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+764C</td><td>癌</td><td>GAN</td><td></td><td>GAN: kJapaneseOn, not kJapaneseKun<br><a href="https://tangorin.com/kanji?search=%E7%99%8C">癌 - Kanji - Japanese Dictionary Tangorin</a>:<br>ガン</td></tr>
<tr><td>U+768E</td><td>皎</td><td>SHIROI KYOI</td><td>SHIROI KIYOI</td><td><a href="https://en.wiktionary.org/wiki/%E7%9A%8E">皎 - Wiktionary</a>:<br>Kun: しろい (shiroi); きよい (kiyoi)</td></tr>
<tr><td>U+76B7</td><td>皷</td><td>TSUZUMI</td><td>TSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E7%9A%B7">皷 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづみ</td></tr>
<tr><td>U+76E6</td><td>盦</td><td>HUTA</td><td>FUTA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7735</td><td>眵</td><td>MANAJIRIOITAMERU</td><td>MANAJIRIWOITAMERU</td><td><a href="https://tangorin.com/kanji?search=%E7%9C%B5">眵 - Kanji - Japanese Dictionary Tangorin</a>:<br>まなじりをいためる</td></tr>
<tr><td>U+775C</td><td>睜</td><td>METSUKI</td><td>MEKKI</td><td><a href="https://tangorin.com/kanji?search=%E7%9D%9C">睜 - Kanji - Japanese Dictionary Tangorin</a>:<br>めっき</td></tr>
<tr><td>U+77AF</td><td>瞯</td><td>UWAMEZUKAI NAGASHIME</td><td>UWAMEDZUKAI NAGASHIME</td><td><a href="https://tangorin.com/kanji?search=%E7%9E%AF">瞯 - Kanji - Japanese Dictionary Tangorin</a>:<br>うわめづかい・ながしめ</td></tr>
<tr><td>U+77BE</td><td>瞾</td><td>TEERU TERASU TEERERU</td><td>TERU TERASU TERERU</td><td><a href="https://tangorin.com/kanji?search=%E7%9E%BE">瞾 - Kanji - Japanese Dictionary Tangorin</a>:<br>てる・てらす・てれる</td></tr>
<tr><td>U+77C3</td><td>矃</td><td>NEI NYOU</td><td></td><td>NEI NYOU: kJapaneseOn, not kJapaneseKun<br>Consistent with U+5BE7 寧 NEI NYOU</td></tr>
<tr><td>U+77DE</td><td>矞</td><td>ANAOAKERU</td><td>ANAWOAKERU</td><td><a href="https://tangorin.com/kanji?search=%E7%9F%9E">矞 - Kanji - Japanese Dictionary Tangorin</a>:<br>あなをあける</td></tr>
<tr><td>U+77E4</td><td>矤</td><td>HAGU HAGE IWANYA</td><td>HAGU HAGE IWAN'YA</td><td>Use single quote for ん disambiguation<br><a href="https://en.wiktionary.org/wiki/%E7%9F%A4">矤 - Wiktionary</a>:<br>Kun: はぐ (hagu), はげ (hage), いわんや (iwan'ya)</td></tr>
<tr><td>U+77E7</td><td>矧</td><td>IWANYA HAGU HAGI</td><td>IWAN'YA HAGU HAGI</td><td>Use single quote for ん disambiguation<br><a href="https://en.wiktionary.org/wiki/%E7%9F%A7">矧 - Wiktionary</a>:<br>Kun: いわんや (iwan'ya); はぐ (hagu); はぎ (hagi)</td></tr>
<tr><td>U+7820</td><td>砠</td><td>ISHAMA TSUCHAMA</td><td>ISHIYAMA TSUCHIYAMA</td><td>Consistent with U+5CA8 岨 ISHIYAMA</td></tr>
<tr><td>U+7822</td><td>砢</td><td>ISHIZUMI</td><td>ISHIDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E7%A0%A2">砢 - Kanji - Japanese Dictionary Tangorin</a>:<br>いしづみ</td></tr>
<tr><td>U+7832</td><td>砲</td><td>OOZUTSU TSUTSU</td><td>OODZUTSU TSUTSU</td><td>Consistent with:<br>• U+7195 熕 OODZUTSU</td></tr>
<tr><td>U+7897</td><td>碗</td><td>KOBACHI WAN</td><td>KOBACHI</td><td>WAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+78BB</td><td>碻</td><td>TASHIIKA TASHIIKAMERU</td><td>TASHIKA TASHIKAMERU</td><td>Consistent with:<br>• U+78BA 確 TASHIKA TASHIKAMERU</td></tr>
<tr><td>U+78BC</td><td>碼</td><td>YAUDO</td><td>YAADO</td><td>To be consistent with kDefinition: "yard"<br>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%BC%E3%83%89">ヤード</a><br><a href="https://tangorin.com/kanji?search=%E7%A2%BC">碼 - Kanji - Japanese Dictionary Tangorin</a>:<br>やあど・やある</td></tr>
<tr><td>U+7906</td><td>礆</td><td>KEWAASHII</td><td>KEWASHII</td><td><a href="https://en.wiktionary.org/wiki/%E7%A4%86">礆 - Wiktionary</a>:<br>Kun: けわしい (kewashii)</td></tr>
<tr><td>U+79AE</td><td>禮</td><td>REI OJIGI</td><td>OJIGI</td><td>REI: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+79E2</td><td>秢</td><td>YOHAI</td><td>YOWAI</td><td>よはい → よわい (modern Japanese orthography)</td></tr>
<tr><td>U+79FC</td><td>秼</td><td>NOROFU</td><td>NOROU</td><td>のろふ → のろう (modern Japanese orthography)</td></tr>
<tr><td>U+7A38</td><td>稸</td><td>TSUMU TAKUHAHERU</td><td>TSUMU TAKUWAERU</td><td>たくはへる → たくわえる (modern Japanese orthography)</td></tr>
<tr><td>U+7A3A</td><td>稺</td><td>OKUTE OSANAI ODERU</td><td>OKUTE OSANAI OGORU</td><td><a href="https://tangorin.com/kanji?search=%E7%A8%BA">稺 - Kanji - Japanese Dictionary Tangorin</a>:<br>おさない・おくて・おごる</td></tr>
<tr><td>U+7A7E</td><td>穾</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7A94</td><td>窔</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7AB5</td><td>窵</td><td>OKUHUKAI</td><td>OKUFUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7AC6</td><td>竆</td><td>KIWAAMERU KIWAAMARU</td><td>KIWAMERU KIWAMARU</td><td><a href="https://en.wiktionary.org/wiki/%E7%AB%86">竆 - Wiktionary</a>:<br>Kun: きわめる (kiwameru), きわまる (kiwamaru)</td></tr>
<tr><td>U+7ACD</td><td>竍</td><td>DEKARITTO</td><td>DEKARITTORU</td><td rowspan="4">Consistent with:<br>• U+7ACF 竏 KIRORITTORU<br>• U+7AD3 竓 MIRIRITTORU</td></tr>
<tr><td>U+7AD5</td><td>竕</td><td>DESHIRITTO</td><td>DESHIRITTORU</td></tr>
<tr><td>U+7AE1</td><td>竡</td><td>HEKUTORITTO</td><td>HEKUTORITTORU</td></tr>
<tr><td>U+7AF0</td><td>竰</td><td>SENCHIRITTO</td><td>SENCHIRITTORU</td></tr>
<tr><td>U+7AFD</td><td>竽</td><td>HUE</td><td>FUE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7AFE</td><td>竾</td><td>HUE</td><td>FUE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7B14</td><td>笔</td><td>HUDE</td><td>FUDE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7B3F</td><td>笿</td><td>WANKAGO TABANERU TSUKAAANERU</td><td>WANKAGO TABANERU TSUKANERU</td><td><a href="https://tangorin.com/kanji?search=%E7%AC%BF">笿 - Kanji - Japanese Dictionary Tangorin</a>:<br>わんかご・たばねる・つかねる</td></tr>
<tr><td>U+7B41</td><td>筁</td><td>KAHIKONOSU</td><td>KAIKONOSU</td><td><a href="https://tangorin.com/kanji?search=%E7%AD%81">筁 - Kanji - Japanese Dictionary Tangorin</a>:<br>かいこのす</td></tr>
<tr><td>U+7B66</td><td>筦</td><td>HUE KUDA</td><td>FUE KUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7B72</td><td>筲</td><td>HUGO</td><td>FUGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7B9B</td><td>箛</td><td>HUE</td><td>FUE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7BEA</td><td>篪</td><td>HUE</td><td>FUE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7BF4</td><td>篴</td><td>HUE</td><td>FUE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7C01</td><td>簁</td><td>HURUI</td><td>FURUI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7C0C</td><td>簌</td><td>HURUI</td><td>FURUI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7C3A</td><td>簺</td><td>SOGO HUDA</td><td>SOGO FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7C5D</td><td>籝</td><td>KAGO HASHIZUTSU</td><td>KAGO HASHIDZUTSU</td><td><a href="https://en.wiktionary.org/wiki/%E7%B1%9D">籝 - Wiktionary</a>:<br>Kun: かご (kago, 籝); はしづつ (hashizutsu, 籝)</td></tr>
<tr><td>U+7C69</td><td>籩</td><td>TAKATAUKI</td><td>TAKATSUKI</td><td><a href="https://tangorin.com/kanji?search=%E7%B1%A9">籩 - Kanji - Japanese Dictionary Tangorin</a>:<br>たかつき</td></tr>
<tr><td>U+7CCE</td><td>糎</td><td>SENCHIMEETO</td><td>SENCHIMEETORU</td><td>Consistent with:<br>• U+54AA 咪 MEETORU<br>• U+7C73 米 MEETORU<br>• U+7C75 籵 DEKAMEETORU<br>• U+7C81 粁 KIROMEETORU<br>• U+7C89 粉 DESHIMEETORU<br>• U+7C8D 粍 MIRIMEETORU<br>• U+7CA8 粨 HEKUTOMEETORU</td></tr>
<tr><td>U+7D04</td><td>約</td><td>TSUZUMERU TSUZUMAYAKA</td><td>TSUDZUMERU TSUDZUMAYAKA</td><td><a href="https://tangorin.com/kanji?search=%E7%B4%84">約 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづまる・つづめる・つづまやか</td></tr>
<tr><td>U+7D12</td><td>紒</td><td>YUU MUSUHU</td><td>YUU MUSUBU</td><td><a href="https://tangorin.com/kanji?search=%E7%B4%92">紒 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆう・むすぶ</td></tr>
<tr><td>U+7D18</td><td>紘</td><td>OOZUNA HIMO</td><td>OODZUNA HIMO</td><td><a href="https://en.wiktionary.org/wiki/%E7%B4%98">紘 - Wiktionary</a>:<br>Kun: おおづな (oozuna), ひも (himo)</td></tr>
<tr><td>U+7D2D</td><td>紭</td><td>AMINOTSUNA KARARU</td><td>AMINOTSUNA KAKARU</td><td><a href="https://tangorin.com/kanji?search=%E7%B4%AD">紭 - Kanji - Japanese Dictionary Tangorin</a>:<br>あみのつな・かかる</td></tr>
<tr><td>U+7D3A</td><td>紺</td><td>KON</td><td></td><td>KON: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+7D51</td><td>絑</td><td>SHIYU</td><td></td><td>しゆ → しゅ (modern Japanese orthography)<br>SHU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+7D7B</td><td>絻</td><td>MOHUKU</td><td>MOFUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7D82</td><td>綂</td><td>HOOBIRU</td><td>HOBIRU</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%82">綂 - Kanji - Japanese Dictionary Tangorin</a>:<br>すべて・ほびる</td></tr>
<tr><td>U+7D86</td><td>綆</td><td>TSURUBINAWA</td><td>TSURUBENAWA</td><td>Related to【釣瓶縄】つるべなわ<br><a href="https://tangorin.com/kanji?search=%E7%B6%86">綆 - Kanji - Japanese Dictionary Tangorin</a>:<br>つるべなわ</td></tr>
<tr><td>U+7D8B</td><td>綋</td><td>TSUNA TSUNAGU OOZUNA</td><td>TSUNA TSUNAGU OODZUNA</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%8B">綋 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおづな・つな・つなぐ</td></tr>
<tr><td>U+7D9A</td><td>続</td><td>TSUZUKU TSUGU</td><td>TSUDZUKU TSUGU</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%9A">続 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづく・つづける・つぐない</td></tr>
<tr><td>U+7D9C</td><td>綜</td><td>SUBERU OSA</td><td>SUBERU OSAMERU</td><td><a href="https://en.wiktionary.org/wiki/%E7%B6%9C">綜 - Wiktionary</a>:<br>Kun: おさめる (osameru, 綜める); すべる (suberu, 綜べる)</td></tr>
<tr><td>U+7DB4</td><td>綴</td><td>TSUZURU TOJIRU TSUZURI</td><td>TSUDZURU TOJIRU TSUDZURI</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%B4">綴 - Kanji - Japanese Dictionary Tangorin</a>:<br>とじる・つづる・つづり・すみやか</td></tr>
<tr><td>U+7DCA</td><td>緊</td><td>CHIJIMU KIBISHII</td><td>CHIDJIMU KIBISHII</td><td><a href="https://en.wiktionary.org/wiki/%E7%B7%8A">緊 - Wiktionary</a>:<br>Kun: ちぢむ (chijimu, 緊む); きびしい (kibishii, 緊しい)</td></tr>
<tr><td>U+7DCE</td><td>緎</td><td>NUIKAGIRI</td><td>NUIKAGARI</td><td><a href="https://tangorin.com/kanji?search=%E7%B7%8E">緎 - Kanji - Japanese Dictionary Tangorin</a>:<br>ぬいかがり</td></tr>
<tr><td>U+7DEB</td><td>緫</td><td>SUBITE</td><td>SUBETE</td><td><a href="https://tangorin.com/kanji?search=%E7%B7%AB">緫 - Kanji - Japanese Dictionary Tangorin</a>:<br>すべる・すべて・ふさ</td></tr>
<tr><td>U+7DFC</td><td>緼</td><td>HURUI</td><td>FURUI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7E10</td><td>縐</td><td>CHIJIMI</td><td>CHIDJIMI</td><td><a href="https://tangorin.com/kanji?search=%E7%B8%90">縐 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちぢみ</td></tr>
<tr><td>U+7E15</td><td>縕</td><td>HURUI</td><td>FURUI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7E20</td><td>縠</td><td>MOJIRI CHIRINUN</td><td>MOJIRI CHIRIMEN</td><td>Typo: possible confusion between め and ぬ, or メ and ヌ?<br><a href="https://tangorin.com/kanji?search=%E7%B8%A0">縠 - Kanji - Japanese Dictionary Tangorin</a>:<br>もじり・ちりめん</td></tr>
<tr><td>U+7E2C</td><td>縬</td><td>CHIJIMU CHIJIMIAYA KINUNOAYA</td><td>CHIDJIMU CHIDJIMIAYA KINUNOAYA</td><td><a href="https://tangorin.com/kanji?search=%E7%B8%AC">縬 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちぢむ・ちぢみあや・きぬのあや</td></tr>
<tr><td>U+7E2E</td><td>縮</td><td>CHIJIMU CHIJIMARU NAOI</td><td>CHIDJIMU CHIDJIMARU NAOI</td><td><a href="https://tangorin.com/kanji?search=%E7%B8%AE">縮 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちぢむ・ちぢまる・ちぢめる・ちぢれる・ちぢらす</td></tr>
<tr><td>U+7E44</td><td>繄</td><td>HOKOBAKURO</td><td>HOKOBUKURO</td><td><a href="https://tangorin.com/kanji?search=%E7%B9%84">繄 - Kanji - Japanese Dictionary Tangorin</a>:<br>ほこぶくろ</td></tr>
<tr><td>U+7E65</td><td>繥</td><td>WARAFU TANOSHIMU</td><td>WARAU TANOSHIMU</td><td>わらふ → わらう (modern Japanese orthography)</td></tr>
<tr><td>U+7E6E</td><td>繮</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E7%B9%AE">繮 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+7E87</td><td>纇</td><td>HUSHIITO</td><td>FUSHIITO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7E89</td><td>纉</td><td>TSUGU TSUZUKERU</td><td>TSUGU TSUDZUKERU</td><td>Consistent with:<br>• U+7D9A 続 TSUDZUKU</td></tr>
<tr><td>U+7E8C</td><td>續</td><td>TSUZUKU TSUGU</td><td>TSUDZUKU TSUGU</td><td>Consistent with:<br>• U+7D9A 続 TSUDZUKU</td></tr>
<tr><td>U+7E8D</td><td>纍</td><td>TSUZURU</td><td>TSUDZURU</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%8D">纍 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづる</td></tr>
<tr><td>U+7E9A</td><td>纚</td><td>KAMIZUTSUMI TSUZUKU</td><td>KAMIDZUTSUMI TSUDZUKU</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%9A">纚 - Kanji - Japanese Dictionary Tangorin</a>:<br>かみづつみ・つづく</td></tr>
<tr><td>U+7E9C</td><td>纜</td><td>TOMOZUNA</td><td>TOMODZUNA</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%9C">纜 - Kanji - Japanese Dictionary Tangorin</a>:<br>ともづな</td></tr>
<tr><td>U+7E9D</td><td>纝</td><td>MATOFU KARAMERU KURONAWA</td><td>MATOU KARAMERU KURONAWA</td><td>まとふ → まとう (modern Japanese orthography)</td></tr>
<tr><td>U+7E9E</td><td>纞</td><td>TSUZUKU</td><td>TSUDZUKU</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%9E">纞 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづく</td></tr>
<tr><td>U+7EAE</td><td>纮</td><td>OOZUNA HIMO</td><td>OODZUNA HIMO</td><td>Simplified variant of U+7D18 紘 OODZUNA HIMO</td></tr>
<tr><td>U+7F3C</td><td>缼</td><td>KAAKERU KAAKU</td><td>KAKERU KAKU</td><td><a href="https://en.wiktionary.org/wiki/%E7%BC%BC">缼 - Wiktionary</a>:<br>Kun: かける (kakeru), かく (kaku)</td></tr>
<tr><td>U+7F67</td><td>罧</td><td>FUSHIZUKE</td><td>FUSHIDZUKE</td><td>Consistent with etymology?:<br>ふしずけ → ふしづけ</td></tr>
<tr><td>U+7F87</td><td>羇</td><td>OMOGAI TAZUNA TSUNAGU</td><td>OMOGAI TADZUNA TSUNAGU</td><td><a href="https://tangorin.com/kanji?search=%E7%BE%87">羇 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+7F88</td><td>羈</td><td>OMOGAI TAZUNA TABI</td><td>OMOGAI TADZUNA TABI</td><td><a href="https://tangorin.com/kanji?search=%E7%BE%88">羈 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+800B</td><td>耋</td><td>TOSHORI</td><td>TOSHIYORI</td><td><a href="https://en.wiktionary.org/wiki/%E8%80%8B">耋 - Wiktionary</a>:<br>Kun: としより (toshiyori, 耋り)<br>Related to【年寄り】としより</td></tr>
<tr><td>U+803C</td><td>耼</td><td>TAN BAN MAN</td><td></td><td>TAN BAN MAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+8079</td><td>聹</td><td>MIMIAKA KAMABISUSHI</td><td>MIMIAKA KAMABISUSHII</td><td>KAMABISUSHII: related to【喧しい・囂しい】かまびすしい</td></tr>
<tr><td>U+80DB</td><td>胛</td><td>KAIGARAHO</td><td>KAIGARABONE</td><td><a href="https://tangorin.com/kanji?search=%E8%83%9B">胛 - Kanji - Japanese Dictionary Tangorin</a>:<br>かいがらぼね</td></tr>
<tr><td>U+80F4</td><td>胴</td><td>DOU</td><td></td><td>DOU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+8105</td><td>脅</td><td>OBYAKASU ODOSU ODOKASU</td><td>OBIYAKASU ODOSU ODOKASU</td><td>Consistent with:<br>• U+6136 愶 OBIYAKASU</td></tr>
<tr><td>U+8109</td><td>脉</td><td>SUJI MYAKU</td><td>SUJI</td><td>MYAKU: kJapaneseOn, not kJapaneseKun<br>Consistent with:<br>• U+8108 脈 MYAKU</td></tr>
<tr><td>U+810B</td><td>脋</td><td>OBIYAAKASU ODOOSU OTOOKASU</td><td>OBIYAKASU ODOSU ODOKASU</td><td><a href="https://en.wiktionary.org/wiki/%E8%84%8B">脋 - Wiktionary</a>:<br>Kun: おびやかす (obiyakasu), おどす (odosu), おどかす (odokasu)</td></tr>
<tr><td>U+8120</td><td>脠</td><td>HISHIHO SHIOZUKE</td><td>HISHIO SHIODZUKE</td><td><a href="https://tangorin.com/kanji?search=%E8%84%A0">脠 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひしお・しおづけ</td></tr>
<tr><td>U+814C</td><td>腌</td><td>SHIOZUKE</td><td>SHIODZUKE</td><td><a href="https://tangorin.com/kanji?search=%E8%85%8C">腌 - Kanji - Japanese Dictionary Tangorin</a>:<br>しおづけ</td></tr>
<tr><td>U+818E</td><td>膎</td><td>HOJISHI NIKU SAKANA HADAHE</td><td>HOJISHI NIKU SAKANA HADAE</td><td>はだへ → はだえ (modern Japanese orthography)</td></tr>
<tr><td>U+8190</td><td>膐</td><td>SEBONE CHIKARU</td><td>SEBONE CHIKARA</td><td><a href="https://tangorin.com/kanji?search=%E8%86%90">膐 - Kanji - Japanese Dictionary Tangorin</a>:<br>せぼね・ちから</td></tr>
<tr><td>U+81F0</td><td>臰</td><td>KUSAAI</td><td>KUSAI</td><td><a href="https://tangorin.com/kanji?search=%E8%87%B0">臰 - Kanji - Japanese Dictionary Tangorin</a>:<br>くさい・におう</td></tr>
<tr><td>U+81F6</td><td>臶</td><td>HUTATABI</td><td>FUTATABI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8202</td><td>舂</td><td>USUZUKU TSUKU</td><td>USUDZUKU TSUKU</td><td><a href="https://tangorin.com/kanji?search=%E8%88%82">舂 - Kanji - Japanese Dictionary Tangorin</a>:<br>うすつく・うすづく・つく</td></tr>
<tr><td>U+8219</td><td>舙</td><td>TAHAKARU</td><td>TABAKARU</td><td><a href="https://tangorin.com/kanji?search=%E8%88%99">舙 - Kanji - Japanese Dictionary Tangorin</a>:<br>たばかる</td></tr>
<tr><td>U+8221</td><td>舡</td><td>HUNE</td><td>FUNE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8236</td><td>舶</td><td>OUBUNE</td><td>OOBUNE</td><td><a href="https://en.wiktionary.org/wiki/%E8%88%B6">舶 - Wiktionary</a>:<br>Kun: おおぶね (ōbune, 舶)<br>Related to【大船】おおぶね</td></tr>
<tr><td>U+823A</td><td>舺</td><td>HUNE</td><td>FUNE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+824B</td><td>艋</td><td>HUNE</td><td>FUNE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+824E</td><td>艎</td><td>HUNE</td><td>FUNE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+824F</td><td>艏</td><td>HUNE</td><td>FUNE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+82AF</td><td>芯</td><td>HOSOI TOUSHINGU</td><td>HOSOI TOUSHINGUSA</td><td><a href="https://en.wiktionary.org/wiki/%E8%8A%AF">芯 - Wiktionary</a>:<br>Kun: ほそい (hosoi); とうしんぐさ (tōshingusa, 芯)</td></tr>
<tr><td>U+8300</td><td>茀</td><td>HUSAGU</td><td>FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8306</td><td>茆</td><td>MENAWA KAYA</td><td>NUNAWA KAYA</td><td>Typo: possible confusion between め and ぬ, or メ and ヌ?<br><a href="https://tangorin.com/kanji?search=%E8%8C%86">茆 - Kanji - Japanese Dictionary Tangorin</a>:<br>かや・ぬなわ</td></tr>
<tr><td>U+833C</td><td>茼</td><td>SHIYUNGIKU</td><td>SHUNGIKU</td><td>From: 春菊 "spring chrysanthemum"<br>• <a href="https://en.wikipedia.org/wiki/Glebionis_coronaria">Glebionis coronaria</a><br>• <a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A5%E3%83%B3%E3%82%AE%E3%82%AF">シュンギク</a></td></tr>
<tr><td>U+8353</td><td>荓</td><td>BYOU</td><td></td><td>BYOU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+8382</td><td>莂</td><td>TANEOMAKU UTSUSHIUERU</td><td>TANEWOMAKU UTSUSHIUERU</td><td><a href="https://tangorin.com/kanji?search=%E8%8E%82">莂 - Kanji - Japanese Dictionary Tangorin</a>:<br>たねをまく・うつしうえる</td></tr>
<tr><td>U+83D0</td><td>菐</td><td>WAZURAHASHII</td><td>WAZURAWASHII</td><td>わずらはしい → わずらわしい (modern Japanese orthography)</td></tr>
<tr><td>U+845B</td><td>葛</td><td>KUZU TSUZURA</td><td>KUZU TSUDZURA</td><td><a href="https://tangorin.com/kanji?search=%E8%91%9B">葛 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづら・くず</td></tr>
<tr><td>U+8465</td><td>葥</td><td>KIICHIGU</td><td>KIICHIGO</td><td><a href="https://tangorin.com/kanji?search=%E8%91%A5">葥 - Kanji - Japanese Dictionary Tangorin</a>:<br>きいちご</td></tr>
<tr><td>U+8470</td><td>葰</td><td>SHIYUUGA</td><td>SHOUGA</td><td><a href="https://tangorin.com/kanji?search=%E8%91%B0">葰 - Kanji - Japanese Dictionary Tangorin</a>:<br>しょうが</td></tr>
<tr><td>U+8492</td><td>蒒</td><td>KOUBAUMUGI</td><td>KOUBOUMUGI</td><td><a href="https://tangorin.com/kanji?search=%E8%92%92">蒒 - Kanji - Japanese Dictionary Tangorin</a>:<br>こうぼうむぎ</td></tr>
<tr><td>U+8502</td><td>蔂</td><td>MOTSUKO</td><td>MOKKO</td><td><a href="https://tangorin.com/kanji?search=%E8%94%82">蔂 - Kanji - Japanese Dictionary Tangorin</a>:<br>もっこ</td></tr>
<tr><td>U+851A</td><td>蔚</td><td>OTOKOYOMOKI</td><td>OTOKOYOMOGI</td><td><a href="https://tangorin.com/kanji?search=%E8%94%9A">蔚 - Kanji - Japanese Dictionary Tangorin</a>:<br>うち・おとこよもぎ</td></tr>
<tr><td>U+851C</td><td>蔜</td><td>HAKOBI</td><td>HAKOBE</td><td><a href="https://tangorin.com/kanji?search=%E8%94%9C">蔜 - Kanji - Japanese Dictionary Tangorin</a>:<br>はこべ</td></tr>
<tr><td>U+852F</td><td>蔯</td><td>KAWARAYOMUGI</td><td>KAWARAYOMOGI</td><td><a href="https://tangorin.com/kanji?search=%E8%94%AF">蔯 - Kanji - Japanese Dictionary Tangorin</a>:<br>かわらよもぎ</td></tr>
<tr><td>U+8536</td><td>蔶</td><td>SONOKO</td><td>SUNOKO</td><td><a href="https://tangorin.com/kanji?search=%E8%94%B6">蔶 - Kanji - Japanese Dictionary Tangorin</a>:<br>す・すのこ</td></tr>
<tr><td>U+8551</td><td>蕑</td><td>HUJIBAKAMA</td><td>FUJIBAKAMA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8552</td><td>蕒</td><td>NOKESHI</td><td>NOGESHI</td><td><a href="https://tangorin.com/kanji?search=%E8%95%92">蕒 - Kanji - Japanese Dictionary Tangorin</a>:<br>のげし</td></tr>
<tr><td>U+8555</td><td>蘋</td><td>KARIGANESO KUSAMI</td><td>KARIGANESOU KUSAMI</td><td>KARIGANESOU: related to【雁金草】かりがねそう</td></tr>
<tr><td>U+8585</td><td>薅</td><td>KUKIOTORU</td><td>KUKIWOTORU</td><td><a href="https://tangorin.com/kanji?search=%E8%96%85">薅 - Kanji - Japanese Dictionary Tangorin</a>:<br>くきをとる</td></tr>
<tr><td>U+85BF</td><td>薿</td><td>SHIGIRU</td><td>SHIGERU</td><td><a href="https://tangorin.com/kanji?search=%E8%96%BF">薿 - Kanji - Japanese Dictionary Tangorin</a>:<br>しげる</td></tr>
<tr><td>U+85E0</td><td>藠</td><td>RATSUKIYOU</td><td>RAKKYOU</td><td><a href="https://en.wiktionary.org/wiki/%E8%97%A0">藠 - Wiktionary</a>:<br>Kun: らっきょう (rakkyō)</td></tr>
<tr><td>U+85ED</td><td>藭</td><td>SENKIYUU</td><td>SENKYUU</td><td><a href="https://en.wiktionary.org/wiki/%E8%97%AD">藭 - Wiktionary</a>;<br>Kun: せんきゅう (senkyū)</td></tr>
<tr><td>U+860B</td><td>蘋</td><td>UKIKUSA DENJISO</td><td>UKIKUSA DENJISOU</td><td>Related to【田字草】でんじそう</td></tr>
<tr><td>U+860D</td><td>蘍</td><td>KAOORU</td><td>KAORU</td><td><a href="https://en.wiktionary.org/wiki/%E8%98%8D">蘍 - Wiktionary</a>:<br>Kun: かおる (kaoru)</td></tr>
<tr><td>U+8610</td><td>蘐</td><td>KAYA KANZUU</td><td>KAYA KANZOU</td><td><a href="https://tangorin.com/kanji?search=%E8%98%90">蘐 - Kanji - Japanese Dictionary Tangorin</a>:<br>かや・かんぞう</td></tr>
<tr><td>U+8618</td><td>蘘</td><td>MIYOUGA</td><td>MYOUGA</td><td><a href="https://en.wiktionary.org/wiki/%E8%98%98">蘘 - Wiktionary</a>:<br>Kun: みょうが (myōga)</td></tr>
<tr><td>U+8622</td><td>蘢</td><td>OUKETADE</td><td>OOKETADE</td><td>Related to【大毛蓼・〈葒草〉】おおけたで</td></tr>
<tr><td>U+862D</td><td>蘭</td><td>FUJIBAKA</td><td>FUJIBAKAMA</td><td>Consistent with:<br>• U+8551 蕑 FUJIBAKAMA<br>• U+8573 蕳 FUJIBAKAMA<br><a href="https://en.wiktionary.org/wiki/%E8%98%AD">蘭 - Wiktionary</a>:<br>Kun: あららぎ (araragi, 蘭); ふじばかま (fujibakama, 蘭)←ふぢばかま (fudibakama, historical)</td></tr>
<tr><td>U+8677</td><td>虷</td><td>BOUHURA</td><td>BOUFURA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+868C</td><td>蚌</td><td>DOBUGA</td><td>DOBUGAI</td><td>Consistent with:<br>• U+872F 蜯 DOBUGAI<br>• U+8819 蠙 DOBUGAI<br><a href="https://tangorin.com/kanji?search=%E8%9A%8C">蚌 - Kanji - Japanese Dictionary Tangorin</a>:<br>はまぐり・どぶがい</td></tr>
<tr><td>U+8698</td><td>蚘</td><td>KAICHIYUU HARANOMUSHI</td><td>KAICHUU HARANOMUSHI</td><td><a href="https://en.wiktionary.org/wiki/%E8%9A%98">蚘 - Wiktionary</a>:<br>Kun: かいちゅう (kaichū), はらのむし (haranomushi)</td></tr>
<tr><td>U+86D5</td><td>蛕</td><td>KAICHIYUU</td><td>KAICHUU</td><td><a href="https://tangorin.com/kanji?search=%E8%9B%95">蛕 - Kanji - Japanese Dictionary Tangorin</a>:<br>かいちゅう</td></tr>
<tr><td>U+86FA</td><td>蛺</td><td>CHUU</td><td>CHOU</td><td><a href="https://tangorin.com/kanji?search=%E8%9B%BA">蛺 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちょう</td></tr>
<tr><td>U+86FE</td><td>蛾</td><td>GA</td><td></td><td>GA: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+870E</td><td>蜎</td><td>BOUHURA</td><td>BOUFURA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8795</td><td>螕</td><td>DANI OHOARI</td><td>DANI OOARI</td><td>おほあり → おおあり (modern Japanese orthography)</td></tr>
<tr><td>U+87D9</td><td>蟙</td><td>KOUMURI</td><td>KOUMORI</td><td><a href="https://tangorin.com/kanji?search=%E8%9F%99">蟙 - Kanji - Japanese Dictionary Tangorin</a>:<br>こうもり</td></tr>
<tr><td>U+8842</td><td>衂</td><td>HANAJI KUJIKERU</td><td>HANADJI KUJIKERU</td><td><a href="https://tangorin.com/kanji?search=%E8%A1%82">衂 - Kanji - Japanese Dictionary Tangorin</a>:<br>はなぢ</td></tr>
<tr><td>U+8844</td><td>衄</td><td>HANAJI</td><td>HANADJI</td><td><a href="https://tangorin.com/kanji?search=%E8%A1%84">衄 - Kanji - Japanese Dictionary Tangorin</a>:<br>はなぢ</td></tr>
<tr><td>U+8858</td><td>衘</td><td>KUTSUSHIYU</td><td>KUTSUSHU KUTSUWA</td><td>くつしゆ → くつしゅ (modern Japanese orthography)<br><a href="https://tangorin.com/kanji?search=%E8%A1%98">衘 - Kanji - Japanese Dictionary Tangorin</a>:<br>くつわ<br>Variant of U+929C 銜 KUTSUWA</td></tr>
<tr><td>U+889A</td><td>袚</td><td>HUKU</td><td>FUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+88D9</td><td>裙</td><td>MOSURI</td><td>MOSUSO</td><td>Possible confusion between リ and ソ?<br><a href="https://en.wiktionary.org/wiki/%E8%A3%99">裙 - Wiktionary</a>:<br>Kun: もすそ (mosuso, 裙)</td></tr>
<tr><td>U+88DB</td><td>裛</td><td>HUKURO</td><td>FUKURO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8901</td><td>褁</td><td>HUKURO</td><td>FUKURO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8920</td><td>褠</td><td>HITOE HITOHENOTSUTSUSODEUDENUKI AHASE</td><td>HITOE HITOENOTSUTSUSODEUDENUKI AWASE</td><td>ひとへのつつそでうでぬき → ひとえのつつそでうでぬき<br>あはせ → あわせ<br>(modern Japanese orthography)</td></tr>
<tr><td>U+8935</td><td>褵</td><td>OBI KINCHIYAKU</td><td>OBI KINCHAKU</td><td>きんちやく → きんちゃく (modern Japanese orthography)</td></tr>
<tr><td>U+8938</td><td>褸</td><td>BORO TSUZURU</td><td>BORO TSUDZURU</td><td><a href="https://en.wiktionary.org/wiki/%E8%A4%B8">褸 - Wiktionary</a>:<br>Kun: ぼろ (boro, 褸); つづる (tsuzuru)</td></tr>
<tr><td>U+893A</td><td>褺</td><td>KASANEDEROMO</td><td>KASANEGOROMO</td><td>Typo: KASANEGOROMO = KASANE + KOROMO<br>Possible confusion between で and ご?<br><a href="https://en.wiktionary.org/wiki/%E8%A4%BA">褺 - Wiktionary</a>:<br>Kun: かさねごろも (kasanegoromo)</td></tr>
<tr><td>U+8963</td><td>襣</td><td>HUNDOSHI</td><td>FUNDOSHI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8989</td><td>覉</td><td>OMOGAI TAZUNA TSUNAGU TABI</td><td>OMOGAI TADZUNA TSUNAGU TABI</td><td><a href="https://tangorin.com/kanji?search=%E8%A6%89">覉 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+898A</td><td>覊</td><td>OMOGAI TAZUNA TSUNAGU</td><td>OMOGAI TADZUNA TSUNAGU</td><td><a href="https://tangorin.com/kanji?search=%E8%A6%8A">覊 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+8990</td><td>覐</td><td>OBOOERU SAAMASU SAAMERU</td><td>OBOERU SAMASU SAMERU</td><td>Consistent with:<br>• U+899A 覚 OBOERU SAMASU<br>• U+89BA 覺 OBOERU SAMASU</td></tr>
<tr><td>U+8A20</td><td>訠</td><td>HAGU HAGI IWANYA</td><td>HAGU HAGI IWAN'YA</td><td>Use single quote for ん disambiguation<br><a href="https://en.wiktionary.org/wiki/%E8%A8%A0">訠 - Wiktionary</a>:<br>Kun: はぐ (hagu), はぎ (hagi), いわんや (iwan'ya)</td></tr>
<tr><td>U+8A43</td><td>詃</td><td>IZANAU ITSUHARU</td><td>IZANAU ITSUWARU</td><td>いつはる → いつわる (modern Japanese orthography)</td></tr>
<tr><td>U+8A47</td><td>詇</td><td>SATOI TSUGERU TOFU KOE</td><td>SATOI TSUGERU TOU KOE</td><td>とふ → とう (modern Japanese orthography)</td></tr>
<tr><td>U+8A49</td><td>詉</td><td>KAMABISUSHII WARUKUIFU</td><td>KAMABISUSHII WARUKUIU</td><td>わるくいふ → わるくいう (modern Japanese orthography)</td></tr>
<tr><td>U+8A4D</td><td>詍</td><td>SHIYABIRU</td><td>SHABERU</td><td>Consistent with:<br>• U+546D 呭 SHABERU<br>• U+558B 喋 SHABERU</td></tr>
<tr><td>U+8A65</td><td>詥</td><td>YAHARAGU KANAFU ATSUMARIIFU</td><td>YAWARAGU KANAU ATSUMARIIU</td><td>やはらぐ → やわらぐ<br>かなふ → かなう<br>あつまりいふ → あつまりいう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+8A7A</td><td>詺</td><td>NAZUKERU</td><td>NADZUKERU</td><td><a href="https://tangorin.com/kanji?search=%E8%A9%BA">詺 - Kanji - Japanese Dictionary Tangorin</a>:<br>なづける</td></tr>
<tr><td>U+8A7E</td><td>詾</td><td>UTSUTAERU IITATERU MICHIRU ODOSU</td><td>UTTAERU IITATERU MICHIRU ODOSU</td><td><a href="https://tangorin.com/kanji?search=%E8%A9%BE">詾 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえる・いいたてる・みちる・おどす</td></tr>
<tr><td>U+8AAE</td><td>誮</td><td>YASASHI</td><td>YASASHII</td><td><a href="https://en.wiktionary.org/wiki/%E8%AA%AE">誮 - Wiktionary</a>:<br>Kun: やさしい (yasashii, 誮しい)</td></tr>
<tr><td>U+8AAF</td><td>誯</td><td>TONAAERU</td><td>TONAERU</td><td><a href="https://en.wiktionary.org/wiki/%E8%AA%AF">誯 - Wiktionary</a>:<br>Kun: となえる (tonaeru)</td></tr>
<tr><td>U+8AB7</td><td>誷</td><td>SHIHIRU</td><td>SHIIRU</td><td>しひる → しいる (modern Japanese orthography)</td></tr>
<tr><td>U+8ACA</td><td>諊</td><td>SHIRABIRU</td><td>SHIRABERU</td><td><a href="https://tangorin.com/kanji?search=%E8%AB%8A">諊 - Kanji - Japanese Dictionary Tangorin</a>:<br>しらべる</td></tr>
<tr><td>U+8AD1</td><td>諑</td><td>UTSUTAE</td><td>UTTAE</td><td><a href="https://tangorin.com/kanji?search=%E8%AB%91">諑 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえ</td></tr>
<tr><td>U+8AD2</td><td>諒</td><td>AKIRAKANISU MAKOTO MAKOTONI</td><td>AKIRAKANISURU MAKOTO MAKOTONI</td><td>AKIRAKANISURU consistent with:<br>• U+5BF2 寲 AKIRAKANISURU<br>• U+8A67 詧 AKIRAKANISURU</td></tr>
<tr><td>U+8AEC</td><td>諬</td><td>SATOOSU</td><td>SATOSU</td><td><a href="https://tangorin.com/kanji?search=%E8%AB%AC">諬 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひらく・さとす</td></tr>
<tr><td>U+8B30</td><td>謰</td><td>OSHIYABIRI</td><td>OSHABERI</td><td><a href="https://en.wiktionary.org/wiki/%E8%AC%B0">謰 - Wiktionary</a>:<br>Kun: おしゃべり (oshaberi)</td></tr>
<tr><td>U+8B5E</td><td>譞</td><td>SAKASHII CHIE OHOKUMONOIFU</td><td>SAKASHII CHIE OOKUMONOIU</td><td>おほくものいふ → おおくものいう (modern Japanese orthography)</td></tr>
<tr><td>U+8C39</td><td>谹</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8C63</td><td>豣</td><td>IINOKO</td><td>INOKO</td><td><a href="https://tangorin.com/kanji?search=%E8%B1%A3">豣 - Kanji - Japanese Dictionary Tangorin</a>:<br>いのこ</td></tr>
<tr><td>U+8C79</td><td>豹</td><td>HYOU</td><td></td><td>HYOU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+8C7E</td><td>豾</td><td>KODAMEKI</td><td>KODANUKI</td><td>Typo: KODANUKI = KO + TANUKI<br>Possible confusion between め and ぬ, or メ and ヌ?<br>Consistent with U+72C9 狉 KODANUKI<br><a href="https://tangorin.com/kanji?search=%E8%B1%BE">豾 - Kanji - Japanese Dictionary Tangorin</a>:<br>こだぬき</td></tr>
<tr><td>U+8C9B</td><td>貛</td><td>MAMIDAMEKI</td><td>MAMIDANUKI</td><td>Typo: MAMIDANUKI = MAMI + TANUKI<br>Possible confusion between め and ぬ, or メ and ヌ?<br><a href="https://tangorin.com/kanji?search=%E8%B2%9B">貛 - Kanji - Japanese Dictionary Tangorin</a>:<br>まみだぬき</td></tr>
<tr><td>U+8CCB</td><td>賋</td><td>AKIRUKA</td><td>AKIRAKA</td><td><a href="https://tangorin.com/kanji?search=%E8%B3%8B">賋 - Kanji - Japanese Dictionary Tangorin</a>:<br>あきらか</td></tr>
<tr><td>U+8CCE</td><td>賎</td><td>IYASHI</td><td>IYASHII</td><td>Consistent with U+8CE4 賤 IYASHII</td></tr>
<tr><td>U+8CD1</td><td>賑</td><td>NIGIWAU NIGYAKA NIGIWAI</td><td>NIGIWAU NIGIYAKA NIGIWAI</td><td><a href="https://en.wiktionary.org/wiki/%E8%B3%91">賑 - Wiktionary</a>:<br>Kun: にぎわう (nigiwau, 賑わう); にぎやか (nigiyaka, 賑やか)</td></tr>
<tr><td>U+8CE1</td><td>賡</td><td>TSUGU TSUGUNAFU</td><td>TSUGU TSUGUNAU</td><td>つぐなふ → つぐなう (modern Japanese orthography)</td></tr>
<tr><td>U+8DBB</td><td>趻</td><td>HURAHURASURU</td><td>FURAFURASURU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8DDD</td><td>距</td><td>KEZUME TAGAU HEDATERU</td><td>KEDZUME TAGAU HEDATERU</td><td><a href="https://tangorin.com/kanji?search=%E8%B7%9D">距 - Kanji - Japanese Dictionary Tangorin</a>:<br>へだたる・けづめ</td></tr>
<tr><td>U+8E38</td><td>踸</td><td>HURAJURASURU</td><td>FURAFURASURU</td><td>Typo: JURA → HURA<br>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E40</td><td>蹀</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E44</td><td>蹄</td><td>HIZUME</td><td>HIDZUME</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%84">蹄 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひづめ</td></tr>
<tr><td>U+8E4B</td><td>蹋</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E4D</td><td>蹍</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E4F</td><td>蹏</td><td>HIZUME</td><td>HIDZUME</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%8F">蹏 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひづめ</td></tr>
<tr><td>U+8E54</td><td>蹔</td><td>TOTSUSHINSURU</td><td>TOSSHINSURU</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%94">蹔 - Kanji - Japanese Dictionary Tangorin</a>:<br>とっしんする</td></tr>
<tr><td>U+8E5B</td><td>蹛</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E5D</td><td>蹝</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E69</td><td>蹩</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E79</td><td>蹹</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E90</td><td>躐</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E97</td><td>躗</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E9B</td><td>躛</td><td>HUMU</td><td>FUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8EAD</td><td>躭</td><td>HUKERU</td><td>FUKERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8EBA</td><td>躺</td><td>HUSU</td><td>FUSU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8EDC</td><td>軜</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E8%BB%9C">軜 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+8F00</td><td>輀</td><td>HITSUGIGURUMA JISHIYA</td><td>HITSUGIGURUMA JISHA</td><td>Related to U+8F5C 轜 HITSUGIGURUMA JISHA</td></tr>
<tr><td>U+8F23</td><td>輣</td><td>IKUSAGURUMU</td><td>IKUSAGURUMA</td><td><a href="https://tangorin.com/kanji?search=%E8%BC%A3">輣 - Kanji - Japanese Dictionary Tangorin</a>:<br>いくさぐるま</td></tr>
<tr><td>U+8F5C</td><td>轜</td><td>HITSUGIGU</td><td>HITSUGIGURUMA JISHA</td><td><a href="https://tangorin.com/kanji?search=%E8%BD%9C">轜 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひつぎぐるま・じしゃ</td></tr>
<tr><td>U+8F61</td><td>轡</td><td>TAZUNA KUTSUWA</td><td>TADZUNA KUTSUWA</td><td><a href="https://tangorin.com/kanji?search=%E8%BD%A1">轡 - Kanji - Japanese Dictionary Tangorin</a>:<br>くつわ・たづな</td></tr>
<tr><td>U+8FA1</td><td>辡</td><td>UTSUTAHERU</td><td>UTTAERU</td><td><a href="https://tangorin.com/kanji?search=%E8%BE%A1">辡 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえる</td></tr>
<tr><td>U+9004</td><td>逄</td><td>HUSAGU</td><td>FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+902C</td><td>逬</td><td>HASHIRU HOTOBASHIRU SHIRIZOKERU TSUKAFU</td><td>HASHIRU HOTOBASHIRU SHIRIZOKERU TSUKAU</td><td>つかふ → つかう (modern Japanese orthography)</td></tr>
<tr><td>U+9035</td><td>逵</td><td>OUJI</td><td>OOJI</td><td><a href="https://tangorin.com/kanji?search=%E9%80%B5">逵 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおじ</td></tr>
<tr><td>U+906C</td><td>遬</td><td>SUMIYAKA KAWARU CHIJIMU KOMAKAI TSUTSUSHIMU</td><td>SUMIYAKA KAWARU CHIDJIMU KOMAKAI TSUTSUSHIMU</td><td><a href="https://tangorin.com/kanji?search=%E9%81%AC">遬 - Kanji - Japanese Dictionary Tangorin</a>:<br>すみやか・かわる・ちぢむ・こまかい・つつしむ</td></tr>
<tr><td>U+9090</td><td>邐</td><td>TSUZUKU</td><td>TSUDZUKU</td><td><a href="https://tangorin.com/kanji?search=%E9%82%90">邐 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづく</td></tr>
<tr><td>U+915A</td><td>酚</td><td>HUENOORU</td><td>FENOORU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A7%E3%83%8E%E3%83%BC%E3%83%AB">フェノール</a></td></tr>
<tr><td>U+916B</td><td>酫</td><td>SHIHOZUKE</td><td>SHIODZUKE</td><td>しほづけ → しおづけ (modern Japanese orthography)</td></tr>
<tr><td>U+9177</td><td>酷</td><td>KIBISHII HANAHADASHI MUGOI</td><td>KIBISHII HANAHADASHII MUGOI</td><td>Use consistent adjective form for all readings</td></tr>
<tr><td>U+918E</td><td>醎</td><td>SEISHIYU</td><td>SEISHU</td><td><a href="https://en.wiktionary.org/wiki/%E9%86%8E">醎 - Wiktionary</a>:<br>Kun: せいしゅ (seishu), しおからい (shiokarai)</td></tr>
<tr><td>U+91B6</td><td>酫</td><td>SU SUI SHIHOKARAI</td><td>SU SUI SHIOKARAI</td><td>しほからい → しおからい (modern Japanese orthography)</td></tr>
<tr><td>U+91C6</td><td>釆</td><td>WAKATSU WAKARERU HIZUME</td><td>WAKATSU WAKARERU HIDZUME</td><td>Consistent with:<br>• U+8E44 蹄 HIDZUME<br>• U+8E4F 蹏 HIDZUME</td></tr>
<tr><td>U+91D4</td><td>釔</td><td>ITORYUUMU</td><td>ITTORIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%83%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0">イットリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%87%94">釔 - Wiktionary</a>:<br>Kun: イットリウム (ittoriumu, 釔)</td></tr>
<tr><td>U+91D9</td><td>釙</td><td>ARAGANE BORONYUUMU</td><td>ARAGANE PORONIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%AD%E3%83%8B%E3%82%A6%E3%83%A0">ポロニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%87%99">釙 - Wiktionary</a>:<br>Kun: あらがね (aragane), ぽろにうむ (poroniumu)</td></tr>
<tr><td>U+91E5</td><td>釥</td><td>YOIKANE YOI MIMEYOI SURUDOI KOMAKA KAMAKA</td><td>YOIKANE YOI MIMEYOI SURUDOI KOMAKAI KASUKA</td><td><a href="https://tangorin.com/kanji?search=%E9%87%A5">釥 - Kanji - Japanese Dictionary Tangorin</a>:<br>よいかね・よい・みめよい・するどい・こまかい・かすか</td></tr>
<tr><td>U+91F7</td><td>釷</td><td>TORYUUMU</td><td>TORIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0">トリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%87%B7">釷 - Wiktionary</a>:<br>Kun: トリウム (toriumu)</td></tr>
<tr><td>U+9224</td><td>鈤</td><td>GERUMANYUUMU</td><td>GERUMANIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%AB%E3%83%9E%E3%83%8B%E3%82%A6%E3%83%A0">ゲルマニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%A4">鈤 - Wiktionary</a>:<br>Kun: ゲルマニウム (gerumaniumu, 鈤)</td></tr>
<tr><td>U+9226</td><td>鈦</td><td>CHITANYUUMU</td><td>CHITANIUMU CHITAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%BF%E3%83%8B%E3%82%A6%E3%83%A0">チタニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%A6">鈦 - Wiktionary</a>:<br>Kun: ちたにうむ (chitaniumu)</td></tr>
<tr><td>U+9230</td><td>鈰</td><td>KEN SERYUUMU</td><td>KEN SERIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%AA%E3%82%A6%E3%83%A0">セリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%B0">鈰 - Wiktionary</a>:<br>Kun: けん (ken, 鈰); セリウム (seriumu, 鈰)</td></tr>
<tr><td>U+9236</td><td>鈶</td><td>TARYUUMU</td><td>TARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%AA%E3%82%A6%E3%83%A0">タリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%B6">鈶 - Wiktionary</a>:<br>Kun: タリウム (tariumu)</td></tr>
<tr><td>U+923E</td><td>鈾</td><td>URANYUUMU</td><td>URANIUMU URAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%A9%E3%83%8B%E3%82%A6%E3%83%A0">ウラニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%BE">鈾 - Wiktionary</a>:<br>Kun: ウラン (uran), ウラニウム (uraniumu)</td></tr>
<tr><td>U+9240</td><td>鉀</td><td>YOROI KARYUUMU</td><td>YOROI KARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%82%A6%E3%83%A0">カリウム</a><br><a href="https://tangorin.com/kanji?search=%E9%89%80">鉀 - Kanji - Japanese Dictionary Tangorin</a>:<br>よろい・かりうむ</td></tr>
<tr><td>U+9251</td><td>鉑</td><td>BURACHINA</td><td>PURACHINA</td><td>[<a href="https://github.com/tonton-pixel/Unihan-Japanese-Kun-Error-Report/issues/1">mandel59</a>] 鉑 (platinum) is プラチナ in Japanese, not ブラチナ</td></tr>
<tr><td>U+9268</td><td>鉨</td><td>ITOMAONOASHI</td><td>ITOMAKINOASHI</td><td><a href="https://tangorin.com/kanji?search=%E9%89%A8">鉨 - Kanji - Japanese Dictionary Tangorin</a>:<br>いとまきのあし<br>Consistent with U+922E 鈮 ITOMAKINOASHI</td></tr>
<tr><td>U+927E</td><td>鉾</td><td>HOKO KITSUSAKI</td><td>HOKO KISSAKI</td><td>Consistent with:<br>• U+92E9 鋩 HOKOSAKI KISSAKI</td></tr>
<tr><td>U+9292</td><td>銒</td><td>SAKEINE SAKETSUBO ATSUMONONABE</td><td>SAKEIRE SAKETSUBO ATSUMONONABE</td><td>Typo: SAKEINE → SAKEIRE<br><a href="https://tangorin.com/kanji?search=%E9%8A%92">銒 - Kanji - Japanese Dictionary Tangorin</a>:<br>さけいれ・さけつぼ・あつものなべ</td></tr>
<tr><td>U+92A0</td><td>銠</td><td>MUTENYUUMU</td><td>RUTENIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%86%E3%83%8B%E3%82%A6%E3%83%A0">ルテニウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8A%A0">銠 - Kanji - Japanese Dictionary Tangorin</a>:<br>るてにうむ</td></tr>
<tr><td>U+92A5</td><td>銥</td><td>IRIJUUMU</td><td>IRIJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%AA%E3%82%B8%E3%82%A6%E3%83%A0">イリジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8A%A5">銥 - Wiktionary</a>:<br>Kun: イリジウム (irijiumu)</td></tr>
<tr><td>U+92A7</td><td>銧</td><td>RAJUUMU</td><td>RAJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B8%E3%82%A6%E3%83%A0">ラジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8A%A7">銧 - Wiktionary</a>:<br>Kun: ラジウム (rajiumu, 銧)</td></tr>
<tr><td>U+92AB</td><td>銫</td><td>SESHUUMU</td><td>SESHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%B7%E3%82%A6%E3%83%A0">セシウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8A%AB">銫 - Wiktionary</a>:<br>Kun: セシウム (seshiumu)</td></tr>
<tr><td>U+92C0</td><td>鋀</td><td>TORYUUMU</td><td>TORIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0">トリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%80">鋀 - Wiktionary</a>:<br>Kun: トリウム (toriumu)</td></tr>
<tr><td>U+92C1</td><td>鋁</td><td>YASURI ARUMINYUUMU</td><td>YASURI ARUMINIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%9F%E3%83%8B%E3%82%A6%E3%83%A0">アルミニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%81">鋁 - Wiktionary</a>:<br>Kun: やすり (yasuri, 鋁); アルミニウム (aruminiumu)</td></tr>
<tr><td>U+92C7</td><td>鋇</td><td>ATSUGANE BARYUUMU</td><td>ATSUGANE BARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%AA%E3%82%A6%E3%83%A0">バリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%87">鋇 - Wiktionary</a>:<br>あつがね (atsugane, 鋇); ばりうむ (bariumu, 鋇)</td></tr>
<tr><td>U+92C8</td><td>鋈</td><td>SHIROGANE METSUKI</td><td>SHIROGANE MEKKI</td><td><a href="https://tangorin.com/kanji?search=%E9%8B%88">鋈 - Kanji - Japanese Dictionary Tangorin</a>:<br>しろがね・めっき</td></tr>
<tr><td>U+92CD</td><td>鋍</td><td>AKIKOBORERU BERIRYUUMU</td><td>AKIKOBORERU BERIRIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%99%E3%83%AA%E3%83%AA%E3%82%A6%E3%83%A0">ベリリウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8B%8D">鋍 - Kanji - Japanese Dictionary Tangorin</a>:<br>あきこぼれる・べりりうむ</td></tr>
<tr><td>U+92E9</td><td>鋩</td><td>HOKOSAKI KITSUSAKI</td><td>HOKOSAKI KISSAKI</td><td><a href="https://tangorin.com/kanji?search=%E9%8B%A9">鋩 - Kanji - Japanese Dictionary Tangorin</a>:<br>ほこさき・きっさき・へさき</td></tr>
<tr><td>U+92F0</td><td>鋰</td><td>RICHUUMU</td><td>RICHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%81%E3%82%A6%E3%83%A0">リチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%B0">鋰 - Wiktionary</a>:<br>Kun: リチウム (richiumu, 鋰)</td></tr>
<tr><td>U+9334</td><td>錴</td><td>ROJUUMU</td><td>ROJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%B8%E3%82%A6%E3%83%A0">ロジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8C%B4">錴 - Wiktionary</a>:<br>Kun: ロジウム (rojiumu)</td></tr>
<tr><td>U+9337</td><td>錷</td><td>KADORINYUUMU</td><td>GADORINIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%89%E3%83%AA%E3%83%8B%E3%82%A6%E3%83%A0">ガドリニウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8C%B7">錷 - Kanji - Japanese Dictionary Tangorin</a>:<br>がどりにうむ</td></tr>
<tr><td>U+9376</td><td>鍶</td><td>SERYUUMU</td><td>SUTORONCHIUMU</td><td>To be consistent with kDefinition: "strontium; an iron utensil", not "cerium"<br>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B3%E3%83%81%E3%82%A6%E3%83%A0">ストロンチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8D%B6">鍶 - Wiktionary</a>:<br>Kun: ストロンチウム (sutoronchiumu)</td></tr>
<tr><td>U+938F</td><td>鎏</td><td>UTSUKUSHIIGANE</td><td>UTSUKUSHIIKANE</td><td><a href="https://tangorin.com/kanji?search=%E9%8E%8F">鎏 - Kanji - Japanese Dictionary Tangorin</a>:<br>うつくしいかね</td></tr>
<tr><td>U+9398</td><td>鎘</td><td>KANAENOTSUKIMONO KADOMYUUSU</td><td>KANAENOTSUKIMONO KADOMIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%89%E3%83%9F%E3%82%A6%E3%83%A0">カドミウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8E%98">鎘 - Kanji - Japanese Dictionary Tangorin</a>:<br>かなえのつきもの・かどみうむ</td></tr>
<tr><td>U+93B4</td><td>鎴</td><td>SUTORONSHUUMU</td><td>SUTORONCHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B3%E3%83%81%E3%82%A6%E3%83%A0">ストロンチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B4">鎴 - Wiktionary</a>:<br>Kun: ストロンチウム (sutoronchiumu)</td></tr>
<tr><td>U+93B5</td><td>鎵</td><td>GARYUUMU</td><td>GARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%AA%E3%82%A6%E3%83%A0">ガリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B5">鎵 - Wiktionary</a>:<br>Kun: がりうむ (gariumu)</td></tr>
<tr><td>U+93B6</td><td>鎶</td><td>KOROMUBYUUMU</td><td>KORONBIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%AD%E3%83%B3%E3%83%93%E3%82%A6%E3%83%A0">コロンビウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B6">鎶 - Wiktionary</a>:<br>Kun: コロンビウム (koronbiumu, 鎶)</td></tr>
<tr><td>U+93C5</td><td>鏅</td><td>KITAHERU</td><td>KITAERU</td><td>きたへる → きたえる (modern Japanese orthography)</td></tr>
<tr><td>U+940F</td><td>鐏</td><td>ISHIZUKI</td><td>ISHIDZUKI</td><td><a href="https://en.wiktionary.org/wiki/%E9%90%8F">鐏 - Wiktionary</a>:<br>Kun: いしづき (ishizuki)</td></tr>
<tr><td>U+9413</td><td>鐓</td><td>ISHIZUKI TSUCHI</td><td>ISHIDZUKI TSUCHI</td><td><a href="https://en.wiktionary.org/wiki/%E9%90%93">鐓 - Wiktionary</a>:<br>Kun: いしづき (ishizuki), つち (tsuchi)</td></tr>
<tr><td>U+941F</td><td>鐟</td><td>CHITANYUUMU</td><td>CHITANIUMU CHITAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%BF%E3%83%8B%E3%82%A6%E3%83%A0">チタニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%90%9F">鐟 - Wiktionary</a>:<br>Kun: ちたにうむ (chitaniumu)</td></tr>
<tr><td>U+942F</td><td>鐯</td><td>KUHA OHOSUKI</td><td>KUWA OOSUKI</td><td>くは → くわ<br>おほすき → おおすき<br>(modern Japanese orthography)</td></tr>
<tr><td>U+9432</td><td>鐲</td><td>HURIGANE</td><td>FURIGANE</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+9433</td><td>鐳</td><td>KAME RAJUUMU</td><td>KAME RAJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B8%E3%82%A6%E3%83%A0">ラジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%90%B3">鐳 - Wiktionary</a>:<br>Kun: かめ (kame, 鐳); ラジウム (rajiumu, 鐳)</td></tr>
<tr><td>U+943F</td><td>鐿</td><td>ICHIRUBYUUMU</td><td>ITTERUBIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%83%E3%83%86%E3%83%AB%E3%83%93%E3%82%A6%E3%83%A0">イッテルビウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%90%BF">鐿 - Wiktionary</a>:<br>Kun: イッテルビウム (itterubiumu)</td></tr>
<tr><td>U+9461</td><td>鑡</td><td>OHOBAN</td><td>OOBAN</td><td>おほばん → おおばん<br>(modern Japanese orthography)</td></tr>
<tr><td>U+946D</td><td>鑭</td><td>RANTANIUMU</td><td>RANTAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%B3%E3%82%BF%E3%83%B3">ランタン</a><br><a href="https://en.wiktionary.org/wiki/%E9%91%AD">鑭 - Wiktionary</a>:<br>Kun: ランタン (rantan)</td></tr>
<tr><td>U+94D3</td><td>铓</td><td>HOKOSAKI KITSUSAKI</td><td>HOKOSAKI KISSAKI</td><td>Simplified variant of U+92E9 鋩</td></tr>
<tr><td>U+9578</td><td>镸</td><td>NAGAAI OSA</td><td>NAGAI OSA</td><td><a href="https://en.wiktionary.org/wiki/%E9%95%B8">镸 - Wiktionary</a>:<br>Kun: ながい (nagai), おさ (osa)</td></tr>
<tr><td>U+957E</td><td>镾</td><td>WATARU TORITSUKUROFU</td><td>WATARU TORITSUKUROU</td><td>とりつくろふ → とりつくろう (modern Japanese orthography)</td></tr>
<tr><td>U+95B9</td><td>閹</td><td>SHIMOBE MESHITSUKAI KOBIHETSURA</td><td>SHIMOBE MESHITSUKAI KOBIHETSURAU</td><td>Related to【媚び諂う】こびへつらう?</td></tr>
<tr><td>U+9625</td><td>阥</td><td>KAGE KAGEERU</td><td>KAGE KAGERU</td><td><a href="https://tangorin.com/kanji?search=%E9%98%A5">阥 - Kanji - Japanese Dictionary Tangorin</a>:<br>かげ・かげる</td></tr>
<tr><td>U+9638</td><td>阸</td><td>FUSAGARU KAGIRU SAMATOGERU SEMARU AYAFUI KURUSHIMI NAYAMI KEHASHII HEDATEFUSAGU SEEMAI</td><td>FUSAGARU KAGIRU SAMATOGERU SEMARU AYAUI KURUSHIMI NAYAMI KEWASHII HEDATEFUSAGU SEMAI</td><td><a href="https://en.wiktionary.org/wiki/%E9%98%B8">阸 - Wiktionary</a>:<br>Kun: ふさがる (fusagaru, 阸がる); かぎる (kagiru, 阸る); せまる (semaru, 阸る); あやうい (ayaui, 阸い)←あやふい (ayafui, historical); くるしみ (kurushimi, 阸しみ); なやみ (nayami, 阸み); けわしい (kewashii, 阸しい)←けはしい (kefasii, historical); せまい (semai, 阸い)</td></tr>
<tr><td>U+9652</td><td>陒</td><td>YABURETAKAKI YABURERU KEHASHII</td><td>YABURETAKAKI YABURERU KEWASHII</td><td><a href="https://en.wiktionary.org/wiki/%E9%99%92">陒 - Wiktionary</a>:<br>Kun: やぶれたかき (yaburetakaki), やぶれる (yabureru), けわしい (kewashii)</td></tr>
<tr><td>U+9657</td><td>陗</td><td>KEHASHIKUTAKAI MATSUSUGUDETAKAI KEHASHII TAKAI KIBISHII SEEMARU KAKURERU SETSUKACHI KEHASHIISAKA</td><td>KEWASHIKUTAKAI MASSUGUDETAKAI KEWASHII TAKAI KIBISHII SEMARU KAKURERU SEKKACHI KEWASHIISAKA</td><td><a href="https://en.wiktionary.org/wiki/%E9%99%97">陗 - Wiktionary</a>:<br>Kun: けわしくたかい (kewashikutakai), まっすぐでたかい (massugudetakai), けわしい (kewashii), たかい (takai), きびしい (kibishii), せまる (semaru), かくれる (kakureru), せっかち (sekkachi), けわしいさか (kewashiisaka)</td></tr>
<tr><td>U+9662</td><td>院</td><td>IN</td><td></td><td>IN: kJapaneseOn, not kJapaneseKun<br><a href="https://tangorin.com/kanji?search=%E9%99%A2">院 - Kanji - Japanese Dictionary Tangorin</a>:<br>イン</td></tr>
<tr><td>U+966E</td><td>陮</td><td>TAKAI AYAFUI</td><td>TAKAI AYAUI</td><td>あやふい → あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+967B</td><td>陻</td><td>HUSAGU</td><td>FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+9682</td><td>隂</td><td>KAGE KAGEERU</td><td>KAGE KAGERU</td><td><a href="https://tangorin.com/kanji?search=%E9%9A%82">隂 - Kanji - Japanese Dictionary Tangorin</a>:<br>かげ・かげる</td></tr>
<tr><td>U+96D8</td><td>雘</td><td>SHINSHIYA</td><td>SHINSHA</td><td><a href="https://en.wiktionary.org/wiki/%E9%9B%98">雘 - Wiktionary</a>:<br>Kun: しんしゃ (shinsha, 雘)</td></tr>
<tr><td>U+96FB</td><td>電</td><td>INAZUMA</td><td>INADZUMA</td><td>【稲妻・電】いなづま</td></tr>
<tr><td>U+9757</td><td>靗</td><td>UKAGAFU</td><td>UKAGAU</td><td>うかがふ → うかがう (modern Japanese orthography)</td></tr>
<tr><td>U+976E</td><td>靮</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E9%9D%AE">靮 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+9776</td><td>靶</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E9%9D%B6">靶 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+9777</td><td>靷</td><td>HIKIZUNA</td><td>HIKIDZUNA</td><td><a href="https://en.wiktionary.org/wiki/%E9%9D%B7">靷 - Wiktionary</a>:<br>Kun: ひきづな (hikizuna)</td></tr>
<tr><td>U+9780</td><td>鞀</td><td>HURITSUZUMI</td><td>FURITSUDZUMI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br><a href="https://tangorin.com/kanji?search=%E9%9E%80">鞀 - Kanji - Japanese Dictionary Tangorin</a>:<br>ふりつづみ</td></tr>
<tr><td>U+9781</td><td>鞁</td><td>HIKIZUNA TAZUNA HARAOBI</td><td>HIKIDZUNA TADZUNA HARAOBI</td><td><a href="https://en.wiktionary.org/wiki/%E9%9E%81">鞁 - Wiktionary</a>:<br>Kun: ひきづな (hikizuna), たづな (tazuna), はらおび (haraobi)</td></tr>
<tr><td>U+9789</td><td>鞉</td><td>HURITSUZUMI</td><td>FURITSUDZUMI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br><a href="https://tangorin.com/kanji?search=%E9%9E%89">鞉 - Kanji - Japanese Dictionary Tangorin</a>:<br>ふりつづみ</td></tr>
<tr><td>U+9797</td><td>鞗</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E9%9E%97">鞗 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+97BC</td><td>鞼</td><td>TAZUNA TSUYOI KUJIKU KUJIKERU NUHITORIOSHITANAMESHIGAHA</td><td>TADZUNA TSUYOI KUJIKU KUJIKERU NUITORIWOSHITANAMESHIGAWA</td><td><a href="https://tangorin.com/kanji?search=%E9%9E%BC">鞼 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな・つよい・くじく・くじける・ぬいとりをしたなめしがわこ</td></tr>
<tr><td>U+97C1</td><td>韁</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E9%9F%81">韁 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+97C7</td><td>韇</td><td>YAZUTSU</td><td>YADZUTSU</td><td><a href="https://tangorin.com/kanji?search=%E9%9F%87">韇 - Kanji - Japanese Dictionary Tangorin</a>:<br>やづつ</td></tr>
<tr><td>U+97CA</td><td>韊</td><td>YAZUTSU EBIRA</td><td>YADZUTSU EBIRA</td><td><a href="https://tangorin.com/kanji?search=%E9%9F%8A">韊 - Kanji - Japanese Dictionary Tangorin</a>:<br>やづつ・えびら</td></tr>
<tr><td>U+97DB</td><td>韛</td><td>FUIGAU EBIRA</td><td>FUIGO EBIRA</td><td><a href="https://tangorin.com/kanji?search=%E9%9F%9B">韛 - Kanji - Japanese Dictionary Tangorin</a>:<br>ふいご・えびら</td></tr>
<tr><td>U+99F2</td><td>駲</td><td>SHUU</td><td></td><td>SHUU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+9AD3</td><td>髓</td><td>ZUI</td><td></td><td>ZUI: kJapaneseOn, not kJapaneseKun<br>Variant of U+9AC4 髄</td></tr>
<tr><td>U+9B6B</td><td>魫</td><td>SAKANONOKO</td><td>SAKANANOKO</td><td><a href="https://tangorin.com/kanji?search=%E9%AD%AB">魫 - Kanji - Japanese Dictionary Tangorin</a>:<br>さかなのこ</td></tr>
<tr><td>U+9B74</td><td>魴</td><td>OSHIKIUO KAGAMIDA</td><td>OSHIKIUO KAGAMIDAI</td><td><a href="https://en.wiktionary.org/wiki/%E9%AD%B4">魴 - Wiktionary</a>:<br>Kun: おしきうお (oshikiuo), かがみだい (kagamidai)</td></tr>
<tr><td>U+9B78</td><td>魸</td><td></td><td>NAMAZU</td><td>NAMAZU: kJapaneseKun, not kJapaneseOn<br><a href="https://en.wiktionary.org/wiki/%E9%AD%B8">魸 - Wiktionary</a>:<br>Kun: なまず (namazu)</td></tr>
<tr><td>U+9BB1</td><td>鮱</td><td></td><td>BORA</td><td>BORA: kJapaneseKun, not kJapaneseOn<br><a href="https://en.wiktionary.org/wiki/%E9%AE%B1">鮱 - Wiktionary</a>:<br>Kun: ぼら (bora, 鮱)</td></tr>
<tr><td>U+9BBE</td><td>鮾</td><td></td><td>KUSARU</td><td>KUSARU: kJapaneseKun, not kJapaneseOn<br>Consistent with:<br>• U+9BD8 鯘 KUSARU<br><a href="https://en.wiktionary.org/wiki/%E9%AE%BE">鮾 - Wiktionary</a>:<br>Kun: くさる (kusaru, 鮾る)</td></tr>
<tr><td>U+9D6F</td><td>鵯</td><td>HYO</td><td>HIYO</td><td><a href="https://en.wiktionary.org/wiki/%E9%B5%AF">鵯 - Wiktionary</a>:<br>Kun: ひよ (hiyo, 鵯); ひよどり (hiyodori, 鵯)</td></tr>
<tr><td>U+9EE0</td><td>黠</td><td>SATOI WARUGASHIKO</td><td>SATOI WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E9%BB%A0">黠 - Kanji - Japanese Dictionary Tangorin</a>:<br>さとい・わるがしこい</td></tr>
<tr><td>U+9F13</td><td>鼓</td><td>TSUZUMI</td><td>TSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%93">鼓 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづみ</td></tr>
<tr><td>U+9F14</td><td>鼔</td><td>TSUZUMI</td><td>TSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%94">鼔 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづみ</td></tr>
<tr><td>U+9F16</td><td>鼖</td><td>OOTSUZUMI</td><td>OOTSUDZUMI</td><td>Consistent with:<br>• U+9F1B 鼛 OOTSUDZUMI</td></tr>
<tr><td>U+9F17</td><td>鼗</td><td>FURITSUZUMI</td><td>FURITSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%97">鼗 - Kanji - Japanese Dictionary Tangorin</a>:<br>ふりつづみ</td></tr>
<tr><td>U+9F1B</td><td>鼛</td><td>OOTSUZUMI</td><td>OOTSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%9B">鼛 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおつづみ</td></tr>
<tr><td>U+9F46</td><td>齆</td><td>HANAZUMARI</td><td>HANADZUMARI</td><td><a href="https://en.wiktionary.org/wiki/%E9%BD%86">齆 - Wiktionary</a>:<br>Kun: はなづまり (hanazumari)</td></tr>
<tr><td>U+9F8F</td><td>龏</td><td>TSUTSUSHIMU NOBORU TOMOSHIBIOHOHI</td><td>TSUTSUSHIMU NOBORU TOMOSHIBIOOI</td><td>ともしびおほひ → ともしびおおい (modern Japanese orthography)</td></tr>
<tr><td>U+275D7</td><td>𧗗</td><td>HANAJI</td><td>HANADJI</td><td>Consistent with【鼻血】はなぢ</td></tr>
</table>

## kJapaneseOn

<table>
<tr><th>Code</th><th>Char</th><th>Issue</th><th>Correction</th><th>Rationale&nbsp;/&nbsp;References</th><tr>
<tr><td>U+3861</td><td>㡡</td><td>CHU JIU</td><td>CHU JUU</td><td>Modern Japanese orthography: JIU → JUU</td></tr>
<tr><td>U+4E48</td><td>么</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+4E53</td><td>乓</td><td>HAU</td><td>HOU</td><td>Modern Japanese orthography: HAU → HOU</td></tr>
<tr><td>U+4EFE</td><td>仾</td><td>TEI HIKUI</td><td>TEI</td><td>HIKUI: kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+4F52</td><td>佒</td><td>AU YOU</td><td>OU YOU</td><td>Modern Japanese orthography: AU → OU</td></tr>
<tr><td>U+4F6A</td><td>佪</td><td>KUWAI E</td><td>KAI E</td><td>Modern Japanese orthography: KUWAI → KAI</td></tr>
<tr><td>U+4F80</td><td>侀</td><td>KEI KYAU</td><td>KEI KYOU</td><td>Modern Japanese orthography: KYAU → KYOU</td></tr>
<tr><td>U+4FA0</td><td>侠</td><td>KYOU</td><td>KYOU KYAN</td><td>KYAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+4FC7</td><td>俇</td><td>KYAU GAU KAU</td><td>KYOU GOU KOU</td><td>Modern Japanese orthography: KYAU → KYOU, GAU → GOU, KAU → KOU</td></tr>
<tr><td>U+4FCF</td><td>俏</td><td>SEU</td><td>SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+4FD3</td><td>俓</td><td>GAU KYAU GEN GEI</td><td>GOU KYOU GEN GEI</td><td>Modern Japanese orthography: GAU → GOU, KYAU → KYOU</td></tr>
<tr><td>U+4FE0</td><td>俠</td><td>KYOU</td><td>KYOU KYAN</td><td>KYAN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+500C</td><td>倌</td><td>KUWAN</td><td>KAN</td><td>Modern Japanese orthography: KUWAN → KAN</td></tr>
<tr><td>U+501C</td><td>倜</td><td>TEKI CHAKU CHUU CHYU</td><td>TEKI CHAKU CHUU CHU</td><td>Invalid romanization: CHYU → CHU</td></tr>
<tr><td>U+5057</td><td>偗</td><td>SEI SHAU</td><td>SEI SHOU</td><td>Modern Japanese orthography: SHAU → SHOU</td></tr>
<tr><td>U+505B</td><td>偛</td><td>SOU SAHU</td><td>SOU</td><td>Modern Japanese orthography: SAHU → SOU<br>+ remove duplicates</td></tr>
<tr><td>U+505F</td><td>偟</td><td>KUWAU WAU</td><td>KOU OU</td><td>Modern Japanese orthography: KUWAU → KOU, WAU → OU</td></tr>
<tr><td>U+5060</td><td>偠</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+5062</td><td>偢</td><td>SEU</td><td>SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+506A</td><td>偪</td><td>HIYOKU HIKI FUKU</td><td>HYOKU HIKI FUKU</td><td>Modern Japanese orthography: HIYOKU → HYOKU</td></tr>
<tr><td>U+508B</td><td>傋</td><td>KAU KOU KU</td><td>KOU KU</td><td>Modern Japanese orthography: KAU → KOU<br>+ remove duplicates</td></tr>
<tr><td>U+5096</td><td>傖</td><td>SAU SHAU</td><td>SOU SHOU</td><td>Modern Japanese orthography: SAU → SOU, SHAU → SHOU</td></tr>
<tr><td>U+509C</td><td>傜</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+509D</td><td>傝</td><td>TAN TON TAHU</td><td>TAN TON TOU</td><td>Modern Japanese orthography: TAHU → TOU</td></tr>
<tr><td>U+509F</td><td>傟</td><td>AU</td><td>OU</td><td>Modern Japanese orthography: AU → OU</td></tr>
<tr><td>U+50B8</td><td>傸</td><td>SAU SHAU</td><td>SOU SHOU</td><td>Modern Japanese orthography: SAU → SOU, SHAU → SHOU</td></tr>
<tr><td>U+50C4</td><td>僄</td><td>HEU</td><td>HYOU</td><td>Modern Japanese orthography: HEU → HYOU</td></tr>
<tr><td>U+50D7</td><td>僗</td><td>RAU</td><td>ROU</td><td>Modern Japanese orthography: RAU → ROU</td></tr>
<tr><td>U+50E6</td><td>僦</td><td>SHYUU SHU</td><td>SHUU SHU</td><td>Invalid romanization: SHYUU → SHUU</td></tr>
<tr><td>U+50EC</td><td>僬</td><td>SEU ZEU</td><td>SHOU JOU</td><td>Modern Japanese orthography: SEU → SHOU, ZEU → JOU</td></tr>
<tr><td>U+510C</td><td>儌</td><td>KEU</td><td>KYOU</td><td>Modern Japanese orthography: KEU → KYOU</td></tr>
<tr><td>U+511C</td><td>儜</td><td>DAU NYAU</td><td>DOU NYOU</td><td>Modern Japanese orthography: DAU → DOU, NYAU → NYOU</td></tr>
<tr><td>U+5126</td><td>儦</td><td>HYOU HEU</td><td>HYOU</td><td>Modern Japanese orthography: HEU → HYOU<br>+ remove duplicates</td></tr>
<tr><td>U+5198</td><td>冘</td><td>IN IU YU</td><td>IN YUU YU</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+51CA</td><td>凊</td><td>SEI SHAU</td><td>SEI SHOU</td><td>Modern Japanese orthography: SHAU → SHOU</td></tr>
<tr><td>U+51D4</td><td>凔</td><td>SAU SHAU</td><td>SOU SHOU</td><td>Modern Japanese orthography: SAU → SOU, SHAU → SHOU</td></tr>
<tr><td>U+5201</td><td>刁</td><td>TEU CHOU</td><td>CHOU</td><td>Modern Japanese orthography: TEU → CHOU<br>+ remove duplicates</td></tr>
<tr><td>U+5202</td><td>刂</td><td>TAU</td><td>TOU</td><td>Modern Japanese orthography: TAU → TOU</td></tr>
<tr><td>U+5260</td><td>剠</td><td>KEI SHAU RYAU</td><td>KEI SHOU RYOU</td><td>Modern Japanese orthography: SHAU → SHOU, RYAU → RYOU</td></tr>
<tr><td>U+527C</td><td>剼</td><td>SAN SEU</td><td>SAN SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+5282</td><td>劂</td><td>KETSU KUUCHI KEI KE</td><td>KETSU KUCHI KEI KE</td><td>Typo: KUUCHI → KUCHI<br><a href="https://tangorin.com/kanji?search=%E5%8A%82">劂 - Kanji - Japanese Dictionary Tangorin</a>:<br>ケツ・クチ・ケイ・ケ</td></tr>
<tr><td>U+52D0</td><td>勐</td><td>BAU</td><td>BOU</td><td>Modern Japanese orthography: BAU → BOU</td></tr>
<tr><td>U+52DC</td><td>勜</td><td>OU O AU</td><td>OU O</td><td>Modern Japanese orthography: AU → OU<br>+ remove duplicates</td></tr>
<tr><td>U+52E1</td><td>勡</td><td>HEU</td><td>HYOU</td><td>Modern Japanese orthography: HEU → HYOU</td></tr>
<tr><td>U+5361</td><td>卡</td><td>SAHU SA KA ZOU SOU</td><td>SOU SA KA ZOU</td><td>Modern Japanese orthography: SAHU → SOU<br>+ remove duplicates</td></tr>
<tr><td>U+536C</td><td>卬</td><td>GAU KYAU</td><td>GOU KYOU</td><td>Modern Japanese orthography: GAU → GOU, KYAU → KYOU</td></tr>
<tr><td>U+5392</td><td>厒</td><td>KAHU KOHU KEHU</td><td>KOU KYOU</td><td>Modern Japanese orthography: KAHU → KOU, KOHU → KOU, KEHU → KYOU<br>+ remove duplicates</td></tr>
<tr><td>U+53B9</td><td>厹</td><td>JIU NIYU KIU GU</td><td>JUU NYU KYUU GU</td><td>Modern Japanese orthography: JIU → JUU, NIYU → NYU, KIU → KYUU</td></tr>
<tr><td>U+53E6</td><td>另</td><td>REI RYAU</td><td>REI RYOU</td><td>Modern Japanese orthography: RYAU → RYOU</td></tr>
<tr><td>U+53F9</td><td>叹</td><td>IU</td><td>YUU</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+5466</td><td>呦</td><td>IU YU AU EU</td><td>YUU YU OU YOU</td><td>Modern Japanese orthography: IU → YUU, AU → OU, EU → YOU</td></tr>
<tr><td>U+546B</td><td>呫</td><td>TEHU SEHU TEN</td><td>CHOU SHOU TEN</td><td>Modern Japanese orthography: TEHU → CHOU, SEHU → SHOU</td></tr>
<tr><td>U+5489</td><td>咉</td><td>AU</td><td>OU</td><td>Modern Japanese orthography: AU → OU</td></tr>
<tr><td>U+54B6</td><td>咶</td><td>KUUI KE KUTSU KECHI KUU GE SHIJI</td><td>KE KUTSU KECHI KUU GE SHI JI</td><td>Removed irregular reading: KUUI<br>Split readings: SHIJI → SHI JI</td></tr>
<tr><td>U+54B7</td><td>咷</td><td>TAU DOU TEU TEKI JIAKU</td><td>TOU DOU CHOU TEKI JAKU</td><td>Modern Japanese orthography: TAU → TOU, TEU → CHOU<br>Irregular reading: JIAKU → JAKU</td></tr>
<tr><td>U+54BA</td><td>咺</td><td>KEN KUUN</td><td>KEN KUN</td><td>Irregular reading: KUUN → KUN<br><a href="https://tangorin.com/kanji?search=%E5%92%BA">咺 - Kanji - Japanese Dictionary Tangorin</a>:<br>ケン・クン</td></tr>
<tr><td>U+5500</td><td>唀</td><td>IU</td><td>YUU</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+553C</td><td>唼</td><td>SAHU SEHU</td><td>SOU SHOU</td><td>Modern Japanese orthography: SAHU → SOU, SEHU → SHOU</td></tr>
<tr><td>U+554D</td><td>啍</td><td>TON DON SHUN TAI TE KYOU KAU</td><td>TON DON SHUN TAI TE KYOU KOU</td><td>Modern Japanese orthography: KAU → KOU</td></tr>
<tr><td>U+5550</td><td>啐</td><td>SAI SE SA SHUTSU SHUCHI KATSUKACHI</td><td>SAI SE SA SHUTSU SHUCHI KATSU KACHI</td><td>Split readings: KATSUKACHI → KATSU KACHI<br><a href="https://tangorin.com/kanji?search=%E5%95%90">啐 - Kanji - Japanese Dictionary Tangorin</a>:<br>サイ・セ・サ・シュツ・シュチ・カツ・カチ</td></tr>
<tr><td>U+5566</td><td>啦</td><td>RAHU ROU</td><td>ROU</td><td>Modern Japanese orthography: RAHU → ROU<br>+ remove duplicates</td></tr>
<tr><td>U+5593</td><td>喓</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+559F</td><td>喟</td><td>KI KUWAI KE</td><td>KI KAI KE</td><td>Modern Japanese orthography: KUWAI → KAI</td></tr>
<tr><td>U+55A2</td><td>喢</td><td>TEHU SEHU SAHU</td><td>CHOU SHOU SOU</td><td>Modern Japanese orthography: TEHU → CHOU, SEHU → SHOU, SAHU → SOU</td></tr>
<tr><td>U+55C2</td><td>嗂</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+55D1</td><td>嗑</td><td>KAHU</td><td>KOU</td><td>Modern Japanese orthography: KAHU → KOU</td></tr>
<tr><td>U+55D6</td><td>嗖</td><td>SHUHU SHIU SHIYU</td><td>SHUU SHU</td><td>Irregular reading: SHUHU → SHUU<br>Modern Japanese orthography: SHIU → SHUU, SHIYU → SHU<br>+ remove duplicates</td></tr>
<tr><td>U+55DB</td><td>嗛</td><td>KEN KAN GAN KEHU</td><td>KEN KAN GAN KYOU</td><td>Modern Japanese orthography: KEHU → KYOU</td></tr>
<tr><td>U+5601</td><td>嘁</td><td>SAHU SHUKU</td><td>SOU SHUKU</td><td>Modern Japanese orthography: SAHU → SOU</td></tr>
<tr><td>U+5604</td><td>嘄</td><td>KEU</td><td>KYOU</td><td>Modern Japanese orthography: KEU → KYOU</td></tr>
<tr><td>U+5608</td><td>嘈</td><td>SAU SOU SEU ZEU</td><td>SOU SHOU JOU</td><td>Modern Japanese orthography: SAU → SOU, SEU → SHOU, ZEU → JOU<br>+ remove duplicates</td></tr>
<tr><td>U+560C</td><td>嘌</td><td>HEU</td><td>HYOU</td><td>Modern Japanese orthography: HEU → HYOU</td></tr>
<tr><td>U+5610</td><td>嘐</td><td>HAU HEU RAUROU BIU MIU</td><td>HOU HYOU ROU BYUU MYUU</td><td>Split readings: RAUROU → RAU ROU<br>Modern Japanese orthography: HAU → HOU, HEU → HYOU, RAU → ROU, BIU → BYUU, MIU → MYUU<br>+ remove duplicates</td></tr>
<tr><td>U+5635</td><td>嘵</td><td>KEU GEU</td><td>KYOU GYOU</td><td>Modern Japanese orthography: KEU → KYOU, GEU → GYOU</td></tr>
<tr><td>U+5639</td><td>嘹</td><td>REU RYOU</td><td>RYOU</td><td>Modern Japanese orthography: REU → RYOU<br>+ remove duplicates</td></tr>
<tr><td>U+564B</td><td>噋</td><td>TON KUWAKU</td><td>TON KAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU</td></tr>
<tr><td>U+564D</td><td>噍</td><td>SEU ZEU SHIU SHIYU SHAKU ZAKU</td><td>SHOU JOU SHUU SHU SHAKU ZAKU</td><td>Modern Japanese orthography: SEU → SHOU, ZEU → JOU, SHIU → SHUU, SHIYU → SHU</td></tr>
<tr><td>U+5662</td><td>噢</td><td>IKU U KU IU</td><td>IKU U KU YUU</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+5665</td><td>噥</td><td>DOU NU DAU NYOU</td><td>DOU NU NYOU</td><td>Modern Japanese orthography: DAU → DOU<br>+ remove duplicates</td></tr>
<tr><td>U+5672</td><td>噲</td><td>KUWAI KE WAI E KATSU KACHI</td><td>KAI KE WAI E KATSU KACHI</td><td>Modern Japanese orthography: KUWAI → KAI</td></tr>
<tr><td>U+568E</td><td>嚎</td><td>KAU GOU</td><td>KOU GOU</td><td>Modern Japanese orthography: KAU → KOU</td></tr>
<tr><td>U+5698</td><td>嚘</td><td>IU U</td><td>YUU U</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+56B7</td><td>嚷</td><td>JAU</td><td>JOU</td><td>Modern Japanese orthography: JAU → JOU</td></tr>
<tr><td>U+5715</td><td>圕</td><td>TOSHOKAN SHO</td><td>SHO</td><td>TOSHOKAN: kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+572B</td><td>圫</td><td>AU</td><td>OU</td><td>Modern Japanese orthography: AU → OU</td></tr>
<tr><td>U+5733</td><td>圳</td><td>SHIU SHU SHIN SON SHUN</td><td>SHUU SHU SHIN SON SHUN</td><td>Modern Japanese orthography: SHIU → SHUU</td></tr>
<tr><td>U+5767</td><td>坧</td><td>SEKI SHAU</td><td>SEKI SHOU</td><td>Modern Japanese orthography: SHAU → SHOU</td></tr>
<tr><td>U+5771</td><td>坱</td><td>AU</td><td>OU</td><td>Modern Japanese orthography: AU → OU</td></tr>
<tr><td>U+5773</td><td>坳</td><td>AU EU</td><td>OU YOU</td><td>Modern Japanese orthography: AU → OU, EU → YOU</td></tr>
<tr><td>U+5794</td><td>垔</td><td>SHYOU JU TOU ZU</td><td>SHOU JU TOU ZU</td><td>Invalid romanization: SHYOU → SHOU</td></tr>
<tr><td>U+5797</td><td>垗</td><td>TEU DEU</td><td>CHOU DJOU</td><td>Modern Japanese orthography: TEU → CHOU, DEU → DJOU</td></tr>
<tr><td>U+579A</td><td>垚</td><td>GEU</td><td>GYOU</td><td>Modern Japanese orthography: GEU → GYOU</td></tr>
<tr><td>U+57A5</td><td>垥</td><td>KEU KOU</td><td>KYOU KOU</td><td>Modern Japanese orthography: KEU → KYOU</td></tr>
<tr><td>U+57BC</td><td>垼</td><td>EKI YUKU</td><td>EKI YAKU</td><td>Irregular reading: YUKU → YAKU<br>Consistent with U+5F79 役 YAKU EKI</td></tr>
<tr><td>U+57C2</td><td>埂</td><td>KAU KYOU</td><td>KOU KYOU</td><td>Modern Japanese orthography: KAU → KOU</td></tr>
<tr><td>U+57DD</td><td>埝</td><td>TEN DEU NEU NEN</td><td>TEN DJOU NYOU NEN</td><td>Modern Japanese orthography: DEU → DJOU, NEU → NYOU</td></tr>
<tr><td>U+57E9</td><td>埩</td><td>SAU SHOU</td><td>SOU SHOU</td><td>Modern Japanese orthography: SAU → SOU</td></tr>
<tr><td>U+57F1</td><td>埱</td><td>SHYUU TOU TSU</td><td>SHUU TOU TSU</td><td>Invalid romanization: SHYUU → SHUU</td></tr>
<tr><td>U+57F2</td><td>埲</td><td>HOU BO HAU BAU</td><td>HOU BO BOU</td><td>Modern Japanese orthography: HAU → HOU, BAU → BOU<br>+ remove duplicates</td></tr>
<tr><td>U+581B</td><td>堛</td><td>HIYOKU HIKI</td><td>HYOKU HIKI</td><td>Modern Japanese orthography: HIYOKU → HYOKU</td></tr>
<tr><td>U+581E</td><td>堞</td><td>TEU DEU</td><td>CHOU DJOU</td><td>Modern Japanese orthography: TEU → CHOU, DEU → DJOU</td></tr>
<tr><td>U+5825</td><td>堥</td><td>BOU MU BAU MOU BU</td><td>BOU MU MOU BU</td><td>Modern Japanese orthography: BAU → BOU<br>+ remove duplicates</td></tr>
<tr><td>U+582D</td><td>堭</td><td>KAU WAU</td><td>KOU OU</td><td>Modern Japanese orthography: KAU → KOU, WAU → OU</td></tr>
<tr><td>U+585D</td><td>塝</td><td>HAU BAU</td><td>HOU BOU</td><td>Modern Japanese orthography: HAU → HOU, BAU → BOU</td></tr>
<tr><td>U+5864</td><td>塤</td><td>KEN TAWAN</td><td>KEN</td><td>TAWAN: not kJapaneseOn...</td></tr>
<tr><td>U+587D</td><td>塽</td><td>SAU SHOU</td><td>SOU SHOU</td><td>Modern Japanese orthography: SAU → SOU</td></tr>
<tr><td>U+5882</td><td>墂</td><td>HYOU HEU</td><td>HYOU</td><td>Modern Japanese orthography: HEU → HYOU<br>+ remove duplicates</td></tr>
<tr><td>U+588A</td><td>墊</td><td>TEN TEU DEU</td><td>TEN CHOU DJOU</td><td>Modern Japanese orthography: TEU → CHOU, DEU → DJOU</td></tr>
<tr><td>U+588E</td><td>墎</td><td>KUWAKU</td><td>KAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU</td></tr>
<tr><td>U+588F</td><td>墏</td><td>SHOU SAU</td><td>SHOU SOU</td><td>Modern Japanese orthography: SAU → SOU</td></tr>
<tr><td>U+58BD</td><td>墽</td><td>KAU KEU</td><td>KOU KYOU</td><td>Modern Japanese orthography: KAU → KOU, KEU → KYOU</td></tr>
<tr><td>U+58CE</td><td>壎</td><td>KEN KUWAN KUN</td><td>KEN KAN KUN</td><td>Modern Japanese orthography: KUWAN → KAN</td></tr>
<tr><td>U+58D4</td><td>壔</td><td>TAU</td><td>TOU</td><td>Modern Japanese orthography: TAU → TOU</td></tr>
<tr><td>U+5935</td><td>夵</td><td>EN TAU TOU</td><td>EN TOU</td><td>Modern Japanese orthography: TAU → TOU<br>+ remove duplicates</td></tr>
<tr><td>U+5961</td><td>奡</td><td>GAU GOU</td><td>GOU</td><td>Modern Japanese orthography: GAU → GOU<br>+ remove duplicates</td></tr>
<tr><td>U+59CE</td><td>姎</td><td>AU</td><td>OU</td><td>Modern Japanese orthography: AU → OU</td></tr>
<tr><td>U+59D8</td><td>姘</td><td>HIN HAU HEI</td><td>HIN HOU HEI</td><td>Modern Japanese orthography: HAU → HOU</td></tr>
<tr><td>U+59E3</td><td>姣</td><td>KOU KEU GEU</td><td>KOU KYOU GYOU</td><td>Modern Japanese orthography: KEU → KYOU, GEU → GYOU</td></tr>
<tr><td>U+5A42</td><td>婂</td><td></td><td>BEN MEN</td><td>BEN MEN: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+5A60</td><td>婠</td><td>WAN WATSU WACHI KAN KUWATSU GUWACHI</td><td>WAN WATSU WACHI KAN KATSU GACHI</td><td>Modern Japanese orthography: KUWATSU → KATSU, GUWACHI → GACHI</td></tr>
<tr><td>U+5A95</td><td>媕</td><td>EN AN ON AU OU</td><td>EN AN ON OU</td><td>Modern Japanese orthography: AU → OU<br>+ remove duplicates</td></tr>
<tr><td>U+5AB0</td><td>媰</td><td>SHIU SU SHU JU</td><td>SHUU SU SHU JU</td><td>Modern Japanese orthography: SHIU → SHUU</td></tr>
<tr><td>U+5AB1</td><td>媱</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+5AB9</td><td>媹</td><td>RIU RU</td><td>RYUU RU</td><td>Modern Japanese orthography: RIU → RYUU</td></tr>
<tr><td>U+5AC7</td><td>嫇</td><td>BEI MYAU BAU</td><td>BEI MYOU BOU</td><td>Modern Japanese orthography: MYAU → MYOU, BAU → BOU</td></tr>
<tr><td>U+5AC8</td><td>嫈</td><td>SEU AU GEI GYOU EI KEI</td><td>SHOU OU GEI GYOU EI KEI</td><td>Modern Japanese orthography: SEU → SHOU, AU → OU</td></tr>
<tr><td>U+5ACD</td><td>嫍</td><td>TAU TOU EU</td><td>TOU YOU</td><td>Modern Japanese orthography: TAU → TOU, EU → YOU<br>+ remove duplicates</td></tr>
<tr><td>U+5ADC</td><td>嫜</td><td>SHAU</td><td>SHOU</td><td>Modern Japanese orthography: SHAU → SHOU</td></tr>
<tr><td>U+5ADD</td><td>嫝</td><td>KAU</td><td>KOU</td><td>Modern Japanese orthography: KAU → KOU</td></tr>
<tr><td>U+5ADF</td><td>嫟</td><td>JIYUKU NIKI</td><td>JUKU NIKI</td><td>Modern Japanese orthography: JIYUKU → JUKU</td></tr>
<tr><td>U+5AEA</td><td>嫪</td><td>RAU ROU</td><td>ROU</td><td>Modern Japanese orthography: RAU → ROU<br>+ remove duplicates</td></tr>
<tr><td>U+5AF6</td><td>嫶</td><td>SEU ZEU</td><td>SHOU JOU</td><td>Modern Japanese orthography: SEU → SHOU, ZEU → JOU</td></tr>
<tr><td>U+5AF9</td><td>嫹</td><td>BAU MEU</td><td>BOU MYOU</td><td>Modern Japanese orthography: BAU → BOU, MEU → MYOU</td></tr>
<tr><td>U+5AFD</td><td>嫽</td><td>REU RAU</td><td>RYOU ROU</td><td>Modern Japanese orthography: REU → RYOU, RAU → ROU</td></tr>
<tr><td>U+5B05</td><td>嬅</td><td>KUWA GE</td><td>KA GE</td><td>Modern Japanese orthography: KUWA → KA</td></tr>
<tr><td>U+5B07</td><td>嬇</td><td>KUWAI E KE</td><td>KAI E KE</td><td>Modern Japanese orthography: KUWAI → KAI</td></tr>
<tr><td>U+5B08</td><td>嬈</td><td>DEU NEU ZEU DAU EU KEU</td><td>DJOU NYOU JOU DOU YOU KYOU</td><td>Modern Japanese orthography: DEU → DJOU, NEU → NYOU, ZEU → JOU, DAU → DOU, EU → YOU, KEU → KYOU</td></tr>
<tr><td>U+5B13</td><td>嬓</td><td>KEU</td><td>KYOU</td><td>Modern Japanese orthography: KEU → KYOU</td></tr>
<tr><td>U+5B23</td><td>嬣</td><td>TAU NYAU DEI</td><td>TOU NYOU DEI</td><td>Modern Japanese orthography: TAU → TOU, NYAU → NYOU</td></tr>
<tr><td>U+5B26</td><td>嬦</td><td>CHIU JIYU SHIU</td><td>CHUU JU SHUU</td><td>Modern Japanese orthography: CHIU → CHUU, JIYU → JU, SHIU → SHUU</td></tr>
<tr><td>U+5B2E</td><td>嬮</td><td>EN EHU</td><td>EN YOU</td><td>Modern Japanese orthography: EHU → YOU</td></tr>
<tr><td>U+5B3C</td><td>嬼</td><td>RIWA RU</td><td>RYUU RU</td><td>Irregular reading: RIWA → RIU → RYUU</td></tr>
<tr><td>U+5B47</td><td>孇</td><td>SAWA</td><td>SOU</td><td>Irregular reading: SAWA → SAU → SOU</td></tr>
<tr><td>U+5B48</td><td>孈</td><td>SUI I KUWAI E KI KEI</td><td>SUI I KAI E KI KEI</td><td>Modern Japanese orthography: KUWAI → KAI</td></tr>
<tr><td>U+5B8E</td><td>宎</td><td>EU YOU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU<br>+ remove duplicates</td></tr>
<tr><td>U+5BA8</td><td>宨</td><td>TEWA</td><td>CHOU</td><td>Irregular reading: TEWA → TEU → CHOU</td></tr>
<tr><td>U+5BCA</td><td>寊</td><td>TEI CHAWA</td><td>TEI CHOU</td><td>Irregular reading: CHAWA → CHAU → CHOU</td></tr>
<tr><td>U+5BE0</td><td>寠</td><td>KU RU ROWA</td><td>KU RU ROU</td><td>Irregular reading: ROWA → ROU</td></tr>
<tr><td>U+5C0C</td><td>尌</td><td>SHU JU CHU JIU</td><td>SHU JU CHU JUU</td><td>Modern Japanese orthography: JIU → JUU</td></tr>
<tr><td>U+5C1F</td><td>尟</td><td>SEN SEU</td><td>SEN SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+5C33</td><td>尳</td><td>KOTSU KUCHI KUWATSU GECHI</td><td>KOTSU KUCHI KATSU GECHI</td><td>Modern Japanese orthography: KUWATSU → KATSU</td></tr>
<tr><td>U+5C5F</td><td>屟</td><td>TEI TAI SEHU</td><td>TEI TAI SHOU</td><td>Modern Japanese orthography: SEHU → SHOU</td></tr>
<tr><td>U+5C67</td><td>屧</td><td>TEI TAI SEHU</td><td>TEI TAI SHOU</td><td>Modern Japanese orthography: SEHU → SHOU</td></tr>
<tr><td>U+5C69</td><td>屩</td><td>KYAKU KAKU KIKU KOKU KEU</td><td>KYAKU KAKU KIKU KOKU KYOU</td><td>Modern Japanese orthography: KEU → KYOU</td></tr>
<tr><td>U+5C70</td><td>屰</td><td>GEKI GYAKU HAKU HIYAKU</td><td>GEKI GYAKU HAKU HYAKU</td><td>Modern Japanese orthography: HIYAKU → HYAKU</td></tr>
<tr><td>U+5C86</td><td>岆</td><td>EU</td><td>YOU</td><td>Modern Japanese orthography: EU → YOU</td></tr>
<tr><td>U+5C8F</td><td>岏</td><td>GUWAN</td><td>GAN</td><td>Modern Japanese orthography: GUWAN → GAN</td></tr>
<tr><td>U+5CA7</td><td>岧</td><td>TEU DEU</td><td>CHOU DJOU</td><td>Modern Japanese orthography: TEU → CHOU, DEU → DJOU</td></tr>
<tr><td>U+5CB0</td><td>岰</td><td>YOU YU AU EU</td><td>YOU YU OU</td><td>Modern Japanese orthography: AU → OU, EU → YOU<br>+ remove duplicates</td></tr>
<tr><td>U+5CC6</td><td>峆</td><td>KAHU GOHU</td><td>KOU GOU</td><td>Modern Japanese orthography: KAHU → KOU, GOHU → GOU</td></tr>
<tr><td>U+5CD7</td><td>峗</td><td>GI GUWAI GE GUTSU GUCHI KI</td><td>GI GAI GE GUTSU GUCHI KI</td><td>Modern Japanese orthography: GUWAI → GAI</td></tr>
<tr><td>U+5CD8</td><td>峘</td><td>KAN GUWAN KOU GOU</td><td>KAN GAN KOU GOU</td><td>Modern Japanese orthography: GUWAN → GAN</td></tr>
<tr><td>U+5CDE</td><td>峞</td><td>KI GUWAI GE GOTSU GOCHI</td><td>KI GAI GE GOTSU GOCHI</td><td>Modern Japanese orthography: GUWAI → GAI</td></tr>
<tr><td>U+5CF8</td><td>峸</td><td>SEI JAU</td><td>SEI JOU</td><td>Modern Japanese orthography: JAU → JOU</td></tr>
<tr><td>U+5D1D</td><td>崝</td><td>SAU JAU</td><td>SOU JOU</td><td>Modern Japanese orthography: SAU → SOU, JAU → JOU</td></tr>
<tr><td>U+5D28</td><td>崨</td><td>SEHU ZEHU</td><td>SHOU JOU</td><td>Modern Japanese orthography: SEHU → SHOU, ZEHU → JOU</td></tr>
<tr><td>U+5D32</td><td>崲</td><td>KOU WAU</td><td>KOU OU</td><td>Modern Japanese orthography: WAU → OU</td></tr>
<tr><td>U+5D35</td><td>崵</td><td>SEU TAU</td><td>SHOU TOU</td><td>Modern Japanese orthography: SEU → SHOU, TAU → TOU</td></tr>
<tr><td>U+5D37</td><td>崷</td><td>SHIU JU</td><td>SHUU JU</td><td>Modern Japanese orthography: SHIU → SHUU</td></tr>
<tr><td>U+5D40</td><td>嵀</td><td>CHIU JIYU</td><td>CHUU JU</td><td>Modern Japanese orthography: CHIU → CHUU, JIYU → JU</td></tr>
<tr><td>U+5D49</td><td>嵉</td><td>TEI CHAU</td><td>TEI CHOU</td><td>Modern Japanese orthography: CHAU → CHOU</td></tr>
<tr><td>U+5D63</td><td>嵣</td><td>TAU DAU</td><td>TOU DOU</td><td>Modern Japanese orthography: TAU → TOU, DAU → DOU</td></tr>
<tr><td>U+5D67</td><td>嵧</td><td>RIU RU</td><td>RYUU RU</td><td>Modern Japanese orthography: RIU → RYUU</td></tr>
<tr><td>U+5D7A</td><td>嵺</td><td>REU KOU KEU</td><td>RYOU KOU KYOU</td><td>Modern Japanese orthography: REU → RYOU, KEU → KYOU</td></tr>
<tr><td>U+5D86</td><td>嶆</td><td>SAU ZOU</td><td>SOU ZOU</td><td>Modern Japanese orthography: SAU → SOU</td></tr>
<tr><td>U+5D88</td><td>嶈</td><td>SHAU SOU</td><td>SHOU SOU</td><td>Modern Japanese orthography: SHAU → SHOU</td></tr>
<tr><td>U+5D8D</td><td>嶍</td><td>SHIHU</td><td>SHUU</td><td>Modern Japanese orthography: SHIHU → SHUU</td></tr>
<tr><td>U+5D95</td><td>嶕</td><td>SEU ZEU SHOU JOU</td><td>SHOU JOU</td><td>Modern Japanese orthography: SEU → SHOU, ZEU → JOU<br>+ remove duplicates</td></tr>
<tr><td>U+5DA9</td><td>嶩</td><td>DAU</td><td>DOU</td><td>Modern Japanese orthography: DAU → DOU</td></tr>
<tr><td>U+5DAF</td><td>嶯</td><td>SHIU SAU</td><td>SHUU SOU</td><td>Modern Japanese orthography: SHIU → SHUU, SAU → SOU</td></tr>
<tr><td>U+5DB4</td><td>嶴</td><td>AU OU IKU</td><td>OU IKU</td><td>Modern Japanese orthography: AU → OU<br>+ remove duplicates</td></tr>
<tr><td>U+5DC6</td><td>巆</td><td>KOU KEI GYAU</td><td>KOU KEI GYOU</td><td>Modern Japanese orthography: GYAU → GYOU</td></tr>
<tr><td>U+5DE4</td><td>巤</td><td>REHU</td><td>RYOU</td><td>Modern Japanese orthography: REHU → RYOU</td></tr>
<tr><td>U+5E04</td><td>帄</td><td>TEI CHAU</td><td>TEI CHOU</td><td>Modern Japanese orthography: CHAU → CHOU</td></tr>
<tr><td>U+5E21</td><td>帡</td><td>HEI HIYOU BYOU</td><td>HEI HYOU BYOU</td><td>Modern Japanese orthography: HIYOU → HYOU</td></tr>
<tr><td>U+5E22</td><td>帢</td><td>KAHU</td><td>KOU</td><td>Modern Japanese orthography: KAHU → KOU</td></tr>
<tr><td>U+5E24</td><td>帤</td><td>GEYO NIYO</td><td>GYO NYO</td><td>Irregular reading: GEYO → GIYO<br>Modern Japanese orthography: GIYO → GYO, NIYO → NYO</td></tr>
<tr><td>U+5E29</td><td>帩</td><td>SEU</td><td>SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+5E32</td><td>帲</td><td>HEI HIYOU BYOU</td><td>HEI HYOU BYOU</td><td>Modern Japanese orthography: HIYOU → HYOU</td></tr>
<tr><td>U+5E53</td><td>幓</td><td>SHIN SEN SAN SEU</td><td>SHIN SEN SAN SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+5E67</td><td>幧</td><td>SEU SAU SOU</td><td>SHOU SOU</td><td>Modern Japanese orthography: SEU → SHOU, SAU → SOU<br>+ remove duplicates</td></tr>
<tr><td>U+5E6E</td><td>幮</td><td>CHU JIU</td><td>CHU JUU</td><td>Modern Japanese orthography: JIU → JUU</td></tr>
<tr><td>U+5EA3</td><td>庣</td><td>TEU DEU</td><td>CHOU DJOU</td><td>Modern Japanese orthography: TEU → CHOU, DEU → DJOU</td></tr>
<tr><td>U+5EA8</td><td>庨</td><td>KOU KEU</td><td>KOU KYOU</td><td>Modern Japanese orthography: KEU → KYOU</td></tr>
<tr><td>U+5EAC</td><td>庬</td><td>BOU MO BAU MAU</td><td>BOU MO MOU</td><td>Modern Japanese orthography: BAU → BOU, MAU → MOU<br>+ remove duplicates</td></tr>
<tr><td>U+5EAE</td><td>庮</td><td>IU YU</td><td>YUU YU</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+5EC5</td><td>廅</td><td>AHU KAHU GAHU</td><td>OU KOU GOU</td><td>Modern Japanese orthography: AHU → OU, KAHU → KOU, GAHU → GOU</td></tr>
<tr><td>U+5EC7</td><td>廇</td><td>RIU RU</td><td>RYUU RU</td><td>Modern Japanese orthography: RIU → RYUU</td></tr>
<tr><td>U+5EE6</td><td>廦</td><td>HEKI HIYAKU</td><td>HEKI HYAKU</td><td>Modern Japanese orthography: HIYAKU → HYAKU</td></tr>
<tr><td>U+5EE7</td><td>廧</td><td>SHAU ZAU</td><td>SHOU ZOU</td><td>Modern Japanese orthography: SHAU → SHOU, ZAU → ZOU</td></tr>
<tr><td>U+5EEE</td><td>廮</td><td>EI YAU</td><td>EI YOU</td><td>Modern Japanese orthography: YAU → YOU</td></tr>
<tr><td>U+5F24</td><td>弤</td><td>TEI TAI TEU</td><td>TEI TAI CHOU</td><td>Modern Japanese orthography: TEU → CHOU</td></tr>
<tr><td>U+5F28</td><td>弨</td><td>SEU</td><td>SHOU</td><td>Modern Japanese orthography: SEU → SHOU</td></tr>
<tr><td>U+5F36</td><td>弶</td><td>GYAU GAU</td><td>GYOU GOU</td><td>Modern Japanese orthography: GYAU → GYOU, GAU → GOU</td></tr>
<tr><td>U+5F49</td><td>彉</td><td>KUWAKU</td><td>KAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU</td></tr>
<tr><td>U+5F4B</td><td>彋</td><td>KAU GYAU KO KU</td><td>KOU GYOU KO KU</td><td>Modern Japanese orthography: KAU → KOU, GYAU → GYOU</td></tr>
<tr><td>U+5F4D</td><td>彍</td><td>KUWAKU</td><td>KAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU</td></tr>
<tr><td>U+5F4F</td><td>彏</td><td>KUWAKU</td><td>KAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU</td></tr>
<tr><td>U+5F60</td><td>彠</td><td>KUWAKU WAKU KAKU KYAKU YAKU</td><td>KAKU WAKU KYAKU YAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU<br>+ remove duplicates</td></tr>
<tr><td>U+5F6F</td><td>彯</td><td>HEU BEU</td><td>HYOU BYOU</td><td>Modern Japanese orthography: HEU → HYOU, BEU → BYOU</td></tr>
<tr><td>U+5F76</td><td>彶</td><td>KIHU KOHU</td><td>KYUU KOU</td><td>Modern Japanese orthography: KIHU → KYUU, KOHU → KOU</td></tr>
<tr><td>U+6130</td><td>愰</td><td>KAU OU</td><td>KOU OU</td><td>Modern Japanese orthography: KAU → KOU</td></tr>
<tr><td>U+61E4</td><td>懤</td><td>CHYUU JIU TAU TOU</td><td>CHUU JUU TOU</td><td>Invalid romanization: CHYUU → CHUU<br>Modern Japanese orthography: JIU → JUU, TAU → TOU<br>+ remove duplicates</td></tr>
<tr><td>U+61EC</td><td>懬</td><td>KOU KAU</td><td>KOU</td><td>Modern Japanese orthography: KAU → KOU<br>+ remove duplicates</td></tr>
<tr><td>U+639A</td><td>掚</td><td>RYOU KAZARU</td><td>RYOU</td><td>KAZARU: kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+6463</td><td>摣</td><td>SA SHIA GA NA SAI SE</td><td>SA SHA GA NA SAI SE</td><td>Irregular reading: SHIA → SHA</td></tr>
<tr><td>U+650A</td><td>攊</td><td>FUKI RYAKU</td><td>REKI RYAKU</td><td>Irregular reading: FUKI → REKI<br>Consistent with:<br>• U+58E2 壢 REKI RYAKU<br>• U+85F6 藶 REKI RYAKU<br>• ...</td></tr>
<tr><td>U+665C</td><td>晜</td><td>KON ANI</td><td>KON</td><td>ANI: kJapaneseKun, not kJapaneseOn<br><a href="https://tangorin.com/kanji?search=%E6%99%9C">晜 - Kanji - Japanese Dictionary Tangorin</a>:<br>コン・あに</td></tr>
<tr><td>U+6FF9</td><td>濹</td><td></td><td>BOKU</td><td>BOKU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+7119</td><td>焙</td><td>HOU HAI HOI</td><td>HOU HAI</td><td>Remove irregular reading: HOI</td></tr>
<tr><td>U+715C</td><td>煜</td><td>IKU IU OU</td><td>IKU YUU OU</td><td>Modern Japanese orthography: IU → YUU</td></tr>
<tr><td>U+71F8</td><td>燸</td><td>JIYU NYU DAN</td><td>JU NYU DAN</td><td>Modern Japanese orthography: JIYU → JU</td></tr>
<tr><td>U+7243</td><td>牃</td><td>OUCHOU YOU SHOU JI</td><td>OU CHOU YOU SHOU JI</td><td>Split readings: OUCHOU → OU CHOU<br>Consistent with:<br>• U+696A 楪 CHOU</td></tr>
<tr><td>U+7593</td><td>疓</td><td>ZAI NAI DAI NE KIU</td><td>ZAI NAI DAI NE KYUU</td><td>Modern Japanese orthography: KIU → KYUU</td></tr>
<tr><td>U+75D4</td><td>痔</td><td>JI</td><td>DJI JI</td><td><a href="https://tangorin.com/kanji?search=%E7%97%94">痔 - Kanji - Japanese Dictionary Tangorin</a>:<br>ヂ・ジ</td></tr>
<tr><td>U+7685</td><td>皅</td><td>HAE HABI HA HE BE</td><td>HA HE BE</td><td>Remove irregular readings: HAE HABI</td></tr>
<tr><td>U+77C3</td><td>矃</td><td>GEI NYOU</td><td>GEI NEI NYOU</td><td>NEI NYOU: kJapaneseOn, not kJapaneseKun<br>Consistent with U+5BE7 寧 NEI NYOU</td></tr>
<tr><td>U+7D48</td><td>絈</td><td>BAKU BATSU MECHI HA HE HAKU MYUKU</td><td>BAKU BATSU MECHI HA HE HAKU MYAKU</td><td>Irregular reading: MYUKU → MYAKU<br>Consistent with U+5E15 帕 BATSU MECHI HA HE HAKU MYAKU</td></tr>
<tr><td>U+7DB6</td><td>綶</td><td>KUWA</td><td>KA</td><td>Modern Japanese orthography: KUWA → KA</td></tr>
<tr><td>U+81D1</td><td>臑</td><td>DAU JU JI</td><td>DOU JU JI</td><td>Modern Japanese orthography: DAU → DOU</td></tr>
<tr><td>U+82B2</td><td>芲</td><td>KUWA KA</td><td>KA</td><td>Modern Japanese orthography: KUWA → KA<br>+ remove duplicates</td></tr>
<tr><td>U+833D</td><td>茽</td><td>CHUU JIYU</td><td>CHUU JU</td><td>Modern Japanese orthography: JIYU → JU</td></tr>
<tr><td>U+8353</td><td>荓</td><td>HEI</td><td>HEI BYOU</td><td>BYOU: kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+842A</td><td>萪</td><td>KUWA</td><td>KA</td><td>Modern Japanese orthography: KUWA → KA</td></tr>
<tr><td>U+8481</td><td>蒁</td><td>SHUTSU JIUCHI ITSU ICHI RITSU RICHI</td><td>SHUTSU JUCHI ITSU ICHI RITSU RICHI</td><td>Irregular reading: JIUCHI → JUCHI</td></tr>
<tr><td>U+84A6</td><td>蒦</td><td>WAKU KUWAKU KYAKU KAKUYAKU</td><td>WAKU KYAKU KAKU YAKU</td><td>Modern Japanese orthography: KUWAKU → KAKU<br>Split readings: KAKUYAKU → KAKU YAKU<br>+ remove duplicates</td></tr>
<tr><td>U+8507</td><td>蔇</td><td>KIKE</td><td>KI KE</td><td>Split readings: KIKE → KI KE</td></tr>
<tr><td>U+8550</td><td>蕐</td><td>KUWA KA KE</td><td>KA KE</td><td>Modern Japanese orthography: KUWA → KA<br>+ remove duplicates</td></tr>
<tr><td>U+8581</td><td>薁</td><td>IKU AU OU</td><td>IKU OU</td><td>Modern Japanese orthography: AU → OU<br>+ remove duplicates</td></tr>
<tr><td>U+8765</td><td>蝥</td><td>BOU MU MEU BU</td><td>BOU MU MYOU BU</td><td>Modern Japanese orthography: MEU → MYOU</td></tr>
<tr><td>U+88DB</td><td>裛</td><td>YOUU OU YOU</td><td>YUU OU YOU</td><td>Typo: YOUU → YUU<br><a href="https://tangorin.com/kanji?search=%E8%A3%9B">裛 - Kanji - Japanese Dictionary Tangorin</a>:<br>オウ・ヨウ・ユウ</td></tr>
<tr><td>U+88EA</td><td>裪</td><td>TAU DOU</td><td>TOU DOU</td><td>Modern Japanese orthography: TAU → TOU</td></tr>
<tr><td>U+8931</td><td>褱</td><td>KAIE</td><td>KAI E</td><td>Split readings: KAIE → KAI E<br><a href="https://en.wiktionary.org/wiki/%E8%A4%B1">褱 - Wiktionary</a>:<br>On (unclassified): かい (kai); え (e)</td></tr>
<tr><td>U+8A47</td><td>詇</td><td>YOU OUU EI</td><td>YOU OU EI</td><td>Typo: OUU → OU<br><a href="https://en.wiktionary.org/wiki/%E8%A9%87">詇 - Wiktionary</a>:<br>On (unclassified): よう (yō), おう (ō), えい (ei)</td></tr>
<tr><td>U+8B76</td><td>譶</td><td>TOU DOU CHYUU JU</td><td>TOU DOU CHUU JU</td><td>Invalid romanization: CHYUU → CHUU</td></tr>
<tr><td>U+8CC6</td><td>賆</td><td>HEN BEN HEI HIYOU</td><td>HEN BEN HEI HYOU</td><td>Modern Japanese orthography: HIYOU → HYOU</td></tr>
<tr><td>U+8DC0</td><td>跀</td><td>GETSU GUWACHI GOTSU GOCHI</td><td>GETSU GACHI GOTSU GOCHI</td><td>Modern Japanese orthography: GUWACHI → GACHI</td></tr>
<tr><td>U+8F51</td><td>轑</td><td>RAU ROU RYOU</td><td>ROU RYOU</td><td>Modern Japanese orthography: RAU → ROU<br>+ remove duplicates</td></tr>
<tr><td>U+9194</td><td>醔</td><td>SHYUU JU</td><td>SHUU JU</td><td>Invalid romanization: SHYUU → SHUU</td></tr>
<tr><td>U+9228</td><td>鈨</td><td>HABAKI</td><td></td><td>HABAKI: kJapaneseKun, not kJapaneseOn<br>Consistent with U+93BA 鎺</td></tr>
<tr><td>U+938A</td><td>鎊</td><td>HAU HOU</td><td>HOU</td><td>Modern Japanese orthography: HAU → HOU<br>+ remove duplicates</td></tr>
<tr><td>U+93C5</td><td>鏅</td><td>SHYUU SHU</td><td>SHUU SHU</td><td>Invalid romanization: SHYUU → SHUU</td></tr>
<tr><td>U+93C9</td><td>鏉</td><td>SHYUU SHU SOU SOKU</td><td>SHUU SHU SOU SOKU</td><td>Invalid romanization: SHYUU → SHUU</td></tr>
<tr><td>U+942F</td><td>鐯</td><td>SHAKU CHAKU JIIYAKU</td><td>SHAKU CHAKU JAKU</td><td>Typo: JIIYAKU → JIYAKU → JAKU</td></tr>
<tr><td>U+9434</td><td>鐴</td><td>HEKI HIYAKU HEI BEI</td><td>HEKI HYAKU HEI BEI</td><td>Modern Japanese orthography: HIYAKU → HYAKU</td></tr>
<tr><td>U+99F2</td><td>駲</td><td></td><td>SHUU</td><td>SHUU: kJapaneseOn, not kJapaneseKun<br><a href="https://tangorin.com/kanji?search=%E9%A7%B2">駲 - Kanji - Japanese Dictionary Tangorin</a>:<br>シュウ・ジュン</td></tr>
<tr><td>U+9ACE</td><td>髎</td><td>RYOU ROO</td><td>RYOU ROU</td><td>Irregular reading: ROO → ROU</td></tr>
<tr><td>U+9B2B</td><td>鬫</td><td>KAN KEN HOERU</td><td>KAN KEN</td><td>HOERU: kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+9B78</td><td>魸</td><td>NAMAZU</td><td></td><td>NAMAZU: kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+9BB1</td><td>鮱</td><td>BORA</td><td></td><td>BORA: kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+9BBE</td><td>鮾</td><td>DAI NAI KUSARU</td><td>DAI NAI</td><td>KUSARU: kJapaneseKun, not kJapaneseOn</td></tr>
</table>
