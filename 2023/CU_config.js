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
    { "name": "Amp Rings",
      "code": "aar",
      "type": "counter"
    },
    { "name": "Speaker Rings",
      "code": "asr",
      "type": "counter"
    },
    { "name": "Notes Missed",
      "code": "tnm",
      "type": "counter"
    },
    { "name": "Ring Pick Up Spot",
      "code": "rps",
      "type":"radio",
      "choices": {
        "Front": "Front 3<br>",
        "Middle Line": "Middle Line<br>",
        "Both": "Both<br>",
        "N/A": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Amp Rings",
      "code": "tar",
      "type": "counter"
    },
    { "name": "Non-Amp Speaker Rings",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Amped Speaker Rings",
      "code": "tas",
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
        "s": "Sourse<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "efs",
      "type": "radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "os": "Onstage (Spotlit) <br>",
        "h": "Harmony<br>",
        "abf": "Attempted but Failed<br>",
        "na": "Not Attempted"
      },
      "defaultValue": "x"
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
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Tipped",
      "code": "d",
      "type": "bool"
    }
  ]
}`;
