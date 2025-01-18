var config_data = `
{
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025ilch",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Preload?",
      "code": "p",
      "type": "bool"
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "Bucket Coral",
      "code": "abc",
      "type": "counter"
    },
    { "name": "Low Rung Coral",
      "code": "alc",
      "type": "counter"
    },
    { "name": "Mid Rung Coral",
      "code": "amc",
      "type": "counter"
    },
    { "name": "High Rung Coral",
      "code": "ahc",
      "type": "counter"
    },
    { "name": "Coral Missed",
      "code": "acm",
      "type": "counter"
    },
    { "name": "Net Algae",
      "code": "ana",
      "type": "counter"
    },
    { "name": "Processor Algae",
      "code": "apa",
      "type": "counter"
    },
    { "name": "Algae Missed",
      "code": "aam",
      "type": "counter"
    },
    { "name": "Coral Pick Up Spot",
      "code": "acps",
      "type":"radio",
      "choices": {
        "Station": "Human Player Station<br>",
        "Ground": "Ground<br>",
        "Both": "Both<br>",
        "DNA": "Not attempted"
      },
      "defaultValue": "DNA"
    }
  ],
  "teleop": [
    { "name": "Bucket Coral",
      "code": "tbc",
      "type": "counter"
    },
    { "name": "Low Rung Coral",
      "code": "tlc",
      "type": "counter"
    },
    { "name": "Mid Rung Coral",
      "code": "tmc",
      "type": "counter"
    },
    { "name": "High Rung Coral",
      "code": "thc",
      "type": "counter"
    },
    { "name": "Coral Missed",
      "code": "tcm",
      "type": "counter"
    },
    { "name": "Net Algae",
      "code": "tna",
      "type": "counter"
    },
    { "name": "Processor Algae",
      "code": "tpa",
      "type": "counter"
    },
    { "name": "Algae Missed",
      "code": "tam",
      "type": "counter"
    },
    { "name": "Coral Pick Up Spot",
      "code": "cps",
      "type": "radio",
      "choices": {
        "Station": "Human Player Station<br>",
        "Ground": "Ground<br>",
        "Both": "Both<br>",
        "DNA": "Not Attempted"
      },
      "defaultValue": "DNA"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "efs",
      "type": "radio",
      "choices": {
        "Parked": "Parked<br>",
        "Deep": "Deep<br>",
	"Shallow": "Shallow<br>",
        "abf": "Attempted but Failed<br>",
        "DNA": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "BA": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "DNPD": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Permanently Immobilized",
      "code": "pi",
      "type": "bool"
    },
    { "name": "Temporarily Immobilized",
    "code": "ti",
    "type": "bool"
   },
   {"name": "Broke",
    "code": "b",
    "type": "bool"
   }
]
}`;