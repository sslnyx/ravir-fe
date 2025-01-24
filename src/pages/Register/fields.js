const required = true;
const fields = {
    text: [
        {
            type: "text",
            name: "contact[first_name]",
            label: "First Name",
            required,
        },
        {
            type: "text",
            name: "contact[last_name]",
            label: "Last Name",
            required,
        },
        {
            type: "email",
            name: "contact[email]",
            label: "Email",
            required,
        },
        {
            type: "phone",
            name: "contact[phone]",
            label: "Phone",
            required,
        },
        {
            type: "text",
            name: "contact[city]",
            label: "City",
            required,
        },
        {
            type: "text",
            name: "contact[postcode]",
            label: "Postal Code",
            required,
        },
    ],
    // realtor: {
    //     label: "Are you a realtor?",
    //     name: "realtor"
    // },
    // withRealtor: {
    //     label: "Are You Working With A Realtor?",
    //     name: "work_with_realtor"
    // },
    source: {
        label: "How Did You Hear About Us?*",
        name: "source",
        options: [
            "Walk / Drive-by",
            "Signage",
            "Friends / Family",
            "Realtor",
            "MLS",
            "Google Search",
            "Facebook",
            "Instagram",
            "Livabl.com / BuzzBuzzHome",
            "REW",
            "New Condo Guide",
            "Transit shelter",
            // "Other"
        ]
    },
    homeTypes: {
        label: "What Type of Home Are You Looking For?",
        name: "home_type",
        options: [
            "Studio",
            "2 Bedroom + Den",
            "1 Bedroom",
            "3 Bedroom ",
            "1 Bedroom + Den",
            "4 Bedroom",
            "2 Bedroom",
        ]
    }
};

export { fields }