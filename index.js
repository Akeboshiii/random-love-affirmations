import express from 'express'
const app = express()
const port = 3000

const affirmations = [
  { "lang": "Filipino", "affirmation": "Ang puso ko ay parang kape—lagi kang nagpapasarap sa bawat umaga." },
  { "lang": "Filipino", "affirmation": "Hindi man ako marunong magluto, ikaw pa rin ang pinaka-masarap na parte ng buhay ko." },
  { "lang": "Filipino", "affirmation": "Parang signal lang ng WiFi, mas lumalakas ako kapag malapit ka." },
  { "lang": "Filipino", "affirmation": "Ang mundo ko ay parang pelikula, at ikaw ang best plot twist." },
  { "lang": "Filipino", "affirmation": "Kung exams ka, handa akong magpuyat para lang ipasa mo ako." },
  { "lang": "Filipino", "affirmation": "Ikaw ang dahilan kung bakit lagi akong naka-full charge." },
  { "lang": "Filipino", "affirmation": "Para kang ulan sa tag-init—laging inaabangan, laging masaya kapag dumadating." },
  { "lang": "Filipino", "affirmation": "Hindi ako marunong mag-diet kasi ikaw ang paborito kong kainin ng tingin." },
  { "lang": "Filipino", "affirmation": "Kahit walang load, sapat na ang boses mo para sumaya ako." },
  { "lang": "Filipino", "affirmation": "Para kang alarm clock, hindi ako makabangon nang wala ka." },
  { "lang": "Filipino", "affirmation": "Kahit traffic sa EDSA, basta ikaw ang katabi, smooth ride pa rin." },
  { "lang": "Filipino", "affirmation": "Ikaw ang dahilan kung bakit laging trending ang puso ko." },
  { "lang": "Filipino", "affirmation": "Walang cheat code sa’yo, pero willing akong maglaro habang buhay." },
  { "lang": "Filipino", "affirmation": "Kung ikaw ay meme, ikaw ang pinaka-relatable at lovable." },
  { "lang": "Filipino", "affirmation": "Hindi ako nagbabasa ng horoscope, kasi ikaw ang destiny ko." },
  { "lang": "Filipino", "affirmation": "Kung meron mang forever, ikaw ‘yon." },
  { "lang": "Filipino", "affirmation": "Para kang 13th month pay—lagi kong hinihintay." },
  { "lang": "Filipino", "affirmation": "Ikaw ang playlist na hindi ko kayang i-skip." },
  { "lang": "Filipino", "affirmation": "Para kang jeep, kahit puno, lagi akong sasabit." },
  { "lang": "Filipino", "affirmation": "Ang puso ko, parang MRT—lagi kang priority seat." },

  { "lang": "Bisaya", "affirmation": "Kung cellphone ko ikaw, dili gyud tika i-lowbat." },
  { "lang": "Bisaya", "affirmation": "Murag kape, ikaw ang akong reason nga energized ko pirmi." },
  { "lang": "Bisaya", "affirmation": "Bisan unsa ka busy, naa gihapon kay VIP seat sa akong kasingkasing." },
  { "lang": "Bisaya", "affirmation": "Murag signal sa Globe, lisod pero worth it kaayo." },
  { "lang": "Bisaya", "affirmation": "Ikaw ang akong favorite nga notification." },
  { "lang": "Bisaya", "affirmation": "Murag suga sa brownout, ikaw akong paglaum." },
  { "lang": "Bisaya", "affirmation": "Dili ko kabalo mag-budget, pero ikaw pirmi akong priority." },
  { "lang": "Bisaya", "affirmation": "Murag TikTok, dili ko kapoyan tan-aw sa imo." },
  { "lang": "Bisaya", "affirmation": "Ikaw ang akong unlimited rice." },
  { "lang": "Bisaya", "affirmation": "Murag ulan sa May, unexpected pero refreshing." },
  { "lang": "Bisaya", "affirmation": "Ikaw ang akong Google—naa kay tubag sa tanan." },
  { "lang": "Bisaya", "affirmation": "Kung playlist ka, ikaw akong repeat all." },
  { "lang": "Bisaya", "affirmation": "Murag jeep, bisan puno kaayo akong adlaw, ikaw gihapon akong sabitan." },
  { "lang": "Bisaya", "affirmation": "Kung k-drama ka, dili gyud ko kapugong binge-watch." },
  { "lang": "Bisaya", "affirmation": "Ikaw ang akong lucky charm, bisan way sweldo." },
  { "lang": "Bisaya", "affirmation": "Murag milk tea, makabusog ug makalipay." },
  { "lang": "Bisaya", "affirmation": "Dili ka man wifi, pero ikaw ang akong connection." },
  { "lang": "Bisaya", "affirmation": "Kung subject ka, honor student ko tungod nimo." },
  { "lang": "Bisaya", "affirmation": "Murag jeepney fare, barato lang pero priceless para nako." },
  { "lang": "Bisaya", "affirmation": "Ikaw ang akong rason nganong dili ko gusto matulog." },

  { "lang": "English", "affirmation": "You’re like my favorite app—I can’t go a day without opening you." },
  { "lang": "English", "affirmation": "You’re the WiFi my heart automatically connects to." },
  { "lang": "English", "affirmation": "If love were currency, you’d be my lifetime savings." },
  { "lang": "English", "affirmation": "You’re the playlist I never skip." },
  { "lang": "English", "affirmation": "If kisses were likes, you’d go viral instantly." },
  { "lang": "English", "affirmation": "You’re the reason my Mondays don’t feel like Mondays." },
  { "lang": "English", "affirmation": "If my heart had a notification bar, you’d always be pinned." },
  { "lang": "English", "affirmation": "You’re the charger my soul plugs into." },
  { "lang": "English", "affirmation": "If you were a meme, you’d be the one everyone relates to." },
  { "lang": "English", "affirmation": "You’re my favorite plot twist." },
  { "lang": "English", "affirmation": "If love were WiFi, you’d be the strongest signal." },
  { "lang": "English", "affirmation": "You’re the dream I don’t want to snooze." },
  { "lang": "English", "affirmation": "You’re like my morning coffee—without you, I can’t function." },
  { "lang": "English", "affirmation": "You’re the forever in my playlist." },
  { "lang": "English", "affirmation": "You’re my life’s trending topic." },
  { "lang": "English", "affirmation": "If love had a search bar, your name would be the top result." },
  { "lang": "English", "affirmation": "You’re the bug in my system I’ll never fix." },
  { "lang": "English", "affirmation": "If love was a game, you’d be my final boss and prize." },
  { "lang": "English", "affirmation": "You’re the best push notification ever." },
  { "lang": "English", "affirmation": "If happiness were downloadable, you’d be my favorite file." },

  { "lang": "Ilonggo", "affirmation": "Indi ka man rice cooker, pero ikaw ang nagahatag init sang akon adlaw." },
  { "lang": "Ilonggo", "affirmation": "Murag kape sa umaga, ikaw ang nagapukaw sang akon kalipay." },
  { "lang": "Ilonggo", "affirmation": "Ikaw ang akon unlimited load sa gugma." },
  { "lang": "Ilonggo", "affirmation": "Kung jeep ka, indi ko gid pagpalampason." },
  { "lang": "Ilonggo", "affirmation": "Para ka softdrinks, sweet kag refreshing pirmi." },
  { "lang": "Ilonggo", "affirmation": "Indi ka man WiFi, pero ikaw ang akon signal nga kusog." },
  { "lang": "Ilonggo", "affirmation": "Kung series ka, binge-watchon ta ka adlaw-adlaw." },
  { "lang": "Ilonggo", "affirmation": "Ikaw ang akon 13th month pay—pinaka-expected nga regalo." },
  { "lang": "Ilonggo", "affirmation": "Kung foodpanda order ka, ikaw ang indi ko gusto ma-cancel." },
  { "lang": "Ilonggo", "affirmation": "Indi ka man game, pero ikaw ang pinaka-addicting sa akon." },
  { "lang": "Ilonggo", "affirmation": "Kung cellphone ka, ikaw ang akon favorite nga app." },
  { "lang": "Ilonggo", "affirmation": "Ikaw ang bugal nga indi ko na kaya itago." },
  { "lang": "Ilonggo", "affirmation": "Kung ulan ka, indi ko na gusto nga magpayong." },
  { "lang": "Ilonggo", "affirmation": "Ikaw ang pinaka-sweet nga dessert sa akon life." },
  { "lang": "Ilonggo", "affirmation": "Murag jeep nga puno, pero ikaw gid ya ang sabitan ko." },
  { "lang": "Ilonggo", "affirmation": "Kung kanta ka, indi ko pag-skipon bisan isa ka bes." },
  { "lang": "Ilonggo", "affirmation": "Indi ka man Netflix, pero ikaw ang akon binge favorite." },
  { "lang": "Ilonggo", "affirmation": "Kung chat ka, ikaw ang always seen first." },
  { "lang": "Ilonggo", "affirmation": "Ikaw ang emoji nga permi ko ginagamit sa akon kabuhi." },
  { "lang": "Ilonggo", "affirmation": "Kung taxi ka, indi ko gid pagpa-‘meter off’." }
]


app.get('/', (req, res) => {
    res.status(200).json('')
})


app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})