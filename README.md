# Unihan kJapaneseKun & kJapaneseOn Error Report \[Draft\]

- **Subject: Unihan kJapaneseKun & kJapaneseOn Error Report**
- **Date: 2019-09-16**
- **Author: Michel MARIANI**

This error report intends to correct issues found in the `kJapaneseKun` and `kJapaneseOn` fields of the `Unihan_Readings.txt` data file.

## Aims and Objectives

- Fix typos, omissions and duplicates.
- Use current spellings for names of chemical elements.
- Detect and correct misclassified readings, i.e., when a `kJapaneseKun` reading should be `kJapaneseOn` instead, or vice versa.
- Adopt a unique, consistent romanization style based on Hepburn (ヘボン式), not Kunrei (訓令式): `ふ` -> always `FU`, not `HU`.
- Apply proper romanization to pronunciations using modern (instead of ancient/historical) Japanese orthography:
    - replace は with わ, ひ with い, ふ with う, へ with え, ほ with お, etc. where appropriate,
    - replace お with を when it is a particle,
    - make explicit use of small っ and small ゃ, ゅ, ょ when necessary.
    - add voiced ゛ or semi-voiced ゜ sound mark, if need be.
- Allow for lossless, round-trip conversion between rōmaji and kana, by extending the Hepburn system for the two syllables `ぢ` -> `DJI` and `づ` -> `DZU`. This style of transliteration is actually used on the [ICU Transform Demonstration](http://demo.icu-project.org/icu-bin/translit) page.

## Proposed Modifications

    # Unihan_Readings.txt
    # Date: 2018-11-09 21:36:19 GMT [JHJ]
    # Unicode version: 12.0.0

### • kJapaneseKun

<table>
<tr><th>Code</th><th>Char</th><th>Issue</th><th>Correction</th><th>Rationale&nbsp;/&nbsp;References</th><tr>
<tr><td>U+4E09</td><td>三</td><td>MITSU MITABI</td><td>MI MITSU MITTSU MITABI</td><td><a href="https://en.wiktionary.org/wiki/%E4%B8%89">三 - Wiktionary</a>:<br>Kun: み (mi, 三, Jōyō); みつ (mitsu, 三つ, Jōyō); みっつ (mittsu, 三つ, Jōyō)</td></tr>
<tr><td>U+4E2B</td><td>丫</td><td>HUTAMATA AGEMAKI</td><td>FUTAMATA AGEMAKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+4F74</td><td>佴</td><td>TASUKE SOHI NARABU ORU TSUGU</td><td>TASUKE SOI NARABU ORU TSUGU</td><td>そひ -> そい (modern Japanese orthography)</td></tr>
<tr><td>U+4F7D</td><td>佽</td><td>SUBOSHIKOI NARABU TASUKERU OYOBI KAHARUGAHARU</td><td>SUBASHIKOI NARABU TASUKERU OYOBI KAWARUGAWARU</td><td>Typo: SUBOSHIKOI -> SUBASHIKOI<br>かはるがはる -> かわるがわる (modern Japanese orthography)</td></tr>
<tr><td>U+4F81</td><td>侁</td><td>YUKUSAMA TSUKAHI</td><td>YUKUSAMA TSUKAI</td><td>つかひ -> つかい (modern Japanese orthography)</td></tr>
<tr><td>U+4F97</td><td>侗</td><td>OROKA ITAMU KATACHI NAHOI MAKOTO TSUTSUSHIMU</td><td>OROKA ITAMU KATACHI NAOI MAKOTO TSUTSUSHIMU</td><td><a href="https://tangorin.com/kanji?search=%E4%BE%97">侗 - Kanji - Japanese Dictionary Tangorin</a>:<br>おろか・いたむ・かたち・なおい・まこと・つつしむ</td></tr>
<tr><td>U+4F9A</td><td>侚</td><td>SUMIYAKA SHIMESU TONAERU HUKAI TSUKAHU</td><td>SUMIYAKA SHIMESU TONAERU FUKAI TSUKAU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>つかふ -> つかう (modern Japanese orthography)</td></tr>
<tr><td>U+4F9E</td><td>侞</td><td>HITOSHII SHITAGAHENARASU</td><td>HITOSHII SHITAGAENARASU</td><td>したがへならす -> したがえならす (modern Japanese orthography)</td></tr>
<tr><td>U+4FBB</td><td>侻</td><td>KANAHU YOI TEGARU TAYASUI KARUI</td><td>KANAU YOI TEGARU TAYASUI KARUI</td><td>かなふ -> かなう (modern Japanese orthography)</td></tr>
<tr><td>U+4FD2</td><td>俒</td><td>MATSUTASHI KEGASU</td><td>MATTASHI KEGASU</td><td><a href="https://tangorin.com/kanji?search=%E4%BF%92">俒 - Kanji - Japanese Dictionary Tangorin</a>:<br>まったし・けがす</td></tr>
<tr><td>U+4FD3</td><td>俓</td><td>ISOGU WAGI NAHOI KATAI</td><td>ISOGU WAGI NAOI KATAI</td><td>なほい -> なおい (modern Japanese orthography)</td></tr>
<tr><td>U+4FD9</td><td>俙</td><td>UTSUTAERU KOBIHETSURAU HONOKA</td><td>UTTAERU KOBIHETSURAU HONOKA</td><td>うつたえる -> うったえる (modern Japanese orthography)</td></tr>
<tr><td>U+501E</td><td>倞</td><td>TSUYOI AKIRAKA TOOI MOTOMERU KISOHU</td><td>TSUYOI AKIRAKA TOOI MOTOMERU KISOU</td><td>きそふ -> きそう (modern Japanese orthography)</td></tr>
<tr><td>U+5039</td><td>倹</td><td>TSUZUMAYAKA</td><td>TSUDZUMAYAKA</td><td><a href="https://tangorin.com/kanji?search=%E5%80%B9">倹 - Kanji - Japanese Dictionary Tangorin</a>:<br>つましい・つづまやか</td></tr>
<tr><td>U+5052</td><td>偒</td><td>MATSUSUGU</td><td>MASSUGU</td><td><a href="https://tangorin.com/kanji?search=%E5%81%92">偒 - Kanji - Japanese Dictionary Tangorin</a>:<br>まっすぐ</td></tr>
<tr><td>U+5053</td><td>偓</td><td>KAKAHARUSAMA</td><td>KAKAWARUSAMA</td><td>かかはるさま -> かかわるさま (modern Japanese orthography)</td></tr>
<tr><td>U+5057</td><td>偗</td><td>MATSUSUGUNASAMA</td><td>MASSUGUNASAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%81%97">偗 - Kanji - Japanese Dictionary Tangorin</a>:<br>まっすぐ</td></tr>
<tr><td>U+505E</td><td>偞</td><td>KARUI MIMEYOISAMA IYASHII OSU OSAHETSUKERU UTSUKUSHII</td><td>KARUI MIMEYOISAMA IYASHII OSU OSAETSUKERU UTSUKUSHII</td><td>おさへつける -> おさえつける (modern Japanese orthography)</td></tr>
<tr><td>U+505F</td><td>偟</td><td>TATAZUMU SAMAYOHU TACHIMOTOHORU ITOMA</td><td>TATAZUMU SAMAYOU TACHIMOTOHORU ITOMA</td><td>さまよふ -> さまよう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5061</td><td>偡</td><td>SOROTSUTESUSUMU TOTONOTSUTASAMA</td><td>SOROTTESUSUMU TOTONOTTASAMA</td><td><a href="https://en.wiktionary.org/wiki/%E5%81%A1">偡 - Wiktionary</a>:<br>Kun: そろってすすむ (sorottesusumu), ととのったさま (totonottasama)</td></tr>
<tr><td>U+5062</td><td>偢</td><td>ITSUKUSHIMANAI UREHERUSAMA</td><td>ITSUKUSHIMANAI UREERUSAMA</td><td>うれへるさま -> うれえるさま (modern Japanese orthography)</td></tr>
<tr><td>U+5073</td><td>偳</td><td>CHIHISAI SUKOSHI</td><td>CHIISAI SUKOSHI</td><td>ちひさい -> ちいさい (modern Japanese orthography)</td></tr>
<tr><td>U+5082</td><td>傂</td><td>KATATAGAHI HITOSHIKUNAI</td><td>KATATAGAI HITOSHIKUNAI</td><td>かたたがひ -> かたたがい (modern Japanese orthography)</td></tr>
<tr><td>U+508B</td><td>傋</td><td>HETSURAHANU OROKA</td><td>HETSURAWANU OROKA</td><td>へつらはぬ -> へつらわぬ (modern Japanese orthography)</td></tr>
<tr><td>U+508E</td><td>傎</td><td>SAKASAMA KURUHU</td><td>SAKASAMA KURUU</td><td>くるふ -> くるう (modern Japanese orthography)</td></tr>
<tr><td>U+5092</td><td>傒</td><td>AYAHUI TSUNAGU</td><td>AYAUI TSUNAGU</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+509C</td><td>傜</td><td>HUZOROI EDACHI TSUKAI</td><td>FUZOROI EDACHI TSUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+50C6</td><td>僆</td><td>HUTAGO OYOBU OHITSUKU</td><td>FUTAGO OYOBU OITSUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>おひつく -> おいつく (modern Japanese orthography)</td></tr>
<tr><td>U+50D3</td><td>僓</td><td>NARAU MIYABIYAKA SHITAGAHU</td><td>NARAU MIYABIYAKA SHITAGAU</td><td>したがふ -> したがう (modern Japanese orthography)</td></tr>
<tr><td>U+5107</td><td>儇</td><td>KASHIKOI AGIMUKU TOI MATOHU</td><td>KASHIKOI AGIMUKU TOI MATOU</td><td>まとふ -> まとう (modern Japanese orthography)</td></tr>
<tr><td>U+5109</td><td>儉</td><td>TSUZUMAYAKA</td><td>TSUDZUMAYAKA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%89">儉 - Kanji - Japanese Dictionary Tangorin</a>:<br>つましい・つづまやか</td></tr>
<tr><td>U+5131</td><td>儱</td><td>DESAAGARANAI UYAMUYA</td><td>DEKIAGARANAI UYAMUYA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%B1">儱 - Kanji - Japanese Dictionary Tangorin</a>:<br>できあがらない・うやむや</td></tr>
<tr><td>U+5133</td><td>儳</td><td>TOTONOHANU HAYAI WARUISAMA</td><td>TOTONOWANU HAYAI WARUISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%84%B3">儳 - Kanji - Japanese Dictionary Tangorin</a>:<br>ととのわぬ・はやい・わるい</td></tr>
<tr><td>U+5198</td><td>冘</td><td>OKOTARU TAMERAHU UTAGAHU</td><td>OKOTARU TAMERAU UTAGAU</td><td>ためらふ -> ためらう<br>うたがふ -> うたがう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5202</td><td>刂</td><td>RITSUTOU</td><td>RITTOU</td><td>【立刀】りっとう</td></tr>
<tr><td>U+5216</td><td>刖</td><td>KIRU AYAHUI</td><td>KIRU AYAUI</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+5226</td><td>刦</td><td>OIYAKASU</td><td>OBIYAKASU</td><td>Consistent with:<br>• U+52AB 劫 OBIYAKASU</td></tr>
<tr><td>U+5227</td><td>刧</td><td>OBYAKASU</td><td>OBIYAKASU</td><td>Consistent with:<br>• U+52AB 劫 OBIYAKASU</td></tr>
<tr><td>U+527D</td><td>剽</td><td>OBYAKASU</td><td>OBIYAKASU</td><td><a href="https://tangorin.com/kanji?search=%E5%89%BD">剽 - Kanji - Japanese Dictionary Tangorin</a>:<br>おびやかす・さす</td></tr>
<tr><td>U+528C</td><td>劌</td><td>SOKONAU SAKU HARI TOGE AHU</td><td>SOKONAU SAKU HARI TOGE AU</td><td>あふ -> あう (modern Japanese orthography)</td></tr>
<tr><td>U+52BD</td><td>劽</td><td>GAARU</td><td>GARU</td><td><a href="https://tangorin.com/kanji?search=%E5%8A%BD">劽 - Kanji - Japanese Dictionary Tangorin</a>:<br>かる</td></tr>
<tr><td>U+533D</td><td>匽</td><td>KAKUSU HUSU NABIKU HAKO DOBU</td><td>KAKUSU FUSU NABIKU HAKO DOBU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5393</td><td>厓</td><td>GAKE KISHI KATAHE HATE</td><td>GAKE KISHI KATAE HATE</td><td>かたへ -> かたえ (modern Japanese orthography)</td></tr>
<tr><td>U+53D5</td><td>叕</td><td>TSUZURU SUMIYAKA</td><td>TSUDZURU SUMIYAKA</td><td><a href="https://tangorin.com/kanji?search=%E5%8F%95">叕 - Kanji - Japanese Dictionary Tangorin</a>:<br>とじる・つづる・すみやか</td></tr>
<tr><td>U+540D</td><td>名</td><td>NA NANORU NAZUKERU</td><td>NA NANORU NADZUKERU</td><td><a href="https://en.wiktionary.org/wiki/%E5%90%8D">名 - Wiktionary</a>:<br>Kun: な (na, 名, Jōyō); なのる (nanoru, 名); なづける (nazukeru, 名ける)</td></tr>
<tr><td>U+5481</td><td>咁</td><td>HUKUMU</td><td>FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5485</td><td>咅</td><td>TSUBAOHAITEINAMU</td><td>TSUBAWOHAITEINAMU</td><td><a href="https://tangorin.com/kanji?search=%E5%92%85">咅 - Kanji - Japanese Dictionary Tangorin</a>:<br>つばをはいていなむ</td></tr>
<tr><td>U+548D</td><td>咍</td><td>WARAHU YOROKOBU</td><td>WARAU YOROKOBU</td><td>わらふ -> わらう (modern Japanese orthography)</td></tr>
<tr><td>U+5500</td><td>唀</td><td>SASOOU</td><td>SASOU</td><td>Consistent with:<br>• U+8A98 誘 SASOU</td></tr>
<tr><td>U+5505</td><td>唅</td><td>HUKUMU HUKUMASEMONO</td><td>FUKUMU FUKUMASEMONO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5509</td><td>唉</td><td>AA AAOO IYAIYAKOTAERU</td><td>AA AO IYAIYAKOTAERU</td><td><a href="https://tangorin.com/kanji?search=%E5%94%89">唉 - Kanji - Japanese Dictionary Tangorin</a>:<br>ああ・あお・いやいやこたえる</td></tr>
<tr><td>U+552B</td><td>唫</td><td>DOMORU OTOJIRU UUTAU</td><td>DOMORU KUCHIWOTOJIRU UTAUTAU</td><td><a href="https://tangorin.com/kanji?search=%E5%94%AB">唫 - Kanji - Japanese Dictionary Tangorin</a>:<br>どもる・くちをとじる・うたうたう</td></tr>
<tr><td>U+5530</td><td>唰</td><td>HANETSUKUROHU</td><td>HANETSUKUROU</td><td>はねつくろふ -> はねつくろう (modern Japanese orthography)</td></tr>
<tr><td>U+5535</td><td>唵</td><td>HUKUMU</td><td>FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+553C</td><td>唼</td><td>KURAHU SUSURU TSUIBAMU HUMU</td><td>KURAU SUSURU TSUIBAMU FUMU</td><td>くらふ -> くらう (modern Japanese orthography)<br>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+554E</td><td>啎</td><td>SAKARAU AU HURERU</td><td>SAKARAU AU FURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+55A2</td><td>喢</td><td>OSHIYABERI</td><td>OSHABERI</td><td>Consistent with:<br>• U+5555 啕 OSHABERI<br>• U+55A6 喦 OSHABERI</td></tr>
<tr><td>U+55CD</td><td>嗍</td><td>SUHU</td><td>SUU</td><td>すふ -> すう (modern Japanese orthography)</td></tr>
<tr><td>U+55D1</td><td>嗑</td><td>OSHIYABERI AHU NOMU KATARU</td><td>OSHABERI AU NOMU KATARU</td><td>Consistent with:<br>• U+5555 啕 OSHABERI<br>• U+55A6 喦 OSHABERI<br>あふ -> あう (modern Japanese orthography)</td></tr>
<tr><td>U+55DB</td><td>嗛</td><td>HUKUMU URAMU HERIKUDARU</td><td>FUKUMU URAMU HERIKUDARU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+55DE</td><td>嗞</td><td>NAGEKU WARAHU</td><td>NAGEKU WARAU</td><td>わらふ -> わらう (modern Japanese orthography)</td></tr>
<tr><td>U+560D</td><td>嘍</td><td>URUSAISAAMA MIDARERU</td><td>URUSAISAMA MIDARERU</td><td><a href="https://tangorin.com/kanji?search=%E5%98%8D">嘍 - Kanji - Japanese Dictionary Tangorin</a>:<br>うるさい・みだれる</td></tr>
<tr><td>U+563B</td><td>嘻</td><td>IMASHIME YAHARAGU AA WARAHU</td><td>IMASHIME YAWARAGU AA WARAU</td><td>やはらぐ -> やわらぐ<br>わらふ -> わらう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+563E</td><td>嘾</td><td>HUKUMU MUSABORU</td><td>FUKUMU MUSABORU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5646</td><td>噆</td><td>HUKUMU KAMU</td><td>FUKUMU KAMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+564A</td><td>噊</td><td>AYAHUI</td><td>AYAUI</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+5659</td><td>噙</td><td>HUKUMU</td><td>FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+56E6</td><td>囦</td><td>HUCHI</td><td>FUCHI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+56EB</td><td>囫</td><td>MATSUTASHI HATSUKIRISHINAI</td><td>MATTASHI HAKKIRISHINAI</td><td><a href="https://tangorin.com/kanji?search=%E5%9B%AB">囫 - Kanji - Japanese Dictionary Tangorin</a>:<br>まったし・はっきりしない</td></tr>
<tr><td>U+5705</td><td>圅</td><td>AGO HUKUMU</td><td>AGO FUKUMU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5715</td><td>圕</td><td></td><td>TOSHOKAN</td><td>kJapaneseKun, not kJapaneseOn<br><a href="https://en.wiktionary.org/wiki/%E5%9C%95">圕 - Wiktionary</a>:<br>Kun: としょかん (toshokan, 圕)</td></tr>
<tr><td>U+5717</td><td>圗</td><td>HAKARU EGAAKU E</td><td>HAKARU EGAKU E</td><td>Typo: EGAAKU -> EGAKU</td></tr>
<tr><td>U+5749</td><td>坉</td><td>HUSAGU KIZUKU UNE HUSAGARU</td><td>FUSAGU KIZUKU UNE FUSAGARU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+574B</td><td>坋</td><td>CHIRI HURIKAKERU KAKIMAZERUTSUTSUMI</td><td>CHIRI FURIKAKERU KAKIMAZERUTSUTSUMI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5752</td><td>坒</td><td>KIJIHASHI</td><td>KIZAHASHI</td><td><a href="https://tangorin.com/kanji?search=%E5%9D%92">坒 - Kanji - Japanese Dictionary Tangorin</a>:<br>きざはし</td></tr>
<tr><td>U+5762</td><td>坢</td><td>TAHIRAKA CHIRI</td><td>TAIRAKA CHIRI</td><td><a href="https://tangorin.com/kanji?search=%E5%9D%A2">坢 - Kanji - Japanese Dictionary Tangorin</a>:<br>たいらか・ちり</td></tr>
<tr><td>U+577B</td><td>坻</td><td>NAKISA KIZAHASHI SAKA NIHA TOMARU</td><td>NAGISA KIZAHASHI SAKA NIWA TOMARU</td><td><a href="https://en.wiktionary.org/wiki/%E5%9D%BB">坻 - Wiktionary</a>:<br>Kun: なぎさ (nagisa), さか (saka), にわ (niwa), とまる (tomaru)</td></tr>
<tr><td>U+5780</td><td>垀</td><td>KAMAHE WAZURAHAI</td><td>KAMAE WAZURAWAI</td><td>かまへ -> かまえ<br>わずらはい -> わずらわい<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5794</td><td>垔</td><td>HUSAGU</td><td>FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+57A4</td><td>垤</td><td>ARIZUKA</td><td>ARIDZUKA</td><td><a href="https://en.wiktionary.org/wiki/%E5%9E%A4">垤 - Wiktionary</a>:<br>Kun: ありづか (arizuka)</td></tr>
<tr><td>U+57BA</td><td>垺</td><td>KURUWA OHOKII SAKAN TSUKA</td><td>KURUWA OOKII SAKAN TSUKA</td><td>おほきい -> おおきい (modern Japanese orthography)</td></tr>
<tr><td>U+57CF</td><td>埏</td><td>HAKAMICHI NOBORU YAHARAGERUKONERU</td><td>HAKAMICHI NOBORU YAWARAGERU KONERU</td><td>やはらげる -> やわらげる (modern Japanese orthography)<br>+ split</td></tr>
<tr><td>U+57E4</td><td>埤</td><td>MASU ATAHERU TASUKERU HIKUIHIMEGAKI</td><td>MASU ATAERU TASUKERU HIKUIHIMEGAKI</td><td>あたへる -> あたえる<br>(modern Japanese orthography)</td></tr>
<tr><td>U+57F6</td><td>埶</td><td>UERU WAZA IKIHOHI</td><td>UERU WAZA IKIOI</td><td>いきほひ -> いきおい (modern Japanese orthography)</td></tr>
<tr><td>U+57F8</td><td>埸</td><td>SAKAHI AZE</td><td>SAKAI AZE</td><td>さかひ -> さかい (modern Japanese orthography)</td></tr>
<tr><td>U+57FA</td><td>基</td><td>MOTOI MOTO MOTOZUKU</td><td>MOTOI MOTO MOTODZUKU</td><td><a href="https://en.wiktionary.org/wiki/%E5%9F%BA">基 - Wiktionary</a>:<br>Kun: もと (moto, 基, Jōyō); もとい (motoi, 基, Jōyō); もとづく (motozuku)</td></tr>
<tr><td>U+5825</td><td>堥</td><td>KAHARAKE</td><td>KAWARAKE</td><td>かはらけ -> かわらけ (modern Japanese orthography)</td></tr>
<tr><td>U+583B</td><td>堻</td><td>URUHOHI URUHOU</td><td>URUOI URUOU</td><td>うるほひ -> うるおい<br>うるほう -> うるおう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+585B</td><td>塛</td><td>HUSAGARU</td><td>FUSAGARU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5863</td><td>塣</td><td>TOHORU</td><td>TOORU</td><td>とほる -> とおる (modern Japanese orthography)</td></tr>
<tr><td>U+587C</td><td>塼</td><td>KAHARA</td><td>KAWARA</td><td>かはら -> かわら (modern Japanese orthography)</td></tr>
<tr><td>U+5886</td><td>墆</td><td>TAKUHAHERU TAKUHAHE TOMERUTSUTSUMI</td><td>TAKUWAERU TAKUWAE TOMERUTSUTSUMI</td><td>たくはへる -> たくわえる<br>たくはへ -> たくわえ<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5887</td><td>墇</td><td>HUSEGU</td><td>FUSEGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5888</td><td>墈</td><td>SAKAHI</td><td>SAKAI</td><td>さかひ -> さかい (modern Japanese orthography)</td></tr>
<tr><td>U+58A5</td><td>墥</td><td>ARIZUKA</td><td>ARIDZUKA</td><td><a href="https://en.wiktionary.org/wiki/%E5%A2%A5">墥 - Wiktionary</a>:<br>Kun: ありづか (arizuka)</td></tr>
<tr><td>U+58FD</td><td>壽</td><td>KOTOBUKI HISASHII KOTOOGU</td><td>KOTOBUKI HISASHII KOTOHOGU</td><td>Consistent with:<br>• U+5BFF 寿 KOTOBUKI HISASHII KOTOHOGU</td></tr>
<tr><td>U+5905</td><td>夅</td><td>OORIRU OOROSU HUURU</td><td>ORIRU OROSU FURU</td><td><a href="https://tangorin.com/kanji?search=%E5%A4%85">夅 - Kanji - Japanese Dictionary Tangorin</a>:<br>おりる・おろす・ふる・くだる・くだす</td></tr>
<tr><td>U+5936</td><td>夶</td><td>KURAABERU</td><td>KURABERU</td><td>Consistent with:<br>• U+6BD4 比 KURABERU</td></tr>
<tr><td>U+5952</td><td>奒</td><td>TATEMATSUURU MATSURU</td><td>TATEMATSURU MATSURU</td><td><a href="https://tangorin.com/kanji?search=%E5%A5%92">奒 - Kanji - Japanese Dictionary Tangorin</a>:<br>たてまつる・まつる</td></tr>
<tr><td>U+5992</td><td>妒</td><td>NETAMU SONEMU TSUMORU HUSAGU</td><td>NETAMU SONEMU TSUMORU FUSAGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+59AE</td><td>妮</td><td>HASHITAME YAHARAKAKUMATSUHARU</td><td>HASHITAME YAWARAKAKUMATSUWARU</td><td>やはらかくまつはる -> やわらかくまつわる (modern Japanese orthography)</td></tr>
<tr><td>U+59C5</td><td>姅</td><td>MIMOSAGAKIZUTSUKU</td><td>MIMOCHIGAKIZUTSUKU</td><td><a href="https://en.wiktionary.org/wiki/%E5%A7%85">姅 - Wiktionary</a>:<br>Kun: みもちがきずつく (mimochigakizutsuku)</td></tr>
<tr><td>U+5A19</td><td>娙</td><td>SURARITOSHITEMIMEYOI HASHITAAME</td><td>SURARITOSHITEMIMEYOI HASHITAME</td><td>Typo?<br>Possibly related to:<br>• U+59AE 妮 HASHITAME<br>• U+5A2D 娭 HASHITAME<br>• U+5A62 婢 HASHITAME</td></tr>
<tr><td>U+5A2D</td><td>娭</td><td>TAHOMURERU HASHITAME</td><td>TAWAMURERU HASHITAME</td><td><a href="https://tangorin.com/kanji?search=%E5%A8%AD">娭 - Kanji - Japanese Dictionary Tangorin</a>:<br>たわむれる・はしため</td></tr>
<tr><td>U+5A5E</td><td>婞</td><td>MOTORU MATSUSUGU</td><td>MOTORU MASSUGU</td><td><a href="https://tangorin.com/kanji?search=%E5%A9%9E">婞 - Kanji - Japanese Dictionary Tangorin</a>:<br>もとる・まっすぐ</td></tr>
<tr><td>U+5AB1</td><td>媱</td><td>MIMEYOI TAHAMURERU</td><td>MIMEYOI TAWAMURERU</td><td>たはむれる -> たわむれる (modern Japanese orthography)</td></tr>
<tr><td>U+5AB2</td><td>媲</td><td>TSUREAHI</td><td>TSUREAI</td><td>つれあひ -> つれあい (modern Japanese orthography)</td></tr>
<tr><td>U+5AB5</td><td>媵</td><td>OKURU TSUKISOHI OKURIME OKURIBITO</td><td>OKURU TSUKISOI OKURIME OKURIBITO</td><td>つきそひ -> つきそい (modern Japanese orthography)</td></tr>
<tr><td>U+5AD5</td><td>嫕</td><td>SHITOYAKA SUNAHO</td><td>SHITOYAKA SUNAO</td><td>すなほ -> すなお (modern Japanese orthography)</td></tr>
<tr><td>U+5ADB</td><td>嫛</td><td>MIDORIGO SUNAHO</td><td>MIDORIGO SUNAO</td><td>すなほ -> すなお (modern Japanese orthography)</td></tr>
<tr><td>U+5AE5</td><td>嫥</td><td>MOTSUPARA TOTONOHERU</td><td>MOPPARA TOTONOERU</td><td><a href="https://tangorin.com/kanji?search=%E5%AB%A5">嫥 - Kanji - Japanese Dictionary Tangorin</a>:<br>もっぱら・ととのえる</td></tr>
<tr><td>U+5AEA</td><td>嫪</td><td>KOHISHITAHU NAYAMU</td><td>KOISHITAU NAYAMU</td><td>こひしたふ -> こいしたう (modern Japanese orthography)</td></tr>
<tr><td>U+5B56</td><td>孖</td><td>HUTAGO</td><td>FUTAGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5B77</td><td>孷</td><td>HUTAGO</td><td>FUTAGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5B7C</td><td>孼</td><td>WAKIBARA HIKOBAE WAZAHAHI</td><td>WAKIBARA HIKOBAE WAZAWAI</td><td>わざはひ -> わざわい (modern Japanese orthography)</td></tr>
<tr><td>U+5B7F</td><td>孿</td><td>HUTAGO</td><td>FUTAGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5B89</td><td>安</td><td>YASUI YASUNJIRU IZUKUNSO</td><td>YASUI YASUNJIRU IZUKUNZO</td><td><a href="https://en.wiktionary.org/wiki/%E5%AE%89">安 - Wiktionary</a>:<br>Kun: やすい (yasui, 安い, Jōyō); やすらか (yasuraka, 安らか); やすんじる (yasunjiru, 安んじる); いずくんぞ (izukunzo, 安んぞ)</td></tr>
<tr><td>U+5BAF</td><td>宯</td><td>KIGAAGARINUSU</td><td>KIGAAGARIMUSU</td><td><a href="https://tangorin.com/kanji?search=%E5%AE%AF">宯 - Kanji - Japanese Dictionary Tangorin</a>:<br>きがあがりむす</td></tr>
<tr><td>U+5BD1</td><td>寑</td><td>HUSU NERU OKUZASHIKI</td><td>FUSU NERU OKUZASHIKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5BE0</td><td>寠</td><td>MAZUSHII YATSURERU CHIHISAI</td><td>MAZUSHII YATSURERU CHIISAI</td><td>ちひさい -> ちいさい (modern Japanese orthography)</td></tr>
<tr><td>U+5C0C</td><td>尌</td><td>TATERU TATSU WARAHA SHIMOBE</td><td>TATERU TATSU WARAWA SHIMOBE</td><td><a href="https://tangorin.com/kanji?search=%E5%B0%8C">尌 - Kanji - Japanese Dictionary Tangorin</a>:<br>たてる・たつ・わらわ・しもべ</td></tr>
<tr><td>U+5C10</td><td>尐</td><td>SUKUNAI CHIHISAI</td><td>SUKUNAI CHIISAI</td><td>ちひさい -> ちいさい (modern Japanese orthography)</td></tr>
<tr><td>U+5C29</td><td>尩</td><td>ASHINAE SUNENOMAGATSUTAHITO</td><td>ASHINAE SUNENOMAGATTAHITO</td><td><a href="https://en.wiktionary.org/wiki/%E5%B0%A9">尩 - Wiktionary</a>:<br>Kun: あしなえ (ashinae), すねのまがったひと (sunenomagattahito)</td></tr>
<tr><td>U+5C51</td><td>屑</td><td>ISAGYOI KUZU</td><td>ISAGIYOI KUZU</td><td><a href="https://tangorin.com/kanji?search=%E5%B1%91">屑 - Kanji - Japanese Dictionary Tangorin</a>:<br>くず・いさぎよい</td></tr>
<tr><td>U+5C75</td><td>屵</td><td>KISHIGATAKA AOGO</td><td>KISHIGATAKAI AOGO</td><td><a href="https://tangorin.com/kanji?search=%E5%B1%B5">屵 - Kanji - Japanese Dictionary Tangorin</a>:<br>きしがたかい・あおご</td></tr>
<tr><td>U+5C87</td><td>岇</td><td>YAMANOTAKIISAMA</td><td>YAMANOTAKAISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%B2%87">岇 - Kanji - Japanese Dictionary Tangorin</a>:<br>やまのたかい</td></tr>
<tr><td>U+5C8F</td><td>岏</td><td>KEHASHII TAKAI</td><td>KEWASHII TAKAI</td><td><a href="https://en.wiktionary.org/wiki/%E5%B2%8F">岏 - Wiktionary</a>:<br>Kun: けわしい (kewashii, 岏しい)←けはしい (kefasii, historical); たかい (takai, 岏い)</td></tr>
<tr><td>U+5C9F</td><td>岟</td><td>HUMOTO</td><td>FUMOTO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5CDC</td><td>峜</td><td>KAZOHERU</td><td>KAZOERU</td><td>かぞへる -> かぞえる (modern Japanese orthography)</td></tr>
<tr><td>U+5D43</td><td>嵃</td><td>KEHASHII KEHASHIISAMA</td><td>KEWASHII KEWASHIISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%B5%83">嵃 - Kanji - Japanese Dictionary Tangorin</a>:<br>けわしい</td></tr>
<tr><td>U+5E14</td><td>帔</td><td>HUKURO</td><td>FUKURO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E23</td><td>帣</td><td>HUKURO</td><td>FUKURO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E28</td><td>帨</td><td>TEHUKI</td><td>TEFUKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E49</td><td>幉</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E5%B9%89">幉 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+5E60</td><td>幠</td><td>OHOHI OHOHU</td><td>OOI OOU</td><td>おほひ -> おおい<br>おほふ -> おおう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5E6A</td><td>幪</td><td>HUKUSA</td><td>FUKUSA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+5E6D</td><td>幭</td><td>OHOHI</td><td>OOI</td><td>おほひ -> おおい (modern Japanese orthography)</td></tr>
<tr><td>U+5E6F</td><td>幯</td><td>NUGUHU</td><td>NUGUU</td><td>ぬぐふ -> ぬぐう (modern Japanese orthography)</td></tr>
<tr><td>U+5EA2</td><td>庢</td><td>SAHEGIRITODOMERU</td><td>SAEGIRITODOMERU</td><td>さへぎりとどめる -> さえぎりとどめる (modern Japanese orthography)</td></tr>
<tr><td>U+5EB2</td><td>庲</td><td>IHE</td><td>IE</td><td>いへ -> いえ (modern Japanese orthography)</td></tr>
<tr><td>U+5ECE</td><td>廎</td><td>IHENOKATAHARA</td><td>IENOKATAWARA</td><td>いへのかたはら -> いえのかたわら (modern Japanese orthography)</td></tr>
<tr><td>U+5ED5</td><td>廕</td><td>OHOHU KABAHU KAGE</td><td>OOU KABAU KAGE</td><td>おほふ -> おおう<br>かばふ -> かばう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5ED7</td><td>廗</td><td>IHEGAYUGAMU</td><td>IEGAYUGAMU</td><td>いへがゆがむ -> いえがゆがむ (modern Japanese orthography)</td></tr>
<tr><td>U+5EDA</td><td>廚</td><td>KURYA</td><td>KURIYA</td><td>Consistent with:<br>• U+53A8 厨 KURIYA<br>• U+2228D 𢊍 KURIYA</td></tr>
<tr><td>U+5EDC</td><td>塼</td><td>IHORI</td><td>IORI</td><td>いほり -> いおり (modern Japanese orthography)</td></tr>
<tr><td>U+5EDE</td><td>廞</td><td>TSURANERU OKOSU KEHASHIISAMA</td><td>TSURANERU OKOSU KEWASHIISAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%BB%9E">廞 - Kanji - Japanese Dictionary Tangorin</a>:<br>つらねる・おこす・けわしい</td></tr>
<tr><td>U+5F0E</td><td>弎</td><td>MI MIITSU MIITTSU</td><td>MI MITSU MITTSU</td><td>Consistent with:<br>• U+4E09 三 MITSU</td></tr>
<tr><td>U+5F19</td><td>弙</td><td>OHATSUTENERAFU MOTSU</td><td>YUMIWOHATTENERAU MOTSU</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%99">弙 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆみをはってねらう・もつ</td></tr>
<tr><td>U+5F1D</td><td>弝</td><td>YUZUKA TSUKA</td><td>YUDZUKA TSUKA</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%9D">弝 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆづか・つか</td></tr>
<tr><td>U+5F23</td><td>弣</td><td>YUZUKA</td><td>YUDZUKA</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%A3">弣 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆづか</td></tr>
<tr><td>U+5F27</td><td>弧</td><td>KYUMI</td><td>KIYUMI</td><td><a href="https://en.wiktionary.org/wiki/%E5%BC%A7">弧 - Wiktionary</a>:<br>Kun: きゆみ (kiyumi, 弧)</td></tr>
<tr><td>U+5F36</td><td>弶</td><td>AMIOHARU WANAOKAKERU</td><td>AMIWOHARU WANAWOKAKERU</td><td><a href="https://en.wiktionary.org/wiki/%E5%BC%B6">弶 - Wiktionary</a>:<br>Kun: あみをはる (amioharu), わなをかける (wanaokakeru)</td></tr>
<tr><td>U+5F4B</td><td>彋</td><td>TOBARINOHIRUGAHERUKOE</td><td>TOBARINOHIRUGAERUKOE</td><td>とばりのひるがへるこえ -> とばりのひるがえるこえ (modern Japanese orthography)</td></tr>
<tr><td>U+5FC4</td><td>忄</td><td>RITSUSHINBEN</td><td>RISSHINBEN</td><td>【立心偏】りっしんべん</td></tr>
<tr><td>U+60AA</td><td>悪</td><td>WARUI NIKUMU IZUKUNSO</td><td>WARUI NIKUMU IZUKUNZO</td><td><a href="https://en.wiktionary.org/wiki/%E6%82%AA">悪 - Wiktionary</a>:<br>Kun: わるい (warui, 悪い, Jōyō); にくむ (nikumu, 悪む); いずくんぞ (izukunzo, 悪んぞ)</td></tr>
<tr><td>U+60DD</td><td>惝</td><td>UTSUTORISURU</td><td>UTTORISURU</td><td><a href="https://tangorin.com/kanji?search=%E6%83%9D">惝 - Kanji - Japanese Dictionary Tangorin</a>:<br>うっとりする</td></tr>
<tr><td>U+618B</td><td>憋</td><td>SETSUKACHI</td><td>SEKKACHI</td><td><a href="https://tangorin.com/kanji?search=%E6%86%8B">憋 - Kanji - Japanese Dictionary Tangorin</a>:<br>せっかち</td></tr>
<tr><td>U+61E4</td><td>懤</td><td>HOGARAKA UREHERU</td><td>HOGARAKA UREERU</td><td>うれへる -> うれえる (modern Japanese orthography)</td></tr>
<tr><td>U+623B</td><td>戻</td><td>MODOSU MOTORU ITARU</td><td>MODOSU MODORU ITARU</td><td><a href="https://tangorin.com/kanji?search=%E6%88%BB">戻 - Kanji - Japanese Dictionary Tangorin</a>:<br>もどす・もどる</td></tr>
<tr><td>U+6254</td><td>扔</td><td>YORU HURERU SUTERU</td><td>YORU FURERU SUTERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+628D</td><td>抍</td><td>AGERU NUKU ZUKUU TORU</td><td>AGERU NUKU SUKUU TORU</td><td><a href="https://tangorin.com/kanji?search=%E6%8A%8D">抍 - Kanji - Japanese Dictionary Tangorin</a>:<br>あげる・ぬく・すくう・とる</td></tr>
<tr><td>U+6308</td><td>挈</td><td>HITSUSAGERU</td><td>HISSAGERU</td><td><a href="https://tangorin.com/kanji?search=%E6%8C%88">挈 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひっさげる</td></tr>
<tr><td>U+6342</td><td>捂</td><td>HURERU</td><td>FURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6371</td><td>捱</td><td>HUSEGU</td><td>FUSEGU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+63A4</td><td>掤</td><td>HUTA</td><td>FUTA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+63BD</td><td>掽</td><td>TSUKU HAEZUMI</td><td>TSUKU HAEDZUMI</td><td><a href="https://en.wiktionary.org/wiki/%E6%8E%BD">掽 - Wiktionary</a>:<br>Derived terms: 【掽積み】はえづみ (haezumi)</td></tr>
<tr><td>U+63E0</td><td>揠</td><td>NUKU HUDA</td><td>NUKU FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+64D5</td><td>擕</td><td>TAZUSAAERU TAZUSAAWARU</td><td>TAZUSAERU TAZUSAWARU</td><td><a href="https://en.wiktionary.org/wiki/%E6%93%95">擕 - Wiktionary</a>:<br>Kun: たずさえる (tazusaeru), たずさわる (tazusawaru)</td></tr>
<tr><td>U+64ED</td><td>擭</td><td>AAGERU AAGARU</td><td>AGERU AGARU</td><td><a href="https://tangorin.com/kanji?search=%E6%93%AD">擭 - Kanji - Japanese Dictionary Tangorin</a>:<br>あげる・あがる</td></tr>
<tr><td>U+657A</td><td>敺</td><td>KAAKERU KAARU</td><td>KAKERU KARU</td><td><a href="https://tangorin.com/kanji?search=%E6%95%BA">敺 - Kanji - Japanese Dictionary Tangorin</a>:<br>かける・かる</td></tr>
<tr><td>U+65C9</td><td>旉</td><td>HU</td><td>SHIKU</td><td>Duplicate with kJapaneseOn<br><a href="https://tangorin.com/kanji?search=%E6%97%89">旉 - Kanji - Japanese Dictionary Tangorin</a>:<br>しく</td></tr>
<tr><td>U+6635</td><td>昵</td><td>CHIKAZUKU</td><td>CHIKADZUKU</td><td><a href="https://tangorin.com/kanji?search=%E6%98%B5">昵 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちかづく</td></tr>
<tr><td>U+668F</td><td>暏</td><td>ATSUI ATSUA</td><td>ATSUI ATSUSA</td><td>Consistent with:<br>• U+6691 暑 ATSUSA</td></tr>
<tr><td>U+66B1</td><td>暱</td><td>CHIKAZUKU CHIKAZUKI</td><td>CHIKADZUKU CHIKADZUKI</td><td><a href="https://tangorin.com/kanji?search=%E6%9A%B1">暱 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちかづく</td></tr>
<tr><td>U+66CC</td><td>曌</td><td>TEERU TEERASU TEERERU</td><td>TERU TERASU TERERU</td><td><a href="https://tangorin.com/kanji?search=%E6%9B%8C">曌 - Kanji - Japanese Dictionary Tangorin</a>:<br>てる・てらす・てれる</td></tr>
<tr><td>U+66F7</td><td>曷</td><td>NANI NANZO IZUKUNSO</td><td>NANI NANZO IZUKUNZO</td><td><a href="https://tangorin.com/kanji?search=%E6%9B%B7">曷 - Kanji - Japanese Dictionary Tangorin</a>:<br>なんぞ・いつ・いずくんぞ・なに</td></tr>
<tr><td>U+670F</td><td>朏</td><td>MIKAZUKI KURAI OROKA</td><td>MIKADZUKI KURAI OROKA</td><td><a href="https://en.wiktionary.org/wiki/%E6%9C%8F">朏 - Wiktionary</a>:<br>Kun: みかづき (mikazuki, 朏)</td></tr>
<tr><td>U+6718</td><td>朘</td><td>CHIJIMARU CHIJIMU HERU</td><td>CHIDJIMARU CHIDJIMU HERU</td><td>Consistent with:<br>• U+7E2E 縮 CHIDJIMU CHIDJIMARU など</td></tr>
<tr><td>U+6719</td><td>朙</td><td>AAKARI AKAARUI AKAARUMU</td><td>AKARI AKARUI AKARUMU</td><td><a href="https://tangorin.com/kanji?search=%E6%9C%99">朙 - Kanji - Japanese Dictionary Tangorin</a>:<br>あかり・あかるい・あかるむ・あからむ・あきらか・あける・あくる・あかす</td></tr>
<tr><td>U+6722</td><td>朢</td><td>MOCHIZUKI</td><td>MOCHIDZUKI</td><td><a href="https://en.wiktionary.org/wiki/%E6%9C%A2">朢 - Wiktionary</a>:<br>Kun: もちづき (mochizuki)</td></tr>
<tr><td>U+676C</td><td>杬</td><td>HUJIMODOKI</td><td>FUJIMODOKI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6784</td><td>构</td><td>KAMAAERU KAMAAU</td><td>KAMAERU KAMAU</td><td><a href="https://en.wiktionary.org/wiki/%E6%9E%84">构 - Wiktionary</a>:<br>Kun: かまえる (kamaeru), かまう (kamau)</td></tr>
<tr><td>U+6793</td><td>枓</td><td>HISHIYAKU</td><td>HISHAKU</td><td><a href="https://tangorin.com/kanji?search=%E6%9E%93">枓 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひしゃく</td></tr>
<tr><td>U+6799</td><td>枙</td><td>HUSHI</td><td>FUSHI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6888</td><td>梈</td><td>KIDETSUKUTSUTAOOYUMI</td><td>KIDETSUKUTTAOOYUMI</td><td>【木で作った大弓】きでつくったおおゆみ</td></tr>
<tr><td>U+68D3</td><td>棓</td><td>TSUE HUMIITA</td><td>TSUE FUMIITA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6911</td><td>椑</td><td>TARU HUDA</td><td>TARU FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+696C</td><td>楬</td><td>TATEHUDA</td><td>TATEFUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+69BA</td><td>榺</td><td>HATANOKEISHIWOMOTSUGU</td><td>HATAKENOISHIWOKATSUGU</td><td><a href="https://tangorin.com/kanji?search=%E6%A6%BA">榺 - Kanji - Japanese Dictionary Tangorin</a>:<br>はたけのいしをかつぐ</td></tr>
<tr><td>U+69D6</td><td>槖</td><td>HUKURO HUIGO</td><td>FUKURO FUIGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6A50</td><td>橐</td><td>HUKURO HUIGO</td><td>FUKURO FUIGO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6A6B</td><td>橫</td><td>YOKO YOKOTAWARU YOKOTAERU YOKO YOKOTAWARU YOKOTAERU</td><td>YOKO YOKOTAWARU YOKOTAERU</td><td>Duplicate readings:<br><a href="https://unicode.org/mail-arch/unicode-ml/y2010-m08/0184.html">https://unicode.org/mail-arch/unicode-ml/y2010-m08/0184.html</a></td></tr>
<tr><td>U+6AD0</td><td>櫐</td><td>HUJI</td><td>FUJI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6B28</td><td>欨</td><td>HUKU</td><td>FUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6BC9</td><td>毉</td><td>ISHIYA</td><td>ISHA</td><td>同【医者】いしゃ</td></tr>
<tr><td>U+6C10</td><td>氐</td><td>HUMOTO</td><td>FUMOTO</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6C59</td><td>汙</td><td>KEGAASU KEGAARERU TOGOOSU KEGAARERUKEGAARUWASHII</td><td>KEGASU KEGARERU TOGOSU KEGARAWASHII</td><td>Deliberate vandalism?<br><a href="https://tangorin.com/kanji?search=%E6%B1%99">汙 - Kanji - Japanese Dictionary Tangorin</a>:<br>けがす・けがれる・けがらわしい・よごす・よごれる・きたない</td></tr>
<tr><td>U+6C89</td><td>沉</td><td>SHIZUUMU SHIZUUMERU</td><td>SHIZUMU SHIZUMERU</td><td>Consistent with:<br>• U+6C88 沈 SHIZUMU SHIZUMERU</td></tr>
<tr><td>U+6CC6</td><td>泆</td><td>AHURERU</td><td>AFURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6D2F</td><td>洯</td><td>ISAGIYOOI</td><td>ISAGIYOI</td><td><a href="https://tangorin.com/kanji?search=%E6%B4%AF">洯 - Kanji - Japanese Dictionary Tangorin</a>:<br>いさぎよい</td></tr>
<tr><td>U+6D44</td><td>浄</td><td>KYOI TORO</td><td>KIYOI TORO</td><td><a href="https://en.wiktionary.org/wiki/%E6%B5%84">浄 - Wiktionary</a>:<br>Kun: きよい (kiyoi, 浄い); とろ (toro)</td></tr>
<tr><td>U+6DCE</td><td>淎</td><td>HOU HU</td><td>HOU FU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU<br>Same as kJapaneseOn?</td></tr>
<tr><td>U+6E52</td><td>湒</td><td>HURU</td><td>FURU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6E53</td><td>湓</td><td>AHURERU</td><td>AFURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6ECE</td><td>滎</td><td>CHIYOROCHIYORO</td><td>CHOROCHORO</td><td><a href="https://en.wiktionary.org/wiki/%E6%BB%8E">滎 - Wiktionary</a>:<br>Kun: ちょろちょろ (chorochoro, 滎)</td></tr>
<tr><td>U+6F36</td><td>漶</td><td>HATSUKIRISHINAI</td><td>HAKKIRISHINAI</td><td><a href="https://tangorin.com/kanji?search=%E6%BC%B6">漶 - Kanji - Japanese Dictionary Tangorin</a>:<br>はっきりしない</td></tr>
<tr><td>U+6F3C</td><td>漼</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+6F54</td><td>潔</td><td>ISAGYOI</td><td>ISAGIYOI</td><td><a href="https://tangorin.com/kanji?search=%E6%BD%94">潔 - Kanji - Japanese Dictionary Tangorin</a>:<br>いさぎよい</td></tr>
<tr><td>U+7011</td><td>瀑</td><td>NIWAKAUME TAKI</td><td>NIWAKAAME TAKI</td><td><a href="https://en.wiktionary.org/wiki/%E7%80%91">瀑 - Wiktionary</a>:<br>Kun: にわかあめ (niwakaame, 瀑); たき (taki, 瀑)</td></tr>
<tr><td>U+7034</td><td>瀴</td><td>HUKAI</td><td>FUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+706C</td><td>灬</td><td>RETSUKA</td><td>REKKA</td><td>【列火】れっか</td></tr>
<tr><td>U+706E</td><td>灮</td><td>HIKAARU HIKARI</td><td>HIKARU HIKARI</td><td><a href="https://tangorin.com/kanji?search=%E7%81%AE">灮 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひかる・ひかり</td></tr>
<tr><td>U+7076</td><td>灶</td><td>KAMA KAMADO HETSUTSUI</td><td>KAMA KAMADO HETTSUI</td><td><a href="https://tangorin.com/kanji?search=%E7%81%B6">灶 - Kanji - Japanese Dictionary Tangorin</a>:<br>かまど・かま・へっつい</td></tr>
<tr><td>U+707E</td><td>灾</td><td>WAZAWAAI</td><td>WAZAWAI</td><td><a href="https://en.wiktionary.org/wiki/%E7%81%BE">灾 - Wiktionary</a>:<br>Kun: わざわい (wazawai)</td></tr>
<tr><td>U+7097</td><td>炗</td><td>HIKAARU HIKARI</td><td>HIKARU HIKARI</td><td><a href="https://tangorin.com/kanji?search=%E7%82%97">炗 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひかる・ひかり</td></tr>
<tr><td>U+70CF</td><td>烏</td><td>KARASU IZUKUNSO</td><td>KARASU IZUKUNZO</td><td><a href="https://tangorin.com/kanji?search=%E7%83%8F">烏 - Kanji - Japanese Dictionary Tangorin</a>:<br>からす・いずくんぞ・なんぞ</td></tr>
<tr><td>U+70D6</td><td>烖</td><td>WAZAWAAI</td><td>WAZAWAI</td><td><a href="https://en.wiktionary.org/wiki/%E7%83%96">烖 - Wiktionary</a>:<br>Kun: わざわい (wazawai)</td></tr>
<tr><td>U+7109</td><td>焉</td><td>IZUKUNSO SUNAWACHI KORE</td><td>IZUKUNZO SUNAWACHI KORE</td><td><a href="https://tangorin.com/kanji?search=%E7%84%89">焉 - Kanji - Japanese Dictionary Tangorin</a>:<br>いずくんぞ・ここに・これ</td></tr>
<tr><td>U+7145</td><td>煅</td><td>KITAAERU</td><td>KITAERU</td><td><a href="https://en.wiktionary.org/wiki/%E7%85%85">煅 - Wiktionary</a>:<br>Kun: きたえる (kitaeru)</td></tr>
<tr><td>U+7195</td><td>熕</td><td>OOZUTSU</td><td>OODZUTSU</td><td><a href="https://tangorin.com/kanji?search=%E7%86%95">熕 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおづつ</td></tr>
<tr><td>U+722F</td><td>爯</td><td>TONAHE AGERU</td><td>TONAE AGERU</td><td>となへ -> となえ (modern Japanese orthography)</td></tr>
<tr><td>U+7253</td><td>牓</td><td>HUDA</td><td>FUDA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+726E</td><td>牮</td><td>TSUTSUPORI</td><td>TSUPPORI</td><td><a href="https://tangorin.com/kanji?search=%E7%89%AE">牮 - Kanji - Japanese Dictionary Tangorin</a>:<br>つっぽり</td></tr>
<tr><td>U+72CC</td><td>狌</td><td>SHIYOUJIYOU</td><td>SHOUJOU</td><td><a href="https://en.wiktionary.org/wiki/%E7%8B%8C">狌 - Wiktionary</a>:<br>Kun: いたち (itachi, 狌); しょうじょう (shōjō)←しやうじやう (syauzyau, historical)</td></tr>
<tr><td>U+72E1</td><td>狡</td><td>ZURUI WARUGASHIKO</td><td>ZURUI WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E7%8B%A1">狡 - Kanji - Japanese Dictionary Tangorin</a>:<br>ずるい・こすい・わるがしこい</td></tr>
<tr><td>U+733E</td><td>猾</td><td>WARUGASHIKO</td><td>WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E7%8C%BE">猾 - Kanji - Japanese Dictionary Tangorin</a>:<br>わるがしこい</td></tr>
<tr><td>U+736A</td><td>獪</td><td>WARUGASHIKO</td><td>WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E7%8D%AA">獪 - Kanji - Japanese Dictionary Tangorin</a>:<br>わるがしこい</td></tr>
<tr><td>U+7400</td><td>琀</td><td>HUKUMIDAMA</td><td>FUKUMIDAMA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+74EA</td><td>瓪</td><td>MEGAHARA</td><td>MEGAWARA</td><td>めがはら -> めがわら (modern Japanese orthography)</td></tr>
<tr><td>U+74F8</td><td>瓸</td><td>HEKUTOGURA</td><td>HEKUTOGURAMU</td><td rowspan="2">Consistent with:<br>• U+74E6 瓦 GURAMU<br>• U+74E7 瓧 DEKAGURAMU<br>• U+74E9 瓩 KIROGURAMU<br>• U+74F0 瓰 DESHIGURAMU<br>• U+74F1 瓱 MIRIGURAMU</td></tr>
<tr><td>U+7505</td><td>甅</td><td>SENCHIGURA</td><td>SENCHIGURAMU</td></tr>
<tr><td>U+7593</td><td>疓</td><td>YAMU YAMAI HOTSUSU</td><td>YAMU YAMAI HOSSU</td><td><a href="https://tangorin.com/kanji?search=%E7%96%93">疓 - Kanji - Japanese Dictionary Tangorin</a>:<br>やむ・やまい・ほっす</td></tr>
<tr><td>U+75C5</td><td>病</td><td>YAMU YAMAI UREE</td><td>YAMU YAMAI UREI</td><td><a href="https://en.wiktionary.org/wiki/%E7%97%85">病 - Wiktionary</a>:<br>Kun: やむ (yamu, 病む, Jōyō); やまい (yamai, 病, Jōyō)←やまひ (yamafi, historical); うれい (urei, 病)←うれひ (urefi, historical)</td></tr>
<tr><td>U+75EE</td><td>痮</td><td>HUKURERU</td><td>FUKURERU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+76B7</td><td>皷</td><td>TSUZUMI</td><td>TSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E7%9A%B7">皷 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづみ</td></tr>
<tr><td>U+76E6</td><td>盦</td><td>HUTA</td><td>FUTA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+775C</td><td>睜</td><td>METSUKI</td><td>MEKKI</td><td><a href="https://tangorin.com/kanji?search=%E7%9D%9C">睜 - Kanji - Japanese Dictionary Tangorin</a>:<br>めっき</td></tr>
<tr><td>U+77AF</td><td>瞯</td><td>UWAMEZUKAI NAGASHIME</td><td>UWAMEDZUKAI NAGASHIME</td><td><a href="https://tangorin.com/kanji?search=%E7%9E%AF">瞯 - Kanji - Japanese Dictionary Tangorin</a>:<br>うわめづかい・ながしめ</td></tr>
<tr><td>U+77BE</td><td>瞾</td><td>TEERU TERASU TEERERU</td><td>TERU TERASU TERERU</td><td><a href="https://tangorin.com/kanji?search=%E7%9E%BE">瞾 - Kanji - Japanese Dictionary Tangorin</a>:<br>てる・てらす・てれる</td></tr>
<tr><td>U+7822</td><td>砢</td><td>ISHIZUMI</td><td>ISHIDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E7%A0%A2">砢 - Kanji - Japanese Dictionary Tangorin</a>:<br>いしづみ</td></tr>
<tr><td>U+7832</td><td>砲</td><td>OOZUTSU TSUTSU</td><td>OODZUTSU TSUTSU</td><td>Consistent with:<br>• U+7195 熕 OODZUTSU</td></tr>
<tr><td>U+78BB</td><td>碻</td><td>TASHIIKA TASHIIKAMERU</td><td>TASHIKA TASHIKAMERU</td><td>Consistent with:<br>• U+78BA 確 TASHIKA TASHIKAMERU</td></tr>
<tr><td>U+7906</td><td>礆</td><td>KEWAASHII</td><td>KEWASHII</td><td><a href="https://en.wiktionary.org/wiki/%E7%A4%86">礆 - Wiktionary</a>:<br>Kun: けわしい (kewashii)</td></tr>
<tr><td>U+79E2</td><td>秢</td><td>YOHAI</td><td>YOWAI</td><td>よはい -> よわい (modern Japanese orthography)</td></tr>
<tr><td>U+79FC</td><td>秼</td><td>NOROFU</td><td>NOROU</td><td>のろふ -> のろう (modern Japanese orthography)</td></tr>
<tr><td>U+7A38</td><td>稸</td><td>TSUMU TAKUHAHERU</td><td>TSUMU TAKUWAERU</td><td>たくはへる -> たくわえる (modern Japanese orthography)</td></tr>
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
<tr><td>U+7C5D</td><td>籝</td><td>KAGO HASHIZUTSU</td><td>KAGO HASHIDZUTSU</td><td><a href="https://en.wiktionary.org/wiki/%E7%B1%9D">籝 - Wiktionary</a>:<br>Kun: かご (kago, 籝); はしづつ (hashizutsu, 籝)</td></tr>
<tr><td>U+7CCE</td><td>糎</td><td>SENCHIMEETO</td><td>SENCHIMEETORU</td><td>Consistent with:<br>• U+54AA 咪 MEETORU<br>• U+7C73 米 MEETORU<br>• U+7C75 籵 DEKAMEETORU<br>• U+7C81 粁 KIROMEETORU<br>• U+7C89 粉 DESHIMEETORU<br>• U+7C8D 粍 MIRIMEETORU<br>• U+7CA8 粨 HEKUTOMEETORU</td></tr>
<tr><td>U+7D04</td><td>約</td><td>TSUZUMERU TSUZUMAYAKA</td><td>TSUDZUMERU TSUDZUMAYAKA</td><td><a href="https://tangorin.com/kanji?search=%E7%B4%84">約 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづまる・つづめる・つづまやか</td></tr>
<tr><td>U+7D12</td><td>紒</td><td>YUU MUSUHU</td><td>YUU MUSUBU</td><td><a href="https://tangorin.com/kanji?search=%E7%B4%92">紒 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆう・むすぶ</td></tr>
<tr><td>U+7D18</td><td>紘</td><td>OOZUNA HIMO</td><td>OODZUNA HIMO</td><td><a href="https://en.wiktionary.org/wiki/%E7%B4%98">紘 - Wiktionary</a>:<br>Kun: おおづな (oozuna), ひも (himo)</td></tr>
<tr><td>U+7D51</td><td>絑</td><td>SHIYU</td><td>SHU</td><td>しゆ -> しゅ (modern Japanese orthography)<br>Same as kJapaneseOn?</td></tr>
<tr><td>U+7D7B</td><td>絻</td><td>MOHUKU</td><td>MOFUKU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+7D8B</td><td>綋</td><td>TSUNA TSUNAGU OOZUNA</td><td>TSUNA TSUNAGU OODZUNA</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%8B">綋 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおづな・つな・つなぐ</td></tr>
<tr><td>U+7D9A</td><td>続</td><td>TSUZUKU TSUGU</td><td>TSUDZUKU TSUGU</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%9A">続 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづく・つづける・つぐない</td></tr>
<tr><td>U+7DB4</td><td>綴</td><td>TSUZURU TOJIRU TSUZURI</td><td>TSUDZURU TOJIRU TSUDZURI</td><td><a href="https://tangorin.com/kanji?search=%E7%B6%B4">綴 - Kanji - Japanese Dictionary Tangorin</a>:<br>とじる・つづる・つづり・すみやか</td></tr>
<tr><td>U+7DCA</td><td>緊</td><td>CHIJIMU KIBISHII</td><td>CHIDJIMU KIBISHII</td><td><a href="https://en.wiktionary.org/wiki/%E7%B7%8A">緊 - Wiktionary</a>:<br>Kun: ちぢむ (chijimu, 緊む); きびしい (kibishii, 緊しい)</td></tr>
<tr><td>U+7E10</td><td>縐</td><td>CHIJIMI</td><td>CHIDJIMI</td><td><a href="https://tangorin.com/kanji?search=%E7%B8%90">縐 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちぢみ</td></tr>
<tr><td>U+7E2C</td><td>縬</td><td>CHIJIMU CHIJIMIAYA KINUNOAYA</td><td>CHIDJIMU CHIDJIMIAYA KINUNOAYA</td><td><a href="https://tangorin.com/kanji?search=%E7%B8%AC">縬 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちぢむ・ちぢみあや・きぬのあや</td></tr>
<tr><td>U+7E2E</td><td>縮</td><td>CHIJIMU CHIJIMARU NAOI</td><td>CHIDJIMU CHIDJIMARU NAOI</td><td><a href="https://tangorin.com/kanji?search=%E7%B8%AE">縮 - Kanji - Japanese Dictionary Tangorin</a>:<br>ちぢむ・ちぢまる・ちぢめる・ちぢれる・ちぢらす</td></tr>
<tr><td>U+7E65</td><td>繥</td><td>WARAFU TANOSHIMU</td><td>WARAU TANOSHIMU</td><td>わらふ -> わらう (modern Japanese orthography)</td></tr>
<tr><td>U+7E6E</td><td>繮</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E7%B9%AE">繮 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+7E89</td><td>纉</td><td>TSUGU TSUZUKERU</td><td>TSUGU TSUDZUKERU</td><td>Consistent with:<br>• U+7D9A 続 TSUDZUKU</td></tr>
<tr><td>U+7E8C</td><td>續</td><td>TSUZUKU TSUGU</td><td>TSUDZUKU TSUGU</td><td>Consistent with:<br>• U+7D9A 続 TSUDZUKU</td></tr>
<tr><td>U+7E8D</td><td>纍</td><td>TSUZURU</td><td>TSUDZURU</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%8D">纍 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづる</td></tr>
<tr><td>U+7E9A</td><td>纚</td><td>KAMIZUTSUMI TSUZUKU</td><td>KAMIDZUTSUMI TSUDZUKU</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%9A">纚 - Kanji - Japanese Dictionary Tangorin</a>:<br>かみづつみ・つづく</td></tr>
<tr><td>U+7E9C</td><td>纜</td><td>TOMOZUNA</td><td>TOMODZUNA</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%9C">纜 - Kanji - Japanese Dictionary Tangorin</a>:<br>ともづな</td></tr>
<tr><td>U+7E9D</td><td>纝</td><td>MATOFU KARAMERU KURONAWA</td><td>MATOU KARAMERU KURONAWA</td><td>まとふ -> まとう (modern Japanese orthography)</td></tr>
<tr><td>U+7E9E</td><td>纞</td><td>TSUZUKU</td><td>TSUDZUKU</td><td><a href="https://tangorin.com/kanji?search=%E7%BA%9E">纞 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづく</td></tr>
<tr><td>U+7EAE</td><td>纮</td><td>OOZUNA HIMO</td><td>OODZUNA HIMO</td><td>Simplified variant of U+7D18 紘 OODZUNA HIMO</td></tr>
<tr><td>U+7F3C</td><td>缼</td><td>KAAKERU KAAKU</td><td>KAKERU KAKU</td><td><a href="https://en.wiktionary.org/wiki/%E7%BC%BC">缼 - Wiktionary</a>:<br>Kun: かける (kakeru), かく (kaku)</td></tr>
<tr><td>U+7F87</td><td>羇</td><td>OMOGAI TAZUNA TSUNAGU</td><td>OMOGAI TADZUNA TSUNAGU</td><td><a href="https://tangorin.com/kanji?search=%E7%BE%87">羇 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+7F88</td><td>羈</td><td>OMOGAI TAZUNA TABI</td><td>OMOGAI TADZUNA TABI</td><td><a href="https://tangorin.com/kanji?search=%E7%BE%88">羈 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+80DB</td><td>胛</td><td>KAIGARAHO</td><td>KAIGARAHONE</td><td><a href="https://tangorin.com/kanji?search=%E8%83%9B">胛 - Kanji - Japanese Dictionary Tangorin</a>:<br>かいがらぼね</td></tr>
<tr><td>U+8105</td><td>脅</td><td>OBYAKASU ODOSU ODOKASU</td><td>OBIYAKASU ODOSU ODOKASU</td><td>Consistent with:<br>• U+6136 愶 OBIYAKASU</td></tr>
<tr><td>U+810B</td><td>脋</td><td>OBIYAAKASU ODOOSU OTOOKASU</td><td>OBIYAKASU ODOSU ODOKASU</td><td>Consistent with:<br>• U+6136 愶 OBIYAKASU</td></tr>
<tr><td>U+8120</td><td>脠</td><td>HISHIHO SHIOZUKE</td><td>HISHIO SHIODZUKE</td><td><a href="https://tangorin.com/kanji?search=%E8%84%A0">脠 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひしお・しおづけ</td></tr>
<tr><td>U+814C</td><td>腌</td><td>SHIOZUKE</td><td>SHIODZUKE</td><td><a href="https://tangorin.com/kanji?search=%E8%85%8C">腌 - Kanji - Japanese Dictionary Tangorin</a>:<br>しおづけ</td></tr>
<tr><td>U+818E</td><td>膎</td><td>HOJISHI NIKU SAKANA HADAHE</td><td>HOJISHI NIKU SAKANA HADAE</td><td>はだへ -> はだえ (modern Japanese orthography)</td></tr>
<tr><td>U+81F0</td><td>臰</td><td>KUSAAI</td><td>KUSAI</td><td><a href="https://tangorin.com/kanji?search=%E8%87%B0">臰 - Kanji - Japanese Dictionary Tangorin</a>:<br>くさい・におう</td></tr>
<tr><td>U+8202</td><td>舂</td><td>USUZUKU TSUKU</td><td>USUDZUKU TSUKU</td><td><a href="https://tangorin.com/kanji?search=%E8%88%82">舂 - Kanji - Japanese Dictionary Tangorin</a>:<br>うすつく・うすづく・つく</td></tr>
<tr><td>U+8219</td><td>舙</td><td>TAHAKARU</td><td>TABAKARU</td><td><a href="https://tangorin.com/kanji?search=%E8%88%99">舙 - Kanji - Japanese Dictionary Tangorin</a>:<br>たばかる</td></tr>
<tr><td>U+82AF</td><td>芯</td><td>HOSOI TOUSHINGU</td><td>HOSOI TOUSHINGUSA</td><td><a href="https://en.wiktionary.org/wiki/%E8%8A%AF">芯 - Wiktionary</a>:<br>Kun: ほそい (hosoi); とうしんぐさ (tōshingusa, 芯)</td></tr>
<tr><td>U+833C</td><td>茼</td><td>SHIYUNGIKU</td><td>SHUNGIKU</td><td>From: 春菊 "spring chrysanthemum"<br>• <a href="https://en.wikipedia.org/wiki/Glebionis_coronaria">Glebionis coronaria</a><br>• <a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A5%E3%83%B3%E3%82%AE%E3%82%AF">シュンギク</a></td></tr>
<tr><td>U+83D0</td><td>菐</td><td>WAZURAHASHII</td><td>WAZURAWASHII</td><td>わずらはしい -> わずらわしい (modern Japanese orthography)</td></tr>
<tr><td>U+845B</td><td>葛</td><td>KUZU TSUZURA</td><td>KUZU TSUDZURA</td><td><a href="https://tangorin.com/kanji?search=%E8%91%9B">葛 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづら・くず</td></tr>
<tr><td>U+8470</td><td>葰</td><td>SHIYUUGA</td><td>SHOUGA</td><td><a href="https://tangorin.com/kanji?search=%E8%91%B0">葰 - Kanji - Japanese Dictionary Tangorin</a>:<br>しょうが</td></tr>
<tr><td>U+8502</td><td>蔂</td><td>MOTSUKO</td><td>MOKKO</td><td><a href="https://tangorin.com/kanji?search=%E8%94%82">蔂 - Kanji - Japanese Dictionary Tangorin</a>:<br>もっこ</td></tr>
<tr><td>U+85E0</td><td>藠</td><td>RATSUKIYOU</td><td>RAKKYOU</td><td><a href="https://en.wiktionary.org/wiki/%E8%97%A0">藠 - Wiktionary</a>:<br>Kun: らっきょう (rakkyō)</td></tr>
<tr><td>U+85ED</td><td>藭</td><td>SENKIYUU</td><td>SENKYUU</td><td><a href="https://en.wiktionary.org/wiki/%E8%97%AD">藭 - Wiktionary</a>;<br>Kun: せんきゅう (senkyū)</td></tr>
<tr><td>U+8618</td><td>蘘</td><td>MIYOUGA</td><td>MYOUGA</td><td><a href="https://en.wiktionary.org/wiki/%E8%98%98">蘘 - Wiktionary</a>:<br>Kun: みょうが (myōga)</td></tr>
<tr><td>U+8677</td><td>虷</td><td>BOUHURA</td><td>BOUFURA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8698</td><td>蚘</td><td>KAICHIYUU HARANOMUSHI</td><td>KAICHUU HARANOMUSHI</td><td><a href="https://en.wiktionary.org/wiki/%E8%9A%98">蚘 - Wiktionary</a>:<br>Kun: かいちゅう (kaichū), はらのむし (haranomushi)</td></tr>
<tr><td>U+86D5</td><td>蛕</td><td>KAICHIYUU</td><td>KAICHUU</td><td><a href="https://tangorin.com/kanji?search=%E8%9B%95">蛕 - Kanji - Japanese Dictionary Tangorin</a>:<br>かいちゅう</td></tr>
<tr><td>U+870E</td><td>蜎</td><td>BOUHURA</td><td>BOUFURA</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8795</td><td>螕</td><td>DANI OHOARI</td><td>DANI OOARI</td><td>おほあり -> おおあり (modern Japanese orthography)</td></tr>
<tr><td>U+8842</td><td>衂</td><td>HANAJI KUJIKERU</td><td>HANADJI KUJIKERU</td><td><a href="https://tangorin.com/kanji?search=%E8%A1%82">衂 - Kanji - Japanese Dictionary Tangorin</a>:<br>はなぢ</td></tr>
<tr><td>U+8844</td><td>衄</td><td>HANAJI</td><td>HANADJI</td><td><a href="https://tangorin.com/kanji?search=%E8%A1%84">衄 - Kanji - Japanese Dictionary Tangorin</a>:<br>はなぢ</td></tr>
<tr><td>U+8858</td><td>衘</td><td>KUTSUSHIYU</td><td>KUTSUSHU KUTSUWA</td><td>くつしゆ -> くつしゅ (modern Japanese orthography)<br><a href="https://tangorin.com/kanji?search=%E8%A1%98">衘 - Kanji - Japanese Dictionary Tangorin</a>:<br>くつわ<br>Variant of U+929C 銜 KUTSUWA</td></tr>
<tr><td>U+8920</td><td>褠</td><td>HITOE HITOHENOTSUTSUSODEUDENUKI AHASE</td><td>HITOE HITOENOTSUTSUSODEUDENUKI AWASE</td><td>ひとへのつつそでうでぬき -> ひとえのつつそでうでぬき<br>あはせ -> あわせ<br>(modern Japanese orthography)</td></tr>
<tr><td>U+8935</td><td>褵</td><td>OBI KINCHIYAKU</td><td>OBI KINCHAKU</td><td>きんちやく -> きんちゃく (modern Japanese orthography)</td></tr>
<tr><td>U+8938</td><td>褸</td><td>BORO TSUZURU</td><td>BORO TSUDZURU</td><td><a href="https://en.wiktionary.org/wiki/%E8%A4%B8">褸 - Wiktionary</a>:<br>Kun: ぼろ (boro, 褸); つづる (tsuzuru)</td></tr>
<tr><td>U+8989</td><td>覉</td><td>OMOGAI TAZUNA TSUNAGU TABI</td><td>OMOGAI TADZUNA TSUNAGU TABI</td><td><a href="https://tangorin.com/kanji?search=%E8%A6%89">覉 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+898A</td><td>覊</td><td>OMOGAI TAZUNA TSUNAGU</td><td>OMOGAI TADZUNA TSUNAGU</td><td><a href="https://tangorin.com/kanji?search=%E8%A6%8A">覊 - Kanji - Japanese Dictionary Tangorin</a>:<br>おもがい・たづな・たび・つなぐ</td></tr>
<tr><td>U+8990</td><td>覐</td><td>OBOOERU SAAMASU SAAMERU</td><td>OBOERU SAMASU SAMERU</td><td>Consistent with:<br>• U+899A 覚 OBOERU SAMASU<br>• U+89BA 覺 OBOERU SAMASU</td></tr>
<tr><td>U+8A43</td><td>詃</td><td>IZANAU ITSUHARU</td><td>IZANAU ITSUWARU</td><td>いつはる -> いつわる (modern Japanese orthography)</td></tr>
<tr><td>U+8A47</td><td>詇</td><td>SATOI TSUGERU TOFU KOE</td><td>SATOI TSUGERU TOU KOE</td><td>とふ -> とう (modern Japanese orthography)</td></tr>
<tr><td>U+8A49</td><td>詉</td><td>KAMABISUSHII WARUKUIFU</td><td>KAMABISUSHII WARUKUIU</td><td>わるくいふ -> わるくいう (modern Japanese orthography)</td></tr>
<tr><td>U+8A4D</td><td>詍</td><td>SHIYABIRU</td><td>SHABERU</td><td>Consistent with:<br>• U+546D 呭 SHABERU<br>• U+558B 喋 SHABERU</td></tr>
<tr><td>U+8A65</td><td>詥</td><td>YAHARAGU KANAFU ATSUMARIIFU</td><td>YAWARAGU KANAU ATSUMARIIU</td><td>やはらぐ -> やわらぐ<br>かなふ -> かなう<br>あつまりいふ -> あつまりいう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+8A7A</td><td>詺</td><td>NAZUKERU</td><td>NADZUKERU</td><td><a href="https://tangorin.com/kanji?search=%E8%A9%BA">詺 - Kanji - Japanese Dictionary Tangorin</a>:<br>なづける</td></tr>
<tr><td>U+8A7E</td><td>詾</td><td>UTSUTAERU IITATERU MICHIRU ODOSU</td><td>UTTAERU IITATERU MICHIRU ODOSU</td><td><a href="https://tangorin.com/kanji?search=%E8%A9%BE">詾 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえる・いいたてる・みちる・おどす</td></tr>
<tr><td>U+8AAF</td><td>誯</td><td>TONAAERU</td><td>TONAERU</td><td><a href="https://en.wiktionary.org/wiki/%E8%AA%AF">誯 - Wiktionary</a>:<br>Kun: となえる (tonaeru)</td></tr>
<tr><td>U+8AB7</td><td>誷</td><td>SHIHIRU</td><td>SHIIRU</td><td>しひる -> しいる (modern Japanese orthography)</td></tr>
<tr><td>U+8AD1</td><td>諑</td><td>UTSUTAE</td><td>UTTAE</td><td><a href="https://tangorin.com/kanji?search=%E8%AB%91">諑 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえ</td></tr>
<tr><td>U+8B30</td><td>謰</td><td>OSHIYABIRI</td><td>OSHABERI</td><td><a href="https://en.wiktionary.org/wiki/%E8%AC%B0">謰 - Wiktionary</a>:<br>Kun: おしゃべり (oshaberi)</td></tr>
<tr><td>U+8B5E</td><td>譞</td><td>SAKASHII CHIE OHOKUMONOIFU</td><td>SAKASHII CHIE OOKUMONOIU</td><td>おほくものいふ -> おおくものいう (modern Japanese orthography)</td></tr>
<tr><td>U+8CE1</td><td>賡</td><td>TSUGU TSUGUNAFU</td><td>TSUGU TSUGUNAU</td><td>つぐなふ -> つぐなう (modern Japanese orthography)</td></tr>
<tr><td>U+8DBB</td><td>趻</td><td>HURAHURASURU</td><td>FURAFURASURU</td><td>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8DDD</td><td>距</td><td>KEZUME TAGAU HEDATERU</td><td>KEDZUME TAGAU HEDATERU</td><td><a href="https://tangorin.com/kanji?search=%E8%B7%9D">距 - Kanji - Japanese Dictionary Tangorin</a>:<br>へだたる・けづめ</td></tr>
<tr><td>U+8E38</td><td>踸</td><td>HURAJURASURU</td><td>FURAFURASURU</td><td>Typo: JURA -> HURA<br>Use consistent Hepburn romanization for ふ: FU, not HU</td></tr>
<tr><td>U+8E44</td><td>蹄</td><td>HIZUME</td><td>HIDZUME</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%84">蹄 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひづめ</td></tr>
<tr><td>U+8E4F</td><td>蹏</td><td>HIZUME</td><td>HIDZUME</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%8F">蹏 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひづめ</td></tr>
<tr><td>U+8E54</td><td>蹔</td><td>TOTSUSHINSURU</td><td>TOSSHINSURU</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%94">蹔 - Kanji - Japanese Dictionary Tangorin</a>:<br>とっしんする</td></tr>
<tr><td>U+8EDC</td><td>軜</td><td>TAZUNA</td><td>TADZUNA</td><td><a href="https://tangorin.com/kanji?search=%E8%BB%9C">軜 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな</td></tr>
<tr><td>U+8F00</td><td>輀</td><td>HITSUGIGURUMA JISHIYA</td><td>HITSUGIGURUMA JISHA</td><td>同【轜】</td></tr>
<tr><td>U+8F5C</td><td>轜</td><td>HITSUGIGU</td><td>HITSUGIGURUMA JISHA</td><td><a href="https://tangorin.com/kanji?search=%E8%BD%9C">轜 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひつぎぐるま・じしゃ</td></tr>
<tr><td>U+8F61</td><td>轡</td><td>TAZUNA KUTSUWA</td><td>TADZUNA KUTSUWA</td><td><a href="https://tangorin.com/kanji?search=%E8%BD%A1">轡 - Kanji - Japanese Dictionary Tangorin</a>:<br>くつわ・たづな</td></tr>
<tr><td>U+8FA1</td><td>辡</td><td>UTSUTAHERU</td><td>UTTAERU</td><td><a href="https://tangorin.com/kanji?search=%E8%BE%A1">辡 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえる</td></tr>
<tr><td>U+902C</td><td>逬</td><td>HASHIRU HOTOBASHIRU SHIRIZOKERU TSUKAFU</td><td>HASHIRU HOTOBASHIRU SHIRIZOKERU TSUKAU</td><td>つかふ -> つかう (modern Japanese orthography)</td></tr>
<tr><td>U+906C</td><td>遬</td><td>SUMIYAKA KAWARU CHIJIMU KOMAKAI TSUTSUSHIMU</td><td>SUMIYAKA KAWARU CHIDJIMU KOMAKAI TSUTSUSHIMU</td><td><a href="https://tangorin.com/kanji?search=%E9%81%AC">遬 - Kanji - Japanese Dictionary Tangorin</a>:<br>すみやか・かわる・ちぢむ・こまかい・つつしむ</td></tr>
<tr><td>U+9090</td><td>邐</td><td>TSUZUKU</td><td>TSUDZUKU</td><td><a href="https://tangorin.com/kanji?search=%E9%82%90">邐 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづく</td></tr>
<tr><td>U+916B</td><td>酫</td><td>SHIHOZUKE</td><td>SHIODZUKE</td><td>しほづけ -> しおづけ (modern Japanese orthography)</td></tr>
<tr><td>U+9177</td><td>酷</td><td>KIBISHII HANAHADASHI MUGOI</td><td>KIBISHII HANAHADASHII MUGOI</td><td>Use consistent adjective form for all readings</td></tr>
<tr><td>U+918E</td><td>醎</td><td>SEISHIYU</td><td>SEISHU</td><td><a href="https://en.wiktionary.org/wiki/%E9%86%8E">醎 - Wiktionary</a>:<br>Kun: せいしゅ (seishu), しおからい (shiokarai)</td></tr>
<tr><td>U+91B6</td><td>酫</td><td>SU SUI SHIHOKARAI</td><td>SU SUI SHIOKARAI</td><td>しほからい -> しおからい (modern Japanese orthography)</td></tr>
<tr><td>U+91C6</td><td>釆</td><td>WAKATSU WAKARERU HIZUME</td><td>WAKATSU WAKARERU HIDZUME</td><td>Consistent with:<br>• U+8E44 蹄 HIDZUME<br>• U+8E4F 蹏 HIDZUME</td></tr>
<tr><td>U+91D4</td><td>釔</td><td>ITORYUUMU</td><td>ITTORIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%83%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0">イットリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%87%94">釔 - Wiktionary</a>:<br>Kun: イットリウム (ittoriumu, 釔)</td></tr>
<tr><td>U+91D9</td><td>釙</td><td>ARAGANE BORONYUUMU</td><td>ARAGANE PORONIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%AD%E3%83%8B%E3%82%A6%E3%83%A0">ポロニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%87%99">釙 - Wiktionary</a>:<br>Kun: あらがね (aragane), ぽろにうむ (poroniumu)</td></tr>
<tr><td>U+91F7</td><td>釷</td><td>TORYUUMU</td><td>TORIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0">トリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%87%B7">釷 - Wiktionary</a>:<br>Kun: トリウム (toriumu)</td></tr>
<tr><td>U+9224</td><td>鈤</td><td>GERUMANYUUMU</td><td>GERUMANIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%AB%E3%83%9E%E3%83%8B%E3%82%A6%E3%83%A0">ゲルマニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%A4">鈤 - Wiktionary</a>:<br>Kun: ゲルマニウム (gerumaniumu, 鈤)</td></tr>
<tr><td>U+9226</td><td>鈦</td><td>CHITANYUUMU</td><td>CHITANIUMU CHITAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%BF%E3%83%8B%E3%82%A6%E3%83%A0">チタニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%A6">鈦 - Wiktionary</a>:<br>Kun: ちたにうむ (chitaniumu)</td></tr>
<tr><td>U+9230</td><td>鈰</td><td>KEN SERYUUMU</td><td>KEN SERIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%AA%E3%82%A6%E3%83%A0">セリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%B0">鈰 - Wiktionary</a>:<br>Kun: けん (ken, 鈰); セリウム (seriumu, 鈰)</td></tr>
<tr><td>U+9236</td><td>鈶</td><td>TARYUUMU</td><td>TARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%AA%E3%82%A6%E3%83%A0">タリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%B6">鈶 - Wiktionary</a>:<br>Kun: タリウム (tariumu)</td></tr>
<tr><td>U+923E</td><td>鈾</td><td>URANYUUMU</td><td>URANIUMU URAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%A9%E3%83%8B%E3%82%A6%E3%83%A0">ウラニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%88%BE">鈾 - Wiktionary</a>:<br>Kun: ウラン (uran), ウラニウム (uraniumu)</td></tr>
<tr><td>U+9240</td><td>鉀</td><td>YOROI KARYUUMU</td><td>YOROI KARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%82%A6%E3%83%A0">カリウム</a><br><a href="https://tangorin.com/kanji?search=%E9%89%80">鉀 - Kanji - Japanese Dictionary Tangorin</a>:<br>よろい・かりうむ</td></tr>
<tr><td>U+9251</td><td>鉑</td><td>BURACHINA</td><td>PURACHINA</td><td>[<a href="https://github.com/tonton-pixel/Unihan-Japanese-Kun-Error-Report/issues/1">mandel59</a>] 鉑 (platinum) is プラチナ in Japanese, not ブラチナ</td></tr>
<tr><td>U+927E</td><td>鉾</td><td>HOKO KITSUSAKI</td><td>HOKO KISSAKI</td><td>Consistent with:<br>• U+92E9 鋩 HOKOSAKI KISSAKI</td></tr>
<tr><td>U+92A0</td><td>銠</td><td>MUTENYUUMU</td><td>RUTENIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%86%E3%83%8B%E3%82%A6%E3%83%A0">ルテニウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8A%A0">銠 - Kanji - Japanese Dictionary Tangorin</a>:<br>るてにうむ</td></tr>
<tr><td>U+92A5</td><td>銥</td><td>IRIJUUMU</td><td>IRIJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%AA%E3%82%B8%E3%82%A6%E3%83%A0">イリジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8A%A5">銥 - Wiktionary</a>:<br>Kun: イリジウム (irijiumu)</td></tr>
<tr><td>U+92A7</td><td>銧</td><td>RAJUUMU</td><td>RAJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B8%E3%82%A6%E3%83%A0">ラジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8A%A7">銧 - Wiktionary</a>:<br>Kun: ラジウム (rajiumu, 銧)</td></tr>
<tr><td>U+92AB</td><td>銫</td><td>SESHUUMU</td><td>SESHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%B7%E3%82%A6%E3%83%A0">セシウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8A%AB">銫 - Wiktionary</a>:<br>Kun: セシウム (seshiumu)</td></tr>
<tr><td>U+92C0</td><td>鋀</td><td>TORYUUMU</td><td>TORIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0">トリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%80">鋀 - Wiktionary</a>:<br>Kun: トリウム (toriumu)</td></tr>
<tr><td>U+92C1</td><td>鋁</td><td>YASURI ARUMINYUUMU</td><td>YASURI ARUMINIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%9F%E3%83%8B%E3%82%A6%E3%83%A0">アルミニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%81">鋁 - Wiktionary</a>:<br>Kun: やすり (yasuri, 鋁); アルミニウム (aruminiumu)</td></tr>
<tr><td>U+92C7</td><td>鋇</td><td>ATSUGANE BARYUUMU</td><td>ATSUGANE BARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%AA%E3%82%A6%E3%83%A0">バリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%87">鋇 - Wiktionary</a>:<br>あつがね (atsugane, 鋇); ばりうむ (bariumu, 鋇)</td></tr>
<tr><td>U+92C8</td><td>鋈</td><td>SHIROGANE METSUKI</td><td>SHIROGANE MEKKI</td><td><a href="https://tangorin.com/kanji?search=%E9%8B%88">鋈 - Kanji - Japanese Dictionary Tangorin</a>:<br>しろがね・めっき</td></tr>
<tr><td>U+92CD</td><td>鋍</td><td>AKIKOBORERU BERIRYUUMU</td><td>AKIKOBORERU BERIRIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%99%E3%83%AA%E3%83%AA%E3%82%A6%E3%83%A0">ベリリウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8B%8D">鋍 - Kanji - Japanese Dictionary Tangorin</a>:<br>あきこぼれる・べりりうむ</td></tr>
<tr><td>U+92F0</td><td>鋰</td><td>RICHUUMU</td><td>RICHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%81%E3%82%A6%E3%83%A0">リチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8B%B0">鋰 - Wiktionary</a>:<br>Kun: リチウム (richiumu, 鋰)</td></tr>
<tr><td>U+92E9</td><td>鋩</td><td>HOKOSAKI KITSUSAKI</td><td>HOKOSAKI KISSAKI</td><td><a href="https://tangorin.com/kanji?search=%E9%8B%A9">鋩 - Kanji - Japanese Dictionary Tangorin</a>:<br>ほこさき・きっさき・へさき</td></tr>
<tr><td>U+9334</td><td>錴</td><td>ROJUUMU</td><td>ROJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%B8%E3%82%A6%E3%83%A0">ロジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8C%B4">錴 - Wiktionary</a>:<br>Kun: ロジウム (rojiumu)</td></tr>
<tr><td>U+9337</td><td>錷</td><td>KADORINYUUMU</td><td>GADORINIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%89%E3%83%AA%E3%83%8B%E3%82%A6%E3%83%A0">ガドリニウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8C%B7">錷 - Kanji - Japanese Dictionary Tangorin</a>:<br>がどりにうむ</td></tr>
<tr><td>U+9376</td><td>鍶</td><td>SERYUUMU</td><td>SUTORONCHIUMU</td><td>To be consistent with kDefinition: "strontium; an iron utensil", not "cerium"<br>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B3%E3%83%81%E3%82%A6%E3%83%A0">ストロンチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8D%B6">鍶 - Wiktionary</a>:<br>Kun: ストロンチウム (sutoronchiumu)</td></tr>
<tr><td>U+9398</td><td>鎘</td><td>KANAENOTSUKIMONO KADOMYUUSU</td><td>KANAENOTSUKIMONO KADOMIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%89%E3%83%9F%E3%82%A6%E3%83%A0">カドミウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8E%98">鎘 - Kanji - Japanese Dictionary Tangorin</a>:<br>かなえのつきもの・かどみうむ</td></tr>
<tr><td>U+93B4</td><td>鎴</td><td>SUTORONSHUUMU</td><td>SUTORONCHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B3%E3%83%81%E3%82%A6%E3%83%A0">ストロンチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B4">鎴 - Wiktionary</a>:<br>Kun: ストロンチウム (sutoronchiumu)</td></tr>
<tr><td>U+93B5</td><td>鎵</td><td>GARYUUMU</td><td>GARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%AA%E3%82%A6%E3%83%A0">ガリウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B5">鎵 - Wiktionary</a>:<br>Kun: がりうむ (gariumu)</td></tr>
<tr><td>U+93B6</td><td>鎶</td><td>KOROMUBYUUMU</td><td>KORONBIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%AD%E3%83%B3%E3%83%93%E3%82%A6%E3%83%A0">コロンビウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B6">鎶 - Wiktionary</a>:<br>Kun: コロンビウム (koronbiumu, 鎶)</td></tr>
<tr><td>U+93C5</td><td>鏅</td><td>KITAHERU</td><td>KITAERU</td><td>きたへる -> きたえる (modern Japanese orthography)</td></tr>
<tr><td>U+940F</td><td>鐏</td><td>ISHIZUKI</td><td>ISHIDZUKI</td><td><a href="https://en.wiktionary.org/wiki/%E9%90%8F">鐏 - Wiktionary</a>:<br>Kun: いしづき (ishizuki)</td></tr>
<tr><td>U+9413</td><td>鐓</td><td>ISHIZUKI TSUCHI</td><td>ISHIDZUKI TSUCHI</td><td><a href="https://en.wiktionary.org/wiki/%E9%90%93">鐓 - Wiktionary</a>:<br>Kun: いしづき (ishizuki), つち (tsuchi)</td></tr>
<tr><td>U+941F</td><td>鐟</td><td>CHITANYUUMU</td><td>CHITANIUMU CHITAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%BF%E3%83%8B%E3%82%A6%E3%83%A0">チタニウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%90%9F">鐟 - Wiktionary</a>:<br>Kun: ちたにうむ (chitaniumu)</td></tr>
<tr><td>U+942F</td><td>鐯</td><td>KUHA OHOSUKI</td><td>KUWA OOSUKI</td><td>くは -> くわ<br>おほすき -> おおすき<br>(modern Japanese orthography)</td></tr>
<tr><td>U+9433</td><td>鐳</td><td>KAME RAJUUMU</td><td>KAME RAJIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B8%E3%82%A6%E3%83%A0">ラジウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%90%B3">鐳 - Wiktionary</a>:<br>Kun: かめ (kame, 鐳); ラジウム (rajiumu, 鐳)</td></tr>
<tr><td>U+943F</td><td>鐿</td><td>ICHIRUBYUUMU</td><td>ITTERUBIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%83%E3%83%86%E3%83%AB%E3%83%93%E3%82%A6%E3%83%A0">イッテルビウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%90%BF">鐿 - Wiktionary</a>:<br>Kun: イッテルビウム (itterubiumu)</td></tr>
<tr><td>U+9461</td><td>鑡</td><td>OHOBAN</td><td>OOBAN</td><td>おほばん -> おおばん<br>(modern Japanese orthography)</td></tr>
<tr><td>U+946D</td><td>鑭</td><td>RANTANIUMU</td><td>RANTAN</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%B3%E3%82%BF%E3%83%B3">ランタン</a><br><a href="https://en.wiktionary.org/wiki/%E9%91%AD">鑭 - Wiktionary</a>:<br>Kun: ランタン (rantan)</td></tr>
<tr><td>U+94D3</td><td>铓</td><td>HOKOSAKI KITSUSAKI</td><td>HOKOSAKI KISSAKI</td><td>Simplified variant of U+92E9 鋩</td></tr>
<tr><td>U+9578</td><td>镸</td><td>NAGAAI OSA</td><td>NAGAI OSA</td><td><a href="https://en.wiktionary.org/wiki/%E9%95%B8">镸 - Wiktionary</a>:<br>Kun: ながい (nagai), おさ (osa)</td></tr>
<tr><td>U+957E</td><td>镾</td><td>WATARU TORITSUKUROFU</td><td>WATARU TORITSUKUROU</td><td>とりつくろふ -> とりつくろう (modern Japanese orthography)</td></tr>
<tr><td>U+95B9</td><td>閹</td><td>SHIMOBE MESHITSUKAI KOBIHETSURA</td><td>SHIMOBE MESHITSUKAI KOBIHETSURAU</td><td>Related to【媚び諂う】こびへつらう?</td></tr>
<tr><td>U+9625</td><td>阥</td><td>KAGE KAGEERU</td><td>KAGE KAGERU</td><td><a href="https://tangorin.com/kanji?search=%E9%98%A5">阥 - Kanji - Japanese Dictionary Tangorin</a>:<br>かげ・かげる</td></tr>
<tr><td>U+9638</td><td>阸</td><td>FUSAGARU KAGIRU SAMATOGERU SEMARU AYAFUI KURUSHIMI NAYAMI KEHASHII HEDATEFUSAGU SEEMAI</td><td>FUSAGARU KAGIRU SAMATOGERU SEMARU AYAUI KURUSHIMI NAYAMI KEWASHII HEDATEFUSAGU SEMAI</td><td><a href="https://en.wiktionary.org/wiki/%E9%98%B8">阸 - Wiktionary</a>:<br>Kun: ふさがる (fusagaru, 阸がる); かぎる (kagiru, 阸る); せまる (semaru, 阸る); あやうい (ayaui, 阸い)←あやふい (ayafui, historical); くるしみ (kurushimi, 阸しみ); なやみ (nayami, 阸み); けわしい (kewashii, 阸しい)←けはしい (kefasii, historical); せまい (semai, 阸い)</td></tr>
<tr><td>U+9652</td><td>陒</td><td>YABURETAKAKI YABURERU KEHASHII</td><td>YABURETAKAKI YABURERU KEWASHII</td><td><a href="https://en.wiktionary.org/wiki/%E9%99%92">陒 - Wiktionary</a>:<br>Kun: やぶれたかき (yaburetakaki), やぶれる (yabureru), けわしい (kewashii)</td></tr>
<tr><td>U+9657</td><td>陗</td><td>KEHASHIKUTAKAI MATSUSUGUDETAKAI KEHASHII TAKAI KIBISHII SEEMARU KAKURERU SETSUKACHI KEHASHIISAKA</td><td>KEWASHIKUTAKAI MASSUGUDETAKAI KEWASHII TAKAI KIBISHII SEMARU KAKURERU SEKKACHI KEWASHIISAKA</td><td><a href="https://en.wiktionary.org/wiki/%E9%99%97">陗 - Wiktionary</a>:<br>Kun: けわしくたかい (kewashikutakai), まっすぐでたかい (massugudetakai), けわしい (kewashii), たかい (takai), きびしい (kibishii), せまる (semaru), かくれる (kakureru), せっかち (sekkachi), けわしいさか (kewashiisaka)</td></tr>
<tr><td>U+966E</td><td>陮</td><td>TAKAI AYAFUI</td><td>TAKAI AYAUI</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+9682</td><td>隂</td><td>KAGE KAGEERU</td><td>KAGE KAGERU</td><td><a href="https://tangorin.com/kanji?search=%E9%9A%82">隂 - Kanji - Japanese Dictionary Tangorin</a>:<br>かげ・かげる</td></tr>
<tr><td>U+96D8</td><td>雘</td><td>SHINSHIYA</td><td>SHINSHA</td><td><a href="https://en.wiktionary.org/wiki/%E9%9B%98">雘 - Wiktionary</a>:<br>Kun: しんしゃ (shinsha, 雘)</td></tr>
<tr><td>U+96FB</td><td>電</td><td>INAZUMA</td><td>INADZUMA</td><td>【稲妻・電】いなづま</td></tr>
<tr><td>U+9757</td><td>靗</td><td>UKAGAFU</td><td>UKAGAU</td><td>うかがふ -> うかがう (modern Japanese orthography)</td></tr>
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
<tr><td>U+9AD3</td><td>髓</td><td>ZUI</td><td></td><td>Variant of U+9AC4 髄<br>kJapaneseOn, not kJapaneseKun</td></tr>
<tr><td>U+9B6B</td><td>魫</td><td>SAKANONOKO</td><td>SAKANANOKO</td><td><a href="https://tangorin.com/kanji?search=%E9%AD%AB">魫 - Kanji - Japanese Dictionary Tangorin</a>:<br>さかなのこ</td></tr>
<tr><td>U+9B78</td><td>魸</td><td></td><td>NAMAZU</td><td>kJapaneseKun, not kJapaneseOn<br><a href="https://en.wiktionary.org/wiki/%E9%AD%B8">魸 - Wiktionary</a>:<br>Kun: なまず (namazu)</td></tr>
<tr><td>U+9BBE</td><td>鮾</td><td></td><td>KUSARU</td><td>kJapaneseKun, not kJapaneseOn<br>Consistent with:<br>• U+9BD8 鯘 KUSARU<br><a href="https://en.wiktionary.org/wiki/%E9%AE%BE">鮾 - Wiktionary</a>:<br>Kun: くさる (kusaru, 鮾る)</td></tr>
<tr><td>U+9EE0</td><td>黠</td><td>SATOI WARUGASHIKO</td><td>SATOI WARUGASHIKOI</td><td><a href="https://tangorin.com/kanji?search=%E9%BB%A0">黠 - Kanji - Japanese Dictionary Tangorin</a>:<br>さとい・わるがしこい</td></tr>
<tr><td>U+9F13</td><td>鼓</td><td>TSUZUMI</td><td>TSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%93">鼓 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづみ</td></tr>
<tr><td>U+9F14</td><td>鼔</td><td>TSUZUMI</td><td>TSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%94">鼔 - Kanji - Japanese Dictionary Tangorin</a>:<br>つづみ</td></tr>
<tr><td>U+9F16</td><td>鼖</td><td>OOTSUZUMI</td><td>OOTSUDZUMI</td><td>Consistent with:<br>• U+9F1B 鼛 OOTSUDZUMI</td></tr>
<tr><td>U+9F17</td><td>鼗</td><td>FURITSUZUMI</td><td>FURITSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%97">鼗 - Kanji - Japanese Dictionary Tangorin</a>:<br>ふりつづみ</td></tr>
<tr><td>U+9F1B</td><td>鼛</td><td>OOTSUZUMI</td><td>OOTSUDZUMI</td><td><a href="https://tangorin.com/kanji?search=%E9%BC%9B">鼛 - Kanji - Japanese Dictionary Tangorin</a>:<br>おおつづみ</td></tr>
<tr><td>U+9F46</td><td>齆</td><td>HANAZUMARI</td><td>HANADZUMARI</td><td><a href="https://en.wiktionary.org/wiki/%E9%BD%86">齆 - Wiktionary</a>:<br>Kun: はなづまり (hanazumari)</td></tr>
<tr><td>U+9F8F</td><td>龏</td><td>TSUTSUSHIMU NOBORU TOMOSHIBIOHOHI</td><td>TSUTSUSHIMU NOBORU TOMOSHIBIOOI</td><td>ともしびおほひ -> ともしびおおい (modern Japanese orthography)</td></tr>
<tr><td>U+275D7</td><td>𧗗</td><td>HANAJI</td><td>HANADJI</td><td>Consistent with 【鼻血】はなぢ</td></tr>
</table>

### • kJapaneseOn

<table>
<tr><th>Code</th><th>Char</th><th>Issue</th><th>Correction</th><th>Rationale&nbsp;/&nbsp;References</th><tr>
<tr><td>U+5715</td><td>圕</td><td>TOSHOKAN SHO</td><td>SHO</td><td>kJapaneseKun, not kJapaneseOn</td></tr>
<tr><td>U+9228</td><td>鈨</td><td>HABAKI</td><td></td><td>kJapaneseKun, not kJapaneseOn<br>Consistent with U+93BA 鎺</td></tr>
<tr><td>U+9B78</td><td>魸</td><td>NAMAZU</td><td></td><td>kJapaneseKun, not kJapaneseOn</td></tr>
</table>
