export const SKYWARS = {
	TITLE : 'SkyWars',
	INITIAL_XP: [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000],
	RECURRING_XP: 10000,
	PRESTIGES : [
		{level: 0,   color: 'gray', name: 'None'}, 
		{level: 5,   color: 'white', name: 'Iron'}, 
		{level: 10,  color: 'gold', name: 'Gold'}, 
		{level: 15,  color: 'aqua', name: 'Diamond'}, 
		{level: 20,  color: 'darkgreen', name: 'Emerald'}, 
		{level: 25,  color: 'darkaqua', name: 'Sapphire'}, 
		{level: 30,  color: 'darkred', name: 'Ruby'}, 
		{level: 35,  color: 'pink', name: 'Crystal'}, 
		{level: 40,  color: 'blue', name: 'Opal'}, 
		{level: 45,  color: 'purple', name: 'Amethyst'}, 
		{level: 50,  color: 'rainbow', name: 'Rainbow'}, 
		{level: 60, color: 'rainbow', name: 'Mythic'},
		{level: 100, color: 'rainbow font-bold', name: 'Mythic'}
	],
	ICONS : {
		default: '\u22c6',
		angel_1: '\u2605',
		angel_2: '\u2606',
		angel_3: '\u2055',
		angel_4: '\u2736',
		angel_5: '\u2733',
		angel_6: '\u2734',
		angel_7: '\u2737',
		angel_8: '\u274b',
		angel_9: '\u273c',
		angel_10: '\u2742',
		angel_11: '\u2741',
		angel_12: '\u262c',
		iron_prestige: '\u2719',
		gold_prestige: '\u2764',
		diamond_prestige: '\u2620',
		emerald_prestige: '\u2726',
		sapphire_prestige: '\u270c\uFE0E', // Uses symbol instead of emoji
		ruby_prestige: '\u2766',
		crystal_prestige: '\u2735',
		opal_prestige: '\u2763',
		amethyst_prestige: '\u262f',
		rainbow_prestige: '\u273a',
		mythic_prestige: '\u0ca0_\u0ca0',
		favor_icon: '\u2694',
		omega_icon: '\u03a9',
	},
	MODES : [
		{id: '_ranked',       name: 'Ranked'},
		{id: '_solo_normal',  name: 'Solo Normal'},
		{id: '_solo_insane',  name: 'Solo Insane'},
		{id: '_team_normal',  name: 'Teams Normal'},
		{id: '_team_insane',  name: 'Teams Insane'},
		{id: '_mega_normal',  name: 'Mega'},
		{id: '_mega_doubles', name: 'Mega Doubles'},
		{id: '', name: 'Overall'},
	],
	HEADS : [
		{id: 'eww',       name: 'Eww!',      color: 'darkgray'},
		{id: 'yucky',     name: 'Yucky!',    color: 'gray'},
		{id: 'meh',       name: 'Meh',       color: 'white'},
		{id: 'decent',    name: 'Decent',    color: 'yellow'},
		{id: 'salty',     name: 'Salty',     color: 'green'},
		{id: 'tasty',     name: 'Tasty',     color: 'darkaqua'},
		{id: 'succulent', name: 'Succulent', color: 'pink'},
		{id: 'sweet',     name: 'Sweet',     color: 'aqua'},
		{id: 'divine',    name: 'Divine',    color: 'gold'},
		{id: 'heavenly',  name: 'Heavenly',  color: 'purple'},
	],
}