const goblins = {
    id: 'goblins',
    title: 'You Encounter a Camp of Goblins',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'https://cdn.inprnt.com/thumbs/29/2c/292ce23d2141ccab5f2c3cabeb81ce15.jpg?response-cache-control=max-age=2628000',
    description: `
        As it turns to dusk you stumble across a camp of Goblins. They are all armed as they keep watch of their supplies.
    `,
    choices: [{
        id: 'negotiate',
        description: 'Try to Charm Your Way Out',
        result: `
            You make conversation with the disgusting little grunts and bond over a mutual hatred of vegetables. After sharing a meal they send you on your way with some extra supplies
        `,
        hp: 0,
        gold: 45
    }, {
        id: 'fight',
        description: 'Engage in Combat',
        result: `
            Trading blows, you and the litte devils fight until none of them are left standing. Exhausted and wounded you relax looking at all the supplies you now possess.
        `,
        hp: -55,
        gold: 50
    }, {
        id: 'stealth',
        description: 'Sneak around the camp',
        result: `
            As you are passing by a twig snaps under foot, alerting the goblins of your presence. Their archers take aim and launch a barrage of arrows. One strikes you in the knee and your adventuring days are over.`,
        hp: -100,
        gold: 0
    }]
};

const werewolf = {
    id: 'werewolf',
    title: 'A Run in With a Werewolf',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'https://i.ytimg.com/vi/cHv-fPVJLMA/maxresdefault.jpg',
    description: `
        You enter the gates to a beautiful village. When you take acloser look you see massive claw marks on the gate doors. The locals tell you how every full moon a massive werewolf terrorizes the village. When they hear of your grand adventures they ask you for your help.
    `,
    choices: [{
        id: 'refuse',
        description: 'Decline to Help',
        result: `
            The people scowl at you and tell you that you will pay for your cowardice. The next morning you wake up with nothing but the clothes on your back.
        `,
        hp: 0,
        gold: -100
    }, {
        id: 'fight',
        description: 'Offer to Defeat the Beast',
        result: `
            You heroicly step in when the people need you the most. As it turns out, you are a werewolf fighting prodgiy. You escape the battle unscathed and become an instant legend. With the notorioty comes wealth as well.
        `,
        hp: 0,
        gold: 10000000
    }, {
        id: 'investigate',
        description: 'Investigate to Find the Werewolf Before They Turn',
        result: `
            You take a second look at the damaged gate and find faint paw prints leading into the nearby woods. Following them further and further away from the village you find tattered pieces of cloth. Sitting on a log you see a man in ripped clothes with his head in his hands. You strike up a conversation and actually enjoy each others company. Later you go to the pub with him and grab some IPAs (great choice). You dont gain any gold but you gain something more valuable.... friendship :)
        `,
        hp: 0,
        gold: 0
    }]
};

const fork = {
    id: 'fork',
    title: 'You Arrive at a Fork in the Road',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'https://th.bing.com/th/id/R.f8d2659f372b3ac02c6fa57c05e828c0?rik=nTFI9kfsm1W9Pg&riu=http%3a%2f%2fjlcollinsnh.com%2fwp-content%2fuploads%2f2015%2f02%2fcrossroads.jpg&ehk=moXqvh%2bSK2V%2bj47TVRbCGLDZO72gyCpjEEQtfOV4SaA%3d&risl=&pid=ImgRaw&r=0',
    description: `
        Tired from traveling for miles you arrive at a 3 way fork in the road. The sign to the left promises infinite wisdom. The sign to the right says infinite fortune. The sign straight ahead simply reads continue on this path.
    `,
    choices: [{
        id: 'left',
        description: 'Go Left to Infinite Wisdom',
        result: 'You turn left and continue on your way when a devine being descends from the clouds. The being blesses you with intermediate JavaScript knowledge. While it isnt infinite it is harder to grap that you might think. This lands you a stable job.',
        hp: 0,
        gold: 100
    }, {
        id: 'right',
        description: 'Go Right to Infinite Fortune',
        result: 'After walking a short distance  you come upon a massive mound of gold coins. You climb toward the top giddy with excitement. Your foot slips and the gold gives way on top of you, crushing you under its weight.',
        hp: -500,
        gold: 0
    }, {
        id: 'straight',
        description: 'Continue Straight',
        result: 'You conitinue on the path you have been on. You have made it this far you can keep going. Exhaustion cripples your progress but you keep pushing forward. Finally you come across ... well idk whatever you have  been working towards. Your persistence pays off ',
        hp: -35,
        gold: 80000
    }]
};

const quests = [
    goblins, 
    fork,
    werewolf,
];

export default quests;