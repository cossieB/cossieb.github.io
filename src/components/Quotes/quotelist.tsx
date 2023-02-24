type Tag = "humor" | "motivational"

interface Quote {
    readonly quote: string,
    readonly author: string,
    readonly tags: Tag[]
}

export const quotes: Quote[] = [
    {
        quote: 'Sometimes, we screw things up for the better.',
        author: 'Nate Heywood',
        tags: ["humor"]
    }, {
        quote: "I have come here to chew bubble gum and kick ass, and I'm all outta bubble gum.",
        author: 'They Live',
        tags: ["humor"]
    }, {
        quote: "That's a W! Let's eat one.",
        author: 'Jameis Winston',
        tags: ["humor"]
    }, {
        quote: "I don't need luck, I have ammo.",
        author: 'Grunt',
        tags: ["humor"]
    }, {
        quote: 'One of the wettest hurricanes from the standpoint of water.',
        author: 'Donald J. Trump',
        tags: ["humor"]
    }, {
        quote: 'All we need is a defense, an offense and a couple of rule changes.',
        author: 'Jason Mendoza',
        tags: ["humor"]
    }, {
        quote: 'How many cells do single-celled organisms have?',
        author: 'Harry Block',
        tags: ["humor"]
    }, {
        quote: 'You could film a rubbish bin all day long, hoping a cat will fall in. Or you could just push a cat in and get it over with.',
        author: 'Jeremy Clarkson',
        tags: ["humor"]
    }, {
        quote: 'We got a bad ass over here',
        author: 'Neil DeGrasse Tyson',
        tags: ["humor"]
    }, {
        quote: "Light Travels Faster Than Sound. That's Why Some Folks Appear Bright Until They Speak.",
        author: 'Unknown',
        tags: ["humor"]
    }, {
        quote: "They don't think it be like it is but it do.",
        author: 'Oscar Gamble',
        tags: ["humor"]
    }, {
        quote: 'Classic, Sinatra. Bad, Phantom of the Opera. Shuffle the deck, I be the queen in the pack. Gotha, Lady Patra.',
        author: 'Iggy Azalea',
        tags: ["humor"]
    }, {
        quote: "Another dangerous alien onboard. Commander, why don't you just collect stamps like normal people?",
        author: "Jeff 'Joker' Moreau",
        tags: ["humor"]
    }, {
        quote: 'Turns out, far too much has been written about great men and not nearly enough about morons.',
        author: 'Tyrion Lannister',
        tags: ["humor"]
    }, {
        quote: "We'll cross that bridge when we burn it.",
        author: 'Billy Butcher',
        tags: ["humor"]
    }, {
        quote: 'Sometimes I tune people out, but mostly because they rarely have anything useful or interesting to say.',
        author: "Miriam 'Midge' Maisel",
        tags: ["humor"]
    }, {
        quote: 'I could have been home on my computer, but noooo someone suggested I grow as a person.',
        author: 'Kinzie Kensington',
        tags: ["humor"]
    }, {
        quote: 'People wrote books and movies that had stories so you cared whose ass it was and why it was farting.',
        author: 'Pvt. Joe Bauers',
        tags: ["humor"]
    }, {
        quote: "But I was a good person for six months. That's like five years.",
        author: 'Eleanor Shellstrop',
        tags: ["humor"]
    }, {
        quote: "Your poker face gives away more than Oprah's favorite things.",
        author: 'Andre Johnson',
        tags: ["humor"]
    }, {
        quote: "I'm not crazy. My mother had me tested.",
        author: 'Sheldon Cooper',
        tags: ["humor"]
    }, {
        quote: "If this comedy thing doesn't work out, I've always got poverty to fall back on.",
        author: 'Trevor Noah',
        tags: ["humor"]
    }, {
        quote: 'We hold these truths to be self-evident. All men and women are created, by the you know, you know the thing.',
        author: 'Joe Biden',
        tags: ["humor"]
    }, {
        quote: 'I reject your reality and substitute my own.',
        author: 'Adam Savage',
        tags: ["humor"]
    }, {
        quote: 'Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang.',
        author: "Lil' Pump",
        tags: ["humor"]
    }, {
        quote: 'The rumors of my death have been greatly exaggerated.',
        author: 'Mark Twain',
        tags: ["humor"]
    }, {
        quote: "If you're referring to the incident with the dragon, I was barely involved.",
        author: 'Gandalf',
        tags: ["humor"]
    }, {
        quote: 'Shutting up, sir.',
        author: 'C-3PO',
        tags: ["humor"]
    }, {
        quote: "You all need more therapy than I do, and I'm the crazy one.",
        author: 'Crazy Jane',
        tags: ["humor"]
    }, {
        quote: `"Normal" ain't nothing but a state of mind.`,
        author: 'Maura Lee Karupt',
        tags: ["humor"]
    }, {
        quote: "We're going to save the world, or whatever, and then I will have a stiff Manhattan and go to bed.",
        author: 'Rita Farr',
        tags: ["humor"]
    }, {
        quote: "You've always been a man comfortable with compromise. I mean, after all, you fell in love with a Canadian.",
        author: 'Mr. Nobody',
        tags: ["humor"]
    }, {
        quote: 'I was happy with people forgetting I exist, but mofos always gotta bring up the past.',
        author: 'Dex',
        tags: ["humor"]
    }, {
        quote: "At least we ain't doing commercials anymore.",
        author: 'Johnny Gat',
        tags: ["humor"]
    }, {
        quote: "You're like the crazy head-butting uncle I never had.",
        author: "Tali'Zorah",
        tags: ["humor"]
    }, {
        quote: "I don't trust anyone who makes more than I do.",
        author: "Jeff 'Joker' Moreau",
        tags: ["humor"]
    }, {
        quote: "Okay, Shepard, glad you're back, but keep an eye out on that last one. We can only hold so much crazy.",
        author: "Jeff 'Joker' Moreau",
        tags: ["humor"]
    }, {
        quote: 'So, Commander, even your Asari are trained killers? You get everyone at the same store or something?',
        author: "Jeff 'Joker' Moreau",
        tags: ["humor"]
    }, {
        quote: 'Broadcasting orders over loudspeakers. Charming.',
        author: 'Miranda Lawson',
        tags: ["humor"]
    }, {
        quote: "We can disobey suicidal orders? Why wasn't I told?",
        author: 'Garrus Vakarian',
        tags: ["humor"]
    }, {
        quote: "Have ruled out artificially intelligent virus... Unless it's very intelligent. And toying with me. Hmm. Tests..",
        author: 'Mordin Solus',
        tags: ["humor"]
    }, {
        quote: 'Rage is one hell of an anesthetic.',
        author: 'Zaeed Masani',
        tags: ["humor"]
    }, {
        quote: "Don't worry, Shepard, I only forget to recycle the Normandy's oxygen when I've discovered something truly interesting.",
        author: 'EDI',
        tags: ["humor"]
    }, {
        quote: 'It is our basic human right to be screw-ups. This civilization was founded on screw-ups and that makes me proud.',
        author: 'Gary King',
        tags: ["humor"]
    }, {
        quote: "You know, I have one simple request, and that is to have sharks with frickin' laser beams attached to their heads!",
        author: 'Dr. Evil',
        tags: ["humor"]
    }, {
        quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
        author: 'Bjarne Stroustrup',
        tags: ["humor"]
    }, {
        quote: 'The market can remain irrational longer than you can stay solvent.',
        author: 'John Maynard Keynes',
        tags: ["humor"]
    }, {
        quote: 'You know, you drive almost slow enough to drive Miss Daisy.',
        author: 'Mike Lowry',
        tags: ["humor"]
    }, {
        quote: 'Snakes. Why did it have to be snakes?',
        author: 'Indiana Jones',
        tags: ["humor"]
    }, {
        quote: "Damned alligator just popped up, cut me down in my prime. He got me, but I tore one of that bastard's eyes out though.",
        author: 'Chubbs',
        tags: ["humor"]
    }, {
        quote: "It's definitely not a good time to be a Nazi.",
        author: 'Yorki',
        tags: ["humor"]
    }, {
        quote: 'Enjoy the attention, kid. Not everyone is lucky enough to look stupid.',
        author: 'Rosie',
        tags: ["humor"]
    }, {
        quote: "Our only friends are the Japanese. And just between you and me, they don't look very Aryan.",
        author: 'Yorki',
        tags: ["humor"]
    }, {
        quote: 'Can I get you a ladder? So you can get off my back.',
        author: 'Warden',
        tags: ["humor"]
    }, {
        quote: "Someday, I'd like to go one week without meeting an insane mage. Just one week.",
        author: 'Hawke',
        tags: ["humor"]
    }, {
        quote: "I don't think 'sense' is really my strong suit.",
        author: 'Hawke',
        tags: ["humor"]
    }, {
        quote: 'You should pay someone else. Like me. I like being paid.',
        author: 'Hawke',
        tags: ["humor"]
    }, {
        quote: 'I have an excellent sense of dramatic timing. And good hair.',
        author: 'Hawke',
        tags: ["humor"]
    }, {
        quote: 'Oh, look—a dragon. What a perfect way to ruin our day.',
        author: 'Dorian Pavus',
        tags: ["humor"]
    }, {
        quote: "We're going to get lost and starve to death, aren't we? A glorious end for the Inquisition.",
        author: 'Dorian Pavus',
        tags: ["humor"]
    }, {
        quote: "I am serious. And don't call me Shirley.",
        author: 'Dr. Rumack',
        tags: ["humor"]
    }, {
        quote: 'House blowing up builds character.',
        author: 'Deadpool',
        tags: ["humor"]
    }, {
        quote: "It's the first time I've ever seen you look ugly. And that makes me kind of happy.",
        author: 'Annie Walker',
        tags: ["humor"]
    }, {
        quote: "It's not a man purse. It's called a satchel. Indiana Jones wears one.",
        author: 'Alan Garner',
        tags: ["humor"]
    }, {
        quote: "Don't point that gun at him. He's an unpaid intern.",
        author: 'Steve Zissou',
        tags: ["humor"]
    }, {
        quote: 'Legen ..... wait for it .......  ndary!',
        author: 'Barney Stinson',
        tags: ["humor"]
    }, {
        quote: 'A lie is just a great story that someone ruined with the truth.',
        author: 'Barney Stinson',
        tags: ["humor"]
    }, {
        quote: 'The best I can give you is a fake smile and dead eyes.',
        author: 'Robin Scherbatsky',
        tags: ["humor"]
    }, {
        quote: 'You find me offensive, I find you offensive. Shit, this is the same verse, I just did this. When am I gonna come to my good senses? Probably the day Bush comes to my defences.',
        author: 'Eminem',
        tags: ["humor"]
    }, {
        quote: 'Conner, for the last time, Thirty Seconds To Mars is the name of a band, not a fact.',
        author: 'Harry',
        tags: ["humor"]
    }, {
        quote: "Stop focussing on Kim and think about you for a second. Now ain't that depressing?",
        author: 'Katt Williams',
        tags: ["humor"]
    }, {
        quote: "I'm too young to die and too old to eat off the kids' menu. What a stupid age I am!",
        author: 'Jason Mendoza',
        tags: ["humor"]
    }, {
        quote: 'Well, my year started a year ago',
        author: 'Jason Mendoza',
        tags: ["humor"]
    }, {
        quote: 'Any time I had a problem, I threw a Molotov cocktail and boom! Right away, I had a different problem.',
        author: 'Jason Mendoza',
        tags: ["humor"]
    }, {
        quote: "I'm So Chinese, I'm An Economics Professor With Lactose Intolerance",
        author: 'Rachel Chu',
        tags: ["humor"]
    }, {
        quote: "I Was Never One To Hold A Grudge, Jeffrey. My Father Held Grudges. I'll Always Hate Him For That.",
        author: 'Pierce Hawthorne',
        tags: ["humor"]
    }, {
        quote: 'Unless I can figure out a compelling reason to keep you here, you will spend eternity with murderers, and arsonists, and people who take off their shoes and socks on commercial airlines.',
        author: 'Michael',
        tags: ["humor"]
    }, {
        quote: "You know, I haven't been this upset since my good friend Taylor was rudely upstaged by my other friend, Kanye, who was defending my best friend, Beyoncé.",
        author: 'Tahani Al-Jamil',
        tags: ["humor"]
    }, {
        quote: 'How Dare She Steal The Identity I Stole?',
        author: 'Eleanor Shellstrop',
        tags: ["humor"]
    }, {
        quote: `In the words of one of my friends: "Ya basic". It's a human insult. You're devastated right now.`,
        author: 'Michael',
        tags: ["humor"]
    }, {
        quote: "If I could only use this power for good I wouldn't, not even if I could.",
        author: 'Eminem',
        tags: ["humor"]
    }, {
        quote: "Britney Spears has shoulders like a man. I can say that and you'll laugh because there's a puppet on my hand",
        author: 'Eminem',
        tags: ["humor"]
    }, {
        quote: "Even though football is life, football is also death. And sometimes football is football too. But mostly football is life!",
        author: "Dani Rojas",
        tags: ["humor"]
    }, {
        quote: "I think if we spent the time we spend thinking about not spending money, spent that time on spending money, then it'd be time well spent.",
        author: "Darius",
        tags: ["humor"]
    }, {
        quote: "Stunting's a kind of a trap. We should probably make a little bit more money before we start showing it off.",
        author: "Earnest 'Earn' Marks",
        tags: ["humor"]
    }, {
        quote: "I would say nice to meet you but I don't believe in time as a concept. So I'll just say \"We always met\"",
        author: "Darius",
        tags: ["humor"]
    }, {
        quote: "I always thought tea was going to taste like hot brown water. And do you know what? I was right.",
        author: "Ted Lasso",
        tags: ["humor"]
    }, {
        quote: "You could fill two internets with what I don't know about football.",
        author: "Ted Lasso",
        tags: ["humor"]
    }, {
        quote: "I'm sort of famous for being almost famous.",
        author: "Keeley Jones",
        tags: ["humor"]
    }, {
        quote: "Old people are so wise. They're like tall Yodas.",
        author: "Jamie Tartt",
        tags: ["humor"]
    }, {
        quote: "I don't drink coffee. My mother always says I was born caffeinated.",
        author: "Dani Rojas",
        tags: ["humor"]
    }, {
        quote: "I was bitten by a king cobra and after five days of agonizing pain, the cobra died",
        author: "Chuck Norris",
        tags: ["humor"]
    }, {
        quote: "Nothing goes over my head. My reflexes are too fast. I would catch it.",
        author: "Drax",
        tags: ["humor"]
    }, {
        quote: "When you're ugly and someone loves you, you know they love you for who you are.",
        author: "Drax",
        tags: ["humor"]
    }, {
        quote: "Can we put the bickering on hold until after we survive this massive space battle.",
        author: "Gamora",
        tags: ["humor"]
    }, {
        quote: "Common sense is not so common",
        author: "Voltaire",
        tags: ["humor"]
    }, {
        quote: "Never spend 6 minutes doing something by hand when you can spend 6 hours failing to automate it.",
        author: "Zhuowei Zhang",
        tags: ["humor"]
    }, {
        quote: "Never put off till tomorrow, what you can do the day after tomorrow.",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "The only thing to do with good advice is pass it on. It is never any use to oneself.",
        author: "Oscar Wilde",
        tags: ["humor"]
    }, {
        quote: "Some cause happiness wherever they go; others whenever they go.",
        author: "Oscar Wilde",
        tags: ["humor"]
    }, {
        quote: "The world is a stage, but the play is badly cast.",
        author: "Oscar Wilde",
        tags: ["humor"]
    }, {
        quote: "I don't want to go to heaven. None of my friends are there.",
        author: "Oscar Wilde",
        tags: ["humor"]
    }, {
        quote: "Classic - A book people praise and don't read.",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "Never argue with idiots, they will drag you down to their level and beat you with experience.",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "Politicians and diapers must be changed often, and for the same reason.",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "Nothing travels faster than the speed of light with the possible exception of bad news, which obeys its own special laws.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "I love deadlines. I love the whooshing noise they make as they go by.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of fools.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "What can be asserted without evidence can be dismissed without evidence.",
        author: "Christopher Hitchens",
        tags: ["humor"]
    }, {
        quote: "The real problem is not whether machines think, but whether men do.",
        author: "B.F Skinner",
        tags: ["humor"]
    }, {
        quote: "It has been said that democracy is the worst form of government except all the others that have been tried",
        author: "Winston Churchill",
        tags: ["humor"]
    }, {
        quote: "You can get more of what you want with a kind word and a gun than you can with just a kind word",
        author: "Al Capone",
        tags: ["humor"]
    }, {
        quote: "People can have the Model T in any color - so long as it's black",
        author: "Henry Ford",
        tags: ["humor"]
    }, {
        quote: "Everything in life is somewhere else, and you get there in a car.",
        author: "E.B White",
        tags: ["humor"]
    }, {
        quote: "When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist",
        author: "Dom Helder Camara",
        tags: ["humor"]
    }, {
        quote: "Never trust a computer you can't throw out a window.",
        author: "Steve Wozniak",
        tags: ["humor"]
    }, {
        quote: "Tonight, instead of discussing the existence of or non-existence of God, they have decided to fight for it.",
        author: "Monty Python",
        tags: ["humor"]
    }, {
        quote: "There are a great many people in the country today, who through no fault of their own, are sane.",
        author: "Rev. Artuhur Belling Graham Chapman",
        tags: ["humor"]
    }, {
        quote: "Let's not bicker and argue about who killed who.",
        author: "Monty Python",
        tags: ["humor"]
    }, {
        quote: "Reading is for morons who can't understand pictures.",
        author: "Gareth",
        tags: ["humor"]
    }, {
        quote: "I banished the king so technically I am the true King of Valencia, and it would *really* mean a lot to me if I was treated as such.",
        author: "Gareth",
        tags: ["humor"]
    }, {
        quote: 'Your moment of glory will come, young Galavant. Be patient, be ready, and also, never get married.',
        author: "Arnold",
        tags: ["humor"]
    }, {
        quote: "You won't burn in hell, but be nice anyways.",
        author: "Ricky Gervais",
        tags: ["humor"]
    }, {
        quote: "While I subscribe to the many worlds theory which posits the existence of infinite Sheldons in infinite universes - I assure you that in none of them am I dancing",
        author: "Sheldon Cooper",
        tags: ["humor"]
    }, {
        quote: "I found the grinch to be a relatable, engaging character, and I was really with him until he succumbed to social convention and returned the presents and saved Christmas. What a buzzkill that was",
        author: "Sheldon Cooper",
        tags: ["humor"]
    }, {
        quote: "One cries because one is sad. For example, I cry because others are stupid and it makes me sad",
        author: "Sheldon Cooper",
        tags: ["humor"]
    }, {
        quote: "As my mom used to say, 'When you're doing a puzzle, it's like you've got a thousand friends.' She was full of fun lies like that.",
        author: "Amy Farrah Fowler",
        tags: ["humor"]
    }, {
        quote: "I don't want to stand in the way of your happiness. So, I will condemn you internally while maintaining an outward appearance of acceptance",
        author: "Sheldon Cooper",
        tags: ["humor"]
    }, {
        quote: "Make the plan, execute the plan, expect the plan to go off the rails, throw away the plan",
        author: "Leonard Snart",
        tags: ["humor"]
    }, {
        quote: "We know how to case banks. We're practically bankers.",
        author: "Mick Rory",
        tags: ["humor"]
    }, {
        quote: "The problem with the French is that they don't have a word for entrepreneur",
        author: "George W. Bush",
        tags: ["humor"]
    }, {
        quote: "The problem with Scotland is that it's full of Scots.",
        author: "King Edward 'Longshanks'",
        tags: ["humor"]
    }, {
        quote: "Maybe that's what family is. The people you don't mind being annoyed by.",
        author: "Sara Lance",
        tags: ["humor"]
    }, {
        quote: "I'm already a blind, time-travelling paragon who can see the future, so might as well just add wannabe god to the list.",
        author: "Sara Lance",
        tags: ["humor"]
    }, {
        quote: "Are you a professional moron or just a gifted amateur?",
        author: "C.J",
        tags: ["humor"]
    }, {
        quote: "I'm a well dressed maniac",
        author: "C.J",
        tags: ["humor"]
    }, {
        quote: "Think of how stupid the average person is, then realize half of them are dumber than that.",
        author: "George Carlin",
        tags: ["humor"]
    }, {
        quote: "It wasn't a lie it was alternative facts.",
        author: "Kellyanne Conway",
        tags: ["humor"]
    }, {
        quote: "All your life the world has been trying to make you less of a man. Light beer. Veggie burgers. Automatic transmission",
        author: "Johnny Lawrence",
        tags: ["humor"]
    }, {
        quote: "She marries this guy named Calvert, they move to Cedar Rapids. Now Calvert's dead and from what I hear Cedar Rapids is dead",
        author: "Lewis Bodine",
        tags: ["humor"]
    }, {
        quote: "Okay, so she's a very old goddamned liar. I've done the background on this woman all the way to the twenties when she was working as an actress. An actress! There's your first clue, Sherlock",
        author: "Lewis Bodine",
        tags: ["humor"]
    }, {
        quote: "Rugby is a good occasion for keeping thirty bullies far from the centre of the city.",
        author: "Oscar Wilde",
        tags: ["humor"]
    }, {
        quote: "Golf - a gentleman's game played by gentlemen. Rugby - a thug's game played by gentlemen. Soccer - a gentleman's game played by thugs. Rugby League - a thug's game played by thugs.",
        author: "Unknown",
        tags: ["humor"]
    }, {
        quote: "People say, 'Since you got rich and famous, you've become insufferable.' I say, 'That's not true. I've always been insufferable.",
        author: "Shannon Sharpe",
        tags: ["humor"]
    }, {
        quote: "You're only great if you win. I mean, Alexander wasn't Alexander the Mediocre or Alexander the Average. He was Alexander the Great, and there's a reason for it.",
        author: "Shannon Sharpe",
        tags: ["humor"]
    }, {
        quote: "The process of getting old is a question of mind over matter: If you don't mind, it doesn't matter",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "In this world nothing can be said to be certain, except death and taxes.",
        author: "Benjamin Franklin",
        tags: ["humor"]
    }, {
        quote: "The ancient Oracle said that I was the wisest of all the Greeks. It is because I alone, of all the Greeks, know that I know nothing.",
        author: "Socrates",
        tags: ["humor"]
    }, {
        quote: "As it turns out, Mount Kilimanjaro is not wi-fi enabled, so I had to spend two weeks in Tanzania talking to the people in my trip.",
        author: "Nancy Bonds",
        tags: ["humor"]
    }, {
        quote: "I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.",
        author: "Winston Churchill",
        tags: ["humor"]
    }, {
        quote: "I don't believe in astrology; I'm a Sagittarius and we're skeptical.",
        author: "Arthur C. Clarke",
        tags: ["humor"]
    }, {
        quote: "I shot an arrow into the air. It fell to earth, I knew not where.",
        author: "Henry Wadsworth Longfellow",
        tags: ["humor"]
    }, {
        quote: "Writing is easy. All you have to do is cross out the wrong words.",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "Don't reinvent the wheel, just realign it.",
        author: "Anthony D'Angelo",
        tags: ["humor"]
    }, {
        quote: "Money, if it does not bring you happiness, will at least help you be miserable in comfort.",
        author: "Helen Gurley Brown",
        tags: ["humor"]
    }, {
        quote: "A man on a horse is spiritually as well as physically bigger than a man on foot.",
        author: "John Steinbeck",
        tags: ["humor"]
    }, {
        quote: "The four building blocks of the universe are fire, water, gravel and vinyl",
        author: "Dave Barry",
        tags: ["humor"]
    }, {
        quote: "Normal people believe that if it ain't broke, don't fix it. Engineers believe that if it ain't broke, it doesn't have enough features yet.",
        author: "Scott Adams",
        tags: ["humor"]
    }, {
        quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in",
        author: "Edsger Dijkstra",
        tags: ["humor"]
    }, {
        quote: "There is no easy way to train an apprentice. My two tools are example and nagging",
        author: "Lemony Snicket",
        tags: ["humor"]
    }, {
        quote: "If you owe the bank $100 that's your problem. If you owe the bank $100 million, that's the bank's problem",
        author: "J. Paul Getty",
        tags: ["humor"]
    }, {
        quote: "I saw a bank that said '24-Hour Banking,' but I didn't have that much time.",
        author: "Steven Wright",
        tags: ["humor"]
    }, {
        quote: "Astronomy's much more fun when you're not an astronomer",
        author: "Brian May",
        tags: ["humor"]
    }, {
        quote: "Apart from the sanitation, the medicine, education, wine, public order, roads, the fresh water system, and public health … what have the Romans ever done for us?",
        author: "Graham Chapman",
        tags: ["humor"]
    }, {
        quote: "Never criticize a rifleman until you have walked a mile in his shoes. That way, he'll be barefoot and you'll be out of range.",
        author: "The 2nd Target Company",
        tags: ["humor"]
    }, {
        quote: "If you can walk away from a landing, it's a good landing. If you use the airplane the next day, it's an outstanding landing",
        author: "Chuck Yeager",
        tags: ["humor"]
    }, {
        quote: "If it weren't for electricity, we'd all be watching television by candlelight.",
        author: "George Gobel",
        tags: ["humor"]
    }, {
        quote: "Benjamin Franklin may have discovered electricity, but it was the man who invented the meter who made the money.",
        author: "Earl Wilson",
        tags: ["humor"]
    }, {
        quote: "Radio is the theater of the mind; television is the theater of the mindless.",
        author: "Steve Allen",
        tags: ["humor"]
    }, {
        quote: "Chemists do not usually stutter. It would be very awkward if they did, seeing that they have at times to get out such words as methylethylamylophenylium.",
        author: "Sir William Crookes",
        tags: ["humor"]
    }, {
        quote: "If God had really intended men to fly, He'd make it easier to get to the airport.",
        author: "George Winters",
        tags: ["humor"]
    }, {
        quote: "To err is human, but to really foul things up you need a computer.",
        author: "Paul R. Ehrlich",
        tags: ["humor"]
    }, {
        quote: "The good thing about computers is that they do what you tell them to do. The bad thing is that they do what you tell them to do.",
        author: "Ted Nelson",
        tags: ["humor"]
    }, {
        quote: "The single biggest problem in communication is the illusion that it has taken place.",
        author: "Geroge Bernard Shaw",
        tags: ["humor"]
    }, {
        quote: "I've lived through some terrible things in my life, some of which actually happened.",
        author: "Mark Twain",
        tags: ["humor"]
    }, {
        quote: "I'm the most humble person you'll ever meet",
        author: "Donald Trump",
        tags: ["humor"]
    }, {
        quote: "Well, well, well. If it isn't the consequences of my own actions",
        author: "geraldinreverse",
        tags: ["humor"]
    }, {
        quote: "Doing business without advertising is like winking at a girl in the dark. You know what you are doing but nodbody else does.",
        author: "Steuart Henderson Britt",
        tags: ["humor"]
    }, {
        quote: "Reflect that whatever misfortune is your lot, it could only be worse in Milwaukee",
        author: "National Lampoon's Deteriorata",
        tags: ["humor"]
    }, {
        quote: "Two wrongs don't make a right, but three lefts do",
        author: "Harold A. Lerch",
        tags: ["humor"]
    }, {
        quote: "If you're not cheating, you're not trying.",
        author: "Eddie Guerrero",
        tags: ["humor"]
    }, {
        quote: "Out on the town having the time of my life with a bunch of friends. They're all just out of frame, laughing too.",
        author: "Nathan Fielder",
        tags: ["humor"]
    }, {
        quote: "There is no sunrise so beautiful that it is worth waking me up to see it.",
        author: "Mindy Kaling",
        tags: ["humor"]
    }, {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        author: "Elbet Hubbard",
        tags: ["humor"]
    }, {
        quote: "Had I known that you'd be so willing to sacrifice yourself to save the world I wouldn't have tried to kill you.",
        author: "Matt Miller",
        tags: ["humor"]
    }, {
        quote: "Sometimes I hate being right.",
        author: "Chrisjen Avasarala",
        tags: ["humor"]
    }, {
        quote: "I want to die peacefully in my sleep like my grandfather, not screaming in terror like his passengers.",
        author: "Jack Handey",
        tags: ["humor"]
    }, {
        quote: "I'll have what Dr.V is having. The exact same order. If he has a fly in his thing I want a fly in mine but put the fly on the side coz I don't eat no flies. They walk on crap",
        author: "Sheriff Mike Thompson",
        tags: ["humor"]
    }, {
        quote: "To iterate is human, to recurse divine.",
        author: "Peter Deutsh",
        tags: ["humor"]
    }, {
        quote: "Bitcoin is everything you don't understand about money, combined with everything you don't understand about computers.",
        author: "John Oliver",
        tags: ["humor"]
    }, {
        quote: "Ladies if you follow these instructions exactly you might be able to pull you a rapper, NBA player, man, at least a dude with a car.",
        author: "Kanye West",
        tags: ["humor"]
    }, {
        quote: "He's spending a year dead for tax reasons.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "If I were not an atheist, I think I would have to be a Catholic because if it wasn't the forces of natural selection that designed fish, it must have been an Italian.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "There is a feeling which persists in England that making a sandwich interesting, attractive or pleasant to eat is something sinful that only foreigners do.",
        author: "Douglas Adams",
        tags: ["humor"]
    }, {
        quote: "Music to drown by. Now I know I'm in first class",
        author: "Tommy Ryan",
        tags: ["humor"]
    }, {
        quote: "You know it's a law of nature. Nothing good ever happens in Long Island",
        author: "Charles Haden Savage",
        tags: ["humor"]
    }, {
        quote: "Sometimes a second chance is just another chance to get it wrong.",
        author: "Cinda Canning",
        tags: ["humor"]
    }, {
        quote: "If you want to become a millionaire, start with a billion dollars and launch a new airline",
        author: "Richard Branson",
        tags: ["humor"]
    }, {
        quote: "If I lacked self-awareness, I think I'd know",
        author: "Britta Perry",
        tags: ["humor"]
    }, {
        quote: "The best phone call is a text. The second best phone call is an email and the third best is two traded voice mails.",
        author: "John Oliver",
        tags: ["humor"]
    }, {
        quote: "This is the day you will always remember as the day you almost caught Captain Jack Sparrow.",
        author: "Jack Sparrow",
        tags: ["humor"]
    }, {
        quote: "I'm dishonest, and a dishonest man you can always trust to be dishonest. Honestly. It's the honest ones you want to watch out for, because you can never predict when they're going to do something incredibly stupid.",
        author: "Jack Sparrow",
        tags: ["humor"]
    }, {
        quote: `Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems.`,
        author: "Jamie Zawinski",
        tags: ["humor"]
    }, {
        quote: "C makes it easy to shoot yourself in the foot; C++ makes it harder, but wheen you do it blows your whole leg off",
        author: "Bjarne Stroustrup",
        tags: ["humor"]
    }, {
        quote: "A turbo is god's way of saying there isn't enough cylinders",
        author: "The American",
        tags: ["humor"]
    }, {
        quote: "The strength of JavaScript is that you can do anything. The weakness is that you will.",
        author: "Reg Braithwaite",
        tags: ["humor"]
    }, {
        quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
        author: "Captain Spaulding",
        tags: ["humor"]
    }, {
        quote: "It depends on what the meaning of 'is' is.",
        author: "Bill Clinton",
        tags: ["humor"]
    }, {
        quote: "For every complex problem there is an answer that is clear, simple, and wrong.",
        author: "H.L. Mencken",
        tags: ["humor"]
    }, {
        quote: "I feel bad for our country, but this is tremendous content.",
        author: "Darren Rovell",
        tags: ["humor"]
    }, {
        quote: 'issuing correction on a previous post of mine, regarding the terror group ISIL. you do not, under any circumstances, "gotta give it to them"',
        author: "dril",
        tags: ["humor"]
    }, {
        quote: "im not owned! im not owned!!, i continue to insist as i slowly shrink and transform into a corn cob",
        author: "dril",
        tags: ["humor"]
    }, {
        quote: "and another thing: im not mad. please dont put in the newspaper that i got mad",
        author: "dril",
        tags: ["humor"]
    }, {
        quote: "It is better to remain silent and be thought a fool than to talk and remove all doubt.",
        author: "unknown",
        tags: ["humor"]
    }, {
        quote: "Why are you the way that you are? Honestly, every time I try to do something fun or exciting you make it not that way.",
        author: "Michael Scott",
        tags: ['humor']
    }, {
        quote: "Premature optimization is the root of all evil.",
        author: "Donald Knuth",
        tags: ['humor']
    }, {
        quote: "Don't take it so personally, okay? I don't like most people. He's in the vast majority.",
        author: "Jonathan Byers",
        tags: ['humor']
    }, {
        quote: "Okay it's official. I'm never having kids.",
        author: "Dustin Henderson",
        tags: ['humor']
  }
]
