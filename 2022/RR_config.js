var config_data = `
{
<<<<<<< HEAD
  "title":"BX Scouting PASS 2022",
  "page_title":"BX Rapid React",
  "elements":{
    "prematch": {
      "Scouter Name": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":30,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022flwp",
        "required":"true",
        "disabled":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
	"required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999,
	"required":"true"
      },
      "Preload": {
	"code":"p",
	"type":"bool",
	"required":"true"
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code":"az",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "Picked up more cargo?",
        "type":"bool"
      }
=======
  "title": "Scouting PASS 2022",
  "page_title": "Rapid React",
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
      "defaultValue": "2022ilpe",
      "required": "true",
      "disabled": "true"
>>>>>>> a0e65bf2f66b1974662483bbc809e06720ab011b
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "ef": "Eighth-Final<br>",
        "qf": "Quarter-Final<br>",
        "sf": "Semi-Final<br>",
        "f": "Final"
      },
<<<<<<< HEAD
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code":"tm",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Cargo Loading": {
        "code":"cl",
        "title": "Pick up Cargo where",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x",
	"required":"true"
      },
       "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
     }
    },
    "endgame": {
      "Upper Cargo Scored": {
        "code":"eu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"el",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x",
	"required":"true"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Climb Started": {
        "code":"cs",
        "title": "Climb Started(seconds)",
        "type":"counter"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x",
	"required":"true"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x",
	"required":"true"
      },
      "Died": {
        "code":"d",
        "title": "Died",
        "type":"bool"
      },
      "Tipped": {
        "code":"to",
        "title": "Tipped Over",
        "type":"bool"
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
=======
      "defaultValue": "qm",
      "required": "true"
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
    { "name": "Auto Start Position",
      "code": "as",
      "type": "field_image",
      "filename": "2022/field_image.png"
>>>>>>> a0e65bf2f66b1974662483bbc809e06720ab011b
    }
  ],
  "auton": [
    { "name": "Taxied?",
      "code": "at",
      "type": "bool"
    },
    { "name": "Upper Cargo Scored",
      "code": "au",
      "type": "counter"
    },
    { "name": "Lower Cargo Scored",
      "code": "al",
      "type": "counter"
    },
    { "name": "Picked up more cargo?",
      "code": "ac",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Upper Cargo Scored",
      "code": "tu",
      "type": "counter"
    },
    { "name": "Lower Cargo Scored",
      "code": "tl",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Wallbot?",
      "code": "wbt",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "code": "cif",
      "type": "radio",
      "choices": {
        "t": "Terminal<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Shooting Spot",
      "code": "ss",
      "type": "field_image",
      "filename": "2022/field_image.png"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "c",
      "type":"radio",
      "choices": {
        "1": "Low<br>",
        "2": "Mid<br>",
        "3": "High<br>",
        "4": "Traversal<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Started Climb before Endgame",
      "code": "be",
      "type": "bool"
    },
    { "name": "# of alliance bots climbed",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
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
    { "name": "Enemy Balls",
      "tooltip": "Strategically held enemy cargo during the match",
      "code": "hc",
      "type": "bool"
    },
    { "name": "Swerve drive?",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
      "code": "d",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    },
    { "name": "Confidence Rating",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "v": "Very Confident<br>",
        "a": "Average<br>",
        "n": "Not Confident"
        },
      "defaultValue": "a"
    }
  ]
}`;
