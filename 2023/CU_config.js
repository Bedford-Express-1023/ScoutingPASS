var config_data = `
{
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
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
      "defaultValue": "2023ilch",
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
    { "name": "Amp Notes",
      "code": "aan",
      "type": "counter"
    },
    { "name": "Speaker Notes",
      "code": "asn",
      "type": "counter"
    },
    { "name": "Notes Missed",
      "code": "anm",
      "type": "counter"
    },
    { "name": "Note Pick Up Spot",
      "code": "nps",
      "type":"radio",
      "choices": {
        "Front": "Front 3<br>",
        "Middle Line": "Middle Line<br>",
        "Both": "Both<br>",
        "DNA": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Amp Notes",
      "code": "tan",
      "type": "counter"
    },
    { "name": "Speaker Notes",
      "code": "tsn",
      "type": "counter"
    },
    { "name": "Feeding Shot",
      "code": "fs",
      "type": "counter"
    },
        { "name": "Notes Missed",
      "code": "tnm",
      "type": "counter"
    },
    { "name": "Cargo Intake From",
      "code": "cif",
      "type": "radio",
      "choices": {
        "Source": "Source<br>",
        "Ground": "Ground<br>",
        "Both": "Both<br>",
        "DNA": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "efs",
      "type": "radio",
      "choices": {
        "Parked": "Parked<br>",
        "Onstage": "Onstage<br>",
        "abf": "Attempted but Failed<br>",
        "DNA": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Harmonized (2nd or 3rd robot on chain)",
      "code": "h",
      "type": "bool"
    },
    { "name": "Note in Trap?",
      "code": "td",
      "type": "bool"
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
