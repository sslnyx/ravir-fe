export const floorPlans = [
    {
        plan: "TH1",
        type: "Townhome",
        beds: "4 Bed + Den",
        interior: "1473",
        exterior: "441 - 540",
        total: "1914 - 2013",
        level: ["1"],
        bedTypeId: "4bed"
    },
    {
        plan: "TH2",
        type: "Townhome",
        beds: "3 Bed",
        interior: "1269",
        exterior: "640",
        total: "1909",
        level: ["1"],
        bedTypeId: "3bed"
    },
    {
        plan: "A",
        type: "Condo",
        beds: "1 Bed + Den",
        interior: "545",
        exterior: "188 - 220",
        total: "733 - 765",
        level: ["2"],
        bedTypeId: "1bedden"
    },
    {
        plan: "A1",
        type: "Condo",
        beds: "1 Bed + Den",
        interior: "545 - 547",
        exterior: "64 - 68",
        total: "611 - 613",
        level: ["3", "4-5", "6"],
        bedTypeId: "1bedden"
    },
    {
        plan: "B",
        type: "Condo",
        beds: "1 Bed",
        interior: "503",
        exterior: "257",
        total: "760",
        level: ["2"],
        bedTypeId: "1bed"
    },
    {
        plan: "B1",
        type: "Condo",
        beds: "1 Bed",
        interior: "503",
        exterior: "129 - 136",
        total: "632 - 639",
        level: ["3", "4-5", "6"],
        bedTypeId: "1bed"
    },
    {
        plan: "C",
        type: "Condo",
        beds: "Junior 3 Bed",
        interior: "833 - 835",
        exterior: "276 - 318",
        total: "1111 - 1151",
        level: ["2"],
        bedTypeId: "jr3bed"
    },
    {
        plan: "D",
        type: "Condo",
        beds: "2 Bed",
        interior: "755",
        exterior: "385",
        total: "1140",
        level: ["2"],
        bedTypeId: "2bed"
    },
    {
        plan: "D1",
        type: "Condo",
        beds: "2 Bed",
        interior: "765 - 769",
        exterior: "136 - 145",
        total: "905 - 910",
        level: ["3", "4-5", "6"],
        bedTypeId: "2bed"
    },
    {
        plan: "E",
        type: "Condo",
        beds: "2 Bed",
        interior: "720",
        exterior: "284",
        total: "1004",
        level: ["2"],
        bedTypeId: "2bed"
    },
    {
        plan: "E1",
        type: "Condo",
        beds: "2 Bed",
        interior: "720 - 730",
        exterior: "64 - 68",
        total: "788 - 794",
        level: ["3", "4-5", "6"],
        bedTypeId: "2bed"
    },
    {
        plan: "F",
        type: "Condo",
        beds: "2 Bed",
        interior: "785",
        exterior: "253",
        total: "1038",
        level: ["2"],
        bedTypeId: "2bed"
    },
    {
        plan: "F1",
        type: "Condo",
        beds: "2 Bed",
        interior: "783 - 793",
        exterior: "62 - 66",
        total: "849 - 855",
        level: ["3", "4-5", "6"],
        bedTypeId: "2bed"
    },
    {
        plan: "G",
        type: "Condo",
        beds: "Junior 3 Bed",
        interior: "794",
        exterior: "314",
        total: "1108",
        level: ["2"],
        bedTypeId: "jr3bed"
    },
    {
        plan: "H",
        type: "Condo",
        beds: "Studio",
        interior: "437 - 442",
        exterior: null,
        total: "437 - 442",  // Using interior value for total
        level: ["3", "4-5", "6"],
        bedTypeId: "studio"
    },
    {
        plan: "I",
        type: "Condo",
        beds: "3 Bed + Den",
        interior: "975 - 989",
        exterior: "93 - 160",
        total: "1082 - 1135",
        level: ["3", "4-5", "6"],
        bedTypeId: "3bedden"
    },
    {
        plan: "J1",
        type: "Condo",
        beds: "Junior 3 Bed",
        interior: "814",
        exterior: "64",
        total: "878",
        level: ["3", "4-5"],
        bedTypeId: "jr3bed"
    },
    {
        plan: "J2",
        type: "Condo",
        beds: "2 Bed + Den",
        interior: "809",
        exterior: "59",
        total: "868",
        level: ["6"],
        bedTypeId: "2bedden"
    },
    {
        plan: "K",
        type: "Condo",
        beds: "1 Bed",
        interior: "543 - 545",
        exterior: "66 - 71",
        total: "609 - 616",
        level: ["3", "4-5", "6"],
        bedTypeId: "1bed"
    }
];



export const bedsOptions = {
    condo: [
        { bed: "Studio", id: "studio" },
        { bed: "1 Bed", id: "1bed" },
        { bed: "1 Bed + Den", id: "1bedden" },
        { bed: "2 Bed", id: "2bed" },
        { bed: "2 Bed + Den", id: "2bedden" },
        { bed: "Junior 3 Bed", id: "jr3bed" },
        { bed: "3 Bed + Den", id: "3bedden" },
    ],
    townhome: [
        {
            bed: "3 Bed", id: "3bed"
        },
        {
            bed: "4 Bed", id: "4bed"
        }
    ]
};


export const LevelOptions = [
    "2", "3", "4-5", "6"
]