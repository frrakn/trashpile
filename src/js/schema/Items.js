function scrape() {
  var items = {};
  $('#item-grid-content [data-rg-id]').each(function(i, el) {
    var $el = $(el);
    items[$el.data('rg-id')] = {
      name: $el.siblings('.item-name').html(),
      image: $el.find('.img').css('background')
    };
  });
}

const itemMap = {
   "1001":{  
      "name":"Boots of Speed",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px 0px / auto padding-box border-box"
   },
   "1004":{  
      "name":"Faerie Charm",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px 0px / auto padding-box border-box"
   },
   "1006":{  
      "name":"Rejuvenation Bead",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px 0px / auto padding-box border-box"
   },
   "1011":{  
      "name":"Giant's Belt",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px 0px / auto padding-box border-box"
   },
   "1018":{  
      "name":"Cloak of Agility",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px 0px / auto padding-box border-box"
   },
   "1026":{  
      "name":"Blasting Wand",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px 0px / auto padding-box border-box"
   },
   "1027":{  
      "name":"Sapphire Crystal",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px 0px / auto padding-box border-box"
   },
   "1028":{  
      "name":"Ruby Crystal",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px 0px / auto padding-box border-box"
   },
   "1029":{  
      "name":"Cloth Armor",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px 0px / auto padding-box border-box"
   },
   "1031":{  
      "name":"Chain Vest",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px 0px / auto padding-box border-box"
   },
   "1033":{  
      "name":"Null-Magic Mantle",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -48px / auto padding-box border-box"
   },
   "1036":{  
      "name":"Long Sword",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -48px / auto padding-box border-box"
   },
   "1037":{  
      "name":"Pickaxe",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -48px / auto padding-box border-box"
   },
   "1038":{  
      "name":"B. F. Sword",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -48px / auto padding-box border-box"
   },
   "1039":{  
      "name":"Hunter's Talisman",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -48px / auto padding-box border-box"
   },
   "1041":{  
      "name":"Hunter's Machete",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -48px / auto padding-box border-box"
   },
   "1042":{  
      "name":"Dagger",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -48px / auto padding-box border-box"
   },
   "1043":{  
      "name":"Recurve Bow",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -48px / auto padding-box border-box"
   },
   "1051":{  
      "name":"Brawler's Gloves",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -48px / auto padding-box border-box"
   },
   "1052":{  
      "name":"Amplifying Tome",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -48px / auto padding-box border-box"
   },
   "1053":{  
      "name":"Vampiric Scepter",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -96px / auto padding-box border-box"
   },
   "1054":{  
      "name":"Doran's Shield",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -96px / auto padding-box border-box"
   },
   "1055":{  
      "name":"Doran's Blade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -96px / auto padding-box border-box"
   },
   "1056":{  
      "name":"Doran's Ring",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -96px / auto padding-box border-box"
   },
   "1057":{  
      "name":"Negatron Cloak",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -96px / auto padding-box border-box"
   },
   "1058":{  
      "name":"Needlessly Large Rod",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -96px / auto padding-box border-box"
   },
   "1082":{  
      "name":"The Dark Seal",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -96px / auto padding-box border-box"
   },
   "1083":{  
      "name":"Cull",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -96px / auto padding-box border-box"
   },
   "1400":{  
      "name":"Enchantment: Warrior",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -96px / auto padding-box border-box"
   },
   "1401":{  
      "name":"Enchantment: Cinderhulk",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -96px / auto padding-box border-box"
   },
   "1402":{  
      "name":"Enchantment: Runic Echoes",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -144px / auto padding-box border-box"
   },
   "1408":{  
      "name":"Enchantment: Warrior",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -144px / auto padding-box border-box"
   },
   "1409":{  
      "name":"Enchantment: Cinderhulk",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -144px / auto padding-box border-box"
   },
   "1410":{  
      "name":"Enchantment: Runic Echoes",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -144px / auto padding-box border-box"
   },
   "1412":{  
      "name":"Enchantment: Warrior",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -144px / auto padding-box border-box"
   },
   "1413":{  
      "name":"Enchantment: Cinderhulk",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -144px / auto padding-box border-box"
   },
   "1414":{  
      "name":"Enchantment: Runic Echoes",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -144px / auto padding-box border-box"
   },
   "1416":{  
      "name":"Enchantment: Bloodrazor",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -192px / auto padding-box border-box"
   },
   "1418":{  
      "name":"Enchantment: Bloodrazor",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -192px / auto padding-box border-box"
   },
   "1419":{  
      "name":"Enchantment: Bloodrazor",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -192px / auto padding-box border-box"
   },
   "2003":{  
      "name":"Health Potion",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -192px / auto padding-box border-box"
   },
   "2009":{  
      "name":"Total Biscuit of Rejuvenation",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -192px / auto padding-box border-box"
   },
   "2010":{  
      "name":"Total Biscuit of Rejuvenation",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -192px / auto padding-box border-box"
   },
   "2015":{  
      "name":"Kircheis Shard",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -192px / auto padding-box border-box"
   },
   "2031":{  
      "name":"Refillable Potion",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -192px / auto padding-box border-box"
   },
   "2032":{  
      "name":"Hunter's Potion",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -192px / auto padding-box border-box"
   },
   "2033":{  
      "name":"Corrupting Potion",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -240px / auto padding-box border-box"
   },
   "2043":{  
      "name":"Vision Ward",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -240px / auto padding-box border-box"
   },
   "2045":{  
      "name":"Ruby Sightstone",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -240px / auto padding-box border-box"
   },
   "2047":{  
      "name":"Oracle's Extract",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -240px / auto padding-box border-box"
   },
   "2049":{  
      "name":"Sightstone",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -240px / auto padding-box border-box"
   },
   "2050":{  
      "name":"Explorer's Ward",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -240px / auto padding-box border-box"
   },
   "2051":{  
      "name":"Guardian's Horn",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -240px / auto padding-box border-box"
   },
   "2052":{  
      "name":"Poro-Snax",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -240px / auto padding-box border-box"
   },
   "2053":{  
      "name":"Raptor Cloak",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -240px / auto padding-box border-box"
   },
   "2054":{  
      "name":"Diet Poro-Snax",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -240px / auto padding-box border-box"
   },
   "2138":{  
      "name":"Elixir of Iron",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -288px / auto padding-box border-box"
   },
   "2139":{  
      "name":"Elixir of Sorcery",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -288px / auto padding-box border-box"
   },
   "2140":{  
      "name":"Elixir of Wrath",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -288px / auto padding-box border-box"
   },
   "2301":{  
      "name":"Eye of the Watchers",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -288px / auto padding-box border-box"
   },
   "2302":{  
      "name":"Eye of the Oasis",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -288px / auto padding-box border-box"
   },
   "2303":{  
      "name":"Eye of the Equinox",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -288px / auto padding-box border-box"
   },
   "3001":{  
      "name":"Abyssal Scepter",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -288px / auto padding-box border-box"
   },
   "3003":{  
      "name":"Archangel's Staff",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -288px / auto padding-box border-box"
   },
   "3004":{  
      "name":"Manamune",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -288px / auto padding-box border-box"
   },
   "3006":{  
      "name":"Berserker's Greaves",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -288px / auto padding-box border-box"
   },
   "3007":{  
      "name":"Archangel's Staff (Crystal Scar)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -336px / auto padding-box border-box"
   },
   "3008":{  
      "name":"Manamune (Crystal Scar)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -336px / auto padding-box border-box"
   },
   "3009":{  
      "name":"Boots of Swiftness",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -336px / auto padding-box border-box"
   },
   "3010":{  
      "name":"Catalyst of Aeons",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -336px / auto padding-box border-box"
   },
   "3020":{  
      "name":"Sorcerer's Shoes",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -336px / auto padding-box border-box"
   },
   "3022":{  
      "name":"Frozen Mallet",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -336px / auto padding-box border-box"
   },
   "3024":{  
      "name":"Glacial Shroud",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -336px / auto padding-box border-box"
   },
   "3025":{  
      "name":"Iceborn Gauntlet",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -336px / auto padding-box border-box"
   },
   "3026":{  
      "name":"Guardian Angel",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -336px / auto padding-box border-box"
   },
   "3027":{  
      "name":"Rod of Ages",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -336px / auto padding-box border-box"
   },
   "3028":{  
      "name":"Chalice of Harmony",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -384px / auto padding-box border-box"
   },
   "3029":{  
      "name":"Rod of Ages (Crystal Scar)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -384px / auto padding-box border-box"
   },
   "3030":{  
      "name":"Hextech GLP-800",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -384px / auto padding-box border-box"
   },
   "3031":{  
      "name":"Infinity Edge",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -384px / auto padding-box border-box"
   },
   "3033":{  
      "name":"Mortal Reminder",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -384px / auto padding-box border-box"
   },
   "3034":{  
      "name":"Giant Slayer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -384px / auto padding-box border-box"
   },
   "3035":{  
      "name":"Last Whisper",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -384px / auto padding-box border-box"
   },
   "3036":{  
      "name":"Lord Dominik's Regards",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -384px / auto padding-box border-box"
   },
   "3040":{  
      "name":"Seraph's Embrace",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -384px / auto padding-box border-box"
   },
   "3041":{  
      "name":"Mejai's Soulstealer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -384px / auto padding-box border-box"
   },
   "3042":{  
      "name":"Muramana",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll 0px -432px / auto padding-box border-box"
   },
   "3043":{  
      "name":"Muramana",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -48px -432px / auto padding-box border-box"
   },
   "3044":{  
      "name":"Phage",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -96px -432px / auto padding-box border-box"
   },
   "3046":{  
      "name":"Phantom Dancer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -144px -432px / auto padding-box border-box"
   },
   "3047":{  
      "name":"Ninja Tabi",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -192px -432px / auto padding-box border-box"
   },
   "3048":{  
      "name":"Seraph's Embrace",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -240px -432px / auto padding-box border-box"
   },
   "3050":{  
      "name":"Zeke's Harbinger",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -288px -432px / auto padding-box border-box"
   },
   "3052":{  
      "name":"Jaurim's Fist",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -336px -432px / auto padding-box border-box"
   },
   "3053":{  
      "name":"Sterak's Gage",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -384px -432px / auto padding-box border-box"
   },
   "3056":{  
      "name":"Ohmwrecker",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item0.png\") no-repeat scroll -432px -432px / auto padding-box border-box"
   },
   "3057":{  
      "name":"Sheen",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px 0px / auto padding-box border-box"
   },
   "3060":{  
      "name":"Banner of Command",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px 0px / auto padding-box border-box"
   },
   "3065":{  
      "name":"Spirit Visage",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px 0px / auto padding-box border-box"
   },
   "3067":{  
      "name":"Kindlegem",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px 0px / auto padding-box border-box"
   },
   "3068":{  
      "name":"Sunfire Cape",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px 0px / auto padding-box border-box"
   },
   "3069":{  
      "name":"Talisman of Ascension",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px 0px / auto padding-box border-box"
   },
   "3070":{  
      "name":"Tear of the Goddess",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px 0px / auto padding-box border-box"
   },
   "3071":{  
      "name":"The Black Cleaver",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px 0px / auto padding-box border-box"
   },
   "3072":{  
      "name":"The Bloodthirster",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px 0px / auto padding-box border-box"
   },
   "3073":{  
      "name":"Tear of the Goddess (Crystal Scar)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px 0px / auto padding-box border-box"
   },
   "3074":{  
      "name":"Ravenous Hydra",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -48px / auto padding-box border-box"
   },
   "3075":{  
      "name":"Thornmail",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -48px / auto padding-box border-box"
   },
   "3077":{  
      "name":"Tiamat",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -48px / auto padding-box border-box"
   },
   "3078":{  
      "name":"Trinity Force",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -48px / auto padding-box border-box"
   },
   "3082":{  
      "name":"Warden's Mail",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -48px / auto padding-box border-box"
   },
   "3083":{  
      "name":"Warmog's Armor",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -48px / auto padding-box border-box"
   },
   "3084":{  
      "name":"Overlord's Bloodmail",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -48px / auto padding-box border-box"
   },
   "3085":{  
      "name":"Runaan's Hurricane",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -48px / auto padding-box border-box"
   },
   "3086":{  
      "name":"Zeal",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -48px / auto padding-box border-box"
   },
   "3087":{  
      "name":"Statikk Shiv",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -48px / auto padding-box border-box"
   },
   "3089":{  
      "name":"Rabadon's Deathcap",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -96px / auto padding-box border-box"
   },
   "3090":{  
      "name":"Wooglet's Witchcap",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -96px / auto padding-box border-box"
   },
   "3091":{  
      "name":"Wit's End",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -96px / auto padding-box border-box"
   },
   "3092":{  
      "name":"Frost Queen's Claim",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -96px / auto padding-box border-box"
   },
   "3094":{  
      "name":"Rapid Firecannon",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -96px / auto padding-box border-box"
   },
   "3096":{  
      "name":"Nomad's Medallion",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -96px / auto padding-box border-box"
   },
   "3097":{  
      "name":"Targon's Brace",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -96px / auto padding-box border-box"
   },
   "3098":{  
      "name":"Frostfang",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -96px / auto padding-box border-box"
   },
   "3100":{  
      "name":"Lich Bane",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -96px / auto padding-box border-box"
   },
   "3101":{  
      "name":"Stinger",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -96px / auto padding-box border-box"
   },
   "3102":{  
      "name":"Banshee's Veil",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -144px / auto padding-box border-box"
   },
   "3104":{  
      "name":"Lord Van Damm's Pillager",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -144px / auto padding-box border-box"
   },
   "3105":{  
      "name":"Aegis of the Legion",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -144px / auto padding-box border-box"
   },
   "3108":{  
      "name":"Fiendish Codex",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -144px / auto padding-box border-box"
   },
   "3110":{  
      "name":"Frozen Heart",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -144px / auto padding-box border-box"
   },
   "3111":{  
      "name":"Mercury's Treads",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -144px / auto padding-box border-box"
   },
   "3112":{  
      "name":"Guardian's Orb",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -144px / auto padding-box border-box"
   },
   "3113":{  
      "name":"Aether Wisp",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -144px / auto padding-box border-box"
   },
   "3114":{  
      "name":"Forbidden Idol",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -144px / auto padding-box border-box"
   },
   "3115":{  
      "name":"Nashor's Tooth",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -144px / auto padding-box border-box"
   },
   "3116":{  
      "name":"Rylai's Crystal Scepter",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -192px / auto padding-box border-box"
   },
   "3117":{  
      "name":"Boots of Mobility",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -192px / auto padding-box border-box"
   },
   "3122":{  
      "name":"Wicked Hatchet",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -192px / auto padding-box border-box"
   },
   "3123":{  
      "name":"Executioner's Calling",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -192px / auto padding-box border-box"
   },
   "3124":{  
      "name":"Guinsoo's Rageblade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -192px / auto padding-box border-box"
   },
   "3133":{  
      "name":"Caulfield's Warhammer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -192px / auto padding-box border-box"
   },
   "3134":{  
      "name":"Serrated Dirk",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -192px / auto padding-box border-box"
   },
   "3135":{  
      "name":"Void Staff",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -192px / auto padding-box border-box"
   },
   "3136":{  
      "name":"Haunting Guise",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -192px / auto padding-box border-box"
   },
   "3137":{  
      "name":"Dervish Blade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -192px / auto padding-box border-box"
   },
   "3139":{  
      "name":"Mercurial Scimitar",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -240px / auto padding-box border-box"
   },
   "3140":{  
      "name":"Quicksilver Sash",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -240px / auto padding-box border-box"
   },
   "3142":{  
      "name":"Youmuu's Ghostblade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -240px / auto padding-box border-box"
   },
   "3143":{  
      "name":"Randuin's Omen",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -240px / auto padding-box border-box"
   },
   "3144":{  
      "name":"Bilgewater Cutlass",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -240px / auto padding-box border-box"
   },
   "3145":{  
      "name":"Hextech Revolver",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -240px / auto padding-box border-box"
   },
   "3146":{  
      "name":"Hextech Gunblade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -240px / auto padding-box border-box"
   },
   "3147":{  
      "name":"Duskblade of Draktharr",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -240px / auto padding-box border-box"
   },
   "3151":{  
      "name":"Liandry's Torment",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -240px / auto padding-box border-box"
   },
   "3152":{  
      "name":"Hextech Protobelt-01",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -240px / auto padding-box border-box"
   },
   "3153":{  
      "name":"Blade of the Ruined King",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -288px / auto padding-box border-box"
   },
   "3155":{  
      "name":"Hexdrinker",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -288px / auto padding-box border-box"
   },
   "3156":{  
      "name":"Maw of Malmortius",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -288px / auto padding-box border-box"
   },
   "3157":{  
      "name":"Zhonya's Hourglass",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -288px / auto padding-box border-box"
   },
   "3158":{  
      "name":"Ionian Boots of Lucidity",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -288px / auto padding-box border-box"
   },
   "3165":{  
      "name":"Morellonomicon",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -288px / auto padding-box border-box"
   },
   "3170":{  
      "name":"Moonflair Spellblade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -288px / auto padding-box border-box"
   },
   "3174":{  
      "name":"Athene's Unholy Grail",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -288px / auto padding-box border-box"
   },
   "3181":{  
      "name":"Sanguine Blade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -336px / auto padding-box border-box"
   },
   "3184":{  
      "name":"Guardian's Hammer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -336px / auto padding-box border-box"
   },
   "3185":{  
      "name":"The Lightbringer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -336px / auto padding-box border-box"
   },
   "3187":{  
      "name":"Arcane Sweeper",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -336px / auto padding-box border-box"
   },
   "3190":{  
      "name":"Locket of the Iron Solari",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -336px / auto padding-box border-box"
   },
   "3191":{  
      "name":"Seeker's Armguard",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -336px / auto padding-box border-box"
   },
   "3196":{  
      "name":"The Hex Core mk-1",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -336px / auto padding-box border-box"
   },
   "3197":{  
      "name":"The Hex Core mk-2",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -336px / auto padding-box border-box"
   },
   "3198":{  
      "name":"Perfect Hex Core",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -336px / auto padding-box border-box"
   },
   "3200":{  
      "name":"Prototype Hex Core",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -336px / auto padding-box border-box"
   },
   "3211":{  
      "name":"Spectre's Cowl",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -384px / auto padding-box border-box"
   },
   "3222":{  
      "name":"Mikael's Crucible",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -384px / auto padding-box border-box"
   },
   "3285":{  
      "name":"Luden's Echo",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -384px / auto padding-box border-box"
   },
   "3301":{  
      "name":"Ancient Coin",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -384px / auto padding-box border-box"
   },
   "3302":{  
      "name":"Relic Shield",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -384px / auto padding-box border-box"
   },
   "3303":{  
      "name":"Spellthief's Edge",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -240px -384px / auto padding-box border-box"
   },
   "3340":{  
      "name":"Warding Totem (Trinket)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -288px -384px / auto padding-box border-box"
   },
   "3341":{  
      "name":"Sweeping Lens (Trinket)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -336px -384px / auto padding-box border-box"
   },
   "3345":{  
      "name":"Soul Anchor (Trinket)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -384px -384px / auto padding-box border-box"
   },
   "3348":{  
      "name":"Arcane Sweeper",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -384px / auto padding-box border-box"
   },
   "3361":{  
      "name":"Greater Stealth Totem (Trinket)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll 0px -432px / auto padding-box border-box"
   },
   "3362":{  
      "name":"Greater Vision Totem (Trinket)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -48px -432px / auto padding-box border-box"
   },
   "3363":{  
      "name":"Farsight Alteration",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -96px -432px / auto padding-box border-box"
   },
   "3364":{  
      "name":"Oracle Alteration",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -144px -432px / auto padding-box border-box"
   },
   "3401":{  
      "name":"Face of the Mountain",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -192px -432px / auto padding-box border-box"
   },
   "3460":{  
      "name":"Golden Transcendence",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item1.png\") no-repeat scroll -432px -432px / auto padding-box border-box"
   },
   "3461":{  
      "name":"Golden Transcendence (Disabled)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll 0px 0px / auto padding-box border-box"
   },
   "3462":{  
      "name":"Seer Stone (Trinket)",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -48px 0px / auto padding-box border-box"
   },
   "3504":{  
      "name":"Ardent Censer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -96px 0px / auto padding-box border-box"
   },
   "3508":{  
      "name":"Essence Reaver",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -144px 0px / auto padding-box border-box"
   },
   "3512":{  
      "name":"Zz'Rot Portal",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -192px 0px / auto padding-box border-box"
   },
   "3599":{  
      "name":"The Black Spear",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -240px 0px / auto padding-box border-box"
   },
   "3671":{  
      "name":"Enchantment: Warrior",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -288px 0px / auto padding-box border-box"
   },
   "3672":{  
      "name":"Enchantment: Cinderhulk",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -336px 0px / auto padding-box border-box"
   },
   "3673":{  
      "name":"Enchantment: Runic Echoes",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -384px 0px / auto padding-box border-box"
   },
   "3675":{  
      "name":"Enchantment: Bloodrazor",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -432px 0px / auto padding-box border-box"
   },
   "3706":{  
      "name":"Stalker's Blade",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll 0px -48px / auto padding-box border-box"
   },
   "3711":{  
      "name":"Tracker's Knife",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -48px -48px / auto padding-box border-box"
   },
   "3715":{  
      "name":"Skirmisher's Sabre",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -96px -48px / auto padding-box border-box"
   },
   "3742":{  
      "name":"Dead Man's Plate",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -144px -48px / auto padding-box border-box"
   },
   "3748":{  
      "name":"Titanic Hydra",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -192px -48px / auto padding-box border-box"
   },
   "3751":{  
      "name":"Bami's Cinder",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -240px -48px / auto padding-box border-box"
   },
   "3800":{  
      "name":"Righteous Glory",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -288px -48px / auto padding-box border-box"
   },
   "3801":{  
      "name":"Crystalline Bracer",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -336px -48px / auto padding-box border-box"
   },
   "3802":{  
      "name":"Lost Chapter",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -384px -48px / auto padding-box border-box"
   },
   "3812":{  
      "name":"Death's Dance",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -432px -48px / auto padding-box border-box"
   },
   "3901":{  
      "name":"Fire at Will",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll 0px -96px / auto padding-box border-box"
   },
   "3902":{  
      "name":"Death's Daughter",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -48px -96px / auto padding-box border-box"
   },
   "3903":{  
      "name":"Raise Morale",
      "image":"rgba(0, 0, 0, 0) url(\"http://ddragon.leagueoflegends.com/cdn/6.12.1/img/sprite/item2.png\") no-repeat scroll -96px -96px / auto padding-box border-box"
   }
}

export default itemMap;