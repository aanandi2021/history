(function () {
  const events = [
    {
      "lane": "canada",
      "date": "1929-10-29",
      "title": "Crash reaches Canada",
      "at": [
        -75.7,
        45.42
      ],
      "section": "Canada in the Depression",
      "text": "The crash hits Canadian exports, credit and employment.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1930-08-07",
      "title": "R. B. Bennett becomes prime minister",
      "at": [
        -75.7,
        45.42
      ],
      "section": "Canada in the Depression",
      "text": "Bennett promises tariffs and action as the Depression deepens.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1931",
      "title": "Prairie drought and dust bowl",
      "at": [
        -104.62,
        50.45
      ],
      "section": "Canada in the Depression",
      "text": "Drought, low wheat prices and debt make the Prairies the Canadian core of hardship.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1935-06-03",
      "title": "On-to-Ottawa Trek",
      "at": [
        -114.07,
        51.05
      ],
      "section": "Canada in the Depression",
      "text": "Relief-camp workers leave Vancouver and reach Regina.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1937",
      "title": "Mackenzie-Papineau Battalion",
      "at": [
        -3.7,
        40.42
      ],
      "section": "The Spanish Civil War",
      "text": "Canadian volunteers fight with the International Brigades.",
      "plate": "spanish-civil-war-1936-1939"
    },
    {
      "lane": "ussr",
      "date": "1929",
      "title": "Collectivisation begins",
      "at": [
        30.52,
        50.45
      ],
      "section": "Stalin's USSR",
      "text": "Forced collectivisation breaks peasant society.",
      "plate": "stalin-ussr-1928-1939"
    },
    {
      "lane": "ussr",
      "date": "1932",
      "title": "Holodomor and Kazakh famine",
      "at": [
        30.52,
        50.45
      ],
      "section": "Stalin's USSR",
      "text": "Famine kills millions in Ukraine and Kazakhstan.",
      "plate": "stalin-ussr-1928-1939"
    },
    {
      "lane": "ussr",
      "date": "1934-12-01",
      "title": "Kirov murdered",
      "at": [
        30.34,
        59.93
      ],
      "section": "Stalin's USSR",
      "text": "Kirov’s murder becomes an opening marker for the Great Terror.",
      "plate": "stalin-ussr-1928-1939"
    },
    {
      "lane": "ussr",
      "date": "1936",
      "title": "Show trials begin",
      "at": [
        37.62,
        55.75
      ],
      "section": "Stalin's USSR",
      "text": "Old Bolsheviks are put on trial in Moscow.",
      "plate": "stalin-ussr-1928-1939"
    },
    {
      "lane": "ussr",
      "date": "1937",
      "title": "Army purge",
      "at": [
        37.62,
        55.75
      ],
      "section": "Stalin's USSR",
      "text": "The officer corps is purged during the terror.",
      "plate": "stalin-ussr-1928-1939"
    },
    {
      "lane": "depression",
      "date": "1929-10-24",
      "title": "Wall Street crash",
      "at": [
        -74.01,
        40.71
      ],
      "section": "The Great Depression worldwide",
      "text": "The American crash marks the global break.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "depression",
      "date": "1931-09-21",
      "title": "Britain leaves gold",
      "at": [
        -0.13,
        51.51
      ],
      "section": "The Great Depression worldwide",
      "text": "Sterling leaves the gold standard.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "depression",
      "date": "1933-03-04",
      "title": "Roosevelt inaugurated",
      "at": [
        -77.04,
        38.9
      ],
      "section": "The Great Depression worldwide",
      "text": "The New Deal begins after banking panic and mass unemployment.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "germany",
      "date": "1933-01-30",
      "title": "Hitler appointed chancellor",
      "at": [
        13.4,
        52.52
      ],
      "section": "Nazi Germany and expansion",
      "text": "The Nazi dictatorship begins.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1935-01-13",
      "title": "Saar plebiscite",
      "at": [
        6.99,
        49.24
      ],
      "section": "Nazi Germany and expansion",
      "text": "The Saar votes to return to Germany.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1936-03-07",
      "title": "Rhineland remilitarised",
      "at": [
        7.01,
        51.46
      ],
      "section": "Nazi Germany and expansion",
      "text": "German troops enter the demilitarised Rhineland.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1938-03-12",
      "title": "Anschluss",
      "at": [
        16.37,
        48.21
      ],
      "section": "Nazi Germany and expansion",
      "text": "Germany absorbs Austria.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1938-09-30",
      "title": "Munich and the Sudetenland",
      "at": [
        11.58,
        48.14
      ],
      "section": "Nazi Germany and expansion",
      "text": "Britain and France concede the Sudetenland.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1939-03-15",
      "title": "Bohemia-Moravia occupied",
      "at": [
        14.42,
        50.08
      ],
      "section": "Nazi Germany and expansion",
      "text": "Germany occupies Prague.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1939-03-22",
      "title": "Memel annexed",
      "at": [
        21.12,
        55.7
      ],
      "section": "Nazi Germany and expansion",
      "text": "Lithuania is forced to cede Memel.",
      "plate": "nazi-germany-expansion-1933-1939"
    },
    {
      "lane": "germany",
      "date": "1939-08-23",
      "title": "Molotov-Ribbentrop Pact",
      "at": [
        37.62,
        55.75
      ],
      "section": "Europe's alliances and the road to war",
      "text": "Germany and the USSR sign a pact with a secret protocol.",
      "plate": "europe-alliances-road-to-war-1933-1939"
    },
    {
      "lane": "spain",
      "date": "1936-07-17",
      "title": "Spanish military rising",
      "at": [
        -5.98,
        37.39
      ],
      "section": "The Spanish Civil War",
      "text": "The army rising divides Spain into Nationalist and Republican zones.",
      "plate": "spanish-civil-war-1936-1939"
    },
    {
      "lane": "spain",
      "date": "1936-11",
      "title": "Battle for Madrid",
      "at": [
        -3.7,
        40.42
      ],
      "section": "The Spanish Civil War",
      "text": "Madrid survives the first Nationalist assault.",
      "plate": "spanish-civil-war-1936-1939"
    },
    {
      "lane": "spain",
      "date": "1937-04-26",
      "title": "Guernica bombed",
      "at": [
        -2.68,
        43.32
      ],
      "section": "The Spanish Civil War",
      "text": "The Condor Legion bombs Guernica.",
      "plate": "spanish-civil-war-1936-1939"
    },
    {
      "lane": "spain",
      "date": "1938-07",
      "title": "Battle of the Ebro",
      "at": [
        0.49,
        41.05
      ],
      "section": "The Spanish Civil War",
      "text": "The Republic’s last major offensive fails.",
      "plate": "spanish-civil-war-1936-1939"
    },
    {
      "lane": "spain",
      "date": "1939-01-26",
      "title": "Barcelona falls",
      "at": [
        2.17,
        41.38
      ],
      "section": "The Spanish Civil War",
      "text": "The Nationalists take Barcelona.",
      "plate": "spanish-civil-war-1936-1939"
    },
    {
      "lane": "italy",
      "date": "1935-10-03",
      "title": "Italy invades Ethiopia",
      "at": [
        38.76,
        9.03
      ],
      "section": "Fascist Italy and Ethiopia",
      "text": "Mussolini invades Ethiopia from Eritrea and Somaliland.",
      "plate": "fascist-italy-ethiopia-1922-1939"
    },
    {
      "lane": "italy",
      "date": "1936-05-05",
      "title": "Addis Ababa occupied",
      "at": [
        38.76,
        9.03
      ],
      "section": "Fascist Italy and Ethiopia",
      "text": "Ethiopia is annexed despite League sanctions.",
      "plate": "fascist-italy-ethiopia-1922-1939"
    },
    {
      "lane": "italy",
      "date": "1939-04-07",
      "title": "Italy invades Albania",
      "at": [
        19.82,
        41.33
      ],
      "section": "Fascist Italy and Ethiopia",
      "text": "Albania is occupied on the eve of European war.",
      "plate": "fascist-italy-ethiopia-1922-1939"
    },
    {
      "lane": "japan",
      "date": "1931-09-18",
      "title": "Mukden Incident",
      "at": [
        123.43,
        41.8
      ],
      "section": "Japan and China at war",
      "text": "Japan uses the railway explosion as pretext to seize Manchuria.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "japan",
      "date": "1932-03-01",
      "title": "Manchukuo proclaimed",
      "at": [
        123.43,
        41.8
      ],
      "section": "Japan and China at war",
      "text": "Japan creates Manchukuo.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "japan",
      "date": "1933",
      "title": "Jehol occupied",
      "at": [
        117.93,
        40.98
      ],
      "section": "Japan and China at war",
      "text": "Japan pushes beyond Manchuria into Jehol.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "japan",
      "date": "1934-10",
      "title": "Long March begins",
      "at": [
        116.03,
        25.89
      ],
      "section": "Japan and China at war",
      "text": "The Communists retreat from Jiangxi toward Yan’an.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "japan",
      "date": "1937-07-07",
      "title": "Marco Polo Bridge",
      "at": [
        116.41,
        39.9
      ],
      "section": "Japan and China at war",
      "text": "Full-scale war between Japan and China begins.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "japan",
      "date": "1937-12-13",
      "title": "Nanjing falls",
      "at": [
        118.8,
        32.06
      ],
      "section": "Japan and China at war",
      "text": "Japan captures Nanjing and commits mass violence.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "japan",
      "date": "1939-08",
      "title": "Khalkhin Gol / Nomonhan",
      "at": [
        118.6,
        47.72
      ],
      "section": "Japan and China at war",
      "text": "Soviet and Japanese forces fight on the Mongolian frontier.",
      "plate": "japan-expansion-1931-1939"
    },
    {
      "lane": "alliances",
      "date": "1935-05-02",
      "title": "Franco-Soviet Pact",
      "at": [
        2.35,
        48.86
      ],
      "section": "Europe's alliances and the road to war",
      "text": "France and the USSR sign a mutual assistance pact.",
      "plate": "europe-alliances-road-to-war-1933-1939"
    },
    {
      "lane": "alliances",
      "date": "1936-10",
      "title": "Rome-Berlin Axis",
      "at": [
        12.5,
        41.9
      ],
      "section": "Europe's alliances and the road to war",
      "text": "Germany and Italy align after Ethiopia and Spain.",
      "plate": "europe-alliances-road-to-war-1933-1939"
    },
    {
      "lane": "alliances",
      "date": "1938-09-30",
      "title": "Munich Agreement",
      "at": [
        11.58,
        48.14
      ],
      "section": "Europe's alliances and the road to war",
      "text": "Appeasement gives Germany the Sudetenland.",
      "plate": "europe-alliances-road-to-war-1933-1939"
    },
    {
      "lane": "alliances",
      "date": "1939-03-31",
      "title": "Guarantee to Poland",
      "at": [
        21.01,
        52.23
      ],
      "section": "Europe's alliances and the road to war",
      "text": "Britain and France guarantee Poland.",
      "plate": "europe-alliances-road-to-war-1933-1939"
    },
    {
      "lane": "canada",
      "date": "1932",
      "title": "Relief camps opened",
      "at": [
        -123.12,
        49.28
      ],
      "section": "Canada in the Depression",
      "text": "Federal relief camps put single unemployed men to work under harsh conditions.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1933",
      "title": "Co-operative Commonwealth Federation rises",
      "at": [
        -106.67,
        52.13
      ],
      "section": "Canada in the Depression",
      "text": "The CCF turns Depression politics toward social democracy.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1934-07-03",
      "title": "Bank of Canada Act",
      "at": [
        -75.7,
        45.42
      ],
      "section": "Canada in the Depression",
      "text": "Canada creates a central bank during the Depression.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1935-07-01",
      "title": "Regina Riot",
      "at": [
        -104.62,
        50.45
      ],
      "section": "Canada in the Depression",
      "text": "The On-to-Ottawa Trek is stopped violently in Regina.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "canada",
      "date": "1935-10-23",
      "title": "Mackenzie King returns",
      "at": [
        -75.7,
        45.42
      ],
      "section": "Canada in the Depression",
      "text": "King defeats Bennett as Canadians reject Conservative Depression policy.",
      "plate": "great-depression-worldwide-1929-1933"
    },
    {
      "lane": "alliances",
      "date": "1932-10-03",
      "title": "Iraq admitted to the League",
      "at": [
        44.37,
        33.31
      ],
      "section": "Mandates and the Islamic world",
      "text": "Iraq’s formal independence leaves British influence intact and shows the limits of the mandate promise.",
      "plate": "europe-alliances-road-to-war-1933-1939"
    },
    {
      "lane": "alliances",
      "date": "1932-09-23",
      "title": "Saudi Arabia proclaimed",
      "at": [
        46.7,
        24.6
      ],
      "section": "Mandates and the Islamic world",
      "text": "Ibn Saud unites Najd and Hejaz as the Kingdom of Saudi Arabia.",
      "plate": "fascist-italy-ethiopia-1922-1939"
    },
    {
      "lane": "ussr",
      "date": "1932",
      "title": "Magnitogorsk and Kolyma",
      "at": [
        59,
        53.42
      ],
      "section": "Stalin's USSR",
      "text": "Magnitogorsk symbolises Five-Year Plan industry while Kolyma becomes a major Gulag region.",
      "plate": "stalin-ussr-1928-1939"
    },
    {
      "lane": "germany",
      "date": "1939-08",
      "title": "Danzig and the Corridor crisis",
      "at": [
        18.65,
        54.35
      ],
      "section": "Europe's alliances and the road to war",
      "text": "Danzig and the Polish Corridor become Hitler’s immediate pretext before the invasion of Poland.",
      "plate": "nazi-germany-expansion-1933-1939"
    }
  ];
  const chapters = [
    {
      "id": "ch-stalin-ussr",
      "title": "Stalin's USSR",
      "start": "1929",
      "end": "1939",
      "region": "europe",
      "plate": "stalin-ussr-1928-1939",
      "section": "Stalin's USSR",
      "text": "Collectivisation, famine, Five-Year Plan industry, the Gulag and the Great Terror make Stalin’s USSR the centrepiece of the decade.",
      "bbox": [
        [
          24,
          35
        ],
        [
          160,
          72
        ]
      ]
    },
    {
      "id": "ch-great-depression",
      "title": "The Great Depression worldwide",
      "start": "1929",
      "end": "1933",
      "region": "americas",
      "plate": "great-depression-worldwide-1929-1933",
      "section": "The Great Depression worldwide",
      "text": "The crash becomes a world depression; Canada’s Prairie drought, Bennett and On-to-Ottawa sit inside the global collapse.",
      "bbox": [
        [
          -170,
          -55
        ],
        [
          180,
          75
        ]
      ]
    },
    {
      "id": "ch-nazi-expansion",
      "title": "Nazi Germany's expansion",
      "start": "1933",
      "end": "1939",
      "region": "europe",
      "plate": "nazi-germany-expansion-1933-1939",
      "section": "Nazi Germany and expansion",
      "text": "Germany moves from dictatorship to territorial expansion: Saar, Rhineland, Anschluss, Sudetenland, Prague, Memel and the Polish trigger.",
      "bbox": [
        [
          5,
          45
        ],
        [
          25,
          56
        ]
      ]
    },
    {
      "id": "ch-spanish-civil-war",
      "title": "The Spanish Civil War",
      "start": "1936",
      "end": "1939",
      "region": "europe",
      "plate": "spanish-civil-war-1936-1939",
      "section": "The Spanish Civil War",
      "text": "Republican Spain shrinks under Nationalist attack while Germany, Italy, the USSR, the International Brigades and Canadians intervene.",
      "bbox": [
        [
          -10,
          35
        ],
        [
          4,
          44
        ]
      ]
    },
    {
      "id": "ch-fascist-italy-ethiopia",
      "title": "Fascist Italy and Ethiopia",
      "start": "1929",
      "end": "1939",
      "region": "africa",
      "plate": "fascist-italy-ethiopia-1922-1939",
      "section": "Fascist Italy and Ethiopia",
      "text": "Fascist Italy holds Libya and the Dodecanese, conquers Ethiopia despite League sanctions and takes Albania in 1939.",
      "bbox": [
        [
          5,
          -2
        ],
        [
          45,
          43
        ]
      ]
    },
    {
      "id": "ch-japan-expansion",
      "title": "Japan's expansion",
      "start": "1931",
      "end": "1939",
      "region": "asia",
      "plate": "japan-expansion-1931-1939",
      "section": "Japan and China at war",
      "text": "Japan creates Manchukuo, drives into North China and the coast, while the Long March and Khalkhin Gol show the wider Asian war.",
      "bbox": [
        [
          103,
          18
        ],
        [
          146,
          54
        ]
      ]
    },
    {
      "id": "ch-road-to-war",
      "title": "Europe's alliances and the road to war",
      "start": "1933",
      "end": "1939",
      "region": "europe",
      "plate": "europe-alliances-road-to-war-1933-1939",
      "section": "Europe's alliances and the road to war",
      "text": "The Axis, Little Entente, Franco-Soviet pact, Munich, the Polish guarantee and Molotov-Ribbentrop turn crisis into war.",
      "bbox": [
        [
          -5,
          42
        ],
        [
          32,
          58
        ]
      ]
    },
    {
      "id": "ch-canada-depression",
      "title": "Canada in the Depression",
      "start": "1929",
      "end": "1939",
      "region": "americas",
      "plate": "great-depression-worldwide-1929-1933",
      "section": "Canada in the Depression",
      "text": "Canada’s Depression story runs from the crash through the Prairie drought, relief camps, the On-to-Ottawa Trek, Regina and King’s return.",
      "bbox": [
        [
          -130,
          42
        ],
        [
          -55,
          58
        ]
      ]
    },
    {
      "id": "ch-islamic-mandates",
      "title": "Mandates and the Islamic world",
      "start": "1929",
      "end": "1939",
      "region": "islamic",
      "plate": "europe-alliances-road-to-war-1933-1939",
      "section": "Mandates and the Islamic world",
      "text": "Iraq’s formal independence and Saudi Arabia’s proclamation sit beside continuing British and French mandate power.",
      "bbox": [
        [
          30,
          12
        ],
        [
          58,
          38
        ]
      ]
    }
  ];
  const books = [
    {
      "title": "Bloodlands",
      "author": "Timothy Snyder",
      "start": "1930",
      "end": "1945",
      "section": "Stalin's USSR"
    },
    {
      "title": "Stalin",
      "author": "Stephen Kotkin",
      "start": "1928",
      "end": "1939",
      "section": "Stalin's USSR"
    },
    {
      "title": "The Great Crash 1929",
      "author": "John Kenneth Galbraith",
      "start": "1929",
      "end": "1933",
      "section": "The Great Depression worldwide"
    },
    {
      "title": "The Dark Valley",
      "author": "Piers Brendon",
      "start": "1930",
      "end": "1940",
      "section": "The Great Depression worldwide"
    },
    {
      "title": "The Coming of the Third Reich",
      "author": "Richard J. Evans",
      "start": "1919",
      "end": "1933",
      "section": "Nazi Germany and expansion"
    },
    {
      "title": "The Third Reich in Power",
      "author": "Richard J. Evans",
      "start": "1933",
      "end": "1939",
      "section": "Nazi Germany and expansion"
    },
    {
      "title": "The Battle for Spain",
      "author": "Antony Beevor",
      "start": "1936",
      "end": "1939",
      "section": "The Spanish Civil War"
    },
    {
      "title": "Mussolini",
      "author": "R. J. B. Bosworth",
      "start": "1922",
      "end": "1943",
      "section": "Fascist Italy and Ethiopia"
    },
    {
      "title": "The Search for Modern China",
      "author": "Jonathan D. Spence",
      "start": "1912",
      "end": "1949",
      "section": "Japan and China at war"
    },
    {
      "title": "Hirohito and the Making of Modern Japan",
      "author": "Herbert P. Bix",
      "start": "1926",
      "end": "1945",
      "section": "Japan and China at war"
    }
  ];

  window.DATASETS = window.DATASETS || {};
  window.DATASETS.interwar2 = {
    "id": "interwar2",
    "title": "The inter-war world, part II",
    "subtitle": "1929-1939",
    "range": [
      "1929-01-01",
      "1939-09-01"
    ],
    "startAt": "1933",
    "precision": "year",
    "note": "Amit's Notes of the History of the World/The inter-war world, 1929-1939",
    "mapNote": "The underlay uses historical-basemaps 1930 or 1938 as context. Plates use hist shapes where they exist and hard-edged clipped polygons for treaty zones, famines, fronts and occupations.",
    "lanes": [
      {
        "id": "canada",
        "label": "Canada",
        "colour": "#b22d2d",
        "pinned": true
      },
      {
        "id": "ussr",
        "label": "USSR / Russia",
        "colour": "#8c3b3b"
      },
      {
        "id": "depression",
        "label": "Depression world",
        "colour": "#6f9a63"
      },
      {
        "id": "germany",
        "label": "Germany and Europe",
        "colour": "#555555"
      },
      {
        "id": "spain",
        "label": "Spain",
        "colour": "#c98b2c"
      },
      {
        "id": "italy",
        "label": "Italy and Africa",
        "colour": "#b36b2e"
      },
      {
        "id": "japan",
        "label": "Japan and China",
        "colour": "#c98b2c"
      },
      {
        "id": "alliances",
        "label": "Road to war",
        "colour": "#7a5a8c"
      }
    ],
    "chapterRegions": {
      "ch-stalin-ussr": "europe",
      "ch-great-depression": "americas",
      "ch-nazi-expansion": "europe",
      "ch-spanish-civil-war": "europe",
      "ch-fascist-italy-ethiopia": "africa",
      "ch-japan-expansion": "asia",
      "ch-road-to-war": "europe",
      "ch-canada-depression": "americas",
      "ch-islamic-mandates": "islamic"
    },
    "leaders": [],
    "colours": {
      "lanes": {
        "canada": "#b22d2d",
        "ussr": "#8c3b3b",
        "depression": "#6f9a63",
        "germany": "#555555",
        "spain": "#c98b2c",
        "italy": "#b36b2e",
        "japan": "#c98b2c",
        "alliances": "#7a5a8c"
      }
    },
    "plates": [
      {
        "id": "stalin-ussr-1928-1939",
        "title": "stalin ussr 1928 1939",
        "start": "1928",
        "end": "1939"
      },
      {
        "id": "great-depression-worldwide-1929-1933",
        "title": "great depression worldwide 1929 1933",
        "start": "1929",
        "end": "1939"
      },
      {
        "id": "nazi-germany-expansion-1933-1939",
        "title": "nazi germany expansion 1933 1939",
        "start": "1933",
        "end": "1939"
      },
      {
        "id": "spanish-civil-war-1936-1939",
        "title": "spanish civil war 1936 1939",
        "start": "1936",
        "end": "1939"
      },
      {
        "id": "fascist-italy-ethiopia-1922-1939",
        "title": "fascist italy ethiopia 1922 1939",
        "start": "1922",
        "end": "1939"
      },
      {
        "id": "japan-expansion-1931-1939",
        "title": "japan expansion 1931 1939",
        "start": "1931",
        "end": "1939"
      },
      {
        "id": "europe-alliances-road-to-war-1933-1939",
        "title": "europe alliances road to war 1933 1939",
        "start": "1933",
        "end": "1939"
      }
    ],
    "changelog": [
      "Added in v1.5.0-dev for Penguin Atlas Vol. 2 round 7: inter-war world part II, 1929-1939, centred on Stalin’s USSR and the road to war."
    ]
  };
  window.DATASETS.interwar2.events = events;
  window.DATASETS.interwar2.chapters = chapters;
  window.DATASETS.interwar2.books = books;
})();
