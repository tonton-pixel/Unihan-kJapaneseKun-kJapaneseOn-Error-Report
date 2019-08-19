# Unihan kJapaneseKun Error Report \[Draft\]

- **Subject: Unihan kJapaneseKun Error Report**
- **Date: 2019-08-19**
- **Author: Michel MARIANI**

This error report intends to correct issues found in the `kJapaneseKun` fields of the `Unihan_Readings.txt` data file.

In addition to fixing a few typos, it represents an attempt at using a constant romanization style based on Hepburn (ヘボン式), not Kunrei (訓令式); for instance, ふ should always be transliterated as `FU`, not `HU`.

Also, it tries to apply proper romanization to pronunciations using modern (instead of historical) Japanese orthography, for instance by replacing は with わ, ひ with い, ふ with う, へ with え, ほ with お, etc. where appropriate, and making explicit use of small っ, ゃ, ゅ, ょ when necessary.

By the way, in order to allow for lossless, round-trip conversion between rōmaji and kana, the Hepburn system could be adapted for the syllables `JI` and `ZU` which can represent either じ or ぢ, and ず or づ. For instance, non-standard `DJI` and `DZU` could be used for ぢ and づ, respectively. Doing so,【衄】はなぢ would be `HANADJI` instead of `HANAJI`, and【纚】かみづつみ would be `KAMIDZUTSUMI` instead of `KAMIZUTSUMI`... Note that this is precisely the kind of transliteration performed on the [ICU Transform Demonstration](http://demo.icu-project.org/icu-bin/translit) page.

The file [Unihan_Readings_kJapaneseKun-Corrected.txt](Unihan_Readings_kJapaneseKun-Corrected.txt) lists all the suggested changes in the same format than the original data file, but containing only the modified lines.

    # Unihan_Readings.txt
    # Date: 2018-11-09 21:36:19 GMT [JHJ]
    # Unicode version: 12.0.0

<table>
<tr><th>Code</th><th>Char</th><th>Issue</th><th>Correction</th><th>Rationale&nbsp;/&nbsp;References</th><tr>
<tr><td>U+4E2B</td><td>丫</td><td>HUTAMATA AGEMAKI</td><td>FUTAMATA AGEMAKI</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+4F74</td><td>佴</td><td>TASUKE SOHI NARABU ORU TSUGU</td><td>TASUKE ?SOI? NARABU ORU TSUGU</td><td>そひ -> そい？ (modern Japanese orthography)</td></tr>
<tr><td>U+4F81</td><td>侁</td><td>YUKUSAMA TSUKAHI</td><td>YUKUSAMA TSUKAI</td><td>つかひ -> つかい (modern Japanese orthography)</td></tr>
<tr><td>U+4F9A</td><td>侚</td><td>SUMIYAKA SHIMESU TONAERU HUKAI TSUKAHU</td><td>SUMIYAKA SHIMESU TONAERU FUKAI TSUKAU</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU<br>つかふ -> つかう (modern Japanese orthography)</td></tr>
<tr><td>U+4FBB</td><td>侻</td><td>KANAHU YOI TEGARU TAYASUI KARUI</td><td>KANAU YOI TEGARU TAYASUI KARUI</td><td>かなふ -> かなう (modern Japanese orthography)</td></tr>
<tr><td>U+4FD2</td><td>俒</td><td>MATSUTASHI KEGASU</td><td>MATTASHI KEGASU</td><td><a href="https://tangorin.com/kanji?search=%E4%BF%92">俒 - Kanji - Japanese Dictionary Tangorin</a>:<br>まったし・けがす</td></tr>
<tr><td>U+501E</td><td>倞</td><td>TSUYOI AKIRAKA TOOI MOTOMERU KISOHU</td><td>TSUYOI AKIRAKA TOOI MOTOMERU KISOU</td><td>きそふ -> きそう (modern Japanese orthography)</td></tr>
<tr><td>U+5052</td><td>偒</td><td>MATSUSUGU</td><td>MASSUGU</td><td><a href="https://tangorin.com/kanji?search=%E5%81%92">偒 - Kanji - Japanese Dictionary Tangorin</a>:<br>まっすぐ</td></tr>
<tr><td>U+5057</td><td>偗</td><td>MATSUSUGUNASAMA</td><td>MASSUGUNASAMA</td><td><a href="https://tangorin.com/kanji?search=%E5%81%97">偗 - Kanji - Japanese Dictionary Tangorin</a>:<br>まっすぐ</td></tr>
<tr><td>U+505E</td><td>偞</td><td>KARUI MIMEYOISAMA IYASHII OSU OSAHETSUKERU UTSUKUSHII</td><td>KARUI MIMEYOISAMA IYASHII OSU OSAETSUKERU UTSUKUSHII</td><td>おさへつける -> おさえつける (modern Japanese orthography)</td></tr>
<tr><td>U+505F</td><td>偟</td><td>TATAZUMU SAMAYOHU TACHIMOTOHORU ITOMA</td><td>TATAZUMU SAMAYOU TACHIMOTOORU ITOMA</td><td>さまよふ -> さまよう<br>たちもとほる -> たちもとおる<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5061</td><td>偡</td><td>SOROTSUTESUSUMU TOTONOTSUTASAMA</td><td>SOROTTESUSUMU TOTONOTTASAMA</td><td><a href="https://en.wiktionary.org/wiki/%E5%81%A1">偡 - Wiktionary</a>:<br>Kun: そろってすすむ (sorottesusumu), ととのったさま (totonottasama)</td></tr>
<tr><td>U+5082</td><td>傂</td><td>KATATAGAHI HITOSHIKUNAI</td><td>KATATAGAI HITOSHIKUNAI</td><td>かたたがひ -> かたたがい (modern Japanese orthography)</td></tr>
<tr><td>U+508B</td><td>傋</td><td>HETSURAHANU OROKA</td><td>HETSURAWANU OROKA</td><td>へつらはぬ -> へつらわぬ (modern Japanese orthography)</td></tr>
<tr><td>U+508E</td><td>傎</td><td>SAKASAMA KURUHU</td><td>SAKASAMA KURUU</td><td>くるふ -> くるう (modern Japanese orthography)</td></tr>
<tr><td>U+5092</td><td>傒</td><td>AYAHUI TSUNAGU</td><td>AYAUI TSUNAGU</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+50C6</td><td>僆</td><td>HUTAGO OYOBU OHITSUKU</td><td>FUTAGO OYOBU OHITSUKU</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+50D3</td><td>僓</td><td>NARAU MIYABIYAKA SHITAGAHU</td><td>NARAU MIYABIYAKA SHITAGAU</td><td>したがふ -> したがう (modern Japanese orthography)</td></tr>
<tr><td>U+5107</td><td>儇</td><td>KASHIKOI AGIMUKU TOI MATOHU</td><td>KASHIKOI AGIMUKU TOI MATOU</td><td>まとふ -> まとう (modern Japanese orthography)</td></tr>
<tr><td>U+5198</td><td>冘</td><td>OKOTARU TAMERAHU UTAGAHU</td><td>OKOTARU TAMERAU UTAGAU</td><td>ためらふ -> ためらう<br>うたがふ -> うたがう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5202</td><td>刂</td><td>RITSUTOU</td><td>RITTOU</td><td>【立刀】りっとう</td></tr>
<tr><td>U+5216</td><td>刖</td><td>KIRU AYAHUI</td><td>KIRU AYAUI</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+5226</td><td>刦</td><td>OIYAKASU</td><td>OBIYAKASU</td><td>Consistent with:<br>• U+52AB 劫 OBIYAKASU</td></tr>
<tr><td>U+5227</td><td>刧</td><td>OBYAKASU</td><td>OBIYAKASU</td><td>Consistent with:<br>• U+52AB 劫 OBIYAKASU</td></tr>
<tr><td>U+527D</td><td>剽</td><td>OBYAKASU</td><td>OBIYAKASU</td><td><a href="https://tangorin.com/kanji?search=%E5%89%BD">剽 - Kanji - Japanese Dictionary Tangorin</a>:<br>おびやかす・さす</td></tr>
<tr><td>U+528C</td><td>劌</td><td>SOKONAU SAKU HARI TOGE AHU</td><td>SOKONAU SAKU HARI TOGE AU</td><td>あふ -> あう (modern Japanese orthography)</td></tr>
<tr><td>U+5393</td><td>厓</td><td>GAKE KISHI KATAHE HATE</td><td>GAKE KISHI KATAE HATE</td><td>かたへ -> かたえ (modern Japanese orthography)</td></tr>
<tr><td>U+548D</td><td>咍</td><td>WARAHU YOROKOBU</td><td>WARAU YOROKOBU</td><td>わらふ -> わらう (modern Japanese orthography)</td></tr>
<tr><td>U+5500</td><td>唀</td><td>SASOOU</td><td>SASOU</td><td>Consistent with:<br>• U+8A98 誘 SASOU</td></tr>
<tr><td>U+5530</td><td>唰</td><td>HANETSUKUROHU</td><td>HANETSUKUROU</td><td>はねつくろふ -> はねつくろう (modern Japanese orthography)</td></tr>
<tr><td>U+553C</td><td>唼</td><td>KURAHU SUSURU TSUIBAMU HUMU</td><td>KURAU SUSURU TSUIBAMU FUMU</td><td>くらふ -> くらう (modern Japanese orthography)<br>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+55A2</td><td>喢</td><td>OSHIYABERI</td><td>OSHABERI</td><td>Consistent with:<br>• U+5555 啕 OSHABERI<br>• U+55A6 喦 OSHABERI</td></tr>
<tr><td>U+55CD</td><td>嗍</td><td>SUHU</td><td>SUU</td><td>すふ -> すう (modern Japanese orthography)</td></tr>
<tr><td>U+55D1</td><td>嗑</td><td>OSHIYABERI AHU NOMU KATARU</td><td>OSHABERI AU NOMU KATARU</td><td>Consistent with:<br>• U+5555 啕 OSHABERI<br>• U+55A6 喦 OSHABERI<br>あふ -> あう (modern Japanese orthography)</td></tr>
<tr><td>U+55DE</td><td>嗞</td><td>NAGEKU WARAHU</td><td>NAGEKU WARAU</td><td>わらふ -> わらう (modern Japanese orthography)</td></tr>
<tr><td>U+563B</td><td>嘻</td><td>IMASHIME YAHARAGU AA WARAHU</td><td>IMASHIME YAWARAGU AA WARAU</td><td>やはらぐ -> やわらぐ<br>わらふ -> わらう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+564A</td><td>噊</td><td>AYAHUI</td><td>AYAUI</td><td>あやふい -> あやうい (modern Japanese orthography)</td></tr>
<tr><td>U+56EB</td><td>囫</td><td>MATSUTASHI HATSUKIRISHINAI</td><td>MATTASHI HAKKIRISHINAI</td><td><a href="https://tangorin.com/kanji?search=%E5%9B%AB">囫 - Kanji - Japanese Dictionary Tangorin</a>:<br>まったし・はっきりしない</td></tr>
<tr><td>U+5780</td><td>垀</td><td>KAMAHE WAZURAHAI</td><td>KAMAE ?WAZURAWAI?</td><td>かまへ -> かまえ<br>わずらはい -> わずらわい<br>(modern Japanese orthography)</td></tr>
<tr><td>U+57F6</td><td>埶</td><td>UERU WAZA IKIHOHI</td><td>UERU WAZA IKIOI</td><td>いきほひ -> いきおい (modern Japanese orthography)</td></tr>
<tr><td>U+57F8</td><td>埸</td><td>SAKAHI AZE</td><td>SAKAI AZE</td><td>さかひ -> さかい (modern Japanese orthography)</td></tr>
<tr><td>U+583B</td><td>堻</td><td>URUHOHI URUHOU</td><td>URUOI URUOU</td><td>うるほひ -> うるおい<br>うるほう -> うるおう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5886</td><td>墆</td><td>TAKUHAHERU TAKUHAHE TOMERUTSUTSUMI</td><td>TAKUWAERU TAKUWAE TOMERUTSUTSUMI</td><td>たくはへる -> たくわえる<br>たくはへ -> たくわえ<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5888</td><td>墈</td><td>SAKAHI</td><td>SAKAI</td><td>さかひ -> さかい (modern Japanese orthography)</td></tr>
<tr><td>U+5936</td><td>夶</td><td>KURAABERU</td><td>KURABERU</td><td>Consistent with:<br>• U+6BD4 比 KURABERU</td></tr>
<tr><td>U+5952</td><td>奒</td><td>TATEMATSUURU MATSURU</td><td>TATEMATSURU MATSURU</td><td><a href="https://tangorin.com/kanji?search=%E5%A5%92">奒 - Kanji - Japanese Dictionary Tangorin</a>:<br>たてまつる・まつる</td></tr>
<tr><td>U+59AE</td><td>妮</td><td>HASHITAME YAHARAKAKUMATSUHARU</td><td>HASHITAME YAWARAKAKUMATSUWARU</td><td>やはらかくまつはる -> やわらかくまつわる (modern Japanese orthography)</td></tr>
<tr><td>U+5A5E</td><td>婞</td><td>MOTORU MATSUSUGU</td><td>MOTORU MASSUGU</td><td><a href="https://tangorin.com/kanji?search=%E5%A9%9E">婞 - Kanji - Japanese Dictionary Tangorin</a>:<br>もとる・まっすぐ</td></tr>
<tr><td>U+5AB2</td><td>媲</td><td>TSUREAHI</td><td>TSUREAI</td><td>つれあひ -> つれあい (modern Japanese orthography)</td></tr>
<tr><td>U+5AB5</td><td>媵</td><td>OKURU TSUKISOHI OKURIME OKURIBITO</td><td>OKURU TSUKISOI OKURIME OKURIBITO</td><td>つきそひ -> つきそい (modern Japanese orthography)</td></tr>
<tr><td>U+5AE5</td><td>嫥</td><td>MOTSUPARA TOTONOHERU</td><td>MOPPARA TOTONOERU</td><td><a href="https://tangorin.com/kanji?search=%E5%AB%A5">嫥 - Kanji - Japanese Dictionary Tangorin</a>:<br>もっぱら・ととのえる</td></tr>
<tr><td>U+5AEA</td><td>嫪</td><td>KOHISHITAHU NAYAMU</td><td>KOISHITAU NAYAMU</td><td>こひしたふ -> こいしたう (modern Japanese orthography)</td></tr>
<tr><td>U+5B7C</td><td>孼</td><td>WAKIBARA HIKOBAE WAZAHAHI</td><td>WAKIBARA HIKOBAE WAZAWAI</td><td>わざはひ -> わざわい (modern Japanese orthography)</td></tr>
<tr><td>U+5C29</td><td>尩</td><td>ASHINAE SUNENOMAGATSUTAHITO</td><td>ASHINAE SUNENOMAGATTAHITO</td><td><a href="https://en.wiktionary.org/wiki/%E5%B0%A9">尩 - Wiktionary</a>:<br>Kun: あしなえ (ashinae), すねのまがったひと (sunenomagattahito)</td></tr>
<tr><td>U+5E28</td><td>帨</td><td>TEHUKI</td><td>TEFUKI</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+5E60</td><td>幠</td><td>OHOHI OHOHU</td><td>OOI OOU</td><td>おほひ -> おおい<br>おほふ -> おおう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5E6D</td><td>幭</td><td>OHOHI</td><td>OOI</td><td>おほひ -> おおい (modern Japanese orthography)</td></tr>
<tr><td>U+5E6F</td><td>幯</td><td>NUGUHU</td><td>NUGUU</td><td>ぬぐふ -> ぬぐう (modern Japanese orthography)</td></tr>
<tr><td>U+5EB2</td><td>庲</td><td>IHE</td><td>IE</td><td>いへ -> いえ (modern Japanese orthography)</td></tr>
<tr><td>U+5ED5</td><td>廕</td><td>OHOHU KABAHU KAGE</td><td>OOU KABAU KAGE</td><td>おほふ -> おおう<br>かばふ -> かばう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+5F19</td><td>弙</td><td>OHATSUTENERAFU MOTSU</td><td>?YUMIWOHATTENERAU? MOTSU</td><td><a href="https://tangorin.com/kanji?search=%E5%BC%99">弙 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆみをはってねらう・もつ</td></tr>
<tr><td>U+5FC4</td><td>忄</td><td>RITSUSHINBEN</td><td>RISSHINBEN</td><td>【立心偏】りっしんべん</td></tr>
<tr><td>U+60DD</td><td>惝</td><td>UTSUTORISURU</td><td>UTTORISURU</td><td><a href="https://tangorin.com/kanji?search=%E6%83%9D">惝 - Kanji - Japanese Dictionary Tangorin</a>:<br>うっとりする</td></tr>
<tr><td>U+618B</td><td>憋</td><td>SETSUKACHI</td><td>SEKKACHI</td><td><a href="https://tangorin.com/kanji?search=%E6%86%8B">憋 - Kanji - Japanese Dictionary Tangorin</a>:<br>せっかち</td></tr>
<tr><td>U+6308</td><td>挈</td><td>HITSUSAGERU</td><td>HISSAGERU</td><td><a href="https://tangorin.com/kanji?search=%E6%8C%88">挈 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひっさげる</td></tr>
<tr><td>U+65C9</td><td>旉</td><td>HU</td><td>SHIKU</td><td><a href="https://tangorin.com/kanji?search=%E6%97%89">旉 - Kanji - Japanese Dictionary Tangorin</a>:<br>しく</td></tr>
<tr><td>U+668F</td><td>暏</td><td>ATSUI ATSUA</td><td>ATSUI ATSUSA</td><td>Consistent with:<br>• U+6691 暑 ATSUSA</td></tr>
<tr><td>U+6793</td><td>枓</td><td>HISHIYAKU</td><td>HISHAKU</td><td><a href="https://tangorin.com/kanji?search=%E6%9E%93">枓 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひしゃく</td></tr>
<tr><td>U+6888</td><td>梈</td><td>KIDETSUKUTSUTAOOYUMI</td><td>KIDETSUKUTTAOOYUMI</td><td>【木で作った大弓】きでつくったおおゆみ</td></tr>
<tr><td>U+696C</td><td>楬</td><td>TATEHUDA</td><td>TATEFUDA</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+69BA</td><td>榺</td><td>HATANOKEISHIWOMOTSUGU</td><td>?HATAKENOISHIWOKATSUGU? ?HATANOKEISHIWOMOTSUGU?</td><td><a href="https://tangorin.com/kanji?search=%E6%A6%BA">榺 - Kanji - Japanese Dictionary Tangorin</a>:<br>はたけのいしをかつぐ</td></tr>
<tr><td>U+6A6B</td><td>橫</td><td>YOKO YOKOTAWARU YOKOTAERU YOKO YOKOTAWARU YOKOTAERU</td><td>YOKO YOKOTAWARU YOKOTAERU</td><td>Duplicate readings:<br><a href="https://unicode.org/mail-arch/unicode-ml/y2010-m08/0184.html">https://unicode.org/mail-arch/unicode-ml/y2010-m08/0184.html</a></td></tr>
<tr><td>U+6AB0</td><td>檰</td><td>TOCHIYUU</td><td>?TOCHUU?</td><td>同【杜仲】とちゅう？</td></tr>
<tr><td>U+6BC9</td><td>毉</td><td>ISHIYA</td><td>?ISHA?</td><td>同【医者】いしゃ？</td></tr>
<tr><td>U+6CC6</td><td>泆</td><td>AHURERU</td><td>AFURERU</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+6D2F</td><td>洯</td><td>ISAGIYOOI</td><td>ISAGIYOI</td><td><a href="https://tangorin.com/kanji?search=%E6%B4%AF">洯 - Kanji - Japanese Dictionary Tangorin</a>:<br>いさぎよい</td></tr>
<tr><td>U+6D44</td><td>浄</td><td>KYOI TORO</td><td>KIYOI TORO</td><td><a href="https://en.wiktionary.org/wiki/%E6%B5%84">浄 - Wiktionary</a>:<br>Kun: きよい (kiyoi, 浄い); とろ (toro)</td></tr>
<tr><td>U+6DCE</td><td>淎</td><td>HOU HU</td><td>??</td><td><a href="https://tangorin.com/kanji?search=%E6%B7%8E">淎 - Kanji - Japanese Dictionary Tangorin</a>:<br>??</td></tr>
<tr><td>U+6E53</td><td>湓</td><td>AHURERU</td><td>AFURERU</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+6ECE</td><td>滎</td><td>CHIYOROCHIYORO</td><td>CHOROCHORO</td><td><a href="https://en.wiktionary.org/wiki/%E6%BB%8E">滎 - Wiktionary</a>:<br>Kun: ちょろちょろ (chorochoro, 滎)</td></tr>
<tr><td>U+6F36</td><td>漶</td><td>HATSUKIRISHINAI</td><td>HAKKIRISHINAI</td><td><a href="https://tangorin.com/kanji?search=%E6%BC%B6">漶 - Kanji - Japanese Dictionary Tangorin</a>:<br>はっきりしない</td></tr>
<tr><td>U+706C</td><td>灬</td><td>RETSUKA</td><td>REKKA</td><td>【列火】れっか</td></tr>
<tr><td>U+7076</td><td>灶</td><td>KAMA KAMADO HETSUTSUI</td><td>KAMA KAMADO HETTSUI</td><td><a href="https://tangorin.com/kanji?search=%E7%81%B6">灶 - Kanji - Japanese Dictionary Tangorin</a>:<br>かまど・かま・へっつい</td></tr>
<tr><td>U+722F</td><td>爯</td><td>TONAHE AGERU</td><td>TONAE AGERU</td><td>となへ -> となえ (modern Japanese orthography)</td></tr>
<tr><td>U+726E</td><td>牮</td><td>TSUTSUPORI</td><td>TSUPPORI</td><td><a href="https://tangorin.com/kanji?search=%E7%89%AE">牮 - Kanji - Japanese Dictionary Tangorin</a>:<br>つっぽり</td></tr>
<tr><td>U+72CC</td><td>狌</td><td>SHIYOUJIYOU</td><td>SHOUJOU</td><td><a href="https://en.wiktionary.org/wiki/%E7%8B%8C">狌 - Wiktionary</a>:<br>Kun: いたち (itachi, 狌); しょうじょう (shōjō)←しやうじやう (syauzyau, historical)</td></tr>
<tr><td>U+74F8</td><td>瓸</td><td>HEKUTOGURA</td><td>HEKUTOGURAMU</td><td rowspan="2">Consistent with:<br>• U+74E6 瓦 GURAMU<br>• U+74E7 瓧 DEKAGURAMU<br>• U+74E9 瓩 KIROGURAMU<br>• U+74F0 瓰 DESHIGURAMU<br>• U+74F1 瓱 MIRIGURAMU</td></tr>
<tr><td>U+7505</td><td>甅</td><td>SENCHIGURA</td><td>SENCHIGURAMU</td></tr>
<tr><td>U+7593</td><td>疓</td><td>YAMU YAMAI HOTSUSU</td><td>YAMU YAMAI HOSSU</td><td><a href="https://tangorin.com/kanji?search=%E7%96%93">疓 - Kanji - Japanese Dictionary Tangorin</a>:<br>やむ・やまい・ほっす</td></tr>
<tr><td>U+775C</td><td>睜</td><td>METSUKI</td><td>MEKKI</td><td><a href="https://tangorin.com/kanji?search=%E7%9D%9C">睜 - Kanji - Japanese Dictionary Tangorin</a>:<br>めっき</td></tr>
<tr><td>U+79FC</td><td>秼</td><td>NOROFU</td><td>NOROU</td><td>のろふ -> のろう (modern Japanese orthography)</td></tr>
<tr><td>U+7AB5</td><td>窵</td><td>OKUHUKAI</td><td>OKUFUKAI</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+7ACD</td><td>竍</td><td>DEKARITTO</td><td>DEKARITTORU</td><td rowspan="4">Consistent with:<br>• U+7ACF 竏 KIRORITTORU<br>• U+7AD3 竓 MIRIRITTORU</td></tr>
<tr><td>U+7AD5</td><td>竕</td><td>DESHIRITTO</td><td>DESHIRITTORU</td></tr>
<tr><td>U+7AE1</td><td>竡</td><td>HEKUTORITTO</td><td>HEKUTORITTORU</td></tr>
<tr><td>U+7AF0</td><td>竰</td><td>SENCHIRITTO</td><td>SENCHIRITTORU</td></tr>
<tr><td>U+7CCE</td><td>糎</td><td>SENCHIMEETO</td><td>SENCHIMEETORU</td><td>Consistent with:<br>• U+54AA 咪 MEETORU<br>• U+7C73 米 MEETORU<br>• U+7C75 籵 DEKAMEETORU<br>• U+7C81 粁 KIROMEETORU<br>• U+7C89 粉 DESHIMEETORU<br>• U+7C8D 粍 MIRIMEETORU<br>• U+7CA8 粨 HEKUTOMEETORU</td></tr>
<tr><td>U+7D12</td><td>紒</td><td>YUU MUSUHU</td><td>YUU MUSUBU</td><td><a href="https://tangorin.com/kanji?search=%E7%B4%92">紒 - Kanji - Japanese Dictionary Tangorin</a>:<br>ゆう・むすぶ</td></tr>
<tr><td>U+7D51</td><td>絑</td><td>SHIYU</td><td>??</td><td><a href="https://tangorin.com/kanji?search=%E7%B5%91">絑 - Kanji - Japanese Dictionary Tangorin</a>:<br>??</td></tr>
<tr><td>U+7D7B</td><td>絻</td><td>MOHUKU</td><td>MOFUKU</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+7E65</td><td>繥</td><td>WARAFU TANOSHIMU</td><td>WARAU TANOSHIMU</td><td>わらふ -> わらう (modern Japanese orthography)</td></tr>
<tr><td>U+7E9D</td><td>纝</td><td>MATOFU KARAMERU KURONAWA</td><td>MATOU KARAMERU KURONAWA</td><td>まとふ -> まとう (modern Japanese orthography)</td></tr>
<tr><td>U+8105</td><td>脅</td><td>OBYAKASU ODOSU ODOKASU</td><td>OBIYAKASU ODOSU ODOKASU</td><td>Consistent with:<br>• U+6136 愶 OBIYAKASU</td></tr>
<tr><td>U+810B</td><td>脋</td><td>OBIYAAKASU ODOOSU OTOOKASU</td><td>OBIYAKASU ODOSU ODOKASU</td><td>Consistent with:<br>• U+6136 愶 OBIYAKASU</td></tr>
<tr><td>U+818E</td><td>膎</td><td>HOJISHI NIKU SAKANA HADAHE</td><td>HOJISHI NIKU SAKANA HADAE</td><td>はだへ -> はだえ (modern Japanese orthography)</td></tr>
<tr><td>U+833C</td><td>茼</td><td>SHIYUNGIKU</td><td>SHUNGIKU</td><td>From: 春菊 "spring chrysanthemum"<br>• <a href="https://en.wikipedia.org/wiki/Glebionis_coronaria">Glebionis coronaria</a><br>• <a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A5%E3%83%B3%E3%82%AE%E3%82%AF">シュンギク</a></td></tr>
<tr><td>U+8470</td><td>葰</td><td>SHIYUUGA</td><td>SHOUGA</td><td><a href="https://tangorin.com/kanji?search=%E8%91%B0">葰 - Kanji - Japanese Dictionary Tangorin</a>:<br>しょうが</td></tr>
<tr><td>U+8502</td><td>蔂</td><td>MOTSUKO</td><td>MOKKO</td><td><a href="https://tangorin.com/kanji?search=%E8%94%82">蔂 - Kanji - Japanese Dictionary Tangorin</a>:<br>もっこ</td></tr>
<tr><td>U+85E0</td><td>藠</td><td>RATSUKIYOU</td><td>RAKKYOU</td><td><a href="https://en.wiktionary.org/wiki/%E8%97%A0">藠 - Wiktionary</a>:<br>Kun: らっきょう (rakkyō)</td></tr>
<tr><td>U+85ED</td><td>藭</td><td>SENKIYUU</td><td>SENKYUU</td><td><a href="https://en.wiktionary.org/wiki/%E8%97%AD">藭 - Wiktionary</a>;<br>Kun: せんきゅう (senkyū)</td></tr>
<tr><td>U+8618</td><td>蘘</td><td>MIYOUGA</td><td>MYOUGA</td><td><a href="https://en.wiktionary.org/wiki/%E8%98%98">蘘 - Wiktionary</a>:<br>Kun: みょうが (myōga)</td></tr>
<tr><td>U+8677</td><td>虷</td><td>BOUHURA</td><td>BOUFURA</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+8698</td><td>蚘</td><td>KAICHIYUU HARANOMUSHI</td><td>KAICHUU HARANOMUSHI</td><td><a href="https://en.wiktionary.org/wiki/%E8%9A%98">蚘 - Wiktionary</a>:<br>Kun: かいちゅう (kaichū), はらのむし (haranomushi)</td></tr>
<tr><td>U+86D5</td><td>蛕</td><td>KAICHIYUU</td><td>KAICHUU</td><td><a href="https://tangorin.com/kanji?search=%E8%9B%95">蛕 - Kanji - Japanese Dictionary Tangorin</a>:<br>かいちゅう</td></tr>
<tr><td>U+870E</td><td>蜎</td><td>BOUHURA</td><td>BOUFURA</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+8858</td><td>衘</td><td>KUTSUSHIYU</td><td>?KUTSUWA?</td><td>同【銜・啣】くつわ？</td></tr>
<tr><td>U+8920</td><td>褠</td><td>HITOE HITOHENOTSUTSUSODEUDENUKI AHASE</td><td>HITOE HITOENOTSUTSUSODEUDENUKI AWASE</td><td>ひとへのつつそでうでぬき -> ひとえのつつそでうでぬき<br>あはせ -> あわせ<br>(modern Japanese orthography)</td></tr>
<tr><td>U+8935</td><td>褵</td><td>OBI KINCHIYAKU</td><td>OBI ?KINCHAKU?</td><td>きんちやく -> きんちゃく？</td></tr>
<tr><td>U+8A43</td><td>詃</td><td>IZANAU ITSUHARU</td><td>IZANAU ITSUWARU</td><td>いつはる -> いつわる (modern Japanese orthography)</td></tr>
<tr><td>U+8A47</td><td>詇</td><td>SATOI TSUGERU TOFU KOE</td><td>SATOI TSUGERU TOU KOE</td><td>とふ -> とう (modern Japanese orthography)</td></tr>
<tr><td>U+8A49</td><td>詉</td><td>KAMABISUSHII WARUKUIFU</td><td>KAMABISUSHII WARUKUIU</td><td>わるくいふ -> わるくいう (modern Japanese orthography)</td></tr>
<tr><td>U+8A4D</td><td>詍</td><td>SHIYABIRU</td><td>SHABERU</td><td>Consistent with:<br>• U+546D 呭 SHABERU<br>• U+558B 喋 SHABERU</td></tr>
<tr><td>U+8A65</td><td>詥</td><td>YAHARAGU KANAFU ATSUMARIIFU</td><td>YAWARAGU KANAU ATSUMARIIU</td><td>やはらぐ -> やわらぐ<br>かなふ -> かなう<br>あつまりいふ -> あつまりいう<br>(modern Japanese orthography)</td></tr>
<tr><td>U+8A7E</td><td>詾</td><td>UTSUTAERU IITATERU MICHIRU ODOSU</td><td>UTTAERU IITATERU MICHIRU ODOSU</td><td><a href="https://tangorin.com/kanji?search=%E8%A9%BE">詾 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえる・いいたてる・みちる・おどす</td></tr>
<tr><td>U+8AD1</td><td>諑</td><td>UTSUTAE</td><td>UTTAE</td><td><a href="https://tangorin.com/kanji?search=%E8%AB%91">諑 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえ</td></tr>
<tr><td>U+8B30</td><td>謰</td><td>OSHIYABIRI</td><td>OSHABERI</td><td><a href="https://en.wiktionary.org/wiki/%E8%AC%B0">謰 - Wiktionary</a>:<br>Kun: おしゃべり (oshaberi)</td></tr>
<tr><td>U+8B5E</td><td>譞</td><td>SAKASHII CHIE OHOKUMONOIFU</td><td>SAKASHII CHIE OOKUMONOIU</td><td>おほくものいふ -> おおくものいう (modern Japanese orthography)</td></tr>
<tr><td>U+8CE1</td><td>賡</td><td>TSUGU TSUGUNAFU</td><td>TSUGU TSUGUNAU</td><td>つぐなふ -> つぐなう (modern Japanese orthography)</td></tr>
<tr><td>U+8DBB</td><td>趻</td><td>HURAHURASURU</td><td>FURAFURASURU</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+8E38</td><td>踸</td><td>HURAJURASURU</td><td>FURAFURASURU</td><td>Typo: JURA -> HURA<br>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+8E54</td><td>蹔</td><td>TOTSUSHINSURU</td><td>TOSSHINSURU</td><td><a href="https://tangorin.com/kanji?search=%E8%B9%94">蹔 - Kanji - Japanese Dictionary Tangorin</a>:<br>とっしんする</td></tr>
<tr><td>U+8F00</td><td>輀</td><td>HITSUGIGURUMA JISHIYA</td><td>HITSUGIGURUMA ?JISHA?</td><td>同【轜】？</td></tr>
<tr><td>U+8F5C</td><td>轜</td><td>HITSUGIGU</td><td>HITSUGIGURUMA JISHA</td><td><a href="https://tangorin.com/kanji?search=%E8%BD%9C">轜 - Kanji - Japanese Dictionary Tangorin</a>:<br>ひつぎぐるま・じしゃ</td></tr>
<tr><td>U+8FA1</td><td>辡</td><td>UTSUTAHERU</td><td>UTTAERU</td><td><a href="https://tangorin.com/kanji?search=%E8%BE%A1">辡 - Kanji - Japanese Dictionary Tangorin</a>:<br>うったえる</td></tr>
<tr><td>U+902C</td><td>逬</td><td>HASHIRU HOTOBASHIRU SHIRIZOKERU TSUKAFU</td><td>HASHIRU HOTOBASHIRU SHIRIZOKERU TSUKAU</td><td>つかふ -> つかう (modern Japanese orthography)</td></tr>
<tr><td>U+918E</td><td>醎</td><td>SEISHIYU</td><td>SEISHU</td><td><a href="https://en.wiktionary.org/wiki/%E9%86%8E">醎 - Wiktionary</a>:<br>Kun: せいしゅ (seishu), しおからい (shiokarai)</td></tr>
<tr><td>U+9230</td><td>鈰</td><td>KEN SERYUUMU</td><td>KEN SERIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%AA%E3%82%A6%E3%83%A0">セリウム</a><br><a href="https://tangorin.com/kanji?search=%E9%88%B0">鈰 - Kanji - Japanese Dictionary Tangorin</a>:<br>けん・せりうむ</td></tr>
<tr><td>U+9251</td><td>鉑</td><td>BURACHINA</td><td>PURACHINA</td><td>[<a href="https://github.com/tonton-pixel/Unihan-Japanese-Kun-Error-Report/issues/1">mandel59</a>] 鉑 (platinum) is プラチナ in Japanese, not ブラチナ</td></tr>
<tr><td>U+927E</td><td>鉾</td><td>HOKO KITSUSAKI</td><td>HOKO KISSAKI</td><td>Consistent with:<br>• U+92E9 鋩 HOKOSAKI KISSAKI</td></tr>
<tr><td>U+92C7</td><td>鋇</td><td>ATSUGANE BARYUUMU</td><td>ATSUGANE BARIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%AA%E3%82%A6%E3%83%A0">バリウム</a><br><a href="https://tangorin.com/kanji?search=%E9%8B%87">鋇 - Kanji - Japanese Dictionary Tangorin</a>:<br>あつがね・ばりうむ</td></tr>
<tr><td>U+92C8</td><td>鋈</td><td>SHIROGANE METSUKI</td><td>SHIROGANE MEKKI</td><td><a href="https://tangorin.com/kanji?search=%E9%8B%88">鋈 - Kanji - Japanese Dictionary Tangorin</a>:<br>しろがね・めっき</td></tr>
<tr><td>U+92E9</td><td>鋩</td><td>HOKOSAKI KITSUSAKI</td><td>HOKOSAKI KISSAKI</td><td><a href="https://tangorin.com/kanji?search=%E9%8B%A9">鋩 - Kanji - Japanese Dictionary Tangorin</a>:<br>ほこさき・きっさき・へさき</td></tr>
<tr><td>U+9376</td><td>鍶</td><td>SERYUUMU</td><td>SUTORONCHIUMU</td><td>To be consistent with kDefinition: "strontium; an iron utensil", <em>not</em> "cerium"<br>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B3%E3%83%81%E3%82%A6%E3%83%A0">ストロンチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8D%B6">鍶 - Wiktionary</a>:<br>Kun: ストロンチウム (sutoronchiumu)</td></tr>
<tr><td>U+93B4</td><td>鎴</td><td>SUTORONSHUUMU</td><td>SUTORONCHIUMU</td><td>Usually in katakana: <a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B3%E3%83%81%E3%82%A6%E3%83%A0">ストロンチウム</a><br><a href="https://en.wiktionary.org/wiki/%E9%8E%B4">鎴 - Wiktionary</a>:<br>Kun: ストロンチウム (sutoronchiumu)</td></tr>
<tr><td>U+942F</td><td>鐯</td><td>KUHA OHOSUKI</td><td>KUWA OOSUKI</td><td>くは -> くわ<br>おほすき -> おおすき<br>(modern Japanese orthography)</td></tr>
<tr><td>U+94D3</td><td>铓</td><td>HOKOSAKI KITSUSAKI</td><td>HOKOSAKI KISSAKI</td><td>Simplified variant of U+92E9 鋩</td></tr>
<tr><td>U+957E</td><td>镾</td><td>WATARU TORITSUKUROFU</td><td>WATARU TORITSUKUROU</td><td>とりつくろふ -> とりつくろう (modern Japanese orthography)</td></tr>
<tr><td>U+9657</td><td>陗</td><td>KEHASHIKUTAKAI MATSUSUGUDETAKAI KEHASHII TAKAI KIBISHII SEEMARU KAKURERU SETSUKACHI KEHASHIISAKA</td><td>KEWASHIKUTAKAI MASSUGUDETAKAI KEWASHII TAKAI KIBISHII SEMARU KAKURERU SEKKACHI KEWASHIISAKA</td><td><a href="https://en.wiktionary.org/wiki/%E9%99%97">陗 - Wiktionary</a>:<br>Kun: けわしくたかい (kewashikutakai), まっすぐでたかい (massugudetakai), けわしい (kewashii), たかい (takai), きびしい (kibishii), せまる (semaru), かくれる (kakureru), せっかち (sekkachi), けわしいさか (kewashiisaka)</td></tr>
<tr><td>U+96D8</td><td>雘</td><td>SHINSHIYA</td><td>SHINSHA</td><td><a href="https://en.wiktionary.org/wiki/%E9%9B%98">雘 - Wiktionary</a>:<br>Kun: しんしゃ (shinsha, 雘)</td></tr>
<tr><td>U+9757</td><td>靗</td><td>UKAGAFU</td><td>UKAGAU</td><td>うかがふ -> うかがう (modern Japanese orthography)</td></tr>
<tr><td>U+9780</td><td>鞀</td><td>HURITSUZUMI</td><td>FURITSUZUMI</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+9789</td><td>鞉</td><td>HURITSUZUMI</td><td>FURITSUZUMI</td><td>Use consistent Hepburn romanization for ふ: FU, <em>not</em> HU</td></tr>
<tr><td>U+97BC</td><td>鞼</td><td>TAZUNA TSUYOI KUJIKU KUJIKERU NUHITORIOSHITANAMESHIGAHA</td><td>TAZUNA TSUYOI KUJIKU KUJIKERU NUITORIWOSHITANAMESHIGAWA</td><td><a href="https://tangorin.com/kanji?search=%E9%9E%BC">鞼 - Kanji - Japanese Dictionary Tangorin</a>:<br>たづな・つよい・くじく・くじける・ぬいとりをしたなめしがわこ</td></tr>
<tr><td>U+9B6B</td><td>魫</td><td>SAKANONOKO</td><td>SAKANANOKO</td><td><a href="https://tangorin.com/kanji?search=%E9%AD%AB">魫 - Kanji - Japanese Dictionary Tangorin</a>:<br>さかなのこ</td></tr>
<tr><td>U+9F8F</td><td>龏</td><td>TSUTSUSHIMU NOBORU TOMOSHIBIOHOHI</td><td>TSUTSUSHIMU NOBORU TOMOSHIBIOOI</td><td>ともしびおほひ -> ともしびおおい (modern Japanese orthography)</td></tr>
</table>
